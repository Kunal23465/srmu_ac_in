import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentEnquiryAPI } from "../../../apis/axiosinstance";

export const fetchAllActiveProgram = createAsyncThunk(
    "program/fetchAllActiveProgram",
    async (careerId: number, { rejectWithValue }) => {
        try {
            const response = await studentEnquiryAPI.get(
                `api/crm/public/core/getAllActiveProgram/${careerId}`
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Program API Failed");
        }
    }
);
