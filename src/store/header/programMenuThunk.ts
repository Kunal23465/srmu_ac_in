import { createAsyncThunk } from "@reduxjs/toolkit";
import {API} from "../../apis/axiosinstance";

/* ===== API RESPONSE TYPES ===== */

export interface NavbarProgram {
    programId: number;
    programName: string;
}

export interface NavbarDiscipline {
    disciplineId: number;
    disciplineName: string;
    programs: NavbarProgram[];
}

export interface NavbarProgramType {
  programTypeId: number;
  programFlagId:number;
  programFlagName: string;
  disciplines: NavbarDiscipline[];
  programs: NavbarProgram[];
}

/* ===== THUNK ===== */

export const fetchProgramMenu = createAsyncThunk<
    NavbarProgramType[]
>(
    "programMenu/fetchProgramMenu",
    async () => {
        const response = await API.get(
            "/academicProgram/programsShowOnNavbar"
        );
        return response.data;
    }
);
