import React from 'react'
import Navbar from '../components/Navbar'

const Home = props => {
    return(
        <Navbar
            items={['Home', 'Gimnasios', 'Contactanos']}
        />
    )
}

export default Home