import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({items}) =>{
    let leftNav = items.splice(0, (items.length/2))
    console.log("left:::", leftNav)
    let rightNav = items.splice(0, items.length)
    console.log("right:::", rightNav)

    let handleOnClick = () => {
    
    }

    return(
        <div className="d-flex flex-column flex-md-row bg-tansparent p-fixed" >
            <div className="d-flex flex-row d-md-none m-3">
                <button className="navbar-toggler btn-outline-dark" type="button" data-toggle="collapse" data-target="#nav" onClick={handleOnClick}>
                    <div className="d-flex flex-row">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                </button>
                <div id="icon" className="d-flex flex-column d-md-none">
                    <p id="stars">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span> 
                        <span>&#9733;</span>
                    </p>
                    <p id="title" spellCheck="false"><span>ACTIAR</span></p>
                </div>
            </div>
            <div className={`flex-column flex-md-row justify-content-center w-100 d-md-flex`} id="nav">
                <nav className="d-md-flex w-md-50 w-100">
                    <ul className="navbar-list d-flex flex-md-row flex-column justify-content-md-end justify-content-center align-items-center w-100 mt-md-4 mr-md-2">
                        {
                            leftNav.map((leftitem, index) => {
                                console.log("ITEM::", leftitem)
                                return(
                                    <li className="d-flex flex-row justify-content-center mr-md-5 mt-md-3" key={index}><a href>{leftitem}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="d-md-block d-none" id="icon">
                    <p id="stars">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span> 
                        <span>&#9733;</span>
                    </p>
                    <p id="title" spellCheck="false"><span>ACTIAR</span></p>
                </div>
                <nav className="d-md-flex w-md-50 w-100">
                    <ul className="navbar-list d-flex flex-md-row flex-column justify-content-md-start justify-content-center align-items-center w-100 mt-md-4">
                        {
                            rightNav.map((rightitem, ind) => {
                                return(
                                    <li className="d-flex flex-row justify-content-center mr-md-5 mt-md-3" key={ind}><a href>{rightitem}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className="d-none d-md-flex flex-row right">
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