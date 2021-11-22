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

export interface CommentItem {
  commentId: number;
  marketId: number;
  userName: string;
  commentContent: string;
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

export interface CommentPage {
  data: CommentItem[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

// //////////////// commentInitial 충돌 가능성 있음
interface MarketState {
  data: MarketItem[];
  commentData: CommentItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean;
  isModifyCompleted?: boolean;
  totalElements?: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast?: boolean;
  isCommentFetched: boolean;
  isCommentAddCompleted?: boolean;
  isCommentRemoveCompleted?: boolean;
  isCommentModifyCompleted?: boolean;
  totalCommentElements?: number;
  totalCommentPages: number;
  commentPage: number;
  commentPageSize: number;
  isCommentLast?: boolean;
}

const initialState: MarketState = {
  data: [],
  isFetched: false,
  page: 0,
  pageSize: 8,
  totalPages: 0,
  commentData: [],
  isCommentFetched: false,
  commentPage: 0,
  totalCommentPages: 0,
  commentPageSize: 30,
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
    addCommentItem: (state, action: PayloadAction<CommentItem>) => {
      const comment = action.payload;
      state.commentData.unshift(comment);
      state.isCommentAddCompleted = true;
    },
    initialNextMarketComment: (state, action: PayloadAction<CommentPage>) => {
      state.commentData = state.commentData.concat(action.payload.data);
      state.totalCommentElements = action.payload.totalElements;
      state.totalCommentPages = action.payload.totalPages;
      state.commentPage = action.payload.page;
      state.commentPageSize = action.payload.pageSize;
      state.isCommentLast = action.payload.isLast;
      state.isCommentFetched = true;
    },
    initialComment: (state, action: PayloadAction<CommentItem[]>) => {
      const commentItems = action.payload;
      state.commentData = commentItems;
      state.isCommentFetched = true;
    },
    initialCommentItem: (state, action: PayloadAction<CommentItem>) => {
      const commentItem = action.payload;
      state.commentData = [{ ...commentItem }];
    },
    removeCommentItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.commentData.splice(
        state.commentData.findIndex((item) => item.commentId === id),
        1
      );
      state.isCommentRemoveCompleted = true; // 삭제 되었음을 표시
    },
    modifyCommentItem: (state, action: PayloadAction<CommentItem>) => {
      const modifyItem = action.payload;
      const commentItem = state.commentData.find(
        (item) => item.commentId === modifyItem.commentId
      );
      if (commentItem) {
        commentItem.commentContent = modifyItem.commentContent;
      }
      state.isCommentModifyCompleted = true;
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
  addCommentItem,
  initialNextMarketComment,
  initialComment,
  initialCommentItem,
  removeCommentItem,
  modifyCommentItem,
} = marketSlice.actions;

export default marketSlice.reducer;
