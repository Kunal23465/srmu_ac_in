import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import Classes from "../../utils/styles/Global.module.css"

import { childBackgrounds, formatSegment, pageBackgrounds } from "../../data/breadcrum/breadcrum-data";

export default function DynamicBreadcrumbs() {
    const location = useLocation();

    //  Generate Dynamic Crumbs
    const pathParts = location.pathname
        .split("/")
        .filter(Boolean)
        .filter((segment) => segment.toLowerCase() !== "department");

    const crumbs = [
        <Link key="home" to="/">Home</Link>,
        ...pathParts.map((segment, index) => {
            const url = "/" + pathParts.slice(0, index + 1).join("/");
            return (
                <Link key={url} to={url}>
                    {formatSegment(segment)}
                </Link>
            );
        }),
    ];
    //  Resolve Background Image
    const fullPath = pathParts.join("/");

    let backgroundImg = "";

    if (childBackgrounds[fullPath]) {
        backgroundImg = childBackgrounds[fullPath];
    } else if (pageBackgrounds[fullPath]) {
        backgroundImg = pageBackgrounds[fullPath];
    } else {
        const matchedParent = Object.keys(pageBackgrounds).find((key) =>
            fullPath.startsWith(key)
        );
        backgroundImg = matchedParent ? pageBackgrounds[matchedParent] : "";
    }
    return (
        <section
            className={`banner-section ${location.pathname === "/online-admission" && "big-banner"} flex items-end pb-3 sm:pb-[45px]`}
            style={{
                backgroundImage: backgroundImg ? `url(${backgroundImg})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className={Classes["container"]}>
                <div className={Classes["page-title-content"]}>
                    <nav aria-label="breadcrumb ml-4">
                        <ol className="breadcrumb m-0 flex flex-wrap gap-2 ">
                            {crumbs.map((crumb, index) => {
                     
                                return (
                                    <li
                                        key={index}
                                        className={`${Classes["breadcrumb-item"]} text-[10px]! sm:text-[12px]! uppercase `}
                                    >
                                        {index === crumbs.length - 1 ? (
                                            <span className={Classes["active_breadcrumbs"]}>
                                                {crumb}
                                            </span>
                                        ) : (
                                            <Fragment>{crumb}</Fragment>
                                        )}
                                    </li>
                                )
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
}
