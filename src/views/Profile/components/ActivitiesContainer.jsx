import React, {useState} from 'react'

import Price from './Price'

const ActivitiesContainer = props => {
    const [isActive, setActive] = useState(false)

    const toggle = () => {
        setActive(!isActive)
    }

    return(
        <div id="Precios" 
            className="customPrice"
            style={{
                backgroundImage: `url("https://i.ibb.co/41XkSm0/rolling-price.jpg")`,
                backgroundAttachment: "fixed"
            }}
        >
            <h2 className="customPriceH2">Nuestros precios</h2>
            <button className="customBtn" onClick={toggle}>
                {isActive ? 'MES' : 'CLASE'}
            </button>
            <div className="card-group">
                {props.activities.map((DataPrice) => {
                    return <Price
                        title={DataPrice.title}
                        price={
                            isActive
                                ? DataPrice.price * 20
                                : DataPrice.price
                        }
                        description={DataPrice.description}
                    />
                })}
            </div>
        </div>
    )
}

export default ActivitiesContainer