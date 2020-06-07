import React from 'react'

const ItemCarousel = (props) => {
    return(
        <div className={`carousel-item ${props.isActive}`}>
          <img src={props.img} className="d-block w-100" alt={props.alt} />
          <div className="carousel-caption">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <button type="button" className="btn btn-primary">{props.nameBtn}</button>
          </div>
        </div>
    )
}

export default ItemCarousel