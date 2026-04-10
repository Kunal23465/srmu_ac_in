import React from "react";
import { otherDataTypes } from "../../types/home-data-type";
interface CustomOverviewSectionProps {
  data: {
    heading: string;
    content: string | React.ReactNode;
    counterSibling?: string | React.ReactNode;
    otherData?: otherDataTypes[];
  };
}
const CustomOverviewSection: React.FC<CustomOverviewSectionProps> = ({ data }) => {
  const { heading, content, counterSibling, otherData } = data;
  return (
    <div className={` py-7 md:py-10 lg:py-14`}>
      <div className={`flex flex-col  gap-4 items-stretch  justify-between ${otherData && otherData?.length > 0 ? "md:flex-row" : "md:flex-row"}`}>
        <div
          className={`w-auto  ${otherData && otherData?.length > 0 ? "md:border-r-4" : " border-l-4 pl-2 md:pl-0 md:border-l-0  md:border-r-5"
            }  border-[#ffb703] flex flex-col justify-start`}
        >
          <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-[#023047] fw500 whitespace-pre-line font-semibold lg:leading-15 pr-4 sm:min-w-[350px] mt-5">{heading}</h1>
        </div>
        <div className={`  ${otherData && otherData?.length > 0 ? "" : "md:pl-8 md:py-4"}`}>
          <div className="text-justify lg:pr-30 md:pr-0 sm:pr-0 text-sm lg:text-[16px] md:text-[15px] sm:text-[15px]">
            {typeof content === "string" ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content}

            {counterSibling &&
              (typeof counterSibling === "string" ? (
                <p>
                  <br />
                  {counterSibling}
                </p>
              ) : (
                counterSibling
              ))}
          </div>
        </div>
      </div>
      {otherData && (
        <div className="pt-7 md:pt-10 lg:pt-14">
          {otherData.map((ele) => (
            <>
              <div>
                {/* @ts-ignore */}
                {ele.paraContent.map((ele) => (
                  <p className="mt-1.5">{ele}</p>
                ))}
              </div>
              {ele.listContent && (
                <ul className="list-[square] ml-4 mt-4">
                  {ele.listContent.map((item) => (
                    <li className="yellow">
                      {" "}
                      <span className="font-semibold">{item.boldItem}</span>
                      {item.item}
                    </li>
                  ))}
                </ul>
              )}

              {ele.eligibility && (
                <div className="mt-4">
                  <p>
                    <span className="font-semibold">Eligibility : </span> {ele.eligibility}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default CustomOverviewSection;
