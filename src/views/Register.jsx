import React, {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {register} from '../actions/index.js'

import Navbar from '../component/Navbar'
import Alert from '../component/Alert'

const Register = props =>{
    let history = useHistory()

    //lOCAL STATE
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConfig] = useState('')

    
    //CONTROL DEL FORMULARIO CON EL ESTADO
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
    }

    return(
        <div>
            <Navbar
                left={[]}
                right={[]}
            />
            <div className="d-flex flex-row p-4 p-md-0" id="register-form">
                <div className="d-none d-md-flex w-50">
                    <img className="w-100" src="https://i.ibb.co/Rpq96dD/a1b47ab8-0f04-420c-94d7-91ef9615ccda.jpg" alt="imagen-login"/>
                </div>
                <div className="d-flex flex-row justify-content-center form">
                <form className="mt-4 p-4">
                    {
                        props.error ? <Alert message={props.message}/> 
                        : props.registered ? history.push('/login') : null
                    }
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="nombre" 
                            className="form-control" 
                            placeholder="Nombre" 
                            value={nombre} 
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="apellido" 
                            className="form-control" 
                            placeholder="Apellido" 
                            value={apellido} 
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="dni" 
                            className="form-control" 
                            placeholder="DNI" 
                            value={dni} 
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="telefono" 
                            className="form-control" 
                            placeholder="Teléfono de contacto" 
                            value={telefono} 
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Email" 
                            value={email} 
                            onChange={handleOnChange}
                            />
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Password" 
                            value={password} 
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="password" 
                            id="passwordConf" 
                            className="form-control" 
                            placeholder="Confirme password" 
                            value={passwordConf} 
                            onChange={handleOnChange}
                        />
                    </div>
                        <button type="button" className="btn actiar-btn" onClick={register}>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        registered: state.auth.registered,
        message: state.auth.message,
        error: state.auth.error
    }
}

const RegisterView = connect(mapStateToProps, {register})(Register)

export default RegisterView