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
  async (slug: string) => {
    const response = await API.get("/academicProgram/programDepartmentHighlight", {
      params: { slug },
    });
    return response.data;
  },
  {
    condition: (programSlug) => {
      // If programSlug is falsy, cancel API call
      if (!programSlug) {
        return false;
      }
      return true;
    },
  },
);
