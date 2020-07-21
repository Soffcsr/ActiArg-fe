
import { 
    SHOW_GYM, 
    SHOW_ACTIVITIES, 
    SHOW_TURNS,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    SHOW_PUBLICITS,
    SHOW_CAROUSELS
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
            .then(data => {
                console.log("activities:::", data)
                dispatch({
                    type: SHOW_ACTIVITIES,
                    payload: data
                })
            })
    }
}

export function showTurns(id){
    return (dispatch, getState) => {
        fetch(`https://actiar-be.herokuapp.com/TurnByGym/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("turns:::", data[0].days[0])
                dispatch({
                    type: SHOW_TURNS,
                    payload: data
                })
            })
    }
}

export function showPublicits(id){
    return (dispatch, getState) => {
        fetch(`https://actiar-be.herokuapp.com/PublicitByGym/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("publicits:::", data)
                dispatch({
                    type: SHOW_PUBLICITS,
                    payload: data
                })
            })
    }
}

export function showCarousels(id){
    return (dispatch, getState) => {
        fetch(`https://actiar-be.herokuapp.com/CarouselByGym/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("carousels:::", data)
                dispatch({
                    type: SHOW_CAROUSELS,
                    payload: data
                })
            })
    }
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
}
