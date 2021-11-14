import { fork } from "@redux-saga/core/effects";
import calculatorSaga from "./modules/calculator";

export default function* rootSaga() {
  yield fork(calculatorSaga);
}