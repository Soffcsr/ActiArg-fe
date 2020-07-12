import { SHOW_ACTIVITIES } from "../constants/action-types"

const initState = {
    activities: []
}

const activitiesReducer = (state = initState, action) => {
    if (action.type === SHOW_ACTIVITIES){
        return Object.assign({}, state, {
            gyms: state.activities.concat(action.payload)
        })
    }
    return state
}

export default activitiesReducer