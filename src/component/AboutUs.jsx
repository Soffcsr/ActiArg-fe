import React from 'react'

const AboutUs = () => {
    return (
        <section className="AbouUs" >
            <h2 className="teamwhite">Team White</h2>
            <div className="container" id="Nosotros">
                <div className="row">

                    <div className="col-md-4">
                        <div className="card profile-card-1">
                            <img src="https://i.ibb.co/7CfY2P7/Cheers-clinking-of-friends-with-beer-drink-in-party-night-after-work-on-colorful-blur-background-Gro.jpg" alt="profile-sample1" className="background" />
                            <img src="https://i.ibb.co/bsvx1Dv/pp-1.jpg" alt="profilee" className="profile" />
                            <div className="card-content">
                                <h2>Melisa Gramajo<small>MERN Stack</small></h2>
                                <div className="icon-block"> <a href="https://wa.me/5493815377904"><i className="fa fa-whatsapp"></i></a><a href="mailto:melisargramajo@gmail.com">  <i className="fa fa-envelope"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card profile-card-1">
                            <img src="https://scstylecaster.files.wordpress.com/2020/03/concert-unsplash.jpg?w=670&h=503" alt="profile-sample1" className="background" />
                            <img src="https://i.ibb.co/vwqK69x/d6dfad63-ca95-496f-988a-dc8dcb6fab52.jpg" alt="profilee" className="profile" />
                            <div className="card-content">
                                <h2>Sofia Ruiz<small>MERN STACK</small></h2>
                                <div className="icon-block"> <a href="https://wa.me/5493813978410"><i className="fa fa-whatsapp"></i></a><a href="mailto:soff.csr@gmail.com">  <i className="fa fa-envelope"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card profile-card-1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8joF06-Zv5VprpM_ZbBIzg4Rlg4AGtd6lAw&usqp=CAU" alt="profile-sample1" className="background" />
                            <img src="https://i.ibb.co/yBfd07B/pp-3.jpg" alt="profilee" className="profile" />
                            <div className="card-content">
                                <h2>Walter Celiz<small> MERN Stack</small></h2>
                                <div className="icon-block"> <a href="https://wa.me/5493816315733"><i className="fa fa-whatsapp"></i></a><a href="mailto:walterceliz93@gmail.com">  <i className="fa fa-envelope"></i></a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs