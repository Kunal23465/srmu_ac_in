import React from "react";
import { contactInfo, researchInstitutes } from "../../../../data/research/overview/research-overview-data";
import ContactCard from "./ContactCard";


const ResearchOfficeSection: React.FC = () => {
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

        {/* Coordinators Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-[#0f4a85] text-white font-semibold grid grid-cols-4 py-3 px-4 text-sm">
            <span>INSTITUTES</span>
            <span>DEPARTMENT</span>
            <span>NAME OF FACULTY</span>
            <span>EMAIL ID</span>
          </div>

          {researchInstitutes.map((inst, i) => (
            <div key={i} className="grid grid-cols-4 border-t border-gray-200 text-sm">
              {/* Institute cell */}
              <div
                className="bg-blue-100 font-semibold text-[#0f4a85] flex items-center justify-center px-3 py-4 text-center border-r border-gray-200"
                row-span={inst.departments.length}
              >
                {inst.name}
              </div>

              {/* Departments */}
              <div className="col-span-3">
                {inst.departments.map((dep, j) => (
                  <div key={j} className={`grid grid-cols-3 ${j < inst.departments.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <div className="px-3 py-3">{dep.department}</div>
                    <div className="px-3 py-3">{dep.faculty}</div>
                    <div className="px-3 py-3">{dep.email}</div>
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
