import { Link, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Classes from "../../utils/styles/Global.module.css";

import {
  childBackgrounds,
  formatSegment,
  pageBackgrounds,
} from "../../data/breadcrum/breadcrum-data";

import { RootState, AppDispatch } from "../../store";
import { fetchBlogs } from "../../store/blogs/blogsThunk";

// ✅ Bulletproof CSS url() encoder — handles ANY filename
const safeCssUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    urlObj.pathname = urlObj.pathname
      .split("/")
      .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
      .join("/");
    return urlObj.toString();
  } catch {
    return encodeURI(url)
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/'/g, "%27")
      .replace(/!/g, "%21")
      .replace(/#/g, "%23");
  }
};

// ✅ Convert any title to URL-friendly slug
const titleToSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export default function DynamicBreadcrumbs() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  // ✅ Get blogs list + loading state
  const { data: blogCards, loading } = useSelector(
    (state: RootState) => state.getAllBlogs
  );

  // ✅ Ensure blogs are loaded (handles refresh / direct URL / incognito)
  useEffect(() => {
    if (!blogCards || blogCards.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogCards]);

  // 🔹 Generate path parts — hide "department" and "program" from breadcrumb
  const pathParts = location.pathname
    .split("/")
    .filter(Boolean)
    .filter(
      (segment) =>
        segment.toLowerCase() !== "department" &&
        segment.toLowerCase() !== "program"
    );

  const fullPath = pathParts.join("/");

  // ✅ Detect Blog Page (supports both blog & blogs)
  const isBlogDetail =
    (pathParts[0] === "blog" || pathParts[0] === "blogs") &&
    pathParts.length > 1;

  const blogSlug = pathParts[1];

  // ✅ Find blog — by slug first, then fallback to title-based slug
  const currentBlog = blogCards?.find((item: any) => {
    if (item.slug) {
      return item.slug.toLowerCase() === blogSlug?.toLowerCase();
    }
    if (item.title) {
      return titleToSlug(item.title) === blogSlug?.toLowerCase();
    }
    return false;
  });

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

  // ✅ PRIORITY 1 → Blog Dynamic Image from API
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

  // ✅ Fallback — ONLY when data is fully loaded but image is still missing
  if (isBlogDetail && !currentBlog?.imagePath && !loading) {
    backgroundImg = pageBackgrounds["blogs"] || "";
  }

  return (
    <section
      className={`banner-section ${
        location.pathname === "/online-admission" && "big-banner"
      } flex items-end pb-3 sm:pb-[45px] relative`}
      style={{
        backgroundImage: backgroundImg
          ? `url(${safeCssUrl(backgroundImg)})`
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
            <ol className="breadcrumb m-0 flex flex-wrap gap-2 px-4">
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