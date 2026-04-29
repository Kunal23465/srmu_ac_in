

import React from "react";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import Classes from "../../../../utils/styles/Global.module.css";
// ======================================================
// Dynamic JSON data — edit this to change the table
// ======================================================
const feeData = {
  columns: [
    { key: "courseName", label: "Course Name" },
    { key: "year", label: "Year" },
    {
      key: "managementFee",
      label: "Ph.D. in Management, Law, Pharmacy, Engineering",
      subLabel: "(in ₹)",
    },
    {
      key: "humanitiesFee",
      label: "Ph.D. in Humanities, Education and other",
      subLabel: "(in ₹)",
    },
  ],
  sections: [
    {
      year: "1st year",
      rows: [
        { courseName: "Course Fee", managementFee: 100000, humanitiesFee: 80000 },
        { courseName: "Pre Ph.D. Course Work Fee", managementFee: 25000, humanitiesFee: 25000 },
        { courseName: "Caution Money", managementFee: 10000, humanitiesFee: 10000 },
      ],
      total: { managementFee: 135000, humanitiesFee: 115000 },
    },
    {
      year: "Intermediate year",
      rows: [
        { courseName: "Course Fee", managementFee: 100000, humanitiesFee: 80000 },
      ],
      total: { managementFee: 100000, humanitiesFee: 80000 },
    },
    {
      year: "Last year (Thesis Submission)",
      rows: [
        { courseName: "Course Fee", managementFee: 100000, humanitiesFee: 80000 },
        { courseName: "Thesis Fee", managementFee: 50000, humanitiesFee: 50000 },
      ],
      total: { managementFee: 150000, humanitiesFee: 130000 },
    },
  ],
};

// ======================================================
// Helpers
// ======================================================
const formatYear = (year) => {
  // Render "1st year" → "1ˢᵗ year" with superscript
  const ordinalMatch = year.match(/^(\d+)(st|nd|rd|th)(\s.*)$/i);
  if (ordinalMatch) {
    return (
      <>
        {ordinalMatch[1]}
        <sup>{ordinalMatch[2]}</sup>
        {ordinalMatch[3]}
      </>
    );
  }
  // Multi-line years (e.g., "Last year (Thesis Submission)")
  if (year.includes("(")) {
    const [main, sub] = year.split(/\s*\(/);
    return (
      <>
        {main}
        <br />({sub}
      </>
    );
  }
  return year;
};

const formatNumber = (n) => n.toLocaleString("en-IN");

// ======================================================
// Component
// ======================================================
export default function PhdFeeStructureSection() {
  const { columns, sections } = feeData;

  return (
   <section className=" text-white py-16" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
     <div className={`${Classes["container"]} px-5 md:px-0`}>
      <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-4">Ph.D. Fee Structures</h2>
      <p className="max-w-4xl lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] mb-10 md:mb-15">The Ph.D. fee structure at SRMU is designed to be transparent and competitive, offering a comprehensive breakdown of costs for tuition, research facilities, and other academic resources, ensuring financial clarity for doctoral candidates.</p>
      <div className="w-full ">
        <table className="w-full border-collapse border border-slate-300 text-sm text-slate-800 bg-white">
          <thead>
            {/* Main header row */}
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  rowSpan={col.subLabel ? 1 : 2}
                  className="bg-[#ffb703] text-white font-bold px-4 py-4 text-center border border-[#ffb703] align-middle leading-tight"
                >
                  {col.label}
                </th>
              ))}
            </tr>
            {/* Sub-header row for currency unit */}
            <tr>
              {columns.map((col) =>
                col.subLabel ? (
                  <th
                    key={`${col.key}-sub`}
                    className="bg-[#ffb703] text-white font-semibold px-4 py-2 text-center border border-[#ffb703] text-[13px]"
                  >
                    {col.subLabel}
                  </th>
                ) : null
              )}
            </tr>
          </thead>

          <tbody>
            {sections.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                {section.rows.map((row, rIdx) => (
                  <tr key={`${sIdx}-${rIdx}`}>
                    <td className="px-4 py-3.5 border border-slate-300 text-center align-middle bg-white">
                      {row.courseName}
                    </td>
                    {rIdx === 0 && (
                      <td
                        rowSpan={section.rows.length}
                        className="px-4 py-3.5 border border-slate-300 text-center align-middle bg-white text-slate-800"
                      >
                        {formatYear(section.year)}
                      </td>
                    )}
                    <td className="px-4 py-3.5 border border-slate-300 text-center align-middle bg-white tabular-nums">
                      {formatNumber(row.managementFee)}
                    </td>
                    <td className="px-4 py-3.5 border border-slate-300 text-center align-middle bg-white tabular-nums">
                      {formatNumber(row.humanitiesFee)}
                    </td>
                  </tr>
                ))}
                {/* Total row */}
                <tr>
                  <td className="bg-[#ffb703] text-white font-bold px-5 py-3 border border-[#ffb703] text-left">
                    Total Amount
                  </td>
                  <td className="bg-[#ffb703] border border-[#ffb703]"></td>
                  <td className="bg-[#ffb703] text-white font-bold px-4 py-3 border border-[#ffb703] text-center tabular-nums">
                    {formatNumber(section.total.managementFee)}
                  </td>
                  <td className="bg-[#ffb703] text-white font-bold px-4 py-3 border border-[#ffb703] text-center tabular-nums">
                    {formatNumber(section.total.humanitiesFee)}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
  );
}
