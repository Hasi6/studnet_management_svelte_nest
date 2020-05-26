import { createReducer } from "../util/reducerUtil";
import { AuthTypes } from "../../types/index.types";
import { IUser } from "../../../model/User.model";

export interface AuthReducer {
  user: IUser | null;
  auth: boolean | null;
}

const initialState: AuthReducer = {
  user: null,
  auth: null,
};

const setCurrentUser = (
  state: AuthReducer,
  { user, auth }: AuthReducer
): AuthReducer => {
  console.log(user);
  return {
    ...state,
    user,
    auth,
  };
};

export default createReducer(initialState, {
  [AuthTypes.SET_CURRENT_USER]: setCurrentUser,
});
