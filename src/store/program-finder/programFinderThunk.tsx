import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../apis/axiosinstance";

export interface ProgramFinderParams {
  programTypeId?: number | string;
  programFlagId?: number | string;
  programDisciplineId?: number | string;
  name?: string;
}

export const fetchAllProgramFinder = createAsyncThunk("data/fetchProgramData", async (params?: ProgramFinderParams) => {
  const response = await API.get("/academicProgram/programs", {
    params, // Axios automatically builds query string
  });
  return response.data;
});
// fetchProgramFinderByID or fetchProgramDetailsById
export const fetchProgramFinderByID = createAsyncThunk("data/fetchProgramDataById", async (id: number) => {
  const response = await API.get(`/academicProgram/programDetailsById/${id}`);
  return response.data;
});
