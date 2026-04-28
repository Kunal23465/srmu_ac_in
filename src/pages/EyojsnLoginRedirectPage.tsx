import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const EYOJAN_LOGIN_URL = "https://eyojan.srmu.ac.in/";

const EyojsnLoginRedirectPage = () => {
  useEffect(() => {
    window.location.replace(EYOJAN_LOGIN_URL);
  }, []);

  return (
    <>
      <Helmet>
        <title>Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="min-h-screen" aria-label="Redirecting to login" />
    </>
  );
};

export default EyojsnLoginRedirectPage;
