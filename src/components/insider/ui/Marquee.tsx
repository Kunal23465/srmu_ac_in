import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Marquee({ text, direction = 1, className }: { text: string; direction?: number; className?: string }) {
    const firstText = useRef<HTMLParagraphElement>(null);
    const secondText = useRef<HTMLParagraphElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    let xPercent = 0;

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            if (xPercent <= -100) {
                xPercent = 0;
            }
            if (xPercent > 0) {
                xPercent = -100;
            }

            if (firstText.current) gsap.set(firstText.current, { xPercent: xPercent });
            if (secondText.current) gsap.set(secondText.current, { xPercent: xPercent });
            xPercent += 0.1 * direction;
            animationFrameId = requestAnimationFrame(animate);
        };

        // Speed up on scroll
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => (direction = e.direction * -1)
            },
            x: "-500px",
        });

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [direction]);

    return (
        <div className={cn("relative flex overflow-hidden border-y-4 border-black bg-white py-3 sm:py-4", className)}>
            <div ref={slider} className="relative whitespace-nowrap flex">
                <p ref={firstText} className="m-0 pr-8 sm:pr-12 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider shrink-0">
                    {text} • {text} •
                </p>
                <p ref={secondText} className="absolute left-[100%] top-0 m-0 pr-8 sm:pr-12 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider shrink-0">
                    {text} • {text} •
                </p>
            </div>
        </div>
    );
}
