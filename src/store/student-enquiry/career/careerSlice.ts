import { createSlice } from "@reduxjs/toolkit";
import { fetchAllActiveCareer } from "./careerThunk";

interface CareerState {
    loading: boolean;
    error: string | null;
    data: any[];
}

const initialState: CareerState = {
    loading: false,
    error: null,
    data: [],
};

const careerSlice = createSlice({
    name: "career",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllActiveCareer.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllActiveCareer.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllActiveCareer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const careerReducer = careerSlice.reducer;
