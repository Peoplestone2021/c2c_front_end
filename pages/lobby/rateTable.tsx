import { useEffect, useState } from "react";
import api from "../api/rateTable";

// 환율 인터페이스
interface RateItem{
  curUnit: string;
  dealBasR: string;
  curNm: string;
}

const RateTable = () => {

  // 데이터 받기
  const fetchData = async () => {
    // 백엔드에서 데이터 받아옴
    const res = await api.fetch()

    // axios에서 응답받은 데이터는 data 속성에 들어가있음
    // 서버로부터 받은 데이터를 state 객체로 변환함
    const rates = res.data.map((item) => ({
      curUnit: item.curUnit,
      dealBasR: item.dealBasR,
      curNm: item.curNm,
    })) as RateItem[];

    setRateList(rates);
  
    console.log("--2. await axios.get completed --");
  };

  useEffect(() => {
    console.log("--1. mounted --");
    // 백엔드에서 디이터를 받아올것
    // ES8 Style로 async-await 기법을 이용해서 데이터를 조회해옴
    fetchData();
  }, []);

  const [rateList, setRateList] = useState<RateItem[]>([]);

  return (
    <div className="rateTablePage">
      <table className="table table-hover text-center top-10 my-5">
        <thead>
          <tr>
            <td>
              국가코드
            </td>
            <td>
              국가
            </td>
            <td>
              매매 기준율
            </td>
          </tr>
        </thead>
        <tbody>
          {rateList.map((item, index) => (
            <tr key = {item.curUnit}>
              <td>
                {item.curUnit}
              </td>
              <td>
                {item.curNm}
              </td>
              <td>
                {item.dealBasR}
              </td>
            </tr>
          ))}
          {/* {data.map((item, index) => (
            <tr key = {item.cur_unit}>
              <td>
                {item.cur_nm}
              </td>
              <td>
                {item.deal_bas_r}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

// const res = await fetch("http://54.180.135.245:6060/lobby/rate");

export default RateTable