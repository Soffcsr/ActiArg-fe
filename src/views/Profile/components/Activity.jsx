import React from 'react'

const Activity = (props) => {
    return (
        <div className="card cardActivity cool-hovbot" id="Actividades">
            <img className="card-img" src={props.img} alt={props.alt} />
            <div className="card-img-overlay">
                <h5 className="card-activity-title">{props.title}</h5>
                <p className="card-activity-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Activity