import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import { Breadcrumbs } from "../utils/AllRoutes";

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
      <main className="mt-[51px]">
        {location.pathname !== "/" && <Breadcrumbs />}
        <Outlet />
      </main>
      <h1 className=" font-semibold">Footer</h1>
    </>
  );
};

export default RootLayout;
