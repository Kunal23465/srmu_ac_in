import React, { useState } from "react";
import { CareerCounsellingCardData } from "../../../data/placement/placement-cell/PlacementTeamData";

const CareerCounselling: React.FC = () => {
  const [index, setIndex] = useState(0);

  const SliderControls: React.FC<{ totalItems: number }> = ({ totalItems }) => {
    const next = () => {
      if (index < totalItems - 2) setIndex((prev) => prev + 1);
    };

    const prev = () => {
      if (index > 0) setIndex((prev) => prev - 1);
    };
    return (
      <div className="flex space-x-3">
        <button
          onClick={prev}
          className={`border border-black cursor-pointer text-2xl w-15 h-15 flex items-center justify-center transition 
        ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400 hover:text-[#14457B]"}`}
          disabled={index === 0}
        >
          ‹
        </button>

        <button
          onClick={next}
          className={`border border-black cursor-pointer text-2xl w-15 h-15 flex items-center justify-center transition
        ${index >= totalItems - 3 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400 hover:text-[#14457B]"}`}
          disabled={index >= totalItems - 3}
        >
          ›
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div className="max-w-5xl">
              <h1 className="text-5xl! md:text-5xl font-bold">Career Counselling and Guidance</h1>
              <p className="mt-3 text-sm md:text-base opacity-100 font-light">
                Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and
                also to sail through the cut throat competition at all levels in the job market. Career counseling is implemented in several innovative ways to create awareness and
                provide students with an ability to decide on what is right for them. Counseling sessions organized in the University focuses on helping the students for guidance,
                moral support, and exploring solutions for the problems being faced by students while choosing the right career path. Various lectures, seminars, counseling sessions
                are organized by the experts in this regard.
              </p>
            </div>

            <div className="flex space-x-2 mt-2">
              <SliderControls totalItems={CareerCounsellingCardData.length} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {CareerCounsellingCardData.slice(index, index + 3).map((item) => (
              <div key={item.id} className=" rounded-xl w-full sm:w-1/2 lg:w-1/4">
                <div className="relative w-full h-100 group overflow-hidden rounded-xl">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <h3 className="absolute bottom-5 polygon_bg w-full text-xl text-white bg-black/60 p-4 font-medium transition-opacity duration-300 group-hover:opacity-0">
                    {item.name}
                  </h3>
                  <div
                    className="absolute inset-0 m-2 p-5 flex justify-center 
                  bg-white text-black 
                  scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 
                  transition-all duration-800 rounded-xl"
                  >
                    <h3 className="text-xl font-bold text-center">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounselling;
