import { useState } from "react";
import { flickcategories } from "../../data/home/flick-section-data";

export default function FlickeringSection() {
    const [activeId, setActiveId] = useState("section_25");






    return (
        <section className="relative h-[75vh] overflow-hidden">
            <div className="absolute inset-0">
                {flickcategories.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeId === item.id
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 container mx-auto h-full flex items-center px-6">
                <div className="flex w-full justify-center gap-5 items-stretch">

                    {/* LEFT SIDE */}
                    <div className="w-1/2 relative flex items-center">
                        {flickcategories.map((item) => (
                            <div
                                key={item.id}
                                className={`absolute transition-opacity duration-500 ${activeId === item.id ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <h2 className="text-white font50 fw500 leading-tight mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-white font17 max-w-md">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-1/2 grid grid-cols-2 text-white text-lg">
                        {flickcategories.map((item) => {
                          



                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    onMouseEnter={() => setActiveId(item.id)}
                                    className={`
         flex items-center justify-start px-6 py-12 
    transition-all text-left relative overflow-hidden text-[1.5rem] cursor-pointer

        
        ${item.id === "section_24"
                                            ? "border-r border-b border-white/30"
                                            : item.id === "section_25"
                                                ? ""
                                                : item.id === "section_26"
                                                    ? "border-r border-b border-white/30"
                                                    : item.id === "section_64"
                                                        ? "border-t border-l border-b border-white/30"
                                                        : item.id === "section_65"
                                                            ? "border-t border-r border-white/30"
                                                            : item.id === "section_66"
                                                                ? "border-t border-l border-white/30"
                                                                : ""
                                        }

        ${activeId === item.id
                                            ? "bg-yellow-500 text-gray-900 font-semibold"
                                            : "hover:bg-white/10"
                                        }
    `}
                                >
                                    {item.title.split(":")[0]}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>

        </section>
    );
}