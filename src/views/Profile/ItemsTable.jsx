import React from 'react'
import {connect} from 'react-redux'
import {reserve} from '../../actions/index'

const ItemsTable = (props) => {

    const reserver = (id) => {
        props.reserve(id, props.idgym)
    }

    return (
        <tr className="componenteHora">
            <td className="workout-time">{props.workoutTime}</td>
            <td className="itemWorkout hover-bg Lunes">
                <div>
                    <span>{props.mondayHourClass}</span>
                    <h6>{props.mondayNameClass}</h6>
                    <h6>{props.mondayPartialPlaces}{props.mondayTotalPlaces}</h6>
                    {
                        props.mondayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idMonday)}>
                                {props.mondayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
            <td className="itemWorkout hover-bg Martes" >
                <div>
                    <span>{props.tuesdayHourClass}</span>
                    <h6>{props.tuesdayNameClass}</h6>
                    <h6>{props.tuesdayPartialPlaces}{props.tuesdayTotalPlaces}</h6>
                    {
                        props.tuesdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idTuesday)}>
                                {props.tuesdayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
            <td className="itemWorkout hover-bg Miercoles" >
                <div>
                    <span>{props.wednesdayHourClass}</span>
                    <h6>{props.wednesdayNameClass}</h6>
                    <h6>{props.wednesdayPartialPlaces}{props.wednesdayTotalPlaces}</h6>
                    {
                        props.wednesdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idWednesday)}>
                                {props.wednesdayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
            <td className="itemWorkout hover-bg Jueves" >
                <div>
                    <span>{props.thursdayHourClass}</span>
                    <h6>{props.thursdayNameClass}</h6>
                    <h6>{props.thursdayPartialPlaces}{props.thursdayTotalPlaces}</h6>
                    {
                        props.thursdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idThursday)}>
                                {props.thursdayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
            <td className="itemWorkout hover-bg Viernes" >
                <div>
                    <span>{props.fridayHourClass}</span>
                    <h6>{props.fridayNameClass}</h6>
                    <h6>{props.fridayPartialPlaces}{props.fridayTotalPlaces}</h6>
                    {
                        props.fridayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idFriday)}>
                                {props.fridayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
            <td className="itemWorkout hover-bg Sabado" >
                <div>
                    <span>{props.saturdayHourClass}</span>
                    <h6>{props.saturdayNameClass}</h6>
                    <h6>{props.fridayPartialPlaces}{props.fridayTotalPlaces}</h6>
                    {
                        props.saturdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idSaturday)}>
                                {props.saturdayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
            <td className="itemWorkout hover-bg Domingo" >
                <div>
                    <span>{props.sundayHourClass}</span>
                    <h6>{props.sundayNameClass}</h6>
                    <h6>{props.sundayPartialPlaces}{props.sundayTotalPlaces}</h6>
                    {
                        props.sundayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idSunday)}>
                                {props.sundayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
        </tr>
    )
}

const ItemsTableComponent = connect(null, {reserve})(ItemsTable)

export default ItemsTableComponent