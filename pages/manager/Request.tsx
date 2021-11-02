import { useRef } from "react";
import Link from "next/Link";
import Sidebar from "./sidebar";
import Appbar from "../bar/appbar";

const Request = () => {

  const Create = useRef<HTMLButtonElement>(null);
  const Cancel = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Appbar />
      <Sidebar />
      <h2>요청페이지</h2>
      <Link href="/manager/create">
        <button ref={Create}>거래 요청</button>
      </Link>
      <Link href="/manager/cancel">
        <button ref={Cancel}>취소 요청</button>
      </Link>




    </div>
  );
};
export default Request;