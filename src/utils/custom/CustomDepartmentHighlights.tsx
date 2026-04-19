import React from "react";
import dev1 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/1.jpg";
import dev2 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/2.jpg";
import dev3 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/3.jpg";
import dev4 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/4.jpg";
import "./CustomDepartmentHighlights.css";


import { useEffect, useRef, useState } from "react";

export const useScrollSteps = (stepsLength: number) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const triggerPoint = windowHeight * 0.5;

      if (rect.top > triggerPoint || rect.bottom <= 0) return;

      // 🔥 Faster scroll range (adjust 0.6 → 0.5 or 0.4 for more speed)
      const totalScrollable = rect.height * 0.6;

      const currentScroll = triggerPoint - rect.top;

      const percent = Math.min(
        Math.max(currentScroll / totalScrollable, 0),
        1
      );

      setProgress(percent);

      const stepSize = 1 / stepsLength;
      const newIndex = Math.min(
        stepsLength - 1,
        Math.floor(percent / stepSize)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stepsLength]);

  return { containerRef, activeIndex, progress };
};







interface HighlightStep {
  id: number;
  title: string;
  brief: string;
  imagePath: string;
}

interface DepartmentHighlightsProps {
  heading: string;
  steps: HighlightStep[];
}

const CustomDepartmentHighlights: React.FC<
  DepartmentHighlightsProps
> = ({ heading, steps }) => {
  const dummyImages = [dev1, dev2, dev3, dev4];

  const { containerRef, activeIndex, progress } =
    useScrollSteps(steps.length);
  const [currentAnimatedIndex, setCurrentAnimatedIndex] = useState(0);
  const [previousAnimatedIndex, setPreviousAnimatedIndex] = useState<number | null>(null);
  const [transitionDirection, setTransitionDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (steps.length === 0) {
      setCurrentAnimatedIndex(0);
      setPreviousAnimatedIndex(null);
      return;
    }

    if (activeIndex === currentAnimatedIndex) {
      return;
    }

    setPreviousAnimatedIndex(currentAnimatedIndex);
    setTransitionDirection(activeIndex > currentAnimatedIndex ? "forward" : "backward");
    setCurrentAnimatedIndex(activeIndex);

    const timer = window.setTimeout(() => {
      setPreviousAnimatedIndex(null);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [activeIndex, currentAnimatedIndex, steps.length]);

  const animatedIndexes = previousAnimatedIndex === null
    ? [currentAnimatedIndex]
    : [previousAnimatedIndex, currentAnimatedIndex];

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden bg-white px-4 py-10">
        <h2 className="text-2xl font-bold text-[#0b2c3d] mb-8">
          {heading}
        </h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={`${step.id}-${index}-${step.title}`}>
              <h2 className="text-xl font-semibold mb-3 text-[#0b2c3d]">
                {step.title}
              </h2>

              <div
                className="text-gray-700 text-[13px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.brief }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full h-[80vh] bg-white"
      >
        <div className="sticky top-0 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full px-6">
            <h2 className="text-4xl font-bold text-[#0b2c3d] mb-14">
              {heading}
            </h2>

            <div className="grid grid-cols-[260px_1fr] gap-16">
              {/* Timeline */}
              <div className="relative flex flex-col gap-10">
                <div className="absolute left-[6px] top-0 w-[2px] h-full bg-gray-300">
                  <div
                    style={{ height: `${progress * 100}%` }}
                    className="absolute top-0 left-0 w-[2px] bg-[#0b2c3d] transition-all duration-500 ease-out"
                  />
                </div>

                {steps.map((step, index) => (
                  <div key={`${step.id}-${index}-${step.title}`} className="flex items-center gap-6">
                    <div
                      className={`w-4 h-4 rounded-full z-10 transition-all duration-500 ${index <= activeIndex
                        ? "bg-[#0b2c3d] scale-110"
                        : "bg-gray-300"
                        }`}
                    />
                    <span
                      className={`font-semibold transition-all duration-500 ${index === activeIndex
                        ? "text-[#0b2c3d]"
                        : "text-gray-400"
                        }`}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Content + Image */}
              <div className="grid grid-cols-2 gap-10 items-start">
                <div className="relative min-h-[340px] overflow-hidden">
                  {animatedIndexes.map((index) => {
                    const step = steps[index];

                    if (!step) {
                      return null;
                    }

                    const isCurrent = index === currentAnimatedIndex;
                    const isPrevious = index === previousAnimatedIndex;
                    const animationClass = isCurrent
                      ? transitionDirection === "forward"
                        ? "department-highlight-text-enter-right"
                        : "department-highlight-text-enter-left"
                      : isPrevious
                        ? transitionDirection === "forward"
                          ? "department-highlight-text-exit-left"
                          : "department-highlight-text-exit-right"
                        : "department-highlight-hidden";

                    return (
                      <div
                        key={`${step.id}-${isCurrent ? "current" : "previous"}`}
                        className={`absolute inset-0 ${animationClass}`}
                      >
                        <h2 className="text-2xl font-bold mb-6">
                          {step.title}
                        </h2>

                        <div className="scope_list [&_ul]:block! [&_ul]:pl-4"
                          dangerouslySetInnerHTML={{
                            __html: step.brief,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="relative flex justify-center items-center min-h-[320px] overflow-hidden">
                  {animatedIndexes.map((index) => {
                    const step = steps[index];

                    if (!step) {
                      return null;
                    }

                    const isCurrent = index === currentAnimatedIndex;
                    const isPrevious = index === previousAnimatedIndex;
                    const animationClass = isCurrent
                      ? transitionDirection === "forward"
                        ? "department-highlight-image-enter-right"
                        : "department-highlight-image-enter-left"
                      : isPrevious
                        ? transitionDirection === "forward"
                          ? "department-highlight-image-exit-left"
                          : "department-highlight-image-exit-right"
                        : "department-highlight-hidden";

                    return (
                      <img
                        key={`${step.id}-${isCurrent ? "current" : "previous"}-image`}
                        src={
                          step.imagePath ||
                          dummyImages[index]
                        }
                        alt={step.title}
                        className={`absolute inset-0 w-full h-[320px] object-cover shadow-md ${animationClass}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDepartmentHighlights;
