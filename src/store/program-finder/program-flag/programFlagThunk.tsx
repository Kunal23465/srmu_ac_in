import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";

export interface ProgramFlagName {
  name?: string;
}

export const fetchProgramFlags = createAsyncThunk("data/programFlags/all", async () => {
  const response = await API.get("/academicProgram/programFlags");
  return response.data;
});

export const fetchProgramByFlag = createAsyncThunk(
  "data/programFlags/byName",
  async (params: ProgramFlagName, { rejectWithValue }) => {
    if (!params?.name?.trim()) {
      return rejectWithValue("Program flag params are required.");
    }

    const response = await API.get("/academicProgram/programFlags", {
      params: {
        name: params.name.trim(),
      },
    });

    return response.data;
  },
  {
    condition: (params) => Boolean(params?.name?.trim()),
  },
);
