import React from 'react'
import { OutreachInitiativesData } from '../../../data/campus-life/outreach-activations/outreach-activations-data';
import Classes from "../../../utils/styles/Global.module.css";


const OutreachInitiatives: React.FC = () => {
    const { title, desc, initiatives } = OutreachInitiativesData;

    return (
        <div className="pt-20 pb-28 bg-[#f2f2f2]">
            <div className={`${Classes["container"]}`}>
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-medium mb-4">{title}</h1>
                    <p className=" mx-auto text-gray-600">{desc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 place-items-center">

                    {initiatives.map((initiative, index) => (
                        <div
                            key={index}
                            className="
                            group 
                            w-[90%] sm:w-[330px] md:w-[360px] lg:w-[380px] 
                            aspect-3/4 
                            bg-transparent rounded-2xl 
                            relative
                        "
                            style={{ perspective: "1200px" }}
                        >
                            <div className="
                            relative w-full h-full 
                            transition-transform duration-700 
                            transform-3d 
                            group-hover:transform-[rotateY(180deg)]
                        ">

                                {/* Front */}
                                <div className="
                                absolute inset-0 
                                bg-gray-200 text-black 
                                overflow-hidden 
                                rounded-2xl
                                backface-hidden
                            ">
                                    <img
                                        src={initiative.front.img}
                                        alt="Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Back */}
                                <div className="
                                absolute inset-0 
                                flex flex-col items-center justify-center 
                                bg-white
                                p-6 text-center 
                                overflow-hidden 
                                rounded-2xl
                                backface-hidden 
                                transform-[rotateY(180deg)]
                            ">
                                    <h1 className="text-2xl font-semibold mb-2">
                                        {initiative.back.title}
                                    </h1>

                                    <p className="text:sm md:text-base  ">
                                        {initiative.back.description}
                                    </p>
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
