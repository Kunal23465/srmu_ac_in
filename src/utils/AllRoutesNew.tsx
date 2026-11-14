import RootLayout from "../pages/RootLayout";
import { Navigate, matchRoutes, useParams, useRoutes } from "react-router-dom";
import { lazyPage } from "./lazyRoute";
import NewHomePage from "../pages/NewHomePage";
import { resolveProgramRouteSlug } from "./legacyProgramRoutes";
import BTechCseCyberSecurityNew from "../pages/BTechCseCyberSecurityNew";
import BTechCseDataScienceNew from "../pages/BTechCseDataScienceNew";
import BTechMechanicalEngineeringNew from "../pages/BTechMechanicalEngineeringNew";
import BTechEceSemiconductorDesignNew from "../pages/BTechEceSemiconductorDesignNew";

import InsiderPage from "../pages/InsiderPage";
import DepartmentOfComputerScienceAndEngineeringNewPage from "../pages/academics/institutes/institute-department/department-of-computer-science-and-engineering-new/DepartmentOfComputerScienceAndEngineeringNewPage";
import InstituteOfPharmacyNewPage from "../pages/academics/institutes/institute-department/institute-of-pharmacy-new/InstituteOfPharmacyNewPage";
import InstituteOfBiosciencesAndTechnologyNewPage from "../pages/academics/institutes/institute-department/institute-of-biosciences-and-technology-new/InstituteOfBiosciencesAndTechnologyNewPage";
import InstituteOfAgriculturalSciencesAndTechnologyNewPage from "../pages/academics/institutes/institute-department/institute-of-agricultural-sciences-and-technology-new/InstituteOfAgriculturalSciencesAndTechnologyNewPage";
import InstituteOfMediaStudiesNewPage from "../pages/academics/institutes/institute-department/institute-of-media-studies-new/InstituteOfMediaStudiesNewPage";
import InstituteOfNaturalSciencesAndHumanitiesNewPage from "../pages/academics/institutes/institute-department/institute-of-natural-sciences-and-humanities-new/InstituteOfNaturalSciencesAndHumanitiesNewPage";
import DepartmentOfElectricalAndElectronicsEngineeringNewPage from "../pages/academics/institutes/institute-department/department-of-electrical-and-electronics-engineering-new/DepartmentOfElectricalAndElectronicsEngineeringNewPage";
import FacultyOfChemicalSciencesNewPage from "../pages/academics/institutes/institute-department/faculty-of-chemical-sciences-new/FacultyOfChemicalSciencesNewPage";
import InstituteOfAlliedHealthSciencesNewPage from "../pages/academics/institutes/institute-department/institute-of-allied-health-sciences-new/InstituteOfAlliedHealthSciencesNewPage";
import InstituteOfLegalStudiesNewPage from "../pages/academics/institutes/institute-department/institute-of-legal-studies-new/InstituteOfLegalStudiesNewPage";
import DepartmentOfMechanicalEngineeringNewPage from "../pages/academics/institutes/institute-department/department-of-mechanical-engineering-new/DepartmentOfMechanicalEngineeringNewPage";
import DepartmentOfCivilEngineeringNewPage from "../pages/academics/institutes/institute-department/department-of-civil-engineering-new/DepartmentOfCivilEngineeringNewPage";
import FacultyOfCommerceAndEconomicsNewPage from "../pages/academics/institutes/institute-department/faculty-of-commerce-and-economics-new/FacultyOfCommerceAndEconomicsNewPage";
import FacultyOfManagementNewPage from "../pages/academics/institutes/institute-department/faculty-of-management-new/FacultyOfManagementNewPage";
import FacultyOfMathematicalAndStatisticalSciencesNewPage from "../pages/academics/institutes/institute-department/faculty-of-mathematical-and-statistical-sciences-new/FacultyOfMathematicalAndStatisticalSciencesNewPage";
import SRMUPolytechnicNewPage from "../pages/academics/institutes/institute-department/srmu-polytechnic-new/SRMUPolytechnicNewPage";
import InstituteOfPharmaceuticalSciencesNewPage from "../pages/academics/institutes/institute-department/institute-of-pharmaceutical-sciences-new/InstituteOfPharmaceuticalSciencesNewPage";
import InstituteOfEducationAndResearchNewPage from "../pages/academics/institutes/institute-department/institute-of-education-and-research-new/InstituteOfEducationAndResearchNewPage";

const HomePage = lazyPage(() => import("../pages/Home/HomePage"));
const PageNotFound = lazyPage(() => import("../pages/PageNotFound"));
const LegacyEventDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.LegacyEventDetailsPage })));
const LegacyCommitteeDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.LegacyCommitteeDetailsPage })));
const LegacyCommitteeRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/committee/${slug || ""}`} replace />;
};
const RoutedEventDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.RoutedEventDetailsPage })));
const RoutedConvocationDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.RoutedConvocationDetailsPage })));
const CareerFormPage = lazyPage(() => import("../pages/Home/CareerFormPage"));
const TermsConditionPage = lazyPage(() => import("../pages/Home/TermsConditionPage"));
const NewsLetterPage = lazyPage(() => import("../pages/Home/NewsLetterPage"));
const NoticePage = lazyPage(() => import("../pages/notice/NoticePage"));
const ShiftSchedulePage = lazyPage(() => import("../pages/admissions/shift-schedule/ShiftSchedulePage"));
const AboutPage = lazyPage(() => import("../pages/about/AboutPage"));
const AboutPageNew = lazyPage(() => import("../pages/about-page-new/AboutPageNew"));
const NewsEventDetails = lazyPage(() => import("../components/home/NewsEventDetails"));
export const ProgramDetailsPage = lazyPage(() => import("../pages/programs/details-page/ProgramDetailsPage"));
export const DirectProgramDetailsPage = lazyPage(() => import("../pages/programs/details-page/DirectProgramDetailsPage"));

export function getProgramDetailsSlugFromPath(normalizedPathname: string): string | null {
  const routeMatch = normalizedPathname.match(/^\/program\/([^/]+)$/);
  if (routeMatch?.[1]) {
    return resolveProgramRouteSlug(routeMatch[1]);
  }

  const matches = matchRoutes(routes, normalizedPathname);
  if (!matches || matches.length === 0) {
    return null;
  }

  const leafMatch = matches[matches.length - 1];
  if (
    leafMatch.route.element?.type === DirectProgramDetailsPage ||
    leafMatch.route.element?.type === ProgramDetailsPage
  ) {
    const rawSlug = normalizedPathname.replace(/^\/+/, "").replace(/\/+$/, "");
    return resolveProgramRouteSlug(rawSlug);
  }

  return null;
}
const ProgramTypePage = lazyPage(() => import("../pages/programs/ProgramTypePage/ProgramTypePage"));
const ProgramTypeItemPage = lazyPage(() => import("../pages/ProgramTypeItemPage"));
const LeadershipAndGovernancePage = lazyPage(() => import("../pages/about/Leadership-and-Governance/LeadershipAndGovernancePage"));
const CommitteeAndCellsPage = lazyPage(() => import("../pages/about/Committee-and-Cells/CommitteeAndCellsPage"));
const RecognitionApprovalsPage = lazyPage(() => import("../pages/about/recognition-approval/RecognitionApprovalsPage"));
const AwardOverviewPage = lazyPage(() => import("../pages/about/award-overview/AwardOverviewPage"));
const IqacPage = lazyPage(() => import("../pages/about/iqac-overview/IqacPage"));
const NAACPage = lazyPage(() => import("../pages/about/NAAC/NAACPage"));
const NIRFPage = lazyPage(() => import("../pages/about/NIRF/NIRFPage"));
const OragnisationStructurePage = lazyPage(() => import("../pages/about/organisation-structure-plan/OrganisationStructurePlan"));
const InstitutePage = lazyPage(() => import("../pages/academics/institutes/InstitutePage"));
const InstituteDepartmentPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteDepartmentPage"));
const PoliciesReportsPage = lazyPage(() => import("../pages/academics/Policies-Reports/PoliciesReportsPage"));
const AcademicCalendarsPage = lazyPage(() => import("../pages/academics/academic-calendars/AcademicCalendarsPage"));
const TeachingLearningProcessPage = lazyPage(() => import("../pages/academics/teaching-learning-process/TeachingLearningProcessPage"));
const AcademicBankOfCreditPage = lazyPage(() => import("../pages/academics/academic-bank-credit/AcademicBankOfCreditPage"));
const EContentCellPage = lazyPage(() => import("../pages/academics/e-content-cell/EContentCellPage"));
const SwayamNptelPage = lazyPage(() => import("../pages/academics/swayam-nptel/SwayamNptelPage"));
const IirsIsroPage = lazyPage(() => import("../pages/academics/iirs-isro/IirsIsroPage"));
const CurriculumDesignPage = lazyPage(() => import("../pages/academics/curriculum-design/CurriculumDesignPage"));
const DepartmentDetailPage = lazyPage(() => import("../components/academics/institutes/institute-department/Institute-department/DepartmentDetailPage"));
const OverviewPage = lazyPage(() => import("../pages/admissions/overview/OverviewPage"));
const HowToApplyPage = lazyPage(() => import("../pages/admissions/how-to-apply/HowToApplyPage"));
const FeeStructurePage = lazyPage(() => import("../pages/admissions/fee-structure/FeeStructurePage"));
const DocumentChecklistPage = lazyPage(() => import("../pages/admissions/document-checklist/DocumentChecklistPage"));
const AdmissionFaqPage = lazyPage(() => import("../pages/admissions/admission-faq/AdmissionFaqPage"));
const AdmissionPolicyPage = lazyPage(() => import("../pages/admissions/admission-policy/AdmissionPolicyPage"));
const AddmissionProgramFinderPage = lazyPage(() => import("../pages/admissions/program-finder/AddmissionProgramFinderPage"));
const ScholarshipPage = lazyPage(() => import("../pages/admissions/scholarship/ScholarshipPage"));
const CampusLifePage = lazyPage(() => import("../pages/campus-life/CampusLifePage"));
const TransportationPage = lazyPage(() => import("../pages/campus-life/facilities/transportation/TransportationPage"));
const HostelPage = lazyPage(() => import("../pages/campus-life/facilities/HostelPage"));
const ConvocationPage = lazyPage(() => import("../pages/campus-life/convocation/ConvocationPage"));
const ConvocationNewPage = lazyPage(() => import("../pages/campus-life/convocation/ConvocationNewPage"));
const Convocation2026Page = lazyPage(() => import("../pages/campus-life/convocation/Convocation2026Page"));
const CentralLibraryPage = lazyPage(() => import("../pages/campus-life/central-library/CentralLibraryPage"));
const GreenInitiativePage = lazyPage(() => import("../pages/campus-life/green-initiative/GreenInitiativePage"));
const GreenInitiativeNewPage = lazyPage(() => import("../pages/green-initative-new/GreenInitiativeNewPage"));
const FacilitiesNewPage = lazyPage(() => import("../pages/facilities-new/FacilitiesNewPage"));
const WomenEmpowermentPage = lazyPage(() => import("../pages/campus-life/women-empowerment/WomenEmpowermentPage"));
const WomenEmpowermentNewPage = lazyPage(() => import("../pages/campus-life/women-empowerment/WomenEmpowermentNewPage"));
const StudentSenatePage = lazyPage(() => import("../pages/campus-life/student-senate/StudentSenatePage"));
const StudentSenateNewPage = lazyPage(() => import("../pages/campus-life/student-senate/StudentSenateNewPage"));
const StudentCornerPage = lazyPage(() => import("../pages/campus-life/student-corner/StudentCornerPage"));
const StudentCornerNewPage = lazyPage(() => import("../pages/campus-life/student-corner/StudentCornerNewPage"));
const OutreachActivationsPage = lazyPage(() => import("../pages/campus-life/outreach-activations/OutreachActivationsPage"));
const OutreachActivationsNewPage = lazyPage(() => import("../pages/campus-life/outreach-activations/OutreachActivationsNewPage"));
const ClubsPage = lazyPage(() => import("../pages/campus-life/clubs/ClubsPage"));
const ClubsNewPage = lazyPage(() => import("../pages/campus-life/clubs/ClubsNewPage"));
const GrievanceRedressalSystemPage = lazyPage(() => import("../pages/campus-life/grievance-redressal-system/GrievanceRedressalSystemPage"));
const GrievanceRedressalSystemNewPage = lazyPage(() => import("../pages/campus-life/grievance-redressal-system/GrievanceRedressalSystemNewPage"));
const EventPage = lazyPage(() => import("../pages/campus-life/events/EventPage"));
const NewEventPage = lazyPage(() => import("../pages/event-new/new"));
const NewProgramFinderPage = lazyPage(() => import("../pages/program-finder-new/new"));
const ResearchOverviewPage = lazyPage(() => import("../pages/Research/Overview/ResearchOverviewPage"));
const ProcessAndInitiativePage = lazyPage(() => import("../pages/Research/Process-and-Initiative/ProcessAndInitiativePage"));
const PhdNotificationSessionPage = lazyPage(() => import("../pages/Research/Phd-notification-session/PhdNotificationSessionPage"));
const PhdOfflineApplicationPage = lazyPage(() => import("../pages/Research/phd-offline-application/PhdOfflineApplicationPage"));
const InnovationPage = lazyPage(() => import("../pages/Research/Innovation/InnovationPage"));
const ConsultancyPage = lazyPage(() => import("../pages/Research/Consultancy/ConsultancyPage"));
const PublicationPage = lazyPage(() => import("../pages/Research/Publication/PublicationPage"));
const ConferenceDetailPage = lazyPage(() => import("../components/research/publication/conference/ConferenceDetailPage"));
const PlacementOverviewPage = lazyPage(() => import("../pages/placement/placement-overview/PlacementOverviewPage"));
const PlacementCellPage = lazyPage(() => import("../pages/placement/placement-cell/PlacementCellPage"));
const StudentTestimonialPage = lazyPage(() => import("../pages/placement/student-testimonial/StudentTestimonialPage"));
const AlumniRegistrationPage = lazyPage(() => import("../pages/placement/AlumniRegistrationPage"));
const AlumniFeedbackPage = lazyPage(() => import("../pages/placement/AlumniFeedbackPage"));
const AlumniTestimonialsPage = lazyPage(() => import("../pages/placement/AlumniTestimonialsPage"));
const PlacementPoliciesPage = lazyPage(() => import("../pages/placement/placement-policies/PlacementPoliciesPage"));
const AdmissionEnquiryPage = lazyPage(() => import("../pages/admission-enquiry/AdmissionEnquiryPage"));
const ContactUsPage = lazyPage(() => import("../pages/contact-us/ContactUsPage"));
const MandatoryDisclouserPage = lazyPage(() => import("../pages/mandatory-disclouser/MandatoryDisclouserPage"));
const CommittePage = lazyPage(() => import("../pages/about/committee/CommittePage"));
const BlogPage = lazyPage(() => import("../pages/blog/BlogPage"));
const BlogsPage = lazyPage(() => import("../pages/blog/BlogsPage"));
const BlogDetailsPage = lazyPage(() => import("../pages/blog/BlogDetailsPage"));
const RtiPage = lazyPage(() => import("../pages/rti/RtiPage"));
const OnlineAdmissionPage = lazyPage(() => import("../pages/Home/OnlineAdmissionPage"));
const PrivacyPolicyPage = lazyPage(() => import("../pages/privacy-policy/PrivacyPolicyPage"));
const DisclaimerPage = lazyPage(() => import("../pages/disclaimer/DisclaimerPage"));
const TermsAndConditionPage = lazyPage(() => import("../pages/terms-condition/TermsAndConditionPage"));
const EyojsnLoginRedirectPage = lazyPage(() => import("../pages/EyojsnLoginRedirectPage"));
// const StudentPortalRedirectPage = lazyPage(() => import("../pages/StudentPortalRedirectPage"));
// const AdmissionEnquiryRedirectPage = lazyPage(() => import("../pages/AdmissionEnquiryRedirectPage"));
const InstituteofMediaStudiesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteofMediaStudiesPage"));
const InstituteofPharmaceuticalSciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteofPharmaceuticalSciencesPage"));
const InstituteofAgriculturalSciencesandTechnologyPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteofAgriculturalSciencesandTechnologyPage"));
const InstituteofLegalStudiesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteofLegalStudiesPage"));
const InstituteofPharmacyPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteofPharmacyPage"));
const InstituteofEducationandResearchPage = lazyPage(() => import("../pages/academics/institutes/institute-department/InstituteofEducationandResearchPage"));
const SRMUPolytechnicPage = lazyPage(() => import("../pages/academics/institutes/institute-department/SRMUPolytechnicPage"));
const FacultyOfCivilEngineeringPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfCivilEngineeringPage"));
const DepartmentOfElectricalAndElectronicsEngineeringPage = lazyPage(() => import("../pages/academics/institutes/institute-department/DepartmentOfElectricalAndElectronicsEngineeringPage"));
const FacultyOfMechanicalEngineeringPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfMechanicalEngineeringPage"));
const FacultyOfAlliedHealthSciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfAlliedHealthSciencesPage"));
const FacultyOfBiosciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfBiosciencesPage"));
const FacultyOfBiotechnologyPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfBiotechnologyPage"));
const FacultyOfHumanitiesAndSocialSciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfHumanitiesAndSocialSciencesPage"));
const FacultyOfMathematicalAndStatisticalSciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfMathematicalAndStatisticalSciencesPage"));
const FacultyOfPhysicalSciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfPhysicalSciencesPage"));
const DepartmentOfComputerScienceAndEngineeringPage = lazyPage(() => import("../pages/academics/institutes/institute-department/DepartmentOfComputerScienceAndEngineeringPage"));
const DepartmentOfComputerScienceAndInformationSystemsPage = lazyPage(() => import("../pages/academics/institutes/institute-department/DepartmentOfComputerScienceAndInformationSystemsPage"));
// const DepartmentOfComputerScienceAndInformationSystemsNewPage = lazyPage(() => import("../pages/academics/institutes/institute-department/department-of-computer-science-and-engineering-new/DepartmentOfComputerScienceAndEngineeringNewPage"));
const FacultyOfCommerceAndEconomicsPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfCommerceAndEconomicsPage"));
const FacultyOfManagementPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfManagementPage"));
const FacultyOfChemicalSciencesPage = lazyPage(() => import("../pages/academics/institutes/institute-department/FacultyOfChemicalSciencesPage"));
export function AllRoutesNew() {
  const element = useRoutes(routes);
  return element;
}
export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        index: true,
        element: <HomePage />,
      },


      {
        path: "insider",
        element: <InsiderPage />,
      },

      // BTechCseCyberSecurityNew
      {
        path: "career/career-form",
        element: <CareerFormPage />,
      },
      {
        path: "terms-condition",
        element: <TermsConditionPage />,
      },
      {
        path: "new-home",
        element: <NewHomePage />,
      },
      {
        path: "news-letter",
        element: <NewsLetterPage />,
      },
      {
        path: "newsletter",
        element: <Navigate to="/news-letter" replace />,
      },
      {
        path: "newsletters",
        element: <Navigate to="/news-letter" replace />,
      },
      {
        path: "notice",
        element: <NoticePage />,
      },
      {
        path: "shift-schedule",
        element: <ShiftSchedulePage />,
      },

      {
        path: "/about-us",
        element: <AboutPage />,
      },
     
      {
        path: "/news/:programName",
        element: <NewsEventDetails />,
      },
      {
        path: "/eyojan-login-redirect",
        element: <EyojsnLoginRedirectPage />,
      },
      // {
      //   path: "/student-portal-redirect",
      //   element: <StudentPortalRedirectPage />,
      // },
      // {
      //   path: "/admission-enquiry-redirect",
      //   element: <AdmissionEnquiryRedirectPage />,
      // },
      // Direct program page routes — these must appear before the /:programType
      // wildcard so React Router matches them with ProgramDetailsPage rather
      // than ProgramTypePage (which only handles program-flag/discipline slugs).
      { path: "/b-tech-cse-cyber-security", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-cse-data-science-artificial-intelligence", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-me-ev-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/bca-cyber-security", element: <DirectProgramDetailsPage /> },
      { path: "/bca-data-science-artificial-intelligence", element: <DirectProgramDetailsPage /> },
      { path: "/bba-business-analytics", element: <DirectProgramDetailsPage /> },
      { path: "/b-com-hons-with-l-t", element: <DirectProgramDetailsPage /> },
      { path: "/mba-business-analytics", element: <DirectProgramDetailsPage /> },
      { path: "/mba-ai-augmented-fintech", element: <DirectProgramDetailsPage /> },
      { path: "/bba-ai-augmented-fintech", element: <DirectProgramDetailsPage /> },
      { path: "/btech-ece-semiconductor-design", element: <DirectProgramDetailsPage /> },
      { path: "/phd", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-civil-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-mechanical-engineering-production", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-mechanical-engineering-automobile", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-electrical-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-computer-science-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-biotechnology-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-computer-science-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-civil-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-me-ev-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-ee-ev-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-ece-ev-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-agriculture", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-cse-artificial-intelligence-machine-learning", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-ee-ev-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-information-technology", element: <DirectProgramDetailsPage /> },
      { path: "/bca-bachelor-of-computer-applications", element: <DirectProgramDetailsPage /> },
      { path: "/bca-artificial-intelligence-machine-learning", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-biotechnology", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-food-technology", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-nutrition-dietetics", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-microbiology", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-biotechnology", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-computer-science-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-cse-mba", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-m-tech-cse", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-m-tech-ece", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-ece-mba", element: <DirectProgramDetailsPage /> },
      { path: "/b-tech-m-tech-me", element: <DirectProgramDetailsPage /> },
      { path: "/b-a-hons-economics", element: <DirectProgramDetailsPage /> },
      { path: "/bba-bachelor-of-business-administration", element: <DirectProgramDetailsPage /> },
      { path: "/b-com", element: <DirectProgramDetailsPage /> },
      { path: "/b-a-journalism-mass-communication", element: <DirectProgramDetailsPage /> },
      { path: "/ba-llb-hons", element: <DirectProgramDetailsPage /> },
      { path: "/bba-llb-hons", element: <DirectProgramDetailsPage /> },
      { path: "/bpharm-bachelor-of-pharmacy", element: <DirectProgramDetailsPage /> },
      { path: "/b-pharma-bachelor-of-pharmacy", element: <Navigate to="/program/bpharm-bachelor-of-pharmacy" replace /> },
      { path: "/d-pharm-diploma-in-pharmacy", element: <DirectProgramDetailsPage /> },
      { path: "/d-pharma-diploma-in-pharmacy", element: <Navigate to="/program/d-pharm-diploma-in-pharmacy" replace /> },
      { path: "/bachelor-of-anaesthesia-and-operation-theatre-technology-b-aott", element: <DirectProgramDetailsPage /> },
      { path: "/bachelor-of-medical-laboratory-sciences-bmls", element: <DirectProgramDetailsPage /> },
      { path: "/bachelor-of-medical-radiology-imaging-technology-bmrit", element: <DirectProgramDetailsPage /> },
      { path: "/bachelor-of-optometry", element: <DirectProgramDetailsPage /> },
      { path: "/bachelor-in-physiotherapy", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-civil-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-mechanical-engineering-production-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-mechanical-engineering-automobile-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-electrical-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/diploma-computer-science-engineering-lateral-entry", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-physics", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-chemistry", element: <DirectProgramDetailsPage /> },
      { path: "/b-sc-hons-mathematics", element: <DirectProgramDetailsPage /> },
      { path: "/b-a-hons-english", element: <DirectProgramDetailsPage /> },
      { path: "/b-a-hons-political-science", element: <DirectProgramDetailsPage /> },
      { path: "/mba-master-of-business-administration", element: <DirectProgramDetailsPage /> },
      { path: "/m-b-a-healthcare-hospital-management", element: <DirectProgramDetailsPage /> },
      { path: "/mba-finance-accounting", element: <DirectProgramDetailsPage /> },
      { path: "/msc-horticulture-fruit-science", element: <DirectProgramDetailsPage /> },

      { path: "/msc-horticulture-veg-sc", element: <DirectProgramDetailsPage /> },
      { path: "/mba-abm", element: <DirectProgramDetailsPage /> },
      { path: "/msc-agronomy", element: <DirectProgramDetailsPage /> },
      { path: "/msc-soil-science-agricultural-chemistry", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-data-science", element: <DirectProgramDetailsPage /> },
      { path: "/mca", element: <DirectProgramDetailsPage /> },
      { path: "/m-sc-biotechnology", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-biotechnology", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-artificial-intelligence-machine-learning", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-computer-science-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-computer-science-engineering-part-time", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-environmental-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-structural-engineering", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-environmental-engineering-part-time", element: <DirectProgramDetailsPage /> },
      { path: "/m-tech-structural-engineering-part-time", element: <DirectProgramDetailsPage /> },
      { path: "/m-com", element: <DirectProgramDetailsPage /> },
      { path: "/m-com1", element: <Navigate to="/program/m-com" replace /> },
      { path: "/m-sc-economics", element: <DirectProgramDetailsPage /> },
      { path: "/m-a-journalism-mass-communication", element: <DirectProgramDetailsPage /> },
      { path: "/llb", element: <DirectProgramDetailsPage /> },
      { path: "/ll-m-criminal-security-law", element: <DirectProgramDetailsPage /> },
      { path: "/ll-m-corporate-commercial-law", element: <DirectProgramDetailsPage /> },
      { path: "/ll-m-constitutional-administrative-law", element: <DirectProgramDetailsPage /> },
      { path: "/ll-m-international-comparative-law", element: <DirectProgramDetailsPage /> },
      { path: "/m-pharm-in-pharmaceutics", element: <DirectProgramDetailsPage /> },
      { path: "/m-pharm-in-pharmacology", element: <DirectProgramDetailsPage /> },
      { path: "/m-pharm-in-pharmacognosy", element: <DirectProgramDetailsPage /> },
      { path: "/m-pharm-in-pharmaceutical-chemistry", element: <DirectProgramDetailsPage /> },
      { path: "/msw", element: <DirectProgramDetailsPage /> },
      { path: "/m-sc-physics", element: <DirectProgramDetailsPage /> },
      { path: "/m-sc-chemistry", element: <DirectProgramDetailsPage /> },
      {
        path: "/:programType",
        element: <ProgramTypePage />,
      },
      // {
      //   path: "/:programDecipline/:programFlag",
      //   element: <AddmissionProgramFinderPage />,
      // },

      {
        path: "/:programType/:item",
        element: <ProgramTypeItemPage />,
      },

      {
        path: "/program/b-pharma-bachelor-of-pharmacy",
        element: <Navigate to="/program/bpharm-bachelor-of-pharmacy" replace />,
      },
      {
        path: "/program/d-pharma-diploma-in-pharmacy",
        element: <Navigate to="/program/d-pharm-diploma-in-pharmacy" replace />,
      },
      {
        path: "/program/m-com1",
        element: <Navigate to="/program/m-com" replace />,
      },
      {
        path: "/program/:programName",
        element: <ProgramDetailsPage />,
      },
      {
        path: "/leadership-and-governance",
        element: <LeadershipAndGovernancePage />,
      },
      {
        path: "/committees-and-cells",
        element: <CommitteeAndCellsPage />,

        // children: committeeCards.map((card) => ({
        //   path: card.routeKey,
        //   element: <CustomCommitteeDetailsPage committee={card} />,
        // })),
      },
      {
        path: "/committee",
        element: <CommittePage />,
      },
      {
        path: "/committee/:slug",
        element: <LegacyCommitteeDetailsPage />,
      },
      {
        path: "/committe",
        element: <Navigate to="/committee" replace />,
      },
      {
        path: "/committe/:slug",
        element: <LegacyCommitteeRedirect />,
      },
      {
        path: "/recognition-approvals",
        element: <RecognitionApprovalsPage />,
      },
      {
        path: "/award-overview",
        element: <AwardOverviewPage />,
      },
      {
        path: "/iqac-overview",
        element: <IqacPage />,
      },
      {
        path: "/naac",
        element: <NAACPage />,
      },
      {
        path: "/nirf",
        element: <NIRFPage />,
      },
      {
        path: "/organization-structure-plan",
        element: <OragnisationStructurePage />,
      },
      {
        path: "institutes-info",
        element: <InstitutePage />,

        children: [
          // {
          //   path: ":departmentName",
          //   element: <InstituteDepartmentPage />,
          // },
          // {
          //   path: ":departmentName/:detailName",
          //   element: <DepartmentDetailPage />,
          // },
          {
            path: "department/:detailName",
            element: <DepartmentDetailPage />,
          },
        ],
      },
      {
        path: "academic-calendars",
        element: <AcademicCalendarsPage />,
      },
      {
        path: "policies-reports",
        element: <PoliciesReportsPage />,
      },

      {
        path: "teaching-learning-process",
        element: <TeachingLearningProcessPage />,
      },
      {
        path: "campus-life/academic-depository-nad-and-abc",
        element: <AcademicBankOfCreditPage />,
      },
      {
        path: "e-content-development-cell",
        element: <EContentCellPage />,
      },
      {
        path: "campus-life/e-content-cell",
        element: <EContentCellPage />,
      },

      {
        path: "swayam-nptel-local-chapter",
        element: <SwayamNptelPage />,
      },
      {
        path: "iirs-isro",
        element: <IirsIsroPage />,
      },
      {
        path: "curriculum-design",
        element: <CurriculumDesignPage />,
      },
      {
        path: "admission-overview",
        element: <OverviewPage />,
        children: [],
      },

      {
        path: "how-to-apply",
        element: <HowToApplyPage />,
      },
      {
        path: "program-finder",
        element: <AddmissionProgramFinderPage />,
      },

      {
        path: "fee-structure",
        element: <FeeStructurePage />,
      },
      {
        path: "scholarship-scheme",
        element: <ScholarshipPage />,
      },
      {
        path: "shift-schedule",
        element: <ShiftSchedulePage />,
      },
      {
        path: "document-checklist",
        element: <DocumentChecklistPage />,
      },
      {
        path: "admission-faqs",
        element: <AdmissionFaqPage />,
      },
      {
        path: "admission-policies",
        element: <AdmissionPolicyPage />,
      },
      {
        path: "/facilities",
        element: <CampusLifePage />,
        children: [],
      },
      {
        path: "central-library",
        element: <CentralLibraryPage />,
      },
      {
        path: "events",
        element: <EventPage />,

        children: [
          {
            path: ":slug",
            element: <RoutedEventDetailsPage />,
          },
        ],
      },
      {
        path: "event/:slug",
        element: <LegacyEventDetailsPage />,
      },
      {
        path: "clubs",
        element: <ClubsPage />,
      },
      {
        path: "clubs-new",
        element: <ClubsNewPage />,
      },
      {
        path: "convocation",
        element: <ConvocationPage />,

        children: [
          {
            path: ":slug",
            element: <RoutedConvocationDetailsPage />,
          },
        ],
      },
      {
        path: "convocation-new",
        element: <ConvocationNewPage />,
      },
      {
        path: "convocation2026",
        element: <Convocation2026Page />,
      },
      {
        path: "transportation",
        element: <TransportationPage />,
      },
      {
        path: "hostel",
        element: <HostelPage />,
      },

      {
        path: "green-initiative",
        element: <GreenInitiativePage />,
      },
    
      {
        path: "women-empowerment",
        element: <WomenEmpowermentPage />,
      },
      {
        path: "women-empowerment-new",
        element: <WomenEmpowermentNewPage />,
      },
      {
        path: "student-senate",
        element: <StudentSenatePage />,
      },
      {
        path: "student-senate-new",
        element: <StudentSenateNewPage />,
      },
      {
        path: "student-corner",
        element: <StudentCornerPage />,
      },
      {
        path: "student-corner-new",
        element: <StudentCornerNewPage />,
      },
      {
        path: "outreach-activations",
        element: <OutreachActivationsPage />,
      },
      {
        path: "outreach-activations-new",
        element: <OutreachActivationsNewPage />,
      },

      {
        path: "grievance-redressal-system",
        element: <Navigate to="/campus-life/grievance-redressal-system" replace />,
      },
      {
        path: "campus-life/grievance-redressal-system",
        element: <GrievanceRedressalSystemPage />,
      },
      {
        path: "grievance-redressal-system-new",
        element: <GrievanceRedressalSystemNewPage />,
      },
      {
        path: "/placement-overview",
        element: <Navigate to="/placements" replace />,
      },
      {
        path: "placements",
        element: <PlacementOverviewPage />,
      },
      {
        path: "placement-cell",
        element: <PlacementCellPage />,
      },
      {
        path: "all-testimonial",
        element: <StudentTestimonialPage />,
      },
      {
        path: "placement-policies",
        element: <PlacementPoliciesPage />,
      },
      {
        path: "alumni-registration",
        element: <AlumniRegistrationPage />,
      },
      {
        path: "notable-alumni",
        element: <AlumniTestimonialsPage />,
      },
      {
        path: "alumni-feedback",
        element: <AlumniFeedbackPage />,
      },
      {
        path: "alumini-feedback",
        element: <Navigate to="/alumni-feedback" replace />,
      },
      {
        path: "alumini-feeback",
        element: <Navigate to="/alumni-feedback" replace />,
      },
      {
        path: "alumni-feeback",
        element: <Navigate to="/alumni-feedback" replace />,
      },
      {
        path: "/research-overview",
        element: <ResearchOverviewPage />,

        children: [
          {
            path: "conference/:name",
            element: <ConferenceDetailPage />,
          },
        ],
      },
      {
        path: "process-and-initiatives",
        element: <ProcessAndInitiativePage />,
      },
      {
        path: "ph-d-notification-session-2026-27",
        element: <PhdNotificationSessionPage />,
      },
      {
        path: "phd-offline-application",
        element: <PhdOfflineApplicationPage />,
      },
      {
        path: "ph-d-application-offline-mode",
        element: <PhdOfflineApplicationPage />,
      },
      {
        path: "research/phd-offline-application",
        element: <PhdOfflineApplicationPage />,
      },
      {
        path: "innovation",
        element: <InnovationPage />,
      },
      {
        path: "innovations",
        element: <InnovationPage />,
      },
      {
        path: "consultancy",
        element: <ConsultancyPage />,
      },
      {
        path: "publication",
        element: <PublicationPage />,
      },
      {
        path: "admission-enquiry",
        element: <AdmissionEnquiryPage />,
      },
      {
        path: "admission-enquiry-redirect",
        element: <AdmissionEnquiryPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "mandatory-disclouser",
        element: <MandatoryDisclouserPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,

        children: [
          {
            path: ":title",
            element: <BlogDetailsPage />,
          },
        ],
      },
      {
        path: "/blog/:slug",
        element: <BlogDetailsPage />,
      },
      {
        path: "/conference/:name",
        element: <ConferenceDetailPage />,
      },
      {
        path: "/research/conference/:name",
        element: <ConferenceDetailPage />,
      },
      {
        path: "/rti",
        element: <RtiPage />,
      },
      {
        path: "/online-admission",
        element: <OnlineAdmissionPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/disclaimer",
        element: <DisclaimerPage />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditionPage />,
      },

      {
        path: "/microbiology/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/nutrition-dietetics/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/artificial-intelligence/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-science-engineering/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-application/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/agriculture/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/bio-technology/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/engineering/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/management/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/commerce-and-economics/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/media-studies/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/legal-studies-law/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/pharmacy/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/allied-health-sciences/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/natural-sciences/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/humanities/undergraduate",
        element: <AddmissionProgramFinderPage />,
      },

      {
        path: "/artificial-intelligence/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-science-engineering/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-application/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/agriculture/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/bio-technology/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/engineering/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/management/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/commerce-and-economics/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/media-studies/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/legal-studies-law/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/natural-sciences/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/social-work/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/humanities/postgraduate",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-science-engineering/integrated",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/bio-technology/integrated",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/engineering/integrated",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/legal-studies-law/integrated",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/polytechnic-lateral/polytechnic-diploma",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/polytechnic/polytechnic-diploma",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/artificial-intelligence/industry-honors1",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-science-engineering/industry-honors1",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/computer-application/industry-honors1",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/engineering/industry-honors1",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/management/industry-honors1",
        element: <AddmissionProgramFinderPage />,
      },
      {
        path: "/institute-of-technology",
        element: <InstituteDepartmentPage />,
      },


      {
        path: "/institute-of-biosciences-and-technology",
        element: <InstituteDepartmentPage />,
      },

      {
        path: "/institute-of-management-commerce-and-economics",
        element: <InstituteDepartmentPage />,

      },

      {
        path: "/institute-of-media-studies",
        element: <InstituteofMediaStudiesPage />,

      },


      {
        path: "/institute-of-natural-sciences-and-humanities",
        element: <InstituteDepartmentPage />,

      },

      {
        path: "/institute-of-pharmaceutical-sciences",
        element: <InstituteofPharmaceuticalSciencesPage />,

      },

      {
        path: "/institute-of-agricultural-sciences-and-technology",
        element: <InstituteofAgriculturalSciencesandTechnologyPage />,

      },

      {
        path: "/institute-of-legal-studies",
        element: <InstituteofLegalStudiesPage />,

      },

      {
        path: "/institute-of-pharmacy",
        element: <InstituteofPharmacyPage />,

      },

      {
        path: "/institute-of-education-and-research",
        element: <InstituteofEducationandResearchPage />,

      },

      {
        path: "/srmu-polytechnic",
        element: <SRMUPolytechnicPage />,

      },
      // {
      //   path: "/institute-of-allied-and-health-sciences",
      //   element: <InstituteofAlliedAndHealthSciencesPage />,

      // },
      {
        path: "/institute-of-allied-health-sciences",
        element: <FacultyOfAlliedHealthSciencesPage />,

      },

      {
        path: "/faculty-of-civil-engineering",
        element: <FacultyOfCivilEngineeringPage />,

      },

      {
        path: "/department-of-electrical-and-electronics-engineering",
        element: <DepartmentOfElectricalAndElectronicsEngineeringPage />,

      },

      {
        path: "/faculty-of-mechanical-engineering",
        element: <FacultyOfMechanicalEngineeringPage />,

      },



      {
        path: "/faculty-of-biosciences",
        element: <FacultyOfBiosciencesPage />,

      },
      {
        path: "/faculty-of-biotechnology",
        element: <FacultyOfBiotechnologyPage />,

      },


      {
        path: "/faculty-of-humanities-and-social-sciences",
        element: <FacultyOfHumanitiesAndSocialSciencesPage />,

      },
      {
        path: "/faculty-of-mathematical-and-statistical-sciences",
        element: <FacultyOfMathematicalAndStatisticalSciencesPage />,

      },
      {
        path: "/faculty-of-physical-sciences",
        element: <FacultyOfPhysicalSciencesPage />,

      },
      {
        path: "/department-of-computer-science-and-engineering",
        element: <DepartmentOfComputerScienceAndEngineeringPage />,

      },

      {
        path: "/department-of-computer-science-and-information-systems",
        element: <DepartmentOfComputerScienceAndInformationSystemsPage />,

      },

      //new pages

      {
        path: "/about-us-new",
        element: <AboutPageNew />,
      },

      {
        path: "/department-of-computer-science-and-engineering-new",
        element: <DepartmentOfComputerScienceAndEngineeringNewPage />,

      },
      {
        path: "/institute-of-pharmacy-new",
        element: <InstituteOfPharmacyNewPage />,
      },
      {
        path: "/institute-of-biosciences-and-technology-new",
        element: <InstituteOfBiosciencesAndTechnologyNewPage />,
      },
      {
        path: "/institute-of-agricultural-sciences-and-technology-new",
        element: <InstituteOfAgriculturalSciencesAndTechnologyNewPage />,
      },
      {
        path: "/institute-of-media-studies-new",
        element: <InstituteOfMediaStudiesNewPage />,
      },
      {
        path: "/institute-of-legal-studies-new",
        element: <InstituteOfLegalStudiesNewPage />,
      },
      {
        path: "/institute-of-natural-sciences-and-humanities-new",
        element: <InstituteOfNaturalSciencesAndHumanitiesNewPage />,
      },
      {
        path: "/institute-of-education-and-research-new",
        element: <InstituteOfEducationAndResearchNewPage />,
      },
      {
        path: "/department-of-electrical-and-electronics-engineering-new",
        element: <DepartmentOfElectricalAndElectronicsEngineeringNewPage />,
      },
      {
        path: "/faculty-of-chemical-sciences-new",
        element: <FacultyOfChemicalSciencesNewPage />,
      },
      {
        path: "/institute-of-allied-health-sciences-new",
        element: <InstituteOfAlliedHealthSciencesNewPage />,
      },
      {
        path: "/department-of-mechanical-engineering-new",
        element: <DepartmentOfMechanicalEngineeringNewPage />,
      },
      {
        path: "/department-of-civil-engineering-new",
        element: <DepartmentOfCivilEngineeringNewPage />,
      },
      {
        path: "/faculty-of-commerce-and-economics-new",
        element: <FacultyOfCommerceAndEconomicsNewPage />,
      },
      {
        path: "/faculty-of-management-new",
        element: <FacultyOfManagementNewPage />,
      },
      {
        path: "/faculty-of-mathematical-and-statistical-sciences-new",
        element: <FacultyOfMathematicalAndStatisticalSciencesNewPage />,
      },
      {
        path: "/srmu-polytechnic-new",
        element: <SRMUPolytechnicNewPage />,
      },
      {
        path: "/institute-of-pharmaceutical-sciences-new",
        element: <InstituteOfPharmaceuticalSciencesNewPage />,
      },
      {
        path: "green-initiative-new",
        element: <GreenInitiativeNewPage />,
      },
      {
        path: "facilities-new",
        element: <FacilitiesNewPage />,
      },

      {
        path: "eligibility",
        element: <NewProgramFinderPage />,
      },
      {
        path: "event-new",
        element: <NewEventPage />,
      },
      {
        path: "b-tech-cse-cyber-security-new",
        element: <BTechCseCyberSecurityNew />,
      },
      {
        path: "b-tech-cse-data-science-new",
        element: <BTechCseDataScienceNew />,
      },
      {
        path: "b-tech-mechanical-engineering-new",
        element: <BTechMechanicalEngineeringNew />,
      },
      {
        path: "b-tech-ece-semiconductor-design-new",
        element: <BTechEceSemiconductorDesignNew />,
      },

      //------------------------------------------------------

      {
        path: "/faculty-of-commerce-and-economics",
        element: <FacultyOfCommerceAndEconomicsPage />,

      },
      {
        path: "/faculty-of-management",
        element: <FacultyOfManagementPage />,

      },
      {
        path: "/faculty-of-chemical-sciences",
        element: <FacultyOfChemicalSciencesPage />,

      },
      {
        path: "/institute-of-pharmaceutical-sciences1",
        element: <Navigate to="/institute-of-pharmaceutical-sciences" replace />,
      },
      {
        path: "/institute-of-legal-studies1",
        element: <Navigate to="/institute-of-legal-studies" replace />,
      },
      {
        path: "/srmu-polytechnic1",
        element: <Navigate to="/srmu-polytechnic" replace />,
      },
      {
        path: "/conference/icmtce-20191",
        element: <Navigate to="/conference/icmtce-2019" replace />,
      },
      {
        path: "/institutef-of-biotechnology",
        element: <Navigate to="/faculty-of-biotechnology" replace />,
      },
      {
        path: "/facultys-of-biotechnology",
        element: <Navigate to="/faculty-of-biotechnology" replace />,
      },
      {
        path: "/convocational/convocation-2021",
        element: <Navigate to="/convocation/convocation-2021" replace />,
      },
      // {
      //   path: "/Department-of-computer-science-and-information-systems",
      //   element: <Navigate to="/department-of-computer-science-and-information-systems" replace />,
      // },
    ],
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];

