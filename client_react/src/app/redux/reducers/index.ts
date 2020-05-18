import { combineReducers } from "redux";

import asyncAction, { AsyncReducer } from './async/asyncReducer';
import { reducer as ToastrReducer } from "react-redux-toastr";
import { reducer as reduxForm } from 'redux-form';
import auth, { AuthReducer } from './auth/auth.reducer';
import events, { EventsReducer } from './events/events.reducer';




export interface StoreState {
  async: AsyncReducer,
  toastr: any,
  auth: AuthReducer,
  form: any,
  events: EventsReducer
}

const rootReducer = combineReducers<StoreState>({
  async: asyncAction,
  toastr: ToastrReducer,
  auth,
  form: reduxForm,
  events
});

export default rootReducer;
