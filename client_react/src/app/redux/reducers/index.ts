import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";
import { AsyncReducer } from './async/asyncReducer';
import { reducer as ToastrReducer } from "react-redux-toastr";



export interface StoreState {
  async: AsyncReducer,
  toastr: any
}

const rootReducer = combineReducers<StoreState>({
  async: asyncAction,
  toastr: ToastrReducer
});

export default rootReducer;
