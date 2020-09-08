import React from 'react'

import ItemsTable from './ItemsTable'

const TurnsTable = props => {
    return(
        <div id="Horarios" className="classtime-section class-time-table spad table-responsive">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="section-title">
                            <h2>Horarios</h2>
                        </div>
                    </div>
                </div>
                {
                    sessionStorage.getItem('token') ?
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
                                                return <ItemsTable
                                                    idgym={props.idgym}
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
                    :null
                }
            </div>
        </div>
    )
}

export default TurnsTable