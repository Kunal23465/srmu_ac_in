import { createSlice } from "@reduxjs/toolkit";
import { fetchNotice } from "./noticeThunk";
interface initialStateTypes {
  loading: boolean;
  error: null | string;
  data: any[];
}
const initialState: initialStateTypes = {
  loading: false,
  error: null,
  data: [],
};
const noticeSlice = createSlice({
  name: "Notice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotice.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(fetchNotice.rejected, (state) => {
        (state.loading = false), (state.error = "Fecth Api Failed");
      });
  },
});
export const noticeSliceReducer=noticeSlice.reducer;
