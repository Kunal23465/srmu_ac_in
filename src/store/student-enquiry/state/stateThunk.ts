import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentEnquiryAPI } from "../../../apis/axiosinstance";

export const fetchAllActiveState = createAsyncThunk(
    "state/fetchAllActiveState",
    async (_, { rejectWithValue }) => {
        try {
            const response = await studentEnquiryAPI.get(
                "api/crm/public/core/getAllActiveState"
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "State API Failed");
        }
    }
);
