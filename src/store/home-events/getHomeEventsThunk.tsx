import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";


export const fetchHomeEventsData = createAsyncThunk(
    "academicProgram/events",
    async (eventTypeId: number) => {
        const response = await API.get("/academicProgram/events", {
            params: { eventTypeId },
        });

        return response.data;
    }
);