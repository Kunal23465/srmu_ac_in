import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import DirectorModal from "./DirectorModal";

interface DirectorMessageProps {
  data: {
    name: string;
    designation: string;
    title: string;
    titleSibling: string;
    content: string;
    longContent: string;
    footerDesignation: string;
  };
}
const DirectorMessage: React.FC<DirectorMessageProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h2 className="lg:text-[30px] mb:text-[27.255px] sm:text-[21.952px] text-[21.952px] mb-3"><strong>{data.title}<br/>{data.titleSibling}</strong></h2>
      <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]  mb-6">{data.content}</p>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#0f4a85]! text-white! text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] border-2 uppercase   border-[#0f4a85] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center   font-medium px-5 lg:px-8 py-3 rounded-md text-nowrap mt-5 sm:mt-0  group "
      >
        View More
        <span className="transition-all duration-200  group-hover:rotate-360">
          <MdArrowRightAlt size={26} />
        </span>{" "}
      </button>

      <DirectorModal open={openModal} onClose={() => setOpenModal(false)} content={data} />
    </div>
  );
};

export default DirectorMessage;
