import { call, put, takeEvery } from "redux-saga/effects";
import { getCardsFromColection } from "../../firebase/requestDataFirestoreFB";
import { getCardsSuccesful } from "../../redux/cardsRedux/actions";
import { GET_CARDS } from "../../redux/cardsRedux/types";

function* fetchCardsFromFirebase(action) {
  try {
    console.log(action);
    const cards = yield call(getCardsFromColection, action.payload.uIddLogued);
    console.log(cards);

    yield put(getCardsSuccesful(cards));
  } catch (e) {
    console.log(e);
  }
}

function* cardsSaga() {
  yield takeEvery(GET_CARDS, fetchCardsFromFirebase);
}

export { cardsSaga };
