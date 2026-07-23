import Classes from "../../utils/styles/Global.module.css";
import { IoCallSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/home/user-icon.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const TopHeader: React.FC = () => {
  const [isDropdown, setIsDropdown] = useState(false);
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
      className={`${Classes["top_header"]} text-white bg-white lg:bg-[#0f4a85] text-[0.84rem]`}
    >
      <div className={`${isDesktop ? Classes["container"] : ""}`}>
        {/* DESKTOP HEADER */}
        <div className="hidden lg:flex justify-between ">
          <div className="left-part flex items-center">
            <ul className="flex items-center text-[13px] flex-row">
              <Link className="px-[0.7rem] border-r border-white" to="/notice">
                NOTICE
              </Link>
              <Link
                className="px-[0.7rem] border-r border-white"
                to="/admission-enquiry"
              >
                ADMISSION ENQUIRY
              </Link>
              <Link className="px-[0.7rem]" to="/shift-schedule">SHIFT SCHEDULE</Link>
            </ul>
          </div>

          <div className="right-part flex gap-0 items-stretch">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://eyojan.srmu.ac.in/"
              className="relative flex items-center text-[13px] text-white gap-x-2 px-[0.7rem] after:absolute after:right-0 after:top-1/2 after:h-[55%] after:w-px after:-translate-y-1/2 after:bg-white"
            >
              <img src={user} alt="user" loading="eager" decoding="async" />
              Student Login
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://eyojan.srmu.ac.in/"
              className="flex text-[13px] items-center text-white gap-x-5 px-[0.7rem]"
            >
              Staff Login
              {/* <img src={search} alt="user" /> */}
            </Link>

            <button className="bg-white flex items-center px-4 py-[5px] gap-2 border-l border-[#ccc]">
              <a href="tel:18001026004" className="text-[#FFB703]" aria-label="Call Admission Helpline 18001026004">
                <IoCallSharp className="text-[1.5rem]" />
              </a>
              <div className="flex flex-col text-start ">
                <p className="text-[11px] font-normal text-black">Admission Helpline</p>
                <p className="text-[13px] text-black">18001026004</p>
              </div>
            </button>

            {/* <Link
              target="_blank"

              rel="noopener noreferrer"

              to="https://studentportal.srmu.ac.in"
              className="bg-[#FFB703] hover:bg-white px-4 text-[13px] font-medium uppercase border border-[#ffb703] py-[0.875rem] flex items-center text-black"
            >
              Apply Now
            </Link> */}

            {/* <Link
              target="_blank"
              rel="nofollow noopener noreferrer"
              to="https://phdadmission.srmu.ac.in/"
              className="bg-[#FFB703] hover:bg-white px-4 text-[13px] font-medium uppercase border border-[#ffb703] py-[0.875rem] flex items-center text-black"
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
            <div className="relative">
              <button
                onClick={() => setIsDropdown((prev) => !prev)}
                className="text-black text-sm sm:text-lg font-semibold flex items-center gap-x-1"
              >
                Login {isDropdown ? <FaCaretUp /> : <FaCaretDown />}
              </button>

              {isDropdown && (
                <div className="bg-white absolute -bottom-[70px] border border-gray-100 z-9999! p-3 w-[200px]">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://eyojan.srmu.ac.in/"
                    className="text-black block"
                  >
                    Student Login
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://eyojan.srmu.ac.in/"
                    className="text-black block mt-2"
                  >
                    Staff Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="right-part flex items-center">
            <div className="flex gap-1">
              {/* <div className="py-3 border-l border-[#ccc] px-2">
                <GrSearch size={24} className="text-[#666]" />
              </div> */}

              <a
                href="tel:18001035298"
                className="py-1 flex items-center border-l border-[#ccc] pl-2 pr-1"
                aria-label="Call Admissions Helpline 18001035298"
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
