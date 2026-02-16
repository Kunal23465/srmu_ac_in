import { createSlice } from "@reduxjs/toolkit";
import { fetchAllActiveCityByStateId } from "./cityThunk";

interface CityState {
    loading: boolean;
    error: string | null;
    data: any[];
}

const initialState: CityState = {
    loading: false,
    error: null,
    data: [],
};

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllActiveCityByStateId.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllActiveCityByStateId.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllActiveCityByStateId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const cityReducer = citySlice.reducer;
