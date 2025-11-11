import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CoursesData } from "../../../data/admissions/program-finder/program-finder-data";

const ProgramFilter: React.FC = () => {
    const [programType, setProgramType] = useState("");
    const [discipline, setDiscipline] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Extract unique program types and disciplines
    const programTypes = Array.from(new Set(CoursesData.map((course) => course.programType)));
    const disciplines = Array.from(new Set(CoursesData.map((course) => course.discipline)));

    // Filter logic
    const filteredCourses = CoursesData.filter((course) => {
        return (
            (programType === "" || course.programType === programType) &&
            (discipline === "" || course.discipline === discipline) &&
            (searchTerm === "" || course.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className={`${Classes["container"]} pb-6 sm:py-10`}>
            {/* Filters */}
            <div className="py-4 px-2 md:p-6 bg-[#244271]">
                <div className="flex flex-col md:flex-row gap-4">
                    <select
                        className="border p-2 rounded w-full md:w-1/3 bg-white"
                        onChange={(e) => setProgramType(e.target.value)}
                        value={programType}
                    >
                        <option value="">Select Program Type</option>
                        {programTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>

                    <select
                        className="border p-2 rounded w-full md:w-1/3 bg-white"
                        onChange={(e) => setDiscipline(e.target.value)}
                        value={discipline}
                    >
                        <option value="">Select Discipline</option>
                        {disciplines.map((discipline) => (
                            <option key={discipline} value={discipline}>
                                {discipline}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Search Course"
                        className="border p-2 rounded w-full md:w-1/3 bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Course List */}
            <div className="mt-8">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="border p-4 mb-4 rounded-md flex flex-col lg:flex-row gap-4 lg:justify-between items-center"
                        >
                            {/* Course Details */}
                            <div className="flex flex-col md:flex-row gap-2 w-full justify-between lg:w-[70%]">
                                <h3 className="text-sm lg:text-base font-bold lg:w-[60%]">{course.name}</h3>
                                <p className="text-sm lg:text-base lg:w-[20%]">{course.duration}</p>
                                <p className="text-sm text-gray-600 lg:w-[20%]">{course.fee}</p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-row gap-2 w-full lg:w-[30%] justify-between lg:justify-end">
                                <Link
                                    to={course.path}
                                    className="bg-[#233E6F] hover:bg-[#ffb703] text-white px-4 py-2 text-sm rounded flex items-center gap-2"
                                >
                                    View Details <FaArrowRightLong />
                                </Link>
                                <Link
                                    to="/enquiry-form"
                                    className="bg-[#ffb703] hover:bg-[#233E6F] text-white px-4 py-2 text-sm rounded inline-flex items-center gap-2"
                                >
                                    Apply Now <FaArrowRightLong />
                                </Link>
                            </div>
                        </div>
                    ))
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
