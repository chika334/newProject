import axios from 'axios'
import {
	VERIFY_LOADED, PAY_ELECTRIC, ELECTRIC_PAYMENT_FAIL, VERIFY_LOADING, POST_PAY_ELECTRIC, ELECTRIC_TRANS, ELECTRIC_TRANSACTION_LOADED, ELECTRIC_TRANSACTION_LOADING
} from './type.js';
import {returnErrors} from './errorAction.js';
import { tokenConfig } from './userAction'

// verify meter number 
// export const NumberverifyTransaction = () => (dispatch, getState) => {
//   dispatch({ type: VERIFY_LOADING })
//   axios.get(`${process.env.REACT_APP_API}/verifyNumber`, tokenConfig(getState))
//     .then(res => dispatch({
//       type: VERIFY_LOADED,
//       payload: res.data
//     }))
//     .catch(err => console.log(err))
// }

// all electric
export const getElectricTransaction = () => (dispatch, getState) => {
  dispatch({ type: ELECTRIC_TRANSACTION_LOADING })
  axios.get(`${process.env.REACT_APP_API}/getElectric`, tokenConfig(getState))
    .then(res => dispatch({
      type: ELECTRIC_TRANSACTION_LOADED,
      payload: res.data
    }))
    .catch(err => console.log(err))
}

// pay prepaidMeter
export const payElectricBill = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value)

  axios.post(`${process.env.REACT_APP_API}/prepaidMeterPayment`, body, tokenConfig(getState))
    .then(res => dispatch({
      type: PAY_ELECTRIC,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'ELECTRIC_PAYMENT_FAIL'))
      dispatch({
        type: ELECTRIC_PAYMENT_FAIL
      })
    })
}

// pay postpaidMeter
export const postPayElectricBill = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value)

  axios.post(`${process.env.REACT_APP_API}/postpaidMeterPayment`, body, tokenConfig(getState))
    .then(res => dispatch({
      type: POST_PAY_ELECTRIC,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'ELECTRIC_PAYMENT_FAIL'))
      dispatch({
        type: ELECTRIC_PAYMENT_FAIL
      })
    })
}

// single electric tranx
export const ElectrictransAction = (value) => (dispatch, getState) => {

  const body = JSON.stringify(value)

  axios.post(`${process.env.REACT_APP_API}/ElectrictransAction`, body, tokenConfig(getState))
    .then(res => dispatch({
      type: ELECTRIC_TRANS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}
