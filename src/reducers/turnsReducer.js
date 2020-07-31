import { SHOW_TURNS, RESERVE_TURN, RESERVE_ERROR, CLEAN_TURNS } from "../constants/action-types"

const initState = {
    error: '',
    linkPago: '',
    turns: []
}

const turnsReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_TURNS:
            return Object.assign({}, state, {
                turns: state.turns.concat(action.payload)
            })
        case RESERVE_TURN:
            return {
                turns: state.turns,
                linkPago: action.payload.init_point,
            }
        case RESERVE_ERROR:
            return {
                turns: state.turns,
                error: action.payload.error
            }
        case CLEAN_TURNS:
            return Object.assign({}, state, {
                turns: action.payload
            })
        default:
            break;
    }
    return state
}

export default turnsReducer