import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";

const sections = [
    { id: "news", label: "News & Updates" },
    { id: "categories", label: "Categories" },
    { id: "special-events", label: "Celebrity & Special Events" },
    { id: "calendar", label: "Calendar" },
    { id: "archive", label: "Archives" },
    { id: "faqs", label: "FAQs" },
];

export default function EventSectionNav() {
    const [activeSection, setActiveSection] = useState("categories");
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 768px)");
        let frame: number | null = null;

        const updateActiveSection = () => {
            frame = null;
            if (!desktop.matches) return;

            let current = sections[0].id;
            for (const section of sections) {
                const target = document.getElementById(section.id);
                if (target && target.getBoundingClientRect().top <= 128) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };

        const scheduleUpdate = () => {
            if (desktop.matches && frame === null) {
                frame = window.requestAnimationFrame(updateActiveSection);
            }
        };

        updateActiveSection();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const target = document.getElementById(id);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
    };

    return (
        <nav className="relative hidden bg-[#FFB703] px-6 md:block" aria-label="Event sections">
            <div className="mx-auto max-w-[1626px]">
                <ul className="m-0 grid list-none grid-cols-6 gap-2 p-0">
                    {sections.map(({ id, label }) => (
                        <li key={id} className="list-none!">
                            <a
                                href={`#${id}`}
                                className="flex min-h-[42px] items-center justify-center px-2 py-2 text-center text-[10px] leading-snug font-bold tracking-[0.02em] text-[#0F4A85] uppercase transition-colors hover:text-[#14284E] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#14284E] aria-[current=location]:text-[#14284E] motion-reduce:transition-none lg:text-[12px]"
                                aria-current={activeSection === id ? "location" : undefined}
                                onClick={(event) => scrollToSection(event, id)}
                            >
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
