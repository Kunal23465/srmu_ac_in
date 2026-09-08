import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Flame, Instagram, Sparkles } from "lucide-react";
import logo from "../../../assets/images/insider/srmu-insider-logo.png"
gsap.registerPlugin(ScrollTrigger);

export function Footer() {
    const triggerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSerM8WGKBQovbrjtOu8q7pRSfvyzfGe3D283iAlhRsgKNVPrw/viewform?usp=dialog";

    useEffect(() => {
        if (!textRef.current || !triggerRef.current) return;
        gsap.fromTo(textRef.current,
            { yPercent: 30 },
            {
                yPercent: 0,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            }
        );
    }, []);

    return (
        <div ref={triggerRef} className="relative bg-[#fa5b84] px-6 pt-24 pb-12 flex flex-col justify-between overflow-hidden border-t-8 border-black text-black">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                {/* Header Tagline & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="inline-flex items-center gap-2 border-4 border-black bg-[#f9da1e] px-6 py-2 font-black uppercase text-xl shadow-[4px_4px_0px_0px_#000] text-black">
                        <Flame className="fill-black" size={24} />
                        <span>READY TO TAP IN?</span>
                    </div>
                    <div className="border-4 border-black bg-white px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_#000]">
                        BE PART OF THE FIRST DROP
                    </div>
                </div>

                {/* Animated Huge Main Heading */}
                <div ref={textRef} className="my-12">
                    <h2 className="text-[11vw] font-black leading-[0.85] tracking-tighter uppercase text-black">
                        STILL OUTSIDE? <br />
                        <span className="text-white drop-shadow-[4px_4px_0px_#000]" style={{ WebkitTextStroke: "4px black" }}>
                            THAT'S CRAZY.
                        </span>
                    </h2>
                </div>

                {/* Persuasive Callout Box */}
                <div className="my-12 border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_#000] max-w-4xl">
                    <p className="text-2xl md:text-4xl font-black uppercase leading-tight text-black">
                        This is your sign to stop saying <span className="underline decoration-[#fa5b84] decoration-4">“I should apply”</span> and actually apply.
                    </p>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    {[
                        { title: "CREATE THE CONTENT.", desc: "Produce raw, unfiltered media that moves people." },
                        { title: "BUILD YOUR LORE.", desc: "Craft your unique legacy inside SRMU." },
                        { title: "MAKE YOUR MARK.", desc: "Leave an unforgettable footprint on culture." }
                    ].map((item, i) => (
                        <div key={i} className="border-4 border-black bg-[#f9da1e] p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-transform">
                            <Sparkles className="mb-4 text-black" size={32} />
                            <h3 className="text-2xl md:text-3xl font-black uppercase leading-none text-black mb-3">{item.title}</h3>
                            <p className="font-bold text-sm text-black uppercase">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Action Button Box */}
                <div className="my-16 flex flex-col items-center justify-center text-center">
                    <a
                        href={FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-4 border-4 border-black bg-black text-[#f9da1e] px-10 py-6 text-3xl md:text-5xl font-black uppercase shadow-[12px_12px_0px_0px_#fff] hover:bg-white hover:text-black hover:shadow-[12px_12px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all active:translate-x-3 active:translate-y-3 active:shadow-none"
                    >
                        <span>Be an Insider. Apply Now.</span>
                        <ArrowUpRight size={48} strokeWidth={3} />
                    </a>
                    <p className="mt-6 text-xl font-black uppercase tracking-widest text-black bg-white inline-block px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                        ⚡ Limited seats. Don’t sleep on it. ⚡
                    </p>
                </div>

                {/* Footer Bottom Strip */}
                <div className="mt-20 border-t-4 border-black pt-8 w-full flex flex-col gap-6 items-center">
                    {/* Top Row: Logo Pill (Left) & Instagram Pill (Right) */}
                    <div className="flex flex-row items-center justify-between w-full">
                        {/* Left: Logo Pill */}
                        <div className="flex items-center justify-center rounded-full border-4 border-black bg-white px-5 py-2 shadow-[4px_4px_0px_0px_#000] shrink-0">
                            <img
                                src={logo}
                                alt="SRMU Insiders Logo"
                                className="h-8 md:h-10 w-auto object-contain shrink-0"
                            />
                        </div>

                        {/* Right: Instagram Link Pill */}
                        <a
                            href="https://www.instagram.com/srmuinsider/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center rounded-full border-4 border-black bg-white p-3 md:p-3.5 text-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#f9da1e] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-[4px] active:shadow-none transition-all shrink-0"
                        >
                            <Instagram size={24} strokeWidth={2.5} />
                        </a>
                    </div>

                    {/* Bottom Row: Copyright Badge Pill */}
                    <div className="w-full">
                        <p className="w-full font-bold uppercase text-black bg-white px-6 py-2.5 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_#000] text-xs md:text-sm text-center">
                            © 2026 SRMU. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
