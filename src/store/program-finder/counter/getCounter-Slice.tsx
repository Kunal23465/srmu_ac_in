import { createSlice } from "@reduxjs/toolkit";
import { getCounterById } from "./getCounterThunk";

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
const getCounterSlice = createSlice({
  name: "getCounterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCounterById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCounterById.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(getCounterById.rejected, (state) => {
        (state.loading = false), (state.error = "Fecth Api Failed");
      });
  },
});

export const getCounterSliceReducer = getCounterSlice.reducer;
