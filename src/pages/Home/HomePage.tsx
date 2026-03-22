import React from "react";
import Home from "../../components/home/Home";
import { Outlet, useLocation } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";

const HomePage: React.FC = () => {
    const pathname = useLocation().pathname
  return (
    <>
      <SeoHead
        title="Best University in Lucknow | Shri Ramswaroop Memorial University (SRMU)"
        description="Shri Ramswaroop Memorial University (SRMU) is a leading private university in Lucknow offering BTech, MBA, BBA, BCA, pharmacy, law, agriculture, and other UG, PG, and PhD programs with strong academics and career opportunities."
        pathname={pathname}
      />

      {pathname === "/" ? <Home /> : <Outlet />}
      
    </>
  );
};

export default HomePage;
