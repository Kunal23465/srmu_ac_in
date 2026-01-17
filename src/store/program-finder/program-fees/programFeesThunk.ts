import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../apis/axiosinstance";


export const fetchProgramFeesByProgramId = createAsyncThunk(
    "programFees/fetchByProgramId",
    async (programId: number) => {
        const response = await API.get(
            "/academicProgram/programFees",
            {
                params: { programId }, 
            }
        );
        return response.data;
    }
);
