import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "./blogsThunk";

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
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        (state.loading = false), (state.error = "Fecth Api Failed");
      });
  },
});

export const blogsSliceReducer = blogsSlice.reducer;
