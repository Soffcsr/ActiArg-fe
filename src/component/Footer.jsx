import React from 'react'
import '../App.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row boxFooter">
                    <div className="box1 col-md-5">
                        <h5><i className="fa fa-road"></i>  ActiAr</h5>
                        <div className="row">
                            <div className="col-6">
                                <p>Proyecto TeamWhite</p>
                            </div>
                        </div>
                        <ul className="nav">
                            <li className="nav-item"><a href="/#" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                            <li className="nav-item"><a href="/#" className="nav-link"><i className="fa fa-whatsapp fa-lg"></i></a></li>
                            <li className="nav-item"><a href="/#" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-5">
                        <form>
                        <h5 className="text-md-center"> Contactanos</h5>
                            <fieldset className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea className="form-control" id="exampleMessage" placeholder="Mensaje"></textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                <button className="actiar-btn">Enviar</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer