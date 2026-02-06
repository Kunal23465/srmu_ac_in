// top-level parent backgrounds (keys = top-level path without leading slash)

import aboutbreadcrumbbg from "../../assets/images/breadcrumb/about-breadcrum-bg.jpg";
import academicbreadcrumbbg from "../../assets/images/breadcrumb/institutes-info-breadcrum-bg.jpg";
import admissionbreadcrumbbg from "../../assets/images/breadcrumb/admission-breadcrum-bg.jpg";
import researchbreadcrumbbg from "../../assets/images/breadcrumb/Research.png";
import campuslifebreadcrumbbg from "../../assets/images/breadcrumb/campus.png";
import blogsbreadcrumbbg from "../../assets/images/breadcrumb/blogs-breadcrumb-bg.jpg";
import placementbreadcrumbbg from "../../assets/images/breadcrumb/placement-breadcrum-bg.jpg";
import agriBreadcrumbbg from "../../assets/images/breadcrumb/agri-banner-inner.jpg";
import onlineApplicationBanner from "../../assets/images/online-application-banner.jpeg";
import programFinderBanner from "../../assets/images/breadcrumb/Program Finder.png";
import noticeBanner from "../../assets/images/breadcrumb/Notice.png";
import shiftSchedule from "../../assets/images/breadcrumb/Shedule.png";
import greenInitive from "../../assets/images/breadcrumb/Green Initiative.png";
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
  "admission/program-finder": programFinderBanner,
  "admission/shift-schedule": shiftSchedule,
  placements: placementbreadcrumbbg,
  blogs: blogsbreadcrumbbg,
  "online-admission": onlineApplicationBanner,
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
