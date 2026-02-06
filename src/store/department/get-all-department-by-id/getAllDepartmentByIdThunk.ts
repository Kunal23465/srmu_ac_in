import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../apis/axiosinstance";
export const fetchAllDepartmentsByInstitutionId = createAsyncThunk("insitute/department", async (instituteId: any) => {
  const response = await API.get("/academicProgram/getAllDepartmentsByInstitutionId", {
    params: { instituteId },
  });
  return response.data;
});
