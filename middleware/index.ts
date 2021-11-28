import { fork } from "redux-saga/effects";
import marketSaga from "./modules/market";
import calculatorSaga from "./modules/calculator";

export default function* rootSaga() {
  yield fork(marketSaga);
  yield fork(calculatorSaga);
}
