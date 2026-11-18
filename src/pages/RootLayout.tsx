import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
// import Header from "../components/new-header/new";
import whatsapp from "../assets/images/whatsapp-icon.png";
import DynamicBreadcrumbs from "../components/breadcrumb/DynamicBreadcrumbs";
import SeoHead from "../components/seo/SeoHead";
import { buildSiteSchema, getDefaultSeo, normalizePath } from "../utils/seo";

import Footer from "../components/footer/Footer";
import DepartmentFooter from "../components/footer/DepartmentFooter";
import GooglePreferredSourceButton from "../components/seo/GooglePreferredSourceButton";

const RootLayout: React.FC = () => {
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname);

  const isListedHomeRoute =
    normalizedPath === "/" || normalizedPath === "/new-home" || normalizedPath === "/b-tech-cse-cyber-security-new" || normalizedPath === "/bca-cyber-security-new" || normalizedPath === "/bca-data-science-artificial-intelligence-new" || normalizedPath === "/insider" || normalizedPath === "/b-tech-cse-data-science-new" || normalizedPath === "/department-of-computer-science-and-engineering-new" || normalizedPath === "/institute-of-pharmacy-new" || normalizedPath === "/department-of-biosciences-and-technology-new" || normalizedPath === "/b-tech-mechanical-engineering-new" || normalizedPath === "/b-tech-ece-semiconductor-design-new" || normalizedPath === "/event-new" || normalizedPath === "/eligibility" || normalizedPath === "/green-initiative-new" || normalizedPath === "/facilities-new" || normalizedPath === "/convocation-new" || normalizedPath === "/women-empowerment-new" || normalizedPath === "/outreach-activations-new" || normalizedPath === "/student-senate-new" || normalizedPath === "/student-corner-new" || normalizedPath === "/grievance-redressal-system-new" || normalizedPath === "/clubs-new" || normalizedPath === "/department-of-electrical-and-electronics-engineering-new" || normalizedPath === "/faculty-of-chemical-sciences-new" || normalizedPath === "/institute-of-allied-health-sciences-new" || normalizedPath === "/department-of-mechanical-engineering-new" || normalizedPath === "/department-of-civil-engineering-new" || normalizedPath === "/faculty-of-commerce-and-economics-new" || normalizedPath === "/faculty-of-management-new" || normalizedPath === "/institute-of-agricultural-sciences-and-technology-new" || normalizedPath === "/institute-of-media-studies-new" || normalizedPath === "/institute-of-legal-studies-new" || normalizedPath === "/faculty-of-mathematical-and-statistical-sciences-new" || normalizedPath === "/srmu-polytechnic-new" || normalizedPath === "/institute-of-pharmaceutical-sciences-new" || normalizedPath === "/faculty-of-biotechnology-new" || normalizedPath === "/institute-of-education-and-research-new" || normalizedPath === "/institute-of-natural-sciences-and-humanities-new" || normalizedPath === "/institute-of-technology-new" || normalizedPath === "/department-of-computer-science-and-information-systems-new" || normalizedPath === "/faculty-of-biosciences-new" || normalizedPath === "/bba-ai-augmented-fintech-new" || normalizedPath === "/bba-business-analytics-with-design-new";

  
    // normalizedPath === "/" || normalizedPath === "/new-home" || normalizedPath === "/b-tech-cse-cyber-security-new" || normalizedPath === "/bca-cyber-security-new" || normalizedPath === "/bca-data-science-artificial-intelligence-new" || normalizedPath === "/insider" || normalizedPath === "/b-tech-cse-data-science-new" || normalizedPath === "/department-of-computer-science-and-engineering-new" || normalizedPath === "/institute-of-pharmacy-new" || normalizedPath === "/department-of-biosciences-and-technology-new" || normalizedPath === "/b-tech-mechanical-engineering-new" || normalizedPath === "/b-tech-ece-semiconductor-design-new" || normalizedPath === "/event-new" || normalizedPath === "/eligibility" || normalizedPath === "/green-initiative-new" || normalizedPath === "/facilities-new" || normalizedPath === "/convocation-new" || normalizedPath === "/women-empowerment-new" || normalizedPath === "/outreach-activations-new" || normalizedPath === "/student-senate-new" || normalizedPath === "/student-corner-new" || normalizedPath === "/grievance-redressal-system-new" || normalizedPath === "/clubs-new" || normalizedPath === "/department-of-electrical-and-electronics-engineering-new" || normalizedPath === "/faculty-of-chemical-sciences-new" || normalizedPath === "/institute-of-allied-health-sciences-new" || normalizedPath === "/department-of-mechanical-engineering-new" || normalizedPath === "/department-of-civil-engineering-new" || normalizedPath === "/faculty-of-commerce-and-economics-new" || normalizedPath === "/faculty-of-management-new" || normalizedPath === "/institute-of-agricultural-sciences-and-technology-new" || normalizedPath === "/institute-of-media-studies-new" || normalizedPath === "/institute-of-legal-studies-new" || normalizedPath === "/faculty-of-mathematical-and-statistical-sciences-new" || normalizedPath === "/srmu-polytechnic-new" || normalizedPath === "/institute-of-pharmaceutical-sciences-new" || normalizedPath === "/faculty-of-biotechnology-new" || normalizedPath === "/institute-of-education-and-research-new" || normalizedPath === "/institute-of-natural-sciences-and-humanities-new" || normalizedPath === "/institute-of-technology-new" || normalizedPath === "/department-of-computer-science-and-information-systems-new" || normalizedPath === "/faculty-of-biosciences-new" || normalizedPath === "/bba-business-analytics-with-design-new";

  const isHomeRoute = isListedHomeRoute || normalizedPath === "/diploma-civil-engineering-new" || normalizedPath === "/diploma-mechanical-engineering-production-new" || normalizedPath === "/diploma-mechanical-engineering-automobile-new" || normalizedPath === "/diploma-electrical-engineering-new" || normalizedPath === "/diploma-computer-science-engineering-new" || normalizedPath === "/diploma-electronics-communication-engineering-new";

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

  // Navigate to the requested section when a route includes a hash.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    let frame = 0;
    let attempts = 0;
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts++ < 120) {
        frame = window.requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

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
    <div className={normalizedPath === "/event-new" ? "overflow-x-clip" : undefined}>
      <SeoHead
        title={fallbackSeo.title}
        description={fallbackSeo.description}
        pathname={normalizedPath}
        jsonLd={siteSchema}
      />

      {normalizedPath !== "/insider" && <Header />}

      <main className={`$ {normalizedPath == "/insider" ? "" : "mt-[41px] lg:mt-[45px]"}`}>
        {!isHomeRoute && normalizedPath !== "/green-initiative-new" && normalizedPath !== "/about-us-new" && <DynamicBreadcrumbs />}
        <Outlet />
      </main>

      {shouldRenderFooter && normalizedPath !== "/insider" && normalizedPath !== "/department-of-computer-science-and-engineering-new" && normalizedPath !== "/institute-of-pharmacy-new" && normalizedPath !== "/department-of-biosciences-and-technology-new" && normalizedPath !== "/facilities-new" && normalizedPath !== "/faculty-of-commerce-and-economics-new" && normalizedPath !== "/department-of-electrical-and-electronics-engineering-new" && normalizedPath !== "/faculty-of-chemical-sciences-new" && normalizedPath !== "/institute-of-allied-health-sciences-new" && normalizedPath !== "/department-of-mechanical-engineering-new" && normalizedPath !== "/department-of-civil-engineering-new" && normalizedPath !== "/faculty-of-management-new" && normalizedPath !== "/institute-of-agricultural-sciences-and-technology-new" && normalizedPath !== "/institute-of-media-studies-new" && normalizedPath !== "/institute-of-legal-studies-new" && normalizedPath !== "/faculty-of-mathematical-and-statistical-sciences-new" && normalizedPath !== "/srmu-polytechnic-new" && normalizedPath !== "/institute-of-pharmaceutical-sciences-new" && normalizedPath !== "/faculty-of-biotechnology-new" && normalizedPath !== "/institute-of-education-and-research-new" && normalizedPath !== "/institute-of-natural-sciences-and-humanities-new" && normalizedPath !== "/institute-of-technology-new" && normalizedPath !== "/department-of-computer-science-and-information-systems-new" && normalizedPath !== "/faculty-of-biosciences-new" && <Footer />}
      {(normalizedPath === "/facilities-new" || normalizedPath === "/institute-of-technology-new") && <DepartmentFooter />}
      {normalizedPath !== "/insider" && <GooglePreferredSourceButton />}

      {/* WhatsApp */}
      {normalizedPath !== "/insider" && <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Contact SRMU on WhatsApp"
        className="hidden sm:block fixed bottom-20 sm:bottom-10 left-4 z-[9999] rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <img
          src={whatsapp}
          alt="WhatsApp contact button"
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          className="w-12 h-12"
        />
      </button>
      }

      {/* Chatbot */}

      {/* <Chatbot /> */}

      {/* Right Side Bar */}
      {normalizedPath !== "/insider" && <div
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
          href="/admission-enquiry"
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          className={`w-full sm:rotate-270 text-xs tracking-wider flex items-center justify-center bg-[#0c2f44] text-white px-2 py-4 sm:py-3 shadow-xl transition-all duration-500 ${hovered === 3 ? "sm:scale-110" : ""
            }`}
        >
          Admission Enquiry
        </a>
      </div>
      }
    </div>
  );
};

export default RootLayout;
