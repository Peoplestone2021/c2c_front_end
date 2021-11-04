import { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

import produce from "immer";
import api from "./commentApi";



interface CommentItemState {
  id: number;
  memo: string | undefined;
  name: string;
  createdTime?: number;
}

const getTimeString = (unixtime: number) => {
  // Locale: timezone, currency 등
  // js에서는 브라우저의 정보를 이용함
  const dateTime = new Date(unixtime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const Comment = () => {

  // comment 여러건에 대한 state
  const [commentList, setCommentList] = useState<CommentItemState[]>([
    // { id: 2, memo: "메모입니다", name: "Jhon", },
    // { id: 1, memo: "메모입니다", name: "Smith" },
  ]);

  // 데이터 로딩처리 여부 표시
  const [isLoading, setLoading] = useState<boolean>(true);

  // 에러 여부 state
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const ulRef = useRef<HTMLUListElement>(null);

  const fetchData = async () => {
    // 백엔드에서 데이터 받아옴
    const res = await api.fetch();

    // axios에서 응답받은 데이터는 data속성에 들어가 있음
    // 서버로부터 받은 데이터를 state 객체로 변환함
    const comments = res.data.map((item) => ({
      id: item.id,
      memo: item.memo,
      name: item.name,
      createdTime: item.createdTime,
    })) as CommentItemState[];
    setLoading(false); // 로딩중 여부 state 업데이트
    setCommentList(comments); // comment state 업데이트
    // console.log(comments);
    // console.log("--2. await axios.get completed--");

  };
  useEffect(() => {
    console.log("--1. mounted--");
    //   // 백엔드에서 데이터를 받아올 것임
    //   // ES8 style로 async-await 기법을 이용해서 데이터를 조회해옴
    fetchData();
  }, []);

  // const add = async () => {
  //   try {
  //     const result = await api.add({

  //     });
  //     console.log(result);

  //     const comment: CommentItemState = {
  //       id: result.data.id,
  //       memo: result.data.memo,
  //       name: result.data.name,
  //       createdTime: result.data.createdTime,
  //     };


  //     setIsError(false);
  //   } catch (e: any) {
  //     console.log(e.response);
  //     // 에러메시지를 표시
  //     const message = (e as Error).message;
  //     setIsError(true);
  //     setErrMessage(message);
  //   }
  // }






  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }} className="card text-center">
        <h2>댓글 목록</h2>
        {commentList}
        <table className="table caption-top">
          <caption>
          </caption>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">댓글</th>
              <th scope="col">작성자</th>
              <th scope="col">작성시간</th>
            </tr>
          </thead>
          <tbody>
            {commentList.map((item, index) => (
              <tr className="tbody-tr" key={item.id}>
                <td className="me-1" >
                  {item.id}

                </td>
                <td className="me-1" >
                  {item.memo}
                </td>
                <td className="me-1" >
                  {item.name}
                </td>
                <td className="me-1" >
                  {item.createdTime}
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">1</th>
              <td>댓글입니다.</td>
              <td>John</td>
              <td>2021.11.02</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>댓글입니다.</td>
              <td>John</td>
              <td>2021.11.02</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>댓글입니다.</td>
              <td>John</td>
              <td>2021.11.01</td>
            </tr>
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>


      </div>
    </div>
  );
};
export default Comment;