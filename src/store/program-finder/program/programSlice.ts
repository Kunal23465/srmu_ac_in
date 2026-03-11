import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgramState {
  programId: string | null;
}

// SSR safe initial state
const getProgramId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("programId");
  }
  return null;
};

const initialState: ProgramState = {
  programId: getProgramId(),
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setProgramId: (state, action: PayloadAction<string>) => {
      state.programId = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("programId", action.payload);
      }
    },

    clearProgramId: (state) => {
      state.programId = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("programId");
      }
    },
  },
});

export const { setProgramId, clearProgramId } = programSlice.actions;
export const programIdReducer = programSlice.reducer;
