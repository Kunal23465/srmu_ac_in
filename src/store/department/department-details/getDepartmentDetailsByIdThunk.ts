import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";


export const fetchDepartmentById = createAsyncThunk(
  "institute/departmentById",
  async ({ departmentId, instituteId }: { departmentId: number | string; instituteId: number | string }) => {
    const response = await API.get(`/academicProgram/department/${departmentId}`, {
      params: { instituteId },
    });

    return response.data;
  },
);
