import Link from "next/link";
import styles from "./styles/sideBar.module.css";

const LobbySide = () => {
  return (
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
            <Link href="/lobby">
              <i className={`bi bi-grid-fill ${styles.icons}`}></i>
            </Link>
            <Link href="/lobby">
              <span className={`links_name`}>메인으로</span>
            </Link>
          </li>
          <li>
            <Link href="/lobby/main">
              <i className={`bi bi-calculator ${styles.icons}`}></i>
            </Link>
            <Link href="/lobby/main">
              <span className={`links_name`}>환전계산기</span>
            </Link>
          </li>
          <li>
            <Link href="/lobby/RateTable">
              <i className={`bi bi-table ${styles.icons}`}></i>
            </Link>
            <Link href="/lobby/RateTable">
              <span className={`links_name`}>국가별 환율보기</span>
            </Link>
          </li>
          <li>
            <Link href="/lobby/latestTable">
              <i className={`bi bi-chat-right-text ${styles.icons}`}></i>
            </Link>
            <Link href="/lobby/latestTable">
              <span className={`links_name`}>최근 등록된 매물</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LobbySide;
