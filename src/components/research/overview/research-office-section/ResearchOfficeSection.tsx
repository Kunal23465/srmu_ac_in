import React from "react";
import { contactInfo, researchInstitutes } from "../../../../data/research/overview/research-overview-data";
import ContactCard from "./ContactCard";
import Classes from "../../../../utils/styles/Global.module.css";


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
      <div className={`${Classes["container"]}`}>
      <div className="container">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-[#023047] lg:text-[50px] md:text-[46.875px] text-[22.4px] sm:text-[22.4px] fw500 mb-2">Research Office</h2>
          <p className="text-gray-700 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] max-w-3xl">
            The Research Office at SRMU facilitates and supports the entire research lifecycle, from the conceptualization stage to the final project.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactInfo.map((item, i) => (
            <ContactCard key={i} item={item} />
          ))}
        </div>

    <div className="w-full px-8 md:px-10 bg-[#ecf0f9] rounded-bl-4xl py-12">

  <h2 className="lg:text-[25px] md:text-[23.445px] sm:text-[21.882px] text-[21.882px] font-bold mb-6">
    Research Coordinators of Different Departments
  </h2>

  {/* SCROLL CONTAINER */}
  <div className="overflow-x-auto">
  <table className="w-full border-separate border-spacing-3">
  {/* TABLE HEADER */}
  <thead>
    <tr className="bg-[#214a8a] text-white">
      {/* Institute – Hidden on mobile */}
      <th className="hidden lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] md:table-cell text-center py-4 px-6 font-semibold rounded-sm">
        INSTITUTES
      </th>

      <th className="text-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] py-4 px-6 font-semibold rounded-sm">
        DEPARTMENT
      </th>

      <th className="text-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]  py-4 px-6 font-semibold rounded-sm">
        NAME OF FACULTY
      </th>

      <th className="text-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] py-4 px-6 font-semibold rounded-sm">
        EMAIL ID
      </th>
    </tr>
  </thead>

  <tbody>
    {researchInstitutes.map((item, index) => {
      const instituteColor = instituteColors[index] || "bg-blue-600";

      return (
        <React.Fragment key={index}>
          {item.departments.map((dept, deptIdx) => (
            <tr key={`${index}-${deptIdx}`} className="hover:bg-white transition">
              {/* Institute Name (desktop-only) */}
              {deptIdx === 0 && (
                <td
                  rowSpan={item.departments.length}
                  className={`hidden md:table-cell ${instituteColor} text-white 
                  text-center py-6 px-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] font-semibold align-middle rounded-md`}
                >
                  {item.name}
                </td>
              )}

              {/* Department */}
              <td className="bg-white px-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] py-4 text-sm text-gray-800 text-center md:text-left">
                {dept.department}
              </td>

              {/* Faculty */}
              <td className="bg-white px-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] py-4 text-sm text-gray-800 text-center">
                {dept.faculty}
              </td>

              {/* Email */}
              <td className="bg-white px-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] py-4 text-sm text-center break-all">
                <a href={`mailto:${dept.email}`} className="text-[#0f4a85] hover:underline">
                  {dept.email}
                </a>
              </td>
            </tr>
          ))}
        </React.Fragment>
      );
    })}
  </tbody>
</table>
</div>
</div> 

      </div></div>
    </section>
  );
};

export default ResearchOfficeSection;








  // <div className="overflow-x-auto md:overflow-visible pb-4">

  //   {/* TABLE HEADER */}
  //   <div className="min-w-[900px] md:min-w-0 grid 
  //     grid-cols-[1.3fr_2fr_1.5fr_2fr] 
  //     md:grid-cols-[1.3fr_2fr_1.5fr_2fr] 
  //     gap-4 mb-4">

  //     {/* INSTITUTE HEADER – HIDE ON SMALL SCREENS */}
  //     <div className="hidden md:block bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">
  //       INSTITUTES
  //     </div>

  //     {/* THESE SHOW ALWAYS */}
  //     <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">DEPARTMENT</div>
  //     <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">NAME OF FACULTY</div>
  //     <div className="bg-[#214a8a] text-white text-center py-3 rounded-md font-semibold">EMAIL ID</div>
  //   </div>

  //   {/* ROWS */}
  //   {researchInstitutes.map((item, index) => (
  //     <div 
  //       key={index} 
  //       className="min-w-[900px] md:min-w-0 grid 
  //       grid-cols-[1.3fr_2fr_1.5fr_2fr] 
  //       md:grid-cols-[1.3fr_2fr_1.5fr_2fr] 
  //       gap-4 mb-6"
  //     >

  //       {/* INSTITUTE COLUMN – HIDE ON MOBILE */}
  //       <div className={`hidden md:flex ${instituteColors[index]} text-white rounded-md justify-center items-center text-center px-4 font-medium`}>
  //         {item.name}
  //       </div>

  //       {/* OTHER COLS */}
  //       <div className="md:col-span-3 col-span-4 space-y-3">
  //         {item.departments.map((dept, idx) => (
  //           <div key={idx} className="grid grid-cols-[2fr_1.5fr_2fr] gap-x-4">
              
  //             {/* Department */}
  //             <div className="bg-white rounded-md shadow-sm px-4 py-3 text-sm flex items-center">
  //               {dept.department}
  //             </div>

  //             {/* Faculty */}
  //             <div className="bg-white rounded-md shadow-sm px-4 py-3 text-sm flex items-center justify-center text-center">
  //               {dept.faculty}
  //             </div>

  //             {/* Email */}
  //             <div className="bg-white rounded-md shadow-sm px-4 py-3 text-sm flex items-center justify-center text-center break-words">
  //               {dept.email}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   ))}

  // </div>