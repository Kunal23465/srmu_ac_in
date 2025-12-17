import React, { useEffect, useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProgramData } from "../../../store/program-finder/programFinder-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchProgramType } from "../../../store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline } from "../../../store/program-finder/discipline/disciplineThunk";

interface PropsTypes {
    data: ProgramData[];
   
}

const ProgramFilter: React.FC<PropsTypes> = ({ data }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [visibleCount, setVisibleCount] = useState(5);
    const dispatch = useDispatch<AppDispatch>()
    const { programType } = useSelector((state: RootState) => state.getProgramType)
    const { discipline } = useSelector((state: RootState) => state.getDiscipline)

    const visibleCourses = data.slice(0, visibleCount);
    // console.log("discipline", discipline)

    useEffect(() => {
        dispatch(fetchProgramType())
        dispatch(fetchProgramDiscipline())
    }, [])
    return (
        <div className={`${Classes["container"]} pb-6 sm:py-10`}>
            {/* Filters */}
            <div className="py-4 px-2 md:p-8 bg-[#0f4a85] rounded-lg">
                <div className="flex flex-col md:flex-row gap-4">
                    <select
                        className="border p-2 rounded w-full md:w-1/3 bg-white"
                    // value={programType}
                    // onChange={(e) => {
                    //     setProgramType(e.target.value);
                    //     setVisibleCount(5); // reset on filter change
                    // }}
                    >
                        <option value="">Select Program Type</option>
                        {programType.map((type) => (
                            <option key={type.name} value={type.programDisciplineId}>
                                {type.name}
                            </option>
                        ))}
                    </select>

                    <select
                        className="border p-2 rounded w-full md:w-1/3 bg-white"
                    // value={discipline}
                    // onChange={(e) => {
                    //     setDiscipline(e.target.value);
                    //     setVisibleCount(5);
                    // }}
                    >
                        <option value="">Select Discipline</option>
                        {discipline.map((ele) => (
                            <option key={ele.name} value={ele.name}>
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
                            setSearchTerm(e.target.value);
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
                            const path = (str = "") =>
                                str
                                    .toLowerCase()
                                    .trim()
                                    .replace(/\s+/g, "-");

                            // store in variable
                            const programPath = path(course.programTypeName);
                            const programName = path(course.name);
                            return (
                                <div
                                    key={i}
                                    className="border border-gray-300 p-8 mb-4 rounded-md flex flex-col lg:flex-row gap-4 lg:justify-between items-center"
                                >
                                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between lg:w-[70%]">
                                        <h3 className="text-sm text-[#0f4a85] lg:text-lg font-medium lg:w-[60%]">
                                            {course.name}
                                        </h3>
                                        <p className="text-sm lg:text-base lg:w-[20%]">
                                            {course.totalDurationYear}
                                        </p>
                                        <p className="text-sm text-gray-600 lg:w-[20%]">
                                            {course.totalFees}
                                        </p>
                                    </div>

                                    <div className="flex flex-row gap-2 w-full lg:w-[30%] justify-between lg:justify-end">
                                        <Link
                                            state={{
                                                programTypeId: course.programTypeId,
                                                programDisciplineId: course.programDisciplineId,
                                                name: course.name
                                            }}
                                            to={`/programs/${programPath}/${programName}`}
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
                            )
                        })}

                        {/* Load More Button */}
                        {visibleCount && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={() => setVisibleCount((prev) => prev + 5)}
                                    className="bg-[#0f4a85] text-white px-6 py-3 rounded-lg hover:bg-[#08345f] transition"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-center text-gray-600 text-lg font-medium py-10">
                        No data found!!!
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProgramFilter;
