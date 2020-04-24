import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";
import { AsyncReducer } from './async/asyncReducer';


export interface StoreState {
  async: AsyncReducer,
}

const rootReducer = combineReducers<StoreState>({
  async: asyncAction,
});

export default rootReducer;
