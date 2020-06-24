import React, { useState } from 'react'
import DatasJumbotron from '../../samples/DatasJumbotron.json'
import DataContact from '../../samples/DataContact.json'
import Jumbotron from '../GymProfile/Jumbotron/Jumbotron'
import Contact from '../GymProfile/Contact'
import Activity from './Activities/Activity'
import DataActivities from '../../samples/DataActivities.json'
import Price from './Price/Price'
import DataPrices from '../../samples/DataPrices.json'
import Navbar from '../../component/Navbar'
import Carousel from '../../component/Carousel/Carousel'
import ScrollArrow from '../../component/ScrollArrow'

const GymProfile = () => {
    const [isActive, setActive] = useState(false)

    const toggle = () => {
        setActive(!isActive)
    }

    return (
        <div>

            <Navbar
                items={['Home', 'Gimnasios', 'Contactanos']}
            />


            <div>
                <Carousel />
            </div>

            <div className="card-group">
                {DataActivities.map((DataActivity) => {
                    return <Activity
                        key={DataActivity.id}
                        img={DataActivity.img}
                        alt={DataActivity.alt}
                        title={DataActivity.title}
                        description={DataActivity.description}
                        action={DataActivity.action}
                        nameBtn={DataActivity.nameBtn}
                        size={DataActivities.size}
                    />
                })}
            </div>

            <div>
                {DatasJumbotron.map((data) => {
                    return <Jumbotron
                        img1={data.img1}
                        img2={data.img2}
                        img3={data.img3}
                        title={data.title}
                        subtitle={data.subtitle}
                        description={data.description}
                        objective1={data.objective1}
                        objectivedescription1={data.objectivedescription1}
                        objective2={data.objective2}
                        objectivedescription2={data.objectivedescription2}
                        objective3={data.objective3}
                        objectivedescription3={data.objectivedescription3}
                    />

                })}
            </div>


            <div className="customPrice"
                style={{
                    backgroundImage: `url("https://i.ibb.co/0jfhcrT/price-bg.jpg")`
                }}>
                <h2 className="customPriceH2">Nuestros precios</h2>

                <button className="customBtn" onClick={toggle}>
                    {isActive ? 'MES' : 'CLASE'}
                </button>

                <div className="card-group">
                    {DataPrices.map((DataPrice) => {
                        return <Price
                            title={DataPrice.title}
                            price={
                                isActive
                                    ? DataPrice.price * 20
                                    : DataPrice.price
                            }
                            description={DataPrice.description}
                        />
                    })}
                </div>
            </div>
            <div>
                {DataContact.map((data) => {
                    return <Contact
                        phone={data.phone}
                        adress={data.adress}
                        atention={data.atention}
                    />
                })}
            </div>
            <div>
               <ScrollArrow/>
            </div>
        </div>

    )
}

export default GymProfile

