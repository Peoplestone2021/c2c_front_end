


import React from 'react'

import "../styles/globals.css";
import "../styles/bootstrap-custom.scss";
import "../styles/calculator.scss";
import "../styles/lobby.scss";
import type { AppProps } from "next/app";


import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'



function MyApp({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />);
}

export default MyApp;
