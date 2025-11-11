import { Link, Params, useMatches } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../pages/RootLayout";
import Classes from "../utils/styles/Global.module.css";
import { Fragment } from "react/jsx-runtime";
import AboutPage from "../pages/about/AboutPage";

import OragnisationStructurePage from "../pages/about/organisation-structure-plan/OrganisationStructurePlan";

import { committeeCards } from "../data/about/committee-and-cells/committee-and-cells-data";
import CustomCommitteeDetailsPage from "./custom/CustomCommitteeDetailsPage";

import RecognitionApprovalsPage from "../pages/about/recognition-approval/RecognitionApprovalsPage";

import IqacPage from "../pages/about/iqac-overview/IqacPage";
import InstitutePage from "../pages/academics/institutes/InstitutePage";
import LeadershipAndGovernancePage from "../pages/about/leadership-and-governance/LeadershipAndGovernancePage";
import CommitteeAndCellsPage from "../pages/about/committee-and-cells/CommitteeAndCellsPage";
import NAACPage from "../pages/about/naac/NAACPage";
import NIRFPage from "../pages/about/nirf/NIRFPage";
import AcademicsPage from "../pages/academics/AcademicsPage";
import PoliciesReportsPage from "../pages/academics/policies-reports/PoliciesReportsPage";
import AcademicCalendarsPage from "../pages/academics/academic-calendars/AcademicCalendarsPage";
import TeachingLearningProcessPage from "../pages/academics/teaching-learning-process/TeachingLearningProcessPage";
import AcademicBankOfCreditPage from "../pages/academics/academic-bank-credit/AcademicBankOfCreditPage";
import EContentCellPage from "../pages/academics/e-content-cell/EContentCellPage";
import SwayamNptelPage from "../pages/academics/swayam-nptel/SwayamNptelPage";
import IirsIsroPage from "../pages/academics/iirs-isro/IirsIsroPage";
import CurriculumDesignPage from "../pages/academics/curriculum-design/CurriculumDesignPage";
import AdmissonsPage from "../pages/admissions/AdmissionPage";
import OverviewPage from "../pages/admissions/overview/OverviewPage";


interface IMatches {
    id: string;
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
                path: "/about",
                element: <AboutPage />,
                handle: {
                    crumb: () => <Link to="/about">About Us</Link>,
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
                            crumb: () => <Link to="/about/committees-and-cells">Committees and Cells</Link>,
                        },

                        children: committeeCards.map(card => ({
                            path: card.routeKey,
                            element: <CustomCommitteeDetailsPage committee={card} />,
                            handle: {
                                crumb: () => <a>{card.breadcrumb}</a>,
                            }
                        }))
                    },

                    {
                        path: "recognition-approvals",
                        element: <RecognitionApprovalsPage />,
                        handle: {
                            crumb: () => <Link to="/">
                                Approvals & Associations</Link>,
                        },
                    },
                    {
                        path: "iqac-overview",
                        element: <IqacPage />,
                        handle: {
                            crumb: () => <Link to="/">

                                IQAC Overview</Link>,
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
                    }
                ]
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
                            crumb: () => <Link to="/">
                                SWAYAM NPTEL Local Chapter</Link>,
                        },
                    },
                    {
                        path: "iirs-isro",
                        element: <IirsIsroPage />,
                        handle: {
                            crumb: () => <Link to="/">
                                IIRS – ISRO</Link>,
                        },
                    },
                    {
                        path: "curriculum-design",
                        element: <CurriculumDesignPage />,
                        handle: {
                            crumb: () => <Link to="/">
                                Curriculum Design
                            </Link>,
                        },
                    },

                ]
            },

            {
                path: "/admissions",
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

                ]
            },

        ]
    }
]

function Breadcrumbs() {
    let matches: IMatches[] = useMatches();

    const crumbs = matches
        .filter((match) => Boolean(match.handle && (match.handle as HandleType).crumb))
        .map((match) => {
            const crumb = (match.handle as HandleType).crumb(match.data as string | undefined);
            return crumb as React.ReactNode;
        });

    crumbs.length > 2 && crumbs.splice(1, 1);
    // console.log("crumbs", crumbs);
    // console.log("matches", matches[1].pathname);
    return (
        <section className={`banner-section ${matches[1].pathname === "/abhivyakti" ? "abhivyakt" : ""} flex items-center `}>
            <div className={`${Classes["container"]} `}>
                <div className={`${Classes["page-title-content"]}`}>
                    {/* <span className={`   text-[25px] sm:text-[40px] md:text-[54px] font-semibold text-white pointer-events-none`}>{crumbs[crumbs.length - 1]}</span> */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 flex flex-wrap  gap-[0.5rem] ">
                            {crumbs.map((crumb, index) => (
                                <li key={index} className={`${Classes["breadcrumb-item"]} max-sm:text-[12px]`}>
                                    {index === crumbs.length - 1 ? (
                                        <span className={Classes["active_breadcrumbs"]}>{crumb}</span> // Current page - disabled link
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