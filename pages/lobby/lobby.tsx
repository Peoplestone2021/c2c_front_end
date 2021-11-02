import Link from "next/Link";
const lobby = () => {
  return (
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
          <a href="#!" className="menu-link" style={{ textDecoration: "none" }}>
            <div className="menu1">
              <p>환전로비</p>
            </div>
          </a>
          <a href="#!" className="menu-link" style={{ textDecoration: "none" }}>
            <div className="menu2">
              마켓플레이스
            </div>
          </a>
          <Link href="/manager/Manager">
            <a className="menu-link" target="_blank" style={{ textDecoration: "none" }}>
              <div className="menu3">
                <p>프라이빗거래매니저</p>
              </div>
            </a>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default lobby;