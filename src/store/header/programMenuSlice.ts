import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramMenu, NavbarProgramType } from "./programMenuThunk";

interface ProgramMenuState {
    loading: boolean;
    error: string | null;
    data: NavbarProgramType[];
}

const initialState: ProgramMenuState = {
    loading: false,
    error: null,
    data: [],
};

const programMenuSlice = createSlice({
    name: "programMenu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /* ===== FETCH MENU ===== */
            .addCase(fetchProgramMenu.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProgramMenu.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProgramMenu.rejected, (state) => {
                state.loading = false;
                state.error = "Fetch Program Menu API Failed";
            });
    },
});

export const programMenuReducer = programMenuSlice.reducer;
