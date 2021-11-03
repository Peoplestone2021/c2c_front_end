import styles from './styles/caclulator.module.css'
import Link from "next/link";


const calculator = () => {

  return(
    <>
      <div className= {styles.calculator_main}>
        <div className={styles.calculator}>
          <form>
            <div className="mb-3">
              <label className="form-label">보유한 화페의 국가</label><br/>
              <select className= {`form-select ${styles.select_cnt}`}>
                <option selected>KRW</option>
                {/* <option value="USD">USD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option> */}
              </select>
              <input type="text" className="form-control" />
              <div className="form-text">원하는 환전액을 입력하세요.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">환전을 원하는 국가</label><br/>
              <select className={`form-select ${styles.select_cnt}`}>
                <option selected>국가선택</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
              </select>
              <input type="text" className="form-control" />
            </div>
            <div className="d-flex buttons justify-content-center">
              <button type="submit" className={`btn btn-primary ${styles.ebut}`}>계산하기</button>
            </div>
          </form>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.addItem}>
          아이디
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          거래일자
          <div className={`date d-flex justify-content-between ${styles.datebox}`}>
          <select name="yy" id="" className={`form-select ${styles.date}`}>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
            <option value="">2018</option>
          </select>
          년
          <select name="mm" id="" className={`form-select ${styles.date}`}>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
            <option value="">04</option>
            <option value="">05</option>
            <option value="">06</option>
            <option value="">07</option>
            <option value="">08</option>
            <option value="">09</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          월
          <select name="dd" id="" className={`form-select ${styles.date}`}>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
            <option value="">04</option>
            <option value="">05</option>
            <option value="">06</option>
            <option value="">07</option>
            <option value="">08</option>
            <option value="">09</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">13</option>
            <option value="">14</option>
            <option value="">15</option>
            <option value="">16</option>
            <option value="">17</option>
            <option value="">18</option>
            <option value="">19</option>
            <option value="">20</option>
            <option value="">21</option>
            <option value="">22</option>
            <option value="">23</option>
            <option value="">24</option>
            <option value="">25</option>
            <option value="">26</option>
            <option value="">27</option>
            <option value="">28</option>
            <option value="">29</option>
            <option value="">30</option>
            <option value="">31</option>
          </select>
          일
          </div>
          내용
          <div className={`form-floating `}>
            <textarea className={`form-control ${styles.memo}`} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
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
      </div>
    </> 
  )
}

export default calculator;