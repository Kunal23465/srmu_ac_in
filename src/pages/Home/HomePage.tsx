import React from "react";
import Home from "../../components/home/Home";
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";

const HomePage: React.FC = () => {
    const pathname = useLocation().pathname
  return (
    <>
      <Helmet>
        <title>Shri Ramswaroop Memorial University | SRMU</title>
        <meta name="description" content="SRMU, one of the best universities in Lucknow, known for expert faculty, advanced learning, and excellent career opportunities." />
      </Helmet>

      {pathname === "/" ? <Home /> : <Outlet />}
      
    </>
  );
};

export default HomePage;
