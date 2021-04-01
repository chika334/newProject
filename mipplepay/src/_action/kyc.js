import axios from "axios";
import { KYCANDBVN, COMPANYUPDATE } from "./type";
import { tokenConfig } from "./userAction";

export const kycandbvn = (details) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${process.env.REACT_APP_API}/kyc-bvn`, details, config)
    .then((res) =>
      dispatch({
        type: KYCANDBVN,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const companyUpdate = (formData) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(
      `${process.env.REACT_APP_API}/companyUpdate`,
      formData,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: COMPANYUPDATE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
