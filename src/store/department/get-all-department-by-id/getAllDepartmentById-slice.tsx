import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDepartmentsByInstitutionId } from "./getAllDepartmentByIdThunk";
interface ProgramFeesState {
    loading: boolean;
    error: string | null;
    data: any[] | null;
}
const initialState: ProgramFeesState = {
    loading: false,
    error: null,
    data: null,
};
const getAllDepartmentByIdSlice = createSlice({
    name: "getInsituteDepartment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDepartmentsByInstitutionId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllDepartmentsByInstitutionId.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllDepartmentsByInstitutionId.rejected, (state) => {
                state.loading = false;
                state.error = "Program Fees API Failed";
            });
    },
});

export const getAllDepartmentByIdSliceReducer = getAllDepartmentByIdSlice.reducer;
