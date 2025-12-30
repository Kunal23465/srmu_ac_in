import React, { useState, useEffect } from "react";
import { OutreachInitiativesData } from "../../../data/campus-life/outreach-activations/outreach-activations-data";
import Classes from "../../../utils/styles/Global.module.css";

const OutreachInitiatives: React.FC = () => {
  const { title, desc, initiatives } = OutreachInitiativesData;
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleFlip = (index: number) => {
    if (isMobile) {
      setFlippedCards({ [index]: true });
    }
  };

  return (
    <div className="pt-20 pb-28 bg-[#f2f2f2]">
      <div className={`${Classes["container"]}`}>
        <div className="text-center px-4">
          <h1 className="text-[28px] lg:text-[3.125rem] fw500 mb-4">{title}</h1>
          <p className="text-gray-600 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">{desc}</p>
        </div>

        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 ">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="
                            group 
                            w-full 
                            aspect-3/4 
                            bg-transparent rounded-2xl 
                            relative
                        "
              style={{ perspective: "1200px" }}
              onClick={() => handleFlip(index)}
            >
              <div
                className={`
                            relative w-full h-full 
                            transition-transform duration-700 
                            transform-3d 
                            ${isMobile ? (flippedCards[index] ? "transform-[rotateY(180deg)]" : "") : "group-hover:transform-[rotateY(180deg)]"}
                        `}
              >
                {/* Front */}
                <div
                  className="
                                absolute inset-0 
                                bg-gray-200 text-black 
                                overflow-hidden 
                                rounded-2xl
                                backface-hidden
                            "
                >
                  <img src={initiative.front.img} alt="Image" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 text-white lg:text-[26px] md:text-[24.375px] text-[22.75px] sm:text-[22.75px] font-semibold drop-shadow-md">
                    {initiative.front.title}
                  </div>
                </div>

                {/* Back */}
                <div
                  className="
                                absolute inset-0 
                                flex flex-col items-center justify-center 
                                bg-white
                                p-6 text-center 
                                overflow-hidden 
                                rounded-2xl
                                backface-hidden 
                                transform-[rotateY(180deg)]
                            "
                >
                  <h1 className="text-2xl font-semibold mb-2">{initiative.back.title}</h1>

                  <p className="text:sm md:text-base  ">{initiative.back.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutreachInitiatives;
