import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import About from "../../components/about/about-us/About";
import { Helmet } from "react-helmet-async";

const AboutPage: React.FC = () => {
  const location = useLocation();

  return <>
    <Helmet>
      <title>About SRMU | Vision &amp; Mission | Core Values | Fountainhead of Inspiration | Kulgeet</title>
      <meta name="description" content="Our journey began in 1999, with just 22 students and an unwavering commitment to quality education. SRMU is committed to building a transformative learning experience for all." />
    </Helmet>
    {location.pathname == "/about" ? <About /> : <Outlet />}
  </>;
};

export default AboutPage;
