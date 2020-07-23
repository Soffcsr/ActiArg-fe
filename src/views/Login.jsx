import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Navbar from '../component/Navbar'
import Alert from '../component/Alert'
import {login} from '../actions/index'

const Login = props =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

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
    }

    useEffect(() => {
        
    }, [])

    return(
        <div>
            <Navbar
                left={['Home', 'Gimnasios']}
                right={['Nosotros', 'Contactanos']}
            />
            {/*<div id="login-form">
                <div>
                    <form>
                    
                    </form>
                </div>
            </div>*/}
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="d-none d-md-flex w-50 img">
                    <img className="w-100" src="https://www.65ymas.com/uploads/s1/19/85/96/handy-gym-un-mini-gimnasio-concebido-para-enfermos-de-parkinson-esta-revolucionando-el-fitness.jpeg" alt="imagen-login"/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                {
                    props.error ? <Alert message={props.error}/> 
                    : props.loged ? history.push('/') : null
                }
                    <form className="align-self-center">
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

const mapStateToProps = state => {
    return {
        loged: state.auth.loged,
        error: state.auth.error
    }
}

const LoginView = connect(mapStateToProps, {login})(Login)

export default LoginView