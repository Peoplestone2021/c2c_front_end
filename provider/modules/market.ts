import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface MarketItemResponse {
export interface MarketItem {
  id: number;
  hostName: String;
  crcHave: String;
  crcWant: String;
  cntHave: number;
  cntWant: number;
  dDate: String;
  content?: String;
  status: boolean;
}

// interface itemApi{
interface itemState {
  data: MarketItem[];
  isFetched: boolean;
}
const initialState: itemState = {
  data: [
    {
      id: 11111111,
      hostName: "일번",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 100,
      cntWant: 117400,
      dDate: "1635747679",
      content: "울릉도 동남쪽",
      status: true,
    },
    {
      id: 22222222,
      hostName: "이번",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 110,
      cntWant: 127400,
      dDate: "1635745679",
      content: "뱃길따라 이백리",
      status: true,
    },
    {
      id: 33333333,
      hostName: "삼번",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 120,
      cntWant: 128400,
      dDate: "1635749679",
      content: "외로운 섬하나",
      status: true,
    },
    {
      id: 44444444,
      hostName: "사번",
      crcHave: "USD",
      crcWant: "KRW",
      cntHave: 120,
      cntWant: 128400,
      dDate: "1635748679",
      content: "새들의 고향",
      status: true,
    },
  ],
  isFetched: false,
};

// const marketSlice = create

// export default itemAPI;
export default itemState;
