import Calculator from "./calculator";
import Appbar from "../bar/appbar";
import styles from "./styles/main.module.css";
import React from "preact/compat";
import { store } from "../../provider";
import { Provider } from "react-redux";
import Sidebar from "./sideBar";
import LatestTable from "./latestTable";

const Main = () => {
  return (
    <Provider store={store}>
      <>
        <div className={`${styles.maindiv} d-flex justify-content-evenly`}>
          <Sidebar />
          <div className={`${styles.cal} `}>
            <Calculator />
          </div>
          <div className={`${styles.latest}`}>{/* {<LatestTable /> */}</div>
        </div>
      </>
    </Provider>
  );
};
export default Main;
