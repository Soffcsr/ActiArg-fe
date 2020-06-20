import React from 'react'
import '../../../App.css'

const Price = (props) => {
    return ( 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-price"><span className="signo">$</span>{props.price}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
     )
}
 
export default Price