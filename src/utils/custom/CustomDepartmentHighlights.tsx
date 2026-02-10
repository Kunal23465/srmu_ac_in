// DepartmentHighlights.tsx
import React, { useEffect, useRef, useState } from "react";
import dev1 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/1.jpg";
import dev2 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/2.jpg";
import dev3 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/3.jpg";
import dev4 from "../../assets/images/programs/btechincseaiandml/opportunities/highlights/4.jpg";

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

const CustomDepartmentHighlights: React.FC<DepartmentHighlightsProps> = ({
  heading,
  steps,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dummyImages = [dev1, dev2, dev3, dev4];
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  /* Desktop scroll logic only */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isPinned = rect.top <= 0 && rect.bottom >= windowHeight;
      if (!isPinned) return;

      const scrollable = rect.height - windowHeight;
      const scrolled = Math.min(
        Math.max(Math.abs(rect.top), 0),
        scrollable
      );
      const percent = scrollable === 0 ? 0 : scrolled / scrollable;

      const index = Math.min(
        steps.length - 1,
        Math.floor(percent * steps.length)
      );

      setActiveIndex(index);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps]);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden bg-white px-4 py-10">
        <h2 className="text-2xl font-bold text-[#0b2c3d] mb-8">
          {heading}
        </h2>

        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.id}>
              <h3 className="text-xl font-semibold mb-3 text-[#0b2c3d]">
                {step.title}
              </h3>

              <div
                className="text-gray-700 text-[13px] leading-relaxed [&_ul]:list-disc! [&_li]:ml-5! [&_span]:text-[13px]!  [&_li]:text-[13px]!"
                dangerouslySetInnerHTML={{ __html: step.brief }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full h-[180vh] bg-white"
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
                    className="absolute top-0 left-0 w-[2px] bg-[#0b2c3d] transition-all duration-300"
                  />
                </div>

                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-6">
                    <div
                      className={`w-4 h-4 rounded-full z-10 ${index <= activeIndex
                        ? "bg-[#0b2c3d]"
                        : "bg-gray-300"
                        }`}
                    />
                    <span
                      className={`font-semibold ${index === activeIndex
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
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    {steps[activeIndex]?.title}
                  </h3>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: steps[activeIndex]?.brief,
                    }}
                  />
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={
                      steps[activeIndex]?.imagePath ||
                      dummyImages[activeIndex]
                    }
                    alt={steps[activeIndex]?.title}
                    className="w-full h-[320px] object-cover shadow-md"
                  />
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
