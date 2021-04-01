import { PAY_ELECTRIC, ELECTRIC_PAYMENT_FAIL, POST_PAY_ELECTRIC, ELECTRIC_TRANS, ELECTRIC_TRANSACTION_LOADED, ELECTRIC_TRANSACTION_LOADING } from '../_action/type'

const initialState = {
    electric: [],
    msg: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ELECTRIC_TRANSACTION_LOADING:
            return {
                ...state
            }
        case ELECTRIC_TRANSACTION_LOADED:
        case ELECTRIC_TRANS:
        case POST_PAY_ELECTRIC:
        case PAY_ELECTRIC:
            return {
                ...state,
                electric: action.payload,
            }
        case ELECTRIC_PAYMENT_FAIL:
            return {
                electric: []
            }
        default:
            return state
    }
}
