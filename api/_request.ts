import axios, { AxiosInstance } from "axios";
import { getSessionId } from "../lib/cookie";

const createAxiosInstance = () => {
  if (typeof document == "undefined") {
    return axios;
  }

  let instance: AxiosInstance;

  if (!getSessionId()) {
    instance = axios.create();
  } else {
    instance = axios.create({
      headers: { APP_SESSION_ID: `${getSessionId()}` },
    });
  }

  return instance;
};

export { createAxiosInstance };
