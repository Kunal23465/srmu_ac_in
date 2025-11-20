import React, { useState } from "react";
import { PlacementTeamCardData, TrainingTeamCardData } from "../../../data/placement/placement-cell/PlacementTeamData";

const OurTeam: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [team, setTeam] = useState("Placement");

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
      <center>
        <p className="text-yellow-400 text-5xl mb-20">Our Team</p>
        <span
          className={`text-2xl pb-5 border-b-4 transition-all duration-300 cursor-pointer
    ${team === "Placement" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
          onClick={() => setTeam("Placement")}
        >
          PLACEMENT TEAM
        </span>
        <span
          className={`text-2xl pb-5 ml-5 border-b-4 transition-all duration-300 cursor-pointer
    ${team === "Training" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
          onClick={() => setTeam("Training")}
        >
          TRAINING TEAM
        </span>
      </center>
      {team === "Placement" ? (
        <div className="w-full py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <div className="max-w-5xl">
                <h1 className="text-3xl! md:text-5xl font-bold">Meet Our Placement Team</h1>
                <p className="mt-3 text-sm md:text-base opacity-100 font-light">
                  SRMU's placement team is dedicated to facilitating successful career transitions, forging connections with industries, and organizing impactful placement drives.
                  With a commitment to students' employability, the team actively collaborates with corporate partners, providing invaluable support to ensure graduates secure
                  rewarding and relevant employment opportunities.
                </p>
              </div>

              <div className="flex space-x-2 mt-2">
                <SliderControls totalItems={PlacementTeamCardData.length} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {PlacementTeamCardData.slice(index, index + 3).map((item) => (
                <div key={item.id} className="text-black flex-none rounded-xl w-full sm:w-1/2 lg:w-1/4 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative w-full h-85">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                    <h3 className="absolute bottom-5 left-5 text-2xl text-white font-medium">
                      {item.name}
                      <br />
                      <span className="text-amber-400 text-[16px]">{item.position}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : team === "Training" ? (
        <div className="w-full py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <div className="max-w-5xl">
                <h1 className="text-3xl! md:text-5xl font-bold">Meet Our Training Team</h1>
                <p className="mt-3 text-sm md:text-base opacity-100 font-light">
                  The training team at SRMU comprises dedicated professionals focused on enhancing the skills and capabilities of students and faculty through comprehensive training
                  programs. Leveraging industry insights and educational expertise, the team is committed to fostering a learning environment that aligns with current trends and
                  prepares individuals for real-world challenges.
                </p>
              </div>

              <div className="flex space-x-2 mt-2">
                <SliderControls totalItems={TrainingTeamCardData.length} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              {TrainingTeamCardData.slice(index, index + 3).map((item) => (
                <div key={item.id} className="text-black flex-none rounded-xl w-full sm:w-1/2 lg:w-1/4 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative w-full h-85">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                    <h3 className="absolute bottom-5 left-5 text-2xl text-white font-medium">
                      {item.name}
                      <br />
                      <span className="text-amber-400 text-[16px]">{item.position}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
};

export default OurTeam;
