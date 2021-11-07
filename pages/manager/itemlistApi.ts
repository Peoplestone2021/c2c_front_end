import axios from "axios";

export interface ItemListItemResponse {
  id: number;
  hostName: string;
  crcHave: number;
  cntHave: string;
  memo: string;
  crcWant: number;
  cntWant: string;
  bidderName: string;
  status?: boolean;
  createdTime: number;
}

export interface ItemListItemRequest {
  hostName?: string;
  crcHave?: number;
  cntHave?: string;
  memo?: string;
  crcWant?: number;
  cntWant?: string;
  bidderName?: string;
  status?: boolean;
}

const itemlistApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<ItemListItemResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE}/itemlists`),


  // axios.post<응답타입>(요청URL, 요청객체(JSON바디));
  // POST 요청URL HTTP/1.1  {...}
  // add: (commentItem: CommentItemRequest) =>
  //   axios.post<CommentItemResponse>(
  //     `${process.env.REACT_APP_API_BASE}/comments`,
  //     commentItem
  //   ),

};

export default itemlistApi;