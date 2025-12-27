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
          <h2 className="lg:text-[50px] md:text-[46.875px] text-[22.4px] sm:text-[22.4px] font-medium text-[#023047] mb-8">
            {title}
          </h2>

          <div>
            {desc.map((item, index) => (
              <p key={index} className="mb-4 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-justify">
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
