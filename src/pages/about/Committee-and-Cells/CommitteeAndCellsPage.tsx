import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import CommitteeAndCells from "../../../components/about/committee-and-cells/Committee-And-Cells";
import { Helmet } from "react-helmet-async";

const CommitteeAndCellsPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Committees and Cells | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Explore Committees and Cells at SRMU Lucknow for dynamic engagement and academic support." />
      </Helmet>
      {location.pathname === "/about-us/committees-and-cells" ? (
        <CommitteeAndCells />
      ) : (
        <Outlet />
      )}

    </>
  );
};

export default CommitteeAndCellsPage;
