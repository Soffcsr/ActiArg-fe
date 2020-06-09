import React, { Component } from 'react';


const ItemCard = (props) => {
  
    return(
     
      <div className={ 
        props.size === "big" ? "col-12 col-md-12 col-lg-12":
        props.size === "medium" ? "col-6 col-md-6 col-lg-6":
        "col-3 col-md-3 col-lg-3"}data-aos="fade-up">
          <a className="d-block photo-item" href="#" >
          <img src={props.img} className="img-fluid" alt={props.alt} />
          <div className="photo-text-more">
              <div className="photo-text-more">
                <h3 className="heading">{props.title}</h3>
                <span className="meta">{props.adress}</span><br/>
                <span className="meta">{props.description}</span>
              </div>
           </div>
          </a>
       </div>
    )
}

export default ItemCard