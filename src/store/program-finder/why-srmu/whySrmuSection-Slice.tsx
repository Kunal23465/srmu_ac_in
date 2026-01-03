import { createSlice } from "@reduxjs/toolkit";
import { fetchWhySrmuSectionById } from "./whySrmuSectionThunk";

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
const whySrmuSectionSlice = createSlice({
  name: "whySrmuSection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWhySrmuSectionById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWhySrmuSectionById.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(fetchWhySrmuSectionById.rejected, (state) => {
        (state.loading = false), (state.error = "Fecth Api Failed");
      });
  },
});

export const whySrmuSectionSliceReducer = whySrmuSectionSlice.reducer;
