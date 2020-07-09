import React from 'react'
import Navbar from '../../component/Navbar'
import InConstruction from '../../component/InConstruction'
import '../../App.css'

const ProfileX = () => {
    return (
        <div>
            <Navbar
                items={['Home', 'Gimnasios', 'Contactanos']}
            />
            <InConstruction />
        </div>
    )
}

export default ProfileX

