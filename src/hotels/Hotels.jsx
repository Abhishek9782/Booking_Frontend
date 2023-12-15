import './hotel.css'
import Navbar from '../componentes/Navbar/Navbar';
import Header from '../componentes/Header/Header';
import MailList from '../componentes//MailList/MailList';
import Footer from '../componentes/Footer/Footer';
import { useContext, useState } from 'react';
import UseFetch from '../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';
import Reserve from '../componentes/Reserve/Reserve';

// import faLocationDot from ""

const Hotels = () => {
  //  For the sliding images 
  const [sliderImage, setSliderImage] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [reserveOpen, setreserveOpen] = useState(false)
  const hotelId = location.pathname.split("/")[2]

  const { data, error, loading, reFetchData } = UseFetch(`/hotels/hotelserch/${hotelId}`)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  //  Date handle here
  const { date, option } = useContext(SearchContext);


  // console.log("date is here", date[0].startDate.getTime())
  const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
  function daysDiffernce(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECOND_PER_DAY)
    return diffDays;
  }
  const days = daysDiffernce(date[0]?.endDate, date[0]?.startDate)

  //  Image handle for css 
  function handleOpen(i) {
    setOpen(true)
    setSliderImage(i)
  }
  function setSliderImages(currentImage, dir) {
    if (dir === 'right') {
      setSliderImage(currentImage + 1)
      if (currentImage === data.photos.length - 1) {
        setSliderImage(0)
      }
    } else {
      setSliderImage(currentImage - 1)
      if (currentImage <= 0) {
        setSliderImage(data.photos.length - 1)
      }

    }

  }

  const handlebookingReserb = () => {
    if (user) {
      setreserveOpen(true)
    } else {
      navigate('/user-login')
    }

  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">

        {open &&
          <div className="slider">

            <i className="fa-solid fa-arrow-right rightArrow" onClick={() => { setSliderImages(sliderImage, "right") }} />
            <i className="fa-solid fa-arrow-left leftArrow" onClick={() => { setSliderImages(sliderImage, "left") }} />
            <i className="fa-regular fa-circle-xmark closeButton" onClick={() => { setOpen(false) }}></i>
            <div className="sliderWrapper">
              <img src={data.photos[sliderImage]} alt="image not found" />
            </div>
          </div>

        }
        {loading ? "Please Wait Hotel is Loading..." : <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <div className="hotelAdd">

              <span> <i class="fa-solid fa-location-dot"></i>  Elton st 125 New York</span>
              <span className="hotelDistance">
                Excellent location - {data.distance} from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over {data.cheapestPrice * days}₹ at this property and get a free airport taxi
              </span>
            </div>
            <div className="reserveButton">
              <button onClick={handlebookingReserb}>Reserve Book Now</button>
            </div>
          </div>


          <div className="hotelImages">
            {

              data.photos?.map((photo, i) => (
                <>
                  <div className="imageoghotel">
                    <img src={photo} alt="hotelimage" className='hotelimg' onClick={() => { handleOpen(i) }} />
                  </div>
                </>

              ))

            }
            <div className="fullSizeImage">
              <img src="" alt="" />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelDetailTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for {days}-night stay!</h1>
              <span>
                located in the real heart of karkow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>{data.cheapestPrice * days * option.room}₹ </b>({days} nights)
              </h2>
              <button onClick={handlebookingReserb}>Reserve Book now</button>
            </div>
          </div>

        </div>}
      </div>

      {
        reserveOpen && <Reserve opensetreserve={setreserveOpen} hotelId={hotelId} hotel={data} />
      }
      <MailList />
      <Footer />
    </div >

  )
}

export default Hotels
