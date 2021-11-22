import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import style from "../styles/market.module.scss";
import { Container, Collapse, Form, Button } from "react-bootstrap";
// import ContentDetail from "../components/ContentDetail";
import marketApi from "../../../api/market";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../provider";
import Appbar from "../../bar/appbar";
// import { initialMarketItem } from "../../../provider/modules/market";
import {
  requestFetchMarketItems,
  requestFetchMarketItem,
} from "../../../middleware/modules/market";

// import { RootState } from ".";

// interface marketItem {
//   id: number;
//   hostName: string;
//   crcHave: string;
//   crcWant: string;
//   cntHave: number;
//   cntWant: number;
//   dDate: number;
//   content: string;
//   status: boolean;
// }

type commentsItem = {
  id: number;
  userName: string;
  cmtContent: string;
  cmtCreatedTime: number;
};

const marketItems = [
  {
    id: 11111111,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: 1635747679,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
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
    content: "Exercitationem velit labore animi nihil corporis nostrum!",
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
    content: "Dolorum molestias distinctio velit maiores, ",
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
    content:
      "fugit mollitia similique doloribus sed, facere asperiores assumenda cumque delectus.,",
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
    content: "Exercitationem velit labore animi nihil corporis nostrum!",
    status: true,
  },
];

const commentsItem = [
  {
    id: 1111,
    itemId: 11111111,
    userName: "John Doe",
    cmtContent: "Exercitationem velit labore animi nihil corporis nostrum!",
    cmtCreatedTime: 1636325783,
  },
  {
    id: 2222,
    itemId: 22222222,
    userName: "Smith",
    cmtContent:
      "fugit mollitia similique doloribus sed, facere asperiores assumenda cumque delectus.,",
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
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const id = router.query.id as string;
  console.log("[log]id: ");
  console.log(id);

  const marketItem = useSelector((state: RootState) =>
    state.market.data.find((item) => item.marketId === +id)
  );

  if (id) {
    if (!marketItem) {
      dispatch(requestFetchMarketItem(+id));
    }
  }

  console.log("marketItem: ");
  console.log(marketItem);

  const marketContent = marketItems.find((data) => data.id === Number(id));

  const commentsContent = commentsItem.find(
    (data) => data.itemId === Number(id)
  );

  const [open, setOpen] = useState(false);

  return (
    <section>
      <Appbar />
      <div
        id="item-detail-container"
        style={{ width: "50vw" }}
        className="mx-auto"
      >
        <h2 className="text-center mt-4">매물 상세</h2>
        <span className="card mx-auto">
          <span className="card-body">
            <Container>
              <Image src="/flag_usd.png" alt="USD" width="40" height="40" />
              <h5 className="card-title">
                {marketItem?.crcHave}
                {marketItem?.cntHave} &#62; {marketItem?.crcWant}
                {marketItem?.cntWant}
              </h5>
              {marketItem?.content}
            </Container>
            {/* <span className="card-text"></span> */}
            {/* css 그리드처리 해야함 */}
          </span>
        </span>
        <div className="d-flex mt-2">
          <div style={{ width: "50%" }}>
            <button
              className="btn btn-secondary me-1 float-left"
              onClick={() => {
                router.push("/makeOfferModal");
              }}
            >
              거래 신청하기
            </button>
          </div>
          <div style={{ width: "50%" }} className="d-flex justify-content-end">
            <button
              className="btn btn-secondary me-1 float-left"
              onClick={() => setOpen(!open)}
              aria-controls="comment-collapse-thread"
              aria-expanded={open}
            >
              댓글 보기
            </button>
          </div>
        </div>
        <Collapse key={id} in={open} className="mt-2">
          <div key="id" className="mx-auto" id="comment-collapse-thread">
            {/* <div className="card card-body"> */}
            <div className={`${style.imessage}`}>
              <p className={`${style.fromThem}`}>
                {commentsContent?.cmtContent}
              </p>
              <div className="fs-6">
                <div className="text-bold">{commentsContent?.userName}</div>
                {/* created&nbsp; */}
                {/* {getTimeString(commentsContent?.cmtCreatedTime)} */}
              </div>
              {/* </div> */}
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="commentForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={2} />
                </Form.Group>
              </Form>
              <Button>댓글</Button>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
};

export default MarketDetail;
