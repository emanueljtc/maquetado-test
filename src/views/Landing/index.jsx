import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import AboutProduct from './AboutProduct'
import DetailsProducts from './DetailsProducts'
import Feactures from './Features'
import Store from './Store'

const Landing = () => {
    return (
        <>
            <Navbar />
            <DetailsProducts />
            <Feactures />
            <Store />
            <AboutProduct />
            <Footer />
        </>
    )
}

export default Landing
