// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {API} from "../../../apis/axiosinstance";

// export const fetchProgramHeighlightById = createAsyncThunk("program/fetchProgramHeighlightById", async (programId: number) => {
//   const response = await API.get("/academicProgram/programDepartmentHighlight", {
//     params: { programId },
//   });
//   return response.data;
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";

export const fetchProgramHeighlightById = createAsyncThunk(
  "program/fetchProgramHeighlightById",
  async (programId: number) => {
    const response = await API.get("/academicProgram/programDepartmentHighlight", {
      params: { programId },
    });
    return response.data;
  },
  {
    condition: (programId) => {
      // If programId is falsy, cancel API call
      if (!programId) {
        return false;
      }
      return true;
    },
  },
);
