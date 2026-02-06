import { createSlice } from "@reduxjs/toolkit";
import { fetchDepartmentById } from "./getDepartmentDetailsByIdThunk";
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
const getDepartmentByIdSlice = createSlice({
    name: "getInsituteDepartment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartmentById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDepartmentById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDepartmentById.rejected, (state) => {
                state.loading = false;
                state.error = "Program Fees API Failed";
            });
    },
});

export const getDepartmentByIdSliceReducer = getDepartmentByIdSlice.reducer;
