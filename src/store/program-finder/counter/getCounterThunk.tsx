import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";

export interface ProgramFinderParams {
  slug?: string | undefined;
}
export const getCounterById = createAsyncThunk("data/getCounter", async (params?: ProgramFinderParams) => {
  const response = await API.get(`/academicProgram/programSubFields`, {
    params, // Axios automatically builds query string
  });
  return response.data;
});
