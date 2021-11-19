import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserName {
  userName: string;
  isLogedOn: boolean;
}

interface UserState {
  userName: string;
  isLogedOn: boolean;
}

const initialState: UserState = {
  userName: "",
  isLogedOn: false,
};

const userSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    userName: (state) => {},
    loginCompleted: (state) => {},
  },
});

export const { loginCompleted } = userSlice.actions;

export default userSlice.reducer;
