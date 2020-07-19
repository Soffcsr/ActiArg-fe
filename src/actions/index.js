<<<<<<< HEAD
=======

>>>>>>> f6fabe18287e50b70e82866d1bca4f236fc6d8ac
import { 
    SHOW_GYM, 
    SHOW_ACTIVITIES, 
    SHOW_TURNS,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
<<<<<<< HEAD
    REGISTER_SUCCESS,
=======
    REGISTER_SUCCESS, 
>>>>>>> f6fabe18287e50b70e82866d1bca4f236fc6d8ac
    REGISTER_ERROR
} from "../constants/action-types";

export function showGyms(payload){
    return (dispatch, getState) => {
        fetch('https://actiar-be.herokuapp.com/Gyms')
            .then(response => response.json())
            .then(data => dispatch({
                type: SHOW_GYM,
                payload: data
            }))
    }
}

export function showActivities(id){
    return (dispatch, getState) => {
        fetch(`https://actiar-be.herokuapp.com/ActivityByGym/${id}`)
            .then(response => response.json())
            .then(data => dispatch({
                type: SHOW_ACTIVITIES,
                payload: data
            }))
    }
}

export function showTurns(id){
    return (dispatch, getState) => {
        fetch(`https://actiar-be.herokuapp.com/TurnsByGym/${id}`)
            .then(response => response.json())
            .then(data => dispatch({
                type: SHOW_TURNS,
                payload: data
            }))
    }
}

<<<<<<< HEAD
export function login(email, password) {
    return async (dispatch, getState) => {
        const requestOptions = {
            method: 'POST'
        }
        let response = await fetch(`http://actiar-be.herokuapp.com/login?email=${email}&&password=${password}`, requestOptions)
        if(response.ok){
            let credentials = await response.json()
            console.log(credentials)
            sessionStorage.setItem('token', JSON.stringify(credentials.data.token))
            sessionStorage.setItem('username', JSON.stringify(credentials.data.username))
            sessionStorage.setItem('userlastname', JSON.stringify(credentials.data.userlastname))
            dispatch({
                type: LOGIN_USER,
                payload: credentials.data
            })
            dispatch({
                type: LOGIN_SUCCESS,
                payload: true
            })
        }else{
            let error = await response.json()
            dispatch({
                type: LOGIN_ERROR,
                payload: error
            })
        }
    }
}

=======
>>>>>>> f6fabe18287e50b70e82866d1bca4f236fc6d8ac
export function register(nombre, apellido, dni, telefono, email, password){
    return async (dispatch, getState) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nombre,
                lastname: apellido,
                dni: dni,
                phone: telefono,
                email: email,
                password: password
            })
        }
        let response = await fetch('http://actiar-be.herokuapp.com/register', requestOptions)
        if(response.ok) {
            let register = await response.json()
            dispatch({
                type: REGISTER_SUCCESS,
                payload: register.message
            })
        }else{
            let register = await response.json()
            dispatch({
                type: REGISTER_ERROR,
                payload: register.message
            })
        }
    }
<<<<<<< HEAD
}
=======
}

export function login(email, password) {
    return async (dispatch, getState) => {
        const requestOptions = {
            method: 'POST'
        }
        let response = await fetch(`http://actiar-be.herokuapp.com/login?email=${email}&&password=${password}`, requestOptions)
        if(response.ok){
            let credentials = await response.json()
            console.log(credentials)
            sessionStorage.setItem('token', JSON.stringify(credentials.data.token))
            sessionStorage.setItem('username', JSON.stringify(credentials.data.username))
            sessionStorage.setItem('userlastname', JSON.stringify(credentials.data.userlastname))
            dispatch({
                type: LOGIN_USER,
                payload: credentials.data
            })
            dispatch({
                type: LOGIN_SUCCESS,
                payload: true
            })
        }else{
            let error = await response.json()
            dispatch({
                type: LOGIN_ERROR,
                payload: error
            })
        }
    }
}
>>>>>>> f6fabe18287e50b70e82866d1bca4f236fc6d8ac
