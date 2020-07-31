import React from 'react'

const Contact = (props) => {
    return (
        <div id="Contactanos" className="map">
            <iframe title="myframe"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=General%20Paz%20576+(Rolling%20Code)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height="600" style={{border: 0}} allowfullscreen=""></iframe>
            <div className="map-contact-detalis">
                <div className="open-time">
                    <h5>Contacto</h5>
                    <ul>
                        <li>Teléfono: <span>{props.phone}</span></li>
                        <li>Dirección: <span>{props.adress}</span></li>
                        <li>Horarios: <span>{props.atention} </span></li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
export default Contact
