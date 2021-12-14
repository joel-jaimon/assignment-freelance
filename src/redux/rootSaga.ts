import { all } from "@redux-saga/core/effects";
import { getImagesSaga } from "./sagas/api.saga";

export default function* rootSaga() {
  yield all([getImagesSaga()]);
}
