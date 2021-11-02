// import itemState from "../../provider/modules/market";

// const getTimeStringD = (unixtime: number) => {
//   return;
// };

interface MarketItem {
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

const MarketItem = [
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

// const marketItems= data.map((item)=>)

const market = () => {
  return (
    <section>
      <h2>마켓플레이스</h2>
      <div></div>
      <table>
        <thead>
          <tr>
            <th scope="col">국가</th>
            <th>금액</th>
            <th>가격</th>
            {/*정렬 기능 버튼처리 필요*/}
            <th>상태</th>
            <th>거래마감</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/* 더보기 버튼, 페이징 처리 필요 */}
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
