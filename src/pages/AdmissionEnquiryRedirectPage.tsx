import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ADMISSION_ENQUIRY_URL = "https://admissionenquiry.srmu.ac.in/";

const AdmissionEnquiryRedirectPage = () => {
  useEffect(() => {
    window.location.replace(ADMISSION_ENQUIRY_URL);
  }, []);

  return (
    <>
      <Helmet>
        <title>Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="min-h-screen" aria-label="Redirecting to admission enquiry" />
    </>
  );
};

export default AdmissionEnquiryRedirectPage;
