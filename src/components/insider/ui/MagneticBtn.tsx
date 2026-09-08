import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "../lib/utils";

export function MagneticBtn({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.3);
            yTo(y * 0.3);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("mousemove", mouseMove);
        el.addEventListener("mouseleave", mouseLeave);
        return () => {
            el.removeEventListener("mousemove", mouseMove);
            el.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <button
            ref={ref}
            className={cn(
                "relative inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 text-lg font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-[4px] active:shadow-none",
                className
            )}
        >
            {children}
        </button>
    );
}
