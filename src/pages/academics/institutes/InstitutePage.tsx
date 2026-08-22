import React from "react";
import Institutes from "../../../components/academics/institutes/Institutes";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const InstitutePage: React.FC = () => {
  const pathname = useLocation().pathname;

  return (
    <div>
      {pathname === "/institutes-info" ? (
        <>
          <Helmet>
            <title>Institutes Program | Shri Ramswaroop Memorial University, Lucknow</title>
            <meta
              name="description"
              content="Explore SRMU institutes, faculties, departments and programmes offering industry-focused learning and quality education."
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
