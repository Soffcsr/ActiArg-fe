import React, {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {register} from '../actions/index.js'
import Navbar from '../component/Navbar'

const Register = props =>{
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConfig] = useState('')

    let history = useHistory()

    const handleOnChange = e => {
        switch (e.target.id) {
            case "nombre":
                setNombre(e.target.value)
                break;
            case "apellido":
                setApellido(e.target.value)
                break;
            case "dni":
                setDni(e.target.value)
                break;
            case "telefono":
                setTelefono(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            case "passwordConf":
                setPasswordConfig(e.target.value)
                break;
            default:
                break;
        }
    }

    const register = () => {
        props.register(nombre, apellido, dni, telefono, email, password, passwordConf)
        if(props.registered){
            history.push('/login')
        }
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
                            <label>Nombre *</label>
                            <input type="text" id="nombre" className="form-control" value={nombre} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Apellido *</label>
                            <input type="text" id="apellido" className="form-control" value={apellido} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>DNI *</label>
                            <input type="text" id="dni" className="form-control" value={dni} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Telefono de contacto *</label>
                            <input type="text" id="telefono" className="form-control" value={telefono} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Email *</label>
                            <input type="email" id="email" className="form-control" value={email} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Password *</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <label>Confirme password *</label>
                            <input type="password" id="passwordConf" className="form-control" value={passwordConf} onChange={handleOnChange}></input>
                        </div>
                        <button type="button" className="btn actiar-btn" onClick={register}>Iniciar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        registered: state.auth.registered,
        message: state.auth.message
    }
}

const RegisterView = connect(mapStateToProps, {register})(Register)

export default RegisterView