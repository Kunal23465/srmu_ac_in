import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CustomProgramPLOAccordianProps {
  POdata: { id: string | number; content: string }[];
  PLOdata: { id: string | number; content: string }[];
  PSOdata: { id: string | number; content: string }[];
}

const CustomProgramPLOAccordian: React.FC<CustomProgramPLOAccordianProps> = ({ POdata, PLOdata, PSOdata }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const sections = [
    { title: "Program Objectives", data: POdata },
    { title: "Program Learning Outcomes", data: PLOdata },
    { title: "Program Specific Outcomes", data: PSOdata },
  ];

  return (
    <div className="bg-slate-100">
      <div className={`${Classes["container"]}`}>
        <div className="py-20">
          <h1 className="text-5xl text-[rgb(2_48_71)] font-medium mb-5 text-center">PO, PLO & PSO</h1>
          <hr className="text-gray-300" />

          {sections.map((section, index) => (
            <div key={index}>
              {/* Accordion Header */}
              <div
                className="flex cursor-pointer select-none"
                onClick={() => toggle(index)}
              >
                <span className="py-7 w-[90%] text-xl border-r border-gray-300 font-medium">{section.title}</span>

                {/* Rotating Icon */}
                <HiOutlineArrowNarrowRight  size={36}
                  className={`m-auto transition-transform duration-500 ease-in-out ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Accordion Body */}
              <div
                className={`overflow-hidden border-r w-[90%] border-gray-300 transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ol className="list-[lower-roman] list-inside pb-5">
                  {section.data.map((item) => (
                    <li key={item.id} className="py-1">
                      {item.content}
                    </li>
                  ))}
                </ol>
              </div>

              <hr className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomProgramPLOAccordian;


/*
----------- How To Use ------------
<CustomProgramPLOAccordian POdata={abc.POdata} PLOdata={abc.PLOdata} PSOdata={abc.PSOdata}/>



------------ Example Data ----------


interface CustomProgramPLOAccordianProps {
  POdata: { id: string | number; content: string }[];
  PLOdata: { id: string | number; content: string }[];
  PSOdata: { id: string | number; content: string }[];
}


export const abc: CustomProgramPLOAccordianProps = {
  POdata: [
    {
      id: 1,
      content:
        "Practice the engineering skills in the profession of Internet of Things (IoT) to identify and solve contemporary problems. (Foundation)",
    },
    {
      id: 2,
      content:
        "Practice the engineering skills in the profession of Internet of Things (IoT) to identify and solve contemporary problems. (Foundation)",
    },
  ],

  PLOdata: [
    {
      id: 1,
      content: "Sample text for PLO item 1.",
    },
    {
      id: 2,
      content: "Sample text for PLO item 2.",
    },
        {
      id: 3,
      content: "Sample text for PLO item 2.",
    },    {
      id: 4,
      content: "Sample text for PLO item 2.",
    },    {
      id: 5,
      content: "Sample text for PLO item 2.",
    },
        {
      id: 2,
      content: "Sample text for PLO item 2.",
    },    {
      id: 2,
      content: "Sample text for PLO item 2.",
    },    {
      id: 2,
      content: "Sample text for PLO item 2.",
    },    {
      id: 2,
      content: "Sample text for PLO item 2.",
    },    {
      id: 2,
      content: "Sample text for PLO item 2.",
    },
  ],

  PSOdata: [
    {
      id: 1,
      content: "Sample text for PSO item 1.",
    },
    {
      id: 2,
      content: "Sample text for PSO item 2.",
    },
  ],
};
*/
