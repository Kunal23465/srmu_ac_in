import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../apis/axiosinstance";
export const fetchInsituteInfo = createAsyncThunk("program/fetchInsituteInfo", async () => {
  const response = await API.get("/academicProgram/institutes");
  return response.data;
});
