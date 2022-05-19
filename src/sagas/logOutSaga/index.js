import { call, put, takeEvery } from "redux-saga/effects";
import { logOutFromFb } from "../../firebase/singOutFB";
import { logOutSuccesful } from "../../redux/logOutRedux/actions";
import { FETCH_LOG_OUT } from "../../redux/logOutRedux/types";

function* fecthLogOutFromFB(action) {
  try {
    const isLogued = yield call(logOutFromFb);
    console.log(isLogued);
    const userLoguedOut = true;
    yield put(logOutSuccesful(userLoguedOut));
  } catch (e) {
    console.log(e);
  }
}

function* logOutSaga() {
  yield takeEvery(FETCH_LOG_OUT, fecthLogOutFromFB);
}

export { logOutSaga };
