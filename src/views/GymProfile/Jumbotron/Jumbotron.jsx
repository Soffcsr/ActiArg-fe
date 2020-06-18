import React from 'react'

const Jumbotron = (props) => {
    return (
        <div className="home-about spad">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="about-text">
                            <h2>{props.title}</h2>
                            <p className="short-details">{props.subtitle}</p>
                            <p className="long-details">{props.description}</p>

                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12">
                        <ul className="ch-grid">
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front" style={{ backgroundImage: `url(${props.img1})` }}></div>
                                        <div className="ch-info-back">
                                            <h3>{props.objective1}</h3>
                                            <p>{props.objectivedescription1}</p>
                                          
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front" style={{ backgroundImage: `url(${props.img2})` }}></div>
                                        <div className="ch-info-back">
                                        <h3>{props.objective2}</h3>
                                            <p>{props.objectivedescription2}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front" style={{ backgroundImage: `url(${props.img3})` }}></div>
                                        <div className="ch-info-back">
                                        <h3>{props.objective3}</h3>
                                            <p>{props.objectivedescription3}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jumbotron