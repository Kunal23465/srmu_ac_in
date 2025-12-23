import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramByFlag } from "./programFlagThunk";


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
const programFlagSlice = createSlice({
  name: "programBtyFlag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramByFlag.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProgramByFlag.fulfilled, (state, action) => {
        state.loading = false, (state.data = action.payload);
      })
      .addCase(fetchProgramByFlag.rejected, (state) => {
        (state.loading = false), (state.error = "Fecth Api Failed");
      });
  },
});

export const programFlagSliceReducer = programFlagSlice.reducer;
