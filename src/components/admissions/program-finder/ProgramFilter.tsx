import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProgramData } from "../../../store/program-finder/programFinder-slice";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface PropsTypes {
  data: ProgramData[];
  programTypeOptions: any[];
  disciplineOptions: any[];
  selectedProgramType: number | string;
  selectedDiscipline: number | string;
  searchTerm: string;
  onSearchChange: (val: string) => void;
  onProgramTypeChange: (val: number | string) => void;
  onDisciplineChange: (val: number | string) => void;
  isTypeFlag?: boolean;
}

const ProgramFilter: React.FC<PropsTypes> = ({
  data,
  programTypeOptions,
  disciplineOptions,
  selectedProgramType,
  selectedDiscipline,
  searchTerm,
  onSearchChange,
  onProgramTypeChange,
  onDisciplineChange,
  isTypeFlag,
}) => {
  console.log(selectedProgramType, "selectedProgramType");
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleCourses = data.slice(0, visibleCount);
  const slugify = (str: string) => str.toLowerCase().trim().replace(/\s+/g, "-");
  return (
    <div className={`${Classes["container"]} pb-6 sm:py-10`}>
      {/* Filters */}
      <div className="py-4 px-2 md:p-8 bg-[#0f4a85] rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            className="border p-2 rounded w-full md:w-1/3 bg-white"
            value={selectedProgramType}
            onChange={(e) => {
              onProgramTypeChange(e.target.value);
              setVisibleCount(5);
            }}
          >
            <option value="">{isTypeFlag ? " Select Program Flag" : "Select Program Type"} </option>
            {isTypeFlag
              ? programTypeOptions.map((flag: any) => (
                  <option key={flag.programFlagId} value={flag.programFlagId}>
                    {flag.name}
                  </option>
                ))
              : programTypeOptions.map((type: any) => (
                  <option key={type.programTypeId} value={type.programTypeId}>
                    {type.name}
                  </option>
                ))}
          </select>

          <select
            className="border p-2 rounded w-full md:w-1/3 bg-white"
            value={selectedDiscipline}
            onChange={(e) => {
              onDisciplineChange(e.target.value);
              setVisibleCount(5);
            }}
          >
            <option value="">Select Discipline</option>
            {disciplineOptions.map((ele) => (
              <option key={ele.programDisciplineId} value={ele.programDisciplineId}>
                {ele.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search Course"
            className="border p-2 rounded w-full md:w-1/3 bg-white"
            value={searchTerm}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setVisibleCount(5);
            }}
          />
        </div>
      </div>

      {/* Course List */}
      <div className="mt-8">
        {visibleCourses.length > 0 ? (
          <>
            {visibleCourses.map((course, i) => {
              const path = (str = "") => str.toLowerCase().trim().replace(/\s+/g, "-");

              // store in variable
              // @ts-ignore
              const programPath = path(course.programTypeName);
              const programName = path(course.name);
              return (
                <div key={i} className="border border-gray-300 p-8 mb-4 rounded-md flex flex-col lg:flex-row gap-4 lg:justify-between items-center">
                  <div className="flex flex-col md:flex-row gap-2 w-full justify-between lg:w-[70%]">
                    <h3 className=" text-[#0f4a85] lg:text-[20px] md:text-[18.75px] sm:text-[17.5px] text-[17.5px] fw500  lg:w-[60%]">{course.name}</h3>
                    <p className="lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] lg:w-[20%]">{course.totalDurationYear}</p>
                    <p className="text-sm lg:text-base lg:w-[20%]">Rs. {course.totalFees}/-</p>
                  </div>

                  <div className="flex flex-row gap-2 w-full lg:w-[30%] justify-between lg:justify-end">
                    <Link
                      state={{
                        programId: course.programId,
                        // programDisciplineId: course.programDisciplineId,
                        // name: course.name,
                      }}
                      to={`/programs/details/${slugify(programName)}`}
                      className="bg-[#023047] border border-[#023047] hover:bg-white hover:text-[#023047] transition-all duration-500 text-white px-6 py-3 text-sm font-medium rounded-lg flex items-center gap-2"
                    >
                      View Details <FaArrowRightLong />
                    </Link>
                    <Link
                      to="/enquiry-form"
                      className="bg-[#ffb703] border border-[#ffb703] hover:bg-white text-white hover:text-[#ffb703] transition-all duration-500 px-6 py-3 text-sm font-medium rounded-lg inline-flex items-center gap-2"
                    >
                      Apply Now <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Load More Button */}
            {visibleCount < data.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 5)}
                  className="bg-[#0f4a85] flex items-center gap-x-3 text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-[#08345f] transition uppercase"
                >
                  View More <HiOutlineArrowNarrowRight size={24} />
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600 text-lg font-medium py-10">No data found!!!</p>
        )}
      </div>
    </div>
  );
};

export default ProgramFilter;
