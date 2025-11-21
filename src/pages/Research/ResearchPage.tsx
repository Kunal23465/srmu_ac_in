import React from "react";
import Research from "../../components/research/Research";
import { Outlet, useLocation } from "react-router-dom";

const ResearchPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname == "/research" ? <Research /> : <Outlet />}</>;
};

export default ResearchPage;
