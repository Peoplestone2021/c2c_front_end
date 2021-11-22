import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface marketItem {
//   itemId: number;
//   marketId: number;
//   hostName: String;
//   crcHave: String;
//   crcWant: String;
//   cntHave: number;
//   cntWant: number;
//   dday: String;
//   content?: String;
//   status: boolean;
//   createdTime: number;
// }
export interface MarketItem {
  itemId: number;
  marketId: number;
  hostName: string;
  crcHave: string;
  crcWant: string;
  cntHave: number;
  cntWant: number;
  dday: string;
  content: string;
  status: boolean;
  createdTime: number;
}

export interface MarketPage {
  data: MarketItem[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

interface MarketState {
  data: MarketItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean;
  isModifyCompleted?: boolean;
  totalElements?: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast?: boolean;
}

const initialState: MarketState = {
  data: [],
  isFetched: false,
  page: 0,
  pageSize: 8,
  totalPages: 0,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    addMarketItem: (state, action: PayloadAction<MarketItem>) => {
      const market = action.payload;
      state.data.unshift(market);
      state.isAddCompleted = true; // 추가가 되었음으로 표시
    },
    initialCompleted: (state) => {
      delete state.isAddCompleted;
      delete state.isRemoveCompleted;
      delete state.isModifyCompleted;
    },
    removeMarketItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
      state.data.splice(
        state.data.findIndex((item) => item.marketId === id),
        1
      );
      state.isRemoveCompleted = true; // 삭제 되었음을 표시
    },
    modifyMarketItem: (state, action: PayloadAction<MarketItem>) => {
      // 생성해서 넘긴 객체
      const modifyItem = action.payload;
      // state에 있는 객체
      const marketItem = state.data.find(
        (item) => item.marketId === modifyItem.marketId
      );
      // state에 있는 객체의 속성을 넘김 객체의 속성으로 변경
      if (marketItem) {
        marketItem.crcHave = modifyItem.crcHave;
        marketItem.cntHave = modifyItem.cntHave;
        marketItem.crcWant = modifyItem.crcWant;
        marketItem.cntWant = modifyItem.cntWant;
        marketItem.content = modifyItem.content;
        marketItem.dday = modifyItem.dday;
      }
      state.isModifyCompleted = true; // 변경 되었음을 표시
    },
    initialMarketItem: (state, action: PayloadAction<MarketItem>) => {
      const marketItem = action.payload;
      state.data = [{ ...marketItem }];
    },
    initialMarket: (state, action: PayloadAction<MarketItem[]>) => {
      const marketItems = action.payload;
      state.data = marketItems;
      state.isFetched = true;
    },
    addTotalpages: (state) => {
      state.totalPages++;
    },
    initialPagedMarket: (state, action: PayloadAction<MarketPage>) => {
      state.data = action.payload.data;
      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;
      state.isFetched = true;
    },
    initialNextMarket: (state, action: PayloadAction<MarketPage>) => {
      state.data = state.data.concat(action.payload.data);
      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;
      state.isFetched = true;
    },
  },
});

export const {
  addMarketItem,
  removeMarketItem,
  modifyMarketItem,
  initialMarketItem,
  initialMarket,
  initialCompleted,
  addTotalpages,
  initialPagedMarket,
  initialNextMarket,
} = marketSlice.actions;

export default marketSlice.reducer;
