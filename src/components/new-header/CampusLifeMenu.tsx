import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, BookOpen, Building2, Bus, CalendarDays, Camera, ChevronDown, ChevronRight, Cpu, Dumbbell, GraduationCap, Heart, Landmark, Leaf, Mic, Music, Palette, PenTool, Shield, Sparkles, WashingMachine } from "lucide-react";
import { HeaderData } from "../header/HeaderData";
import styles from "./new.module.css";

const campusItems = HeaderData[0].bottomHeaderData[0].navitems.find(
  (item) => item.item === "Campus Life",
)!.subItem!
  .filter((item) => item.item !== "Central Library" && item.item !== "Hostel")
  .map((item) => item.item === "Facilities"
    ? { ...item, path: "/facilities-new" }
    : item.item === "Events"
      ? { ...item, path: "/event-new" }
      : item.item === "Convocation"
        ? { ...item, path: "/convocation-new" }
        : item.item === "Green Initiative"
          ? { ...item, path: "/green-initiative-new" }
          : item.item === "Women Empowerment"
            ? { ...item, path: "/women-empowerment-new" }
            : item.item === "Outreach Activations"
              ? { ...item, path: "/outreach-activations-new" }
              : item.item === "Student Senate"
                ? { ...item, path: "/student-senate-new" }
                : item.item === "Student Corner"
                  ? { ...item, path: "/student-corner-new" }
                  : item.item === "Grievance Redressal System"
                    ? { ...item, path: "/grievance-redressal-system-new" }
                      : item.item === "Clubs"
                        ? { ...item, path: "/clubs-new" }
            : item);

// Campus Life highlights point to the current facilities page sections and existing detail pages.
const highlights = {
  "/facilities-new": {
    title: "Explore our facilities",
    description: "Spaces that support your everyday campus life.",
    icon: Building2,
    links: [
      { label: "Central Library", description: "Discover resources & learning spaces", path: "/facilities-new#facilities-new-facility-11", icon: BookOpen },
      { label: "Hostel", description: "Your home on campus", path: "/hostel", icon: Building2 },
      { label: "Transportation", description: "Stay connected to campus", path: "/facilities-new#facilities-new-transport", icon: Bus },
      { label: "Academic blocks", description: "Explore SRMU’s five academic blocks", path: "/facilities-new#facilities-new-blocks", icon: Building2 },
      { label: "Labs & Seminar Hall", description: "Explore labs, classrooms and seminar spaces", path: "/facilities-new#facilities-new-academics", icon: GraduationCap },
      { label: "Healthcare", description: "On-campus healthcare facilities", path: "/facilities-new#facilities-new-essentials-healthcare", icon: Building2 },
      { label: "Transport, fee & route plan", description: "View transport services and route information", path: "/transportation", icon: Bus },
      { label: "Hostel - AC class", description: "Explore hostel accommodation and amenities", path: "/facilities-new#facilities-new-essentials-hostel", icon: Building2 },
      { label: "Banking", description: "Banking and ATM facilities on campus", path: "/facilities-new#facilities-new-essentials-banking", icon: Landmark },
      { label: "Laundry Facilities", description: "Laundry support for campus residents", path: "/facilities-new#facilities-new-essentials-laundry", icon: WashingMachine },
      { label: "Sports Stadium", description: "Explore sports and recreation facilities", path: "/facilities-new#facilities-new-sports", icon: Dumbbell },
    ],
    all: "Explore all facilities",
  },
  "/event-new": {
    title: "Experience campus events",
    description: "Culture, ideas and moments to remember.",
    icon: CalendarDays,
    links: [
      { label: "Upcoming Events", description: "See the latest campus event highlights", path: "/event-new#news", icon: CalendarDays },
      { label: "Categories", description: "Browse academic, cultural, technical and sports events", path: "/event-new#categories", icon: GraduationCap },
      { label: "Academic Events", description: "Explore conferences, workshops and guest lectures", path: "/event-new#academic-events", icon: GraduationCap },
      { label: "Technical Events", description: "Explore technology-focused activities and competitions", path: "/event-new#technical-events", icon: Cpu },
      { label: "Celebrity & Special Events", description: "Explore special guests and performances", path: "/event-new#special-events", icon: Mic },
      { label: "Calendar", description: "Browse events by date and category", path: "/event-new#calendar", icon: CalendarDays },
      { label: "FAQs", description: "Find answers to common event questions", path: "/event-new#faqs", icon: BookOpen },
      { label: "All Events", description: "Explore the full events page", path: "/event-new", icon: CalendarDays },
    ],
    all: "Explore all events",
  },
  "/clubs-new": {
    title: "Explore student clubs",
    description: "Find your community and build your interests.",
    icon: Sparkles,
    links: [
      { label: "Razzmataz", description: "Fashion, style and creative expression", path: "/clubs-new#club-razzmataz", icon: Sparkles },
      { label: "Beat the Beats", description: "Dance, movement and performance", path: "/clubs-new#club-beat-the-beats", icon: Music },
      { label: "Expressions", description: "Acting, production and stagecraft", path: "/clubs-new#club-expressions", icon: Mic },
      { label: "The Manch Club", description: "Public speaking and confidence", path: "/clubs-new#club-the-manch-club", icon: Mic },
      { label: "1090 Power Angels & The Power Super Heroes Club", description: "Social awareness and civic responsibility", path: "/clubs-new#club-1090-power-angels-the-power-super-heroes-club", icon: Shield },
      { label: "Tech Fusion Club", description: "Technology, innovation and making", path: "/clubs-new#club-tech-fusion-club", icon: Cpu },
      { label: "The Ozone Club", description: "Sustainability and environmental action", path: "/clubs-new#club-the-ozone-club", icon: Leaf },
      { label: "Sur Jhankar", description: "Music and performance", path: "/clubs-new#club-sur-jhankar", icon: Music },
      { label: "Positive Psychology", description: "Wellbeing, mindfulness and optimism", path: "/clubs-new#club-positive-psychology", icon: Heart },
      { label: "Srijan Club", description: "Visual arts and creative projects", path: "/clubs-new#club-srijan-club", icon: Palette },
      { label: "Snapshot", description: "Photography and campus stories", path: "/clubs-new#club-snapshot", icon: Camera },
      { label: "Apni Pathshala Club", description: "Community learning and education", path: "/clubs-new#club-apni-pathshala-club", icon: BookOpen },
      { label: "The Golden Pen Club", description: "Poetry, storytelling and writing", path: "/clubs-new#club-the-golden-pen-club", icon: PenTool },
    ],
    all: "Explore all clubs",
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
        <li key={label}>
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
