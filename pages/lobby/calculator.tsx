import styles from './styles/caclulator.module.css'
import Link from "next/link";
import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calculator = () => {

  // 보유하고 있는 화페 국가
  const cntHave = useRef<HTMLSelectElement>(null);
  // // 보유하고있는 화폐 금액
  const crcHave = useRef<HTMLInputElement>(null);
  // // 환전을 원하는 국가
  const cntWant = useRef<HTMLSelectElement>(null);
  // // 계산된 환전 금액
  const crcWant = useRef<HTMLInputElement>(null);

  // // 유저아이디
  const hostName = useRef <HTMLInputElement>(null)

  // //년도 월 일
  const yy = useRef<HTMLSelectElement>(null);
  const mm = useRef<HTMLSelectElement>(null);
  const dd = useRef<HTMLSelectElement>(null);

  // // 내용
  const content =useRef<HTMLTextAreaElement>(null);

  // 매물등록 버튼 누를시 폼 표시
  const [isAdd, setIsAdd] = useState<boolean>(true);

  // 달력컴포넌트 날짜 
  const [value, onChange] = useState(new Date());



  // HTML
  return(
    <>
      <div className= {styles.calculator_main}>
        {/* 계산기 */}
        <div className={styles.calculator}>
          <form>
            <div className="mb-3">
              <label className="form-label">보유한 화페의 국가</label><br/>
              <select 
                className= {`form-select ${styles.select_cnt}`}
                ref={cntHave}
              >
                <option selected >KRW</option>
                {/* <option value="USD">USD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option> */}
              </select>
              <input 
                type="text" 
                className="form-control"
                ref= {crcHave}
              />
              <div className="form-text">원하는 환전액을 입력하세요.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">환전을 원하는 국가</label><br/>
              <select 
                className={`form-select ${styles.select_cnt}`}
                ref={cntWant}
              >
                <option selected>국가선택</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
              </select>
              <input 
                type="text" 
                className="form-control"
                ref={crcWant}
              />
            </div>
            <div className="d-flex buttons justify-content-center">
              <button type="submit" className={`btn btn-primary ${styles.ebut}`}>계산하기</button>
            </div>
            <div className="d-flex buttons justify-content-center">
              <button 
                type="submit" 
                className={`btn btn-primary ${styles.ebut}`}
                onClick = {() => {
                  setIsAdd(true);
                }}
              >
                이 가격으로 매물 등록
              </button>
            </div>
          </form>
        </div>
        {/* 구분선 */}
        <hr className={styles.hr}/>
        {/*  거래등록 */}
        {isAdd && (
          <>
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
                  <select 
                    name="yy" 
                    ref={yy} 
                    id="" 
                    className={`form-select ${styles.date}`}
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                  </select>
                  년
                  <select 
                    name="mm" 
                    ref={mm} 
                    id="" 
                    className={`form-select ${styles.date}`}
                  >
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
                  <select 
                    name="dd"
                    ref={dd} 
                    id="" 
                    className={`form-select ${styles.date}`}
                  >
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
                <Calendar
                  onChange={onChange}
                  value={value}
                // onClickDay={ }
                />
                내용
                <div className={`form-floating `}>
                  <textarea className={`form-control ${styles.memo}`} 
                    ref={content} 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2"
                    />
                  <label htmlFor="floatingTextarea2">content</label>
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
          
          </>
        )}

      </div>
    </> 
  )
}

export default Calculator;