import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/latestTable";
import Sidebar from "./sideBar";
import styles from "./styles/ratetable.module.css";

interface Latestprop {
  latest: LatestState[];
}

interface LatestState {
  itemId: number;
  hostName: string;
  cntHave: string;
  crcHave: number;
  cntWant: string;
  crcWant: number;
  status: boolean;
}

const LatestTable = ({ latest }: Latestprop) => {
  return (
    <>
      <div className={`${styles.maindiv} d-flex justify-content-evenly`}>
        <Sidebar />
        <div className={`${styles.tablediv}`}>
          <h4 className="mx-auto">최근 등록된 매물</h4>
          <table className={`table table-hover`}>
            <thead>
              <tr>
                <td>매물번호</td>
                <td>글쓴이</td>
                <td>보유국</td>
                <td>보유환</td>
                <td>희망국</td>
                <td>희망환</td>
                <td>거래상태</td>
              </tr>
            </thead>
            <tbody>
              {latest.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemId}</td>
                  <td>{item.hostName}</td>
                  <td>{item.cntHave}</td>
                  <td>{item.crcHave}</td>
                  <td>{item.cntWant}</td>
                  <td>{item.crcWant}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("http://54.180.135.245:8080/saleItemList/latest");
  // const rate: RateItem[] = await res.json();
  const rates = res.data;

  console.log(rates.content);

  const latest = rates.content;

  // 여기에 prop: {속성객체}
  // 속성객체를 컴포넌트의 속성을 넣어줌
  return { props: { latest } };
}

export default LatestTable;
