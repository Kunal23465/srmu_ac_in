import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PlacementOverview from "../../components/placement/placement-overview/PlacementOverview";
import { Helmet } from "react-helmet-async";

const PlacementPage: React.FC = () => {
  const location = useLocation();

  return <>{location.pathname == "/placements" ? <><Helmet> <title>Placement Overview | Shri Ramswaroop Memorial University, Lucknow</title>
    <meta name="description" content="Over the years, our students have landed top-tier opportunities in leading companies. Our recruitment partners include a wide range of industry leaders, across disciplines, fields, and professional landscapes." /></Helmet><PlacementOverview /> </>  : <Outlet />}</>;
};

export default PlacementPage;
