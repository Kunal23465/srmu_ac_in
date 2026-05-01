import React, { useEffect } from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import {
  admissionEnquiryData,
  admissionEnquiryOverviewData,
} from "../../data/admission-enquiry/admission-enquiry-data";
import AdmissionCard from "./AdmissionCard";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { alumniRegistrationTopFooterData } from "../../data/placement/placementData";
import EnquiryForm from "./EnquiryForm";
import { RootState, store } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetResponseofEnquiry,
  submissionForEnquiry,
  takeActionForEnquiry,
} from "../../store/submission/enquiry-submission-slice";

const AdmissionEnquiry: React.FC = () => {
  const { isError, isLoading, responseOfenquiry, resetAction } =
    useSelector((state: RootState) => state.createEnquiryForEnquiry);

  const navigate = useNavigate();

const submitHandlerForAdmission = async (value: any) => {
  const { values, actions } = value;

  const payload = {
    name: values.firstName + " " + values.lastName,
    email: values.email,
    phone: values.phone,
    coreStateId: values.coreStateId,
    coreCityId: values.coreCityId,
    academicCareerId: values.academicCareerId,
    academicProgramId: values.academicProgramId,
    leadSourceId: 19,
  };

  try {
    // call API and wait for result
    await store.dispatch(submissionForEnquiry(payload)).unwrap();

    // ✅ CLEAR FORM (guaranteed)
    actions.resetForm();

    // optional: navigate
    setTimeout(() => {
      navigate("/admission-enquiry-redirect");
    }, 500);

  } catch (e) {
    // error toast already handled in slice (toast.promise)
    console.error(e);
  }
};

  useEffect(() => {
    // ✅ SUCCESS CASE
    if (!isLoading && !isError && responseOfenquiry) {
      // 🔥 RESET FORM FIRST
      if (resetAction && typeof resetAction.resetForm === "function") {
        resetAction.resetForm();
      }

      // 🔥 Navigate after reset
      setTimeout(() => {
        navigate("/admission-enquiry-redirect");
      }, 500);

      // 🔥 Clear Redux response
      store.dispatch(resetResponseofEnquiry());
    }
  }, [isLoading, responseOfenquiry, isError, resetAction, navigate]);

  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={admissionEnquiryOverviewData} />
      </div>

      <AdmissionCard admissionEnquiryData={admissionEnquiryData} />

      <div className={`${Classes["container"]}`}>
        <EnquiryForm onSubmitHandlerForAdmission={submitHandlerForAdmission} />
      </div>

      <CustomTopFooter data={alumniRegistrationTopFooterData} />
    </>
  );
};

export default AdmissionEnquiry;