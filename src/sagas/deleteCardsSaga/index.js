import { call, put, takeEvery } from "redux-saga/effects";
import { deleteCardsFromFB } from "../../firebase/deleteCardsFB";
import { deleteCardsSuccesful } from "../../redux/cardsRedux/actions";
import { DELETE_CARDS } from "../../redux/cardsRedux/types";

function* deleteCardsFB(action) {
  try {
    const cardDelete = yield call(deleteCardsFromFB, action.payload);
    console.log(action.payload);
    yield put(deleteCardsSuccesful(cardDelete));
  } catch (error) {
    console.log(error);
  }
}

function* deleteCardsSaga() {
  yield takeEvery(DELETE_CARDS, deleteCardsFB);
}

export { deleteCardsSaga };
