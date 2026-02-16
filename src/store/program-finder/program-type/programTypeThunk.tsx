import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../../apis/axiosinstance";

export const fetchProgramType = createAsyncThunk(
    "data/fetchProgramType",
    async () => {
        const response = await API.get(
            `/academicProgram/programTypes`
        );
        return response.data;
    }
);