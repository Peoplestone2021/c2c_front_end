import styles from './styles/caclulator.module.css'
import Link from "next/link";
import { MutableRefObject, useEffect, useRef, useState } from 'react';
// 계산기 백엔드 연동 api
import api from "../api/calculator"
import { Alert } from 'react-bootstrap';
import produce from 'immer';

//계산에 필요한 state
interface CalculatorItemState {
  cntUnit: string;
  dealBasR: number;
}
// 매물에 대한 state
interface AddItemState {
  // 매물 ID
  itemId: number;
  // 유저 아이디
  hostName: String;
  // 가지고있는 국가
  cntHave: String;
  // 가지고있는 돈
  crcHave: number;
  // 원하는환전 국가
  cntWant: String;
  // 원하는환전 액
  crcWant: number;
  // 거래일자
  dDay: String;
  // 본문
  content: String;
  // 거래상태
  status: boolean;
}

const Calculator = () => {
  // 매물
  const [item, setItem] = useState<AddItemState[]>();

  // 불러온 매매율
  const [rateValue, setRateValue] = useState<CalculatorItemState[]>();

  // 환전된 결과 값
  const [exValue, setExValue] = useState(Number);

  // 보유하고 있는 화페 국가
  const cntHave = useRef() as MutableRefObject<HTMLSelectElement>;
  // 보유하고있는 화폐 금액
  const crcHave = useRef() as MutableRefObject<HTMLInputElement>;
  // 환전을 원하는 국가
  const cntWant = useRef() as MutableRefObject<HTMLSelectElement>;
  // 계산된 환전 금액
  const crcWant = useRef() as MutableRefObject<HTMLInputElement>;
  // 유저아이디
  const hostName = useRef() as MutableRefObject<HTMLInputElement>;
  // 년도 월 일
  const yy = useRef() as MutableRefObject<HTMLSelectElement>;
  const mm = useRef() as MutableRefObject<HTMLSelectElement>;
  const dd = useRef() as MutableRefObject<HTMLSelectElement>;
  // 내용
  const content = useRef() as MutableRefObject<HTMLTextAreaElement>;

  // 원하는 국가
  const wantCountry = cntWant.current?.value;

  // 계산하는 함수
  const ExChange = () => {
    // 원하는 금액의 값
    const haveMoney = crcHave.current?.value;

    // 대상 국가의 매매기준율값을 exrate에 넣는다.
    // 대상 국가의 화폐 1단위가 한국돈으로 바뀐 기준
    // ex) usd 1$ => exrate = 1066.1
    // 일본돈 같은경우 100엔 기준 즉 100 기준임으로 100으로 나눠서 계산해줘야 함
    rateValue?.map((item) => {
      const exrate = item.dealBasR;
      console.log(exrate);
      console.log(parseInt(haveMoney) * exrate);
      // 100원기준인 국가코드 일 때
      if (wantCountry === "JPY(100)") {
        // 100을 나누어 1원 기준으로 만든다. (나머지값은 버린다.)
        return setExValue(Math.round(parseInt(haveMoney) * exrate / 100));
      }
      // 1원 기준일 시 (나머지 값은 버린다)
      return setExValue(Math.round(parseInt(haveMoney) * exrate));
    })
  }
  // 국가코드, 매매기준율 받아오기
  const fetchData = async () => {
    // 백엔드에서 해당 국가의 코드와 매매기준율 데이터를 받아옴 
    const res = await api.fetch(wantCountry);

    // axios에서 응답받은 데이터는 data 속성에 들어가있음
    // 서버로부터 받은 데이터를 state 객체로 받아옴
    const rate = res.data.map((item) => ({
      cntUnit: item.curUnit,
      dealBasR: item.dealBasR,
    })) as CalculatorItemState[];

    // 받아온 값 rateValue에 넣기
    setRateValue(rate);

    console.log("---- await axios.get completed ----");
    // 확인용 콘솔 출력
    console.log(rateValue);
    // 계산하는 함수 실행
    ExChange();
  }

  // ---------- 거래일자 구현 ----------
  // 년 배열
  let years = [];
  // 2021s년부터 2023년까지
  for (let i = 2021; i <= 2023; i++) {
    years.push(i);
  }

  // 월 배열
  let months = [];
  // 12월 까지 
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }
  // 일 배열
  let day31 = [];
  // 31일 까지 
  for (let i = 1; i <= 31; i++) {
    day31.push(i);
  }

  // 매물 추가시 함수
  const handleAddClick = async () => {

    // 아이디값을 위한 매물목록 불러오기
    // res에 받아온 패티 데이터를 넣는다.
    const res = await api.fetchList ()

    try{
      const result = await api.add({
        // 매물 ID
        // 매물의 아이디는 매물목록의 배열값 + 1을 해줘야 함
        itemId:  111,
        // 유저 아이디
        hostName: hostName.current?.value,
        // 가지고있는 국가
        cntHave: cntHave.current?.value,
        // 가지고있는 돈
        crcHave: parseInt(crcHave.current?.value),
        // 원하는환전 국가
        cntWant: cntWant.current?.value,
        // 원하는환전 액
        crcWant: parseInt(crcWant.current?.value),
        // 거래일자
        dDay: yy.current?.value+mm.current?.value+dd.current?.value,
        // 본문
        content: content.current?.value,
        // 거래상태
        status: true,
      });

      console.log("----- result -----");
      console.log(result);

    }catch(e:any){
      console.log("ADDERR");
      console.log(e.response);
    }

    // 상태값 확인용
    const result = ({
      // 매물 ID
      // 매물의 아이디는 매물목록의 배열값 + 1을 해줘야 함
      itemId: 1,
      // 유저 아이디
      hostName: hostName.current?.value,
      // 가지고있는 국가
      cntHave: cntHave.current?.value,
      // 가지고있는 돈
      crcHave: parseInt(crcHave.current?.value),
      // 원하는환전 국가
      cntWant: cntWant.current?.value,
      // 원하는환전 액
      crcWant: parseInt(crcWant.current?.value),
      // 거래일자
      dDay: yy.current?.value+mm.current?.value+dd.current?.value,
      // 본문
      content: content.current?.value,
      // 거래상태
      status: true,
    });

    console.log("----- result -----");
    console.log(result);
  }




  // HTML
  return (
    <>
      <div className={styles.calculator_main}>
        {/* 계산기 */}
        <div className={styles.calculator}>
          <form>
            <div className="mb-3">
              <label className="form-label">보유한 화페의 국가</label><br />
              <select
                defaultValue="USD"
                className={`form-select ${styles.select_cnt}`}
                ref={cntWant}
              >
                <option
                  value="USD"
                >
                  USD
                </option>
                <option
                  value="JPY(100)"
                >
                  JPY
                </option>
                <option
                  value="CNH"
                >
                  CNH
                </option>
              </select>
              <input
                type="number"
                className={`form-control ${styles.inputCrc}`}
                ref={crcHave}
                onChange={fetchData}
                placeholder="0"
              />
              <div className="form-text">원하는 환전액을 입력하세요.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">환전을 원하는 국가</label><br />
              <select
                defaultValue="KRW"
                className={`form-select ${styles.select_cnt}`}
                ref={cntHave}
              >
                <option value="KRW">KRW</option>
                {/* <option value="USD">USD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNH</option> */}
              </select>
              <input
                type="number"
                className="form-control"
                ref={crcWant}
                readOnly
                disabled
                value={exValue}
              />
            </div>
          </form>
        </div>
        {/* 구분선 */}
        <hr className={styles.hr} />
        {/*  거래등록 */}
        <div className={styles.addItem}>
          아이디
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Hostname"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              ref={hostName}
            />
          </div>
          거래일자
          <div className={`date d-flex justify-content-between ${styles.datebox}`}>
            <select name="yy" ref={yy} id="" className={`form-select ${styles.date}`}>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
            년
            <select name="mm" ref={mm} id="" className={`form-select ${styles.date}`}>
              {months.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            월
            <select name="dd" ref={dd} id="" className={`form-select ${styles.date}`}>
              {day31.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            일
          </div>
          내용
          <div className={`form-floating `}>
            <textarea
              className={`form-control ${styles.memo}`}
              ref={content}
              placeholder="Leave a comment here"
              id="floatingTextarea2" />
            <label htmlFor="floatingTextarea2">Contant</label>
          </div>
        </div>
        <div className={`d-flex justify-content-center`}>
          {/* <Link href="/market/market"> */}
          <button
            type="submit"
            className={`btn btn-dark ${styles.ebut}`}
            onClick={() => {
              handleAddClick();
            }}
          >
            매물등록
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  )
}

export default Calculator;