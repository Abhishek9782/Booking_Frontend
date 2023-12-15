import UseFetch from '../../hooks/useFetch';
import './featured.css'
const featured = () => {
  const { data, error, loading } = UseFetch('hotels/currentCityhotel/count?cities=jaipur,uttarpradesh,goa');

  return (
    <div className='fetaured'>
      <div className="feturedItem">
        <img src="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg" alt="" className='feturedImg' />
        <div className="feturedTitles">
          <h1>Uttar-Pradesh</h1>
          <h3>{data[1]} Hotels</h3>
        </div>
      </div>

      <div className="feturedItem">
        <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" alt="" className='feturedImg' />
        <div className="feturedTitles">
          <h1>Jaipur</h1>
          <h3>{data[0]} Hotels</h3>
        </div>
      </div>
      <div className="feturedItem">
        <img src="https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_640.jpg" alt="" className='feturedImg' />
        <div className="feturedTitles">
          <h1>Goa</h1>
          <h3>{data[2]} Hotels</h3>
        </div>
      </div>
    </div>
  );
};

export default featured;
