import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import CommitteeAndCells from "../../../components/about/committee-and-cells/Committee-And-Cells";

const CommitteeAndCellsPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/about/committees-and-cells" ? (
        <CommitteeAndCells />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default CommitteeAndCellsPage;
