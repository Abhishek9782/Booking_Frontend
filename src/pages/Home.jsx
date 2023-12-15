import './home.css'
import Navbar from '../componentes/Navbar/Navbar'
import Header from '../componentes/Header/Header'
import Fetured from '../componentes/Fetured/Featured'
import Propertylist
  from '../componentes/property/Propertylist'
import FeturedProperty from '../componentes/FeturedProperty/FeturedProperty'
import MailList from '../componentes/MailList/MailList'
import DiscountBox from '../componentes/DiscountBox/DiscountBox'
import Destionation from '../componentes/Destination/Destionation'
import Footer from '../componentes/Footer/Footer'




const Home = ({ home }) => {


  return (
    <div>
      <Navbar />
      <Header homecss={home} />
      <div className="homeContainer">
        <Fetured />
        <h1 className="homeTitle">
          Browse By Property Type
        </h1>
        <Propertylist />
        <h1 className="homeTitle homeguest">
          Best Hotels in Jaipur For  Homes Guest Love
        </h1>
        <FeturedProperty />
        <DiscountBox />
        <h1 className='Destinationtitle'> Destination We Love</h1>
        <Destionation />
        <MailList />
        <Footer />

      </div>
    </div>
  )
}

export default Home
