import { FC } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { instituteFooterData } from "../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";

const OnlineAdmission: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-17 bg-gray-50 px-4 py-2">
        <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-b-8 border-b-[#f8b923] border-t-[#234a84] ">
          <div className="p-8 md:p-16 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
              Welcome to SRMU
            </h1>
            <p className="text-lg md:text-xl  text-[#f8b922] mb-2">
              Online Application | Counselling Registration Portal
            </p>
            <p className="text-xl  text-[#f8b922] mb-5">(Session 2026-27)</p>

            <hr className="my-8 border-gray-300" />

            <p className="text-base md:text-lg text-gray-700 mb-10">
              Students can Pay Online through Credit/Debit Cards, Net Banking,
              UPI and other digital payments methods.
            </p>

            <button
              onClick={() => console.log("Apply button clicked")}
              className="inline-flex border hover:border-gray-800 items-center justify-center mb-10 bg-gray-800 hover:text-gray-800 hover:bg-white text-white font-medium  transition duration-300 gap-3 px-8 py-4 rounded-xl  "
            >
              <span>CLICK TO APPLY</span>
              <HiOutlineArrowLongRight className="text-xl" />
            </button>

            <p className="text-sm md:text-base text-gray-600 mb-2">
              Application Processing Fee is Rs. 500/- for Polytechnic (Diploma)
              and Rs. 1000/- for other courses.
            </p>

            <p className="text-sm   mt-4">
              <span className="font-semibold text-red-600">Please Note:</span>{" "}
              Cost of Application Fee is *Non-Refundable*
            </p>
          </div>
        </div>
      </div>
      <CustomTopFooter data={instituteFooterData} />
    </>
  );
};

export default OnlineAdmission;
