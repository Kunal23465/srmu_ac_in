import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";

export interface ProgramFaqParams {
    slug?: string;
}

export const fetchProgramFaqByProgramId = createAsyncThunk(
    "academicProgram/programFaqs",
    async (params?: ProgramFaqParams) => {
        const response = await API.get("/academicProgram/programFaqs", {
            params,
        });

        return response.data;
    }
);