import { createSlice } from "@reduxjs/toolkit";
import { fetchAllActiveProgram } from "./programThunk";

interface ProgramState {
    loading: boolean;
    error: string | null;
    data: any[];
}

const initialState: ProgramState = {
    loading: false,
    error: null,
    data: [],
};

const programSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllActiveProgram.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllActiveProgram.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllActiveProgram.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const programReducer = programSlice.reducer;
