import {
  DELETE_CARDS_ERROR,
  DELETE_CARDS_SUCCESFUL,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESFUL,
  SAVE_CARDS,
  SAVE_CARDS_ERROR,
  SAVE_CARDS_SUCCESFUL,
} from "../cardsRedux/types/index.js";

export const initialState = {
  state: {},
  loading: false,
  error: false,
  cards: {},
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_SUCCESFUL:
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };

    case GET_CARDS_ERROR:
      return {
        ...state,
        loading: false,
      };

    case SAVE_CARDS:
      return {
        ...state,
      };

    case SAVE_CARDS_SUCCESFUL:
      return {
        ...state,
        loading: false,
      };

    case SAVE_CARDS_ERROR:
      return {
        ...state,
        loading: false,
      };

    case DELETE_CARDS_SUCCESFUL:
      return {
        ...state,
        loading: false,
      };

    case DELETE_CARDS_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
