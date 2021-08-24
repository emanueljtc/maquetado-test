import React from 'react'
import Navbar from '../../components/Navbar'
import DetailsProducts from './DetailsProducts'
import Feactures from './Features'
import Store from './Store'

const Landing = () => {
    return (
        <div>
            <Navbar />
            <DetailsProducts />
            <Feactures />
            <Store />
        </div>
    )
}

export default Landing
