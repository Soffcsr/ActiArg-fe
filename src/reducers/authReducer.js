  
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR } from "../constants/action-types";

const initState = {
    loged: false,
    error: false,
    registered: false,
    message: '',
    credentials: {
        token: '',
        username: '',
        userlastname: '',
        userrole: ''
    }
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case REGISTER_SUCCESS :
            return {
                registered: true,
                message: action.payload
            }
        case REGISTER_ERROR :
            return {
                registered: false,
                message: action.payload,
                error: true
            }
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
                message: action.payload,
                error: true
            };
        default:
            break;
    }
    return state
}


export default authReducer