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
      <h2>댓글 목록 페이지</h2>



    </div>
  );
};
export default Request;