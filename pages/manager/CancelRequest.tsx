import { useRef } from "react";
import Link from "next/Link";

const CancelRequest = () => {

  const ReceivedCancel = useRef<HTMLButtonElement>(null);
  const SendCancel = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <h2>취소 요청 페이지</h2>

      <button ref={ReceivedCancel}>받은 취소 요청</button>
      <button ref={SendCancel}>보낸 취소 요청</button>


    </div>
  );
};
export default CancelRequest;