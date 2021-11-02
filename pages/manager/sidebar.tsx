import Link from "next/Link";

const Sidebar = () => {

  return (
    <div>
      <nav style={{ width: "15vw", height: "30vw" }} className="bg-secondary">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/manager/request">
              <a className="nav-link active" aria-current="page" style={{ textDecoration: "none", color: "black" }}>거래요청</a>
            </Link>

          </li>
          <li className="nav-item">
            <Link href="/manager/list">
              <a className="nav-link" href="#" style={{ textDecoration: "none", color: "black" }}>거래목록</a>
            </Link>

          </li>
          <li className="nav-item">
            <Link href="/manager/comment">
              <a className="nav-link" href="#" style={{ textDecoration: "none", color: "black" }}>댓글목록</a>
            </Link>

          </li>
          <li className="nav-item">
            <Link href="/manager/schedule">
              <a className="nav-link disabled" style={{ textDecoration: "none", color: "black" }}>스케쥴관리</a>
            </Link>

          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;