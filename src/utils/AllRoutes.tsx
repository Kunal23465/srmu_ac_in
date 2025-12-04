import { Link, Params, useMatches } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RootLayout from "../pages/RootLayout";
import Classes from "../utils/styles/Global.module.css";
import { Fragment } from "react/jsx-runtime";
import AboutPage from "../pages/about/AboutPage";

import { committeeCards } from "../data/about/committee-and-cells/committee-and-cells-data";
import CustomCommitteeDetailsPage from "./custom/CustomCommitteeDetailsPage";

import AdmissonsPage from "../pages/admissions/AdmissionPage";
import OverviewPage from "../pages/admissions/overview/OverviewPage";

import CampusLifePage from "../pages/campus-life/CampusLifePage";
import FacilitiesPage from "../pages/campus-life/facilities/FacilitiesPage";
import CentralLibraryPage from "../pages/campus-life/central-library/CentralLibraryPage";
import EventPage from "../pages/campus-life/events/EventPage";

import AcademicsPage from "../pages/academics/AcademicsPage";
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
import ProgramFinderPage from "../pages/admissions/program-finder/ProgramFinderPage";
import ScholarshipPage from "../pages/admissions/scholarship/ScholarshipPage";
import LeadershipAndGovernancePage from "../pages/about/Leadership-and-Governance/LeadershipAndGovernancePage";
import CommitteeAndCellsPage from "../pages/about/Committee-and-Cells/CommitteeAndCellsPage";
import RecognitionApprovalsPage from "../pages/about/recognition-approval/RecognitionApprovalsPage";
import IqacPage from "../pages/about/iqac-overview/IqacPage";
import NAACPage from "../pages/about/NAAC/NAACPage";
import NIRFPage from "../pages/about/NIRF/NIRFPage";
import OragnisationStructurePage from "../pages/about/organisation-structure-plan/OrganisationStructurePlan";
import ResearchPage from "../pages/Research/ResearchPage";
import ResearchOverviewPage from "../pages/Research/Overview/ResearchOverviewPage";
import ProcessAndInitiativePage from "../pages/Research/Process-and-Initiative/ProcessAndInitiativePage";
import PhdNotificationSessionPage from "../pages/Research/Phd-notification-session/PhdNotificationSessionPage";
import EventDetails from "../pages/campus-life/events/EventDetails";
import tedxData, {
  conferenceData,
  festData,
  festivalsData,
} from "../data/campus-life/events/events-data";
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
import AfterClass10thPage from "../pages/Home/AfterClass10thPage";
import AfterClass12thPage from "../pages/Home/AfterClass12thPage";
import WomenEmpowermentPage from "../pages/campus-life/women-empowerment/WomenEmpowermentPage";
import IndustryHonorsPage from "../pages/Home/IndustryHonorsPage";
import PublicationPage from "../pages/Research/Publication/PublicationPage";
import AfterGraduationPage from "../pages/Home/AfterGraduationPage";
import AfterPolytechnicPage from "../pages/Home/AfterPolytechnicPage";
import AfterPostGraduationPage from "../pages/Home/AfterPostGraduationPage";
import StudentSenatePage from "../pages/campus-life/student-senate/StudentSenatePage";
import StudentCornerPage from "../pages/campus-life/student-corner/StudentCornerPage";
import GreenInitiativePage from "../pages/campus-life/green-initiative/GreenInitiativePage";
import PlacementCellPage from "../pages/placement/placement-cell/PlacementCellPage";
import NoticePage from "../pages/notice/NoticePage";
import GrievanceRedressalSystemPage from "../pages/campus-life/grievance-redressal-system/GrievanceRedressalSystemPage";
import OutreachActivationsPage from "../pages/campus-life/outreach-activations/OutreachActivationsPage";
import AdmissionEnquiryPage from "../pages/admission-enquiry/AdmissionEnquiryPage";
import AdmissionPolicyPage from "../pages/admissions/admission-policy/AdmissionPolicyPage";
import FacultyOfCivilEngineeringPage from "../pages/academics/institutes/institute-department/FacultyOfCivilEngineeringPage";
import PlacementOverviewPage from "../pages/placement/placement-overview/PlacementOverviewPage";
import ConferenceDetailPage from "../components/research/publication/conference/ConferenceDetailPage";
import BtechInCSEAIAndML from "../pages/programs/btech-in-cse-ai-ml/BtechInCSEAIAndML";
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
import { blogCards } from "../data/blog/blog-data";
import RtiPage from "../pages/rti/RtiPage";
import TransportationPage from "../pages/campus-life/facilities/transportation/TransportationPage";
import NewsLetterPage from "../pages/Home/NewsLetterPage";
interface IMatches {
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
}

type HandleType = {
  crumb: (param?: string) => React.ReactNode;
};
export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },

    children: [
      {
        index: true,
        element: <HomePage />,
        handle: {
          crumb: () => <Link to="/">Home</Link>,
        },
      },
      {
        path: "career-form",
        element: <CareerFormPage />,
        handle: {
          crumb: () => <Link to="/">Career Form</Link>,
        },
      },
      {
        path: "terms-condition",
        element: <TermsConditionPage />,
        handle: {
          crumb: () => <Link to="/">Terms & Conditions</Link>,
        },
      },
      {
        path: "news-letter",
        element: <NewsLetterPage />,
        handle: {
          crumb: () => <Link to="/">Newsletter</Link>,
        },
      },
      {
        path: "notice",
        element: <NoticePage />,
        handle: {
          crumb: () => <Link to="/">Notice</Link>,
        },
      },
      {
        path: "shift-schedule",
        element: <ShiftSchedulePage />,
        handle: {
          crumb: () => <Link to="/">Shift Schedule</Link>,
        },
      },
      // AfterPostGraduationPage
      {
        path: "/about",
        element: <AboutPage />,
        handle: {
          crumb: () => <Link to="/about">About SRMU</Link>,
        },
        children: [
          {
            path: "leadership-and-governance",
            element: <LeadershipAndGovernancePage />,
            handle: {
              crumb: () => <Link to="/">Leadership and Governance</Link>,
            },
          },
          {
            path: "committees-and-cells",
            element: <CommitteeAndCellsPage />,
            handle: {
              crumb: () => (
                <Link to="/about/committees-and-cells">
                  Committees and Cells
                </Link>
              ),
            },

            children: committeeCards.map((card) => ({
              path: card.routeKey,
              element: <CustomCommitteeDetailsPage committee={card} />,
              handle: {
                crumb: () => <a>{card.breadcrumb}</a>,
              },
            })),
          },

          {
            path: "recognition-approvals",
            element: <RecognitionApprovalsPage />,
            handle: {
              crumb: () => <Link to="/">Approvals & Associations</Link>,
            },
          },
          {
            path: "award-overview",
            element: <AwardOverviewPage />,
            handle: {
              crumb: () => <Link to="/">Award Overview</Link>,
            },
          },
          {
            path: "iqac-overview",
            element: <IqacPage />,
            handle: {
              crumb: () => <Link to="/">Quality Assurance Cell</Link>,
            },
          },
          {
            path: "naac",
            element: <NAACPage />,
            handle: {
              crumb: () => <Link to="/">NAAC</Link>,
            },
          },
          {
            path: "nirf",
            element: <NIRFPage />,
            handle: {
              crumb: () => <Link to="/">NIRF</Link>,
            },
          },
          {
            path: "organization-structure-plan",
            element: <OragnisationStructurePage />,
            handle: {
              crumb: () => <Link to="/">NIRF</Link>,
            },
          },
        ],
      },
      {
        path: "/academics",
        element: <AcademicsPage />,
        handle: {
          crumb: () => <Link to="/">Academics</Link>,
        },

        children: [
          {
            path: "institutes-info",
            element: <InstitutePage />,
            children: [
              {
                path: "institute-departments/:name",
                element: <InstituteDepartmentPage />,
                handle: {
                  crumb: () => <Link to="/">Faculty Of Civil Engineering</Link>,
                },
              },
              {
                path: "departmentDetails/:name",
                element: <DepartmentDetailPage />,
                handle: {
                  crumb: () => (
                    <Link to="/">Faculty Of Commerce And Economics</Link>
                  ),
                },
              },
            ],
            handle: {
              crumb: () => <Link to="/"> Academics</Link>,
            },
          },

          {
            path: "policies-reports",
            element: <PoliciesReportsPage />,
            handle: {
              crumb: () => <Link to="/">Policies & Reports</Link>,
            },
          },
          {
            path: "academic-calender",
            element: <AcademicCalendarsPage />,
            handle: {
              crumb: () => <Link to="/">Academic Calendars</Link>,
            },
          },
          {
            path: "teaching-learning-process",
            element: <TeachingLearningProcessPage />,
            handle: {
              crumb: () => <Link to="/">Teaching Learning Process</Link>,
            },
          },
          {
            path: "academic-depository-nad-and-abc",
            element: <AcademicBankOfCreditPage />,
            handle: {
              crumb: () => <Link to="/">Academic Bank of Credit</Link>,
            },
          },

          {
            path: "e-content-development-cell",
            element: <EContentCellPage />,
            handle: {
              crumb: () => <Link to="/">E-CONTENT DEVELOPMENT CELL</Link>,
            },
          },

          {
            path: "swayam-nptel-local-chapter",
            element: <SwayamNptelPage />,
            handle: {
              crumb: () => <Link to="/">SWAYAM NPTEL Local Chapter</Link>,
            },
          },
          {
            path: "iirs-isro",
            element: <IirsIsroPage />,
            handle: {
              crumb: () => <Link to="/">IIRS – ISRO</Link>,
            },
          },
          {
            path: "curriculum-design",
            element: <CurriculumDesignPage />,
            handle: {
              crumb: () => <Link to="/">Curriculum Design</Link>,
            },
          },

          {
            path: "faculty-of-civil-engineering",
            element: <FacultyOfCivilEngineeringPage />,
            handle: {
              crumb: () => <Link to="/">Faculty Of Civil Engineering</Link>,
            },
          },
        ],
      },
      {
        path: "/admission",
        element: <AdmissonsPage />,
        handle: {
          crumb: () => <Link to="/">Admissions</Link>,
        },

        children: [
          {
            path: "admission-overview",
            element: <OverviewPage />,
            handle: {
              crumb: () => <Link to="/">Admission Overview</Link>,
            },
          },
          {
            path: "fee-structure",
            element: <FeeStructurePage />,
            handle: {
              crumb: () => <Link to="/">Fee Structure</Link>,
            },
          },
          {
            path: "shift-schedule",
            element: <ShiftSchedulePage />,
            handle: {
              crumb: () => <Link to="/">Shift Schedule</Link>,
            },
          },
          {
            path: "document-checklist",
            element: <DocumentChecklistPage />,
            handle: {
              crumb: () => <Link to="/">Document Checklist</Link>,
            },
          },
          {
            path: "admission-faq",
            element: <AdmissionFaqPage />,
            handle: {
              crumb: () => <Link to="/">Academic Bank of Credit</Link>,
            },
          },
          {
            path: "admission-policy",
            element: <AdmissionPolicyPage />,
            handle: {
              crumb: () => <Link to="/">Academic Bank of Credit</Link>,
            },
          },
          {
            path: "program-finder",
            element: <ProgramFinderPage />,
            handle: {
              crumb: () => <Link to="/">Program Finder</Link>,
            },
          },
          {
            path: "scholarship-scheme",
            element: <ScholarshipPage />,
            handle: {
              crumb: () => <Link to="/">Scholarship</Link>,
            },
          },
        ],
      },
      {
        path: "/programs",
        element: "",
        // element: <StudentTestimonialPage />,
        handle: {
          crumb: () => <Link to="/">Programs</Link>,
        },

        children: [
          {
            path: "after-class-10th",
            element: <AfterClass10thPage />,
            handle: {
              crumb: () => <Link to="/">After Class 10th</Link>,
            },
          },

          {
            path: "after-polytechnic",
            element: <AfterPolytechnicPage />,
            handle: {
              crumb: () => <Link to="/">After Polytechnic</Link>,
            },
          },
          {
            path: "after-class-12th",
            element: <AfterClass12thPage />,
            handle: {
              crumb: () => <Link to="/">After Class 12th</Link>,
            },
          },
          {
            path: "industry-honors",
            element: <IndustryHonorsPage />,
            handle: {
              crumb: () => <Link to="/">Industry Honors</Link>,
            },
          },
          {
            path: "after-graduation",
            element: <AfterGraduationPage />,
            handle: {
              crumb: () => <Link to="/">After Graduation</Link>,
            },
          },
          {
            path: "after-post-graduation",
            element: <AfterPostGraduationPage />,
            handle: {
              crumb: () => <Link to="/">After Post Graduation</Link>,
            },
          },
          {
            path: "b-tech-cse-artificial-intelligence-machine-learning",
            element: <BtechInCSEAIAndML />,
            handle: {
              crumb: () => (
                <Link to="/">
                  B.Tech. CSE (Artificial Intelligence & Machine Learning)
                </Link>
              ),
            },
          },
        ],
      },
      {
        path: "/campus-life",
        element: <CampusLifePage />,
        handle: {
          crumb: () => <Link to="/">campus-life</Link>,
        },

        children: [
          {
            path: "facilities",
            element: <FacilitiesPage />,
            handle: {
              crumb: () => <Link to="/">Facilities</Link>,
            },
          },
          {
            path: "transportation",
            element: <TransportationPage />,
            handle: {
              crumb: () => <Link to="/">Transportation</Link>,
            },
          },
          {
            path: "hostel",
            element: <HostelPage />,
            handle: {
              crumb: () => <Link to="/">Hostel</Link>,
            },
          },
          {
            path: "convocation",
            element: <ConvocationPage />,
            handle: {
              crumb: () => <Link to="/">Convocation</Link>,
            },
            children: [
              ...Object.values(convocationData).flatMap((item) =>
                item.cards.map((card) => ({
                  path: card.routeKey,
                  element: <ConvocationDetailPage card={card} />,
                  handle: {
                    crumb: () => <a>{card.title}</a>,
                  },
                }))
              ),
            ],
          },
          {
            path: "central-library",
            element: <CentralLibraryPage />,
            handle: {
              crumb: () => <Link to="/">Central Library</Link>,
            },
          },

          {
            path: "green-initiative",
            element: <GreenInitiativePage />,
            handle: {
              crumb: () => <Link to="/">Green Initiative</Link>,
            },
          },
          {
            path: "women-empowerment",
            element: <WomenEmpowermentPage />,
            handle: {
              crumb: () => <Link to="/">Women Empowerment</Link>,
            },
          },
          {
            path: "student-senate",
            element: <StudentSenatePage />,
            handle: {
              crumb: () => <Link to="/">Student Senate</Link>,
            },
          },
          {
            path: "student-corner",
            element: <StudentCornerPage />,
            handle: {
              crumb: () => <Link to="/">Student Corner</Link>,
            },
          },
          {
            path: "outreach-activations",
            element: <OutreachActivationsPage />,
            handle: {
              crumb: () => <Link to="/">Outreach Activations</Link>,
            },
          },
          {
            path: "clubs",
            element: <ClubsPage />,
            handle: {
              crumb: () => <Link to="/">Clubs</Link>,
            },
          },
          {
            path: "grievance-redressal-system",
            element: <GrievanceRedressalSystemPage />,
            handle: {
              crumb: () => <Link to="/">Grievance Redressal System</Link>,
            },
          },
          {
            path: "events",
            element: <EventPage />,
            handle: {
              crumb: () => <Link to="/campus-life/events">Events</Link>,
            },

            children: [
              // Fest data
              ...Object.values(festData).flatMap((fest) =>
                fest.cards.map((card) => ({
                  path: card.routeKey,
                  element: <EventDetails card={card} />,
                  handle: {
                    crumb: () => <a>{card.title}</a>,
                  },
                }))
              ),

              ...conferenceData.conferences.map((card) => ({
                path: card.routeKey,
                element: <EventDetails card={card} />,
                handle: {
                  crumb: () => <a>{card.title}</a>,
                },
              })),

              ...conferenceData.seminars.map((card) => ({
                path: card.routeKey,
                element: <EventDetails card={card} />,
                handle: {
                  crumb: () => <a>{card.title}</a>,
                },
              })),

              ...Object.values(festivalsData).flatMap((festival) =>
                festival.cards.map((card) => ({
                  path: card.routeKey,
                  element: <EventDetails card={card} />,
                  handle: {
                    crumb: () => <a>{card.title}</a>,
                  },
                }))
              ),

              ...tedxData.map((card) => ({
                path: card.routeKey,
                element: <EventDetails card={card} />,
                handle: {
                  crumb: () => <a>{card.title}</a>,
                },
              })),
            ],
          },
        ],
      },
      {
        path: "/research",
        element: <ResearchPage />,
        handle: {
          crumb: () => <Link to="/">Research</Link>,
        },

        children: [
          {
            path: "overview",
            element: <ResearchOverviewPage />,
            handle: {
              crumb: () => <Link to="/">Research Overview</Link>,
            },
          },
          {
            path: "process-and-initiatives",
            element: <ProcessAndInitiativePage />,
            handle: {
              crumb: () => <Link to="/">Process And Initiatives</Link>,
            },
          },
          {
            path: "phd-notification-session",
            element: <PhdNotificationSessionPage />,
            handle: {
              crumb: () => (
                <Link to="/">Ph.D. Notification (Session: 2025-26)</Link>
              ),
            },
          },
          {
            path: "innovation",
            element: <InnovationPage />,
            handle: {
              crumb: () => <Link to="/">Innovation</Link>,
            },
          },
          {
            path: "consultancy",
            element: <ConsultancyPage />,
            handle: {
              crumb: () => <Link to="/">Consultancy</Link>,
            },
          },
          {
            path: "publication",
            element: <PublicationPage />,
            handle: {
              crumb: () => <Link to="/">Publication</Link>,
            },
          },
          {
            path: "conference/:name",
            element: <ConferenceDetailPage />,
            handle: {
              crumb: () => <Link to="/">Publication</Link>,
            },
          },
        ],
      },
      {
        path: "/placements",
        element: <PlacementPage />,
        // element: <StudentTestimonialPage />,
        handle: {
          crumb: () => <Link to="/">Placement</Link>,
        },

        children: [
          {
            path: "placement-cell",
            element: <PlacementCellPage />,
            handle: {
              crumb: () => <Link to="/">Placement Cell</Link>,
            },
          },
          {
            path: "student-testimonial",
            element: <StudentTestimonialPage />,
            handle: {
              crumb: () => <Link to="/">Student Testimonial</Link>,
            },
          },
          {
            path: "placement-policies",
            element: <PlacementPoliciesPage />,
            handle: {
              crumb: () => <Link to="/">Placement Polices</Link>,
            },
          },
          {
            path: "alumni-registration",
            element: <AlumniRegistrationPage />,
            handle: {
              crumb: () => <Link to="/">Alumni Registration</Link>,
            },
          },
          {
            path: "notable-alumni",
            element: <AlumniTestimonialsPage />,
            handle: {
              crumb: () => <Link to="/">Notable Alumni</Link>,
            },
          },
          {
            path: "alumni-feedback",
            element: <AlumniFeedbackPage />,
            handle: {
              crumb: () => <Link to="/">Alumni Feedback</Link>,
            },
          },
          {
            path: "placement-overview",
            element: <PlacementOverviewPage />,
            handle: {
              crumb: () => <Link to="/">Placement Overview</Link>,
            },
          },

          // PlacementOverviewPage
        ],
      },
      {
        path: "admission-enquiry",
        element: <AdmissionEnquiryPage />,
        handle: {
          crumb: () => <Link to="/">Admission Enquiry</Link>,
        },
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
        handle: {
          crumb: () => <Link to="/">Contact Us</Link>,
        },
      },
      {
        path: "news-and-events/:name",
        element: <NewsEventDetails />,
        handle: {
          crumb: () => <Link to="/">Innovation Meets Agriculture At The SRMU Kisan Mela 2025</Link>,
        }
      },

      {
        path: "/blogs",
        element: <BlogsPage />,
        handle: {
          crumb: () => <Link to="/blogs">Blogs</Link>,
        },
        children: [
          {
            path: ":blogRouteKey",
            element: <BlogDetailsPage />,
            handle: {
              crumb: (match?: any) => {
                const key =
                  match?.params?.blogRouteKey ??
                  window.location.pathname.split("/").pop();

                const blog = blogCards.find((b) => b.routeKey === key);

                return <a>{blog?.breadcrumb ?? "Blog"}</a>;
              },
            },
          },
        ],
      },

      {
        path: "/rti",
        element: <RtiPage />,
        handle: {
          crumb: () => <Link to="/rti">RTI</Link>,
        },
      },

      {
        path: "/online-admission",
        element: <OnlineAdmissionPage />,
        handle: {
          crumb: () => <Link to="/">Online Admission</Link>,
        },
      },
    ],
  },
];

function Breadcrumbs() {
  let matches: IMatches[] = useMatches();

  const crumbs = matches
    .filter((match) =>
      Boolean(match.handle && (match.handle as HandleType).crumb)
    )
    .map((match) => {
      const crumb = (match.handle as HandleType).crumb(
        match.data as string | undefined
      );
      return crumb as React.ReactNode;
    });

  crumbs.length > 2 && crumbs.splice(1, 1);
  // console.log("crumbs", crumbs);
  // console.log("matches", matches[1].pathname);
  return (
    <section
      className={`banner-section ${matches[1].pathname === "/abhivyakti" ? "abhivyakt" : ""
        } flex items-center `}
    >
      <div className={`${Classes["container"]} `}>
        <div className={`${Classes["page-title-content"]}`}>
          {/* <span className={`   text-[25px] sm:text-[40px] md:text-[54px] font-semibold text-white pointer-events-none`}>{crumbs[crumbs.length - 1]}</span> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0 flex flex-wrap  gap-2">
              {crumbs.map((crumb, index) => (
                <li
                  key={index}
                  className={`${Classes["breadcrumb-item"]} max-sm:text-[12px]`}
                >
                  {index === crumbs.length - 1 ? (
                    <span className={Classes["active_breadcrumbs"]}>
                      {crumb}
                    </span> // Current page - disabled link
                  ) : (
                    <Fragment>{crumb}</Fragment> // Clickable links
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

export { Breadcrumbs };
