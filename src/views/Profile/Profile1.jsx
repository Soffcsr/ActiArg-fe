import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import ItemCarousel from '../../component/Carousel/ItemCarousel'
import Activity from './Activity'
import Jumbotron from './Jumbotron'
import DatasJumbotron from '../../samples/DatasJumbotron.json'
import ItemsTable from './ItemsTable'
import Price from './Price'
import Contact from './Contact'
import Footer from '../../component/Footer'
import ScrollArrow from '../../component/ScrollArrow'
import Alert from '../../component/Alert'
import '../../App.css'
import { showActivities, showTurns, showCarousels, showPublicits, findGymById } from '../../actions'

const Profile1 = (props) => {
    const [isActive, setActive] = useState(false)

    let { id } = useParams();
    console.log("ID:::", id);

    const toggle = () => {
        setActive(!isActive)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        props.showActivities(id)
        props.showTurns(id)
        props.showPublicits(id)
        props.showCarousels(id)
        props.findGymById(id)
    }, [])


    console.log("error::::", props.error)
    console.log("link::", props.linkPago)


    if (props.error) {
        alert(props.error)
    } else {
        if (props.linkPago !== '') {
            window.open(props.linkPago)
        }
    }



    return (
        <div>
            <Navbar
                left={['Home', 'Gimnasios']}
                right={['Nosotros', 'Contactanos']}
            />

            {
                !sessionStorage.getItem('token') ? <Alert message="Para ver nuestros horarios y reservar una clase, por favor logueate"/> : null
            }

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol id="myCarousel-indicators" className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                {/* carouselbygym */}
                <div className="carousel-inner">
                    <div>
                        {
                            props.carousels.map((CarGym1Data) => {
                                return <ItemCarousel
                                    key={CarGym1Data.id}
                                    isActive={CarGym1Data.isActive}
                                    img={CarGym1Data.img}
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
            {/* publicitsbygym */}
            <div className="card-group">
                {props.publicits.map((DataActivity) => {
                    return <Activity
                        key={DataActivity.id}
                        img={DataActivity.img}

                        title={DataActivity.title}
                        description={DataActivity.description}
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
            {/* turnbygym */}
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

                                {
                                    props.turns ?
                                        props.turns.map((turn) => {
                                            console.log("turn::", turn)
                                            return <ItemsTable
                                                idgym={id}
                                                workoutTime={turn.workoutTime}
                                                idMonday={turn.days[0]._id}
                                                mondayHourClass={turn.days[0].HourClass}
                                                mondayNameClass={turn.days[0].NameClass}
                                                mondayPartialPlaces={turn.days[0].PartialPlaces}
                                                mondayTotallPlaces={turn.days[0].TotallPlaces}
                                                mondayAction={turn.days[0].Action}
                                                mondayNameBtn={turn.days[0].NameBtn}

                                                idTuesday={turn.days[1]._id}
                                                tuesdayHourClass={turn.days[1].HourClass}
                                                tuesdayNameClass={turn.days[1].NameClass}
                                                tuesdayPartialPlaces={turn.days[1].PartialPlaces}
                                                tuesdayTotallPlaces={turn.days[1].TotallPlaces}
                                                tuesdayAction={turn.days[1].Action}
                                                tuesdayNameBtn={turn.days[1].NameBtn}

                                                idWednesday={turn.days[2]._id}
                                                wednesdayHourClass={turn.days[2].HourClass}
                                                wednesdayNameClass={turn.days[2].NameClass}
                                                wednesdayPartialPlaces={turn.days[2].PartialPlaces}
                                                wednesdayTotallPlaces={turn.days[2].TotallPlaces}
                                                wednesdayAction={turn.days[2].Action}
                                                wednesdayNameBtn={turn.days[2].NameBtn}

                                                idThursday={turn.days[3]._id}
                                                thursdayHourClass={turn.days[3].HourClass}
                                                thursdayNameClass={turn.days[3].NameClass}
                                                thursdayPartialPlaces={turn.days[3].PartialPlaces}
                                                thursdayTotallPlaces={turn.days[3].TotallPlaces}
                                                thursdayAction={turn.days[3].Action}
                                                thursdayNameBtn={turn.days[3].NameBtn}

                                                idFriday={turn.days[4]._id}
                                                fridayHourClass={turn.days[4].HourClass}
                                                fridayNameClass={turn.days[4].NameClass}
                                                fridayPartialPlaces={turn.days[4].PartialPlaces}
                                                fridayTotallPlaces={turn.days[4].TotallPlaces}
                                                fridayAction={turn.days[4].Action}
                                                fridayNameBtn={turn.days[4].NameBtn}

                                                idSaturday={turn.days[5]._id}
                                                saturdayHourClass={turn.days[5].HourClass}
                                                saturdayNameClass={turn.days[5].NameClass}
                                                saturdayPartialPlaces={turn.days[5].PartialPlaces}
                                                saturdayTotallPlaces={turn.days[5].TotallPlaces}
                                                saturdayAction={turn.days[5].Action}
                                                saturdayNameBtn={turn.days[5].NameBtn}

                                                idSunday={turn.days[6]._id}
                                                sundayHourClass={turn.days[6].HourClass}
                                                sundayNameClass={turn.days[6].NameClass}
                                                sundayPartialPlaces={turn.days[6].PartialPlaces}
                                                sundayTotallPlaces={turn.days[6].TotallPlaces}
                                                sundayAction={turn.days[6].Action}
                                                sundayNameBtn={turn.days[6].NameBtn}
                                            />
                                        })
                                        : null
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* activitybyGym */}
            <div className="customPrice"
                style={{
                    backgroundImage: `url("https://i.ibb.co/41XkSm0/rolling-price.jpg")`,
                    backgroundAttachment: "fixed"
                }}>
                <h2 className="customPriceH2">Nuestros precios</h2>
                <button className="customBtn" onClick={toggle}>
                    {isActive ? 'MES' : 'CLASE'}
                </button>
                <div className="card-group">
                    {props.activities.map((DataPrice) => {
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
            {/* datos del gym */}
            <div>
                <Contact
                    phone={props.gym.phone}
                    adress={props.gym.address}
                    atention={props.gym.atention}
                />
            </div>

            <Footer />
            <ScrollArrow />
        </div>

    )
}

const mapStateToProps = state => {
    return {
        activities: state.activity.activities,
        turns: state.turns.turns,
        linkPago: state.turns.linkPago,
        error: state.turns.error,
        publicits: state.publicits.publicits,
        carousels: state.carousel.carousels,
        gym: state.gym.gym
    }
}

const Profile = connect(mapStateToProps, { showActivities, showTurns, showCarousels, showPublicits, findGymById })(Profile1)

export default Profile

