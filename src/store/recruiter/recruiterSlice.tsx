import { createSlice } from "@reduxjs/toolkit";
import { fetchRecruiterById } from "./recruiterThunk";


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
const recruiterSlice = createSlice({
    name: "whySrmuSection",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecruiterById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRecruiterById.fulfilled, (state, action) => {
                (state.loading = false), (state.data = action.payload);
            })
            .addCase(fetchRecruiterById.rejected, (state) => {
                (state.loading = false), (state.error = "Fecth Api Failed");
            });
    },
});

export const recruiterSliceReducer = recruiterSlice.reducer;
