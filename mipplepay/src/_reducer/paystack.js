import {
	PAYSTACK_PAYMENT_LOADING,
	PAYSTACK_PAYMENT_LOADED,
	PAYSTACK_PAYMENT_ERROR,
	REMOVE_PAYSTACK
} from '../_action/type';

const initialState = {
	success: false,
	msg: null
};

const paystack = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_PAYSTACK:
		case PAYSTACK_PAYMENT_LOADING:
			return {
				...state
			};
		case PAYSTACK_PAYMENT_LOADED:
			return {
				...state,
				success: true,
				msg: action.payload
			};
		case PAYSTACK_PAYMENT_ERROR:
			return {
				...state,
				success: false,
				msg: null
			};
		default:
			return state;
	}
};

export default paystack;
