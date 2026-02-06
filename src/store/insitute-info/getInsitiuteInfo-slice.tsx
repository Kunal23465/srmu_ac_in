import { createSlice } from "@reduxjs/toolkit";
import { fetchInsituteInfo } from "./getInsituteInfoThunk";


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
const getInsituteInfoSlice = createSlice({
    name: "getInsituteInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInsituteInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchInsituteInfo.fulfilled, (state, action) => {
                (state.loading = false), (state.data = action.payload);
            })
            .addCase(fetchInsituteInfo.rejected, (state) => {
                (state.loading = false), (state.error = "Fecth Api Failed");
            });
    },
});

export const getInsituteInfoSliceReducer = getInsituteInfoSlice.reducer;
