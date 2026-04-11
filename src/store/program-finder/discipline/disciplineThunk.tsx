import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";

export interface ProgramDisciplineParams {
  programTypeSlug?: number | string;
  programFlagSlug?: number | string;
}

export const fetchProgramDisciplines = createAsyncThunk("data/fetchDiscipline/all", async () => {
  const response = await API.get("/academicProgram/programDisciplines");
  return response.data;
});

export const fetchProgramDiscipline = createAsyncThunk(
  "data/fetchDiscipline/byParams",
  async (payload: ProgramDisciplineParams, { rejectWithValue }) => {
    const params = payload?.programTypeSlug
      ? { programTypeSlug: payload.programTypeSlug }
      : payload?.programFlagSlug
        ? { programFlagSlug: payload.programFlagSlug }
        : null;

    if (!params) {
      return rejectWithValue("Program discipline params are required.");
    }

    const response = await API.get("/academicProgram/programDisciplines", {
      params,
    });

    return response.data;
  },
  {
    condition: (payload) => Boolean(payload?.programTypeSlug || payload?.programFlagSlug),
  },
);
