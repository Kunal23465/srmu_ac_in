import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Perks() {
    const container = useRef<HTMLElement>(null);
    const leftSide = useRef<HTMLDivElement>(null);

    const perks = [
        { title: "FIRST TO KNOW", desc: "Get early access to event updates, launches & drops" },
        { title: "FIRST TO PULL UP", desc: "Skip the pass queue for Insider access." },
        { title: "GET REWARDED", desc: "Good work? We see it. And yes, there are rewards." },
        { title: "BUILD YOUR LORE", desc: "Real published work. Real campaigns. Real portfolio. Not just assignments collecting dust." },
        { title: "LEVEL UP", desc: "Get direct mentorship as you move from Junior → Insider → Senior." },
        { title: "GET ON THE RADAR", desc: "Standout work gets noticed, shouted out & put in the spotlight." },
        { title: "MERCH DROP", desc: "Because the crew needs a uniform. Obviously." },
        { title: "GET THE LOR", desc: "Leave with more than memories. Take the proof with you." },
        { title: "INSIDER-ONLY EVENTS", desc: "Exclusive creator events. No outsiders." }
    ];

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            if (container.current && leftSide.current) {
                ScrollTrigger.create({
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftSide.current,
                    pinSpacing: false
                });
            }
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={container} id="perks" className="bg-[#f9ebcf] border-b-8 border-black">
            <div className="flex flex-col md:flex-row">
                {/* Left Side: Header Panel */}
                <div 
                    ref={leftSide} 
                    className="w-full md:w-5/12 min-h-[50vh] md:h-screen flex flex-col items-center justify-center bg-[#fa5b84] p-8 md:p-12 border-b-8 md:border-b-0 md:border-r-8 border-black z-10 text-center"
                >
                    <div className="inline-flex items-center gap-2 border-4 border-black bg-[#f9da1e] px-6 py-2 font-black uppercase text-sm md:text-base shadow-[4px_4px_0px_0px_#000] mb-6 text-black">
                        <Award size={20} className="fill-black text-black" />
                        <span>WHAT'S IN IT FOR YOU?</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none text-black">
                        THE PERKS? <br />
                        <span className="text-white drop-shadow-[4px_4px_0px_#000]" style={{ WebkitTextStroke: "3px black" }}>
                            KINDA LOUD.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg md:text-xl font-bold uppercase tracking-wider text-black max-w-sm">
                        9 Reasons why SRMU Insiders hit different.
                    </p>
                </div>

                {/* Right Side: Perks List */}
                <div className="w-full md:w-7/12 px-4 md:px-12 py-16 md:py-24 space-y-8 md:space-y-12">
                    {perks.map((item, i) => (
                        <div 
                            key={i} 
                            className="border-4 border-black bg-white p-6 md:p-10 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all group"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-4xl md:text-6xl font-black text-[#fa5b84] group-hover:text-[#266efb] transition-colors">
                                    0{i + 1}
                                </span>
                                <span className="border-2 border-black bg-[#f9da1e] px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] text-black">
                                    INSIDER PERK
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black uppercase mt-4 mb-3 text-black">
                                {item.title}
                            </h3>
                            <p className="text-base md:text-xl font-bold text-gray-800 leading-snug">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                    {/* Bottom Callout Banner */}
                    <div className="border-4 border-black bg-[#f9da1e] p-8 md:p-10 text-center shadow-[12px_12px_0px_0px_#000]">
                        <Zap size={40} className="mx-auto mb-4 fill-black text-black" />
                        <h4 className="text-2xl md:text-4xl font-black uppercase text-black leading-tight">
                            LIMITED SEATS. <br />
                            <span className="bg-black text-[#f9da1e] px-3 py-1 inline-block mt-2">
                                SO IF YOU’RE THINKING ABOUT IT… CLOCK IT.
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
