import React, { useEffect } from "react";
import ProgramFinderHome from "../../components/program-finder-home/ProgramFinderHome";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

import SeoHead from "../../components/seo/SeoHead";

import { fetchProgramTypeIntroByUrl } from "../../store/program-type-intro/ProgramTypeIntroThunk";

/* ------------------ component ------------------ */

const ProgramFinderPage: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();


  const { data: programByIntroData } = useSelector((state: RootState) => state.getProgramByIntro);
  

 
  /* ===========================
        Fetch Intro by URL
     =========================== */
useEffect(() => {
  const finalUrl = location.pathname.slice(1); // removes leading "/"
  dispatch(fetchProgramTypeIntroByUrl(finalUrl));
}, [location, dispatch]);


  
  return (
    <>
      <SeoHead
        title={programByIntroData?.metaTitle || ""}
        description={
          programByIntroData?.metaDescription || ""
        }
        pathname={location.pathname}
      />

      <ProgramFinderHome />
    </>
  );
};

export default ProgramFinderPage;
