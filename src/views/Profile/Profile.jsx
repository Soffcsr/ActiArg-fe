import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

import { 
    showActivities, 
    showTurns, 
    showCarousels, 
    showPublicits, 
    findGymById,
    cleanActivities,
    cleanPublicits,
    cleanTurns 
} from '../../actions'

import '../../App.css'

import AdvertisementContainer from './components/AdvertisementContainer'
import ObjectivesContainer from './components/ObjectivesContainer'
import TurnsTable from './components/TurnsTable'
import ActivitiesContainer from './components/ActivitiesContainer'
import Contact from './components/Contact'
import Footer from '../../component/Footer'
import ScrollArrow from '../../component/ScrollArrow'
import Alert from '../../component/Alert'
import InConstruction from '../../component/InConstruction'
import Navbar from '../../component/Navbar'
import ItemCarousel from '../../component/Carousel/ItemCarousel'


const override = css`
    display: block;
    margin:auto;
    margin-top:200px;
    border-color: red;
`;


const Profile1 = (props) => {
    let { id } = useParams();

    useEffect(() => {
        clean();
        window.scrollTo(0, 0)
        props.showCarousels(id)
        props.findGymById(id)
        if(props.publicits.length === 0) {
            props.showPublicits(id)
        }
        
        if(props.turns.length === 0) {
            props.showTurns(id)
        }

        if(props.activities.length === 0) {
            props.showActivities(id)
        }
    }, [])

    const clean = () => {
        props.cleanActivities()
        props.cleanPublicits()
        props.cleanTurns()
    }

    if (props.error) {
        alert(props.error)
    } else {
        console.log(props.linkPago)
        if (props.linkPago !== '') {
            console.log(props.linkPago)
            window.open(props.linkPago)
        }
    }

    return (
        props.bandera == true ? 
        <div className="sweet-loading">
            <PacmanLoader
            css={override}
            size={150}
            color={"#EF602B"}
            loading={true}
            />
        </div>:
        <div>
            <Navbar
                left={['Home', 'Nosotros', 'Clases']}
                right={['Horarios', 'Precios', 'Contactanos']}
            />
            {   
               
                props.publicits.length !== 0 || props.activities.length !== 0 || props.turns.length !== 0 ?
                <div>
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

                    <AdvertisementContainer
                        publicits = {props.publicits}
                    />
    
                    <ObjectivesContainer/>
                    
                    <TurnsTable
                        turns = {props.turns}
                        idgym = {id}
                    />

                    <ActivitiesContainer
                        activities = {props.activities}
                    />
                    
                    <div>
                        <Contact
                            phone={props.gym.phone}
                            adress={props.gym.address}
                            atention={props.gym.atention}
                        />
                    </div>
                </div>
                : <InConstruction/>
            }
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
        gym: state.gym.gym,
        bandera: state.turns.bandera
    }
}

const Profile = connect(mapStateToProps, { showActivities, showTurns, showCarousels, showPublicits, findGymById, cleanActivities, cleanPublicits, cleanTurns })(Profile1)

export default Profile

