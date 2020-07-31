import React from 'react'

const Price = (props) => {
    return ( 
        <div className="card cardPrice">
            <div className="card-body cardPrice-body">
                <h5 className="card-title cardPrice-title">{props.title}</h5>
                <p className="card-price"><span className="signo">$</span>{props.price}</p>
                <p className="card-description cardPrice-description">{props.description}</p>
            </div>
        </div>
     )
}
 
export default Price