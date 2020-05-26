import { ReduxSagaTest } from "./../types/index.types";
import { takeLatest } from "redux-saga/effects";
import { loginUserSaga, loginSaga } from "./auth/auth.saga";

export function* sagaConnect() {
  yield takeLatest(ReduxSagaTest.TEST_LOGIN, loginUserSaga);
}
