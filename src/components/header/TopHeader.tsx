import Classes from "../../utils/styles/Global.module.css";
import { IoCallSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/images/whatsapp-icon.png";
import srmuSetLogo from "../../assets/images/SRMU-SET-Logo.png";

const TopHeader: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 592);
    };

    handleResize(); // initial check

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${Classes["top_header"]} text-white bg-[#E5E4E2] lg:bg-[#0f4a85] text-[0.84rem]`}
    >
      <div className={`${isDesktop ? Classes["container"] : ""}`}>
        {/* DESKTOP HEADER */}
        <div className="hidden lg:flex justify-between ">
          <div className="left-part flex items-center">
            <ul className="flex items-center text-xs xl:text-[13px] flex-row">
            </ul>
          </div>


          <div className="right-part flex gap-0 items-stretch">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919120007948"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-x-2 px-3 xl:px-4 text-white text-xs xl:text-[13px] after:absolute after:right-0 after:top-1/2 after:h-[55%] after:w-px after:-translate-y-1/2 after:bg-white/50"
              aria-label="Contact SRMU on WhatsApp"
            >
              <img src={whatsapp} alt="WhatsApp" width={16} height={16} loading="eager" decoding="async" className="w-4 h-4" />
              <div className="flex flex-col text-start">
                <span>WhatsApp</span>
                <span className="text-[11px] font-normal">919120007948</span>
              </div>
            </a>

            {/* Phone Helpline */}
            <button className="relative flex items-center px-4 py-[5px] gap-2 after:absolute after:right-0 after:top-1/2 after:h-[55%] after:w-px after:-translate-y-1/2 after:bg-white/50">
              <a href="tel:18001026004" className="text-[#FFB703]" aria-label="Call Admission Helpline 18001026004">
                <IoCallSharp className="text-[1.5rem]" />
              </a>
              <div className="flex flex-col text-start leading-none gap-0">
                <p className="text-[11px] font-normal text-white">Admission Toll Free</p>
                <p className="text-[13px] text-white">18001026004</p>
              </div>
            </button>

            {/* SRMUSET Logo */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://students.srmu.ac.in/login"
              className="flex items-center justify-center px-3 xl:px-4"
            >
              <img src="/settt-img.png" alt="SRMUSET Logo" className="h-[22px] w-auto" />
            </Link>

            {/* <Link
              target="_blank"

              rel="noopener noreferrer"

              to="https://studentportal.srmu.ac.in"
              className="bg-[#FFB703] hover:bg-white px-4 text-[13px] font-medium uppercase border border-[#ffb703] py-[0.875rem] flex items-center text-black"
            >
              Apply Now
            </Link> */}
            {/* 
            <Link
              target="_blank"
              rel="nofollow noopener noreferrer"
              to="https://phdadmission.srmu.ac.in/"
              className="bg-[#FFB703] hover:bg-white px-2 xl:px-4 text-xs xl:text-[13px] font-medium uppercase border border-[#ffb703] py-[0.875rem] flex items-center text-black"
            >
              Ph.D Admission 2026
            </Link> */}

            {/* <Link
              target="_blank"
              to="https://convocation.srmu.ac.in"

              className={`${Classes["convocation_blink"]} bg-white hover:bg-[#FFB703] hover:border-[#fff] px-4 text-[13px] font-medium uppercase border border-[#ccc] py-[0.875rem] flex items-center text-black`}
            >
              Convocation 2026
            </Link> */}
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex lg:hidden justify-between">
          <div className="left-part flex items-center ml-2">
          </div>

          <div className="right-part flex items-center">
            <div className="flex gap-1">
              {/* <div className="py-3 border-l border-[#ccc] px-2">
                <GrSearch size={24} className="text-[#666]" />
              </div> */}

              <a
                href="https://wa.me/919120007948"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 flex items-center border-l border-[#ccc] pl-2 pr-1"
                aria-label="Contact SRMU on WhatsApp"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="tel:18001026004"
                className="py-1 flex items-center border-l border-r border-[#ccc] px-2"
                aria-label="Call Admissions Helpline 18001026004"
              >
                <IoCallSharp size={24} className="text-[#FFB703]" />
              </a>

              {/* <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://studentportal.srmu.ac.in"
                className="bg-[#FFB703] px-2 font-medium text-xs sm:text-base uppercase border-2 border-[#ffb703] py-1 flex items-center"
              >
                Apply Now
              </Link> */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://students.srmu.ac.in/login"
                className="px-3 py-1 flex items-center justify-center"
              >
                <img src={srmuSetLogo} alt="SRMUSET Logo" className="h-[28px] w-auto object-contain" />
              </Link>
              {/* <Link
                target="_blank"
                rel="nofollow noopener noreferrer"
                to="https://phdadmission.srmu.ac.in/"
                className="bg-[#FFB703] hover:bg-white px-2 text-[9px] font-medium uppercase border border-[#ffb703] py-1 flex items-center text-black"
              >
                Ph.D Admission 2026
              </Link> */}
              {/* <Link
                target="_blank"

                to="https://convocation.srmu.ac.in"
                className={`${Classes["convocation_blink"]} bg-white hover:bg-[#FFB703] hover:border-[#fff] px-2 text-[9px] font-medium uppercase border border-[#ccc] py-1 flex items-center text-black`}
              >
                Convocation 2026
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
