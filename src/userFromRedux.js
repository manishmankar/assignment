import { createSlice } from "@reduxjs/toolkit";
import productMSTCruds from "./apis/productMSTCrud";
const REDUCER_NAME = "productMST";

const TYPES = {
  USER_LOGGED_IN: "userLoggedIn",
  USER_REGISTER: "userRegister",
  USER_GET: "userGet",
};

export const productMSTSlice = createSlice({
  name: REDUCER_NAME,
  initialState: {
    ...Object.values(TYPES).reduce((occ, cur) => {
      return { ...occ, [cur]: { loading: false, error: null, data: null } };
    }, {}),
  },
  reducers: {
    catchError: (state, action) => {
      state[action.payload.type].loading = false;
      state[action.payload.type].error = action.payload.error;
    },
    startCall: (state, action) => {
      state[action.payload.type].error = null;
      state[action.payload.type].loading = true;
    },
    stopCall: (state, action) => {
      state[action.payload.type].error = null;
      state[action.payload.type].loading = false;
    },
    dataRecieved: (state, action) => {
      state[action.payload.type].error = null;
      state[action.payload.type].loading = false;
      state[action.payload.type].data = action.payload.data;
    },
  },
});

const startCall = (type) => productMSTSlice.actions.startCall({ type });
const stopCall = (type) => productMSTSlice.actions.stopCall({ type });
const dataRecieved = (type, data) => productMSTSlice.actions.dataRecieved({ type, data });
const catchError = (type, error) => productMSTSlice.actions.catchError({ type, error });

export const userFromActions = {
  postNewArrivalUser: (data, fun) => (dispatch) => {
    dispatch(startCall(TYPES.USER_LOGGED_IN));
    return productMSTCruds
      .login(data)
      .then((res) => {
        dispatch(dataRecieved(TYPES.USER_LOGGED_IN, res));
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        fun();
        return Promise.resolve(res);
      })
      .catch((err) => {
        dispatch(catchError(TYPES.USER_LOGGED_IN, err));
        return Promise.reject(err);
      });
  },
  postsignupUser: (data, fun) => (dispatch) => {
    dispatch(startCall(TYPES.USER_REGISTER));
    productMSTCruds
      .signup(data)
      .then((res) => {
        dispatch(dataRecieved(TYPES.USER_REGISTER, res));
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        fun();
        return Promise.resolve(res);
      })
      .catch((err) => {
        dispatch(catchError(TYPES.USER_REGISTER, err));
        return Promise.reject(err);
      });
  },
  getUserData: (data, fun) => (dispatch) => {
    dispatch(startCall(TYPES.USER_GET));
    productMSTCruds
      .getInfo(data)
      .then((res) => {
        dispatch(dataRecieved(TYPES.USER_GET, res));
        return Promise.resolve(res);
      })
      .catch((err) => {
        dispatch(catchError(TYPES.USER_GET, err));
        return Promise.reject(err);
      });
  },
};
