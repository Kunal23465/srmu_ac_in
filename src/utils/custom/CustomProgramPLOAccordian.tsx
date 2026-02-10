import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export interface CustomProgramPLOAccordianProps {
  POdata: string | any[];
  PLOdata: string | any[];
  PSOdata: string | any[];
}

const CustomProgramPLOAccordian: React.FC<CustomProgramPLOAccordianProps> = ({ POdata, PLOdata, PSOdata }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const sections = [
    { title: "Program Objectives", data: POdata },
    { title: "Program Learning Outcomes", data: PLOdata },
    { title: "Program Specific Outcomes", data: PSOdata },
  ];

  return (
    <div className="bg-slate-100">
      <div className={`${Classes["container"]}`}>
        <div className="py-20">
          <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-[rgb(2_48_71)] font-medium mb-15 text-center">PO, PLO & PSO</h1>
          <hr className="text-gray-300" />

          {sections.map((section, index) => (
            <div key={index}>
              {/* Accordion Header */}
              <div className="flex cursor-pointer select-none" onClick={() => toggle(index)}>
                <span className="py-8 w-[90%] text-xl md:text-2xl border-r border-gray-300 font-medium">{section.title}</span>

                {/* Rotating Icon */}
                <HiOutlineArrowNarrowRight size={36} className={`m-auto transition-transform duration-600 ease-in-out ${openIndex === index ? "rotate-90" : ""}`} />
              </div>

              {/* Accordion Body */}
              <div
                className={`overflow-hidden border-r w-[90%] border-gray-300 transition-all duration-600 ease-in-out ${openIndex === index ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className=" pb-5 pr-20">
                  <div className="py-1.5 pl-5 [&_ol]:list-disc" dangerouslySetInnerHTML={{ __html: section?.data }} />
                </div>
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
        "Exhibit leadership capability with ethical and professional behavior through a lifelong learning attitude. (Lifelong Learning)",
    },
    {
      id: 3,
      content:
        "Promote Design, Research and Entrepreneurial skills to Support the growth of country economy. (R&D and Entrepreneur)",
    },
  ],

  PLOdata: [
    {
      id: 1,
      content: "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    },
    {
      id: 2,
      content: "Problem analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    },
        {
      id: 3,
      content: "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
    },    {
      id: 4,
      content: "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    },    {
      id: 5,
      content: "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
    },
        {
      id: 6,
      content: "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice. ",
    },    {
      id: 7,
      content: "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    },    {
      id: 8,
      content: "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    },    {
      id: 9,
      content: "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    },    {
      id: 10,
      content: "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    },
    {
      id: 11,
      content: "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    },
    {
      id: 12,
      content: "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    },
  ],

  PSOdata: [
    {
      id: 1,
      content: "Understand the fundamental concepts of Computer Science & Engineering with specialization in IoT and aligned mezzanine technologies.",
    },
    {
      id: 2,
      content: "Design and Integrate hardware and software systems in the areas of IoT with a strong emphasis on lifelong learning to create feasible engineering solutions.",
    },
    {
      id: 3,
      content: "Analyze, Design, Implement, Test and Deploy smart applications related to industry and research for the advancement of society.",
    },
  ],
};
*/
