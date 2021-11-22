import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 데이터 구조
export interface moneyItem {
  itemId: number;
  // 유저 아이디
  hostName: String;
  // 가지고있는 국가
  crcHave: String;
  // 가지고있는 돈
  cntHave: number;
  // 원하는환전 국가
  crcWant: String;
  // 원하는환전 액
  cntWant: number;
  // 거래일자
  dday: String;
  // 본문
  content: String;
  // 거래상태
  status: boolean;
}

// 백엔드 연동을 고려
interface MoneyItemState {
  // 추가된 매물의 데이터 배열
  data: moneyItem[];
  // 서버에서 데이터를 받아왔는지에 대한 여부
  isFetched: boolean;
  // 데이터 추가의 완료 여부
  isAddCompleted?: boolean;
}

// MoneyItemState -> array
const initialState: MoneyItemState = {
  data: [],
  isFetched: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addMoneyItem: (state, action: PayloadAction<moneyItem>) => {
      const calculator = action.payload;
      console.log("-- in reducer function --");
      console.log(calculator);
      state.data.unshift(calculator);
      state.isAddCompleted = true; // 추가가 되었음으로 표시
    },

    // payload 가 없는 reducer
    // completed 관련된 속성을 삭제함 (undefined 상태)
    initialCompleted: (state) => {
      delete state.isAddCompleted;
    },

    initialMoneyItem: (state, action: PayloadAction<moneyItem[]>) => {
      const moneyItems = action.payload;
      state.data = moneyItems;
      state.isFetched = true;
    },
  },
});

// action creator 내보내기: action creator는 action 객체를 반환하는 함수
export const {
  addMoneyItem,
  initialCompleted,
  initialMoneyItem,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
