import RootLayout from "../pages/RootLayout";
import { Navigate, useRoutes } from "react-router-dom";
import { lazyPage } from "./lazyRoute";

const HomePage = lazyPage(() => import("../pages/Home/HomePage"));
const PageNotFound = lazyPage(() => import("../pages/PageNotFound"));
const LegacyEventDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.LegacyEventDetailsPage })));
const LegacyCommitteeDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.LegacyCommitteeDetailsPage })));
const RoutedEventDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.RoutedEventDetailsPage })));
const RoutedConvocationDetailsPage = lazyPage(() => import("./legacyRouteResolvers").then((mod) => ({ default: mod.RoutedConvocationDetailsPage })));
const CareerFormPage = lazyPage(() => import("../pages/Home/CareerFormPage"));
const TermsConditionPage = lazyPage(() => import("../pages/Home/TermsConditionPage"));
const NewsLetterPage = lazyPage(() => import("../pages/Home/NewsLetterPage"));
const NoticePage = lazyPage(() => import("../pages/notice/NoticePage"));
const ShiftSchedulePage = lazyPage(() => import("../pages/admissions/shift-schedule/ShiftSchedulePage"));
const AboutPage = lazyPage(() => import("../pages/about/AboutPage"));
const NewsEventDetails = lazyPage(() => import("../components/home/NewsEventDetails"));
const ProgramDetailsPage = lazyPage(() => import("../pages/programs/details-page/ProgramDetailsPage"));
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
const CentralLibraryPage = lazyPage(() => import("../pages/campus-life/central-library/CentralLibraryPage"));
const GreenInitiativePage = lazyPage(() => import("../pages/campus-life/green-initiative/GreenInitiativePage"));
const WomenEmpowermentPage = lazyPage(() => import("../pages/campus-life/women-empowerment/WomenEmpowermentPage"));
const StudentSenatePage = lazyPage(() => import("../pages/campus-life/student-senate/StudentSenatePage"));
const StudentCornerPage = lazyPage(() => import("../pages/campus-life/student-corner/StudentCornerPage"));
const OutreachActivationsPage = lazyPage(() => import("../pages/campus-life/outreach-activations/OutreachActivationsPage"));
const ClubsPage = lazyPage(() => import("../pages/campus-life/clubs/ClubsPage"));
const GrievanceRedressalSystemPage = lazyPage(() => import("../pages/campus-life/grievance-redressal-system/GrievanceRedressalSystemPage"));
const EventPage = lazyPage(() => import("../pages/campus-life/events/EventPage"));
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
const StudentPortalRedirectPage = lazyPage(() => import("../pages/StudentPortalRedirectPage"));
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
        path: "career/career-form",
        element: <CareerFormPage />,
      },
      {
        path: "terms-condition",
        element: <TermsConditionPage />,
      },
      {
        path: "news-letter",
        element: <NewsLetterPage />,
      },
      {
        path: "newsletter",
        element: <NewsLetterPage />,
      },
      {
        path: "newsletters",
        element: <NewsLetterPage />,
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
      {
        path: "/student-portal-redirect",
        element: <StudentPortalRedirectPage />,
      },
      // {
      //   path: "/admission-enquiry-redirect",
      //   element: <AdmissionEnquiryRedirectPage />,
      // },
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
        path: "/committe",
        element: <CommittePage />,
      },
      {
        path: "/committe/:slug",
        element: <LegacyCommitteeDetailsPage />,
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
        path: "student-senate",
        element: <StudentSenatePage />,
      },
      {
        path: "student-corner",
        element: <StudentCornerPage />,
      },
      {
        path: "outreach-activations",
        element: <OutreachActivationsPage />,
      },

      {
        path: "grievance-redressal-system",
        element: <GrievanceRedressalSystemPage />,
      },
      {
        path: "campus-life/grievance-redressal-system",
        element: <GrievanceRedressalSystemPage />,
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
        path: "ph-d-notification-session-2025-26",
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
        path: "/institute-of-pharmaceutical-sciences1",
        element: <InstituteofPharmaceuticalSciencesPage />,

      },

      {
        path: "/institute-of-agricultural-sciences-and-technology",
        element: <InstituteofAgriculturalSciencesandTechnologyPage />,

      },

      {
        path: "/institute-of-legal-studies1",
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
        path: "/srmu-polytechnic1",
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
    ],
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
