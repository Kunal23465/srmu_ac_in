import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/src/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function BrutalCard({ title, img, color, i }: { title: string; img: string; color: string; i: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!cardRef.current) return;
        gsap.fromTo(cardRef.current,
            { rotation: Math.random() * 10 - 5, y: 100 },
            {
                rotation: 0,
                y: 0,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom-=100",
                    end: "top center",
                    scrub: 1
                }
            }
        );
    }, [i]);

    return (
        <div ref={cardRef} className={cn("group relative aspect-[3/4] w-full border-4 border-black p-4 transition-transform hover:-translate-y-2", color, "shadow-[8px_8px_0px_0px_#000]")}>
            <div className="relative h-full w-full overflow-hidden border-2 border-black bg-white">
                <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute bottom-0 left-0 w-full border-t-2 border-black bg-white p-2 text-center font-bold uppercase">
                    {title}
                </div>
            </div>
            {/* Decorative Pin */}
            <div className="absolute -top-6 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]" />
        </div>
    );
}
