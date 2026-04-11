import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import SeoHead from "../../../components/seo/SeoHead";

const CommittePage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <SeoHead
        title="Committees and Cells | Shri Ramswaroop Memorial University, Lucknow"
        description="Explore committees and cells at SRMU Lucknow for dynamic engagement, governance support, and academic guidance."
        pathname={location.pathname}
      />
    
        <Outlet />
      

    </>
  );
};




export default CommittePage
