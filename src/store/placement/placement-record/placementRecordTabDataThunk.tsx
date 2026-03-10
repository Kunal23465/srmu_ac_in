import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../apis/axiosinstance";

export const fetchPlacementRecordTabData = createAsyncThunk(
    "/academicProgram/allPlacedStudents",
    async (yearOfPlacement?: number) => {

        const response = await API.get("/academicProgram/allPlacedStudents", {
            params: yearOfPlacement ? { yearOfPlacement } : {},
        });

        return response.data;
    }
);