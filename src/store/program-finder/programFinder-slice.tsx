import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProgramFinder, fetchProgramFinderByID } from "./programFinderThunk";
export interface ProgramData {
  programId: number;
  programTypeId: number;
  slug: string;
  programDisciplineId: number;
  programTypeName: string;
  programDisciplineName: string;
  name: string;
  description: string | null;
  title: string;
  overview: string; // HTML string from backend
  totalDurationYear: string;
  totalFees: number;
  showOnNavbar: boolean | null;
}

export interface ProgramDetailsData extends ProgramData {
  programId: number;
  metaTitle?: string | null;
  metaDescription?: string | null;
  documentPath?: string | null;
  scope?: string | null;
  programObjective?: string;
  programLearningOutcomes?: string;
  specificOutcomes?: string;
}

interface initialTypes {
  loading: boolean;
  error: null | string;
  data: ProgramData[];
  dataByID: ProgramDetailsData | null;
  currentDetailsSlug: string | null;
}
const initialState: initialTypes = {
  loading: false,
  error: null,
  data: [],
  dataByID: null,
  currentDetailsSlug: null,
};
const programFinderSlice = createSlice({
  name: "programFinder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProgramFinder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProgramFinder.fulfilled, (state, action) => {
        ((state.loading = false), (state.data = action.payload));
      })
      .addCase(fetchAllProgramFinder.rejected, (state) => {
        ((state.loading = false), (state.error = "Fecth Api Failed"));
      })
      // get by id
      .addCase(fetchProgramFinderByID.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.currentDetailsSlug = action.meta.arg;
        state.dataByID = null;
      })
      .addCase(fetchProgramFinderByID.fulfilled, (state, action) => {
        if (action.meta.arg !== state.currentDetailsSlug) {
          return;
        }

        ((state.loading = false), (state.dataByID = action.payload));
      })
      .addCase(fetchProgramFinderByID.rejected, (state, action) => {
        if (action.meta.arg !== state.currentDetailsSlug) {
          return;
        }

        ((state.loading = false), (state.error = "Fecth Api Failed"));
      });
  },
});

export default programFinderSlice.reducer;
