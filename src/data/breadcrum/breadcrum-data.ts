// top-level parent backgrounds (keys = top-level path without leading slash)

import aboutbreadcrumbbg from "../../assets/images/breadcrumb/about-breadcrum-bg.webp";
import academicbreadcrumbbg from "../../assets/images/breadcrumb/institutes-info-breadcrum-bg.webp";
import admissionbreadcrumbbg from "../../assets/images/breadcrumb/admission-breadcrum-bg.webp";
import researchbreadcrumbbg from "../../assets/images/breadcrumb/Research.webp";
import campuslifebreadcrumbbg from "../../assets/images/breadcrumb/campus.webp";
import blogsbreadcrumbbg from "../../assets/images/breadcrumb/blogs-breadcrumb-bg.webp";
import placementbreadcrumbbg from "../../assets/images/breadcrumb/placement-breadcrum-bg.webp";
import agriBreadcrumbbg from "../../assets/images/breadcrumb/agri-banner-inner.webp";
import onlineApplicationBanner from "../../assets/images/online-application-banner.webp";
import programFinderBanner from "../../assets/images/breadcrumb/Program Finder.webp";
import noticeBanner from "../../assets/images/breadcrumb/Notice.webp";
import shiftSchedule from "../../assets/images/breadcrumb/Shedule.webp";
import greenInitive from "../../assets/images/breadcrumb/Green Initiative.webp";
import pharmaBreadCrumbs from "../../assets/images/breadcrumb/phrama-breadcrumbs.webp";
// -----------------------
// FIX 1: Allow string index
// -----------------------
export const pageBackgrounds: Record<string, string> = {
  about: aboutbreadcrumbbg,
  academics: academicbreadcrumbbg,
  admission: admissionbreadcrumbbg,
  research: researchbreadcrumbbg,
  notice: noticeBanner,
  "campus-life/green-initiative": greenInitive,
  "campus-life": campuslifebreadcrumbbg,
  // "program-finder": programFinderBanner,
  "admissions/program-finder": programFinderBanner,
  "admission/program-finder": programFinderBanner,
  "admission/shift-schedule": shiftSchedule,
  placements: placementbreadcrumbbg,
  blogs: blogsbreadcrumbbg,
  "online-admission": onlineApplicationBanner,
  "innovation-meets-agriculture-at-the-srmu-kisan-mela-2025": agriBreadcrumbbg,
  "empowering-future-engineers:-l&t-edutech-ai-lab-opens-at-srmu": agriBreadcrumbbg,
  "expert-talk-session-on-smart-meter-implementation:-data-science-&-cybersecurity-in-ami": agriBreadcrumbbg,
  // "bpharm-bachelor-of-pharmacy": pharmaBreadCrumbs,
  // "d-pharm-diploma-in-pharmacy": pharmaBreadCrumbs,
  // "b-pharma-bachelor-of-pharmacy": pharmaBreadCrumbs,
  // "d-pharma-diploma-in-pharmacy": pharmaBreadCrumbs,
  // "m-pharm-in-pharmaceutical-chemistry": pharmaBreadCrumbs,
  // "m-pharm-in-pharmaceutics": pharmaBreadCrumbs,
  // "m-pharm-in-pharmacology": pharmaBreadCrumbs,
  // "m-pharm-in-pharmacognosy": pharmaBreadCrumbs,
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
  return segment.replace(/[_-]/g, " ").replace(/^\w/, (c) => c.toUpperCase());
};
