import { call, put, takeEvery } from "redux-saga/effects";
import { getUserLogued } from "../../firebase/requestUserLoginFirebase";
import { loguedUserSucces } from "../../redux/LoginRedux/actions";
import { FETCH_USER } from "../../redux/LoginRedux/types";

function* fetchUserLog(action) {
  try {
    console.log(action);
    const user = yield call(
      getUserLogued,
      action.payload.user,
      action.payload.password
    );
    const userLogued = user.user.email;
    const uIddLogued = user.user.uid;

    const userDataCompleteLogued = { userLogued, uIddLogued };
    console.log(userDataCompleteLogued);
    yield put(loguedUserSucces(userDataCompleteLogued));
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUserLog);
}

export { userSaga, fetchUserLog };
