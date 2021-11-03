// import itemState from "../../provider/modules/market";
import axios from "axios";
import { NavItem, ToastBody } from "react-bootstrap";
import styles from "../../styles/market.module.css";
// import { flagusd } from "../market/data";

// const getTimeStringD = (unixtime: number) => {
//   return;
// };

interface marketItems {
  id: number;
  hostName: String;
  crcHave: String;
  crcWant: String;
  cntHave: number;
  cntWant: number;
  dDate: String;
  content?: String;
  status: boolean;
}

interface marketItemListResponse {
  id: number;
  crcHave: String;
  // crcWant: String; // 한국원 케이스 알고리즘 필요
  cntHave: number;
  cntWant: number;
  dDate: String;
  // content?: String;
  status: boolean;
}

const marketItems = [
  {
    id: 11111111,
    hostName: "일번",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 100,
    cntWant: 117400,
    dDate: "1635747679",
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 22222222,
    hostName: "이번",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 110,
    cntWant: 127400,
    dDate: "1635745679",
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 33333333,
    hostName: "삼번",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 120,
    cntWant: 128400,
    dDate: "1635749679",
    content: "외로운 섬하나",
    status: true,
  },
  {
    id: 44444444,
    hostName: "사번",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 120,
    cntWant: 128400,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
];

// const MarketItemData = (marketItems) => {};

// const flag = flagusd;

// const marketItems= map((item)=>({
//   id.
// })
// )

const market = () => {
  return (
    <section>
      <div id="site-container" style={{ width: "50vw" }} className="mx-auto">
        <h1 className="text-center my-5 fw-bold border-bottom pb-4">
          마켓플레이스
        </h1>
        <div
          id="search-form"
          className="gap-2 button-group  mx-auto d-md-flex"
          role="group"
          style={{ width: 150 }}
        >
          <button className="btn btn-secondary">[검색</button>
          <button className="btn btn-secondary">도구]</button>
        </div>{" "}
        {/*검색 도구*/}
        <span className="bi bi-list badge bg-light fw-bold"> LIST</span>
        <table className="text-center striped bordered hover w-100">
          <thead>
            <tr className="text-secondary">
              <th scope="col">국가</th>
              <th>금액</th>
              <th>가격</th>
              {/*정렬 기능 버튼처리 필요-후순위*/}
              <th>상태</th>
              <th>거래마감</th>
            </tr>
          </thead>
          <tbody className="border-bottom border-top">
            {" "}
            {/*map으로 출력하도록*/}
            <tr className="h-40">
              <td>USD</td>
              {/*state사용*/}
              <td>1,000</td>
              <td>1,174,000w</td>
              <td className="bi bi-play-fill"></td>
              <td className="text-warning">오늘</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>1,100</td>
              <td>1,291,000w</td>
              <td className="bi bi-play-fill"></td>
              <td>마감없음</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>890</td>
              <td>1,044,000w</td>
              <td className="bi bi-stop-fill"></td>
              <td>-14일</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>880</td>
              <td>1,033,000w</td>
              <td className="bi bi-play-fill"></td>
              <td>-7일</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>1,150</td>
              <td>1,291,000w</td>
              <td className="bi bi-play-fill"></td>
              <td>마감없음</td>
            </tr>
          </tbody>
        </table>
        <table className="text-center striped bordered hover w-100">
          <thead>
            <tr className="text-secondary">
              <th scope="col">국가</th>
              <th>금액</th>
              <th>가격</th>
              {/*정렬 기능 버튼처리 필요-후순위*/}
              <th>상태</th>
              <th>거래마감</th>
            </tr>
          </thead>
          <tbody className="border-bottom border-top"></tbody>
        </table>
        <div className="text-center btn text-secondary fs-10 fw-bold mx-auto">
          더 보기
        </div>
        {/* 더보기 버튼, 페이징 처리 필요 */}
      </div>
    </section>
  );
  // 머지 테스트
};

//{market.data.map((item, index) => (
//  <tbody key={`market-item-${index}`} id="tr-list">
//  <tr>
//    {/* 버튼 필요 */}
//     <td>{item.crcHave}</td>
//     <td>{item.cntHave}</td>
//     <td>{item.cntWant}</td>
//     <td>{item.status}</td>
//     <td>{getTimeStringD(item.dDay)}</td> {/*마감시간 계산함수 필요*/}
//   </tr>
// </tbody>
// ))} // 데이터 테이블
export default market;
