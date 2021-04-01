import { tokenConfig } from './userAction';
import axios from 'axios';
import { returnErrors } from './errorAction.js';
import { PAYSTACK_PAYMENT_LOADING, PAYSTACK_PAYMENT_LOADED, PAYSTACK_PAYMENT_ERROR } from './type';

// export const getVerifiedPayement = () => async (dispatch) => {
// 	dispatch({ type: PAYSTACK_PAYMENT_LOADING });
// 	return await axios
// 		.get(`${process.env.REACT_APP_API}/paystack`)
// 		.then((res) =>
// 			dispatch({
// 				type: PAYSTACK_PAYMENT_LOADED,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) => {
// 			dispatch(returnErrors(err.response.data, err.response.status));
// 			dispatch({
// 				type: PAYSTACK_PAYMENT_ERROR
// 			});
// 		});
// };

export const verifyPayment = (ref) => async (dispatch, getState) => {
	// console.log(ref);
	const body = JSON.stringify({'body' : ref});
	// dispatch({ type: PAYSTACK_PAYMENT_LOADING });
	axios
		.post(`${process.env.REACT_APP_API}/flutterwave`, body, tokenConfig(getState))
		.then((res) =>
			dispatch({
				type: PAYSTACK_PAYMENT_LOADED,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: PAYSTACK_PAYMENT_ERROR
			});
		});
};
