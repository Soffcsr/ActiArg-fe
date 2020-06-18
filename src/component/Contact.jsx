import React from 'react'


const Contact = (props) => {
    return (
        <div className="map">
        <iframe
            src="https://maps.google.com/maps?q=alta%20intensidad&t=&z=15&ie=UTF8&iwloc=&output=embed" height="600" style={{border: 0}} allowfullscreen=""></iframe>
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