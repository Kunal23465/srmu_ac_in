import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, BookOpen, Building2, Bus, CalendarDays, ChevronDown, ChevronRight, GraduationCap, Mic, Music, Sparkles, Trophy } from "lucide-react";
import { HeaderData } from "../header/HeaderData";
import styles from "./new.module.css";

const campusItems = HeaderData[0].bottomHeaderData[0].navitems.find(
  (item) => item.item === "Campus Life",
)!.subItem!;

// Existing destinations only: the original header data and pages stay untouched.
const highlights = {
  "/facilities": {
    title: "Explore our facilities",
    description: "Spaces that support your everyday campus life.",
    icon: Building2,
    links: [
      { label: "Central Library", description: "Discover resources & learning spaces", path: "/central-library", icon: BookOpen },
      { label: "Hostel", description: "Your home on campus", path: "/hostel", icon: Building2 },
      { label: "Transportation", description: "Stay connected to campus", path: "/transportation", icon: Bus },
    ],
    all: "Explore all facilities",
  },
  "/events": {
    title: "Experience campus events",
    description: "Culture, ideas and moments to remember.",
    icon: CalendarDays,
    links: [
      { label: "Anubhuti 2025", description: "Annual cultural festival", path: "/events/anubhuti-2025", icon: Music },
      { label: "Harmony 2K23", description: "Welcoming our freshers", path: "/events/freshers-party-harmony-2k23", icon: Sparkles },
      { label: "Ullas 2023", description: "Celebrating the spirit of sport", path: "/events/ullas-2023", icon: Trophy },
      { label: "Conferences", description: "Discover ideas & conversations", path: "/events#conferences", icon: GraduationCap },
      { label: "TEDx SRMUInnovatia", description: "Ideas and inspiring voices", path: "/events/tedx-srmuinnovatia", icon: Mic },
    ],
    all: "Explore all events",
  },
};

type HighlightPath = keyof typeof highlights;
const hasHighlights = (path: string): path is HighlightPath => path in highlights;

function HighlightLinks({ path, onNavigate }: { path: HighlightPath; onNavigate: () => void }) {
  const section = highlights[path];
  const Icon = section.icon;
  return (
    <>
      <div className={styles.panelHeading}>
        <span className={styles.headingIcon}><Icon size={23} aria-hidden="true" /></span>
        <div><strong>{section.title}</strong><p>{section.description}</p></div>
      </div>
      <ul className={styles.highlights}>
        {section.links.map(({ label, description, path: destination, icon: ItemIcon }) => (
          <li key={destination}>
            <Link to={destination} onClick={onNavigate} className={styles.highlightLink}>
              <span className={styles.icon}><ItemIcon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
              <span className={styles.linkCopy}><strong>{label}</strong><small>{description}</small></span>
              <ArrowUpRight size={16} className={styles.linkArrow} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <Link to={path} onClick={onNavigate} className={styles.viewAll}>{section.all}<ChevronRight size={17} aria-hidden="true" /></Link>
    </>
  );
}

export function CampusLifeDesktop() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<HighlightPath | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  const location = useLocation();
  const close = () => { setOpen(false); setActive(null); };

  useEffect(() => { setOpen(false); setActive(null); }, [location]);

  useEffect(() => {
    if (!open) return;
    const place = () => {
      const rect = root.current?.getBoundingClientRect();
      if (rect) {
        // Reserve both columns, so the flyout always opens to the right.
        setPosition({ top: rect.bottom, left: Math.max(16, Math.min(rect.right - 290, window.innerWidth - 646)) });
      }
    };
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) close();
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, { passive: true });
    document.addEventListener("pointerdown", dismiss);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [open]);

  return (
    <div ref={root} className={styles.desktopRoot}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpen(true); }} onMouseLeave={close}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
      onKeyDown={(event) => {
        if (event.key === "Escape") { event.stopPropagation(); close(); trigger.current?.focus(); }
      }}>
      <button ref={trigger} type="button" className={styles.trigger} aria-expanded={open} aria-controls={id}
        onClick={() => { if (open) close(); else setOpen(true); }}
        onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); } }}>
        Campus Life<ChevronDown size={13} aria-hidden="true" className={open ? styles.rotate : ""} />
      </button>
      {open && (
        <div id={id} className={styles.dropdown} style={position}>
          <ul className={styles.campusList} aria-label="Campus Life">
            {campusItems.map((item) => {
              const nested = hasHighlights(item.path);
              const selected = active === item.path;
              return (
                <li key={item.path} className={selected ? styles.selected : ""}
                  onMouseEnter={() => setActive(nested ? item.path as HighlightPath : null)}
                  onFocus={() => { if (nested) setActive(item.path as HighlightPath); }}
                  onKeyDown={(event) => {
                    if (nested && selected && (event.key === "ArrowRight" || (event.key === "Tab" && !event.shiftKey && event.target instanceof HTMLButtonElement))) {
                      event.preventDefault();
                      document.getElementById(`${id}-highlights`)?.querySelector("a")?.focus();
                    }
                  }}>
                  <Link to={item.path} onClick={close} className={styles.campusLink}>{item.item}</Link>
                  {nested && <button type="button" className={styles.expand} aria-label={`Explore ${item.item}`}
                    aria-expanded={selected} aria-controls={`${id}-highlights`}
                    onClick={() => setActive(selected ? null : item.path as HighlightPath)}>
                    <ChevronRight size={17} aria-hidden="true" />
                  </button>}
                </li>
              );
            })}
          </ul>
          {active && <div id={`${id}-highlights`} className={styles.flyout}>
            <div key={active} className={styles.flyoutContent}><HighlightLinks path={active} onNavigate={close} /></div>
          </div>}
        </div>
      )}
    </div>
  );
}

export function CampusLifeMobile({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState<HighlightPath | null>(null);
  const id = useId();
  const navigate = () => { setActive(null); onNavigate(); };
  return <li className={styles.mobileRoot}>
    <ul className={styles.mobileList}>
      {campusItems.map((item) => {
        const nested = hasHighlights(item.path);
        const selected = active === item.path;
        return <li key={item.path}>
          <div className={styles.mobileRow}>
            <Link to={item.path} onClick={navigate}>{item.item}</Link>
            {nested && <button type="button" aria-label={`Explore ${item.item}`} aria-expanded={selected}
              aria-controls={`${id}-${item.item}`} onClick={() => setActive(selected ? null : item.path as HighlightPath)}>
              <ChevronDown size={18} aria-hidden="true" className={selected ? styles.rotate : ""} />
            </button>}
          </div>
          {nested && selected && <div id={`${id}-${item.item}`} className={styles.mobilePanel}>
            <HighlightLinks path={item.path as HighlightPath} onNavigate={navigate} />
          </div>}
        </li>;
      })}
    </ul>
  </li>;
}
