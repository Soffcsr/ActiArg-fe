import React from 'react'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel/Carousel'
import CardContent from '../component/Card/CardContent'
import ScrollArrow from '../component/ScrollArrow'

const Home = () => {
    return(    
        <div>
        <Navbar
            left={['Home', 'Gimnasios']}
            right={['Nosotros', 'Contactanos']}
        />
        <Carousel/>
        <CardContent/>
        <Footer/>
        <ScrollArrow/>
        </div>
    )
}

export default Home