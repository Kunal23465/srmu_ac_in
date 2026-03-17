import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeEventsData } from "./getHomeEventsThunk";



interface initialStateTypes {
    error: null | string;
    loading: boolean;
    data: any[];
}
const initialState: initialStateTypes = {
    error: null,
    loading: false,
    data: [],
};
const getHomeEventsDataSlice = createSlice({
    name: "getHomeEventsData",
    initialState,
    reducers: {
        setHomeEventsData(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeEventsData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHomeEventsData.fulfilled, (state, action) => {
                (state.loading = false), (state.data = action.payload);
            })
            .addCase(fetchHomeEventsData.rejected, (state) => {
                (state.loading = false), (state.error = "Fecth Api Failed");
            });
    },
});

export const { setHomeEventsData } = getHomeEventsDataSlice.actions;
export const getHomeEventsDataSliceReducer = getHomeEventsDataSlice.reducer;
