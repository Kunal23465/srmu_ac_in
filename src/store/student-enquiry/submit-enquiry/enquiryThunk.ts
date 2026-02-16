import { createAsyncThunk } from "@reduxjs/toolkit";
import { submitEnquiryAPI } from "../../../apis/axiosinstance";


export const submitEnquiryForm = createAsyncThunk(
    "enquiry/submitEnquiryForm",
    async (formData: any, { rejectWithValue }) => {
        try {
            const response = await submitEnquiryAPI.post(
                "rmq/v1/thirdPartyleadCapture",
                formData
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Enquiry Submit Failed"
            );
        }
    }
);
