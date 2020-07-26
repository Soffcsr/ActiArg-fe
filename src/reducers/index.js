import {combineReducers} from 'redux'

import gymsReducer from './gymsReducer'
import authReducer from './authReducer'
import activitiesReducer from './activitiesReducer'
import turnsReducer from './turnsReducer'
import publicitsReducer from './publicitsReducer'
import carouselsReducer from './carouselsReducer'

const rootReducer = combineReducers({
    gym: gymsReducer,
    auth: authReducer,
    activity: activitiesReducer,
    turns: turnsReducer,
    publicits: publicitsReducer,
    carousel: carouselsReducer
})

export default rootReducer