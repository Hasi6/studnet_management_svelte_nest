import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import { sagaConnect } from "../saga/index.saga";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const composeWithEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
);

const store = createStore(rootReducer, composeWithEnhancer);
sagaMiddleware.run(sagaConnect);
export default store;
