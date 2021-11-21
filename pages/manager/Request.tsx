import { useRef } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

const Request = () => {
  const Create = useRef<HTMLButtonElement>(null);
  const Cancel = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }}>
        <h2>요청페이지</h2>
        <Link href="/manager/create">
          <button ref={Create}>거래 요청</button>
        </Link>
        <Link href="/manager/cancel">
          <button ref={Cancel}>취소 요청</button>
        </Link>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label">거래요청</label>
        </div>
      </div>
    </div>
  );
};
export default Request;
