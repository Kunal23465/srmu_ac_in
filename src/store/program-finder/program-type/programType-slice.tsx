import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramType } from "./programTypeThunk";


interface initialStateTypes{
    error:null | string;
    loading:boolean;
    programType:any[];
}
const initialState: initialStateTypes
={
    error:null,
    loading:false,
    programType:[]
}
const programTypeSlice = createSlice({
    name: 'programtype',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchProgramType.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProgramType.fulfilled, (state, action) => {
                state.loading = false,
                    state.programType = action.payload;
            })
            .addCase(fetchProgramType.rejected, (state) => {
                state.loading = false,
                    state.error = "Fecth Api Failed"

            })
           
    }
})

export const programTypeReducer = programTypeSlice.reducer
