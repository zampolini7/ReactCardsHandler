import {
  GET_CARDS,
  SAVE_CARDS,
  DELETE_CARDS,
  GET_CARDS_SUCCESFUL,
  GET_CARDS_ERROR,
  DELETE_CARDS_SUCCESFUL,
  DELETE_CARDS_ERROR,
} from "../types";

export const getCards = (payload) => ({
  type: GET_CARDS,
  payload,
});
export const saveCards = (data) => ({
  type: SAVE_CARDS,
  payload: data,
});

export const getCardsSuccesful = (payload) => ({
  type: GET_CARDS_SUCCESFUL,
  payload,
});
export const getCardsError = (id) => ({
  type: GET_CARDS_ERROR,
  payload: id,
});
export const deleteCards = (id) => ({
  type: DELETE_CARDS,
  payload: id,
});

export const deleteCardsSuccesful = (payload) => ({
  type: DELETE_CARDS_SUCCESFUL,
  payload,
});
export const deleteCardsError = (id) => ({
  type: DELETE_CARDS_ERROR,
  payload: id,
});
