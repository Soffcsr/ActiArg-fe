import React from 'react'
import Navbar from '../component/Navbar'
import Carousel from '../component/Carousel/Carousel'
import GymsList from '../component/Card/CardContent'
import Footer from '../component/Footer'
import ScrollArrow from '../component/ScrollArrow'

const Home = () => {
    return(    
        <div>
        <Navbar
            left={['Home', 'Gimnasios']}
            right={['Nosotros', 'Contactanos']}
        />
        <Carousel/>
        <GymsList/>
        <Footer/>
        <ScrollArrow/>
        </div>
    )
}

export default Home