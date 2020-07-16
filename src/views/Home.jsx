import React from 'react'
import NavbarComponent from '../component/Navbar'
import Carousel from '../component/Carousel/Carousel'
import GymsList from '../component/Card/CardContent'
import Footer from '../component/Footer'
import ScrollArrow from '../component/ScrollArrow'

const Home = () => {
    return(    
        <div>
        <NavbarComponent
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