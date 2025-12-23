import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../apis/axiosinstance";

export interface ProgramFlagName {
  name?: string;
}

export const fetchProgramByFlag = createAsyncThunk("data/fetchProgramData", async (params?: ProgramFlagName) => {
  const response = await API.get("/academicProgram/programFlags", {
    params,
  });
  return response.data;
});
