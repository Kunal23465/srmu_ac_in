import React from "react";
import { alumniData } from "../../data/placement/alumni-testimonials-data";
import AlumniCard from "./AlumniCard";

interface AlumniSliderProps {
  emblaRef: any;
}

const AlumniSlider: React.FC<AlumniSliderProps> = ({ emblaRef }) => {






  return (
    <div className="w-full overflow-hidden">

      <div
        ref={emblaRef}
        className="overflow-hidden notable slider_placement_dots_law placement_dots_law_left pb-10"
      >

        <div className="flex">

          {alumniData.map((item) => (

            <div
              key={item.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >

              <div className="px-2 sm:px-4">
                <AlumniCard {...item} />
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default AlumniSlider;