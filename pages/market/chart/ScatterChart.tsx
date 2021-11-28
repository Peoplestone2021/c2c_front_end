import { ApexOptions } from "apexcharts";
import axios from "axios";
import dynamic from "next/dynamic";
import regression from "regression";
import { PublicItem } from "../index";
import { IndexProp } from "..";
import { useState } from "preact/hooks";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ScatterChart = ({ marketItems }: IndexProp) => {
  // const clean_data = datoa
  // .filter(({ x, y }) => {
  //   return (
  //     typeof x === typeof y &&  // filter out one string & one number
  //     !isNaN(x) &&              // filter out `NaN`
  //     !isNaN(y) &&
  //     Math.abs(x) !== Infinity &&
  //     Math.abs(y) !== Infinity
  //   );
  // })
  // .map(({ x, y }) => {
  //   return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
  // });

  // const my_regression = regression.linear(
  //   clean_data
  // );

  // const [setData, setData]=useState<{

  // }>();

  // const getChartData = async ({marketItems}:IndexProp)=> {
  //   const res = await axios.get<PublicItem[]>(
  //     `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems?page=0&size=8`
  //   );
  //   const resPage = await axios.get<PublicItem[]>(
  //     `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/latest?page=0&size=8`
  //   );
  //   const marketItems = res.data;
  //   const marketItemsPage = resPage.data;

  //   return  marketItems;
  // }

  const series: [
    {
      name: string;
      type: string;
      data: {
        x: number[];
        y: number[];
      }[];
    },
    {
      name: string;
      type: string;
      data: {
        x: number;
        y: number;
      }[];
    }
  ] = [
    {
      name: "Points",
      type: "scatter",

      //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
      data: [
        {
          x: marketItems.map((d) => (10000 * d.cntHave) / d.cntWant),
          y: marketItems.map((d) => d.marketId),
        },
      ],
    },
    {
      name: "Line",
      type: "line",
      data: [
        {
          x: 1,
          y: 8.41,
        },
        {
          x: 2,
          y: 8.41,
        },
        {
          x: 3,
          y: 8.41,
        },
        {
          x: 4,
          y: 8.41,
        },
        {
          x: 5,
          y: 8.41,
        },
        {
          x: 6,
          y: 8.41,
        },
        {
          x: 7,
          y: 8.41,
        },
        {
          x: 8,
          y: 8.41,
        },
        {
          x: 9,
          y: 8.41,
        },
        {
          x: 10,
          y: 8.41,
        },
      ],
    },
  ];

  const options: ApexOptions = {
    title: {
      text: `USD 거래 추세 현황`,
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
      min: 0,
      max: 12,
      tickAmount: 12,
    },
  };

  const chartData = {
    series: series,
    options: options,
  };

  return (
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
  );
};

export async function getServerSideProps() {
  const res = await axios.get<PublicItem[]>(
    // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems?page=0&size=8`
    `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems?page=0&size=8`
  );
  const resPage = await axios.get<PublicItem[]>(
    // `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/latest?page=0&size=8`
    `${process.env.NEXT_PUBLIC_API_TABLE_LOCAL}/marketItems/latest?page=0&size=8`
  );
  const marketItems = res.data;
  const marketItemsPage = resPage.data;

  return { props: { marketItems, marketItemsPage } };
}
export default ScatterChart;
