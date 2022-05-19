import {
  LOGUED_USER,
  FETCH_USER,
  LOGUED_USER_WITH_MAIL_AND_PASSWORD_SUCCES,
  LOGUED_USER_WITH_MAIL_AND_PASSWORD_LOADING,
  LOGUED_USER_WITH_MAIL_AND_PASSWORD_ERROR,
} from "../types";

export const loguedUser = (payload) => ({
  type: LOGUED_USER,
  payload,
});

export const loguedUserSucces = (payload) => ({
  type: LOGUED_USER_WITH_MAIL_AND_PASSWORD_SUCCES,
  payload,
});
export const loguedUserError = (payload) => ({
  type: LOGUED_USER_WITH_MAIL_AND_PASSWORD_ERROR,
  payload,
});
export const loguedUserLoading = (payload) => ({
  type: LOGUED_USER_WITH_MAIL_AND_PASSWORD_LOADING,
  payload,
});

export const fecthUser = (payload) => ({
  type: FETCH_USER,
  payload,
});
