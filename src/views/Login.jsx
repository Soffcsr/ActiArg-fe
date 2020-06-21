import React from 'react'

const Login = props =>{
    return(
        <div className="d-flex flex-row">
            <div className="w-50">
                <img className="w-100" href="https://i.ibb.co/8cWKBw0/primerrroooooo.jpg" alt="imagen-login"/>
            </div>
            <div className="w-50">
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <button type="button" className="btn btn-primary">Iniciar</button>
                </form>
            </div>
        </div>
    )
}

export default Login