
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { store } from '../provider';
=======


import React from 'react'

>>>>>>> 2a47b17bfcd58fec8529cb3276a9526c48dd35b0
import "../styles/globals.css";
import "../styles/bootstrap-custom.scss";
import "../styles/calculator.scss";
import "../styles/lobby.scss";
import type { AppProps } from "next/app";


import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'



function MyApp({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return (  
    <Provider store={store}>

    <Component {...pageProps} />
   </Provider>
  );}
=======
  return (<Component {...pageProps} />);
}
>>>>>>> 2a47b17bfcd58fec8529cb3276a9526c48dd35b0

export default MyApp;
