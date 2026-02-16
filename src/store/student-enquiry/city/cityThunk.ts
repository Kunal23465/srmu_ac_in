import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentEnquiryAPI } from "../../../apis/axiosinstance";

export const fetchAllActiveCityByStateId = createAsyncThunk(
    "city/fetchAllActiveCityByStateId",
    async (stateId: number, { rejectWithValue }) => {
        try {
            const response = await studentEnquiryAPI.get(
                `api/crm/public/core/getAllActiveCityByStateId/${stateId}`
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "City API Failed");
        }
    }
);
