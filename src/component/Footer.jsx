import React from 'react'

const Footer = props => {
    return (
        <footer className="d-flex flex-column flex-md-row w-100 p-4">
            <div className="d-flex flex-column justify-content-center col-md-6 p-3">
                <h1>Contactanos!</h1>
                <div className="d-flex flex-row justify-content-center">
                    <i className="fab fa-facebook-square m-5"></i>
                    <i className="fab fa-instagram-square m-5"></i>
                    <i className="fab fa-whatsapp-square m-5"></i>
                </div>
            </div>
            <div className="col-md-6 p-3">
                <form className="m-1">
                    <div className="form-group text-left">
                        <label>Nombre</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group text-left">
                        <label>Email</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="form-group text-left">
                        <label>Mensaje</label>
                        <textarea className="form-control">
                        </textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer