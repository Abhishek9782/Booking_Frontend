import './searchItem.css'
import { Link } from 'react-router-dom'

const SearchItem = ({ hotel }) => {
    return (
        <div className='searchItem'>
            <img className="searchImage" src={hotel?.photos[0]} alt="" />
            <div className="searchDesc">
                <h1 className="setitle">{hotel.name}</h1>
                <span className="seDistance">{hotel.distance} from center</span>
                <span className="seTaxiOption">Free Airport taxi</span>
                <span className="seSubtitle">
                    {hotel.title}
                </span>
                <span className="isFetures">
                    {hotel.desc}
                </span>
                <span className="seCancelOp">Free Cancellation</span>
                <span className='secancelOpsubtitle'>
                    You Can Cancel later , so lock in this great price Today !
                </span>
            </div>
            <div className="searchDetails">
                {hotel.rating && <div className="serchRating">
                    <span>Excellecnt</span>
                    <button>8.9</button>
                </div>}
                <div className="searchDetailsTax">
                    <span className="searchPrice">{hotel.cheapestPrice}₹</span>
                    <span className="searchextOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${hotel._id}`} className='linkOfAvaility'>
                        <button>See Avalablity</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default SearchItem
