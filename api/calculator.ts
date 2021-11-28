import axios from "axios";
import { createAxiosInstance } from "./_request";

// 환율 서버로부터 받아오는 데이터 1건에 대한 타입
interface ExChangeRateResponse {
  curUnit: string;
  dealBasR: number;
}

// 서버에서 받아오는 한건에 대한 타입
export interface MoenyItemResponse {
  // 매물 ID
  itemId: number;
  // 유저 아이디
  hostName: String;
  // 가지고있는 국가
  crcHave: String;
  // 가지고있는 돈
  cntHave: number;
  // 원하는환전 국가
  crcWant: String;
  // 원하는환전 액
  cntWant: number;
  // 거래일자
  dday: String;
  // 본문
  content: String;
  // 거래상태
  status: boolean;
}
export interface MoneyItemRequest {
  // 아이템 아이디
  itemId: number;
  // 유저 아이디
  hostName: String;
  // 가지고있는 국가
  crcHave: String;
  // 가지고있는 돈
  cntHave: number;
  // 원하는환전 국가
  crcWant: String;
  // 원하는환전 액
  cntWant: number;
  // 거래일자
  dday: String;
  // 본문
  content: String;
  // 거래상태
  status: boolean;
}

// 서버하고 데이터 연동하는 api처리 목록을 별도의 객체로 작성
// process.env.변수명
const calculatorApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  // 원하는 국가에 해당되는 매매기준율을 불러오는 api
  cntFetch: (wantCountry: string) =>
    axios.get<ExChangeRateResponse[]>(
      // `http://localhost:8080/lobby/rate/${wantCountry}`
      `http://52.78.5.170:8080/lobby/rate/${wantCountry}`
    ),

  // axios.post<응답타입>(요청URL, 요청객체(JSON바디));
  // POST 요청URL HTTP/1.1  {...}
  add: (addItem: MoneyItemRequest) =>
    // axios.post<MoneyItemRequest>(`http://localhost:8080/saleItemList`, addItem),
    axios.post<MoneyItemRequest>(
      `http://52.78.5.170:8080/saleItemList`,
      addItem
    ),

  // 매물 데이터 목록 받아오기
  fetch: () =>
    // axios.get<MoneyItemRequest>(`http://localhost:8080/saleItemList`),
    axios.get<MoneyItemRequest>(`http://52.78.5.170:8080/saleItemList`),
};

export default calculatorApi;
