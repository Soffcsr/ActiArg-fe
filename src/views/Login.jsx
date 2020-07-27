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
                left={[]}
                right={[]}
            />
            {/*<div id="login-form">
                <div>
                    <form>
                    
                    </form>
                </div>
            </div>*/}
            <div className="d-flex flex-row" id="login-form">
                <div className="d-none d-md-flex w-50 img img-fluid">
                    <img className="w-100" src="https://i.ibb.co/x24RWBm/7005791b-6a9a-44e3-af02-a3764d5ed434.jpg" alt="imagen-login"/>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center justify-content-md-start mt-md-5 form">
                {
                    props.error ? <Alert message={props.message}/> 
                    : props.loged ? history.push('/') : null
                }
                    <form className="d-flex flex-column align-items-center justify-content-center mt-md-5 p-4">
                        <div className="form-group text-left">
                            <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={handlerOnChange}></input>
                        </div>
                        <div className="form-group text-left">
                            <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={handlerOnChange}></input>
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
        message: state.auth.message,
        error: state.auth.error
    }
}

const LoginView = connect(mapStateToProps, {login})(Login)

export default LoginView