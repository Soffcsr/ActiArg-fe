import React from 'react'

const ItemCarousel = (props) => {
  return (
    <div className={`carousel-item ${props.isActive}`}>
      <img src={props.img} className="d-block img-fluid" alt={props.alt}/>
      <div className="carousel-caption">
        <h5 className="title">{props.title}</h5>
        <p className="description">{props.description}</p>
        {
          props.action === "yes" ?
            <button type="button" className="actiar-btn">
              { props.nameBtn }
            </button>
            : null
        }
      </div>
    </div>
  )
}

export default ItemCarousel