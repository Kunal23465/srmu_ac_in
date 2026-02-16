import { createSlice } from "@reduxjs/toolkit";
import { submitEnquiryForm } from "./enquiryThunk";

interface EnquiryState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: EnquiryState = {
    loading: false,
    success: false,
    error: null,
};

const enquirySlice = createSlice({
    name: "enquiry",
    initialState,
    reducers: {
        resetEnquiryState: (state) => {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitEnquiryForm.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitEnquiryForm.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitEnquiryForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetEnquiryState } = enquirySlice.actions;
export const enquiryReducer = enquirySlice.reducer;
