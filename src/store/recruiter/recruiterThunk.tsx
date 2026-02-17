import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";


export interface ProgramFinderParams {
    programId?: number | string;
}

export const fetchRecruiterById = createAsyncThunk("data/fetchRecruiter", async (params?: ProgramFinderParams) => {
    const response = await API.get("/academicProgram/recruiters", {
        params, // Axios automatically builds query string
    });
    return response.data;
});
