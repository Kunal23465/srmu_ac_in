import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";
export const fetchPlacementDriveTabData = createAsyncThunk(
    "/academicProgram/placementDrives?",
    async () => {
        const response = await API.get("/academicProgram/placementDrives");

        return response.data.data; // ✅ FIX
    }
);