import './FeturedProperty.css'
import UseFetch from '../../hooks/useFetch'
const FeturedProperty = () => {
  const { data, error, loading } = UseFetch('/hotels?featured=true&limit=4')

  return (
    <div className='fp'>
      {loading ? "Please Wait Best Hotel Finding... " :
        <>
          {
            data.map((bestHotels) => (
              <div className="fpitem" key={bestHotels._id}>
                <img className="fpImaage" src={bestHotels?.photos[0]} alt="" />
                <span className='fpname'>{bestHotels.name}</span>
                <span className='fpcity'>{bestHotels.city}</span>
                <span className='fpPrice'>Starting {bestHotels.cheapestPrice}₹</span>

                {bestHotels.rating &&
                  <div className="fpRating">


                    {
                      Math.round(bestHotels.rating) == 1 ?
                        <>
                          <button>{bestHotels.rating}</button>
                          <span style={{ color: "red" }}>Poor</span>
                        </>
                        :
                        Math.round(bestHotels.rating) === 2 ? <>
                          <button>{bestHotels.rating}</button>
                          <span style={{ color: "red" }}>Weak</span>
                        </> :
                          Math.round(bestHotels.rating) === 3 ? <>
                            <button>{bestHotels.rating}</button>
                            <span style={{ color: "lightgreen" }}>Good</span>
                          </> :
                            Math.round(bestHotels.rating) === 4 ? <>
                              <button>{bestHotels.rating}</button>
                              <span style={{ color: "#003580" }}>Very Good</span>
                            </> :
                              <>
                                <button>{bestHotels.rating}</button>
                                <span style={{ color: "#003580" }}>Excellent</span>
                              </>

                    }
                  </div>}
              </div>
            ))
          }
        </>

      }
    </div >
  )
}

export default FeturedProperty
