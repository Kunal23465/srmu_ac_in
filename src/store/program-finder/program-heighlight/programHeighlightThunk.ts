import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../../apis/axiosinstance";

export const fetchProgramHeighlightById = createAsyncThunk("program/fetchProgramHeighlightById", async (programId: number) => {
  const response = await API.get("/academicProgram/programDepartmentHighlight", {
    params: { programId },
  });
  return response.data;
});
