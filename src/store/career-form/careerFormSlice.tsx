import { createSlice } from "@reduxjs/toolkit";
import { saveCareerForm } from "./careerFormThunk";

interface CareerFormState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: CareerFormState = {
  loading: false,
  error: null,
  success: false,
};

const careerFormSlice = createSlice({
  name: "careerForm",
  initialState,
  reducers: {
    resetCareerFormState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveCareerForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveCareerForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(saveCareerForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCareerFormState } = careerFormSlice.actions;
export const careerFormReducer = careerFormSlice.reducer;
