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
import InstituteofBiosciencesandTechnologyPage from "../pages/academics/institutes/institute-department/InstituteofBiosciencesandTechnologyPage";
import InstituteofManagementCommerceandEconomicsPage from "../pages/academics/institutes/institute-department/InstituteofManagementCommerceandEconomicsPage";
import InstituteofMediaStudiesPage from "../pages/academics/institutes/institute-department/InstituteofMediaStudiesPage";
import InstituteofNaturalSciencesandHumanitiesPage from "../pages/academics/institutes/institute-department/InstituteofNaturalSciencesandHumanitiesPage";
import InstituteofPharmaceuticalSciencesPage from "../pages/academics/institutes/institute-department/InstituteofPharmaceuticalSciencesPage";
import InstituteofAgriculturalSciencesandTechnologyPage from "../pages/academics/institutes/institute-department/InstituteofAgriculturalSciencesandTechnologyPage";
import InstituteofLegalStudiesPage from "../pages/academics/institutes/institute-department/InstituteofLegalStudiesPage";
import InstituteofPharmacyPage from "../pages/academics/institutes/institute-department/InstituteofPharmacyPage";
import InstituteofEducationandResearchPage from "../pages/academics/institutes/institute-department/InstituteofEducationandResearchPage";
import SRMUPolytechnicPage from "../pages/academics/institutes/institute-department/SRMUPolytechnicPage";
import FacultyOfCivilEngineeringPage from "../pages/academics/institutes/institute-department/FacultyOfCivilEngineeringPage";
import DepartmentOfElectricalAndElectronicsEngineeringPage from "../pages/academics/institutes/institute-department/DepartmentOfElectricalAndElectronicsEngineeringPage";
import FacultyOfMechanicalEngineeringPage from "../pages/academics/institutes/institute-department/FacultyOfMechanicalEngineeringPage";
import FacultyOfAlliedHealthSciencesPage from "../pages/academics/institutes/institute-department/FacultyOfAlliedHealthSciencesPage";

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
      {
        path: "clubs",
        element: <ClubsPage />,
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
        path: "/placement-overview",
        element: <PlacementPage />,

        children: [],
      },
      {
        path: "placements",
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
        element: <InstituteofBiosciencesandTechnologyPage />,
      },

      {
        path: "/institute-of-management-commerce-and-economics",
        element: <InstituteofManagementCommerceandEconomicsPage />,

      },

      {
        path: "/institute-of-media-studies",
        element: <InstituteofMediaStudiesPage />,

      },


      {
        path: "/institute-of-natural-sciences-and-humanities",
        element: <InstituteofNaturalSciencesandHumanitiesPage />,

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
        path: "/faculty-of-allied-health-sciences",
        element: <FacultyOfAlliedHealthSciencesPage />,

      },

     
    ],
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
