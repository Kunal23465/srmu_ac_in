import React, { useEffect, useState } from "react";
import { counterDataType } from "../../data/home/counterData";

interface counterDataPropsType {
  counterData: counterDataType[];
  classes?: any;
  aboutusClass?: any;
}

const Counter: React.FC<counterDataPropsType> = ({ counterData, classes }) => {

  const [CountUp, setCountUp] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    setMounted(true);

    const load = async () => {
      const mod = await import("react-countup");
      setCountUp(() => mod.default);
    };

    load();

  }, []);

  return (

    <div className={`parent-box ${classes || ""} py-7 md:py-10 lg:py-14`}>

      {counterData?.map((item: any) => {

        const numericValue = Number(item.value);
        const isNumeric = !isNaN(numericValue);

        return (

          <div key={item.id}>

            <h1
              className={`lg:text-[50px] md:text-[46.875px] text-[21px] font-semibold ${item.icon ? "text-white" : "text-[#ffb703]"
                } text-center flex items-center justify-center`}
            >

              {item.icon && (
                <span className="pt-2 pr-1">
                  <img src={item.icon} alt="" />
                </span>
              )}

              {/* SSR fallback */}
              {!mounted || !CountUp || !isNumeric ? (

                <span>
                  {item.value}
                  {item.suffix}
                </span>

              ) : (

                <CountUp
                  start={0}
                  end={numericValue}
                  duration={3}
                  decimals={
                    item.value.toString().includes(".")
                      ? item.value.toString().split(".")[1].length
                      : 0
                  }
                  separator=""
                  suffix={item.suffix}
                  enableScrollSpy
                >
                  {({ countUpRef }: any) => <span ref={countUpRef} />}
                </CountUp>

              )}

            </h1>

            <p className="lg:text-[22px] md:text-[20.625px] text-[14px] text-center mt-3">
              {item.label}
            </p>

          </div>

        );

      })}

    </div>

  );
};

export default Counter;