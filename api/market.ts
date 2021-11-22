import { createAxiosInstance } from "./_request";

export interface MarketPagingResponse {
  content: MarketItemResponse[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface MarketItemResponse {
  marketId: number;
  itemId: number;
  hostName: string;
  crcHave: string;
  cntHave: number;
  crcWant: string;
  cntWant: number;
  dday: string;
  content: string;
  status: boolean;
  createdTime: number;
}

export interface MarketItemRequest {
  marketId: number;
  itemId: number;
  hostName: string;
  crcHave: string;
  cntHave: number;
  crcWant: string;
  cntWant: number;
  dday: string;
  content: string;
  status: boolean;
  createdTime: number;
}

export interface MarketItemPagingResponse {
  content: MarketItemResponse[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface CommentItemRequest {
  itemId: number;
  userName: string;
  commentContent: string;
}

export interface CommentItemResponse {
  commentId: number;
  itemId: number;
  userName: string;
  commentContent: string;
  createdTime: number;
  isEmpty: boolean;
}

const marketApi = {
  get: (id: number) =>
    createAxiosInstance().get<MarketItemResponse>(
      // `${process.env.NEXT_PUBLIC_FILE_MARKET_BASE}/marketItems/${id}`
      `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/${id}`
    ),
  fetch: () =>
    createAxiosInstance().get<MarketItemResponse[]>(
      // `${process.env.NEXT_PUBLIC_FILE_MARKET_BASE}/marketItems`
      `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems`
    ),
  // fetchCrc: (crc: string) =>
  //   createAxiosInstance().get<MarketItemResponse>(
  //     `${process.env.NEXT_PUBLIC_API_BASE}/marketItemCurrent/${crc}`
  //   ),
  fetchPaging: (page: number, size: number) =>
    createAxiosInstance().get<MarketItemPagingResponse>(
      // `${process.env.NEXT_PUBLIC_API_BASE}/marketItems/paging?=${page}&size=${size}`
      `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/paging?page=${page}&size=${size}`
    ),
  add: (marketItem: MarketItemRequest) => {
    createAxiosInstance().post<MarketItemResponse>(
      // `${process.env.NEXT_PUBLIC_API_BASE}/marketItems/`,
      `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/`,
      marketItem
    );
  },

  remove: (id: number) => {
    createAxiosInstance().delete<boolean>(
      `${process.env.NEXT_PUBLIC_API_BASE}/marketItems/${id}`
    );
  },

  modify: (id: number, marketItem: MarketItemRequest) => {
    createAxiosInstance().put<MarketItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/marketItems/${id}`,
      marketItem
    );
  },

  // postComment: (commentItem: CommentItemRequest, commentId: number) =>
  //   createAxiosInstance().post<CommentItemResponse>(
  //     `${process.env.NEXT_PUBLIC_FILE_MARKET_BASE}/comments/${commentId}`,
  //     commentItem
  //   ),
};

export default marketApi;
