import { Link, Params, useMatches } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../pages/RootLayout";
import Classes from "../utils/styles/Global.module.css";
import { Fragment } from "react/jsx-runtime";
import AboutPage from "../pages/About/AboutPage";
import LeadershipAndGovernancePage from "../pages/About/Leadership-and-Governance/LeadershipAndGovernancePage";
import CommitteeAndCellsPage from "../pages/About/Committee-and-Cells/CommitteeAndCellsPage";
import NAACPage from "../pages/About/NAAC/NAACPage";
import NIRFPage from "../pages/About/NIRF/NIRFPage";
import OragnisationStructurePage from "../pages/About/Organisation -Structure-Plan/OrganisationStructurePlan";
import AcademicsPage from "../pages/Academics/AcademicsPage";
import PoliciesReportsPage from "../pages/Academics/Policies-Reports/PoliciesReportsPage";

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
                            crumb: () => <Link to="/">Committees and Cells</Link>,
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
                        path: "policies-reports",
                        element: <PoliciesReportsPage />,
                        handle: {
                            crumb: () => <Link to="/">Policies & Reports</Link>,
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