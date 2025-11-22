import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import BGimg from "../../assets/images/research/overview/facilities-bg-lg.jpeg";

const CustomProgramScholarshipSchemeCard: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BGimg})`} }>
      <div className={`${Classes["container"]}`}>
        
        <div className="flex flex-col sm:flex-row text-white py-20 gap-10 sm:gap-0">

          {/* LEFT SECTION */}
          <div className="px-5 sm:px-0">
            <h1 className="text-3xl sm:text-5xl pb-2 font-medium">Scholarship</h1>
            <h1 className="text-3xl sm:text-5xl pb-3 font-medium">Schemes</h1>

            <p className="pb-10 sm:pb-20 max-w-full sm:max-w-110 text-sm sm:text-base">
              Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and also
              to sail through at all levels in the job market.
            </p>

            <button className="px-6 py-3 sm:px-9 sm:py-4 text-black transition-colors duration-300 ease-in-out hover:text-amber-400  border border-amber-400 hover:bg-transparent bg-amber-400 font-medium rounded-lg text-sm sm:text-base">
              VIEW DETAILS &nbsp;&nbsp;→
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="px-5 mr-20 sm:px-0 sm:ml-auto">
            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base">
              {[
                "SRMUSET (Shri Ramswaroop Memorial University Scholarship Entrance Test)",
                "Merit Based Scholarship",
                "CUET Score Based",
                "National Entrance Score Based",
                "Students Opting For Career Progression",
                "Ward of Defense Persons/ Central Government/ State Government Employees",
                "Ward of Martyrs",
                "For National/ State Level Sportsperson",
                "Blood Relatives of Staff and Students of Ramswaroop Group",
                "Divyang & Female Candidates",
                "EWS (Economically Weaker Section)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✔</span>
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
