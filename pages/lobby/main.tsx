import RateTable from "./rateTable";
import Calculator from "./calculator";
import Appbar from "../bar/appbar";
import styles from './styles/main.module.css'
import React from "preact/compat";
import { store } from "../../provider";
import { Provider } from "react-redux";
import Sidebar from "../manager/about/sidebar";

const Main = () => {
  return(
    <Provider store={store}>
    <>
      <Appbar />
      <Sidebar />
      <div className="d-flex justify-content-evenly">
        <div className={`${styles.rate} `}>
          <RateTable />
        </div>
        <div className={`${styles.cal} `}>
          <Calculator />
        </div>
      </div>
    </>
    </Provider>
  )
}
export default Main;