// import { AppDispatch, RootState } from "../../../provider";

const MarketDetail = () => {
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
  return (
    <section>
      <div
        id="item-detail-container"
        style={{ width: "50vw" }}
        className="mx-auto"
      >
        <h2 className="text-center">매물 상세</h2>
        {itemDetail.map((d) => (
          <div className="card mx-auto">
            <div className="card-body">
              <h5 className="card-title">`{d.cntHave}`</h5>
              <div className="card-text"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketDetail;
