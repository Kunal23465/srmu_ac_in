import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../apis/axiosinstance";
export const getCounterById = createAsyncThunk("data/getCounter", async (id: number) => {
  const response = await API.get(`/academicProgram/programSubFields/${id}`);
  return response.data;
});
