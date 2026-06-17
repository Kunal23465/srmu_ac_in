// src/redux/slices/programFaqSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramFaqByProgramId } from "./programFaqThunk";


export interface ProgramFaq {
  id: number;
  question: string;
  answer: string;
}

interface ProgramFaqState {
  data: ProgramFaq[];
  loading: boolean;
  error: string | null;
}

const initialState: ProgramFaqState = {
  data: [],
  loading: false,
  error: null,
};

const programFaqSlice = createSlice({
  name: "programFaq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramFaqByProgramId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProgramFaqByProgramId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.data || action.payload || [];
      })
      .addCase(fetchProgramFaqByProgramId.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Something went wrong";
      });
  },
});

export const programFaqReducer= programFaqSlice.reducer;