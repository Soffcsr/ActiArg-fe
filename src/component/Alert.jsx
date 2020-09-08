import React from 'react'

const Alert = ({message, status}) => {
    return (
        <div class= {status === 200 ? '"alert alert-success alert-dismissible fade show' : '"alert alert-danger alert-dismissible fade show'} role="alert">
            {message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert