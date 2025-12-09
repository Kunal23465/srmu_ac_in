import React from 'react';
import { outreachItems } from '../../../data/campus-life/outreach-activations/outreach-activations-data';
import Classes from "../../../utils/styles/Global.module.css";

const OutreachItems: React.FC = () => {
  const { desc, img, title } = outreachItems;

  return (
    <div className="mt-10 bg-[#f2f2f2]">
      <div
        className={`${Classes["container"]} py-20 flex flex-col md:flex-row gap-8 items-center w-full`}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium text-[#023047] mb-8">
            {title}
          </h2>

          <div>
            {desc.map((item, index) => (
              <p key={index} className="mb-4 text-base md:text-lg text-justify">
                {item.point}
              </p>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full">
          <img
            src={img}
            alt={title}
            className="hidden md:block w-full h-auto md:h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OutreachItems;
