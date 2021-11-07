import styles from './styles/caclulator.module.css'
import Link from "next/link";
import { MutableRefObject, useEffect, useRef, useState } from 'react';

import api from "../api/calculator"

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//계산에 필요한 state
interface CalculatorItemState{
  cntUnit: string;
  dealBasR: number;
}
// 매물에 대한 state
interface AddItemState{
  // 매물 ID
  itemId: number;
  // 유저 아이디
  hostName : String;
  // 가지고있는 국가
  cntHave : String;
  // 가지고있는 돈
  crcHave : number;
  // 원하는환전 국가
  cntWant : String;
  // 원하는환전 액
  crcWant : number;
  // 거래일자
  dDay : String;
  // 본문
  content : String;
  // 거래상태
  status : boolean;
  // 추가모드인지
  isAdd? : boolean;
}

const Calculator = () => {
  // 매물목록
  const [itemList, setItemList] = useState<AddItemState[]>();

  // 불러온 매매율
  const [rateValue, setRateValue] = useState<CalculatorItemState[]>();

  // 환전된 결과 값
  const [exValue, setExValue] = useState(Number);

  // 보유하고 있는 화페 국가
  const cntHave = useRef() as MutableRefObject <HTMLSelectElement>;
  // 보유하고있는 화폐 금액
  const crcHave = useRef() as MutableRefObject <HTMLInputElement>;
  // 환전을 원하는 국가
  const cntWant = useRef() as MutableRefObject <HTMLSelectElement>;
  // 계산된 환전 금액
  const crcWant = useRef() as MutableRefObject <HTMLInputElement>;
  // 유저아이디
  const hostName = useRef() as MutableRefObject <HTMLInputElement>;
  // 년도 월 일
  const yy = useRef() as MutableRefObject <HTMLSelectElement>;
  const mm = useRef() as MutableRefObject <HTMLSelectElement>;
  const dd = useRef() as MutableRefObject <HTMLSelectElement>;
  // 내용
  const content =useRef() as MutableRefObject <HTMLTextAreaElement>;
  
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

      return setExValue(parseInt(haveMoney) * exrate);
    })
    // const result = parseInt(haveMoney) * parseInt(exrate);

    // console.log(result);
    
  }
  // 국가코드, 매매기준율 받아오기
  const fetchData = async () => {
    // 백엔드에서 해당 국가의 코드와 매매기준율 데이터를 받아옴 
    const res = await api.fetch(wantCountry);
  
    // axios에서 응답받은 데이터는 data 속성에 들어가있음
    // 서버로부터 받은 데이터를 state 객체로 받아옴
    const rate = res.data.map((item)=> ({
      cntUnit: item.curUnit,
      dealBasR: item.dealBasR,
    })) as CalculatorItemState[];
    // const rate = res.data.map((item)=> ({
    //   cntUnit: item.curUnit,
    //   dealBasR: item.dealBasR,
    // })) as CalculatorItemState[];
    
    // 받아온 값 rateValue에 넣기
    setRateValue(rate);
  
    console.log("---- await axios.get completed ----");
    // 확인용 콘솔 출력
    console.log(rateValue);

    ExChange();
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
                className= {`form-control ${styles.inputCrc}`}
                ref={crcHave}
                onChange={fetchData}
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
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
            년
            <select name="mm" ref={mm} id="" className={`form-select ${styles.date}`}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            월
            <select name="dd" ref={dd} id="" className={`form-select ${styles.date}`}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            일
          </div>
          내용
          <div className={`form-floating `}>
            <textarea className={`form-control ${styles.memo}`} ref={content} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
        <div className={`d-flex justify-content-center`}>
          <Link href="/market/market">
            <button
              type="submit"
              className={`btn btn-dark ${styles.ebut}`}
            >
              매물등록
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Calculator;