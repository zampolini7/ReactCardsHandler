import {
  LOGUED_USER_WITH_MAIL_AND_PASSWORD_SUCCES,
  LOGUED_USER_WITH_MAIL_AND_PASSWORD_LOADING,
  LOGUED_USER_WITH_MAIL_AND_PASSWORD_ERROR,
} from "../LoginRedux/types";
import { LOG_OUT_SUCCESFUL } from "../logOutRedux/types";

const initialState = {
  state: {},
  loading: false,
  error: false,
  user: {},
  isLogued: false,
  isLoguedOut: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGUED_USER_WITH_MAIL_AND_PASSWORD_SUCCES:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLogued: true,
      };

    case LOGUED_USER_WITH_MAIL_AND_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGUED_USER_WITH_MAIL_AND_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case LOG_OUT_SUCCESFUL:
      return {
        ...state,
        loading: false,
        isLogued: false,
        isLoguedOut: true,
      };

    default: // need this for default case
      return state;
  }
}
