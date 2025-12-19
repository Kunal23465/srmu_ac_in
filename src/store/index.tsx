import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./root/all-reducer";

export const store = configureStore({
    reducer: allReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;