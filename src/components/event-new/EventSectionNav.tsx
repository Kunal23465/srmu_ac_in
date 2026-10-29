import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./NewEventComponent.module.css";

const sections = [
    { id: "news", label: "Upcoming Events" },
    { id: "categories", label: "Categories" },
    { id: "special-events", label: "Celebrity & Special Events" },
    { id: "tedx", label: "TEDx Reels" },
    { id: "calendar", label: "Calendar" },
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
        <nav className={`${styles.sectionNav} relative hidden border-b border-[#D6E2F0] bg-white md:block`} aria-label="Event sections">
            <div className={styles.sectionNavContent}>
                <ul className="m-0 flex list-none flex-wrap items-center gap-2 p-0">
                    {sections.map(({ id, label }) => (
                        <li key={id} className="list-none!">
                            <a
                                href={`#${id}`}
                                className="flex min-h-[38px] items-center justify-center rounded-full bg-[#E0F1FF] px-4 py-2 text-center text-[13px] leading-snug font-medium tracking-normal text-[#14284E] !normal-case transition-colors hover:bg-[#d1e9fc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14284E] aria-[current=location]:bg-[#FFB703] motion-reduce:transition-none"
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
