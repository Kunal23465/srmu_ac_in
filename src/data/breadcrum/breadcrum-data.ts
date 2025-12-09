// top-level parent backgrounds (keys = top-level path without leading slash)

import aboutbreadcrumbbg from "../../assets/images/breadcrumb/about-breadcrum-bg.jpg";
import academicbreadcrumbbg from "../../assets/images/breadcrumb/institutes-info-breadcrum-bg.jpg";
import admissionbreadcrumbbg from "../../assets/images/breadcrumb/admission-breadcrum-bg.jpg";
import researchbreadcrumbbg from "../../assets/images/breadcrumb/research-breadcrum-bg.jpg";
import campuslifebreadcrumbbg from "../../assets/images/breadcrumb/campus-life-breadcrum-bg.jpg";
import blogsbreadcrumbbg from "../../assets/images/breadcrumb/blogs-breadcrumb-bg.jpg";
import placementbreadcrumbbg from "../../assets/images/breadcrumb/placement-breadcrum-bg.jpg";
import agriBreadcrumbbg from "../../assets/images/breadcrumb/agri-banner-inner.jpg";

// -----------------------
// FIX 1: Allow string index
// -----------------------
export const pageBackgrounds: Record<string, string> = {
  about: aboutbreadcrumbbg,
  academics: academicbreadcrumbbg,
  admission: admissionbreadcrumbbg,
  research: researchbreadcrumbbg,
  "campus-life": campuslifebreadcrumbbg,
  placements: placementbreadcrumbbg,
  blogs: blogsbreadcrumbbg,

  "innovation-meets-agriculture-at-the-srmu-kisan-mela-2025": agriBreadcrumbbg,
  "empowering-future-engineers:-l&t-edutech-ai-lab-opens-at-srmu": agriBreadcrumbbg,
  "expert-talk-session-on-smart-meter-implementation:-data-science-&-cybersecurity-in-ami": agriBreadcrumbbg,
};

// -----------------------
// FIX 2: Allow dynamic child keys
// -----------------------
export const childBackgrounds: Record<string, string> = {
  "academics/academic-depository-nad-and-abc": campuslifebreadcrumbbg,
  // add more child overrides if needed
};

// -----------------------
export const formatSegment = (segment: string) => {
  return segment.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
};
