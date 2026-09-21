import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProgramData } from "../../../store/program-finder/programFinder-slice";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { setProgramId } from "../../../store/program-finder/program/programSlice";
import { getPreferredProgramRouteSlug } from "../../../utils/legacyProgramRoutes";

interface ProgramTypeOption {
  programTypeId: number | string;
  name: string;
  slug: string;
}

interface ProgramFlagOption {
  programFlagId: number | string;
  name: string;
  slug: string;
}

interface DisciplineOption {
  programDisciplineId: number | string;
  name: string;
  slug: string;
}

interface PropsTypes {
  data: ProgramData[];
  programTypeOptions: Array<ProgramTypeOption | ProgramFlagOption>;
  disciplineOptions: DisciplineOption[];
  selectedProgramType: string;
  selectedDiscipline: string;
  searchTerm: string;
  onSearchChange: (val: string) => void;
  onProgramTypeChange: (val: string) => void;
  onDisciplineChange: (val: string) => void;
  isTypeFlag?: boolean;
  variant?: "default" | "light";
  hideCourseList?: boolean;
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
  isTypeFlag = false,
  variant = "default",
  hideCourseList = false,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredData = data.filter((course) =>
  course.name?.toLowerCase().includes(searchTerm.toLowerCase())
);

const visibleCourses = filteredData.slice(0, visibleCount);
  const { loading } = useSelector((state: RootState) => state.getProgramFinder);

  const handleProgramSelect = (programId: number) => {
    dispatch(setProgramId(programId.toString()));
  };

  return (
    <div className={`${Classes["container"]} pb-6 sm:py-10`}>
      {/* Filters */}
      {!loading && variant === "default" && (
        <div className="py-4 px-2 md:p-8 bg-[#0f4a85] rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Program Type / Flag */}
            <select
              className="border p-2 rounded w-full md:w-1/3 bg-white"
              value={selectedProgramType}
              onChange={(e) => {
                onProgramTypeChange(e.target.value);
                setVisibleCount(5);
              }}
            >
              <option value="">{isTypeFlag ? "Select Program Flag" : "Select Program Type"}</option>

              {isTypeFlag
                ? (programTypeOptions as ProgramFlagOption[]).map((flag) => (
                    <option key={flag.programFlagId} value={flag.slug}>
                      {flag.name}
                    </option>
                  ))
                : (programTypeOptions as ProgramTypeOption[]).map((type) => (
                    <option key={type.programTypeId} value={type.slug}>
                      {type.name}
                    </option>
                  ))}
            </select>

            {/* Discipline */}
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
                <option key={ele.programDisciplineId} value={ele.slug}>
                  {ele.name}
                </option>
              ))}
            </select>

            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search Course"
                className="border p-2 rounded w-full bg-white placeholder:text-black"
                value={searchTerm}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setVisibleCount(5);
                }}
              />
              <GoSearch color="#FFB703" size={22} className="absolute top-2 right-2" />
            </div>
          </div>
        </div>
      )}

      {!loading && variant === "light" && (
        <div className="bg-white border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-xl p-4 sm:p-6 mb-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-5 items-end">
            
            <div className="flex-1 w-full">
              <label className="block text-[11.5px] tracking-[0.08em] uppercase text-[#3E6B54] font-bold mb-2">
                {isTypeFlag ? "Current Qualification" : "Program Type"}
              </label>
              <div className="relative">
                <select
                  className="w-full h-11 bg-[#FAF7F1] border border-[#DDE3E1] text-[#16222E] text-[14px] rounded-md px-3 appearance-none outline-none focus:border-[#3E6B54] transition-colors"
                  value={selectedProgramType}
                  onChange={(e) => {
                    onProgramTypeChange(e.target.value);
                    setVisibleCount(5);
                  }}
                >
                  <option value="">{isTypeFlag ? "All Qualifications" : "All Types"}</option>
                  {isTypeFlag
                    ? (programTypeOptions as ProgramFlagOption[]).map((flag) => (
                        <option key={flag.programFlagId} value={flag.slug}>
                          {flag.name}
                        </option>
                      ))
                    : (programTypeOptions as ProgramTypeOption[]).map((type) => (
                        <option key={type.programTypeId} value={type.slug}>
                          {type.name}
                        </option>
                      ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#16222E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-[11.5px] tracking-[0.08em] uppercase text-[#3E6B54] font-bold mb-2">
                Discipline
              </label>
              <div className="relative">
                <select
                  className="w-full h-11 bg-[#FAF7F1] border border-[#DDE3E1] text-[#16222E] text-[14px] rounded-md px-3 appearance-none outline-none focus:border-[#3E6B54] transition-colors"
                  value={selectedDiscipline}
                  onChange={(e) => {
                    onDisciplineChange(e.target.value);
                    setVisibleCount(5);
                  }}
                >
                  <option value="">All Disciplines</option>
                  {disciplineOptions.map((ele) => (
                    <option key={ele.programDisciplineId} value={ele.slug}>
                      {ele.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#16222E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-[11.5px] tracking-[0.08em] uppercase text-[#3E6B54] font-bold mb-2">
                Search
              </label>
              <div className="relative flex">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <GoSearch color="#3E6B54" size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search Course..."
                  className="w-full h-11 bg-[#FAF7F1] border border-[#DDE3E1] text-[#16222E] text-[14px] rounded-md pl-10 pr-3 outline-none focus:border-[#3E6B54] transition-colors placeholder:text-[#16222E]/60"
                  value={searchTerm}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    setVisibleCount(5);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course List */}
      {hideCourseList ? null : loading ? (
        <div className="space-y-4 mt-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton_card w-full h-30"></div>
          ))}
        </div>
      ) : (
          <div className="mt-8">
          {visibleCourses.length > 0 ? (
            <>
              {visibleCourses.map((course) => {

                return (
                  <div key={course.programId} className="border border-gray-300 px-3 py-4 sm:p-8 mb-4 rounded-md flex flex-col lg:flex-row gap-4 lg:justify-between items-center">
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between lg:w-[70%]">
                      <Link
                        onClick={() => handleProgramSelect(course.programId)}
                        to={`/program/${getPreferredProgramRouteSlug(course)}`}
                        className="text-[#0f4a85] lg:text-[20px] md:text-[18.75px] sm:text-[17.5px] text-[17.5px] fw500 lg:w-[60%]"
                      >
                        {course.name}
                      </Link>

                      <p className="lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] lg:w-[20%]">{course.totalDurationYear}</p>

                      <p className="text-sm lg:text-base lg:w-[20%]">Rs. {course.totalFees}/-</p>
                    </div>

                    <div className="flex flex-row gap-2 w-full lg:w-[30%] justify-between lg:justify-end">
                      <Link
                        onClick={() => handleProgramSelect(course.programId)}
                        to={`/program/${getPreferredProgramRouteSlug(course)}`}
                        className="bg-[#023047] text-nowrap border border-[#023047] hover:bg-white hover:text-[#023047] transition-all duration-500 text-white px-6 py-3 text-sm font-medium rounded-lg flex items-center gap-2"
                      >
                        View Details <FaArrowRightLong />
                      </Link>

                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to="https://studentportal.srmu.ac.in"
                        className="bg-[#ffb703] border text-nowrap border-[#ffb703] hover:bg-white text-white hover:text-[#ffb703] transition-all duration-500 px-6 py-3 text-sm font-medium rounded-lg inline-flex items-center gap-2"
                      >
                        Apply Now <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Load More */}
              {visibleCount < filteredData.length && (
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
      )}
    </div>
  );
};

export default ProgramFilter;
