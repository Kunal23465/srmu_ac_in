import { createSlice } from "@reduxjs/toolkit";

import { BannerResponse, fetchBanner } from "./bannerThunk";

interface BannerState {
    loading: boolean;
    error: string | null;
    data: BannerResponse[];
}

const initialState: BannerState = {
    loading: false,
    error: null,
    data: [],
};

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /* ===== FETCH MENU ===== */
            .addCase(fetchBanner.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBanner.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchBanner.rejected, (state) => {
                state.loading = false;
                state.error = "Fetch Banner Failed";
            });
    },
});

export const bannerReducer = bannerSlice.reducer;
