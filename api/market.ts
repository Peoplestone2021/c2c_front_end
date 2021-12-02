import { CommentItem } from "../provider/modules/market";
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

export interface CommentItemPagingResponse {
  content: CommentItemResponse[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  isEmpty: boolean;
}

export interface CommentItemResponse {
  commentId: number;
  marketId: number;
  userName: string;
  commentContent: string;
  createdTime: number;
  isEmpty: boolean;
}
export interface CommentItemRequest {
  commentId: number;
  marketId: number;
  userName: string;
  commentContent: string;
  createdTime: number;
  isEmpty: boolean;
}
export interface CommentItemModRequest {
  commentId?: number;
  marketId: number;
  userName: string;
  commentContent: string;
  createdTime: number;
  isEmpty?: boolean;
}

const marketApi = {
  get: (id: number) =>
    createAxiosInstance().get<MarketItemResponse>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems/${id}`
    ),
  fetch: () =>
    createAxiosInstance().get<MarketItemResponse[]>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems`
    ),
  // fetchCrc: (crc: string) =>
  //   createAxiosInstance().get<MarketItemResponse>(
  //     `${process.env.NEXT_PUBLIC_API_BASE}/marketItemCurrent/${crc}`
  //   ),
  fetchPaging: (page: number, size: number) =>
    createAxiosInstance().get<MarketItemPagingResponse>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems/paging?=${page}&size=${size}`
    ),

  add: (marketItem: MarketItemRequest) =>
    createAxiosInstance().post<MarketItemResponse>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems/`,
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/`,
      marketItem
    ),
  remove: (id: number) =>
    createAxiosInstance().delete<boolean>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems/${id}`
    ),
  modify: (id: number, marketItem: MarketItemRequest) =>
    createAxiosInstance().put<MarketItemResponse>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems/${id}`,
      marketItem
    ),
  getComment: (id: number) =>
    createAxiosInstance().get<number>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/comment/${id}`
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/comment/${id}`
    ),
  fetchComment: (id: number) =>
    createAxiosInstance().get<CommentItemResponse[]>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/comments/${id}`
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/comments/${id}`
    ),
  fetchPagingComment: (page: number, size: number) =>
    createAxiosInstance().get<CommentItemPagingResponse>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/marketItems/paging?=${page}&size=${size}`
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/comments/paging?page=${page}&size=${size}`
    ),
  postComment: (commentItem: CommentItemRequest) =>
    createAxiosInstance().post<CommentItemResponse>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/comments/`,
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/comments/`,
      commentItem
    ),
  removeComment: (id: number) =>
    createAxiosInstance().delete<boolean>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/comment/${id}`
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/comment/${id}`
    ),
  modifyComment: (id: number, item: CommentItem) =>
    createAxiosInstance().put<CommentItemRequest>(
      `${process.env.NEXT_PUBLIC_API_MARKET_BASE}/comment/${id}`,
      // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/comment/${id}`,
      item
    ),
};

export default marketApi;
