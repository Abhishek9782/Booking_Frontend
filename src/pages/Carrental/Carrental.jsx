import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import Navbar from '../../componentes/Navbar/Navbar'
import MailList from '../../componentes/MailList/MailList'

import './Carrental.css'

const Carrental = ({ Carrental }) => {
    return (
        <div>
            <Navbar />
            <Header type="list" Carrental={Carrental} />
            <div className="carrentalContainer">
                hello here is some iformation about car Rental
            </div>
            <MailList />
            <Footer />

        </div>
    )
}

export default Carrental
