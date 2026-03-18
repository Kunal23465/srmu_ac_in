import { createSlice } from "@reduxjs/toolkit";
import { fetchPlacementDriveTabData } from "./placementDriveTabDataThunk";

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
const fetchPlacementDriveTabDataSlice = createSlice({
    name: "getHomeEventsData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlacementDriveTabData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlacementDriveTabData.fulfilled, (state, action) => {
                (state.loading = false), (state.data = action.payload);
            })
            .addCase(fetchPlacementDriveTabData.rejected, (state) => {
                (state.loading = false), (state.error = "Fecth Api Failed");
            });
    },
});

export const getPlacementDriveTabDataSliceReducer = fetchPlacementDriveTabDataSlice.reducer;
