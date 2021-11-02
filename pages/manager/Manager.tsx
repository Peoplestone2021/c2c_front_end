import { useRef } from "react";
import Link from "next/Link";

const Manager = () => {


  return (
    <div>
      <div className="mx-auto">
        <header className="header d-flex">
          <div className="mainpage">
            <div className="main-title d-flex">
              <h1>환</h1>
              <h2>전</h2>
              <h1>장</h1>
              <h4>터</h4>
            </div>
          </div>
        </header>
        <nav style={{ width: "15vw", height: "30vw" }} className="bg-secondary">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/manager/Request">
                <a className="nav-link active" aria-current="page" style={{ textDecoration: "none", color: "black" }}>거래요청</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/manager/Request">
                <a className="nav-link" href="#" style={{ textDecoration: "none", color: "black" }}>거래목록</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/manager/Request">
                <a className="nav-link" href="#" style={{ textDecoration: "none", color: "black" }}>댓글목록</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/manager/Request">
                <a className="nav-link disabled" style={{ textDecoration: "none", color: "black" }}>스케쥴관리</a>
              </Link>

            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};
export default Manager;