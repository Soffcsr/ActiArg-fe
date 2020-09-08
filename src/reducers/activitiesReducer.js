import { SHOW_ACTIVITIES, CLEAN_ACTIVITIES } from "../constants/action-types"

const initState = {
    activities: []
}

const activitiesReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_ACTIVITIES:
            return Object.assign({}, state, {
                activities: state.activities.concat(action.payload.activities)
            })
        case CLEAN_ACTIVITIES:
            return {
                activities: action.payload
            }
        default:
            break;
    }
    return state
}

export default activitiesReducer