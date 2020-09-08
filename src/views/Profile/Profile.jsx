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
    findGymById
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


const Profile = ({publicits, turns, activities, error, linkPago, carousels, gym, bandera,showActivities, showCarousels, findGymById, showPublicits, showTurns}) => {
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
        showCarousels(id)
        findGymById(id)
        if(publicits.length === 0) {
            showPublicits(id)
        }
        
        if(turns.length === 0) {
            showTurns(id)
        }

        if(activities.length === 0) {
            showActivities(id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) {
        alert(error)
    } else {
        if (linkPago !== '') {
            window.open(linkPago)
        }
    }

    return (
        bandera === true ? 
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
                publicits.length !== 0 || activities.length !== 0 || turns.length !== 0 ?
                <div>
                {
                    !sessionStorage.getItem('token') ? <Alert message="Para ver nuestros horarios y reservar una clase, por favor logueate" status={500}/> : null
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
                                    carousels.map((CardGym) => {
                                        return <ItemCarousel
                                            key={CardGym.id}
                                            isActive={CardGym.isActive}
                                            img={CardGym.img}
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
                        publicits = {publicits}
                    />
    
                    <ObjectivesContainer/>
                    
                    <TurnsTable
                        turns = {turns}
                        idgym = {id}
                    />

                    <ActivitiesContainer
                        activities = {activities}
                    />
                    
                    <div>
                        <Contact
                            phone={gym.phone}
                            adress={gym.address}
                            atention={gym.atention}
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

const ProfileView = connect(mapStateToProps, { showActivities, showTurns, showCarousels, showPublicits, findGymById })(Profile)

export default ProfileView

