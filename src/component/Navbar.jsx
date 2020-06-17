import React from 'react'

const Navbar = ({items}) =>{
    return(
        <div className="d-flex flex-column flex-md-row">
            <div className="d-flex flex-row d-md-none m-3">
                <button className="navbar-toggler btn-outline-dark" type="button" data-toggle="collapse" data-target="#nav">
                    <div className="d-flex flex-row">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                </button>
                <h3 className="m-2">Actiar</h3>
            </div>
            <nav className="collapse sticky-top bg-transparent d-md-flex w-100" id="nav">
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
        </div>
    )
}

export default Navbar