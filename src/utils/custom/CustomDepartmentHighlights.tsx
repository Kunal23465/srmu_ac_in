// DepartmentHighlights.tsx
import React, { useEffect, useRef, useState } from "react";

interface HighlightStep {
  id: number;
  title: string;
  bulletPoints: string[];
  image: string;
}

interface DepartmentHighlightsProps {
  heading: string;
  steps: HighlightStep[];
}

const CustomDepartmentHighlights: React.FC<DepartmentHighlightsProps> = ({ heading, steps }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isPinned = rect.top <= 0 && rect.bottom >= windowHeight;
      if (!isPinned) return;

      const scrollable = rect.height - windowHeight;
      const scrolled = Math.min(Math.max(Math.abs(rect.top), 0), scrollable);
      const percent = scrollable === 0 ? 0 : scrolled / scrollable;

      const index = Math.min(steps.length - 1, Math.floor(percent * steps.length));

      setActiveIndex(index);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps]);

  return (
    <div ref={containerRef} className="relative w-full h-[180vh] bg-white">
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          {/* Top Heading */}
          <h2 className="text-4xl font-bold text-[#0b2c3d] mb-14 text-left">{heading}</h2>

          {/* Main Two Column Layout */}
          <div className="grid grid-cols-[260px_1fr] gap-16">
            {/* LEFT : Timeline */}
            <div className="relative flex flex-col gap-10">
              {/* Vertical Line */}
              <div className="absolute left-[6px] top-0 w-[2px] h-full bg-gray-300">
                <div style={{ height: `${progress * 100}%` }} className="absolute top-0 left-0 w-[2px] bg-[#0b2c3d] transition-all duration-300" />
              </div>

              {/* Timeline Items */}
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-6">
                  {/* Dot */}
                  <div className={`w-4 h-4 rounded-full z-10 transition ${index <= activeIndex ? "bg-[#0b2c3d]" : "bg-gray-300"}`}></div>

                  {/* Title */}
                  <span className={`text-base font-semibold transition ${index === activeIndex ? "text-[#0b2c3d]" : "text-gray-400"}`}>{step.title}</span>
                </div>
              ))}
            </div>

            {/* RIGHT : Content + Image */}
            <div className="grid grid-cols-2 gap-10 items-start">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-6">{steps[activeIndex].title}</h3>

                <ul className="space-y-4">
                  {steps[activeIndex].bulletPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-700 text-[15px]">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center">
                <img src={steps[activeIndex].image} alt={steps[activeIndex].title} className="w-full shadow-md h-[320px] object-cover transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDepartmentHighlights;


// const steps = [
//   {
//     id: 1,
//     title: "Achievements",
//     image: "https://srmu.ac.in/storage/common-section/mission-08022405412963.jpg",
//     bulletPoints: [
//       "5 Students CSE (Shivam Agarwal,Debashish Bose,Aditya Agarwal,Abhishek Singh Bohra,Gaurav Singh) qualified GATE exam in 2022-2023",
//       "Debashish Bose selected for M. Tech program in NIT Karnataka, Surthal",
//     ],
//   },
//   {
//     id: 2,
//     title: "Research",
//     image: "https://srmu.ac.in/storage/common-section/vision-10102304420738.png",
//     bulletPoints: ["100+ Research Papers published in reputed journals", "08+ Books and Book Chapters published", "05+ Ph.D. Awarded", "04+ Patents Granted/ Published"],
//   },
//   {
//     id: 3,
//     title: "Labs",
//     image: "https://srmu.ac.in/storage/common-section/613x715-beyond-11zon-1-28022411364712-15052410402616.jpg",
//     bulletPoints: [
//       "Google Android Lab",
//       "L&T Certified Lab",
//       "Artificial Intelligence & Machine Learning Lab",
//       "Cloud Computing Lab",
//       "Cyber Security Lab",
//       "Python Programming Lab",
//       "Oracle Peoplesoft Lab",
//     ],
//   },
//   {
//     id: 4,
//     title: "Beyond Academics",
//     image: "https://srmu.ac.in/storage/common-section/core-values-08022405434112.jpg",
//     bulletPoints: [
//       "Gagan Singh Yadav achieved 1st position in Table Tennis at Ullas 2023, Annual Fest held at SRMU",
//       "Raj Singh Parihar achieved 2nd position in Football at Ullas 2023,Annual Fest held at SRMU",
//     ],
//   },
// ];


{/* <CoustomDepartmentHighlights heading="Department Highlights" steps={steps} />; */}