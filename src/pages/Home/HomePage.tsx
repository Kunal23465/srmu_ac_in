import React from "react";
// import Home from "../../components/home/Home";
import { Outlet, useLocation } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";
// import NewHome from "../../components/new-home/NewHome";
// import Home from "../../components/home/Home";
import NewHome from "../../components/new-home/NewHome";
// import Home from "../../components/home/Home";

const HomePage: React.FC = () => {
  const pathname = useLocation().pathname
  return (
    <>
      <SeoHead
        title="Best Private University in Uttar Pradesh | Shri Ramswaroop Memorial University (SRMU)"
        description="Shri Ramswaroop Memorial University (SRMU), Lucknow-Dewa Road, Uttar Pradesh (U.P.), is one of India’s best private university that offers various undergraduate and postgraduate courses like B.Tech, BCA, BBA, B.Com, Law, MBA, M.Tech, Pharmacy, Biotechnology, Polytechnic, Agriculture and MCA."
        pathname={pathname}
      />

      {pathname === "/" ? <NewHome /> : <Outlet />}
      {/* {pathname === "/" ? <Home /> : <Outlet />} */}

    </>
  );
};

export default HomePage;
