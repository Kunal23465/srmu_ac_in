import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./root/all-reducer";

export const createStore = (preloadedState?: Partial<RootState>) =>
    configureStore({
        reducer: allReducer,
        preloadedState,
    });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;