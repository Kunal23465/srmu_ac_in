import { Navigate, useLocation } from "react-router-dom";
import { getPreferredProgramRouteSlug } from "../../../utils/legacyProgramRoutes";

/**
 * Redirects legacy direct program URLs (such as /b-tech-cse-cyber-security)
 * to their single canonical primary URL (/program/b-tech-cse-cyber-security).
 */
const DirectProgramDetailsPage = () => {
  const location = useLocation();
  const rawSlug = location.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  const canonicalSlug = getPreferredProgramRouteSlug(rawSlug) || rawSlug;

  return (
    <Navigate
      to={`/program/${canonicalSlug}${location.search}${location.hash}`}
      replace
    />
  );
};

export default DirectProgramDetailsPage;

