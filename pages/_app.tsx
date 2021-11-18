
import { Provider } from 'react-redux'
import { store } from '../provider';
import "../styles/globals.css";
import "../styles/bootstrap-custom.scss";
import "../styles/calculator.scss";
import "../styles/lobby.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <Provider store={store}>

    <Component {...pageProps} />
   </Provider>
  );}

export default MyApp;
