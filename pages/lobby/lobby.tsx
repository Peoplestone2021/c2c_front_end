
import Link from "next/link";
import Appbar from "../bar/appbar";

const lobby = () => {
  return (
    <div>
      <Appbar />

      {/* <nav className= "navi position-fixed">
      <ul className=" flex-column">
        <li className ="nav-item">환전 계산</li>
        <li className ="nav-item">환율 조회</li>
        <li className ="nav-item">기간별 매매율</li>
      </ul>
      </nav> */}
      {/* main content */}

      <div className="content">
        <div className="menus">
          <a href="#!" className="menu-link">

            <div className="menu1">
              <p>환전로비</p>
            </div>
          </a>

          <a href="#!" className="menu-link">

            <div className="menu2">
              마켓플레이스
            </div>
          </a>

          <Link href="/manager/manager">
            <a className="menu-link">
              <div className="menu3">
                <p>프라이빗거래매니저</p>
              </div>
            </a>
          </Link>


        </div >
      </div >
    </div >
  )
}

export default lobby;