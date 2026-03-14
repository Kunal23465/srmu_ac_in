import RootLayout from "../pages/RootLayout";
import PageNotFound from "../pages/PageNotFound";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CareerFormPage from "../pages/Home/CareerFormPage";
import TermsConditionPage from "../pages/Home/TermsConditionPage";
import NewsLetterPage from "../pages/Home/NewsLetterPage";
import NoticePage from "../pages/notice/NoticePage";
import ShiftSchedulePage from "../pages/admissions/shift-schedule/ShiftSchedulePage";
import AboutPage from "../pages/about/AboutPage";
import NewsEventDetails from "../components/home/NewsEventDetails";
import ProgramDetailsPage from "../pages/programs/details-page/ProgramDetailsPage";
import ProgramTypePage from "../pages/programs/ProgramTypePage/ProgramTypePage";
import ProgramTypeItemPage from "../pages/ProgramTypeItemPage";
import LeadershipAndGovernancePage from "../pages/about/Leadership-and-Governance/LeadershipAndGovernancePage";
import CommitteeAndCellsPage from "../pages/about/Committee-and-Cells/CommitteeAndCellsPage";
import CustomCommitteeDetailsPage from "./custom/CustomCommitteeDetailsPage";
import { committeeCards } from "../data/about/committee-and-cells/committee-and-cells-data";
import RecognitionApprovalsPage from "../pages/about/recognition-approval/RecognitionApprovalsPage";
import AwardOverviewPage from "../pages/about/award-overview/AwardOverviewPage";
import IqacPage from "../pages/about/iqac-overview/IqacPage";
import NAACPage from "../pages/about/NAAC/NAACPage";
import NIRFPage from "../pages/about/NIRF/NIRFPage";
import OragnisationStructurePage from "../pages/about/organisation-structure-plan/OrganisationStructurePlan";
import InstitutePage from "../pages/academics/institutes/InstitutePage";
import InstituteDepartmentPage from "../pages/academics/institutes/institute-department/InstituteDepartmentPage";
import PoliciesReportsPage from "../pages/academics/Policies-Reports/PoliciesReportsPage";
import AcademicCalendarsPage from "../pages/academics/academic-calendars/AcademicCalendarsPage";
import TeachingLearningProcessPage from "../pages/academics/teaching-learning-process/TeachingLearningProcessPage";
import AcademicBankOfCreditPage from "../pages/academics/academic-bank-credit/AcademicBankOfCreditPage";
import EContentCellPage from "../pages/academics/e-content-cell/EContentCellPage";
import SwayamNptelPage from "../pages/academics/swayam-nptel/SwayamNptelPage";
import IirsIsroPage from "../pages/academics/iirs-isro/IirsIsroPage";
import CurriculumDesignPage from "../pages/academics/curriculum-design/CurriculumDesignPage";
import DepartmentDetailPage from "../components/academics/institutes/institute-department/Institute-department/DepartmentDetailPage";
import OverviewPage from "../pages/admissions/overview/OverviewPage";
import HowToApplyPage from "../pages/admissions/how-to-apply/HowToApplyPage";
import FeeStructurePage from "../pages/admissions/fee-structure/FeeStructurePage";
import DocumentChecklistPage from "../pages/admissions/document-checklist/DocumentChecklistPage";
import AdmissionFaqPage from "../pages/admissions/admission-faq/AdmissionFaqPage";
import AdmissionPolicyPage from "../pages/admissions/admission-policy/AdmissionPolicyPage";
import AddmissionProgramFinderPage from "../pages/admissions/program-finder/AddmissionProgramFinderPage";
import ScholarshipPage from "../pages/admissions/scholarship/ScholarshipPage";
import CampusLifePage from "../pages/campus-life/CampusLifePage";
import TransportationPage from "../pages/campus-life/facilities/transportation/TransportationPage";
import HostelPage from "../pages/campus-life/facilities/HostelPage";
import ConvocationPage from "../pages/campus-life/convocation/ConvocationPage";
import ConvocationDetailPage from "../pages/campus-life/convocation/ConvocationDetailPage";
import { convocationData } from "../data/campus-life/convocation/convocation-data";
import CentralLibraryPage from "../pages/campus-life/central-library/CentralLibraryPage";
import GreenInitiativePage from "../pages/campus-life/green-initiative/GreenInitiativePage";
import WomenEmpowermentPage from "../pages/campus-life/women-empowerment/WomenEmpowermentPage";
import StudentSenatePage from "../pages/campus-life/student-senate/StudentSenatePage";
import StudentCornerPage from "../pages/campus-life/student-corner/StudentCornerPage";
import OutreachActivationsPage from "../pages/campus-life/outreach-activations/OutreachActivationsPage";
import ClubsPage from "../pages/campus-life/clubs/ClubsPage";
import GrievanceRedressalSystemPage from "../pages/campus-life/grievance-redressal-system/GrievanceRedressalSystemPage";
import EventPage from "../pages/campus-life/events/EventPage";
import EventDetails from "../pages/campus-life/events/EventDetails";
import tedxData, { conferenceData, festData, festivalsData } from "../data/campus-life/events/events-data";
import ResearchOverviewPage from "../pages/Research/Overview/ResearchOverviewPage";
import ProcessAndInitiativePage from "../pages/Research/Process-and-Initiative/ProcessAndInitiativePage";
import PhdNotificationSessionPage from "../pages/Research/Phd-notification-session/PhdNotificationSessionPage";
import PhdOfflineApplicationPage from "../pages/Research/phd-offline-application/PhdOfflineApplicationPage";
import InnovationPage from "../pages/Research/Innovation/InnovationPage";
import ConsultancyPage from "../pages/Research/Consultancy/ConsultancyPage";
import PublicationPage from "../pages/Research/Publication/PublicationPage";
import ConferenceDetailPage from "../components/research/publication/conference/ConferenceDetailPage";
import PlacementPage from "../pages/placement/PlacementPage";
import PlacementCellPage from "../pages/placement/placement-cell/PlacementCellPage";
import StudentTestimonialPage from "../pages/placement/student-testimonial/StudentTestimonialPage";
import AlumniRegistrationPage from "../pages/placement/AlumniRegistrationPage";
import AlumniFeedbackPage from "../pages/placement/AlumniFeedbackPage";
import AlumniTestimonialsPage from "../pages/placement/AlumniTestimonialsPage";
import PlacementPoliciesPage from "../pages/placement/placement-policies/PlacementPoliciesPage";
import AdmissionEnquiryPage from "../pages/admission-enquiry/AdmissionEnquiryPage";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import MandatoryDisclouserPage from "../pages/mandatory-disclouser/MandatoryDisclouserPage";
import BlogsPage from "../pages/blog/BlogsPage";
import BlogDetailsPage from "../pages/blog/BlogDetailsPage";
import RtiPage from "../pages/rti/RtiPage";
import OnlineAdmissionPage from "../pages/Home/OnlineAdmissionPage";
import PrivacyPolicyPage from "../pages/privacy-policy/PrivacyPolicyPage";
import DisclaimerPage from "../pages/disclaimer/DisclaimerPage";
import TermsAndConditionPage from "../pages/terms-condition/TermsAndConditionPage";

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
        path: "career-form",
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
        path: "/:programType",
        element: <ProgramTypePage />,
      },
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

        children: committeeCards.map((card) => ({
          path: card.routeKey,
          element: <CustomCommitteeDetailsPage committee={card} />,
        })),
      },
      {
        path: "/approvals-and-associations",
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
        path: "academics",
        element: <InstitutePage />,

        children: [
          {
            path: ":departmentName",
            element: <InstituteDepartmentPage />,
          },
          {
            path: ":departmentName/:detailName",
            element: <DepartmentDetailPage />,
          },
          {
            path: "department/:detailName",
            element: <DepartmentDetailPage />,
          },
          {
            path: "policies-reports",
            element: <PoliciesReportsPage />,
          },
          {
            path: "academic-calender",
            element: <AcademicCalendarsPage />,
          },
          {
            path: "teaching-learning-process",
            element: <TeachingLearningProcessPage />,
          },
          {
            path: "academic-depository-nad-and-abc",
            element: <AcademicBankOfCreditPage />,
          },

          {
            path: "e-content-development-cell",
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
        ],
      },
      {
        path: "admission",
        element: <OverviewPage />,

        children: [
          {
            path: "how-to-apply",
            element: <HowToApplyPage />,
          },
          {
            path: "fee-structure",
            element: <FeeStructurePage />,
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
            path: "admission-faq",
            element: <AdmissionFaqPage />,
          },
          {
            path: "admission-policy",
            element: <AdmissionPolicyPage />,
          },
          {
            path: "program-finder",
            element: <AddmissionProgramFinderPage />,
          },
          {
            path: "scholarship-scheme",
            element: <ScholarshipPage />,
          },
        ],
      },
      {
        path: "/campus-life",
        element: <CampusLifePage />,

        children: [
          {
            path: "transportation",
            element: <TransportationPage />,
          },
          {
            path: "hostel",
            element: <HostelPage />,
          },
          {
            path: "convocation",
            element: <ConvocationPage />,

            children: [
              ...Object.values(convocationData).flatMap((item) =>
                item.cards.map((card) => ({
                  path: card.routeKey,
                  element: <ConvocationDetailPage card={card} />,
                })),
              ),
            ],
          },
          {
            path: "central-library",
            element: <CentralLibraryPage />,
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
            path: "clubs",
            element: <ClubsPage />,
          },
          {
            path: "grievance-redressal-system",
            element: <GrievanceRedressalSystemPage />,
          },
          {
            path: "events",
            element: <EventPage />,

            children: [
              // Fest data
              ...Object.values(festData).flatMap((fest) =>
                fest.cards.map((card) => ({
                  path: card.routeKey,
                  element: <EventDetails card={card} />,
                })),
              ),

              ...conferenceData.conferences.map((card) => ({
                path: card.routeKey,
                element: <EventDetails card={card} />,
              })),

              ...conferenceData.seminars.map((card) => ({
                path: card.routeKey,
                element: <EventDetails card={card} />,
              })),

              ...Object.values(festivalsData).flatMap((festival) =>
                festival.cards.map((card) => ({
                  path: card.routeKey,
                  element: <EventDetails card={card} />,
                })),
              ),

              ...tedxData.map((card) => ({
                path: card.routeKey,
                element: <EventDetails card={card} />,
              })),
            ],
          },
        ],
      },
      {
        path: "/placements",
        element: <PlacementPage />,

        children: [
          {
            path: "placement-cell",
            element: <PlacementCellPage />,
          },
          {
            path: "student-testimonial",
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
        ],
      },

      {
        path: "/research",
        element: <ResearchOverviewPage />,

        children: [
          {
            path: "process-and-initiatives",
            element: <ProcessAndInitiativePage />,
          },
          {
            path: "phd-notification-session",
            element: <PhdNotificationSessionPage />,
          },
          {
            path: "phd-offline-application",
            element: <PhdOfflineApplicationPage />,
          },
          {
            path: "innovation",
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
            path: "conference/:name",
            element: <ConferenceDetailPage />,
          },
        ],
      },
      {
        path: "admission-enquiry",
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
    ],
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
