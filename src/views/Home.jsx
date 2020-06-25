import React from 'react'
import Navbar from '../component/Navbar'
import Carousel from '../component/Carousel/Carousel'
import CardContent from '../component/Card/CardContent'
import Footer from '../component/Footer'
import ScrollArrow from '../component/ScrollArrow'

const Home = () => {
    return(    
        <div>
        <Navbar
            items={['Home', 'Gimnasios', 'Contactanos']}
        />
        <Carousel/>
        <CardContent/>
        <Footer/>
        <ScrollArrow/>
        </div>
    )
}

export default Home