import React, { Suspense, lazy, startTransition, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import whatsapp from "../assets/images/whatsapp-icon.png";
import DynamicBreadcrumbs from "../components/breadcrumb/DynamicBreadcrumbs";
import SeoHead from "../components/seo/SeoHead";
import { buildSiteSchema, getDefaultSeo, normalizePath } from "../utils/seo";

const Chatbot = lazy(() => import("../components/Chatbot"));

const RootLayout: React.FC = () => {
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname);
  const fallbackSeo = useMemo(() => getDefaultSeo(normalizedPath), [normalizedPath]);
  const siteSchema = useMemo(() => buildSiteSchema(normalizedPath), [normalizedPath]);

  const [showRightBar, setShowRightBar] = useState(false);
  const [shouldRenderChatbot, setShouldRenderChatbot] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  // Scroll to top on page change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  // RIGHT SIDE BAR SHOW/HIDE ON SCROLL
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 10) setShowRightBar(true);
      else setShowRightBar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    if (typeof window === "undefined") return;

    window.open("https://wa.me/919120007948", "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const scheduleChatbot = () => {
      startTransition(() => {
        setShouldRenderChatbot(true);
      });
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    if (typeof idleWindow.requestIdleCallback === "function") {
      idleHandle = idleWindow.requestIdleCallback(scheduleChatbot, { timeout: 5000 });
    } else {
      timeoutHandle = window.setTimeout(scheduleChatbot, 2500);
    }

    return () => {
      if (idleHandle !== null && typeof idleWindow.cancelIdleCallback === "function") {
        idleWindow.cancelIdleCallback(idleHandle);
      }

      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  return (
    <>
      <SeoHead title={fallbackSeo.title} description={fallbackSeo.description} pathname={normalizedPath} jsonLd={siteSchema} />
      <Header />

      <main className="mt-[41px] lg:mt-[45px]">
        {location.pathname !== "/" && <DynamicBreadcrumbs />}

        <Outlet />
      </main>

      <Footer />

      {/* ================= WHATSAPP ICON ================= */}
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Contact SRMU on WhatsApp"
        className="fixed bottom-12 sm:bottom-10 left-6  z-9999! rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <img src={whatsapp} alt="WhatsApp contact button" loading="eager" decoding="async" className="w-14 h-14" />
      </button>

      {/* ================= CHAT POPUP ================= */}
      {/* {openChat && (
        <div className="fixed bottom-24 right-6 z-9999 w-[350px] rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-[#dfa000] text-white flex justify-between items-center px-4 py-3">
            <h2 className="font-semibold">Chat Assistant</h2>
            <button className="cursor-pointer" onClick={toggleChat}>
              <FaTimes size={18} />
            </button>
          </div>

          <div
            className="p-4 space-y-4"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" placeholder="Enter your name" className="bg-white w-full mt-1 px-3 py-2 rounded-md focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" placeholder="Enter your email" className="bg-white w-full mt-1 px-3 py-2 rounded-md focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">Mobile</label>
              <input type="text" placeholder="Enter your mobile number" className="bg-white w-full mt-1 px-3 py-2 rounded-md focus:outline-none" />
            </div>

            <button className="w-full bg-[#ffb703] hover:bg-[#dfa000] text-white py-2 rounded-md">Start Chat</button>
          </div>
        </div>
      )} */}

      {/* ================= BOT BUTTON ================= */}
      {/* <button onClick={toggleChat} className="fixed bottom-12 sm:bottom-6 right-6 z-200 flex items-center gap-2">
        {!openChat && (
          <div className="relative mr-2">
            <div className="bg-[#ffb703] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md whitespace-nowrap">
              Let's Clear the Doubts <br />
              <span className="text-xs font-normal">Chat with Us Instantly!</span>
            </div>

           
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#ffb703] rotate-45"></div>
          </div>
        )}

        <div className={`${!openChat ? "bg-white" : "bg-[#dfa000]"} p-4 rounded-full shadow-lg hover:bg-[#dfa000] hover:scale-110 transition-all duration-300`}>
          {openChat ? <FaTimes className="text-white" size={22} /> : <img src={chatbot} alt="Open chat assistant" className="w-8" />}
        </div>
      </button> */}
      {shouldRenderChatbot ? (
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      ) : null}
      {/* ============= RIGHT SIDE SLIDERS (SHOW ON SCROLL) ============= */}
      <div
        className={`
          w-full sm:w-auto  fixed bottom-0 z-200 sm:top-[60%] sm:-right-[58px] flex sm:flex sm:flex-col sm:gap-y-[124px] sm:-translate-y-1/2 transition-all duration-500 ease-in-out ${showRightBar ? "sm:translate-x-0" : "sm:translate-x-full"
          }
  `}
      >
        {/* Admission Enquiry */}
        {/* <a
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          href="/admission-enquiry-redirect"
          rel="nofollow noreferrer"
          className={`
    w-full sm:w-auto sm:rotate-270 writing-mode-horizontal sm:writing-mode-vertical relative z-400
    text-xs tracking-wider group flex items-center justify-center
    bg-[#0c2f44] text-white px-2 py-3 sm:rounded-t-md shadow-xl
    transition-all duration-500

    ${hovered === 1 ? "sm:scale-110" : ""}
    ${hovered === 2 ? "sm:-translate-y-2" : ""}
    ${hovered === 3 ? "sm:-translate-y-2" : ""}
  `}
        >
          <span>Admission Enquiry</span>
        </a> */}

        {/* Online Admission Form */}
        <a
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          target="_blank"
          href="https://studentportal.srmu.ac.in/"
          rel="nofollow noreferrer"
          className={`
    w-full sm:w-auto sm:rotate-270 writing-mode-horizontal sm:writing-mode-vertical relative z-400
    text-xs tracking-wider group flex items-center justify-center
    bg-[#ffb703] text-black px-2 py-3 sm:rounded-t-md shadow-xl
    transition-all duration-500

    ${hovered === 2 ? "sm:scale-110" : ""}
    ${hovered === 1 ? "sm:translate-y-2" : ""}
    ${hovered === 3 ? "sm:-translate-y-2" : ""}
  `}
        >
          <span>Online Admission Form</span>
        </a>

        {/* Scholarship Details */}
        <a
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          href="/scholarship-scheme"
          className={`
    w-full sm:rotate-270 writing-mode-horizontal sm:writing-mode-vertical relative z-400
    text-xs tracking-wider items-center justify-center
    bg-[#0c2f44] text-white px-2 py-3 sm:rounded-t-md shadow-xl
    transition-all duration-500

    ${hovered === 3 ? "sm:scale-110" : ""}
    ${hovered === 1 ? "sm:translate-y-2" : ""}
    ${hovered === 2 ? "sm:translate-y-2" : ""}
  `}
        >
          <span>Scholarship Details</span>
        </a>
      </div>
    </>
  );
};

export default RootLayout;
