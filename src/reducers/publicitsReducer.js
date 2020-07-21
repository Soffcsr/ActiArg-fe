const { SHOW_PUBLICITS } = require("../constants/action-types")

const initState = {
    publicits: []
}

const publicitsReducer = (state = initState, action) => {
    if(action.type === SHOW_PUBLICITS){
        return Object.assign({}, state, {
            publicits: state.publicits.concat(action.payload.publicits)
        })
    }
    return state
}

export default publicitsReducer