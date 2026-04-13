import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";


export const fetchProgramTypeIntroByUrl = createAsyncThunk(
  "academicProgram/getByUrl",
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await API.get(
        `/academicProgram/getByUrl?url=${url}`
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || "API Error");
    }
  }
);