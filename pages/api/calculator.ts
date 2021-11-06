import axios from "axios";

// 서버로 부터 받아오는 데이터 1건에 대한 타입
interface ExChangeRateResponse {
  curUnit: string;
  dealBasR: string;
}

interface ExChangeRateRequest {
  curUnit: string;
  dealBasR: string;
}

// 서버하고 데이터 연동하는 api처리 목록을 별도의 객체로 작성
// process.env.변수명
const calculatorApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<ExChangeRateResponse[]>(`http://54.180.135.245:8080/lobby/rate`),

  // axios.post<응답타입>(요청URL, 요청객체(JSON바디));
  // POST 요청URL HTTP/1.1  {...}
  // add: (todoItem: TodoItemRequest) =>
  //   axios.post<TodoItemResponse>(
  //     `${process.env.NEXT_PUBLIC_API_BASE}/lobby/rate`,
  //     todoItem
  //   ),
};

export default calculatorApi;
