import { TVSUB_VERIFY_LOADED, TVSUB_VERIFY_LOADING, TVSUB_SINGLE_TRANS } from '../_action/type'

const initialState = {
    smartCards: [],
    msg: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TVSUB_VERIFY_LOADING:
            return {
                ...state
            }
        case TVSUB_SINGLE_TRANS:
        case TVSUB_VERIFY_LOADED:
            return {
                ...state,
                smartCards: action.payload,
            }
        default:
            return state
    }
}
