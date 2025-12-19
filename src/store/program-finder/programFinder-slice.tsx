import { createSlice } from "@reduxjs/toolkit"
import { fetchAllProgramFinder, fetchProgramFinderByID } from "./programFinderThunk"
export interface ProgramData {
    programId: number;
    programTypeId: number;
    programDisciplineId: number;
    programTypeName: string;
    programDisciplineName: string;
    name: string;
    description: string | null;
    title: string;
    overview: string;          // HTML string from backend
    totalDurationYear: string;
    totalFees: number;
    showOnNavbar: boolean | null;
}

interface initialTypes {
    loading: boolean,
    error: null | string,
    data: ProgramData[],
    dataByID:any[]
}
const initialState: initialTypes = {
    loading: false,
    error: null,
    data: [],
    dataByID:[],
}
const programFinderSlice = createSlice({
    name: 'programFinder',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllProgramFinder.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAllProgramFinder.fulfilled, (state, action) => {
                state.loading = false,
                    state.data = action.payload;
            })
            .addCase(fetchAllProgramFinder.rejected, (state) => {
                state.loading = false,
                    state.error = "Fecth Api Failed"

            })
            // get by id
            .addCase(fetchProgramFinderByID.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProgramFinderByID.fulfilled, (state, action) => {
                state.loading = false,
                    state.dataByID = action.payload;
            })
            .addCase(fetchProgramFinderByID.rejected, (state) => {
                state.loading = false,
                    state.error = "Fecth Api Failed"

            })

    }
})

export default programFinderSlice.reducer;