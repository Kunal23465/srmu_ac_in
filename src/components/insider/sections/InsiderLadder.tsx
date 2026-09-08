import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, CheckCircle2, Flame, Hexagon, ShieldCheck, Smile, Sparkles, Star, Trophy, Unlock, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function InsiderLadder() {
    const sectionRef = useRef<HTMLElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const zapRef = useRef<HTMLDivElement>(null);
    const flameRef = useRef<HTMLDivElement>(null);
    const sparkleRef = useRef<HTMLDivElement>(null);
    const hexRef = useRef<HTMLDivElement>(null);
    const smileRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Spinning Star Shape
            if (starRef.current) {
                gsap.to(starRef.current, {
                    rotation: 360,
                    duration: 22,
                    repeat: -1,
                    ease: "linear"
                });
            }

            // Floating Zap Element
            if (zapRef.current) {
                gsap.to(zapRef.current, {
                    y: -25,
                    duration: 2.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }

            // Floating Flame Element
            if (flameRef.current) {
                gsap.to(flameRef.current, {
                    scale: 1.15,
                    y: 15,
                    duration: 2.8,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // Floating Sparkles Element
            if (sparkleRef.current) {
                gsap.to(sparkleRef.current, {
                    rotation: -180,
                    y: -18,
                    duration: 3.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // Spinning Hexagon Element
            if (hexRef.current) {
                gsap.to(hexRef.current, {
                    rotation: 360,
                    duration: 28,
                    repeat: -1,
                    ease: "linear"
                });
            }

            // Reverse Spinning Smile Element
            if (smileRef.current) {
                gsap.to(smileRef.current, {
                    rotation: -360,
                    duration: 24,
                    repeat: -1,
                    ease: "linear"
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: "01",
            role: "JUNIOR INSIDER",
            time: "0–3/6 MONTHS",
            motto: "GET LOCKED IN.",
            color: "bg-[#266efb]",
            badgeColor: "bg-[#f9da1e] text-black",
            textColor: "text-white",
            tag: "LEVEL 01 UNLOCKED 🔓",
            bullets: [
                "Learn the ropes.",
                "Create your first content.",
                "Find your lane.",
                "Start building your portfolio.",
                "First level unlocked. 🔓"
            ],
            icon: <Unlock size={32} />
        },
        {
            num: "02",
            role: "INSIDER",
            time: "6–12 MONTHS",
            motto: "NOW YOU’RE ON THE RADAR.",
            color: "bg-[#fa5b84]",
            badgeColor: "bg-black text-white",
            textColor: "text-white",
            tag: "LEVEL 02 ON RADAR 🎯",
            bullets: [
                "Bigger projects.",
                "More chances to call the shots.",
                "More creative freedom.",
                "More people knowing your work.",
                "You’re not new here anymore."
            ],
            icon: <ShieldCheck size={32} />
        },
        {
            num: "03",
            role: "SENIOR INSIDER",
            time: "12+ MONTHS",
            motto: "YOU RUN THE LORE NOW.",
            color: "bg-[#f9da1e]",
            badgeColor: "bg-black text-[#f9da1e]",
            textColor: "text-black",
            tag: "LEVEL 03 RUNNING THE LORE 👑",
            bullets: [
                "Lead projects.",
                "Mentor new Insiders.",
                "Own campaigns.",
                "Help shape the campus story.",
                "From creating the content to calling the shots."
            ],
            icon: <Trophy size={32} />
        }
    ];

    return (
        <section ref={sectionRef} id="ladder" className="bg-[#f9ebcf] py-20 md:py-32 border-b-8 border-black relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* --- DECORATIVE FLOATING SHAPES (ENHANCED FOR MOBILE & DESKTOP) --- */}
            {/* 1. Spinning Star (Top Right) */}
            <div ref={starRef} className="absolute right-[2%] sm:right-[4%] top-[2%] sm:top-[6%] block pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100 opacity-80 md:opacity-100">
                <Star size={120} strokeWidth={1} className="fill-[#f9da1e] text-black drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 2. Floating Zap (Top Left) */}
            <div ref={zapRef} className="absolute left-[2%] sm:left-[4%] top-[3%] sm:top-[7%] block pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100 opacity-80 md:opacity-100">
                <Zap size={100} strokeWidth={1.5} className="fill-[#fa5b84] text-black drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 3. Floating Flame (Middle Right) */}
            <div ref={flameRef} className="absolute right-[2%] sm:right-[5%] top-[38%] block pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100 opacity-80 md:opacity-100">
                <Flame size={100} strokeWidth={1.5} className="fill-[#f9da1e] text-black drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 4. Floating Sparkles (Middle Left) */}
            <div ref={sparkleRef} className="absolute left-[2%] sm:left-[4%] top-[48%] block pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100 opacity-80 md:opacity-100">
                <Sparkles size={80} strokeWidth={1.5} className="fill-[#266efb] text-white drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 5. Reverse Spinning Smile (Lower Left) */}
            <div ref={smileRef} className="absolute left-[3%] bottom-[18%] block pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100 opacity-80 md:opacity-100">
                <Smile size={90} strokeWidth={1.5} className="fill-[#f9da1e] text-black drop-shadow-[5px_5px_0px_#000]" />
            </div>

            {/* 6. Spinning Hexagon (Bottom Right) */}
            <div ref={hexRef} className="absolute right-[2%] sm:right-[5%] bottom-[2%] sm:bottom-[4%] block pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100 opacity-80 md:opacity-100">
                <Hexagon size={100} strokeWidth={1.5} className="fill-[#fa5b84] text-black drop-shadow-[5px_5px_0px_#000]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header Tagline & Badge */}
                <div className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
                    <div className="inline-flex items-center gap-2 border-4 border-black bg-[#f9da1e] px-5 py-2 font-black uppercase text-sm sm:text-base md:text-xl shadow-[4px_4px_0px_0px_#000] mb-5 text-black">
                        <Trophy size={22} className="text-black" />
                        <span>THE INSIDER LADDER</span>
                    </div>

                    <h2 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase leading-tight tracking-tighter text-black">
                        START LOWKEY. <br />
                        <span className="bg-black text-[#f9da1e] px-3 py-1 inline-block mt-2">
                            END UP RUNNING THE SHOW.
                        </span>
                    </h2>
                </div>

                {/* Step Ladder Timeline Container */}
                <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Card Box */}
                            <div className={`w-full border-4 border-black ${step.color} ${step.textColor} p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] md:shadow-[12px_12px_0px_0px_#000] transition-transform hover:-translate-y-1`}>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-4 border-black pb-6 mb-6">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="border-4 border-black bg-white text-black p-2.5 sm:p-3 rounded-full shadow-[3px_3px_0px_0px_#000] shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs sm:text-sm font-black uppercase tracking-widest opacity-90">LEVEL {step.num}</span>
                                                <span className="text-[10px] sm:text-xs font-black uppercase bg-black text-[#f9da1e] px-2 py-0.5 border border-black">
                                                    {step.tag}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase leading-none mt-1">{step.role}</h3>
                                        </div>
                                    </div>
                                    <div className={`border-4 border-black ${step.badgeColor} px-4 sm:px-6 py-1.5 sm:py-2 font-black uppercase text-xs sm:text-sm md:text-base shadow-[3px_3px_0px_0px_#000] self-start sm:self-auto`}>
                                        ⏱️ {step.time}
                                    </div>
                                </div>

                                <p className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 sm:mb-8">
                                    “{step.motto}”
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    {step.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-base sm:text-lg md:text-xl font-bold uppercase leading-snug">
                                            <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-current" strokeWidth={3} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Down Arrow Divider */}
                            {index < steps.length - 1 && (
                                <div className="my-6 md:my-8 border-4 border-black bg-[#f9da1e] text-black p-3 sm:p-4 rounded-full shadow-[4px_4px_0px_0px_#000] animate-bounce">
                                    <ArrowDown size={30} strokeWidth={4} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
