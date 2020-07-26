const { SHOW_CAROUSELS } = require("../constants/action-types")

const initState = {
    carousels: []
}

const carouselsReducer = (state = initState, action) => {
    if(action.type === SHOW_CAROUSELS){
        return Object.assign({}, state, {
            carousels: state.carousels.concat(action.payload.carousels)
        })
    }
    return state
}

export default carouselsReducer