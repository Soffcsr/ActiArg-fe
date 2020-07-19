import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Navbar from '../component/Navbar'
import {login} from '../actions/index'

const Login = props =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerOnChange = e => {
        switch(e.target.id){
            case "email" :
                setEmail(e.target.value)
                break;
            case "password" :
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const login = () =>{
        props.login(email, password)
        console.log("redireccionar")
        return <Redirect to="/" />
    }

    return(
        <div>
            <Navbar
                left={['Home', 'Gimnasios']}
                right={['Nosotros', 'Contactanos']}
            />
            <div className="d-flex flex-row">
                <div className="w-50 img">
                    <img className="w-100" src="https://www.65ymas.com/uploads/s1/19/85/96/handy-gym-un-mini-gimnasio-concebido-para-enfermos-de-parkinson-esta-revolucionando-el-fitness.jpeg" alt="imagen-login"/>
                </div>
                <div className="d-flex flex-row justify-content-center w-50">
                    <form className="w-50 align-self-center">
                        <div className="form-group text-left">
                            <label>Email</label>
                            <input type="email" id="email" className="form-control" value={email} onChange={handlerOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Password</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={handlerOnChange}></input>
                        </div>
                        <button type="button" className="btn actiar-btn" onClick={login}>Iniciar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const LoginView = connect(null, {login})(Login)

export default LoginView