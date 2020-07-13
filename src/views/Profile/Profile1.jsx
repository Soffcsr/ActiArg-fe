import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import Navbar from '../../component/Navbar'
import ItemCarousel from '../../component/Carousel/ItemCarousel'
import CarGym1Datas from '../../samples/CarGym1Datas.json'
import Activity from './Activity'
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
import { showActivities } from '../../actions'

const Profile1 = (props) => {
    const [isActive, setActive] = useState(false)

    let {id} = useParams();
    console.log("ID:::", id);

    const toggle = () => {
        setActive(!isActive)
    }

    useEffect(() => {
        props.showActivities(id)
    }, [])

    return (
        <div>
            <Navbar
                left={['Home', 'Gimnasios']}
                right={['Nosotros', 'Contactanos']}
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
                {props.activities.map((DataActivity) => {
                    return <Activity
                        key={DataActivity.id}
                        img={DataActivity.img}
                        alt={DataActivity.alt}
                        title={DataActivity.title}
                        description={DataActivity.description}
                        action={DataActivity.action}
                        nameBtn={DataActivity.nameBtn}
                        size={DataActivity.size}
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

            <div className="classtime-section class-time-table spad table-responsive">
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
                                            mondayHourClass={DataClass.days[0].HourClass}
                                            mondayNameClass={DataClass.days[0].NameClass}
                                            mondayPartialPlaces={DataClass.days[0].PartialPlaces}
                                            mondayTotalPlaces={DataClass.days[0].TotalPlaces}
                                            mondayAction={DataClass.days[0].Action}
                                            mondayNameBtn={DataClass.days[0].NameBtn}

                                            tuesdayHourClass={DataClass.days[1].HourClass}
                                            tuesdayNameClass={DataClass.days[1].NameClass}
                                            tuesdayPartialPlaces={DataClass.days[1].PartialPlaces}
                                            tuesdayTotalPlaces={DataClass.days[1].TotalPlaces}
                                            tuesdayAction={DataClass.days[1].Action}
                                            tuesdayNameBtn={DataClass.days[1].NameBtn}

                                            wednesdayHourClass={DataClass.days[2].HourClass}
                                            wednesdayNameClass={DataClass.days[2].NameClass}
                                            wednesdayPartialPlaces={DataClass.days[2].PartialPlaces}
                                            wednesdayTotalPlaces={DataClass.days[2].TotalPlaces}
                                            wednesdayAction={DataClass.days[2].Action}
                                            wednesdayNameBtn={DataClass.days[2].NameBtn}

                                            thursdayHourClass={DataClass.days[3].HourClass}
                                            thursdayNameClass={DataClass.days[3].NameClass}
                                            thursdayPartialPlaces={DataClass.days[3].PartialPlaces}
                                            thursdayTotalPlaces={DataClass.days[3].TotalPlaces}
                                            thursdayAction={DataClass.days[3].Action}
                                            thursdayNameBtn={DataClass.days[3].NameBtn}

                                            fridayHourClass={DataClass.days[4].HourClass}
                                            fridayNameClass={DataClass.days[4].NameClass}
                                            fridayPartialPlaces={DataClass.days[4].PartialPlaces}
                                            fridayTotalPlaces={DataClass.days[4].TotalPlaces}
                                            fridayAction={DataClass.days[4].Action}
                                            fridayNameBtn={DataClass.days[4].NameBtn}

                                            saturdayHourClass={DataClass.days[5].HourClass}
                                            saturdayNameClass={DataClass.days[5].NameClass}
                                            saturdayPartialPlaces={DataClass.days[5].PartialPlaces}
                                            saturdayTotalPlaces={DataClass.days[5].TotalPlaces}
                                            saturdayAction={DataClass.days[5].Action}
                                            saturdayNameBtn={DataClass.days[5].NameBtn}

                                            sundayHourClass={DataClass.days[6].HourClass}
                                            sundayNameClass={DataClass.days[6].NameClass}
                                            sundayPartialPlaces={DataClass.days[6].PartialPlaces}
                                            sundayTotalPlaces={DataClass.days[6].TotalPlaces}
                                            sundayAction={DataClass.days[6].Action}
                                            sundayNameBtn={DataClass.days[6].NameBtn}
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

const mapStateToProps = state =>{
    return{
        activities: state.activity.activities
    }
}

const Profile = connect(mapStateToProps, {showActivities})(Profile1) 

export default Profile

