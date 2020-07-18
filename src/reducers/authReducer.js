import { REGISTER_SUCCESS, REGISTER_ERROR } from "../constants/action-types"

const initState = {
    registered: false,
    message: ''
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
                message: action.payload
            }
        default:
            break;
    }
}

export default authReducer