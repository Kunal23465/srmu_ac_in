import React from "react";
import CustomScholarshipTable from "../../utils/custom/CustomScholarshiptable";
import {
  SpecialScholarship_Category_TableData,
  SpecialScholarship_Category_TableHeadData,
  // SpecialScholarship_SRMUtoSRMU_TableData,
  // SpecialScholarship_SRMUtoSRMU_TableHeadData,
} from "../../data/admissions/scholarship/special-scholarship-data";
import { Link } from "react-router-dom";

const SpecialScholarship: React.FC = () => {
  return (
    <div className="py-15 px-2 sm:px-10 lg:px-0">
      <h2 className="text-2xl lg:text-5xl pb-2 lg:pb-15 font-medium">Special Scholarship</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:max-w-[310px]">
          <p className="pb-2 sm:pb-5 ">"You can’t build a society purely on interests you need a sense of belonging"</p>
          <Link to="/online-admission" className="cursor-pointer text-white font-medium bg-[#0f4a85] border border-transparent transition-colors duration-500 hover:border-black hover:text-black hover:bg-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl">
            APPLY NOW
          </Link>
        </div>
        {/* <div className="w-full lg:max-w-[870px]">
          <strong>
            As a heartfelt tribute to the brave hearts of our defence forces, who selflessly safeguard our nation, SRMU is proud to extend special fee concessions to their wards.
            This is our small gesture of gratitude for their immense sacrifice and unwavering dedication.
          </strong>
          <p className="py-5 font-bold">At SRMU, we honour courage, value commitment, and celebrate community.</p>
          <ul className="space-y-1 sm:space-y-3 py-5 text-sm sm:text-base">
            {[
              <>
                <strong>Ward of martyrs</strong> -{">"} 100% of yearly tuition fee waiver
              </>,
              <>
                <strong>Ward of serving/ retired defense persons</strong> -{">"} 100% of semester tuition fee
              </>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="inline-block mt-1.5"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#0f4a85",
                    borderRadius: "50%",
                    minWidth: "10px",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            In addition, as a token of appreciation and to strengthen our bond with the SRMU family, we have also introduced exclusive fee waivers for our existing students, staff
            members, their referrals, and close family relations.
          </p>
          <ul className="space-y-1 sm:space-y-3 py-5 text-sm sm:text-base">
            {[
              <>
                <strong>Sibling </strong> -{">"} 100% of yearly tuition fee waiver
              </>,
              <>
                <strong>Blood relatives/ ward of faculty/ staff</strong> -{">"} 100% of semester tuition fee
              </>,
              <>
                <strong>Student referrals</strong> -{">"} 100% of yearly tuition fee waiver
              </>,
              <>
                <strong>Staff referrals</strong> -{">"} 100% of yearly tuition fee waiver
              </>,
              <strong>Career Progression</strong>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="inline-block mt-1.5"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#0f4a85",
                    borderRadius: "50%",
                    minWidth: "10px",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:max-w-[860px] gap-5">
            <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
              <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">SRMU to SRMU</p>
              <CustomScholarshipTable head={SpecialScholarship_SRMUtoSRMU_TableHeadData} data={SpecialScholarship_SRMUtoSRMU_TableData} />
            </div>
            <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
              <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">SRMGPC to SRMU</p>
              <CustomScholarshipTable head={SpecialScholarship_SRMGPCtoSRMU_TableHeadData} data={SpecialScholarship_SRMGPCtoSRMU_TableData} />
            </div>
          </div>
          <ul className="space-y-1 sm:space-y-3 py-5 text-sm sm:text-base">
            {[
              <>
                <strong>National level sports person</strong> -{">"} 100% of semester tuition fee
              </>,
              <>
                <strong>State-level sports person</strong> -{">"} 50% of semester tuition fee
              </>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="inline-block mt-1.5"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#0f4a85",
                    borderRadius: "50%",
                    minWidth: "10px",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>{" "}
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <table className="w-full text-center">
              <thead className="font-medium text-lg">
                <tr>
                  <th colSpan={3} className="text-sm text-white p-3 border-8 border-gray-100 bg-amber-400">
                    One Time Payment Policy Discount
                  </th>
                </tr>
              </thead>
              <tbody className="font-medium text-lg">
                <tr className="">
                  <td rowSpan={4} className="p-3 border-8 border-gray-100 bg-white">
                    Tuition Fees
                  </td>
                  <td className="p-3 border-8 border-gray-100 bg-white">90,000 and above</td>
                  <td className="p-3 border-8 border-gray-100 bg-white">5000</td>
                </tr>
                <tr>
                  <td className="p-3 border-8 border-gray-100 bg-white">70,000 - 90,000</td>
                  <td className="p-3 border-8 border-gray-100 bg-white">4000</td>
                </tr>{" "}
                <tr>
                  <td className="p-3 border-8 border-gray-100 bg-white">50,000 - 70,000</td>
                  <td className="p-3 border-8 border-gray-100 bg-white">3000</td>
                </tr>{" "}
                <tr>
                  <td className="p-3 border-8 border-gray-100 bg-white">Less than 50,000</td>
                  <td className="p-3 border-8 border-gray-100 bg-white">2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
        <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto w-full max-w-[860px]">
          <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">
            Special Scholarships (Applicable for All Years) </p>
          <CustomScholarshipTable head={SpecialScholarship_Category_TableHeadData} data={SpecialScholarship_Category_TableData} />
        </div>
      </div>
    </div>
  );
};

export default SpecialScholarship;
