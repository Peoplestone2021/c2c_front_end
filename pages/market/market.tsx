// import itemState from "../../provider/modules/market";
import axios from "axios";
import { NavItem, ToastBody } from "react-bootstrap";
import styles from "../../styles/market.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { userInfo } from "os";
// import {profilePic} from '../data/flag_usd.png'
// import {}

// import { Router } from "next/dist/client/router";
// import { flagusd } from "../market/data";

// const getTimeStringD = (unixtime: number) => {
//   return;
// };

// const MarketItemData = (marketItems) => {};

// const flag = flagusd;

// const marketItems= map((item)=>({
//   id.
// })
// )
// export async function getServerSideProps(context){
//   const res=await fetch(``)
//   const data = await res.json()

//   return{
//     props
//   }
// }

// type Data={}

// export const getServerSideProps: GetServerSideProps = async(context)=>{

// }

function crcHaveImg() {
  return (
    <>
      <Image src="/data/flag_usd.png" width={10} height={10}></Image>
    </>
  );
}

const Market = () => {
  const router = useRouter();

  // const [itemList, setItemList] = useState<MarketItems[]>

  return (
    <section>
      <div id="site-container" style={{ width: "50vw" }} className="mx-auto">
        <h1 className="text-center my-5 fw-bold border-bottom pb-4">
          마켓플레이스
        </h1>
        <div
          id="search-form"
          className="gap-2 button-group  mx-auto d-md-flex"
          role="group"
          style={{ width: 150 }}
        >
          <button className="btn btn-secondary">[검색</button>
          <button className="btn btn-secondary">도구]</button>
        </div>{" "}
        {/*검색 도구*/}
        <span className="bi bi-list badge bg-light fw-bold"> LIST</span>
        <table className="striped bordered table-hover w-100">
          <thead>
            <tr className="text-secondary">
              <th scope="col">국가</th>
              <th>금액</th>
              <th>가격</th>
              {/*정렬 기능 버튼처리 필요-후순위*/}
              <th>상태</th>
              <th>거래마감</th>
            </tr>
          </thead>
          <tbody className="border-bottom border-top">
            {" "}
            {/*map으로 출력하도록*/}
            <tr
              className="h-40"
              // style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/marketDetail");
              }}
            >
              <td
              //state사용
              >
                USD
              </td>
              <td>1,000</td>
              <td>1,174,000w</td>
              <td className="bi bi-play-fill"></td>
              <td className="text-warning">오늘</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>1,100</td>
              <td>1,291,000w</td>
              <td className="bi bi-play-fill"></td>
              <td>마감없음</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>890</td>
              <td>1,044,000w</td>
              <td className="bi bi-stop-fill"></td>
              <td>-14일</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>880</td>
              <td>1,033,000w</td>
              <td className="bi bi-play-fill"></td>
              <td>-7일</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>1,150</td>
              <td>1,291,000w</td>
              <td className="bi bi-play-fill"></td>
              <td>마감없음</td>
            </tr>
          </tbody>
        </table>
        <div
          className="card mx-auto"
          onClick={() => {
            router.push("/market/marketDetail");
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              <Image src="/flag_usd.png" alt="USD" width="40" height="40" />
              USD
            </h5>
            <p className="card-text">1,000$ to 1,174,000w</p>
            <div className="bi bi-play-fill"></div>
            <div className="text-end">마감: 오늘</div>
          </div>
        </div>
        <div
          className="card mx-auto"
          onClick={() => {
            router.push("/market/marketDetail");
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              <Image src="/flag_usd.png" alt="USD" width="40" height="40" />
              USD
            </h5>
            <p className="card-text">1,100$ to 1,291,000w</p>
            <div className="bi bi-play-fill" style={{ width: 50 }}></div>
            <div className="text-end">마감 없음</div>
          </div>
        </div>
        <div
          className="card mx-auto"
          onClick={() => {
            router.push("/market/marketDetail");
          }}
        >
          <div className="card-body">
            <h5 className="card-title">USD</h5>
            <p className="card-text">890$ to 1,044,000w</p>
            <td className="bi bi-stop-fill"></td>
            <div className="text-end">-14일</div>
          </div>
        </div>
        <div
          className="card mx-auto"
          onClick={() => {
            router.push("/market/marketDetail");
          }}
        >
          <div className="card-body">
            <h5 className="card-title">USD</h5>
            <p className="card-text">880$ to 1,033,000w</p>
            <td className="bi bi-play-fill"></td>
            <div className="text-end">-7일</div>
          </div>
        </div>
        <div
          className="card mx-auto"
          onClick={() => {
            router.push("/market/marketDetail");
          }}
        >
          <div className="card-body">
            <h5 className="card-title">USD</h5>
            <p className="card-text">1,150$ to 1,291,000w</p>
            <td className="bi bi-play-fill"></td>
            <div className="text-end">마감없음</div>
          </div>
        </div>
        <div className="text-center btn text-secondary fs-10 fw-bold mx-auto">
          더 보기
        </div>
      </div>
      {/* 더보기 버튼, 페이징 처리 필요 */}
    </section>
  );
  // 머지 테스트
};

//{market.data.map((item, index) => (
//  <tbody key={`market-item-${index}`} id="tr-list">
//  <tr>
//    {/* 버튼 필요 */}
//     <td>{item.crcHave}</td>
//     <td>{item.cntHave}</td>
//     <td>{item.cntWant}</td>
//     <td>{item.status}</td>
//     <td>{getTimeStringD(item.dDay)}</td> {/*마감시간 계산함수 필요*/}
//   </tr>
// </tbody>
// ))} // 데이터 테이블
export default Market;
