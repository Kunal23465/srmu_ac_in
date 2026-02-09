import React, { useMemo } from "react";
import ProgramFinderHome from "../../components/program-finder-home/ProgramFinderHome";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

/* ------------------ helpers ------------------ */

// convert text to slug (API + URL comparison)
const slugify = (text = "") =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[().]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

// parse URL path
const parseProgramFromPath = (pathname = "") => {
  const parts = pathname.replace(/^\/+/, "").split("/");

  return {
    programTypeSlug: parts[0] || "",
    programNameSlug: parts[1] || "",
  };
};

/* ------------------ component ------------------ */

const ProgramFinderPage: React.FC = () => {
  const location = useLocation();
  const { data } = useSelector((state: RootState) => state.programMenu);

  // get slugs from URL
  const { programTypeSlug, programNameSlug } = useMemo(
    () => parseProgramFromPath(location.pathname),
    [location.pathname]
  );

  // find program type using slug comparison
  const programTypeData = useMemo(() => {
    return data.find(
      (item) => slugify(item.programFlagName) === programTypeSlug
    );
  }, [data, programTypeSlug]);

  // find discipline using slug comparison
  const finalFilterData = useMemo(() => {
    return programTypeData?.disciplines?.find(
      (item) => slugify(item.disciplineName) === programNameSlug
    );
  }, [programTypeData, programNameSlug]);

  console.log("programTypeSlug:", programTypeSlug);
  console.log("programNameSlug:", programNameSlug);
  console.log("finalFilterData:", finalFilterData);

  return (
    <>
      {/* ✅ SEO Meta */}
      {finalFilterData && (
        <Helmet>
          {/* @ts-ignore */}
          <title>{finalFilterData.metaTitle}</title>
          {/* @ts-ignore */}
          <meta name="description" content={finalFilterData.metaDescription} />
        </Helmet>
      )}

      <ProgramFinderHome />
    </>
  );
};

export default ProgramFinderPage;
