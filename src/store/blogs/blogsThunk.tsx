import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";

export const fetchBlogs = createAsyncThunk("data/fetchBlogs", async () => {
  const response = await API.get(`academicProgram/blogs`);
  return response.data;
});
