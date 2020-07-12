import { SHOW_TURNS } from "../constants/action-types"

const initState = {
    turns: [
        {
            "id": 0,
            "workoutTime": "08.00",
            "mondayHourClass": "08.00 - 09.00",
            "mondayNameClass": "spinning",
            "mondayPlaces": "05/10",
            "mondayAction": "yes",
            "mondayNameBtn": "inscribite",
    
            "tuesdayHourClass": "",
            "tuesdayNameClass": "",
            "tuesdayPlaces": "",
            "tuesdayAction": "",
            "tuesdayNameBtn": "",
    
            "wednesdayHourClass": "08.00 - 09.00",
            "wednesdayNameClass": "Crossfit",
            "wednesdayPlaces": "09/10",
            "wednesdayAction": "yes",
            "wednesdayNameBtn": "inscribite",
    
            "thursdayHourClass": "",
            "thursdayNameClass": "",
            "thursdayPlaces": "",
            "thursdayAction": "",
            "thursdayNameBtn": "",
    
            "fridayHourClass": "08.00 - 09.00",
            "fridayNameClass": "power T",
            "fridayPlaces": "10/10",
            "fridayAction": "yes",
            "fridayNameBtn": "inscribite",
    
            "saturdayHourClass": "08.00 - 09.00",
            "saturdayNameClass": "power T",
            "saturdayPlaces": "10/10",
            "saturdayAction": "yes",
            "saturdayNameBtn": "inscribite",
    
            "sundayHourClass": "",
            "sundayNameClass": "",
            "sundayPlaces": "",
            "sundayAction": "",
            "sundayNameBtn": ""
        },
        {
            "id": 1,
            "workoutTime": "09.00",
            "mondayHourClass": "08.00 - 09.00",
            "mondayNameClass": "spinning",
            "mondayPlaces": "05/10",
            "mondayAction": "yes",
            "mondayNameBtn": "inscribite",
    
            "tuesdayHourClass": "08.00 - 09.00",
            "tuesdayNameClass": "Box",
            "tuesdayPlaces": "08/10",
            "tuesdayAction": "yes",
            "tuesdayNameBtn": "inscribite",
    
            "wednesdayHourClass": "",
            "wednesdayNameClass": "",
            "wednesdayPlaces": "",
            "wednesdayAction": "",
            "wednesdayNameBtn": "",
    
            "thursdayHourClass": "08.00 - 09.00",
            "thursdayNameClass": "spinning",
            "thursdayPlaces": "02/10",
            "thursdayAction": "yes",
            "thursdayNameBtn": "inscribite",
    
            "fridayHourClass": "",
            "fridayNameClass": "",
            "fridayPlaces": "",
            "fridayAction": "",
            "fridayNameBtn": "",
    
            "saturdayHourClass": "08.00 - 09.00",
            "saturdayNameClass": "power T",
            "saturdayPlaces": "10/10",
            "saturdayAction": "yes",
            "saturdayNameBtn": "inscribite",
    
            "sundayHourClass": "",
            "sundayNameClass": "",
            "sundayPlaces": "",
            "sundayAction": "",
            "sundayNameBtn": ""
        },
        {
            "id": 2,
            "workoutTime": "10.00",
            "mondayHourClass": "",
            "mondayNameClass": "",
            "mondayPlaces": "",
            "mondayAction": "",
            "mondayNameBtn": "",
    
            "tuesdayHourClass": "08.00 - 09.00",
            "tuesdayNameClass": "Box",
            "tuesdayPlaces": "08/10",
            "tuesdayAction": "yes",
            "tuesdayNameBtn": "inscribite",
    
            "wednesdayHourClass": "08.00 - 09.00",
            "wednesdayNameClass": "Crossfit",
            "wednesdayPlaces": "09/10",
            "wednesdayAction": "yes",
            "wednesdayNameBtn": "inscribite",
    
            "thursdayHourClass": "",
            "thursdayNameClass": "",
            "thursdayPlaces": "",
            "thursdayAction": "",
            "thursdayNameBtn": "",
    
            "fridayHourClass": "08.00 - 09.00",
            "fridayNameClass": "power T",
            "fridayPlaces": "10/10",
            "fridayAction": "yes",
            "fridayNameBtn": "inscribite",
    
            "saturdayHourClass": "",
            "saturdayNameClass": "",
            "saturdayPlaces": "",
            "saturdayAction": "",
            "saturdayNameBtn": "",
    
            "sundayHourClass": "",
            "sundayNameClass": "",
            "sundayPlaces": "",
            "sundayAction": "",
            "sundayNameBtn": ""
        },
        {
            "id": 3,
            "workoutTime": "11.00",
            "mondayHourClass": "",
            "mondayNameClass": "",
            "mondayPlaces": "",
            "mondayAction": "",
            "mondayNameBtn": "",
    
            "tuesdayHourClass": "08.00 - 09.00",
            "tuesdayNameClass": "Box",
            "tuesdayPlaces": "08/10",
            "tuesdayAction": "yes",
            "tuesdayNameBtn": "inscribite",
    
            "wednesdayHourClass": "08.00 - 09.00",
            "wednesdayNameClass": "Crossfit",
            "wednesdayPlaces": "09/10",
            "wednesdayAction": "yes",
            "wednesdayNameBtn": "inscribite",
    
            "thursdayHourClass": "",
            "thursdayNameClass": "",
            "thursdayPlaces": "",
            "thursdayAction": "",
            "thursdayNameBtn": "",
    
            "fridayHourClass": "08.00 - 09.00",
            "fridayNameClass": "power T",
            "fridayPlaces": "10/10",
            "fridayAction": "yes",
            "fridayNameBtn": "inscribite",
    
            "saturdayHourClass": "",
            "saturdayNameClass": "",
            "saturdayPlaces": "",
            "saturdayAction": "",
            "saturdayNameBtn": "",
    
            "sundayHourClass": "",
            "sundayNameClass": "",
            "sundayPlaces": "",
            "sundayAction": "",
            "sundayNameBtn": ""
        }
    ]
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