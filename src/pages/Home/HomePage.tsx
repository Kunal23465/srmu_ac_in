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
        <meta name="description" content="Shri Ramswaroop Memorial University is located in Lucknow-Deva Road, Barabanki, Uttar Pradesh, India. SRMU takes pride in its excellent faculty hailing from leading central universities and premier institutes like IIT(s) and NIT(s) etc." />
      </Helmet>

      {pathname === "/" ? <Home /> : <Outlet />}
      
    </>
  );
};

export default HomePage;
