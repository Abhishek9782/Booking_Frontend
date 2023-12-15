import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import Navbar from '../../componentes/Navbar/Navbar'
import MailList from '../../componentes/MailList/MailList'

import './Flights.css'

const Flights = ({ flights }) => {
    return (
        <div>
            <Navbar />
            <Header type="list" flightscss={flights} />
            <div className="flightsContainer">
                flights page is here
            </div>
            <MailList />
            <Footer />
        </div>
    )
}

export default Flights
