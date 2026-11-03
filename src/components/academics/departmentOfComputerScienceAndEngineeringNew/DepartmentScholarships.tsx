import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  BadgeCheck,
  ShieldCheck,
  UsersRound,
  Accessibility,
  MapPin,
  Medal,
  ChartNoAxesColumnIncreasing,
  Globe2,
  UserRound,
  Star,
} from "lucide-react";
import AdditionInScholarImg from "../../../assets/images/addition-in-scholar.png";
import Classes from "../../../utils/styles/Global.module.css";

export const departmentScholarshipItems = [
  { text: "SRMUSET Based Scholarship", icon: GraduationCap },
  { text: "MERIT Based Scholarship", icon: BadgeCheck },
  { text: "Defence, Paramilitary & Police", icon: ShieldCheck },
  { text: "Sibling/Ward of SRM Group Staff, Student & Alumni", icon: UsersRound },
  { text: "Divyang", icon: Accessibility },
  { text: "National/State Level", icon: MapPin },
  { text: "Sportsperson", icon: Medal },
  { text: "Career Progression", icon: ChartNoAxesColumnIncreasing },
  { text: "Student of another state and country", icon: Globe2 },
  { text: "Ward of a Single Parent", icon: UserRound },
  { text: "Divyang · Sportsperson · Single Parent", icon: UserRound },
];

export interface DepartmentScholarshipsProps {
  id?: string;
  className?: string;
  eligibilityHref?: string;
  applyNowHref?: string;
  scholarshipIllustration?: string;
  fullHeightScholarshipIllustration?: boolean;
  backgroundImage?: string;
  scholarshipCardBackgroundImage?: string;
}

export const DepartmentScholarships: React.FC<DepartmentScholarshipsProps> = ({
  id = "scholarships",
  className = "",
  eligibilityHref = "/program-finder-new",
  applyNowHref = "/scholarship-scheme",
  scholarshipIllustration = AdditionInScholarImg,
  fullHeightScholarshipIllustration = false,
  backgroundImage,
  scholarshipCardBackgroundImage,
}) => {
  const [showAllScholarships, setShowAllScholarships] = useState(false);

  return (
    <section
      className={`pt-4 pb-4 sm:py-10 px-4 sm:px-6 bg-white scroll-mt-24 border-b border-[#e0e0e0] ${className}`}
      id={id}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      <div className={`${Classes["container"]} cse-content-container mx-auto`}>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Side: Trophy / Jagran Banner */}
          <div className="order-2 sm:order-none w-full lg:w-2/5 xl:w-[35%] flex">
            <img
              src="/assets/images/Trophy.png"
              alt="Future Ready University"
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>

          {/* Right Side: Scholarship Details */}
          <div className="order-1 sm:order-none min-w-0 w-full lg:w-3/5 xl:w-[65%] flex flex-col gap-4">
            {/* Top: Typography & Books Image */}
            <div
              className="flex flex-row flex-wrap items-center justify-between bg-white rounded-[20px] p-5 border border-[#e0e0e0] shadow-sm"
              style={
                scholarshipCardBackgroundImage
                  ? {
                      backgroundImage: `url(${scholarshipCardBackgroundImage})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : undefined
              }
            >
              <div className="w-[55%] sm:w-[60%] flex flex-col items-start px-2">
                <span className="text-[#14284E] font-bold text-[18px] sm:text-[22px] mb-1 font-display">
                  Avail Up to
                </span>
                <div className="text-[#d62c2b] font-black text-[50px] sm:text-[75px] leading-[0.8] tracking-tighter flex items-start mb-2 drop-shadow-sm">
                  100%{" "}
                  <Star
                    aria-hidden="true"
                    className="h-5 w-5 sm:h-6 sm:w-6 leading-none mt-1 ml-1 shrink-0 text-[#ffb703] fill-current drop-shadow-sm"
                    strokeWidth={2}
                  />
                </div>
                <h2 className="text-[#14284E] font-black text-[24px] sm:text-[32px] font-display leading-[1] tracking-tight mb-4">
                  Scholarships
                </h2>

                <div className="hidden sm:flex flex-row flex-nowrap items-center gap-2 sm:gap-3 w-full overflow-x-auto pb-1 sm:pb-0">
                  <Link
                    to={applyNowHref}
                    className="uppercase tracking-wider group relative overflow-hidden inline-flex flex-none items-center gap-1.5 sm:gap-2 bg-[#ffb703] hover:bg-[#ffa000] text-[#14284E] font-bold text-[12px] sm:text-[14px] px-4 sm:px-6 py-2.5 rounded-full shadow-[0_4px_12px_rgba(255,183,3,0.3)] hover:shadow-[0_6px_16px_rgba(255,183,3,0.45)] transition-all hover:-translate-y-0.5"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                    Apply Now
                    <ArrowRight
                      className="w-4 h-4 text-[#14284E] group-hover:translate-x-1 transition-transform"
                      strokeWidth={2.5}
                    />
                  </Link>
                  <a
                    href={eligibilityHref}
                    className="uppercase tracking-wider group inline-flex flex-none items-center gap-1.5 sm:gap-2 bg-white border border-[#14284E]/20 text-[#14284E] font-bold text-[12px] sm:text-[14px] px-4 sm:px-6 py-2.5 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    Eligibility
                    <ArrowRight
                      className="w-4 h-4 text-[#14284E] group-hover:translate-x-1 transition-transform"
                      strokeWidth={2.5}
                    />
                  </a>
                </div>
              </div>

              <div
                className={`w-[45%] sm:w-[40%] flex justify-center mt-0 ${
                  fullHeightScholarshipIllustration
                    ? "sm:self-stretch sm:items-end sm:-mb-5 sm:-mr-5"
                    : ""
                }`}
              >
                <img
                  src={scholarshipIllustration}
                  alt="Scholarships"
                  className={`object-contain drop-shadow-md ${
                    fullHeightScholarshipIllustration
                      ? "w-[90%] sm:w-[120%] sm:max-w-none sm:translate-y-[13%] sm:scale-[1.2] sm:origin-bottom"
                      : "w-[90%] sm:w-[90%] max-w-[150px] sm:max-w-[250px]"
                  }`}
                />
              </div>

              {/* Mobile Buttons */}
              <div className="flex sm:hidden flex-row flex-wrap items-center gap-2 w-full mt-5 justify-center pb-1">
                <Link
                  to={applyNowHref}
                  className="uppercase tracking-wider group relative overflow-hidden inline-flex flex-none items-center gap-1.5 bg-[#ffb703] text-[#14284E] font-bold text-[12px] px-4 py-2.5 rounded-full shadow-[0_4px_12px_rgba(255,183,3,0.3)] hover:shadow-[0_6px_16px_rgba(255,183,3,0.45)] transition-all"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                  Apply Now
                  <ArrowRight className="w-4 h-4 text-[#14284E]" strokeWidth={2.5} />
                </Link>
                <a
                  href={eligibilityHref}
                  className="uppercase tracking-wider group inline-flex flex-none items-center gap-1.5 bg-white border border-[#14284E]/20 text-[#14284E] font-bold text-[12px] px-4 py-2.5 rounded-full shadow-sm transition-all"
                >
                  Eligibility
                  <ArrowRight className="w-4 h-4 text-[#14284E]" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Bottom: Grid */}
            <div className="bg-[#FAFAFA] p-4 sm:p-5 rounded-[20px] relative overflow-hidden border border-[#e0e0e0] flex-1">
              <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <pattern id="dots_scholarships" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#ffb703" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots_scholarships)" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 relative z-10 h-full content-start">
                {departmentScholarshipItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to="/scholarship-scheme"
                    className={`flex items-center gap-3 bg-white p-2 px-3 sm:px-4 rounded-full shadow-[0_1px_8px_rgba(20,40,78,0.03)] hover:shadow-[0_4px_12px_rgba(20,40,78,0.08)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer border border-[#F0F4F8] ${
                      !showAllScholarships && idx >= 4 ? "hidden sm:flex" : ""
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FCE8E8] flex items-center justify-center shrink-0 group-hover:bg-[#d62c2b] group-hover:shadow-[0_4px_8px_rgba(214,44,43,0.3)] transition-all duration-300">
                      <item.icon
                        className="w-3.5 h-3.5 text-[#d62c2b] group-hover:text-white transition-colors duration-300"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="w-[1px] h-4 bg-gray-200 shrink-0"></div>
                    <span className="text-[#14284E] text-[14px] sm:text-[15px] font-bold font-display leading-snug sm:leading-[1.25] min-w-0 flex-1">
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
              {departmentScholarshipItems.length > 4 && (
                <button
                  type="button"
                  onClick={() => setShowAllScholarships(!showAllScholarships)}
                  className="normal-case text-[14px] font-bold text-[#ffb703] hover:text-[#ffa000] mt-3 pb-1 flex items-center justify-center sm:hidden transition-colors w-full z-20 relative cursor-pointer"
                >
                  {showAllScholarships ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentScholarships;
