import { useRef } from "react";
import Link from "next/Link";
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
        <h2>거래 목록 페이지</h2>
        <Link href="/manager/create">
          <button ref={Create}>신청한 매물</button>
        </Link>
        <Link href="/manager/cancel">
          <button ref={Cancel}>거래한 매물</button>
        </Link>


      </div>
    </div>
  );
};
export default Request;