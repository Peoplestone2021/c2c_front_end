import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React, { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { Provider } from "react-redux";
import { store } from "../provider";
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Appbar from "./bar/appbar";

const Home = () => {
  return (
    <Provider store={store}>
<div>
      <Appbar />

      {/* <nav className= "navi position-fixed">
      <ul className=" flex-column">
        <li className ="nav-item">환전 계산</li>
        <li className ="nav-item">환율 조회</li>
        <li className ="nav-item">기간별 매매율</li>
      </ul>
      </nav> */}
      {/* main content */}

      <div className="content">
        <div className="menus">
          <Link href="/lobby/main">
            <a className="menu-link">
              <div className="menu1">
                <p>환전로비</p>
              </div>
            </a>
          </Link>

          <Link href="/market">
            <a className="menu-link">
              <div className="menu2">
                <p>마켓플레이스</p>
              </div>
            </a>
          </Link>

          <Link href="/manager/manager">
            <a className="menu-link">
              <div className="menu3">
                <p>프라이빗거래매니저</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
    </Provider>
  );
};


export default Home;

