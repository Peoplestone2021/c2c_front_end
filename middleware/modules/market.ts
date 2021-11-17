import marketReducer from "../../provider/modules/market";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { MarketItem } from "../../provider/modules/market";
import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import api, { MarketItemResponse } from "../../api/market";
import { AxiosResponse } from "axios";
import { endProgress, startProgress } from "../../provider/modules/progress";
import { RootState } from "../../provider";

export const requestFetchMarketItem = createAction<number>(
  `${marketReducer.name}/requestFetchMarketItem`
);

function* fetchDataItem(action: PayloadAction<number>) {
  const id = action.payload;

  const result: AxiosResponse<MarketItemResponse> = yield call(api.get, id);
}

export default function* marketSaga() {
  yield takeEvery(requestFetchMarketItem, fetchDataItem);
}
