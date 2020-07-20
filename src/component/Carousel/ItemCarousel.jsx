import React from 'react'

const ItemCarousel = (props) => {
  return (
    <div className={`carousel-item ${props.isActive}`}>
      <img src={props.img} className="mg-fluid d-block w-100" alt={props.alt}/>
      <div className="carousel-caption">
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}

export default ItemCarousel