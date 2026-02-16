import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";


export const saveCareerForm = createAsyncThunk(
    "careerForm/saveCareerForm",
    async (values: any, { rejectWithValue }) => {
        try {
            const formData = new FormData();

            Object.keys(values).forEach((key) => {
                if (values[key] !== undefined && values[key] !== null) {
                    formData.append(key, values[key]);
                }
            });

            const response = await API.post(
                "academicProgram/saveCareerForm",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Career Form Submit Failed"
            );
        }
    }
);
