import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR } from "../constants/action-types";

const initState = {
    loged: false,
    error: '',
    credentials: {
        token: '',
        username: '',
        userlastname: '',
        userrole: ''
    }
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case LOGIN_USER :
            return {
                credentials: action.payload,
                loged: true
            };
        case LOGIN_SUCCESS :
            return {
                loged: action.payload
            };
        case LOGIN_ERROR :
            return {
                loged: false,
                error: action.payload.error
            };
        default:
            break;

    }
    return state
}

export default authReducer