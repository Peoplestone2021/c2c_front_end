import { useEffect, useState } from "react";
import api from "../api/latestTable";
import Sidebar from "./sideBar";
import styles from "./styles/ratetable.module.css";

interface LatestState {
  itemId: number;
  hostName: string;
  cntHave: string;
  crcHave: number;
  cntWant: string;
  crcWant: number;
  status: boolean;
}

const LatestTable = () => {
  const [moneyItemList, setMoneyItemList] = useState<LatestState[]>([]);

  const fetchData = async () => {
    const res = await api.fetch();

    const items = (res.data.map((item) => ({
      itemId: item.itemId,
      hostName: item.hostName,
      cntHave: item.cntHave,
      crcHave: item.crcHave,
      cntWant: item.cntWant,
      crcWant: item.crcWant,
      status: item.status,
    })) as unknown) as LatestState[];

    setMoneyItemList(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              {moneyItemList.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemId}</td>
                  <td>{item.hostName}</td>
                  <td>{item.cntHave}</td>
                  <td>{item.crcHave}</td>
                  <td>{item.cntWant}</td>
                  <td>{item.crcWant}</td>
                  <td>거래중</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LatestTable;
