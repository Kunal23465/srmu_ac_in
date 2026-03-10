import { createSlice } from "@reduxjs/toolkit";
import { fetchPlacementRecordTabData } from "./placementRecordTabDataThunk";



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
const getPlacementRecordTabDataSlice = createSlice({
    name: "getHomeEventsData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlacementRecordTabData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlacementRecordTabData.fulfilled, (state, action) => {
                (state.loading = false), (state.data = action.payload);
            })
            .addCase(fetchPlacementRecordTabData.rejected, (state) => {
                (state.loading = false), (state.error = "Fecth Api Failed");
            });
    },
});

export const getPlacementRecordTabDataSliceReducer = getPlacementRecordTabDataSlice.reducer;
