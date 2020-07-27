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
            <div className="d-flex flex-row p-4 p-md-0" id="register-form">
                <div className="d-none d-md-flex w-50">
                    <img className="w-100" src="https://i.ibb.co/F72JpfH/1082b904-3c44-44ff-9a9e-d73f6ecbc006.jpg" alt="imagen-login"/>
                </div>
                <div className="d-flex flex-row justify-content-center form">
                    <form className="mt-4 p-4">
                        <div className="form-group text-left">
                            <input type="text" id="nombre" className="form-control" placeholder="Nombre" value={nombre} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="text" id="apellido" className="form-control" placeholder="Apellido" value={apellido} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="text" id="dni" className="form-control" placeholder="DNI" value={dni} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="text" id="telefono" className="form-control" placeholder="Teléfono de contacto" value={telefono} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={handleOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="password" id="passwordConf" className="form-control" placeholder="Confirme password" value={passwordConf} onChange={handleOnChange}></input>
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