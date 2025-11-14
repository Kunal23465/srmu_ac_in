import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import DirectorModal from "./DirectorModal";

interface DirectorMessageProps {
  data: {
    name: string;
    designation: string;
    title: string;
    content: string;
    longContent: string;
    footerDesignation: string;
  };
}
const DirectorMessage: React.FC<DirectorMessageProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-3">{data.title}</h1>
      <p className="text-sm!  mb-6">{data.content}</p>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#0f4a85]! text-white! border-2 uppercase   border-[#0f4a85] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center   font-semibold px-5 lg:px-8 py-3 rounded-md text-nowrap mt-5 sm:mt-0  group "
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
