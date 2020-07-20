import React from 'react'
import ItemCarousel from './ItemCarousel'
import CarHomeDatas from '../../samples/CarHomeDatas.json'
import '../../App.css'

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol id="myCarousel-indicators" className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">

                <div>
                    {
                        CarHomeDatas.map((CarHomeData) => {
                                return <ItemCarousel
                                    key={CarHomeData.id}
                                    isActive={CarHomeData.isActive}
                                    img={CarHomeData.img}                     
                                    description={CarHomeData.description}
                                    action={CarHomeData.action}
                                />
                    })}
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Carousel