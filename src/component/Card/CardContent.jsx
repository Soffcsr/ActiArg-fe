import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import ItemCard from './ItemCard'
import {showGyms} from '../../actions/index'
// import Datas from '../../samples/DataCard.json'

const CardContent = (props) => {
    // console.log("gyms:::", gyms)
    //comment
    useEffect(() => {
        props.showGyms()
    }, [])

    return (
        <main class="main-content" id="Gimnasios">
            <Link to="/profile1">
                <div className="container-fluid photos">
                    <div className="row align-items-stretch">
                        {props.gyms.map((data) => {
                            return <ItemCard
                                        img={data.photo}
                                        alt="Image"
                                        title={data.name}
                                        description={data.description}
                                        adress={data.address}
                                        size={data.size}
                                        id={data._id}
                                    />
                        })}
                    </div>
                </div>
            </Link>
        </main>
    )
}

const mapStateToProps = state => {
    return {gyms: state.gym.gyms}
}

const GymsList = connect(mapStateToProps, {showGyms})(CardContent)

export default GymsList