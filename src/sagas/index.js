import { all } from "redux-saga/effects";
import { cardsSaga } from "./cardsSaga";
import { deleteCardsSaga } from "./deleteCardsSaga";
import { userSaga } from "./loginSaga";
import { logOutSaga } from "./logOutSaga";
function* rootSaga() {
  yield all([userSaga(), cardsSaga(), logOutSaga(), deleteCardsSaga()]);
}

export { rootSaga };
