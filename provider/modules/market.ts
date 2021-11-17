import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface MarketState {
  data: MarketItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  totalElements?: number;
}

const initialState: MarketState = {
  data: [],
  isFetched: false,
  totalElements: 10,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    initialCompleted: (state) => {
      delete state.isAddCompleted;
    },
  },
});

export const { initialCompleted } = marketSlice.actions;

export default marketSlice.reducer;
