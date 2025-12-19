import { createSlice } from "@reduxjs/toolkit";
import { fetchProgramFeesByProgramId } from "./programFeesThunk";

export interface ProgramFee {
    feeTypeId: number;
    feeTypeName: string;
    yearWiseAmount: Record<string, number>;
}

export interface ProgramFeesData {
    programId: number;
    programName: string;
    fees: ProgramFee[];
}

interface ProgramFeesState {
    loading: boolean;
    error: string | null;
    data: ProgramFeesData | null;
}

const initialState: ProgramFeesState = {
    loading: false,
    error: null,
    data: null,
};

const programFeesSlice = createSlice({
    name: "programFees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProgramFeesByProgramId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProgramFeesByProgramId.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProgramFeesByProgramId.rejected, (state) => {
                state.loading = false;
                state.error = "Program Fees API Failed";
            });
    },
});

export const programFeesReducer = programFeesSlice.reducer;
