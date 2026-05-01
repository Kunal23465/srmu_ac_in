import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getMessageAfterColon } from "../../utils/getErrorMessage";
import axios from "axios";
import axiosRetry from "axios-retry";

interface initialStateType {
  isLoading: boolean;
  isError: string | null;
  resetAction: any;
  responseOfenquiry: any;
}

const initialState: initialStateType = {
  isLoading: true,
  isError: null,
  resetAction: "",
  responseOfenquiry: "",
};

const rmqApi = axios.create({
  // prod
  baseURL: "https://crmservices.srmu.ac.in:4040", // Resource Server base URL

  // test
  // baseURL: "http://10.8.20.38:4040",
  timeout: 10000,
});

axiosRetry(rmqApi, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export const submissionForEnquiry = createAsyncThunk<any, any>("enquiry-submision", async (value, { rejectWithValue }) => {
  const response = rmqApi.post("/rmq/v1/internalLeadCapture", value);
  toast.promise(response, {
    loading: "Loading",
    success: "Enquiry has been Successfully Sent!",
    error: (e: any) => {
           // Extract the error message dynamically from response
           const message = e.response?.data?.error;
           const errorMessage = getMessageAfterColon(message) || "Error occurred while submitting";
           return errorMessage;
         },
  });
  return response
    .then((res) => {
      return res.data;
    })
    .catch((e: any) => {
      console.error(e.message);
      return rejectWithValue(e.message);
    });
});

const submissionEnquirySlice = createSlice({
  name: "enquiry-submission",
  initialState,
  reducers: {
    resetResponseofEnquiry: (state) => {
      state.responseOfenquiry = "";
    },
    takeActionForEnquiry: (state, action) => {
      state.resetAction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submissionForEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submissionForEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.responseOfenquiry = action.payload;
      })
      .addCase(submissionForEnquiry.rejected, (state, action) => {
        state.isError = action.error.message || "error occured";
        state.isLoading = false;
      });
  },
});
export const { resetResponseofEnquiry, takeActionForEnquiry } = submissionEnquirySlice.actions;
export const submissionForEnquiryReducer = submissionEnquirySlice.reducer;

//createEnquiryForEnquiry
