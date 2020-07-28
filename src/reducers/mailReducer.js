const { SEND_MAIL } = require("../constants/action-types");

const initState = {
    message: '',
    message_send: false
}

const mailReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MAIL:
            return Object.assign({}, state, {
                message: action.payload,
                message_send: true
            })
        default:
            break;
    }
    return state
}

export default mailReducer