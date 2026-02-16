import { createSlice } from "@reduxjs/toolkit";
import { fetchAllActiveState } from "./stateThunk";

interface StateData {
    loading: boolean;
    error: string | null;
    data: any[];
}

const initialState: StateData = {
    loading: false,
    error: null,
    data: [],
};

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllActiveState.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllActiveState.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllActiveState.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const stateReducer = stateSlice.reducer;
