import React, { useEffect, useRef, useState } from "react";
import { counterDataType } from "../../data/home/counterData";

interface counterDataPropsType {
  counterData: counterDataType[];
  classes?: any;
  aboutusClass?: any;
}

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

function useCountUp(
  end: number,
  duration: number = 3000,
  decimals: number = 0,
  enabled: boolean = true
): string {
  const [display, setDisplay] = useState("0");
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasStarted = useRef(false);

  const formatValue = (val: number): string =>
    val.toFixed(decimals);

  const startAnimation = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      setDisplay(formatValue(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(formatValue(end));
      }
    };

    frameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!enabled) {
      setDisplay(formatValue(end));
      return;
    }

    setDisplay(formatValue(0));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, decimals, enabled]);

  return display;
}

interface CountUpSpanProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

const CountUpSpan: React.FC<CountUpSpanProps> = ({
  end,
  duration = 3,
  decimals = 0,
  suffix = "",
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const hasStarted = useRef(false);
  const [display, setDisplay] = useState("0");

  const formatValue = (val: number) => val.toFixed(decimals);

  const startAnimation = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutQuad(progress);
      setDisplay(formatValue(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(formatValue(end));
      }
    };

    frameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <span ref={containerRef}>
      {display}
      {suffix}
    </span>
  );
};

const Counter: React.FC<counterDataPropsType> = ({ counterData, classes }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`parent-box ${classes || ""} py-7 md:py-10 lg:py-14`}>
      {counterData?.map((item: any) => {
        const numericValue = Number(item.value);
        const isNumeric = !isNaN(numericValue);
        const decimals = item.value?.toString().includes(".")
          ? item.value.toString().split(".")[1].length
          : 0;

        return (
          <div key={item.id}>
            <div
              className={`lg:text-[50px] md:text-[46.875px] text-[21px] font-semibold ${
                item.icon ? "text-white" : "text-[#ffb703]"
              } text-center flex items-center justify-center`}
            >
              {item.icon && (
                <span className="pt-2 pr-1">
                  <img src={item.icon} alt={item.title || "SRMU statistic icon"} width={40} height={40} />
                </span>
              )}

              {!mounted || !isNumeric ? (
                <span>
                  {item.value}
                  {item.suffix}
                </span>
              ) : (
                <CountUpSpan
                  end={numericValue}
                  duration={3}
                  decimals={decimals}
                  suffix={item.suffix}
                />
              )}
            </div>

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