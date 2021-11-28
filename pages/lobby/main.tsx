import Calculator from "./calculator";
import Appbar from "../bar/appbar";
// import styles from "./styles/main.module.css";
import React from "preact/compat";
import { store } from "../../provider";
import { Provider } from "react-redux";
import Sidebar from "./sideBar";
import LatestTable from "./latestTable";
import axios from "axios";
import styles from "./styles/sideBar.module.css";
import Link from "next/link";

interface IndexProp {
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

const Main = ({ rates }: IndexProp) => {
  return (
    <Provider store={store}>
      <div>
        <Appbar />
      </div>
      <div className={`${styles.maindiv} d-flex justify-content-evenly`}>
        <div className={`${styles.sideall}`}>
          <div className={`${styles.sidebar}`}>
            <div className={`${styles.logo_content}`}>
              <div className={`${styles.logo}`}>
                <i className={`bi bi-currency-exchange`}></i>
                <div className={`${styles.logo_name}`}>환전장터</div>
              </div>
              <i className={`bi bi-list`} id="btn"></i>
            </div>
            <ul className={`nav_list`}>
              <li>
                <input type="text" placeholder="Search..." />
              </li>
              <li>
                <a href="/lobby" className={`links_name bi bi-grid-fill`}>
                  메인으로
                </a>
              </li>
              <li>
                <span className={`bi bi-calculator links_name`}>
                  <a href="/lobby/main">환전계산기</a>
                </span>
              </li>
              <li>
                <span className={`bi bi-table links_name`}>
                  <a href="/lobby/RateTable">국가별 환율보기</a>
                </span>
              </li>
              <li>
                <span className={`bi bi-chat-right-text links_name`}>
                  <a href="/lobby/latestTable">최근 등록된 매물</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.cal} `}>
          <Calculator />
        </div>
        <div>
          <div className={` d-flex justify-content-evenly`}>
            <div className={``}>
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
        </div>
      </div>
    </Provider>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("http://52.78.5.170:8080/lobby/rate");
  // const rate: RateItem[] = await res.json();
  const rates = res.data;

  // 여기에 prop: {속성객체}
  // 속성객체를 컴포넌트의 속성을 넣어줌
  return { props: { rates } };
}
export default Main;
