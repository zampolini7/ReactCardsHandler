import {
  FETCH_LOG_OUT,
  LOG_OUT_ERROR,
  LOG_OUT_LOADING,
  LOG_OUT_SUCCESFUL,
} from "../types";

export const logOutSuccesful = (payload) => ({
  type: LOG_OUT_SUCCESFUL,
  payload,
});

export const logOutError = (payload) => ({
  type: LOG_OUT_ERROR,
  payload,
});

export const LogOutLoading = (payload) => ({
  type: LOG_OUT_LOADING,
  payload,
});
export const logOutFromFbFetch = (payload) => ({
  type: FETCH_LOG_OUT,
  payload,
});
