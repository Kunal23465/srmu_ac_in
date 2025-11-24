import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import { Breadcrumbs } from "../utils/AllRoutes";
import Footer from "../components/footer/Footer";

const RootLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <Header />
      <main className="mt-[41px] lg:mt-[45px]">
        {location.pathname !== "/" && <Breadcrumbs />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
