import { combineReducers } from "redux";

import asyncAction, { AsyncReducer } from './async/asyncReducer';
import { reducer as ToastrReducer } from "react-redux-toastr";
import { reducer as reduxForm } from 'redux-form';
import auth, { AuthReducer } from './auth/auth.reducer';




export interface StoreState {
  async: AsyncReducer,
  toastr: any,
  auth: AuthReducer,
  form: any
}

const rootReducer = combineReducers<StoreState>({
  async: asyncAction,
  toastr: ToastrReducer,
  auth,
  form: reduxForm
});

export default rootReducer;
