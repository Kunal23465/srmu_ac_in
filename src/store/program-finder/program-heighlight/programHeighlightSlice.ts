import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramHeighlightById } from "./programHeighlightThunk";

interface initialTypes {
  loading:boolean;
  error:null | string;
  data:any[];
}
const initialState: initialTypes = {
  loading: false,
  error: null,
  data: [],
};

const programHeighLightSlice = createSlice({
  name: "programFees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramHeighlightById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProgramHeighlightById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProgramHeighlightById.rejected, (state) => {
        state.loading = false;
        state.error = "Program Fees API Failed";
      });
  },
});

export const programHeighLightSliceReducer = programHeighLightSlice.reducer;
