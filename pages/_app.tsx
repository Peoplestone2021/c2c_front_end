

import { Provider } from 'react-redux'
import { store } from '../provider';


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
  return (  
    <Provider store={store}>

    <Component {...pageProps} />
   </Provider>
  );}


export default MyApp;
