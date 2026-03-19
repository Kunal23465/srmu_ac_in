import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../../apis/axiosinstance";

export interface ProgramFinderParams {
  slug?: string |undefined;
}

export const fetchWhySrmuSectionById = createAsyncThunk("data/fetchWhySrmuSectionData", async (params?: ProgramFinderParams) => {
  const response = await API.get("/academicProgram/commonSections", {
    params, // Axios automatically builds query string
  });
  return response.data;
});
