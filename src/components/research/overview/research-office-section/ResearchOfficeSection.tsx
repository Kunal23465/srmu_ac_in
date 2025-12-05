import React from "react";
import { contactInfo, researchInstitutes } from "../../../../data/research/overview/research-overview-data";
import ContactCard from "./ContactCard";


const ResearchOfficeSection: React.FC = () => {
  const instituteColors = [
    "bg-[#6FB6E8]", // light blue
    "bg-[#589FD8]",
    "bg-[#0F1E3A]", // dark navy
    "bg-[#0F1E3A]",
    "bg-[#0F1E3A]",
    "bg-[#0F1E3A]",
    "bg-[#0F1E3A]",
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#0f4a85] mb-2">Research Office</h2>
          <p className="text-gray-700 max-w-3xl">
            The Research Office at SRMU facilitates and supports the entire research lifecycle, from the conceptualization stage to the final project.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactInfo.map((item, i) => (
            <ContactCard key={i} item={item} />
          ))}
        </div>

        <div className="w-full px-8 bg-[#ecf0f9] rounded-b-2xl py-12 overflow-x-scroll">
          <h2 className="text-xl font-bold mb-6">Research Coordinators of Different Departments</h2>

          {/* Header Row */}
          <div className="grid grid-cols-[1.3fr_2fr_1.5fr_2fr] gap-4 mb-4">
            <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">INSTITUTES</div>
            <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">DEPARTMENT</div>
            <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">NAME OF FACULTY</div>
            <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">EMAIL ID</div>
          </div>

          {researchInstitutes.map((item, index) => (
            <div key={index} className="grid grid-cols-[1.3fr_2fr_1.5fr_2fr] gap-4 mb-6">
              {/* Institute Column */}
              <div className={`${instituteColors[index]} text-white rounded-lg  flex justify-center items-center text-center px-4 font-medium`}>{item.name}</div>

              {/* 3 Data Columns */}
              <div className="col-span-3 space-y-3">
                {item.departments.map((dept, idx) => (
                  <div key={idx} className="grid grid-cols-[2fr_1.5fr_2fr] gap-x-4">
                    {/* Department */}
                    <div className="bg-white rounded-md shadow-sm px-4 py-3 text-sm flex items-center">{dept.department}</div>

                    {/* Faculty */}
                    <div className="bg-white rounded-md shadow-sm px-4 py-3 text-sm flex items-center justify-center text-center">{dept.faculty}</div>

                    {/* Email */}
                    <div className="bg-white rounded-md shadow-sm px-4 py-3 text-sm flex items-center justify-center text-center wrap-break-words">{dept.email}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchOfficeSection;
