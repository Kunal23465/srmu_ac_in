import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Classes from "../../utils/styles/Global.module.css";

import {
  childBackgrounds,
  formatSegment,
  pageBackgrounds,
} from "../../data/breadcrum/breadcrum-data";

import { RootState } from "../../store";

export default function DynamicBreadcrumbs() {
  const location = useLocation();

  // ✅ Get blogs list
  const { data: blogCards } = useSelector(
    (state: RootState) => state.getAllBlogs
  );

  // 🔹 Generate path parts
  const pathParts = location.pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment.toLowerCase() !== "department");

  const fullPath = pathParts.join("/");

  // ✅ Detect Blog Page (supports both blog & blogs)
  const isBlogDetail =
    (pathParts[0] === "blog" || pathParts[0] === "blogs") &&
    pathParts.length > 1;

  const blogSlug = pathParts[1];

  // ✅ Find blog (case-insensitive match)
  const currentBlog = blogCards?.find(
    (item: any) =>
      item.slug?.toLowerCase() === blogSlug?.toLowerCase()
  );

  // 🔹 Breadcrumbs
  const crumbs = [
    <Link key="home" to="/">
      Home
    </Link>,
    ...pathParts.map((segment, index) => {
      const url = "/" + pathParts.slice(0, index + 1).join("/");

      return (
        <Link key={url} to={url}>
          {isBlogDetail && index === pathParts.length - 1
            ? currentBlog?.title || formatSegment(segment)
            : formatSegment(segment)}
        </Link>
      );
    }),
  ];

  // 🔹 Resolve Background Image
  let backgroundImg = "";

  // ✅ PRIORITY 1 → Blog Dynamic Image
  if (isBlogDetail && currentBlog?.imagePath) {
    backgroundImg = currentBlog.imagePath;
  }
  // ✅ PRIORITY 2 → Child Background
  else if (childBackgrounds[fullPath]) {
    backgroundImg = childBackgrounds[fullPath];
  }
  // ✅ PRIORITY 3 → Exact Page Match
  else if (pageBackgrounds[fullPath]) {
    backgroundImg = pageBackgrounds[fullPath];
  }
  // ✅ PRIORITY 4 → Parent Match
  else {
    const matchedParent = Object.keys(pageBackgrounds).find((key) =>
      fullPath.startsWith(key)
    );
    backgroundImg = matchedParent ? pageBackgrounds[matchedParent] : "";
  }

  // ✅ Fallback (important for refresh case)
  if (isBlogDetail && !currentBlog?.imagePath) {
    backgroundImg = pageBackgrounds["blogs"];
  }

  return (
   <section
      className={`banner-section ${
        location.pathname === "/online-admission" && "big-banner"
      } flex items-end pb-3 sm:pb-[45px] relative`}
      style={{
        backgroundImage: backgroundImg
          ? `url(${backgroundImg})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay - 50% black opacity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content with relative positioning and z-index */}
      <div className={`${Classes["container"]} relative z-10`}>
        <div className={Classes["page-title-content"]}>
          <nav aria-label="breadcrumb ml-4">
            <ol className="breadcrumb m-0 flex flex-wrap gap-2">
              {crumbs.map((crumb, index) => (
                <li
                  key={index}
                  className={`${Classes["breadcrumb-item"]} text-[10px]! sm:text-[12px]! uppercase`}
                >
                  {index === crumbs.length - 1 ? (
                    <span className={Classes["active_breadcrumbs"]}>
                      {crumb}
                    </span>
                  ) : (
                    <Fragment>{crumb}</Fragment>
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