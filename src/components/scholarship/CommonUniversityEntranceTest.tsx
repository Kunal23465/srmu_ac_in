import React from "react";
import CustomScholarshiptable from "../../utils/custom/CustomScholarshiptable";
import { ScholarshipTableData, ScholarshipTableHeadData } from "../../data/admissions/scholarship/common-university-entrance-test-data";
import { Link } from "react-router-dom";

const CommonUniversityEntranceTest: React.FC = () => {
  return (
    <div className="py-15 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-5xl pb-2 sm:pb-15 font-medium">Common University Entrance Test</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="w-full sm:w-xl">
          <p className="text-xl sm:text-2xl font-medium uppercase pb-5 sm:pb-10 ">APPLY FOR 2026</p>
          <Link
            to="/online-admission"
            className="cursor-pointer text-white font-medium bg-[#0f4a85] border border-transparent transition-colors duration-500 hover:border-black hover:text-black hover:bg-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl"
          >
            APPLY NOW
          </Link>
        </div>
        <div className="">
          <h2 className="text-lg sm:text-xl font-bold uppercase">Counselling Schedule & Process</h2>
          <ul className="space-y-1 sm:space-y-3 py-5 text-sm sm:text-base">
            {[
              "Schedule – Yet to be declared",
              <>
                Fill online application by clicking –{" "}
                <a href="/student-portal-redirect" target="_blank" rel="nofollow noreferrer">
                  online admission form
                </a>
              </>,
              "Visit the admission office with documents and fees for seat-locking",
              "Seat allotment will be done as per availability of seats and CUET score",
              "Issue of offer letter for admission",
              "Document verification",
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
            <strong>Note:</strong> Seat locking can be done online also. Please connect on our toll-free 18001026004 or helpline 9838904666 for assistance.{" "}
          </p>
          <h2 className="text-xl font-bold uppercase pt-15">Documents Required for Counselling</h2>
          <p className="py-5">Candidates should ensure that they carry following documents while visiting admission offices for counseling:</p>
          <ul className="space-y-1 sm:space-y-3 text-sm sm:text-base">
            {[
              "Original High School mark sheet and certificate with one self-attested copy",
              "Original Intermediate mark sheet and certificate with one self-attested copy",
              <div className="inline">
                Original Graduation mark sheet(s) and degree certificate with one self-attested copy <strong>(For PG/B.Ed./LL.B. Programs only)</strong>
              </div>,
              "Valid identity proof and one self-attested copy",
              "Two passport-size photographs",
              <strong>
                Seat locking amount of Rs 10000/- (Rupees Ten Thousand only) payable through cash/ card/ online/ demand draft. This will be adjusted against first year course fee
              </strong>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="inline-block mt-[6px]"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#0f4a85",
                    borderRadius: "50%",
                    minWidth: "10px",
                  }}
                ></span>
                {item}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold py-5">CUET Scholarships Criteria</h2>

          <div className="pt-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <CustomScholarshiptable head={ScholarshipTableHeadData} data={ScholarshipTableData} />
            <p className="py-5">
              <strong>Please check your CUET – 2026 result by clicking:</strong>
              <a href="https://cuet.samarth.ac.in/" target="_blank" className="underline">
                {" "}
                https://cuet.samarth.ac.in/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonUniversityEntranceTest;
