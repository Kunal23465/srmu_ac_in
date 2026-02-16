import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentEnquiryAPI } from "../../../apis/axiosinstance";

export const fetchAllActiveCareer = createAsyncThunk(
    "career/fetchAllActiveCareer",
    async (_, { rejectWithValue }) => {
        try {
            const response = await studentEnquiryAPI.get(
                "api/crm/public/core/getAllActiveCareer"
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Career API Failed");
        }
    }
);
