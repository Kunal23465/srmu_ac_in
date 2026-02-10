import HomePage from "../pages/Home/HomePage";
import RootLayout from "../pages/RootLayout";
import AboutPage from "../pages/about/AboutPage";

import { committeeCards } from "../data/about/committee-and-cells/committee-and-cells-data";
import CustomCommitteeDetailsPage from "./custom/CustomCommitteeDetailsPage";

import OverviewPage from "../pages/admissions/overview/OverviewPage";

import CampusLifePage from "../pages/campus-life/CampusLifePage";
import CentralLibraryPage from "../pages/campus-life/central-library/CentralLibraryPage";
import EventPage from "../pages/campus-life/events/EventPage";

import InstitutePage from "../pages/academics/institutes/InstitutePage";
import PoliciesReportsPage from "../pages/academics/Policies-Reports/PoliciesReportsPage";
import AcademicCalendarsPage from "../pages/academics/academic-calendars/AcademicCalendarsPage";
import TeachingLearningProcessPage from "../pages/academics/teaching-learning-process/TeachingLearningProcessPage";
import AcademicBankOfCreditPage from "../pages/academics/academic-bank-credit/AcademicBankOfCreditPage";
import EContentCellPage from "../pages/academics/e-content-cell/EContentCellPage";
import SwayamNptelPage from "../pages/academics/swayam-nptel/SwayamNptelPage";
import IirsIsroPage from "../pages/academics/iirs-isro/IirsIsroPage";
import CurriculumDesignPage from "../pages/academics/curriculum-design/CurriculumDesignPage";
import FeeStructurePage from "../pages/admissions/fee-structure/FeeStructurePage";
import ShiftSchedulePage from "../pages/admissions/shift-schedule/ShiftSchedulePage";
import DocumentChecklistPage from "../pages/admissions/document-checklist/DocumentChecklistPage";
import AdmissionFaqPage from "../pages/admissions/admission-faq/AdmissionFaqPage";
import ScholarshipPage from "../pages/admissions/scholarship/ScholarshipPage";
import LeadershipAndGovernancePage from "../pages/about/Leadership-and-Governance/LeadershipAndGovernancePage";
import CommitteeAndCellsPage from "../pages/about/Committee-and-Cells/CommitteeAndCellsPage";
import RecognitionApprovalsPage from "../pages/about/recognition-approval/RecognitionApprovalsPage";
import IqacPage from "../pages/about/iqac-overview/IqacPage";
import NAACPage from "../pages/about/NAAC/NAACPage";
import NIRFPage from "../pages/about/NIRF/NIRFPage";
import OragnisationStructurePage from "../pages/about/organisation-structure-plan/OrganisationStructurePlan";
import ResearchOverviewPage from "../pages/Research/Overview/ResearchOverviewPage";
import ProcessAndInitiativePage from "../pages/Research/Process-and-Initiative/ProcessAndInitiativePage";
import PhdNotificationSessionPage from "../pages/Research/Phd-notification-session/PhdNotificationSessionPage";
import EventDetails from "../pages/campus-life/events/EventDetails";
import tedxData, { conferenceData, festData, festivalsData } from "../data/campus-life/events/events-data";
import InnovationPage from "../pages/Research/Innovation/InnovationPage";
import PlacementPage from "../pages/placement/PlacementPage";
import StudentTestimonialPage from "../pages/placement/student-testimonial/StudentTestimonialPage";
import PlacementPoliciesPage from "../pages/placement/placement-policies/PlacementPoliciesPage";
import ConsultancyPage from "../pages/Research/Consultancy/ConsultancyPage";
import AlumniRegistrationPage from "../pages/placement/AlumniRegistrationPage";
import AlumniTestimonialsPage from "../pages/placement/AlumniTestimonialsPage";
import ConvocationPage from "../pages/campus-life/convocation/ConvocationPage";
import { convocationData } from "../data/campus-life/convocation/convocation-data";
import ConvocationDetailPage from "../pages/campus-life/convocation/ConvocationDetailPage";
import ClubsPage from "../pages/campus-life/clubs/ClubsPage";
// import AfterClass10thPage from "../pages/after-class-10th/AfterClass10thPage";
// import AfterClass12thPage from "../pages/Home/AfterClass12thPage";
import WomenEmpowermentPage from "../pages/campus-life/women-empowerment/WomenEmpowermentPage";
// import IndustryHonorsPage from "../pages/Home/IndustryHonorsPage";
import PublicationPage from "../pages/Research/Publication/PublicationPage";
// import AfterGraduationPage from "../pages/Home/AfterGraduationPage";
// import AfterPolytechnicPage from "../pages/Home/AfterPolytechnicPage";
// import AfterPostGraduationPage from "../pages/Home/AfterPostGraduationPage";
import StudentSenatePage from "../pages/campus-life/student-senate/StudentSenatePage";
import StudentCornerPage from "../pages/campus-life/student-corner/StudentCornerPage";
import GreenInitiativePage from "../pages/campus-life/green-initiative/GreenInitiativePage";
import PlacementCellPage from "../pages/placement/placement-cell/PlacementCellPage";
import NoticePage from "../pages/notice/NoticePage";
import GrievanceRedressalSystemPage from "../pages/campus-life/grievance-redressal-system/GrievanceRedressalSystemPage";
import OutreachActivationsPage from "../pages/campus-life/outreach-activations/OutreachActivationsPage";
import AdmissionEnquiryPage from "../pages/admission-enquiry/AdmissionEnquiryPage";
import AdmissionPolicyPage from "../pages/admissions/admission-policy/AdmissionPolicyPage";
import ConferenceDetailPage from "../components/research/publication/conference/ConferenceDetailPage";
// import BtechInCSEAIAndML from "../pages/programs/btech-in-cse-ai-ml/BtechInCSEAIAndML";
import AwardOverviewPage from "../pages/about/award-overview/AwardOverviewPage";
import DepartmentDetailPage from "../components/academics/institutes/institute-department/Institute-department/DepartmentDetailPage";
import InstituteDepartmentPage from "../pages/academics/institutes/institute-department/InstituteDepartmentPage";
// import FacultyOfBiotechnologyPage from "../pages/academics/institutes/institute-department/FacultyOfBiotechnologyPage";
// import FacultyOfPhysicalSciencesPage from "../pages/academics/institutes/institute-department/FacultyOfPhysicalSciencesPage";
// import FacultyOfMathematicalAndStatisticalSciencesPage from "../pages/academics/institutes/institute-department/FacultyOfMathematicalAndStatisticalSciencesPage";
// import FacultyOfHumanitiesAndSocialSciencesPage from "../pages/academics/institutes/institute-department/FacultyOfHumanitiesAndSocialSciencesPage";
import CareerFormPage from "../pages/Home/CareerFormPage";
import TermsConditionPage from "../pages/Home/TermsConditionPage";
import HostelPage from "../pages/campus-life/facilities/HostelPage";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import NewsEventDetails from "../components/home/NewsEventDetails";
import AlumniFeedbackPage from "../pages/placement/AlumniFeedbackPage";
import OnlineAdmissionPage from "../pages/Home/OnlineAdmissionPage";
import BlogsPage from "../pages/blog/BlogsPage";
import BlogDetailsPage from "../pages/blog/BlogDetailsPage";
import RtiPage from "../pages/rti/RtiPage";
import TransportationPage from "../pages/campus-life/facilities/transportation/TransportationPage";
import NewsLetterPage from "../pages/Home/NewsLetterPage";
import HowToApplyPage from "../pages/admissions/how-to-apply/HowToApplyPage";
// import RootPrograms from "../pages/programs/RootPrograms";
// import AfterClass10thInnerPage from "../pages/after-class-10th/AfterClass10thInnerPage";
import ProgramDetailsPage from "../pages/programs/details-page/ProgramDetailsPage";
import PrivacyPolicyPage from "../pages/privacy-policy/PrivacyPolicyPage";
import DisclaimerPage from "../pages/disclaimer/DisclaimerPage";
import TermsAndConditionPage from "../pages/terms-condition/TermsAndConditionPage";
import MandatoryDisclouserPage from "../pages/mandatory-disclouser/MandatoryDisclouserPage";
import PhdOfflineApplicationPage from "../pages/Research/phd-offline-application/PhdOfflineApplicationPage";
import AddmissionProgramFinderPage from "../pages/admissions/program-finder/AddmissionProgramFinderPage";
import ProgramFinderPage from "../pages/programs/ProgramFinderPage";
import ProgramTypePage from "../pages/programs/ProgramTypePage/ProgramTypePage";
// interface IMatches {
//   pathname: string;
//   params: Params<string>;
//   data: unknown;
//   handle: unknown;
// }

// type HandleType = {
//   crumb: (param?: string) => React.ReactNode;
// };
export const routes = [
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
        // handle: {
        //   crumb: () => <Link to="/">Home</Link>,
        // },
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
      // AfterPostGraduationPage
      {
        path: "/about-us",
        element: <AboutPage />,

        children: [
          {
            path: "leadership-and-governance",
            element: <LeadershipAndGovernancePage />,
          },
          {
            path: "committees-and-cells",
            element: <CommitteeAndCellsPage />,

            children: committeeCards.map((card) => ({
              path: card.routeKey,
              element: <CustomCommitteeDetailsPage committee={card} />,
            })),
          },

          {
            path: "approvals-and-associations",
            element: <RecognitionApprovalsPage />,
          },
          {
            path: "award-overview",
            element: <AwardOverviewPage />,
          },
          {
            path: "iqac-overview",
            element: <IqacPage />,
          },
          {
            path: "naac",
            element: <NAACPage />,
          },
          {
            path: "nirf",
            element: <NIRFPage />,
          },
          {
            path: "organization-structure-plan",
            element: <OragnisationStructurePage />,
          },
        ],
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
            // element: <p>Hello Bro</p>,
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

          // {
          //   path: "faculty-of-civil-engineering",
          //   element: <FacultyOfCivilEngineeringPage />,

          // },
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

      // {
      //   path: "/program",
      //   element: <RootPrograms />,
      //   children: [
      //     {
      //       path: ":programType/",
      //       element: <ProgramFinderPage />,
      //     },
      //     {
      //       path: ":programType/:item",
      //       element: <ProgramFinderPage />,
      //     },
      //     {
      //       path: "details/:programName",
      //       element: <ProgramDetailsPage />,
      //     },

      //   ],
      // },

      {
        path: "/:programType",
        // element: <ProgramFinderPage />,
        element: <ProgramTypePage />,
      },
      {
        path: "/:programType/:item",
        element: <ProgramFinderPage />,
      },
      {
        path: "/program/:programName",
        element: <ProgramDetailsPage />,
      },

      {
        path: "/campus-life",
        element: <CampusLifePage />,

        children: [
          // {
          //   path: "facilities",
          //   element: <FacilitiesPage />,

          // },
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

          // PhdOfflineApplicationPage
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

          // PlacementOverviewPage
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
      // MandatoryDisclouserPage
      {
        path: "news/:name",
        element: <NewsEventDetails />,
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
];
