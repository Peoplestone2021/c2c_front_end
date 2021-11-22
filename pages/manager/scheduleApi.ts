import axios from "axios";

export interface EventItemResponse {
  id?: number;
  groupId?: number;
  title: string;
  memo?: string;
  start?: string;
  // end?: string;
}

export interface EventItemRequest {
  id?: number;
  groupId: number;
  title: string;
  memo?: string;
  start?: string;
  // end?: string;
}

const scheduleApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<EventItemResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE}/events`),
  // REACT_APP_API_BASE = "http://ec2-13-124-138-226.ap-northeast-2.compute.amazonaws.com:8080"

  // axios.post<응답타입>(요청URL, 요청객체(JSON바디));
  // POST 요청URL HTTP/1.1  {...}
  add: (eventItem: EventItemRequest) =>
    axios.post<EventItemResponse>(
      `${process.env.REACT_APP_API_BASE}/events`,
      eventItem
    ),

};

export default scheduleApi;