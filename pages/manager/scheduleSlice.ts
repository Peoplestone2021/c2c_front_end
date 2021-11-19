import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 데이터 구조를 interface로 만듬
export interface EventItem {
  id?: number;
  groupId?: number;
  title: string;
  memo?: string;
  start?: number
  end?: number;
}

// 백엔드 연동 고려해서 state 구조 설계
interface EventState {
  data: EventItem[];
  isFetched: boolean; // 서버에서 데이터를 받아왔는지 여부
  isAddCompleted?: boolean; // 데이터 추가가 완료되었는지 여부
  isRemoveCompleted?: boolean; // 데이터 삭제가 완료되었는지 여부
  isModifyCompleted?: boolean; // 데이터 수정이 완료되었는지 여부
}

const initialState: EventState = {
  data: [
    {
      id: 1,
      groupId: 999,
      title: "initial event",
      memo: "memo",
      start: new Date().getTime(),
    },
  ],
  isFetched: false,
}

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // payload로 item 객체를 받음
    addEvent: (state, action: PayloadAction<EventItem>) => {
      const event = action.payload;
      state.data.unshift(event);
      state.isAddCompleted = true;  // 추가가 되었음으로 표시
    },

  // payload 없는 reducer
    // completed 관련된 속성을 삭제(undefined상태)
    initialCompleted: (state) => {
      delete state.isAddCompleted;
      delete state.isRemoveCompleted;
      delete state.isModifyCompleted;
    },

    removeEvent: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // id로 index를 찾은 후 1개 삭제
      state.data.splice(
        state.data.findIndex((item) => item.id === id),
        1
      );
    },
    modifyEvent: (state, action: PayloadAction<EventItem>) => {
      const event = action.payload;
      const item = state.data.find((item) => item.id === event.id);
      if (item) {

        item.groupId = event.groupId;
        item.title = event.title;
        item.memo = event.memo;
        item.start = event.start;
        item.end = event.end;
      };
    },
    // payload값으로 state를 초기화하는 reducer 필요함
    initialEvent: (state, action: PayloadAction<EventItem[]>) => {
      const events = action.payload;
      // 백엔드에서 받아온 데이터
      state.data = events;
      // 데이터를 받아옴으로 값을 남김
      state.isFetched = true;
    },
  },
});
  export const { addEvent, initialCompleted, removeEvent, modifyEvent, initialEvent } = eventSlice.actions;

export default eventSlice.reducer;