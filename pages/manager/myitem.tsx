import { useRef } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";


const MyItem = () => {

  const Create = useRef<HTMLButtonElement>(null);
  const Cancel = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }} className="card text-center">
        <h2>나의 매물</h2>
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
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>100USD to 120,000KRW</td>
              <td>Jason</td>
              <td>거래중</td>
              <td>2021.11.02</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>John</td>
              <td>100CNY to 18,000KRW</td>
              <td>Smith</td>
              <td>거래완료</td>
              <td>2021.11.02</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td>110,000KRW to 10,000JPY</td>
              <td>Jully</td>
              <td>거래완료</td>
              <td>2021.11.01</td>
            </tr>
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
export default MyItem;