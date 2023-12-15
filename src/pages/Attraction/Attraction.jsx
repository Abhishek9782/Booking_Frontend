import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import Navbar from '../../componentes/Navbar/Navbar'
import MailList from '../../componentes/MailList/MailList'
import './Attraction.css'

const Attraction = ({ attraction }) => {
    return (
        <div>
            <Navbar />
            <Header type="list" attractioncss={attraction} />

            <div className="attractionContainer">
                Here is our attraction
            </div>
            <MailList />
            <Footer />

        </div>
    )
}

export default Attraction
