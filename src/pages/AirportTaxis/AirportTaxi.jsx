import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import Navbar from '../../componentes/Navbar/Navbar'
import MailList from '../../componentes/MailList/MailList'

import './AirportTaxi.css'

const AirportTaxi = ({ airportTaxi }) => {
    return (
        <div>
            <Navbar />
            <Header type="list" airportTaxi={airportTaxi} />
            <div className="airporTaxiContainer">
                Helllo here is airport taxi constainer
            </div>
            <MailList />
            <Footer />

        </div>
    )
}

export default AirportTaxi
