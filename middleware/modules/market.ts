import marketReducer, {
  addMarketItem,
  removeMarketItem,
  modifyMarketItem,
  initialMarketItem,
  initialMarket,
  initialCompleted,
  addTotalpages,
  initialPagedMarket,
  initialNextMarket,
  MarketPage,
  CommentItem,
  addCommentItem,
  CommentPage,
  initialNextMarketComment,
  initialComment,
  initialCommentItem,
  removeCommentItem,
  modifyCommentItem,
} from "../../provider/modules/market";
import { createAction, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { MarketItem } from "../../provider/modules/market";
import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import api, {
  MarketItemPagingResponse,
  MarketItemRequest,
  MarketItemResponse,
  CommentItemPagingResponse,
  CommentItemRequest,
  CommentItemResponse,
  CommentItemModRequest,
} from "../../api/market";
import { AxiosResponse } from "axios";
import { endProgress, startProgress } from "../../provider/modules/progress";
import { RootState } from "../../provider";

export interface PageRequest {
  page: number;
  size: number;
}

// ====   saga action   ====
// item 추가
export const requestAddMarketItem = createAction<MarketItem>(
  `${marketReducer.name}/requestAddMarketItem`
);

// 숫자페이징 추가
export const requestAddMarketPaging = createAction<MarketItem>(
  `${marketReducer.name}/requestAddMarketPaging`
);
// 더보기
export const requestAddMarketNext = createAction<MarketItem>(
  `${marketReducer.name}/requestAddMarketNext`
);

export const requestFetchMarketItems = createAction(
  `${marketReducer.name}/requestFetchMarketItems`
);
// item을 페이징으로 가져오는 action
export const requestFetchPagingMarketItems = createAction<PageRequest>(
  `${marketReducer.name}/requestFetchPagingMarketItems`
);
export const requestFetchNextMarketItems = createAction<PageRequest>(
  `${marketReducer.name}/requestFetchNextMarketItems`
);
// 개별 item
export const requestFetchMarketItem = createAction<number>(
  `${marketReducer.name}/requestFetchMarketItem`
);
export const requestRemoveMarketItem = createAction<number>(
  `${marketReducer.name}/requestRemoveMarketItem/`
);
export const requestRemoveMarketPaging = createAction<number>(
  `${marketReducer.name}/requestRemoveMarketItemPaging`
);
export const requestRemoveMarketItemNext = createAction<number>(
  `${marketReducer.name}/requestRemoveMarketItemNext`
);
export const requestModifyMarketItem = createAction<MarketItem>(
  `${marketReducer.name}/requestModifyMarketItem`
);
export const requestAddCommentItem = createAction<CommentItemRequest>(
  `${marketReducer.name}/requestAddCommentItem`
);
export const requestFetchCommentItem = createAction<number>(
  `${marketReducer.name}/requestFetchCommentItem`
);
export const requestFetchCommentItems = createAction<number>(
  `${marketReducer.name}/requestFetchCommentItems`
);
export const requestFetchNextCommentItems = createAction<PageRequest>(
  `${marketReducer.name}/requestFetchNextCommentItems`
);
export const requestRemoveCommentItem = createAction<number>(
  `${marketReducer.name}/requestRemoveCommentItem`
);
export const requestModifyCommentItem = createAction<CommentItemModRequest>(
  `${marketReducer.name}/requestModifyCommentItem`
);

// 더보기 페이징
//

// ====    saga action 처리    ====
// alret 없음
function* addDataPaging(action: PayloadAction<MarketItem>) {
  try {
    const marketItemPayload = action.payload;
    yield put(startProgress());

    const marketItemRequest: MarketItemRequest = {
      marketId: marketItemPayload.marketId,
      itemId: marketItemPayload.itemId,
      hostName: marketItemPayload.hostName,
      crcHave: marketItemPayload.crcHave,
      cntHave: marketItemPayload.cntHave,
      crcWant: marketItemPayload.crcHave,
      cntWant: marketItemPayload.cntWant,
      content: marketItemPayload.content,
      dday: marketItemPayload.dday,
      createdTime: marketItemPayload.createdTime,
      status: marketItemPayload.status,
    };

    const result: AxiosResponse<MarketItemResponse> = yield call(
      api.add,
      marketItemRequest
    );

    yield put(endProgress());

    const marketData: MarketItem[] = yield select(
      (state: RootState) => state.market.data
    );

    const marketPageSize: number = yield select(
      (state: RootState) => state.market.pageSize
    );

    if (marketData.length > 0 && marketData.length == marketPageSize) {
      const deleteId = marketData[marketData.length - 1].itemId;
      yield put(removeMarketItem(deleteId));

      yield put(addTotalpages);
    }

    const marketItem: MarketItem = {
      marketId: result.data.marketId,
      itemId: result.data.itemId,
      hostName: result.data.hostName,
      crcHave: result.data.crcHave,
      cntHave: result.data.cntHave,
      crcWant: result.data.crcWant,
      cntWant: result.data.cntWant,
      content: result.data.content,
      dday: result.data.dday,
      createdTime: result.data.createdTime,
      status: result.data.status,
    };

    yield put(addMarketItem(marketItem));

    yield put(initialCompleted());

    // yield put(
    //   addAlert({ id: nanoid(), variant: "success", message: "저장되었습니다." })
    // );
  } catch (e) {
    // yield put(endProgress());
    // yield put(
    //   addAlert({ id: nanoid(), variant: "danger", message: e.message })
    // );
  }
}

function* addDataNext(action: PayloadAction<MarketItem>) {
  try {
    const marketItemPayload = action.payload;

    yield put(startProgress());

    const marketItemRequest: MarketItemRequest = {
      marketId: marketItemPayload.marketId,
      itemId: marketItemPayload.itemId,
      hostName: marketItemPayload.hostName,
      crcHave: marketItemPayload.crcHave,
      cntHave: marketItemPayload.cntHave,
      crcWant: marketItemPayload.crcHave,
      cntWant: marketItemPayload.cntWant,
      content: marketItemPayload.content,
      dday: marketItemPayload.dday,
      createdTime: marketItemPayload.createdTime,
      status: marketItemPayload.status,
    };

    const result: AxiosResponse<MarketItemResponse> = yield call(
      api.add,
      marketItemRequest
    );
    yield put(endProgress());

    const marketItem: MarketItem = {
      marketId: result.data.marketId,
      itemId: result.data.itemId,
      hostName: result.data.hostName,
      crcHave: result.data.crcHave,
      cntHave: result.data.cntHave,
      crcWant: result.data.crcWant,
      cntWant: result.data.cntWant,
      content: result.data.content,
      dday: result.data.dday,
      createdTime: result.data.createdTime,
      status: result.data.status,
    };

    yield put(addMarketItem(marketItem));

    yield put(initialCompleted());
  } catch (e) {
    yield put(endProgress());
  }
}

//FETCH - ALL ITEM
function* fetchData() {
  yield console.log("--fetchData--");

  // yield put(startProgress());

  const result: AxiosResponse<MarketItemResponse[]> = yield call(api.fetch);

  // yield put(endProgress());

  const marketItems = result.data.map(
    (item) =>
      ({
        marketId: item.marketId,
        itemId: item.itemId,
        hostName: item.hostName,
        crcHave: item.crcHave,
        cntHave: item.cntHave,
        crcWant: item.crcWant,
        cntWant: item.cntWant,
        content: item.content,
        dday: item.dday,
        status: item.status,
        createdTime: item.createdTime,
      } as MarketItem)
  );

  yield put(initialMarket(marketItems));
}

function* fetchPagingData(action: PayloadAction<PageRequest>) {
  const page = action.payload.page;
  const size = action.payload.size;

  localStorage.setItem("market_page_size", size.toString());

  yield put(startProgress());

  try {
    const result: AxiosResponse<MarketItemPagingResponse> = yield call(
      api.fetchPaging,
      page,
      size
    );
    yield put(endProgress());

    const marketPage: MarketPage = {
      data: result.data.content.map(
        (item) =>
          ({
            marketId: item.marketId,
            itemId: item.itemId,
            hostName: item.hostName,
            crcHave: item.crcHave,
            cntHave: item.cntHave,
            crcWant: item.crcWant,
            cntWant: item.cntWant,
            dday: item.dday,
            content: item.content,
            status: item.status,
            createdTime: item.createdTime,
          } as MarketItem)
      ),
      totalElements: result.data.totalElements,
      totalPages: result.data.totalPages,
      page: result.data.number,
      pageSize: result.data.size,
      isLast: result.data.last,
    };

    yield put(initialPagedMarket(marketPage));
  } catch (e) {
    yield put(endProgress());
  }
}

function* fetchNextData(action: PayloadAction<PageRequest>) {
  const page = action.payload.page;
  const size = action.payload.size;

  yield put(startProgress());

  try {
    const result: AxiosResponse<MarketItemPagingResponse> = yield call(
      api.fetchPaging,
      page,
      size
    );

    yield put(endProgress());

    const marketPage: MarketPage = {
      data: result.data.content.map(
        (item) =>
          ({
            marketId: item.marketId,
            itemId: item.itemId,
            hostName: item.hostName,
            crcHave: item.crcHave,
            cntHave: item.cntHave,
            crcWant: item.crcWant,
            cntWant: item.cntWant,
            dday: item.dday,
            content: item.content,
            status: item.status,
            createdTime: item.createdTime,
          } as MarketItem)
      ),
      totalElements: result.data.totalElements,
      totalPages: result.data.totalPages,
      page: result.data.number,
      pageSize: result.data.size,
      isLast: result.data.last,
    };
    yield put(initialNextMarket(marketPage));
  } catch (e) {
    yield put(endProgress());
    // yield put(
    //   addAlert({ id: nanoid(), variant: "danger", message: e.message })
    // );
  }
}

//FETCH - SINGLE ITEM
function* fetchDataItem(action: PayloadAction<number>) {
  yield console.log("--fetchItem--");

  // yield put(startProgress());

  const id = action.payload;

  const result: AxiosResponse<MarketItemResponse> = yield call(api.get, id);

  const marketItem = result.data;
  if (marketItem) {
    yield put(initialMarketItem(marketItem));
  }
}

function* removeDataPaging(action: PayloadAction<number>) {
  const id = action.payload;
  yield put(startProgress());

  const result: AxiosResponse<boolean> = yield call(api.remove, id);

  yield put(endProgress());

  if (result.data) {
    yield put(removeMarketItem(id));
  } else {
    // alert박스?
  }
  yield put(initialCompleted());

  const page: number = yield select((state: RootState) => state.market.page);
  const size: number = yield select(
    (state: RootState) => state.market.pageSize
  );

  yield put(requestFetchPagingMarketItems({ page, size }));
}

function* removeDataNext(action: PayloadAction<number>) {
  const id = action.payload;

  yield put(startProgress());

  const result: AxiosResponse<boolean> = yield call(api.remove, id);

  yield put(endProgress());

  if (result.data) {
    yield put(removeMarketItem(id));
  } else {
    // alert박스?
  }
  yield put(initialCompleted());
}

function* modifyData(action: PayloadAction<MarketItem>) {
  const marketItemPayload = action.payload;

  yield put(startProgress());

  const marketItemRequest: MarketItemRequest = {
    marketId: marketItemPayload.marketId,
    itemId: marketItemPayload.itemId,
    hostName: marketItemPayload.hostName,
    crcHave: marketItemPayload.crcHave,
    cntHave: marketItemPayload.cntHave,
    crcWant: marketItemPayload.crcHave,
    cntWant: marketItemPayload.cntWant,
    content: marketItemPayload.content,
    dday: marketItemPayload.dday,
    createdTime: marketItemPayload.createdTime,
    status: marketItemPayload.status,
  };

  const result: AxiosResponse<MarketItemResponse> = yield call(
    api.modify,
    marketItemPayload.marketId,
    marketItemRequest
  );

  yield put(endProgress());

  const marketItem: MarketItem = {
    marketId: result.data.marketId,
    itemId: result.data.itemId,
    hostName: result.data.hostName,
    crcHave: result.data.crcHave,
    cntHave: result.data.cntHave,
    crcWant: result.data.crcWant,
    cntWant: result.data.cntWant,
    content: result.data.content,
    dday: result.data.dday,
    createdTime: result.data.createdTime,
    status: result.data.status,
  };

  yield put(modifyMarketItem(marketItem));

  yield put(initialCompleted());
}

function* addCommentNext(action: PayloadAction<CommentItemRequest>) {
  try {
    const commentItemPayload = action.payload;
    // const commentIclude = id.payload;

    yield put(startProgress());

    const commentItemRequest: CommentItemRequest = {
      marketId: commentItemPayload.marketId,
      userName: commentItemPayload.userName,
      commentContent: commentItemPayload.commentContent,
      createdTime: commentItemPayload.createdTime,
    };

    const result: AxiosResponse<CommentItemResponse> = yield call(
      api.postComment,
      commentItemRequest
    );
    yield put(endProgress());
    /////////////////////// commentId ? 백엔드 연동시에 수정해야할듯
    const commentItem: CommentItemRequest = {
      // commentId: result.data.commentId,
      marketId: result.data.marketId,
      userName: result.data.userName,
      commentContent: result.data.commentContent,
      createdTime: result.data.createdTime,
    };

    yield put(addCommentItem(commentItem));

    yield put(initialCompleted());
  } catch (e) {
    yield put(endProgress());
  }
}

function* fetchNextCommentData(action: PayloadAction<PageRequest>) {
  const page = action.payload.page;
  const size = action.payload.size;

  yield put(startProgress());

  try {
    const result: AxiosResponse<CommentItemPagingResponse> = yield call(
      api.fetchPagingComment,
      page,
      size
    );

    yield put(endProgress());

    const commentPage: CommentPage = {
      data: result.data.content.map(
        (item) =>
          ({
            commentId: item.commentId,
            marketId: item.marketId,
            userName: item.userName,
            commentContent: item.commentContent,
            createdTime: item.createdTime,
          } as CommentItem)
      ),
      totalElements: result.data.totalElements,
      totalPages: result.data.totalPages,
      page: result.data.number,
      pageSize: result.data.size,
      isLast: result.data.last,
    };
    yield put(initialNextMarketComment(commentPage));
  } catch (e) {
    yield put(endProgress());
  }
}

function* fetchCommentData(action: PayloadAction<number>) {
  const id = action.payload;

  yield put(startProgress());

  try {
    const result: AxiosResponse<CommentItemResponse[]> = yield call(
      api.fetchComment,
      id
    );

    const commentItems: CommentItem[] = result.data.map(
      (item) =>
        ({
          commentId: item.commentId,
          marketId: item.marketId,
          userName: item.userName,
          commentContent: item.commentContent,
          createdTime: item.createdTime,
          isEmpty: item.isEmpty,
        } as CommentItem)
    );

    yield put(initialComment(commentItems));
  } catch (e) {
    yield put(endProgress());
  }
}

function* fetchCommentDataItem(action: PayloadAction<number>) {
  const id = action.payload;

  const result: AxiosResponse<CommentItemResponse> = yield call(
    api.getComment,
    id
  );

  const commentItem = result.data;
  if (commentItem) {
    yield put(initialCommentItem(commentItem));
  }
}

function* removeComment(action: PayloadAction<number>) {
  const id = action.payload;

  yield put(startProgress());

  const result: AxiosResponse<boolean> = yield call(api.removeComment, id);

  yield put(endProgress());
  if (result.data) {
    yield put(removeCommentItem(id));
  } else {
    // alert박스?
  }
}
function* modifyComment(action: PayloadAction<CommentItem>) {
  const commentItemPayload = action.payload;

  yield put(startProgress());

  const commentItemRequest: CommentItemModRequest = {
    commentId: commentItemPayload.commentId,
    marketId: commentItemPayload.marketId,
    userName: commentItemPayload.userName,
    commentContent: commentItemPayload.commentContent,
    createdTime: commentItemPayload.createdTime,
    isEmpty: commentItemPayload.isEmpty,
  };

  const result: AxiosResponse<CommentItemResponse> = yield call(
    api.modifyComment,
    commentItemPayload.commentId,
    commentItemRequest
  );

  yield put(endProgress());

  const commentItem: CommentItem = {
    /////////////////////// commentId ? 백엔드 연동시에 수정해야할듯
    commentId: result.data.commentId,
    marketId: result.data.marketId,
    userName: result.data.userName,
    commentContent: result.data.commentContent,
    createdTime: result.data.createdTime,
    isEmpty: result.data.isEmpty,
  };

  yield put(modifyCommentItem(commentItem));

  yield put(initialCompleted());
}

//====    saga action 감지    ====

export default function* marketSaga() {
  yield takeEvery(requestAddMarketItem, addDataNext);
  yield takeEvery(requestAddMarketPaging, addDataPaging);
  yield takeEvery(requestAddMarketNext, addDataNext);

  yield takeEvery(requestFetchMarketItem, fetchDataItem);
  yield takeLatest(requestFetchMarketItems, fetchData);
  yield takeLatest(requestFetchPagingMarketItems, fetchPagingData);
  yield takeLatest(requestFetchNextMarketItems, fetchNextData);

  yield takeEvery(requestRemoveMarketItem, removeDataNext);
  yield takeEvery(requestRemoveMarketPaging, removeDataPaging);
  yield takeEvery(requestRemoveMarketItemNext, removeDataNext);

  yield takeEvery(requestModifyMarketItem, modifyData);

  yield takeEvery(requestAddCommentItem, addCommentNext);
  yield takeLatest(requestFetchNextCommentItems, fetchNextCommentData);
  yield takeLatest(requestFetchCommentItems, fetchCommentData);
  yield takeLatest(requestFetchCommentItem, fetchCommentDataItem);
  yield takeEvery(requestRemoveCommentItem, removeComment);
  yield takeEvery(requestModifyCommentItem, modifyComment);
}
