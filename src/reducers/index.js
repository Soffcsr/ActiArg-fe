import {combineReducers} from 'redux'

import gymsReducer from './gymsReducer'
import authReducer from './authReducer'
import activitiesReducer from './activitiesReducer'
import turnsReducer from './turnsReducer'

const rootReducer = combineReducers({
    gym: gymsReducer,
    authReducer: authReducer,
    activity: activitiesReducer,
    turns: turnsReducer
})

export default rootReducer