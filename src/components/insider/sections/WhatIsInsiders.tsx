import { HelpCircle } from "lucide-react";

export function WhatIsInsiders() {
    const tags = ["Reels.", "Campaigns.", "Events.", "Trends.", "Campus chaos."];

    return (
        <section className="bg-white text-black py-28 border-y-8 border-black relative overflow-hidden">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header Badge */}
                <div className="inline-flex items-center gap-3 border-4 border-black bg-[#f9da1e] px-6 py-2.5 font-black uppercase text-lg md:text-xl shadow-[4px_4px_0px_0px_#000] mb-8">
                    <HelpCircle size={26} className="text-black" />
                    <span>WHAT IS SRMU INSIDERS?</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-black mb-6">
                    NOT A CLUB. <br />
                    <span className="bg-[#fa5b84] text-white px-3 py-1 inline-block mt-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                        NOT ANOTHER CV FILLER.
                    </span>
                </h2>

                {/* Subtitle / Lead Paragraph */}
                <div className="border-4 border-black bg-[#f9ebcf] p-6 md:p-10 shadow-[8px_8px_0px_0px_#000] my-8 max-w-4xl">
                    <p className="text-2xl md:text-4xl font-black uppercase leading-snug text-black">
                        This is the crew that runs the campus story.
                    </p>
                </div>

                {/* Tag Pills Grid */}
                <div className="flex flex-wrap gap-4 my-10">
                    {tags.map((tag, i) => (
                        <div 
                            key={i} 
                            className="border-4 border-black bg-[#266efb] text-white px-6 py-3 font-black uppercase text-xl md:text-2xl shadow-[6px_6px_0px_0px_#000] hover:bg-[#f9da1e] hover:text-black hover:-translate-y-1 transition-all"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Context Statement */}
                <p className="text-xl md:text-3xl font-bold uppercase tracking-wide text-gray-800 my-8">
                    If it’s happening at SRMU, you are probably already on it.
                </p>

                {/* High Voltage Punchline Box */}
                <div className="border-4 border-black bg-[#17181d] text-white p-8 md:p-12 shadow-[12px_12px_0px_0px_#fa5b84] my-10">
                    <p className="text-xl md:text-3xl font-bold uppercase text-gray-400 mb-2">
                        You’re not here to just watch the content.
                    </p>
                    <h3 className="text-4xl md:text-7xl font-black uppercase text-[#f9da1e] leading-none tracking-tight">
                        YOU’RE HERE TO MAKE THE CONTENT.
                    </h3>
                </div>
            </div>
        </section>
    );
}
