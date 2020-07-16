import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {animated, useTrail, useSpring} from 'react-spring'

const Navbar = (props) =>{
    const [isOpen, setIsOpen] = useState(window.screen.width > 696 ? true : false)

    
    const trailsleft = useTrail(2, {
        to: {
            opacity: isOpen ? 1 : 0, 
            transform: isOpen ? 'translate3d(-20px, 0, 0)' : 'translate3d(0px, 0, 0)'       
        }
    })

    const trailsright = useTrail(2, {
        to: {
            opacity: isOpen ? 1 : 0, 
            transform: isOpen ? 'translate3d(-20px, 0, 0)' : 'translate3d(0px, 0, 0)'       
        }
    })

    const fade = useSpring({
        opacity: isOpen ? 0.3 : 0,
        transform: isOpen ? 'scale(1.2, 1.2)' : 'scale(0, 0)'
    })

    let handleOnClick = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="d-flex flex-column flex-md-row bg-tansparent p-fixed" >
            <div className="d-flex flex-row d-md-none">
                <button className="navbar-toggler btn-outline-dark" type="button" data-toggle="collapse" data-target="#nav" onClick={handleOnClick}>
                    <div className="d-flex flex-row">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                </button>
                <div id="icon" className="d-flex flex-column d-md-none">
                    <img src="https://i.ibb.co/cvDL1jx/LOGO-ACTIAR2.png" alt="logo"/>
                </div>
            </div>
            {
                isOpen ?
                <div className="d-flex flex-column flex-md-row justify-content-center w-100" id="nav">
                    <nav className="d-md-flex w-md-50 w-100">
                        <ul className="navbar-list d-flex flex-md-row flex-column justify-content-md-end justify-content-center align-items-center w-100 mt-md-4">
                            {
                                props.left.map((item, index) => {
                                    return(
                                        <animated.li style={trailsleft[index]} className="d-flex flex-row justify-content-center mr-md-5 mt-md-3" key={index}><a href={`#${item}`}>{item}</a></animated.li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="d-md-block d-none mt-3 mr-md-4" id="icon">
                        <img src="https://i.ibb.co/cvDL1jx/LOGO-ACTIAR2.png" alt="logo"/>
                    </div>
                    <nav className="d-md-flex w-md-50 w-100">
                        <ul className="navbar-list d-flex flex-md-row flex-column justify-content-md-start justify-content-center align-items-center w-100 mt-md-4">
                            {
                                props.right.map((item, ind) => {
                                    return(
                                        <animated.li style={trailsright[ind]} className="d-flex flex-row justify-content-center mr-md-5 mt-md-3" key={ind}><a href={`#${item}`}>{item}</a></animated.li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <animated.div style={fade} className="position-absolute d-flex flex-row justify-content-center d-md-none" id="letter">
                        <h1>A</h1>
                    </animated.div>
                </div>
                : null
            }
            {
                !props.loged ? 
                <div className="d-none d-md-flex flex-row right">
                    <button type="button" className="btn actiar-btn mr-2">
                        <Link to="/login">Sing in</Link>
                    </button>
                    <button type="button" className="btn actiar-btn mr-2">
                        <Link to="/register">Sing up</Link>
                    </button>
                </div>
                : null
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        loged: state.auth.loged
    }
}

const NavbarComponent = connect(mapStateToProps)(Navbar)

export default NavbarComponent