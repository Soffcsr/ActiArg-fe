import { SHOW_GYM, FIND_GYM_BY_ID } from "../constants/action-types"

const initState = {
    gyms: [],
    gym: {}
}

const gymsReducer = (state = initState, action) =>{
    switch (action.type) {
        case SHOW_GYM:
            return Object.assign({}, state, {
                gyms: state.gyms.concat(action.payload)
            })
        case FIND_GYM_BY_ID:
            return {
                gym: action.payload
            }
        default:
            break;
    }
    if (action.type === SHOW_GYM){
        
    }
    return state
}

export default gymsReducer