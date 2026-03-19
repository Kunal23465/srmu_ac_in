import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../../apis/axiosinstance";

export const fetchProgramDiscipline = createAsyncThunk("data/fetchDiscipline", async (payload?: { programTypeSlug?: number | string; programFlagSlug?: number | string }) => {
  const response = await API.get("/academicProgram/programDisciplines", {
    params: payload?.programTypeSlug ? { programTypeSlug: payload.programTypeSlug } : { programFlagSlug: payload?.programFlagSlug },
  });

  return response.data;
});
