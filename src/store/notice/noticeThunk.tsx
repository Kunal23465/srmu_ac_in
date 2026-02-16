import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../apis/axiosinstance";
export const fetchNotice = createAsyncThunk(
    "data/fetchDiscipline",
    async () => {
        const response = await API.get(
            `/academicProgram/notice`
        );
        return response.data;
    }
);