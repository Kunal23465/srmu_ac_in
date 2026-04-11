import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import BGimg from "../../assets/images/research/overview/facilities-bg-lg.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CustomProgramScholarshipSchemeCard: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BGimg})` }}>
      <div className={`${Classes["container"]}`}>

        <div className="flex flex-col sm:flex-row text-white py-20 gap-10 sm:gap-0">

          {/* LEFT SECTION */}
          <div className="px-5 sm:px-0">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] pb-2 font-medium flex gap-x-1">Scholarship <span className="block md:hidden">Schemes</span> </h2>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] pb-3 font-medium hidden md:block">Schemes</h2>

            <p className="pb-10 sm:pb-20 max-w-full sm:max-w-110 text-sm sm:text-base">
              Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and also
              to sail through at all levels in the job market.
            </p>

            <Link to="/scholarship-scheme" className="px-6 py-3 sm:px-9 inline-flex items-center gap-x-2 sm:py-4 text-black transition-colors duration-300 ease-in-out hover:text-amber-400  border border-amber-400 hover:bg-transparent bg-amber-400 font-medium rounded-lg text-sm sm:text-base">
              VIEW DETAILS <FaArrowRightLong />
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="px-5 mr-20 sm:px-0 sm:ml-auto">
            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base">
              {[
                "SRMUSET (Shri Ramswaroop Memorial University Scholarship Entrance Test)",
                "Merit Based Scholarship",


                "Students Opting For Career Progression",
                "Ward of Defense Persons/ Central Government/ State Government Employees",
                "Ward of Martyrs",
                "For National/ State Level Sportsperson",
                "Blood Relatives of Staff and Students of Ramswaroop Group",
                "Divyang & Female Candidates",
                "EWS (Economically Weaker Section)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-amber-400 font-bold pt-1.5">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23ffb703' d='M6.173 13.414L1.757 9l1.414-1.414 3.002 3.002 6.41-6.41L14 5.586z'/%3E%3C/svg%3E"
                      alt="check icon"
                      width="16"
                      height="16"
                    />

                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomProgramScholarshipSchemeCard;
