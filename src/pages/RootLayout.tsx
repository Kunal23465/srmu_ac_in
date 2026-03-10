import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
// @ts-ignore
import { Breadcrumbs } from "../utils/AllRoutes";
import Footer from "../components/footer/Footer";
import whatsapp from "../assets/images/whatsapp-icon.png";
// import chatbot from "../assets/images/output-onlinepngtools.png";
import bgImg from "../assets/images/chat-bg.jpg";
import { FaTimes } from "react-icons/fa";
import DynamicBreadcrumbs from "../components/breadcrumb/DynamicBreadcrumbs";
import Chatbot from "../components/Chatbot";

const RootLayout: React.FC = () => {
  const location = useLocation();

  const [openChat, setOpenChat] = useState(false);
  const [showRightBar, setShowRightBar] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  // RIGHT SIDE BAR SHOW/HIDE ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setShowRightBar(true);
      else setShowRightBar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => setOpenChat((prev) => !prev);

  return (
    <>
      <Header />

      <main className="mt-[41px] lg:mt-[45px]">
        {location.pathname !== "/" && <DynamicBreadcrumbs />}

        <Outlet />
      </main>

      <Footer />

      {/* ================= WHATSAPP ICON ================= */}
      <a
        href="https://wa.me/9120007948"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-14 left-6  z-9999! rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <img src={whatsapp} className="w-14 h-14" />
      </a>

      {/* ================= CHAT POPUP ================= */}
      {openChat && (
        <div className="fixed bottom-24 right-6 z-9999 w-[350px] rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-[#dfa000] text-white flex justify-between items-center px-4 py-3">
            <h3 className="font-semibold">Chat Assistant</h3>
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
      )}

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
          {openChat ? <FaTimes className="text-white" size={22} /> : <img src={chatbot} className="w-8" />}
        </div>
      </button> */}
      <Chatbot />
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
          href="https://admissionenquiry.srmu.ac.in/"
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
          href="https://studentportal.srmu.ac.in/login"
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
          href="/admission/scholarship-scheme"
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
