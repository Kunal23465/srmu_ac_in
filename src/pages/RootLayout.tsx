import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import whatsapp from "../assets/images/whatsapp-icon.png";
import DynamicBreadcrumbs from "../components/breadcrumb/DynamicBreadcrumbs";
import SeoHead from "../components/seo/SeoHead";
import { buildSiteSchema, getDefaultSeo, normalizePath } from "../utils/seo";
import Chatbot from "../components/Chatbot";

const Footer = lazy(() => import("../components/footer/Footer"));

const RootLayout: React.FC = () => {
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname);

  const isHomeRoute =
    normalizedPath === "/" || normalizedPath === "/new-home";

  const fallbackSeo = useMemo(
    () => getDefaultSeo(normalizedPath),
    [normalizedPath]
  );

  const siteSchema = useMemo(
    () => buildSiteSchema(normalizedPath),
    [normalizedPath]
  );

  const [showRightBar, setShowRightBar] = useState(false);
  const [shouldRenderFooter, setShouldRenderFooter] =
    useState(!isHomeRoute);
  const [hovered, setHovered] = useState<number | null>(null);

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  // Right sidebar visibility
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      setShowRightBar(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Footer lazy render
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    if (!isHomeRoute) {
      setShouldRenderFooter(true);
      return;
    }

    setShouldRenderFooter(false);

    const scheduleFooter = () => {
      setShouldRenderFooter(true);
    };

    const timeoutHandle = window.setTimeout(scheduleFooter, 2200);

    window.addEventListener("scroll", scheduleFooter, {
      once: true,
      passive: true,
    });

    window.addEventListener("pointerdown", scheduleFooter, {
      once: true,
      passive: true,
    });

    return () => {
      clearTimeout(timeoutHandle);
      window.removeEventListener("scroll", scheduleFooter);
      window.removeEventListener("pointerdown", scheduleFooter);
    };
  }, [isHomeRoute]);

  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/919120007948",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <>
      <SeoHead
        title={fallbackSeo.title}
        description={fallbackSeo.description}
        pathname={normalizedPath}
        jsonLd={siteSchema}
      />

      <Header />

      <main className="mt-[41px] lg:mt-[45px]">
        {!isHomeRoute && <DynamicBreadcrumbs />}
        <Outlet />
      </main>

      {shouldRenderFooter && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}

      {/* WhatsApp */}
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Contact SRMU on WhatsApp"
        className="fixed bottom-20 sm:bottom-10 left-4 z-[9999] rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <img
          src={whatsapp}
          alt="WhatsApp contact button"
          loading="eager"
          decoding="async"
          className="w-12 h-12"
        />
      </button>

      {/* Chatbot */}

      {/* <Chatbot /> */}

      {/* Right Side Bar */}
      <div
        className={`w-full sm:w-auto fixed bottom-0 z-[200] sm:top-[60%] sm:-right-[58px] flex sm:flex-col sm:gap-y-[124px] sm:-translate-y-1/2 transition-all duration-500 ease-in-out ${showRightBar ? "sm:translate-x-0" : "sm:translate-x-full"
          }`}
      >
        <a
          href="https://studentportal.srmu.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className={`w-full sm:w-auto sm:rotate-270 text-xs tracking-wider flex items-center justify-center bg-[#ffb703] text-black px-2 py-4 sm:py-3 shadow-xl transition-all duration-500 ${hovered === 2 ? "sm:scale-110" : ""
            }`}
        >
          Online Admission Form
        </a>

        <a
          href="/admission-enquiry-redirect"
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          className={`w-full sm:rotate-270 text-xs tracking-wider flex items-center justify-center bg-[#0c2f44] text-white px-2 py-4 sm:py-3 shadow-xl transition-all duration-500 ${hovered === 3 ? "sm:scale-110" : ""
            }`}
        >
          Admission Enquiry
        </a>
      </div>
    </>
  );
};

export default RootLayout;