import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Flame, Hexagon, Smile, Sparkles, Star, Zap } from "lucide-react";
import { MagneticBtn } from "../ui/MagneticBtn";


gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const zapRef = useRef<HTMLDivElement>(null);
    const smileRef = useRef<HTMLDivElement>(null);
    const hexRef = useRef<HTMLDivElement>(null);
    const sparkleRef = useRef<HTMLDivElement>(null);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSerM8WGKBQovbrjtOu8q7pRSfvyzfGe3D283iAlhRsgKNVPrw/viewform?usp=dialog";

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Text Stagger
            gsap.from(".hero-text", {
                y: 150,
                skewY: 8,
                stagger: 0.1,
                duration: 1.2,
                ease: "power4.out"
            });

            // Spinning Star Shape
            if (starRef.current) {
                gsap.to(starRef.current, {
                    rotation: 360,
                    duration: 20,
                    repeat: -1,
                    ease: "linear"
                });
            }

            // Reverse Spinning Smile Shape
            if (smileRef.current) {
                gsap.to(smileRef.current, {
                    rotation: -360,
                    duration: 25,
                    repeat: -1,
                    ease: "linear"
                });
            }

            // Floating Zap Element
            if (zapRef.current) {
                gsap.to(zapRef.current, {
                    y: -20,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }

            // Floating Hexagon Element
            if (hexRef.current) {
                gsap.to(hexRef.current, {
                    rotation: 180,
                    y: 15,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // Floating Sparkles Element
            if (sparkleRef.current) {
                gsap.to(sparkleRef.current, {
                    scale: 1.2,
                    y: -15,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // Scroll Parallax
            if (container.current) {
                gsap.to(container.current, {
                    yPercent: 25,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f9ebcf] pt-32 pb-20 px-4">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* --- DECORATIVE FLOATING SHAPES (VISIBLE & RESPONSIVE ON MOBILE & DESKTOP) --- */}
            {/* 1. Spinning Star (Top Right) */}
            <div ref={starRef} className="absolute right-[2%] sm:right-[5%] top-[8%] sm:top-[12%] block pointer-events-none z-0 scale-50 sm:scale-75 md:scale-100 opacity-60 md:opacity-100">
                <Star size={150} strokeWidth={1} className="fill-[#f9da1e] text-black drop-shadow-[6px_6px_0px_#000]" />
            </div>

            {/* 2. Floating Zap (Top Left) */}
            <div ref={zapRef} className="absolute left-[2%] sm:left-[6%] top-[10%] sm:top-[15%] block pointer-events-none z-0 scale-50 sm:scale-75 md:scale-100 opacity-60 md:opacity-100">
                <Zap size={120} strokeWidth={1.5} className="fill-[#fa5b84] text-black drop-shadow-[6px_6px_0px_#000]" />
            </div>

            {/* 3. Reverse Spinning Smile (Bottom Right) */}
            <div ref={smileRef} className="absolute right-[3%] sm:right-[7%] bottom-[8%] sm:bottom-[15%] block pointer-events-none z-0 scale-50 sm:scale-75 md:scale-100 opacity-60 md:opacity-100">
                <Smile size={110} strokeWidth={1.5} className="fill-[#f9da1e] text-black drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 4. Floating Hexagon (Middle Left) */}
            <div ref={hexRef} className="absolute left-[2%] sm:left-[5%] bottom-[15%] sm:bottom-[22%] block pointer-events-none z-0 scale-50 sm:scale-75 md:scale-100 opacity-60 md:opacity-100">
                <Hexagon size={100} strokeWidth={1.5} className="fill-[#266efb] text-white drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 5. Floating Sparkles (Top Center Right) */}
            <div ref={sparkleRef} className="absolute right-[15%] sm:right-[24%] top-[4%] sm:top-[8%] hidden sm:block pointer-events-none z-0 scale-50 sm:scale-75 md:scale-100 opacity-60 md:opacity-100">
                <Sparkles size={75} strokeWidth={1.5} className="fill-[#fa5b84] text-black drop-shadow-[4px_4px_0px_#000]" />
            </div>

            {/* Eyebrow Tagline Badge */}
            <div className="relative z-10 mb-6 inline-flex items-center gap-2.5 rounded-full border-4 border-black bg-[#f9da1e] px-6 py-2.5 font-black uppercase text-xs sm:text-sm md:text-base lg:text-lg shadow-[4px_4px_0px_0px_#000] text-black">
                <Flame size={22} className="fill-black text-black shrink-0" />
                <span>LOWKEY THINK YOU’D EAT THIS UP? APPLY.</span>
            </div>

            {/* Welcome Description Box */}
            <div className="relative z-10 mt-6 max-w-3xl border-4 border-black bg-white p-6 md:p-8 text-center shadow-[8px_8px_0px_0px_#000]">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-snug text-black">
                    Welcome to <span className="bg-[#f9da1e] px-2 py-0.5 border border-black font-black">SRMU Insiders</span> — the crew behind the campus content, events, stories and moments before they hit everyone’s feed.
                </p>
            </div>

            {/* 3 Action Pillars */}
            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3.5 max-w-3xl">
                {["YOU CREATE IT.", "YOU CAPTURE IT.", "YOU MAKE IT HAPPEN."].map((pillar, i) => (
                    <div key={i} className="border-2 md:border-4 border-black bg-[#266efb] text-white px-5 md:px-6 py-2.5 font-black uppercase text-xs sm:text-sm md:text-base lg:text-lg shadow-[4px_4px_0px_0px_#000]">
                        {pillar}
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="relative z-10 mt-10 flex gap-4">
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                    <MagneticBtn className="bg-[#fa5b84] text-white hover:bg-[#f9da1e] hover:text-black text-lg md:text-2xl px-10 py-5">
                        <span>APPLY NOW</span>
                        <ArrowUpRight className="ml-2" size={28} />
                    </MagneticBtn>
                </a>
            </div>

            {/* Circular Spin Scroll Down */}
            <div className="absolute bottom-8 left-8 hidden md:block pointer-events-none">
                <div className="w-28 animate-spin-slow text-black fill-black">
                    <svg viewBox="0 0 100 100" width="90" height="90">
                        <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text fontSize="13" fontWeight="bold">
                            <textPath xlinkHref="#circle">
                                SCROLL DOWN • SCROLL DOWN •
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
