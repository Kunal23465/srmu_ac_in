import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../apis/axiosinstance";

export const fetchProgramDiscipline = createAsyncThunk(
    "data/fetchDiscipline",
    async () => {
        const response = await API.get(
            `/academicProgram/programDisciplines`
        );
        return response.data;
    }
);