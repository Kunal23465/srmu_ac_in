import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../apis/axiosinstance";

export interface ProgramFinderParams {
  programTypeSlug?: string | undefined;
  programFlagSlug?: string | undefined;
  programDisciplineSlug?: string;
  name?: string;
}

export const fetchAllProgramFinder = createAsyncThunk("data/fetchProgramData", async (params?: ProgramFinderParams) => {
  const response = await API.get("/academicProgram/programs", {
    params, // Axios automatically builds query string
  });
  return response.data;
});
// fetchProgramFinderByID or fetchProgramDetailsById
export const fetchProgramFinderByID = createAsyncThunk("data/fetchProgramDataById", async (slug: string ) => {
  const response = await API.get(`/academicProgram/programDetailsById/${slug}`);
  return response.data;
});
