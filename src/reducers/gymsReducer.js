import { SHOW_GYM } from "../constants/action-types"

const initState = {
    gyms: []
}

const gymsReducer = (state = initState, action) =>{
    if (action.type === SHOW_GYM){
        return Object.assign({}, state, {
            gyms: state.gyms.concat(action.payload)
        })
    }
    return state
}

export default gymsReducer