import axios from 'axios'
import {
	TVSUB_VERIFY_LOADED, TVSUB_VERIFY_LOADING, PAY_TVBILL, PAY_TVBILL_FAIL, TVSUB_SINGLE_TRANS
} from './type.js';
import {returnErrors} from './errorAction.js';
import { tokenConfig } from './userAction';

/*export const getverifySmartcardNumber = () => (dispatch, getState) => {
  dispatch({ type: TVSUB_VERIFY_LOADING })
  axios.get(`${process.env.REACT_APP_API}/getverifySmartcardNumber`, tokenConfig(getState))
    .then(res => dispatch({
      type: TVSUB_VERIFY_LOADED,
      payload: res.data
    }))
    .catch(err => console.log(err))
}*/

// get all smart cards
export const getSmartcard = () => (dispatch, getState) => {
  dispatch({ type: TVSUB_VERIFY_LOADING })
  axios.get(`${process.env.REACT_APP_API}/getSmartcard`, tokenConfig(getState))
    .then(res => dispatch({
      type: TVSUB_VERIFY_LOADED,
      payload: res.data
    }))
    .catch(err => console.log(err))
}

// pay tv sub bill
export const payTvBill = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value)

  axios.post(`${process.env.REACT_APP_API}/payTvBill`, body, tokenConfig(getState))
    .then(res => dispatch({
      type: PAY_TVBILL,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'PAY_TVBILL_FAIL'))
      dispatch({
        type: PAY_TVBILL_FAIL
      })
    })
}

// single tvsub
export const TvSubtransAction = (value) => (dispatch, getState) => {

  const body = JSON.stringify(value)

  axios.post(`${process.env.REACT_APP_API}/TvSubTranx`, body, tokenConfig(getState))
    .then(res => dispatch({
      type: TVSUB_SINGLE_TRANS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}
