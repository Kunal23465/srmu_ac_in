import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import About from "../../components/about/about-us/About";
import SeoHead from "../../components/seo/SeoHead";

const AboutPage: React.FC = () => {
  const location = useLocation();

  return <>
    <SeoHead
      title="About SRMU | Vision & Mission | Core Values | Fountainhead of Inspiration | Kulgeet"
      description="Our journey began in 1999, with just 22 students and an unwavering commitment to quality education. SRMU is committed to building a transformative learning experience for all."
      pathname={location.pathname}
    />
    {location.pathname == "/about-us" ? <About /> : <Outlet />}
  </>;
};

export default AboutPage;
