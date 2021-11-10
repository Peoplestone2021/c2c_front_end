import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Collapse } from "react-bootstrap";
import style from "../styles/market.module.scss";
import ContentDetail from "../components/ContentDetail";
import marketApi from "../../../api/market";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../provider";

// import { RootState } from ".";

interface marketItem {
  id: number;
  hostName: string;
  crcHave: string;
  crcWant: string;
  cntHave: number;
  cntWant: number;
  dDate: number;
  content: string;
  status: boolean;
}
const marketItems = [
  {
    id: 11111111,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: 1635747679,
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 22222222,
    hostName: "One",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1100,
    cntWant: 1291000,
    dDate: 1635745679,
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 33333333,
    hostName: "Two",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 890,
    cntWant: 1044000,
    dDate: 1635749679,
    content: "외로운 섬하나",
    status: false,
  },
  {
    id: 44444444,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 880,
    cntWant: 1033000,
    dDate: 1635748679,
    content: "새들의 고향",
    status: true,
  },
  {
    id: 55555555,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1150,
    cntWant: 1350000,
    dDate: 1635748679,
    content: "새들의 고향",
    status: true,
  },
];

const commentsItem = [
  {
    id: 1111,
    userName: "홍길동",
    cmtContent: "댓글 내용 예시입니다.",
    cmtCreatedTime: 1636325783,
  },
];

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  const day = 24 * 60 * 60 * 1000;
  return unixtime - new Date().getTime() >= day
    ? dateTime.toLocaleDateString()
    : dateTime.toLocaleTimeString();
  // return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const MarketDetail = () => {
  const Router = useRouter();

  const id = Router.query.id as string;
  const marketContent = marketItems.find((data) => data.id === Number(id));

  console.log(marketContent);
  console.log(typeof marketItems.find);

  type Props = {
    id?: marketItem;
  };

  const [Open, setOpen] = useState(false);

  return (
    <section>
      <div
        id="item-detail-container"
        style={{ width: "50vw" }}
        className="mx-auto"
      >
        <h2 className="text-center">매물 상세</h2>
        <span className="card mx-auto">
          <span className="card-body">
            <Image src="/flag_usd.png" alt="USD" width="40" height="40" />
            <h5 className="card-title">
              {marketContent?.crcHave}
              {marketContent?.cntHave} &#62; {marketContent?.crcWant}
              {marketContent?.cntWant}
            </h5>
            내용
            {/* <span className="card-text"></span> */}
            {/* css 그리드처리 해야함 */}
          </span>
        </span>
        <div className="d-flex">
          <div style={{ width: "50%" }}>
            <button
              className="btn btn-secondary me-1 float-left"
              onClick={() => {
                Router.push("/makeOfferModal");
              }}
            >
              거래 신청하기
            </button>
          </div>
          <div style={{ width: "50%" }} className="d-flex justify-content-end">
            <button
              className="btn btn-secondary me-1 float-left"
              onClick={() => setOpen(!Open)}
              aria-controls="collapseCommentList"
              aria-expanded={Open}
            >
              댓글 보기
            </button>
          </div>
        </div>
        {commentsItem.map((d) => (
          <Collapse key="id" in={Open}>
            <span
              className="speech-bubble collapse mx-auto"
              id="collapseCommentList"
            >
              <div className="card card-body">
                <div className={style.speechBubble}>{d.cmtContent}</div>{" "}
                <cite>{d.userName}</cite>
                <span>
                  created&nbsp;
                  {getTimeString(d.cmtCreatedTime)}
                </span>
              </div>
            </span>
          </Collapse>
        ))}
      </div>
    </section>
  );
};

export default MarketDetail;
