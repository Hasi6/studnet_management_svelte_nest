import { combineReducers } from "redux";

import asyncAction, { AsyncReducer } from './async/asyncReducer';
import { reducer as ToastrReducer } from "react-redux-toastr";
import auth, { AuthReducer } from './auth/auth.reducer';




export interface StoreState {
  async: AsyncReducer,
  toastr: any,
  auth: AuthReducer
}

const rootReducer = combineReducers<StoreState>({
  async: asyncAction,
  toastr: ToastrReducer,
  auth
});

export default rootReducer;
