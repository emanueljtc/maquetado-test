import React from 'react'
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
        </>
    )
}

export default Landing
