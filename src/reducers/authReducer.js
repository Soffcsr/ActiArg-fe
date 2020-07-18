<<<<<<< HEAD
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
=======
import { REGISTER_SUCCESS, REGISTER_ERROR } from "../constants/action-types"

const initState = {
    registered: false,
    message: ''
>>>>>>> add redux to register view
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
<<<<<<< HEAD
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
=======
        case REGISTER_SUCCESS :
            return {
                registered: true,
                message: action.payload
            }
        case REGISTER_ERROR :
            return {
                registered: false,
                message: action.payload
            }
        default:
            break;
    }
>>>>>>> add redux to register view
}

export default authReducer