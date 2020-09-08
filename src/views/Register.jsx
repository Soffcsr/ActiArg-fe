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

    const [nombreValido, setNombreValido] = useState(true)
    const [apellidoValido, setApellidoValido] = useState(true)
    const [dniValido, setDniValido] = useState(true)
    const [telefonoValido, setTelefonoValido] = useState(true)
    const [emailValido, setEmailValido] = useState(true)
    const [passwordValido, setPasswordValido] = useState(true)
    const [passwordConfValido, setPasswordConfValido] = useState(true)

    
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

    const validate = e =>{
        switch (e.target.id) {
            case "nombre":
                let pattern_nombre = new RegExp('^[a-zA-Z ]{3,30}$')
                !pattern_nombre.test(e.target.value) ? setNombreValido(false) : setNombreValido(true) 
                break;
            case "apellido":
                let pattern_apellido = new RegExp('^[a-zA-Z ]{3,30}$')
                !pattern_apellido.test(e.target.value) ? setApellidoValido(false) : setApellidoValido(true)
                break;
            case "dni":
                // eslint-disable-next-line no-useless-escape
                let pattern_dni = new RegExp('^[0-9]{7,8}$')
                !pattern_dni.test(e.target.value) ? setDniValido(false) : setDniValido(true)
                break;
            case "telefono":
                let pattern_telefono = new RegExp('^[0-9]{7,13}$')
                !pattern_telefono.test(e.target.value) ? setTelefonoValido(false) : setTelefonoValido(true)
                break;
            case "email":
                // eslint-disable-next-line no-useless-escape
                let pattern_email = new RegExp('^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$')
                !pattern_email.test(e.target.value) ? setEmailValido(false) : setEmailValido(true)
                break;
            case "password":
                let pattern_password = new RegExp('^[a-zA-Z0-9]{8,30}$')
                !pattern_password.test(e.target.value) ? setPasswordValido(false) : setPasswordValido(true)
                break;
            case "passwordConf":
                e.target.value !== password ? setPasswordConfValido(false) : setPasswordConfValido(true)
                break;
            default:
                break;
        }
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
                        props.error ? <Alert message={props.message} status={500}/> 
                        : props.registered ? history.push('/login') : null
                    }
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="nombre" 
                            className="form-control" 
                            placeholder="Nombre" 
                            maxLength="30"
                            value={nombre} 
                            onChange={handleOnChange}
                            onBlur={validate}
                        />
                        {!nombreValido ? <small className="text-danger">Formato no valido</small> : null}
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="apellido" 
                            className="form-control" 
                            placeholder="Apellido" 
                            maxLength="30"
                            value={apellido} 
                            onChange={handleOnChange}
                            onBlur={validate}
                        />
                        {!apellidoValido ? <small className="text-danger">Formato no valido</small> : null}
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="dni" 
                            className="form-control" 
                            placeholder="DNI" 
                            maxLength="9"
                            value={dni} 
                            onChange={handleOnChange}
                            onBlur={validate}
                        />
                        {!dniValido ? <small className="text-danger">Formato no valido</small> : null}
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="text" 
                            id="telefono" 
                            className="form-control" 
                            placeholder="Teléfono de contacto"
                            maxLength="10" 
                            value={telefono} 
                            onChange={handleOnChange}
                            onBlur={validate}
                        />
                        {!telefonoValido ? <small className="text-danger">Formato no valido</small> : null}
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Email" 
                            maxLength="30"
                            required
                            value={email} 
                            onChange={handleOnChange}
                            onBlur={validate}
                            />
                            {!emailValido ? <small className="text-danger">Formato no valido</small> : null}
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Password" 
                            maxLength="30"
                            value={password} 
                            onChange={handleOnChange}
                            onBlur={validate}
                        />
                        {!passwordValido ? <small className="text-danger">Formato no valido</small> : null}
                    </div>
                    <div className="form-group text-left">
                        <input 
                            type="password" 
                            id="passwordConf" 
                            className="form-control" 
                            placeholder="Confirme password" 
                            maxLength="30"
                            value={passwordConf} 
                            onChange={handleOnChange}
                            onBlur={validate}
                        />
                        {!passwordConfValido ? <small className="text-danger">Las contraseñas no coinciden</small> : null}
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