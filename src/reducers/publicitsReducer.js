const { SHOW_PUBLICITS, CLEAN_PUBLICITS } = require("../constants/action-types")

const initState = {
    publicits: []
}

const publicitsReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_PUBLICITS:
            return Object.assign({}, state, {
                publicits: state.publicits.concat(action.payload.publicits)
            })
        case CLEAN_PUBLICITS:
            return {
                publicits: action.payload
            }
        default:
            break;
    }
    return state
}

export default publicitsReducer