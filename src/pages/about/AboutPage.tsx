import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import About from "../../components/about/about-us/About";

const AboutPage: React.FC = () => {
  const location = useLocation();

  return <>{location.pathname == "/about" ? <About /> : <Outlet />}</>;
};

export default AboutPage;
