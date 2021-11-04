import { useRef } from "react";
import Link from "next/link";
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";


const Comment = () => {

  const Create = useRef<HTMLButtonElement>(null);
  const Cancel = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Appbar />
      <Sidebar />
      <div style={{ marginLeft: "20vw" }}>
        <h2>댓글 목록 페이지</h2>
        <table>
          <tr>
            <th>번호</th>
            <th>2</th>
            <th>3</th>
          </tr>
          <tbody>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
export default Comment;