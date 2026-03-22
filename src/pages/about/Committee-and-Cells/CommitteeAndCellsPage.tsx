import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import CommitteeAndCells from "../../../components/about/committee-and-cells/Committee-And-Cells";
import SeoHead from "../../../components/seo/SeoHead";

const CommitteeAndCellsPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <SeoHead
        title="Committees and Cells | Shri Ramswaroop Memorial University, Lucknow"
        description="Explore committees and cells at SRMU Lucknow for dynamic engagement, governance support, and academic guidance."
        pathname={location.pathname}
      />
      {location.pathname === "/committees-and-cells" ? (
        <CommitteeAndCells />
      ) : (
        <Outlet />
      )}

    </>
  );
};

export default CommitteeAndCellsPage;
