import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiSliceType {
  activeIndex: number | null;
  activeTab: number;
  activeDisciplineId: null | number;
  activeProgramId: null | number;
  activeProgramName: string;
}

const initialState: uiSliceType = {
  activeIndex: null,
  activeTab: 0,
  activeDisciplineId: null,
  activeProgramId: null,
  activeProgramName: "",
};

const uiSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    toggleAccordion: (state, action: PayloadAction<number>) => {
      state.activeIndex = state.activeIndex === action.payload ? null : action.payload;
    },
    onTabChange: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
    onSetDisciplineId: (state, action) => {
      state.activeDisciplineId = action.payload;
    },
    onSetProgramId: (state, action) => {
      state.activeProgramId = action.payload;
    },
    onSetProgramName: (state, action) => {
      state.activeDisciplineId = action.payload;
    },
  },
});

export const { toggleAccordion, onTabChange } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
