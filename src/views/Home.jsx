import React,{useEffect} from 'react'
import NavbarComponent from '../component/Navbar'
import Carousel from '../component/Carousel/Carousel'
import Line from '../component/Line'
import GymsList from '../component/Card/CardContent'
import AboutUs from '../component/AboutUs'
import Footer from '../component/Footer'
import ScrollArrow from '../component/ScrollArrow'
import { connect } from 'react-redux'


import { 
    cleanActivities,
    cleanPublicits,
    cleanTurns 
} from '../actions/index'

const Home = (props) => {
    useEffect(() => {
        cleanState();
    }, [])

    const cleanState = () => {
        props.cleanActivities()
        props.cleanPublicits()
        props.cleanTurns()
    }

    return(    
        <div>
            <NavbarComponent
                left={['Home', 'Gimnasios']}
                right={['Nosotros', 'Contactanos']}
            />
            <Carousel/>
            <Line/>
            <GymsList/>
            <AboutUs/>
            <Footer/>
            <ScrollArrow/>
        </div>
    )
}
const HomeView = connect(null, {cleanActivities, cleanPublicits, cleanTurns })(Home)
export default HomeView