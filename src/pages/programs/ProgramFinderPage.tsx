import React, { useMemo } from "react";
import ProgramFinderHome from "../../components/program-finder-home/ProgramFinderHome";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { getProgramCategoryPathMatch } from "../../utils/programCategoryRoute";
import SeoHead from "../../components/seo/SeoHead";
import { SITE_NAME, stripHtml } from "../../utils/seo";

/* ------------------ component ------------------ */

const ProgramFinderPage: React.FC = () => {
  const location = useLocation();
  const { data } = useSelector((state: RootState) => state.programMenu);

  const finalFilterMatch = useMemo(() => {
    const [firstSegment = "", secondSegment = ""] = location.pathname.replace(/^\/+/, "").split("/");
    return getProgramCategoryPathMatch(data, firstSegment, secondSegment);
  }, [data, location.pathname]);

  const finalFilterData = finalFilterMatch?.matchedDiscipline;



  return (
    <>
      {finalFilterData && (
        <SeoHead
          title={finalFilterData.metaTitle || `${finalFilterData.disciplineName || "Programs"} | ${SITE_NAME}, Lucknow`}
          description={
            finalFilterData.metaDescription ||
            `Explore ${stripHtml(finalFilterData.disciplineName || "programs")} at ${SITE_NAME}, Lucknow. Browse courses, admissions information, eligibility, and fee details.`
          }
          pathname={location.pathname}
        />
      )}

      <ProgramFinderHome />
    </>
  );
};

export default ProgramFinderPage;
