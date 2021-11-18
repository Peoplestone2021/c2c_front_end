import { useRouter } from "next/router";
import Image from "next/image";
import Appbar from "../bar/appbar";
import MarketApi from "../api/market";
import { marketItem } from "./marketApi";
import { GetServerSideProps } from "next";
import { delay } from "@redux-saga/core/effects";
import ScatterChart from "./chart/ScatterChart";
import marketApi, { MarketItemResponse } from "../../api/market";

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  const day = 24 * 60 * 60 * 1000;
  return unixtime - new Date().getTime() >= day
    ? dateTime.toLocaleDateString()
    : dateTime.toLocaleTimeString();
  // return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const itemStatus = (d: boolean) => {
  if (d === true) {
    return <span className="bi bi-play-fill"></span>;
  }
  return <span className="bi bi-stop-fill"></span>;
};

interface IndexProp {
  marketItemList: MarketItemResponse[];
}

const Market = ({ marketItemList }: IndexProp) => {
  const router = useRouter();

  console.log(marketItemList);

  const marketItems: marketItem[] = [
    {
      itemId: 11111111,
      hostName: "Zero",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 1000,
      cntWant: 1174000,
      dday: "20211212",
      content: "울릉도 동남쪽",
      status: true,
    },
    {
      itemId: 22222222,
      hostName: "One",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 1100,
      cntWant: 1291000,
      dday: "20211212",
      content: "뱃길따라 이백리",
      status: true,
    },
    {
      itemId: 33333333,
      hostName: "Two",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 890,
      cntWant: 1044000,
      dday: "20211212",
      content: "외로운 섬하나",
      status: false,
    },
    {
      itemId: 44444444,
      hostName: "Three",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 880,
      cntWant: 1033000,
      dday: "20211212",
      content: "새들의 고향",
      status: true,
    },
    {
      itemId: 55555555,
      hostName: "Three",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 1150,
      cntWant: 1350000,
      dday: "20211212",
      content: "새들의 고향",
      status: true,
    },
  ];

  return (
    <section>
      <Appbar />
      <div id="site-container" style={{ width: "50vw" }} className="mx-auto">
        <h1 className="text-center my-5 fw-bold border-bottom pb-4">
          마켓플레이스
        </h1>
        <span>
          <ScatterChart />
        </span>
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
        <table className="table text-center striped bordered table-hover max-auto">
          <thead>
            <tr className="text-secondary">
              <th scope="col">국가</th>
              <th scope="col">금액</th>
              <th scope="col">가격</th>
              {/*정렬 기능 버튼처리 필요-후순위*/}
              <th scope="col">상태</th>
              <th scope="col">거래마감</th>
            </tr>
          </thead>
          <tbody className="border-bottom border-top">
            {" "}
            {/*map으로 출력하도록*/}
            {/* {marketItemList.map((d, index) => (
              <tr key={`market-item-list-${index}`}>
                <td>{d.crcHave}</td>
                <td>{d.cntHave}</td>
                <td>{d.cntWant}</td>
                <td>{itemStatus(d.status)}</td> */}
            {/* <td>{getTimeString(d.dday)}</td> */}
            {/* <td>{d.dday}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <div>
          {marketItems.map((d, index) => (
            <div
              key={`market-item-${index}`}
              className="card mx-auto"
              onClick={() => {
                router.push(`/market/detail/${d.itemId}`);
              }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  <Image src="/flag_usd.png" alt="USD" width="40" height="40" />
                  USD
                </h5>
                <p className="card-text">
                  <div>
                    {d.cntHave}$ to {d.cntWant}w
                  </div>
                  {itemStatus(d.status)}
                  {/* <div className="text-end">마감: {getTimeString(d.dDate)}</div> */}
                  <div className="text-end">마감: {d.dday}</div>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center btn text-secondary fs-10 fw-bold mx-auto">
          더 보기
        </div>
      </div>
      {/* 더보기 버튼, 페이징 처리 필요 */}
    </section>
  );
  // 머지 테스트
};

// export async function getServerSideProps(){
//   const res = await marketApi.fetchPaging(0,4);
// }

export default Market;
