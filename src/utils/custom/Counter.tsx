import React from "react";
import CountUp from "react-countup";
import { counterDataType } from "../../data/about/leadership-and-governance/leadership-and-governance-data";

interface counterDataPropsType {
  counterData: counterDataType[];
  classes?: any;
  aboutusClass?: any;
}
const Counter: React.FC<counterDataPropsType> = ({ counterData, classes, aboutusClass }) => {
  return (
    <div className={`parent-box ${classes ? classes : ""}   py-7 md:py-10 lg:py-14`}>
      {counterData.map((item: any) => (
        <div key={item.id}>
          <h1 className={`text-xl sm:text-3xl lg:text-4xl font-semibold ${item.icon ? "text-white" : "text-[#ffb703]"}   text-center flex items-center justify-center`}>
            {item.icon && (
              <span className="pt-2 pr-1">
                <img src={item.icon} alt="" />
              </span>
            )}{" "}
            <CountUp start={0} end={Number(item.value)} duration={3} separator="" suffix={item.suffix} enableScrollSpy={true}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </h1>
          <p className={`text-sm sm:text-base md:text-xl text-manulay-center ${aboutusClass ? aboutusClass : "text-white  mt-3"} `}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
