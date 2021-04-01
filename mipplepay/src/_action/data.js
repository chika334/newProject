import {
  DATA_PAY,
  DATA_LOADED,
  DATA_LOADING,
  DATA_ERROR,
  DATA_TRANS,
} from "./type";
import { tokenConfig } from "./userAction";
import axios from "axios";
import { returnErrors } from "./errorAction.js";

// get all data transations
export const dataTransaction = () => (dispatch, getState) => {
  dispatch({ type: DATA_LOADING });
  axios
    .get(`${process.env.REACT_APP_API}/dataTransaction`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DATA_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DATA_ERROR,
      });
    });
};

// buy data
export const BuyData = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value);

  axios
    .post(
      `${process.env.REACT_APP_API}/DataTransaction`,
      body,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: DATA_PAY,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// single data
export const DataAction = (value) => (dispatch, getState) => {
  const body = JSON.stringify(value);

  axios
    .post(
      `${process.env.REACT_APP_API}/singleTransaction`,
      body,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: DATA_TRANS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
