import { createSlice } from "@reduxjs/toolkit";
import { fetchWhySrmuLogoById } from "./whySrmuLogoThunk";



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
const whySrmuLogoSlice = createSlice({
    name: "whySrmuSection",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWhySrmuLogoById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWhySrmuLogoById.fulfilled, (state, action) => {
                (state.loading = false), (state.data = action.payload);
            })
            .addCase(fetchWhySrmuLogoById.rejected, (state) => {
                (state.loading = false), (state.error = "Fecth Api Failed");
            });
    },
});

export const  whySrmuLogoSliceReducer = whySrmuLogoSlice.reducer;
