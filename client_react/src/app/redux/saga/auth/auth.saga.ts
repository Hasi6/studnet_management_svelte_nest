import { ReduxSagaTest, AuthTypes } from "./../../types/index.types";
import { apiRequests } from "./../../../helpers/apiRequests";
import { IAuthUser } from "./../../../model/User.model";
import { endPoint } from "../../../config";
import { call, put } from "redux-saga/effects";
import { decodeToken } from "../../../helpers/decodeJwtToken";

const authEndPoint = `${endPoint}/api/auth`;

// Login User
export const loginUser = async (user: IAuthUser, history: any) => {
  const res = await apiRequests("post", `${authEndPoint}/login`, user);
  if (res) {
    const authState: { auth: boolean; user: any } = decodeToken(
      res?.data?.token
    );
    return authState;
  }
  return null;
};

export const loginSaga = (user: any, history: any) => {
  return {
    type: ReduxSagaTest.TEST_LOGIN,
    payload: { user, history },
  };
};

export function* loginUserSaga(action: any): any {
  const result = yield call(() =>
    loginUser(action.payload.user, action.payload.history)
  );
  yield put({
    type: AuthTypes.SET_CURRENT_USER,
    payload: result,
  });
}
