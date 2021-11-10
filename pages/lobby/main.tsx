import RateTable from "./rateTable";
import Calculator from "./calculator";
import styles from './styles/main.module.css'

const Main = () => {
  return(
    <>
      <div className="d-flex justify-content-evenly">
        <div className={`${styles.rate} `}>
          <RateTable />
        </div>
        <div className={`${styles.cal} `}>
          <Calculator />
        </div>
      </div>
    </>
  )
}
export default Main;