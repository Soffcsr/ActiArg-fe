import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="error">
            <h3 className="error3">Oops! Página no encontrada</h3>
            <button type="button" className="btn actiar-btn mr-2 bajate">
                <Link to="/">Regresar</Link>
            </button>
        </div>
    )
}

export default Error404