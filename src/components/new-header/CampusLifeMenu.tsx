import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, BookOpen, Building2, Bus, CalendarDays, Camera, ChevronDown, ChevronRight, Cpu, Droplets, Dumbbell, GraduationCap, Heart, Landmark, Leaf, Mic, Music, Palette, PenTool, Recycle, Shield, Sparkles, Sun, Trees, UsersRound, WashingMachine, type LucideIcon } from "lucide-react";
import styles from "./new.module.css";

const campusItems = [
  { item: "Event", path: "/event-new" },
  { item: "Convocation", path: "/convocation-new" },
  { item: "Facilities", path: "/facilities-new" },
  { item: "Clubs", path: "/clubs-new" },
  { item: "Women Empowerment", path: "/women-empowerment-new" },
  { item: "CSR", path: "/outreach-activations-new" },
  { item: "Student Life", path: "/student-senate-new" },
  { item: "Green Initiative", path: "/green-initiative-new" },
];

// Campus Life highlights point to the current facilities page sections and existing detail pages.
type HighlightLinkItem = {
  label: string;
  description: string;
  path: string;
  icon: LucideIcon;
  children?: HighlightLinkItem[];
};
type HighlightSection = {
  title: string;
  description: string;
  icon: LucideIcon;
  links: HighlightLinkItem[];
  all: string;
};

const highlights: Record<string, HighlightSection> = {
  "/facilities-new": {
    title: "Explore our facilities",
    description: "Spaces that support your everyday campus life.",
    icon: Building2,
    links: [
      { label: "Academic blocks", description: "Explore SRMU’s five academic blocks", path: "/facilities-new#facilities-new-blocks", icon: Building2 },
      { label: "Labs & Seminar Hall", description: "Explore labs, classrooms and seminar spaces", path: "/facilities-new#facilities-new-academics", icon: GraduationCap },
      { label: "Healthcare", description: "On-campus healthcare facilities", path: "/facilities-new#facilities-new-essentials-healthcare", icon: Building2 },
      { label: "Transport, fee & route plan", description: "View transport services and route information", path: "/transportation", icon: Bus },
      {
        label: "Hostel",
        description: "Explore hostel accommodation and amenities",
        path: "/hostel",
        icon: Building2,
        children: [
          { label: "AC class", description: "Explore air-conditioned hostel accommodation", path: "/hostel", icon: Building2 },
          { label: "Banking", description: "Banking and ATM facilities on campus", path: "/facilities-new#facilities-new-essentials-banking", icon: Landmark },
          { label: "Laundry Facilities", description: "Laundry support for campus residents", path: "/facilities-new#facilities-new-essentials-laundry", icon: WashingMachine },
          { label: "Sports Stadium", description: "Explore sports and recreation facilities", path: "/facilities-new#facilities-new-sports", icon: Dumbbell },
        ],
      },
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
      // { label: "FAQs", description: "Find answers to common event questions", path: "/event-new#faqs", icon: BookOpen },
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
  "/women-empowerment-new": {
    title: "Women Empowerment",
    description: "Explore the programs and support that help women thrive.",
    icon: Heart,
    links: [
      { label: "1090", description: "Women Powerline and Power Angels", path: "/women-empowerment-new#women-empowerment-new-initiatives", icon: Shield },
      { label: "Self defence", description: "Self defence workshops and safety initiatives", path: "/women-empowerment-new#women-empowerment-new-initiatives", icon: Shield },
      { label: "Workshop", description: "Workshops and awareness programs", path: "/women-empowerment-new#women-empowerment-new-initiatives", icon: BookOpen },
      { label: "Pratibha Cell", description: "Women’s cell and campus support", path: "/women-empowerment-new#women-empowerment-new-initiatives", icon: Sparkles },
    ],
    all: "Explore Women Empowerment",
  },
  "/outreach-activations-new": {
    title: "CSR initiatives",
    description: "Explore SRMU’s community outreach and service initiatives.",
    icon: Heart,
    links: [
      { label: "Pathshala", description: "Community learning through Apni Pathshala", path: "/outreach-activations-new#outreach-new-initiatives", icon: BookOpen },
      { label: "Blood Donation", description: "Community blood donation drives", path: "/outreach-activations-new#outreach-new-initiatives", icon: Heart },
      { label: "Camp", description: "Community camps and outreach activities", path: "/outreach-activations-new#outreach-new-initiatives", icon: CalendarDays },
      { label: "Legal Aid Cell", description: "Free legal aid and community support", path: "/outreach-activations-new#outreach-new-initiatives", icon: Landmark },
      { label: "Agricultural Guidance", description: "Agricultural guidance for nearby communities", path: "/outreach-activations-new#outreach-new-initiatives", icon: Leaf },
      { label: "Kisan Mela", description: "Agriculture and farmer outreach events", path: "/outreach-activations-new#outreach-new-initiatives", icon: Leaf },
      { label: "NSS Camp", description: "National Service Scheme camps", path: "/outreach-activations-new#outreach-new-initiatives", icon: UsersRound },
      { label: "NCC Camp", description: "National Cadet Corps camps", path: "/outreach-activations-new#outreach-new-initiatives", icon: Shield },
    ],
    all: "Explore all CSR initiatives",
  },
  "/student-senate-new": {
    title: "Student Life",
    description: "Student representation and information for campus life.",
    icon: GraduationCap,
    links: [
      { label: "Student Senate", description: "Student voice and representation", path: "/student-senate-new", icon: UsersRound },
      { label: "Policies", description: "Student policies and grievance redressal", path: "/grievance-redressal-system-new", icon: BookOpen },
    ],
    all: "Explore Student Life",
  },
  "/green-initiative-new": {
    title: "Green Initiative",
    description: "Explore SRMU’s sustainability initiatives.",
    icon: Leaf,
    links: [
      { label: "Bio-gas Plant", description: "Clean energy", path: "/green-initiative-new#green-initiative-bio-gas-plant", icon: Leaf },
      { label: "Solar Panels", description: "Clean energy", path: "/green-initiative-new#green-initiative-solar-panels", icon: Sun },
      { label: "Rain Water Harvesting", description: "Water conservation", path: "/green-initiative-new#green-initiative-rain-water-harvesting", icon: Droplets },
      { label: "Energy Parks", description: "Clean energy", path: "/green-initiative-new#green-initiative-energy-parks", icon: Sun },
      { label: "Green Belts", description: "Biodiversity", path: "/green-initiative-new#green-initiative-green-belts", icon: Trees },
      { label: "Green Composting", description: "Waste management", path: "/green-initiative-new#green-initiative-green-composting", icon: Recycle },
      { label: "Herbal Nursery", description: "Biodiversity", path: "/green-initiative-new#green-initiative-herbal-nursery", icon: Leaf },
      { label: "Green House", description: "Biodiversity", path: "/green-initiative-new#green-initiative-green-house", icon: Trees },
      { label: "Sensor Based Street Lights", description: "Clean energy", path: "/green-initiative-new#green-initiative-sensor-based-street-lights", icon: Sun },
      { label: "Plastic Free Campus", description: "Waste management", path: "/green-initiative-new#green-initiative-plastic-free-campus", icon: Recycle },
      { label: "Sewage Treatment Plant (STP)", description: "Water conservation", path: "/green-initiative-new#green-initiative-sewage-treatment-plant-stp", icon: Droplets },
    ],
    all: "Explore all Green Initiatives",
  },
};

type HighlightPath = keyof typeof highlights;
const hasHighlights = (path: string): path is HighlightPath => path in highlights;

function HighlightLinks({ path, onNavigate }: { path: HighlightPath; onNavigate: () => void }) {
  const section = highlights[path];
  const Icon = section.icon;
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  return (
    <>
      <div className={styles.panelHeading}>
        <span className={styles.headingIcon}><Icon size={23} aria-hidden="true" /></span>
        <div><strong>{section.title}</strong><p>{section.description}</p></div>
      </div>
      <ul className={styles.highlights}>
        {section.links.map(({ label, description, path: destination, icon: ItemIcon, children }) => (
          <li key={label} className={styles.highlightItem}
            onMouseEnter={() => { if (children) setExpandedGroup(label); }}
            onMouseLeave={() => { if (children) setExpandedGroup(null); }}>
            <div className={`${styles.highlightRow} ${expandedGroup === label ? styles.highlightRowExpanded : ""}`}>
              <Link to={destination} onClick={onNavigate} className={styles.highlightLink}>
                <span className={styles.icon}><ItemIcon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className={styles.linkCopy}><strong>{label}</strong><small>{description}</small></span>
                {!children && <ArrowUpRight size={16} className={styles.linkArrow} aria-hidden="true" />}
              </Link>
              {children && <button type="button" className={styles.groupExpand} aria-label={`Show ${label} options`}
                aria-expanded={expandedGroup === label} onClick={() => setExpandedGroup(expandedGroup === label ? null : label)}>
                <ChevronDown size={16} aria-hidden="true" />
              </button>}
            </div>
            {children && expandedGroup === label && <ul className={styles.childLinks} aria-label={`${label} options`}>
              {children.map(({ label: childLabel, description: childDescription, path: childPath, icon: ChildIcon }) => (
                <li key={childLabel}>
                  <Link to={childPath} onClick={onNavigate} className={styles.childLink}>
                    <ChildIcon size={17} aria-hidden="true" />
                    <span><strong>{childLabel}</strong><small>{childDescription}</small></span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>}
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
  const [flyoutTop, setFlyoutTop] = useState(-3);
  const root = useRef<HTMLDivElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const id = useId();
  const location = useLocation();
  const cancelScheduledClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const close = () => {
    cancelScheduledClose();
    setOpen(false);
    setActive(null);
  };
  const activateItem = (path: string, row: HTMLElement | null) => {
    if (!hasHighlights(path)) {
      setActive(null);
      return;
    }
    setActive(path);
    const dropdownRect = dropdown.current?.getBoundingClientRect();
    const rowRect = row?.getBoundingClientRect();
    if (path === "/green-initiative-new") {
      setFlyoutTop(-3);
    } else if (dropdownRect && rowRect) {
      setFlyoutTop(Math.max(-3, rowRect.top - dropdownRect.top - 3));
    }
  };
  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimer.current = window.setTimeout(close, 180);
  };

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
      onPointerEnter={(event) => { if (event.pointerType === "mouse") { cancelScheduledClose(); setOpen(true); } }} onMouseLeave={scheduleClose}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
      onKeyDown={(event) => {
        if (event.key === "Escape") { event.stopPropagation(); close(); trigger.current?.focus(); }
      }}>
      <button ref={trigger} type="button" className={styles.trigger} aria-expanded={open} aria-controls={id}
        onClick={() => { if (open) close(); else setOpen(true); }}
        onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); } }}>
        Campus Life
      </button>
      {open && (
        <div ref={dropdown} id={id} className={styles.dropdown} style={position}>
          <ul className={styles.campusList} aria-label="Campus Life">
            {campusItems.map((item) => {
              const nested = hasHighlights(item.path);
              const selected = active === item.path;
              return (
                <li key={item.path} className={selected ? styles.selected : ""}
                  onMouseEnter={(event) => activateItem(item.path, event.currentTarget)}
                  onFocus={(event) => { if (nested) activateItem(item.path, event.currentTarget); }}
                  onKeyDown={(event) => {
                    if (nested && selected && (event.key === "ArrowRight" || (event.key === "Tab" && !event.shiftKey && event.target instanceof HTMLButtonElement))) {
                      event.preventDefault();
                      document.getElementById(`${id}-highlights`)?.querySelector("a")?.focus();
                    }
                  }}>
                  <Link to={item.path} onClick={close} className={styles.campusLink}>{item.item}</Link>
                  {nested && <button type="button" className={styles.expand} aria-label={`Explore ${item.item}`}
                    aria-expanded={selected} aria-controls={`${id}-highlights`}
                    onClick={(event) => {
                      if (selected) setActive(null);
                      else activateItem(item.path, event.currentTarget.closest("li"));
                    }}>
                    <ChevronRight size={17} aria-hidden="true" />
                  </button>}
                </li>
              );
            })}
          </ul>
          {active && <div id={`${id}-highlights`} className={styles.flyout} style={{ top: flyoutTop }}>
            <div key={active} className={styles.flyoutContent}
              style={{
                maxHeight: active === "/green-initiative-new"
                  ? `${Math.max(180, window.innerHeight - position.top - flyoutTop - 12)}px`
                  : `min(calc(100dvh - 150px), ${Math.max(180, window.innerHeight - position.top - flyoutTop - 16)}px)`
              }}>
              <HighlightLinks path={active} onNavigate={close} />
            </div>
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
