import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../../apis/axiosinstance";


export const fetchProgramFeesByProgramId = createAsyncThunk(
    "programFees/fetchByProgramId",
    async (programSlug: string) => {
        const response = await API.get(
            "/academicProgram/programFees",
            {
                params: { programSlug }, 
            }
        );
        return response.data;
    }
);
