import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const ProgramFinderHome: React.FC = ({ data }: any) => {
  const [programType, setProgramType] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique program types and disciplines
  const programTypes = Array.from(new Set(data.map((course: any) => course.programType)));
  const disciplines = Array.from(new Set(data.map((course: any) => course.discipline)));

  // Filter logic
  const filteredCourses = data.filter((course: any) => {
    const isUGorCS =
      programType === "UG" ? course.programType === "UG" || course.programType === "Computer Science & Engineering" : programType === "" || course.programType === programType;

    return isUGorCS && (discipline === "" || course.discipline === discipline) && (searchTerm === "" || course.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className={`${Classes["container"]} pb-6 sm:py-10`}>
      <h2 className="text-[28px] lg:text-[3.125rem] text-center font-bold mb-5 sm:mb-16 relative after:content-[''] after:w-[150px] after:h-1 after:bg-[#ffb703] after:absolute after:-bottom-4 after:left-[50%] after:translate-x-[-50%] ">
        Program Finder
      </h2>

      {/* Filters */}
      <div className="py-5 px-2 md:px-6 md:py-8 rounded-lg bg-[#244271]">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="border px-2 py-2.5 rounded bg-white border-white  w-full md:w-1/3" onChange={(e) => setProgramType(e.target.value)} value={programType}>
            <option value="">Select Program Type</option>
            {programTypes.map((type: any) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select className="border px-2 py-2.5 rounded bg-white border-white w-full md:w-1/3" onChange={(e) => setDiscipline(e.target.value)} value={discipline}>
            <option value="">Select Discipline</option>
            {disciplines.map((discipline: any) => (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Course"
            className="border px-2 py-2.5 bg-white border-white  rounded w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Course List */}
      <div className="mt-8">
        {filteredCourses.map((course: any) => (
          <div key={course.id} className="border border-gray-300 p-5 mb-4 rounded-md flex flex-col lg:flex-row gap-4 lg:justify-between items-center">
            {/* Course Details */}
            <div className="flex flex-col md:flex-row gap-2 w-full justify-between lg:w-[70%]">
              <h3 className="text-sm text-[#0f4a85] lg:text-base font-medium lg:w-[60%]">{course.name}</h3>
              <p className="text-sm lg:text-base lg:w-[20%]">{course.duration}</p>
              <p className="text-sm text-gray-600 lg:w-[20%]">{course.fee}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 w-full lg:w-[30%] justify-between  lg:justify-end">
              {course?.isMode === "link" ? (
                <a target="_blank" href={course.path} className="bg-[#233E6F] hover:bg-[#ffb703] text-white px-5 py-3 text-sm rounded flex items-center gap-2">
                  View Details <FaArrowRightLong />
                </a>
              ) : (
                <Link to={course.path} className="bg-[#233E6F] hover:bg-[#ffb703] text-white px-5 py-3 text-sm rounded flex items-center gap-2">
                  View Details <FaArrowRightLong />
                </Link>
              )}

              <Link to="/enquiry-form" className="bg-[#ffb703] hover:bg-[#233E6F] text-white px-5 py-3 text-sm rounded inline-flex items-center gap-2">
                Apply Now <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-6 sm:pt-10 ">
        <button className="bg-[#233E6F] uppercase cursor-pointer  py-4 px-5 text-white flex gap-x-2 items-center rounded-lg">
          View More <LiaLongArrowAltRightSolid size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProgramFinderHome;
