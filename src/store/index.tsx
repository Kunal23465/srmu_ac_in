import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./root/all-reducer";

type RootReducerState = {
    [Key in keyof typeof allReducer]: ReturnType<(typeof allReducer)[Key]>;
};

export const createStore = (preloadedState?: Partial<RootReducerState>) =>
    configureStore({
        reducer: allReducer,
        preloadedState: preloadedState as RootReducerState | undefined,
    });

export const store = createStore();

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore["getState"]>;
