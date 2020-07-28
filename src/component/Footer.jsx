import React, {useState} from 'react'
import {connect} from 'react-redux'

import {sendMail} from '../actions/index'

import Alert from '../component/Alert'

import '../App.css'

const Footer = (props) => {
    const [email, setEmail] = useState('')
    const [consult, setConsult] = useState('')

    const handleOnChange = e => {
        switch (e.target.id) {
            case "email":
                setEmail(e.target.value)
                break;
            case "consulta":
                setConsult(e.target.value)
                break;
            default:
                break;
        }
    }

    const send = () => {
        console.log("SENDDDD")
        props.sendMail(email, consult)
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="row boxFooter" id="Contactanos">
                    <div className="box1 col-md-5">
                        <h5><img src="https://i.ibb.co/cvDL1jx/LOGO-ACTIAR2.png" alt="logo" width="150" height="60"/>  </h5>
                        <div className="row">
                            <div className="col-6">
                                <p>Proyecto Actiar</p>
                            </div>
                        </div>
                        <ul className="nav">
                            <li className="nav-item"><a href="https://github.com/Soffcsr/ActiArg-fe" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                            <li className="nav-item"><a href="https://wa.me/5493816315733" className="nav-link"><i className="fa fa-whatsapp fa-lg"></i></a></li>
                            <li className="nav-item"><a href="https://www.instagram.com/proyecto.actiar/?hl=es-la" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-5">
                        <form>
                            {
                                props.message_send ?
                                <Alert
                                    message={props.message}
                                />
                                : null
                            }
                            <h5 className="text-md-center"> Contactanos</h5>
                            <fieldset className="form-group">
                                <input type="email" id="email" className="form-control" value={email} placeholder="Email" onChange={handleOnChange}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea className="form-control" id="consulta" value={consult} placeholder="Mensaje" onChange={handleOnChange}></textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                <button type="button" className="actiar-btn" onClick={send}>Enviar</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const mapStateToProps = state => {
    return {
        message: state.mail.message,
        message_send: state.mail.message_send
    }
}

const FooterComponent = connect(mapStateToProps, {sendMail})(Footer)

export default FooterComponent