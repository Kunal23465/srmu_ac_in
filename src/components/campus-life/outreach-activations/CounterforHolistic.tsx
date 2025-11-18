import React from "react";
import CountUp from "react-countup";
import { counterDataType } from "../../../data/home/counterData";

interface counterDataPropsType {
  counterData: counterDataType[];
  classes?: any;
}

const CounterforHolistic: React.FC<counterDataPropsType> = ({ counterData, classes }) => {
  return (
    <div
      className={`w-full  flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-5 ${classes ? classes : ""
        }`}
    >
      {counterData.map((item: any) => (
        <div key={item.id} className="flex items-center text-center gap-5">

          {/* ICON */}
          <div>
            {item.icon && (
              <span className="flex justify-center mb-2">
                <img src={item.icon} alt="" className="w-22 h-22" />
              </span>
            )}
          </div>

          <div className="leading-10 text-justify">
            {/* NUMBER */}
            <h1 className="font60 text-yellow-500">
              <CountUp
                start={0}
                end={Number(item.value)}
                duration={3}
                separator=""
                suffix={item.suffix}
                enableScrollSpy={true}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h1>

            {/* LABEL UNDER NUMBER ONLY */}
            <p className="text-sm sm:text-base md:text-xl text-white mt-3">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterforHolistic;
