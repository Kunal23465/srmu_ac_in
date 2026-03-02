import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apis/axiosinstance";

/* ===== API RESPONSE TYPES ===== */

export interface BannerResponse {
  bannerId: number;
  title: string;
  link: string | null;
  imagePath: string | null;
  status: boolean;
  createdAt: string;
  pdfPath: string | null;
  bannerType: string;
}

/* ===== THUNK ===== */

export const fetchBanner = createAsyncThunk<BannerResponse[]>("banner/fetchBanner", async () => {
  const response = await API.get("/academicProgram/banners");
  return response.data;
});
