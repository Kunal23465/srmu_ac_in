import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const STUDENT_PORTAL_URL = "https://studentportal.srmu.ac.in/login";

const StudentPortalRedirectPage = () => {
  useEffect(() => {
    window.location.replace(STUDENT_PORTAL_URL);
  }, []);

  return (
    <>
      <Helmet>
        <title>Redirecting...</title>
         <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="min-h-screen" aria-label="Redirecting to student portal" />
    </>
  );
};

export default StudentPortalRedirectPage;
