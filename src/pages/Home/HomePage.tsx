import React from "react";
import Home from "../../components/home/Home";
import { Outlet, useLocation } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";

const HomePage: React.FC = () => {
    const pathname = useLocation().pathname
  return (
    <>
      <SeoHead
        title="Shri Ramswaroop Memorial University | SRMU"
        description="SRMU, one of the best university in Lucknow, known for expert faculty, advanced learning, and excellent career opportunities."
        pathname={pathname}
      />

      {pathname === "/" ? <Home /> : <Outlet />}
      
    </>
  );
};

export default HomePage;
