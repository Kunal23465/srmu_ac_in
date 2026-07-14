import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProgramFinderHome from "../../components/program-finder-home/ProgramFinderHome";
import SeoHead from "../../components/seo/SeoHead";
import { RootState } from "../../store";
import {
  getProgramFinderSeo,
  shouldUseProgramFinderMetaDescription,
  shouldUseProgramFinderMetaTitle,
} from "../../utils/seo";
import {
  resolveProgramCategoryParams,
  buildProgramCategoryPath,
} from "../../utils/programCategoryRoute";

const ProgramFinderPage: React.FC = () => {
  const location = useLocation();
  const { data: programByIntroData } = useSelector(
    (state: RootState) => state.getProgramByIntro,
  );

  const fallbackSeo = getProgramFinderSeo(location.pathname);
  const seoTitle = shouldUseProgramFinderMetaTitle(
    location.pathname,
    programByIntroData?.metaTitle,
  )
    ? programByIntroData?.metaTitle!.trim()
    : fallbackSeo.title;
  const seoDescription = shouldUseProgramFinderMetaDescription(
    location.pathname,
    programByIntroData?.metaDescription,
  )
    ? programByIntroData?.metaDescription!.trim()
    : fallbackSeo.description;

  const segments = location.pathname.split("/").filter(Boolean);
  let canonicalPath: string | undefined = undefined;
  if (segments.length === 2) {
    const { programFlagSlug, disciplineSlug } = resolveProgramCategoryParams(
      segments[0],
      segments[1]
    );
    if (programFlagSlug && disciplineSlug) {
      canonicalPath = buildProgramCategoryPath(programFlagSlug, disciplineSlug);
    }
  }

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        pathname={location.pathname}
        canonicalPath={canonicalPath}
      />
      <ProgramFinderHome />
    </>
  );
};

export default ProgramFinderPage;
