import styles from './styles/caclulator.module.css'

const calculator = () => {

  return(
    <>
      <div className= {styles.lobby}>
      <form>
        <div className="mb-3">
          <label className="form-label" >보유한 화페의 국가</label><br/>
          <select className={styles.select_cnt}>
            <option selected>국가선택</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
          <input type="text" className="form-control" />
          <div className="form-text">원하는 환전액을 입력하세요.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">환전을 원하는 국가</label><br/>
          <select className={styles.select_cnt}>
            <option selected>국가선택</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
          <input type="text" className="form-control" />
        </div>
        <div className="d-flex buttons justify-content-end">
          <button type="submit" className="btn btn-primary">계산하기</button>
          <button type="submit" className="btn btn-dark">거래등록</button>
        </div>
      </form>
      </div>
    </> 
  )
}

export default calculator;