import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/rateTable";
import styles from "./styles/ratetable.module.css";
import Sidebar from "./sideBar";

interface HomeProp {
  rates: RateItem[];
}

// 환율 인터페이스
interface RateItem {
  curUnit: string;
  tts: number;
  ttb: number;
  dealBasR: string;
  curNm: string;
}

const RateTable = ({ rates }: HomeProp) => {
  return (
    <>
      <div className={`${styles.maindiv} d-flex justify-content-evenly`}>
        <Sidebar />
        <div className={`${styles.tablediv}`}>
          <table className="table table-hover top-10 my-5">
            <thead>
              <tr>
                <td>국가코드</td>
                <td>국가</td>
                <td>매매 기준율</td>
              </tr>
            </thead>
            <tbody className={`${styles.tablebody}`}>
              {rates.map((item, index) => (
                <tr key={index}>
                  <td>{item.curUnit}</td>
                  <td>{item.curNm}</td>
                  <td>{item.dealBasR}</td>
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
  const res = await axios.get("http://54.180.135.245:8080/lobby/rate");
  // const rate: RateItem[] = await res.json();
  const rates = res.data;

  // 여기에 prop: {속성객체}
  // 속성객체를 컴포넌트의 속성을 넣어줌
  return { props: { rates } };
}

export default RateTable;
