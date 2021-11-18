import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "./modules/market";
import userNameReducer from "./modules/user";
import rootSaga from "../middleware";
import createSagaMiddleware from "@redux-saga/core";
import calculatorReducer from "./modules/calculator";

const sagaMiddleware = createSagaMiddleware();

// 전역상태(global state) 저장소
export const store = configureStore({
  reducer: {
    market: marketReducer,
    // calculator를 처리하는 함수
    calculator: calculatorReducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
