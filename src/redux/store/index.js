import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "../reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../sagas";

const sagaMiddleware = createSagaMiddleware();

const composeAlt = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ || compose;

const composedEndhancers = composeAlt(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, composedEndhancers);
sagaMiddleware.run(rootSaga);
// store.subscribe(() => console.log("paso esto", store));

export default store;
