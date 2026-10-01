import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { LayoutGrid, GraduationCap, Monitor, BriefcaseBusiness, UsersRound, Award } from "lucide-react";
import Classes from "../../../utils/styles/Global.module.css";
import styles from "./DepartmentSectionNav.module.css";

const sections = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "programs", label: "Programs", icon: GraduationCap },
    { id: "labs", label: "Labs & Facilities", icon: Monitor },
    { id: "placements", label: "Placements", icon: BriefcaseBusiness },
    { id: "faculty", label: "Faculty", icon: UsersRound },
    { id: "scholarships", label: "Scholarships", icon: Award },
];

export default function DepartmentSectionNav() {
    const [activeSection, setActiveSection] = useState("overview");
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
        <nav className={styles.nav} aria-label="Department sections">
            <div className={Classes["container"]}>
                <ul className={styles.links}>
                    {sections.map(({ id, label, icon: Icon }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={styles.link}
                                aria-current={activeSection === id ? "location" : undefined}
                                onClick={(event) => scrollToSection(event, id)}
                            >
                                <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
