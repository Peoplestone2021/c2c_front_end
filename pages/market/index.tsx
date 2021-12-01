import { useRouter } from "next/router";
import Image from "next/image";
import Appbar from "../bar/appbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import { useEffect } from "preact/hooks";
import {
  requestFetchMarketItems,
  requestFetchPagingMarketItems,
} from "../../middleware/modules/market";
import axios from "axios";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

export interface PublicItem {
  marketId: number;
  itemId: number;
  crcHave: string;
  cntHave: number;
  crcWant: string;
  cntWant: number;
  dday: string;
  status: boolean;
}

export interface PublicItemPage {
  content: PublicItem[];
}

export interface IndexProp {
  marketItems: PublicItem[];
  marketItemsPage: PublicItemPage;
}

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  const day = 24 * 60 * 60 * 1000;
  return unixtime - new Date().getTime() >= day
    ? dateTime.toLocaleDateString()
    : dateTime.toLocaleTimeString();
  // return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const itemStatus = (d: boolean) => {
  if (d === true) {
    return <span className="bi bi-play-fill"></span>;
  }
  return <span className="bi bi-stop-fill"></span>;
};

const Index = ({ marketItems, marketItemsPage }: IndexProp) =>
  // { marketItemList }: IndexProp
  {
    const market = useSelector((state: RootState) => state.market);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    // console.log("[log] marketState");
    // console.log(market);

    // console.log("[log] market.data: ");
    // console.log(market.data);

    const handlePageSizeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.currentTarget.value);
      dispatch(
        requestFetchPagingMarketItems({
          page: market.page,
          size: +e.currentTarget.value,
        })
      );
    };

    const series: [
      {
        name: string;
        type: string;
        data: number[];
      }
    ] =
      // {
      //   name: string;
      //   type: string;
      //   data: {
      //     x: number;
      //     y: number;
      //   }[];

      [
        {
          name: "Points",
          type: "scatter",
          data: marketItems.map(
            (d) => +((10000 * d.cntHave) / d.cntWant).toFixed(2)
          ),
        },
      ];
    // {
    //   name: "Line",
    //   type: "line",
    //   data: [
    //     {
    //       x: 20,
    //       y: 8.41,
    //     },
    //     {
    //       x: 21,
    //       y: 8.41,
    //     },
    //     {
    //       x: 22,
    //       y: 8.41,
    //     },
    //     {
    //       x: 23,
    //       y: 8.41,
    //     },
    //     {
    //       x: 24,
    //       y: 8.41,
    //     },
    //     {
    //       x: 25,
    //       y: 8.41,
    //     },
    //     {
    //       x: 26,
    //       y: 8.41,
    //     },
    //     {
    //       x: 27,
    //       y: 8.41,
    //     },
    //     {
    //       x: 28,
    //       y: 8.41,
    //     },
    //     {
    //       x: 29,
    //       y: 8.41,
    //     },
    //   ],
    // },

    const options: ApexOptions = {
      title: {
        text: `USD 거래 추세(일만원)`,
      },
      chart: {
        height: 350,
        type: `line`,
      },
      fill: {
        type: `solid`,
      },
      markers: {
        size: [6, 0],
      },
      tooltip: {
        shared: false,
        intersect: true,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: `numeric`,
        categories: marketItems.map((d) => d.marketId),
        // min: 17,
        // max: 36,
        tickAmount: 12,
      },
    };

    const chartData = {
      series: series,
      options: options,
    };

    return (
      <section>
        <Appbar />
        <div id="site-container" style={{ width: "50vw" }} className="mx-auto">
          <h1 className="text-center my-5 fw-bold border-bottom pb-4">
            마켓플레이스
          </h1>
          <span>
            <div className="mixed-chart">
              {chartData && (
                <Chart
                  options={chartData?.options}
                  series={chartData?.series}
                  type="line"
                  height={350}
                  // className="mixed-chart"
                ></Chart>
              )}
            </div>
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
              {marketItemsPage.content.map((d: PublicItem, index: number) => (
                <tr
                  key={`market-item-list-${index}`}
                  onClick={() => {
                    router.push(`/market/detail/${d.marketId}`);
                  }}
                >
                  <td>{d.crcHave}</td>
                  <td>{d.cntHave}</td>
                  <td>{d.cntWant}</td>
                  <td>{itemStatus(d.status)}</td>
                  <td>{d.dday}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {marketItems.map((d, index) => (
              <div
                key={`market-item-${index}`}
                className="card mx-auto"
                onClick={() => {
                  router.push(`/market/detail/${d.marketId}`);
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <Image
                      src="/flag_usd.png"
                      alt="USD"
                      width="40"
                      height="40"
                    />
                    USD
                  </h5>
                  <p className="card-text">
                    <div>
                      {d.cntHave}$ to {d.cntWant}w
                    </div>
                    {itemStatus(d.status)}
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

export async function getServerSideProps() {
  const res = await axios.get<PublicItem[]>(
    `http://13.125.158.16:8081/marketItems?page=0&size=8`
    // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems?page=0&size=8`
  );
  const resPage = await axios.get<PublicItem[]>(
    `http://13.125.158.16:8081/marketItems/latest?page=0&size=8`
    // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/latest?page=0&size=8`
  );
  const marketItems = res.data;
  const marketItemsPage = resPage.data;

  return { props: { marketItems, marketItemsPage } };
}

const getChartData = async () => {
  // const result = await axios.get<typeof data>(
  //   "http://localhost:5050/sales-orders/stats?sd=1997-01-01&ed=1997-01-31"
  // );
  // setData(result.data);
};

export default Index;
