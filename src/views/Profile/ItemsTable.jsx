import React from 'react'
import {connect} from 'react-redux'
import {reserve} from '../../actions/index'

const ItemsTable = (props) => {

    const reserver = (id, classname) => {
        props.reserve(id, props.idgym, classname)
    }

    return (
        <tr className="componenteHora">
            <td className="workout-time">{props.workoutTime}</td>
            <td className="itemWorkout hover-bg Lunes">
                <div>
                    <span>{props.mondayHourClass}</span>
                    <h6>{props.mondayNameClass}</h6>
                    {
                        props.mondayPartialPlaces !== null 
                        ? <h6>{props.mondayPartialPlaces} {"de "+props.mondayTotallPlaces}</h6> 
                        : null
                    } 
                    {
                        props.mondayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idMonday, props.mondayNameClass)}>
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
                    {
                        props.tuesdayPartialPlaces !== null 
                        ? <h6>{props.tuesdayPartialPlaces} {"de "+props.tuesdayTotallPlaces}</h6> 
                        : null
                    }
                    {
                        props.tuesdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idTuesday, props.tuesdayNameClass)}>
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
                    {
                        props.wednesdayPartialPlaces !== null 
                        ? <h6>{props.wednesdayPartialPlaces} {"de "+props.wednesdayTotallPlaces}</h6> 
                        : null
                    }
                    {
                        props.wednesdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idWednesday, props.wednesdayNameClass)}>
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
                    {
                        props.thursdayPartialPlaces !== null 
                        ? <h6>{props.thursdayPartialPlaces} {"de "+props.thursdayTotallPlaces}</h6> 
                        : null
                    }
                    {
                        props.thursdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idThursday, props.thursdayNameClass)}>
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
                    {
                        props.fridayPartialPlaces !== null 
                        ? <h6>{props.fridayPartialPlaces} {"de "+props.fridayTotallPlaces}</h6> 
                        : null
                    }
                    {
                        props.fridayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idFriday, props.fridayNameClass)}>
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
                    {
                        props.saturdayPartialPlaces !== null 
                        ? <h6>{props.saturdayPartialPlaces} {"de "+props.saturdayTotallPlaces}</h6> 
                        : null
                    }
                    {
                        props.saturdayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idSaturday, props.saturdayNameClass)}>
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
                    {
                        props.sundayPartialPlaces !== null 
                        ? <h6>{props.sundayPartialPlaces} {"de "+props.sundayTotallPlaces}</h6> 
                        : null
                    }
                    {
                        props.sundayAction === "yes" ?
                            <button type="button" className="actiar-btn2" onClick={(e) => reserver(props.idSunday, props.sundayNameClass)}>
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