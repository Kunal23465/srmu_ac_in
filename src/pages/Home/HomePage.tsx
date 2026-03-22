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
        description="Study at Shri Ramswaroop Memorial University (SRMU), a leading private university in Lucknow offering BTech, MBA, BBA, BCA and more."
        pathname={pathname}
      />

      {pathname === "/" ? <Home /> : <Outlet />}
      
    </>
  );
};

export default HomePage;
