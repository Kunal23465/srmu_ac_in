import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";

interface Person {
  name: string;
  title: string;
  image: string;
  description: string[];
  styleType: string;
}

interface Props {
  people: Person[];
}

const AlternateProfileSection: React.FC<Props> = ({ people }) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {people.map((person, index) => {
        const isStyleB = person.styleType === "StyleB";
        const isExpanded = expanded[person.name] || false;

        return (
          <section key={index}>
            {isStyleB && (
              <section className="py-7 md:py-10 lg:py-14">
                <div className="name-banner"></div>
                <div
                  className={`${Classes["container"]} -mt-[140px] md:-mt-[120px]`}
                >
                  <div className="flex flex-col items-center md:items-start md:flex-row gap-x-10">
                    <div className="w-full max-w-[420px] md:hidden mb-4">
                      <h2 className="name text-3xl lg:text-4xl font-bold text-white mb-2">
                        {person.name}
                      </h2>
                      <span className="text-xl text-white font-medium ">
                        {person.title}
                      </span>
                    </div>
                    <div
                      className={`box w-full max-w-[290px] sm:max-w-[420px] bg-white p-3 sm:p-5 rounded-xl border-2 border-white transition-all duration-200 hover:border-[#ffb703] ${
                        person.name === "Er. Pankaj Agarwal" ? "md:order-2" : ""
                      }`}
                    >
                      <img className="w-full" src={person.image} alt={person.name} />
                    </div>
                    <div className="w-full flex-col">
                      <div className="hidden md:block ">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                          {person.name}
                        </h2>
                        <p className="text-xl text-white font-medium ">
                          {person.title}
                        </p>
                      </div>
                      <div className="content mt-7 md:mt-[60px] text-justify leading-8">
                        <p>{person.description.join(" ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {!isStyleB && (
              <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
                <div className="w-full rounded-[10px] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 px-5 py-10 sm:px-10 sm:py-12">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="w-full mx-auto max-w-[320px] flex justify-center items-center">
                      <img
                        className="w-[267px] h-[374px] rounded-s object-cover border border-gray-100"
                        src={person.image}
                        alt={person.name}
                      />
                    </div>

                    <div className="w-full mt-8 md:mt-0">
                      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                        {person.name}
                      </h2>
                      <span className="text-xl text-gray-700 font-medium">
                        {person.title}
                      </span>

                      <div className="text-justify mt-3 lg:mt-4 text-[#5B5B5B] leading-8">
                        {isExpanded
                          ? person.description.map((para, i) => (
                              <p key={i} className="mb-4">
                                {para}
                              </p>
                            ))
                          : <p>{person.description[0]}</p>}
                      </div>

                      <button
                        onClick={() => toggleExpand(person.name)}
                        className="mt-2 view-more font-medium hover:underline"
                      >
                        {isExpanded ? "VIEW LESS" : "VIEW MORE"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
};

export default AlternateProfileSection;
