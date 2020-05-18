import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const middlewares = [thunk];

const composeWithEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const store = createStore(rootReducer, composeWithEnhancer);
export default store;