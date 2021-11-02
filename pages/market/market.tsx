const getTimeStringD = (unixtime: number) => {
  return;
};

const market = () => {
  return (
    <section>
      <h2>마켓플레이스</h2>
      <div></div>
      <table>
        <thead>
          <tr>
            <th scope="col">국가</th>
            <th>금액</th>
            <th>가격</th>
            {/*정렬 기능 버튼처리 필요*/}
            <th>상태</th>
            <th>거래마감</th>
          </tr>
        </thead>
        {market.data.map((item, index) => (
          <tbody key={`market-item-${index}`} id="tr-list">
            <tr>
              {/* {" "} */}
              {/* 버튼 필요 */}
              <td>{item.crcHave}</td>
              <td>{item.cntHave}</td>
              <td>{item.cntWant}</td>
              <td>{item.status}</td>
              <td>{getTimeStringD(item.dDay)}</td> {/*마감시간 계산함수 필요*/}
            </tr>
          </tbody>
        ))}
      </table>
      {/* 더보기 버튼, 페이징 처리 필요 */}
    </section>
  );
  // 머지 테스트
};

export default market;
