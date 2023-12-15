import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import MailList from '../../componentes/MailList/MailList'


const Mybooking = () => {
    return (
        <>
            <Navbar />
            <Header type="list" />

            <div>
                Here is Your Booking
            </div>

            <MailList />
            <Footer />

        </>
    )
}

export default Mybooking
