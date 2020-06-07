import React from 'react'

const ItemCarousel = (props) => {
    return(
        <div className={`carousel-item ${props.isActive}`}>
          <img className="carousel-img d-block " src={props.img} alt={props.alt} />
          <div className="carousel-caption">
            <h5 className="title">{props.title}</h5>
            <button type="button" className="btn btn-primary">{props.nameBtn}</button>
          </div>
          <div>
          <hr/>
          <p className="carousel-p">{props.description}</p>
          </div>
        </div>
    )
}

export default ItemCarousel