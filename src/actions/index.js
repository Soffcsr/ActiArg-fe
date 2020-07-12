import { SHOW_GYM, SHOW_ACTIVITIES, SHOW_TURNS } from "../constants/action-types";

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