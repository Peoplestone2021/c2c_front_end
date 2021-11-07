import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

import api from "./itemlistApi";

interface ItemListItemState {
  id: number;
  hostName: string;
  crcHave: number;
  cntHave: string;
  memo: string;
  crcWant: number;
  cntWant: string;
  bidderName: string;
  status?: boolean;
  createdTime: number;
}
const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const ItemList = () => {

  const [itemlistList, setItemListList] = useState<ItemListItemState[]>([]);

  const [isLoading, setLoading] = useState<boolean>(true);

  // 에러 여부 state
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const ulRef = useRef<HTMLUListElement>(null);

  const fetchData = async () => {
    // 백엔드에서 데이터 받아옴
    const res = await api.fetch();
    const itemlists = res.data.map((item) => ({
      id: item.id,
      hostName: item.hostName,
      crcHave: item.crcHave,
      cntHave: item.cntHave,
      memo: item.memo,
      crcWant: item.crcWant,
      cntWant: item.cntWant,
      bidderName: item.bidderName,
      // status?:
      createdTime: item.createdTime,
    })) as ItemListItemState[];
    setLoading(false); // 로딩중 여부 state 업데이트
    setItemListList(itemlists); // comment state 업데이트
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }} className="card text-center">
        <h2>거래 목록</h2>

        <table className="table caption-top">
          <caption>
            <Link href="/manager/itemlist">
              <button>전체매물</button>
            </Link>
            <Link href="/manager/myitem">
              <button>나의매물</button>
            </Link>
            <Link href="/manager/mylist">
              <button>신청중매물</button>
            </Link>

          </caption>

          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">호스트</th>
              <th scope="col">교환매물</th>
              <th scope="col">비더</th>
              <th scope="col">상태</th>
              <th scope="col">작성시간</th>
            </tr>
          </thead>
          <tbody>
            {itemlistList.map((item, index) => (
              <tr className="tbody-tr" key={item.id}>
                <td className="me-1" >
                  {item.id}
                </td>
                <td className="me-1" >
                  {item.hostName}
                </td>
                <td className="me-1" >
                  {item.crcHave} {item.cntHave} {item.memo} {item.crcWant} {item.cntWant}
                </td>
                <td className="me-1" >
                  {item.bidderName}
                </td>
                <td className="me-1" >
                  {getTimeString(item.createdTime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};
export default ItemList;