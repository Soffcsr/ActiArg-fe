import React from 'react'
import Navbar from '../component/Navbar'

const Register = props =>{
    return(
        <div>
            <Navbar
                items={['Home', 'Gimnasios', 'Contactanos']}
            />
            <div className="d-flex flex-row">
                <div className="w-50 img">
                    <img className="w-100" src="https://www.65ymas.com/uploads/s1/19/85/96/handy-gym-un-mini-gimnasio-concebido-para-enfermos-de-parkinson-esta-revolucionando-el-fitness.jpeg" alt="imagen-login"/>
                </div>
                <div className="d-flex flex-row justify-content-center w-50">
                    <form className="w-50 align-self-center">
                        <div className="form-group text-left">
                            <label>Nombre *</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Apellido *</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group text-left">
                            <label>DNI *</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Telefono de contacto *</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Email *</label>
                            <input type="email" className="form-control"></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Password *</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Confirme password *</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <button type="button" className="btn actiar-btn">Iniciar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register