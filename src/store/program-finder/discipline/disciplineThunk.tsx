import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../apis/axiosinstance";

export const fetchProgramDiscipline = createAsyncThunk("data/fetchDiscipline", async (payload?: { programTypeId?: number | string; programFlagId?: number | string }) => {
  const response = await API.get("/academicProgram/programDisciplines", {
    params: payload?.programTypeId ? { programTypeId: payload.programTypeId } : { programFlagId: payload?.programFlagId },
  });

  return response.data;
});
