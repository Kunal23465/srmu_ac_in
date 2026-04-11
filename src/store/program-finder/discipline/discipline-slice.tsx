import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramDiscipline, fetchProgramDisciplines } from "./disciplineThunk";

interface initialStateTypes {
  error: null | string;
  loading: boolean;
  discipline: any[];
}
const initialState: initialStateTypes = {
  error: null,
  loading: false,
  discipline: [],
};
const disciplineSlice = createSlice({
  name: "Discipline",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramDisciplines.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProgramDisciplines.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.discipline = action.payload;
      })
      .addCase(fetchProgramDisciplines.rejected, (state) => {
        state.loading = false;
        state.error = "Fecth Api Failed";
      })
      .addCase(fetchProgramDiscipline.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProgramDiscipline.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.discipline = action.payload;
      })
      .addCase(fetchProgramDiscipline.rejected, (state) => {
        state.loading = false;
        state.error = "Fecth Api Failed";
      });
  },
});

export const disciplineSliceReducer = disciplineSlice.reducer;
