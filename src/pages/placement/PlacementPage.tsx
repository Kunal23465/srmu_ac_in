import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PlacementOverview from "../../components/placement/placement-overview/PlacementOverview";
const PlacementPage: React.FC = () => {
  const location = useLocation();

  return <>{location.pathname == "/placement-overview" ? <PlacementOverview />   : <Outlet />}</>;
};

export default PlacementPage;
