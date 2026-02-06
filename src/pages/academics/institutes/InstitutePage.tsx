import React from "react";
import Institutes from "../../../components/academics/institutes/Institutes";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const InstitutePage: React.FC = () => {
  const pathname = useLocation().pathname;

  return (
    <div>
      {pathname === "/academics" ? (
        <>
          <Helmet>
            <title>Institutes Program | Shri Ramswaroop Memorial University, Lucknow</title>
            <meta
              name="description"
              content="SRMU is committed to leveraging its wide-ranging facilities to world-class standards with a goal to provide the best academia and professional resources and to prepare students for global opportunities."
            />
          </Helmet>
          <Institutes />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default InstitutePage;
