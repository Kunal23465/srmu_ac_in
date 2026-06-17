import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";


export interface ProgramFinderParams {
    slug?: string | undefined;
}

export const fetchWhySrmuLogoById = createAsyncThunk("data/whySrmuLogo", async (params?: ProgramFinderParams) => {
    const response = await API.get("/academicProgram/programRecruiters", {
        params, 
    });
    return response.data.data;
});
