import { useRef } from "react";
import Link from "next/Link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

const Request = () => {

  const ReceivedCreate = useRef<HTMLButtonElement>(null);
  const SendCreate = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }}>
        <h2>거래 요청 페이지</h2>

        <button ref={ReceivedCreate}>받은 거래 요청</button>
        <button ref={SendCreate}>보낸 거래 요청</button>

      </div>
    </div>
  );
};
export default Request;