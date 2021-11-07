import axios from "axios";

export interface CommentItemResponse {
  id: number;
  memo: string;
  name: string;
  createdTime: number;
}

export interface CommentItemRequest {
  memo?: string;
  name?: string;
}

const commentApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<CommentItemResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE}/comments`),
  // REACT_APP_API_BASE = "http://ec2-13-124-138-226.ap-northeast-2.compute.amazonaws.com:8080"

  // axios.post<응답타입>(요청URL, 요청객체(JSON바디));
  // POST 요청URL HTTP/1.1  {...}
  // add: (commentItem: CommentItemRequest) =>
  //   axios.post<CommentItemResponse>(
  //     `${process.env.REACT_APP_API_BASE}/comments`,
  //     commentItem
  //   ),

};

export default commentApi;