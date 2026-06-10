import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";
import { homePageSchema } from "../../data/home/homePageSchema";

import NewHome from "../../components/new-home/NewHome";

const HomePage: React.FC = () => {
  const pathname = useLocation().pathname
  return (
    <>
      <SeoHead
        title="Best Private University in Uttar Pradesh | Shri Ramswaroop Memorial University (SRMU)"
        description="Shri Ramswaroop Memorial University (SRMU), Lucknow-Dewa Road, Uttar Pradesh (U.P.), is one of India’s best private university that offers various undergraduate and postgraduate courses like B.Tech, BCA, BBA, B.Com, Law, MBA, M.Tech, Pharmacy, Biotechnology, Polytechnic, Agriculture and MCA."
        pathname={pathname}
        jsonLd={pathname === "/" ? homePageSchema : undefined}
      />

      {pathname === "/" ? <NewHome /> : <Outlet />}
    </>
  );
};

export default HomePage;    
