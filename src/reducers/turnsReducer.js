import { SHOW_TURNS } from "../constants/action-types"

const initState = {
    turns: []
}

const turnsReducer = (state = initState, action) => {
    if(action.type === SHOW_TURNS){
        return Object.assign({}, state, {
            turns: state.turns.concat(action.payload)
        })
    }
    return state
}

export default turnsReducer