import Image from "next/image";
import { useRouter } from "next/router";

const marketDetail = () => {
  const router = useRouter();

  const itemDetail = [
    {
      id: 11111111,
      hostName: "Zero",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 1000,
      cntWant: 1174000,
      dDate: "1635747679",
      content: "울릉도 동남쪽",
      status: true,
    },
  ];

  const commentsItem = [
    {
      id: 1111,
      userName: "홍길동",
      cmtContent: "댓글 내용 예시입니다. 1",
      cmtCreatedTime: "1636325783",
    },
  ];

  return (
    <section>
      <div
        id="item-detail-container"
        style={{ width: "50vw" }}
        className="mx-auto"
      >
        <h2 className="text-center">매물 상세</h2>
        {itemDetail.map((d) => (
          <span className="card mx-auto">
            <span className="card-body">
              <Image src="/flag_usd.png" alt="USD" width="40" height="40" />
              <h5 className="card-title">
                {d.crcHave}
                {d.cntHave} to {d.crcWant}
                {d.cntWant}
              </h5>
              내용
              {/* <span className="card-text"></span> */}
              {/* css 그리드처리 해야함 */}
            </span>
          </span>
        ))}
        <div className="d-flex">
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
              data-bs-toggle="collapse"
              data-bs-target="#collapseCommentList"
            >
              댓글 보기
            </button>
          </div>
        </div>
        {commentsItem.map((d) => (
          <span className="collapse" id="collapseCommentList">
            <div className="card card-body">
              {d.userName}ㄴ(말풍선): {d.cmtContent} created:{d.cmtCreatedTime}
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};

export default marketDetail;
