import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgramState {
  programId: string | null;
}

// Safe localStorage read (prevents SSR issues)
const getInitialProgramId = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("programId");
  }
  return null;
};

const initialState: ProgramState = {
  programId: getInitialProgramId(),
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
