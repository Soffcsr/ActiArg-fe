import React from 'react'
import { Link } from 'react-router-dom'

const InConstruction = () => {
    return (
        <div className="InConstruction">
            <h3 className="InCo3">Oops! Página en construcción</h3>
            <button type="button" className="btn actiar-btn mr-2 bajate">
                <Link to="/home">Regresar</Link>
            </button>
        </div>
    )
}

export default InConstruction