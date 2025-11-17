import React from "react";
import { consultancyData } from "../../../../data/research/consultancy/consultancy-data";


const ConsultancyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse text-lg">
        <thead className=" text-white">
          <tr>
            <th className="px-6 py-3 border border-[#1d2b58] bg-[#1d2b58]">S.No</th>
            <th className="px-6 py-3 border border-[#213e78] bg-[#213e78]">Name Of Consultant/ Principal Investigator</th>
            <th className="px-6 py-3 border border-[#05519c] bg-[#05519c]">Name Of Assignment</th>
            <th className="px-6 py-3 border border-[#307fc2] bg-[#307fc2]">Name Of Funding Agency</th>
            <th className="px-6 py-3 border border-[#489dd6] bg-[#489dd6]">Total Cost (INR In Lakhs)</th>
            <th className="px-6 py-3 border border-[#64b6e5] bg-[#64b6e5]">Year</th>
            <th className="px-6 py-3 border border-[#86cbf3] bg-[#86cbf3]">Status</th>
          </tr>
        </thead>
        <tbody>
          {consultancyData.map((data, index) => (
            <tr
              key={data.id}
              className={index % 2 === 1 ? "bg-[#fff8e5]" : "bg-white"} // Alternate row coloring
            >
              <td className="px-6 py-4 border-none">{data.id}</td>
              <td className="px-6 py-4 border-none">{data.consultant}</td>
              <td className="px-6 py-4 border-none">{data.assignment}</td>
              <td className="px-6 py-4 border-none">{data.fundingAgency}</td>
              <td className="px-6 py-4 border-none">{data.cost}</td>
              <td className="px-6 py-4 border-none">{data.year}</td>
              <td className="px-6 py-4 border-none">{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultancyTable;
