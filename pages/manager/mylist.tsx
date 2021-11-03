import { useRef } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

const MyList = () => {


  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }}>


        <div className="card text-center">
          <h2>나의 목록 페이지</h2>
          <div className="card-header">

            <ul className="nav nav-pills card-header-pills ">
              <li className="nav-item">
                <Link href="/manager/myitem">
                  <a className="nav-link active">나의 매물</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/manager/comment">
                  <a className="nav-link">나의 댓글</a>
                </Link>

              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <table>
              <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
export default MyList;