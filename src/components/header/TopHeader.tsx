import Classes from "../../utils/styles/Global.module.css";
import { GrSearch } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/home/user-icon.png";
import search from "../../assets/images/home/searching-icon.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const TopHeader: React.FC = () => {
  const [isDropdown, setIsDropdown] = useState(false)
  return (
    <div className={`${Classes["top_header"]}  text-white bg-white lg:bg-[#0f4a85]  text-[0.89rem]`}>
      <div className={`${Classes["container"]}`}>
        <div className="hidden lg:flex justify-between ">
          <div className="left-part flex items-center">
            <div>
              <ul className="flex items-center text-sm flex-row gap-x-2 ">
                <Link className="border-r pr-2" to="/notice">
                  NOTICE{" "}
                </Link>
                <Link className="border-r pr-2" to="https://admissionenquiry.srmu.ac.in/">
                  ADMISSION ENQUIRY{" "}
                </Link>
                <Link to="/shift-schedule">SHIFT SCHEDULE</Link>
              </ul>
            </div>
          </div>

          <div className="right-part flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <div className="flex text-black items-center">
                <div className="flex items-center text-[13.74px] text-white gap-x-2 pr-2 border-r border-white">
                  <img src={user} alt="user" />
                  Student Login
                </div>
                <div className="flex text-[13.74px] items-center text-white gap-x-5 pl-2 mr-3">
                  Staff Login
                  <img src={search} alt="user" />
                </div>
                <button className="bg-white flex items-center px-2 py-2 gap-2 ">
                  <a href="tel:18001026004" className="text-[#FFB703]  ">
                    <IoCallSharp className="text-[1.5rem]" />
                  </a>
                  <div className="flex flex-col  text-start px-auto">
                    <p className="text-xs font-normal">Admission Helpline</p>
                    <p className=" ">18001026004</p>
                  </div>
                </button>
                <Link
                  target="_blank"
                  to="https://studentportal.srmu.ac.in/login"
                  className="bg-[#FFB703] px-2 font-medium uppercase border-2 border-[#ffb703]  py-3.5 flex gapx-x-1 items-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden justify-between">
          {/* <div className="left-part flex items-center text-black ">
            <a
              target="_blank"
              href="https://campus.srmcem.ac.in/psp/ps/?cmd=login
              An error has occurred.
               "className="text-xl font-bold ">
              Login
            </a>
            <FaCaretDown />
          </div> */}
          <div className="left-part flex items-center">
            <div className="relative">
              <button onClick={() => setIsDropdown(prev => !prev)} className="text-black text-lg font-semibold flex items-center gap-x-1 cursor-pointer">Login  {isDropdown ? <FaCaretUp /> : <FaCaretDown />} </button>
              {isDropdown && <div className="bg-white absolute -bottom-[70px] border border-gray-100 z-9999 p-3 text-balck! w-[200px]">
                <Link target="_blank" to="https://eyojan.srmu.ac.in/" className="text-black block">Studen Login</Link>
                <Link target="_blank" to="https://eyojan.srmu.ac.in/" className="text-black block mt-2">Staff Login</Link>
              </div>}
            </div>
          </div>
          <div className="right-part flex items-center">
            <div className="flex gap-1">
              <div className="py-3 border-l border-[#ccc] px-2 ">
                <GrSearch size={24} className="text-[1.5rem] text-[#666]" />
              </div>
              <a href="tel:18001035298" className="py-3 flex items-center border-l border-[#ccc] pl-2 pr-1 ">
                <IoCallSharp size={24} className="text-[1rem] text-[#FFB703]" />
              </a>

              <Link
                target="_blank"
                to="https://studentportal.srmu.ac.in/login"
                className="bg-[#FFB703] px-2 font-medium uppercase border-2 border-[#ffb703]  py-3.5 flex gapx-x-1 items-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
