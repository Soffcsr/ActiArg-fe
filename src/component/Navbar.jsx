import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({items}) =>{
    return(
        <div className="d-flex flex-column flex-md-row sticky-top bg-tansparent" >
            <div className="d-flex flex-row d-md-none m-3">
                <button className="navbar-toggler btn-outline-dark" type="button" data-toggle="collapse" data-target="#nav">
                    <div className="d-flex flex-row">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                </button>
                <h3 className="m-2">Actiar</h3>
            </div>
            <nav className="collapse d-md-flex w-100" id="nav">
                <ul className="navbar-list d-flex flex-md-row flex-column justify-content-center align-items-start w-100">
                    {
                        items.map((item, index) => {
                            return(
                                <li><a href>{item}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="d-flex flex-row right">
                <button type="button" className="btn actiar-btn mr-2">
                    <Link to="/login">Sing in</Link>
                </button>
                <button type="button" className="btn actiar-btn mr-2">
                    <Link to="/register">Sing up</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar