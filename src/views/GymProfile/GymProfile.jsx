import React, { useState } from 'react'
import Navbar from '../../component/Navbar'
import ItemCarousel from '../../component/Carousel/ItemCarousel'
import CarGym1Datas from '../../samples/CarGym1Datas.json'
import Activity from './Activity'
import DataActivities from '../../samples/DataActivities.json'
import Jumbotron from './Jumbotron'
import DatasJumbotron from '../../samples/DatasJumbotron.json'
import ItemsTable from './ItemsTable'
import DataClasses from '../../samples/DataClasses.json'
import Price from './Price'
import DataPrices from '../../samples/DataPrices.json'
import Contact from './Contact'
import DataContact from '../../samples/DataContact.json'
import Footer from '../../component/Footer'
import ScrollArrow from '../../component/ScrollArrow'
import '../../App.css'

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

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol id="myCarousel-indicators" className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div>
                        {
                            CarGym1Datas.map((CarGym1Data) => {
                                return <ItemCarousel
                                    key={CarGym1Data.id}
                                    isActive={CarGym1Data.isActive}
                                    img={CarGym1Data.img}
                                    alt={CarGym1Data.alt}
                                    title={CarGym1Data.title}
                                    description={CarGym1Data.description}
                                    action={CarGym1Data.action}
                                    nameBtn={CarGym1Data.nameBtn}
                                />
                            })}
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
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

            <div className="classtime-section class-time-table spad">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="section-title">
                            <h2>Horarios</h2>
                        </div>
                    </div>
                </div>

                <div className="classtime-table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miercoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sabado</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {DataClasses
                                .map((DataClass) => {
                                return <ItemsTable
                                    key="id"
                                    workoutTime={DataClass.workoutTime}
                                    mondayHourClass={DataClass.mondayHourClass}
                                    mondayNameClass={DataClass.mondayNameClass}
                                    mondayPlaces={DataClass.mondayPlaces}
                                    mondayAction={DataClass.mondayAction}
                                    mondayNameBtn={DataClass.mondayNameBtn}
                                    
                                    tuesdayHourClass={DataClass.tuesdayHourClass}
                                    tuesdayNameClass={DataClass.tuesdayNameClass}
                                    tuesdayPlaces={DataClass.tuesdayPlaces}
                                    tuesdayAction={DataClass.tuesdayAction}
                                    tuesdayNameBtn={DataClass.tuesdayNameBtn}
                                    
                                    wednesdayHourClass={DataClass.wednesdayHourClass}
                                    wednesdayNameClass={DataClass.wednesdayNameClass}
                                    wednesdayPlaces={DataClass.wednesdayPlaces}
                                    wednesdayAction={DataClass.wednesdayAction}
                                    wednesdayNameBtn={DataClass.wednesdayNameBtn}
            
                                    thursdayHourClass={DataClass.thursdayHourClass}
                                    thursdayNameClass={DataClass.thursdayNameClass}
                                    thursdayPlaces={DataClass.thursdayPlaces}
                                    thursdayAction={DataClass.thursdayAction}
                                    thursdayNameBtn={DataClass.thursdayNameBtn}
            
                                    fridayHourClass={DataClass.fridayHourClass}
                                    fridayNameClass={DataClass.fridayNameClass}
                                    fridayPlaces={DataClass.fridayPlaces}
                                    fridayAction={DataClass.fridayAction}
                                    fridayNameBtn={DataClass.fridayNameBtn}
            
                                    saturdayHourClass={DataClass.saturdayHourClass}
                                    saturdayNameClass={DataClass.saturdayNameClass}
                                    saturdayPlaces={DataClass.saturdayPlaces}
                                    saturdayAction={DataClass.saturdayAction}
                                    saturdayNameBtn={DataClass.saturdayNameBtn}
            
                                    sundayHourClass={DataClass.sundayHourClass}
                                    sundayNameClass={DataClass.sundayNameClass}
                                    sundayPlaces={DataClass.sundayPlaces}
                                    sundayAction={DataClass.sundayAction}
                                    sundayNameBtn={DataClass.sundayNameBtn}
                                />
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

            <div className="customPrice"
                style={{
                    backgroundImage: `url("https://i.ibb.co/0jfhcrT/price-bg.jpg")`,
                    backgroundAttachment: "fixed"
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

            <Footer />
            <ScrollArrow />
        </div>

    )
}

export default GymProfile

