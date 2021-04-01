import {
  BUY_CREDIT,
  PAYMENT_LOADING,
  PAYMENT_LOADED,
  PROBABLY_ERROR,
  TRANS,
  TRANSACTION_LOADED,
  TRANSACTION_LOADING,
  TRANSACTION_ERROR,
} from "./type";
import { tokenConfig } from "./userAction";
import axios from "axios";
import { returnErrors } from "./errorAction.js";

/*export const getPay = () => (dispatch, getState) => {
  dispatch({ type: PAYMENT_LOADING })
  axios.get(`${process.env.REACT_APP_API}/getPayment`, tokenConfig(getState))
    .then(res => dispatch({
      type: PAYMENT_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: PROBABLY_ERROR
      })
    })
}*/

// get all airtimes
export const getTransaction = () => async (dispatch, getState) => {
  dispatch({ type: TRANSACTION_LOADING });
  return await axios
    .get(`${process.env.REACT_APP_API}/getTransaction`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: TRANSACTION_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: TRANSACTION_ERROR,
      });
    });
};

// buy airtime
export const BuyCreditFund = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value);

  axios
    .post(
      `${process.env.REACT_APP_API}/creditTransaction`,
      body,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch(
        {
          type: BUY_CREDIT,
          payload: res.data,
        },
        console.log(res)
      )
    )
    .catch((err) => console.log(err));
};

// single airtime
export const transAction = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value);

  axios
    .post(
      `${process.env.REACT_APP_API}/Transaction`,
      body,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: TRANS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
