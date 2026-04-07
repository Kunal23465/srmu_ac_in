import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../apis/axiosinstance";

export interface ProgramFinderParams {
  programTypeSlug?: string | undefined;
  programFlagSlug?: string | undefined;
  programDisciplineSlug?: string;
  name?: string;
}

export const fetchAllProgramFinder = createAsyncThunk("data/fetchProgramData", async (params?: ProgramFinderParams) => {
  const sanitizedParams = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined && value !== ""),
  );

  const response = Object.keys(sanitizedParams).length > 0
    ? await API.get("/academicProgram/programs", {
        params: sanitizedParams,
      })
    : await API.get("/academicProgram/programs");

  return response.data;
});
// fetchProgramFinderByID or fetchProgramDetailsById
export const fetchProgramFinderByID = createAsyncThunk("data/fetchProgramDataById", async (slug: string ) => {
  const response = await API.get(`/academicProgram/programDetailsById/${slug}`);
  return response.data;
});
