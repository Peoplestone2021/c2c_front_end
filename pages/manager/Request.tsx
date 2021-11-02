import { useRef } from "react";
import Link from "next/Link";

const Request = () => {

  const Create = useRef<HTMLButtonElement>(null);
  const Cancel = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <h2>요청페이지</h2>
      <Link href="/manager/CreateRequest">
        <button ref={Create}>거래 요청</button>
      </Link>
      <Link href="/manager/CancelRequest">
        <button ref={Cancel}>취소 요청</button>
      </Link>




    </div>
  );
};
export default Request;