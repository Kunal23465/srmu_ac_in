// store/slices/programSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgramState {
  programId: string | null;
}

const initialState: ProgramState = {
  programId: localStorage.getItem("programId"),
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setProgramId: (state, action: PayloadAction<string>) => {
      state.programId = action.payload;
      localStorage.setItem("programId", action.payload);
    },
    clearProgramId: (state) => {
      state.programId = null;
      localStorage.removeItem("programId");
    },
  },
});

export const { setProgramId, clearProgramId } = programSlice.actions;
export const programIdReducer = programSlice.reducer;
