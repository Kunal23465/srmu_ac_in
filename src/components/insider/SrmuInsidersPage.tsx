import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import {
    Navbar,


} from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { WhatIsInsiders } from "./sections/WhatIsInsiders";
import { Marquee } from "./ui/Marquee";
import { Perks } from "./sections/Perks";
import { InsiderLadder } from "./sections/InsiderLadder";
import { PowerPlay } from "./sections/PowerPlay";
import { WhyNotEveryone } from "./sections/WhyNotEveryone";
import { Footer } from "./sections/Footer";

// --- MAIN PAGE ---
export default function SrmuInsidersPage() {
    // Initialize Lenis Smooth Scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        // Synchronize Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        const updateRaf = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateRaf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateRaf);
        };
    }, []);

    return (
        <div className="bg-[#f9ebcf] text-[#17181d] font-sans selection:bg-[#f9da1e] selection:text-black overflow-hidden">
            <Navbar />

            <main>
                {/* 1. Hero Section */}
                <Hero />

                {/* 2. What Is SRMU Insiders Section */}
                <WhatIsInsiders />

                {/* Marquee Banner 1 */}
                <Marquee text="WE SLAYED • NO CAP • SPILL THE TEA" className="bg-[#f9da1e] -rotate-2 scale-105 z-20 border-black text-black" direction={1} />

                {/* Marquee Banner 2 */}
                <Marquee text="EXCLUSIVE • HERE'S THE DRAMA • LOWKEY" className="bg-[#266efb] rotate-2 scale-105 z-20 border-black text-black" direction={-1} />

                {/* 3. Perks Section (What's In It For You?) */}
                <Perks />

                {/* 4. Insider Ladder Section */}
                <InsiderLadder />

                {/* 5. Power Play Section (What Will You Actually Do?) */}
                <PowerPlay />

                {/* 6. Why Not Everyone Section (Real Talk) */}
                <WhyNotEveryone />

                {/* 7. Footer Section */}
                <Footer />
            </main>
        </div>
    );
}
