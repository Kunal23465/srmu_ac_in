import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramTypeIntroByUrl } from "./ProgramTypeIntroThunk";


interface InitialStateTypes {
  error: string | null;
  loading: boolean;
  data: any;
}

const initialState: InitialStateTypes = {
  error: null,
  loading: false,
  data: null,
};

const programTypeIntroByUrlSlice = createSlice({
  name: "programByUrl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramTypeIntroByUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProgramTypeIntroByUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProgramTypeIntroByUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const programTypeIntroByUrlSliceReducer = programTypeIntroByUrlSlice.reducer;