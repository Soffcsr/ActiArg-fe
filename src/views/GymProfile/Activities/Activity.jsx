import React from 'react'
import '../../../App.css'

const Activity = (props) => {
    return (
        <div className="card cool-hovbot">
            <img className="card-img" src={props.img} alt={props.alt} />
            <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-description">{props.description}</p>
                {
                    props.action === "yes" ?
                        <button type="button" className="btn actiar-btn">
                            {props.nameBtn}
                        </button>
                        : null
                }
            </div>
        </div>
    )
}

export default Activity