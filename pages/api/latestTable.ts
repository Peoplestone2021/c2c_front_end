import axios from "axios";

// 서버로 부터 받아오는 데이터 1건에 대한 타입
interface rateRespons {
  itemId: string;
  hostName: string;
  cntHave: string;
  crcHave: number;
  cntWant: string;
  crcWant: number;
  status: boolean;
}

// 서버하고 데이터 연동하는 api처리 목록을 별도의 객체로 작성
// process.env.변수명
const latestApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1   // http://localhost:8080/lobby/rate
  fetch: () =>
    // http://54.180.135.245:6060/lobby/rate"
    axios.get<rateRespons[]>(`http://54.180.135.245:8080/saleItemList`),
};

export default latestApi;
