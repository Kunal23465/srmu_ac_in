import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";


export interface ProgramFinderParams {
    slug?: string | undefined;
}

export const fetchRecruiterById = createAsyncThunk("data/fetchRecruiter", async (params?: ProgramFinderParams) => {
    const response = await API.get("/academicProgram/recruiters", {
        params, // Axios automatically builds query string
    });
    return response.data;
});
