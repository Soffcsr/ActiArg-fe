import React from 'react'

const ItemsTable = (props) => {
    return (
        <tr className="componenteHora">
            <td className="workout-time">{props.workoutTime}</td>
            <td className="itemWorkout hover-bg Lunes">
                <div>
                    <span>{props.mondayHourClass}</span>
                    <h6>{props.mondayNameClass}</h6>
                    <h6>{props.mondayPlaces}</h6>
                    {
                        props.mondayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
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
                    <h6>{props.tuesdayPlaces}</h6>
                    {
                        props.tuesdayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
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
                    <h6>{props.wednesdayPlaces}</h6>
                    {
                        props.wednesdayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
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
                    <h6>{props.thursdayPlaces}</h6>
                    {
                        props.thursdayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
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
                    <h6>{props.fridayPlaces}</h6>
                    {
                        props.fridayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
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
                    <h6>{props.saturdayPlaces}</h6>
                    {
                        props.saturdayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
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
                    <h6>{props.sundayPlaces}</h6>
                    {
                        props.sundayAction === "yes" ?
                            <button type="button" className="actiar-btn2">
                                {props.sundayNameBtn}
                            </button>
                            : null
                    }
                </div>
            </td>
        </tr>
    )
}

export default ItemsTable