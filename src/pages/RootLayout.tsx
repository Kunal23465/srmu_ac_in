import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import { Breadcrumbs } from "../utils/AllRoutes";
import Footer from "../components/footer/Footer";
import whatsapp from "../assets/images/whatsapp-icon.png";
import chatbot from "../assets/images/bot-icon-squirrel-90.png";
import bgImg from "../assets/images/chat-bg.jpg";

import { FaTimes } from "react-icons/fa";

const RootLayout: React.FC = () => {
  const location = useLocation();
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const toggleChat = () => {
    setOpenChat((prev) => !prev);
  };

  return (
    <>
      <Header />

      <main className="mt-[41px] lg:mt-[45px]">
        {location.pathname !== "/" && <Breadcrumbs />}
        <Outlet />
      </main>

      <Footer />

      {/* ================= WHATSAPP ICON ================= */}
      <a
        href="https://wa.me/9120007948"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-32 left-6 z-50 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <img src={whatsapp} className="w-14 h-14" />
      </a>

      {/* ================= CHAT POPUP ================= */}
      {openChat && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] rounded-xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="bg-red-700 text-white flex justify-between items-center px-4 py-3">
            <h3 className="font-semibold">Chat Assistant</h3>
            <button onClick={toggleChat}>
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

            <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md">Start Chat</button>
          </div>
        </div>
      )}

      {/* ================= BOT / CROSS + TOOLTIP ================= */}
      <button onClick={toggleChat} className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        {!openChat && (
          <div className="relative mr-2">
            <div className="bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md whitespace-nowrap">
              Let's Clear the Doubts <br />
              <span className="text-xs font-normal">Chat with Us Instantly!</span>
            </div>

            {/* arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-red-700 rotate-45"></div>
          </div>
        )}

        <div className="bg-white p-4 rounded-full shadow-lg hover:bg-red-800 hover:scale-110 transition-all duration-300">
          {openChat ? <FaTimes className="text-red-800" size={22} /> : <img src={chatbot} className="w-8" />}
        </div>
      </button>

      {/* ============= RIGHT SIDE FIXED SLIDERS ============= */}
      <div className="fixed top-1/2 right-0 z-40 flex flex-col gap-3 -translate-y-1/2">
        {/* Admission Enquiry */}
        <a href="/admission-enquiry" className="group flex items-center justify-center bg-[#0c2f44] text-white p-2  rounded-l-md shadow-lg transition-all duration-500">
          <span className="rotate-180 writing-mode-vertical text-sm tracking-wider">Admission Enquiry</span>
        </a>

        {/* Online Admission Form */}
        <a
          href="https://studentportal.srmu.ac.in/login"
          className="group flex items-center justify-center bg-[#fbbf24] text-black  p-2 rounded-l-md shadow-lg transition-all duration-500"
        >
          <span className="rotate-180 writing-mode-vertical text-xs font-semibold tracking-wider">Online Admission Form</span>
        </a>

        {/* Scholarship Details */}
        <a href="/admission/scholarship-scheme" className="group flex items-center justify-center bg-[#0c2f44] p-2 text-white rounded-l-md shadow-lg transition-all duration-500">
          <span className="rotate-180 writing-mode-vertical text-sm tracking-wider">Scholarship Details</span>
        </a>
      </div>
    </>
  );
};

export default RootLayout;
