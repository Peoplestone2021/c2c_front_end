import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ManagerItem {
  id: number;
 groupId: number;
 title: string;
 memo: string;
 start: string;
 end?: string;

}

interface ManagerState {
  data: ManagerItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  // totalElements?: number;
}

const initialState: ManagerState = {
  data: [],
  isFetched: false,
  // totalElements: 10,
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    initialCompleted: (state) => {
      delete state.isAddCompleted;
    },
  },
});

export const { initialCompleted } = managerSlice.actions;

export default managerSlice.reducer;
