import calculatorReducer, {
  addMoneyItem, 
  initialMoneyItem, 
  moneyItem,
} from "../../../provider/modules/calculator"
import { createAction, PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import api, {
  MoneyItemRequest,
  MoenyItemResponse,
} from "../../api/calculator"
import { RootState } from "../../../provider";

export const requestFetchMoneyItems = createAction(
  `${calculatorReducer.name}/requestFetchMoneyItems`
)

export const requestAddMoneyItem = createAction<moneyItem>(
  `${calculatorReducer.name}/requestAddItem`
);

function* fetchData() {
  yield console.log("--fetchData--");

  const result: AxiosResponse<MoenyItemResponse[]> = yield call(api.fetch);

  const moneyItem = result.data.map(
    (item) =>
      ({
        // 매물 ID
        itemId: item.itemId,
        // 유저 아이디
        hostName: item.hostName,
        // 가지고있는 국가
        cntHave: item.cntHave,
        // 가지고있는 돈
        crcHave: item.crcHave,
        // 원하는환전 국가
        cntWant: item.cntWant,
        // 원하는환전 액
        crcWant: item.crcWant,
        // 거래일자
        dday: item.dday,
        // 본문
        content: item.content,
        // 거래상태
        status: item.status,
      } as moneyItem)
  );

  yield put(initialMoneyItem(moneyItem));
}

function* addDataNext(action: PayloadAction<moneyItem>){
  yield console.log("--addDataNext--");
  yield console.log(action);

  try {
    const moneyItemPayload = action.payload;

    // rest api로 보낼 요청객체
    const moneyItemrequest: MoneyItemRequest = {
      itemId: moneyItemPayload.itemId,
      hostName: moneyItemPayload.hostName,
      cntHave: moneyItemPayload.cntHave,
      crcHave: moneyItemPayload.crcHave,
      cntWant: moneyItemPayload.cntWant,
      crcWant: moneyItemPayload.crcWant,
      dday: moneyItemPayload.dday,
      content: moneyItemPayload.content,
      status: true,
    };

    const result: AxiosResponse<MoenyItemResponse> = yield call(
      api.add,
      moneyItemrequest,
      );
      
      const moneyItem: moneyItem = {
      itemId: result.data.itemId,
      hostName: result.data.hostName,
      cntHave: result.data.cntHave,
      crcHave: result.data.crcHave,
      cntWant: result.data.cntWant,
      crcWant: result.data.crcWant,
      dday: result.data.dday,
      content: result.data.content,
      status: true,
    };

    yield put(addMoneyItem(moneyItem));

    yield console.log("------ add request ------");
    yield console.log(moneyItem);

  } catch (e:any) {
    console.log(e);
  }
}



export default function* calculatorSaga() {
  yield takeEvery(requestFetchMoneyItems, fetchData);
  yield takeEvery(requestAddMoneyItem, addDataNext);
}