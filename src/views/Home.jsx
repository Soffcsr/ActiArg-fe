import React from 'react'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel/Carousel'
import CardContent from '../component/Card/CardContent'


const Home = () => {
    return(
        <div>
            <Navbar/>
            <Carousel/>
            <CardContent/>
            <Footer/>
        </div>
    )
}

export default Home