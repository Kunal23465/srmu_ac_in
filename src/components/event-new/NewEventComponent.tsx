import EventVideo from "./EventVideo";
import EventSectionNav from "./EventSectionNav";
import { technicalVideo, culturalVideo, sportsVideo, celebrityVideo, anubhutiVideo, dandiyaNightVideo, funDayVideo, harmonyVideo, daroharVideo, harmony2026Video, independenceDayVideo, rangBarsheVideo, pawandeepArunitaVideo, srmuDarshanVideo, shaanVideo, shilpaRaoVideo, sunnyDeolVideo, type EventVideoAsset } from "./eventVideoAssets";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Cpu, GraduationCap, Image, MapPin, Mic, Music, Palmtree, Pause, Play, Trophy, X } from "lucide-react";
import desktopEventsBanner from "../../assets/images/event-new/banners/desktop-view.webp";
import insidersBannerImage from "../../assets/images/event-new/new/insiders-banner.webp";
import scannerImage from "../../assets/images/event-new/new/scanner.webp";
import mobileEventsBanner from "../../assets/images/event-new/banners/mobile-view.webp";
import vivekaThumbnail from "../../assets/images/event-new/thumbnails/Techno.webp";
import anubhutiThumbnail from "../../assets/images/event-new/thumbnails/Cultural Event.webp";
import ullasThumbnail from "../../assets/images/event-new/thumbnails/Ullas.webp";
import dharoharThumbnail from "../../assets/images/event-new/thumbnails/Dharohar.webp";
import harmonyThumbnail from "../../assets/images/event-new/thumbnails/HArmony.webp";
import facultyTrainingImage from "../../assets/images/event-new/academic-event/Faculty-training-Development.jpg";
import conferenceImage from "../../assets/images/event-new/academic-event/conference.webp";
import workshopImage from "../../assets/images/event-new/academic-event/academic-workshop-group-portrait.webp";
import seminarImage from "../../assets/images/event-new/academic-event/seminar.webp";
import alumniTalkImage from "../../assets/images/event-new/academic-event/alumni-talk.webp";
import visitsImage from "../../assets/images/event-new/academic-event/visits.webp";
import hackathonImage from "../../assets/images/event-new/technical-event/Hackathon.webp";
import technicalWorkshopImage from "../../assets/images/event-new/technical-event/sxnhgivgepzqz9bvrjoq.webp";
import codingImage from "../../assets/images/event-new/technical-event/Coading.webp";
import projectImage from "../../assets/images/event-new/technical-event/Project.webp";
import industrialVisitImage from "../../assets/images/event-new/technical-event/Industrial visit.webp";
import innovationImage from "../../assets/images/event-new/technical-event/Innovation.webp";
import basketballImage from "../../assets/images/event-new/sports-event/Basket ball.webp";
import kabaddiImage from "../../assets/images/event-new/sports-event/Kabaddi.webp";
import khoKhoImage from "../../assets/images/event-new/sports-event/Kho kho.webp";
import tableTennisImage from "../../assets/images/event-new/sports-event/Table tennis.webp";
import volleyballImage from "../../assets/images/event-new/sports-event/Volley ball.webp";
import athleteImage from "../../assets/images/event-new/sports-event/athlete..webp";
import carromImage from "../../assets/images/event-new/sports-event/carrom.webp";
import chessImage from "../../assets/images/event-new/sports-event/chess.webp";
import tugOfWarImage from "../../assets/images/event-new/sports-event/tug-of-war.webp";
import { calendarEvents, type CalendarEvent } from "./eventNewData";
import eventsData from "../../data/new-home/eventsData";
// import { archiveEvents } from "./eventNewData"; // Restore with Event Archives.
import Global from "../../utils/styles/Global.module.css";
import styles from "./NewEventComponent.module.css";

const eventButtonClassName = "inline-flex max-w-full w-fit items-center justify-center gap-2 rounded-lg bg-[#FFB703] px-8 py-3 text-center text-[14px] font-bold tracking-wider text-[#14284E] uppercase shadow-md shadow-[#14284E]/10 cursor-pointer transition-shadow hover:shadow-lg [&>svg]:shrink-0";

const categories = [
  { name: "Academic", title: "Academic Events", id: "academic-events", Icon: GraduationCap, description: "Conferences, faculty development programmes, workshops, guest lectures and alumni interactions.", reelVideo: undefined as EventVideoAsset | undefined },
  { name: "Viveka", title: "Viveka", id: "technical-events", Icon: Cpu, description: "Showcasing innovation, technical expertise, and future-ready ideas through exciting technology-driven events.", reelVideo: technicalVideo },
  { name: "Anubhuti", title: "Anubhuti", id: "cultural-events", Icon: Music, description: "Bringing technology, creativity, and innovation together through an exciting annual festival of ideas and talent.", reelVideo: culturalVideo },
  { name: "Utsaah & Ullaas", title: "Utsaah & Ullaas", id: "sports-events", Icon: Trophy, description: "Inspiring sportsmanship, teamwork, and a winning spirit through energetic sporting competitions.", reelVideo: sportsVideo },
  { name: "Special", title: "Celebrity & Special", id: "special-events", Icon: Mic, description: "Creating unforgettable campus experiences with celebrated artists, performers, and special guests.", reelVideo: celebrityVideo },
  { name: "Holiday", title: "Holidays", id: "holiday-events", Icon: Palmtree, description: "University holidays, mandatory celebration days and restricted holidays.", reelVideo: undefined as EventVideoAsset | undefined },
];
const exploreReels = [
  ...categories.filter(({ reelVideo }) => !!reelVideo),
  { name: "Dharohar", title: "Dharohar", Icon: Music, description: "Celebrating India’s rich cultural heritage, traditions, and artistic expression through vibrant performances.", reelVideo: daroharVideo },
  { name: "Harmony", title: "Harmony", Icon: Music, description: "Bringing the campus alive with music, dance, and performances that unite diverse talents.", reelVideo: harmony2026Video },
];
const exploreThumbnails: Record<string, string> = {
  Viveka: vivekaThumbnail,
  Anubhuti: anubhutiThumbnail,
  "Utsaah & Ullaas": ullasThumbnail,
  Dharohar: dharoharThumbnail,
  "Harmony 2026": harmonyThumbnail,
};
const academic = [
  { title: "Faculty Training & Development", label: "Faculty Development", description: "Structured programmes building teaching and research capability.", image: facultyTrainingImage, imagePosition: "center 45%", alt: "Faculty development programme participants gathered in an auditorium" },
  { title: "Conferences", label: "Research & Knowledge", description: "Research presentations and expert-led discussions across disciplines.", image: conferenceImage, imagePosition: "center", alt: "Conference delegates presenting publications on stage at SRMU" },
  { title: "Workshops & Industrial Training", label: "Practical Learning", description: "Hands-on sessions connecting classroom learning to industry practice.", image: workshopImage, imagePosition: "center 60%", alt: "Academic workshop participants gathered for a group photograph" },
  { title: "Seminars & Guest Lectures", label: "Expert Insights", description: "Engaging sessions with experts exploring emerging ideas and perspectives.", image: seminarImage, imagePosition: "center", alt: "Students attending a guest lecture in the university auditorium" },
  { title: "Alumni Talks & Interaction", label: "Alumni Connect", description: "Graduates share career journeys and mentor current students.", image: alumniTalkImage, imagePosition: "center", alt: "Speaker addressing an alumni interaction session at SRMU" },
  { title: "Industrial & Educational Visits", label: "Industry Exposure", description: "Learning beyond the classroom through visits to industry and research centres.", image: visitsImage, imagePosition: "center 65%", alt: "Students and faculty gathered outside an institute during an educational visit" },
];
const technical = [
  { title: "Hackathons", label: "Build & Collaborate", description: "48-hour builds tackling real-world problem statements.", image: hackathonImage, imagePosition: "center", alt: "Students demonstrating their work to evaluators during a hackathon" },
  { title: "Technical Workshops", label: "Hands-on Learning", description: "Skill-building sessions on current tools and platforms.", image: technicalWorkshopImage, imagePosition: "center 60%", alt: "Technical workshop participants gathered in an auditorium" },
  { title: "Coding Competitions", label: "Code & Compete", description: "Timed contests testing algorithmic problem-solving.", image: codingImage, imagePosition: "center 60%", alt: "Coding event participants posing together in a classroom" },
  { title: "Project Exhibitions", label: "Student Projects", description: "Students showcase semester and capstone projects.", image: projectImage, imagePosition: "center 65%", alt: "Students presenting an outdoor engineering project demonstration" },
  { title: "Industrial Visits", label: "Industry Exposure", description: "On-site exposure to manufacturing and R&D facilities.", image: industrialVisitImage, imagePosition: "center", alt: "Students listening to a briefing from industry professionals during a factory visit" },
  { title: "Innovation Challenges", label: "Ideas & Innovation", description: "Cross-disciplinary competitions for original ideas.", image: innovationImage, imagePosition: "center 60%", alt: "Students testing robotic vehicles on an indoor competition course" },
];
const cultural = [
  { title: "Anubhuti", video: anubhutiVideo },
  { title: "Dandiya Night", video: dandiyaNightVideo },
  { title: "Fun day", video: funDayVideo },
  { title: "Harmony", video: harmonyVideo },
  { title: "Dharohar", video: daroharVideo },
  { title: "Harmony", video: harmony2026Video },
  { title: "Independence Day", video: independenceDayVideo },
  { title: "Rang Barshe", video: rangBarsheVideo },
];
const sports = [
  { title: "Basket Ball", image: basketballImage, imagePosition: "center", alt: "Students competing for the ball near the basketball hoop" },
  { title: "Kabaddi", image: kabaddiImage, imagePosition: "center", alt: "Students playing kabaddi on the university sports ground" },
  { title: "Kho Kho", image: khoKhoImage, imagePosition: "center", alt: "Students chasing and dodging during a kho kho match" },
  { title: "Table Tennis", image: tableTennisImage, imagePosition: "center", alt: "Students playing a doubles table tennis match indoors" },
  { title: "Volley Ball", image: volleyballImage, imagePosition: "center", alt: "A volleyball player jumping to hit the ball over the net" },
  { title: "Athlete", image: athleteImage, imagePosition: "center 45%", alt: "An athlete performing a barbell squat with spotters nearby" },
  { title: "Carrom", image: carromImage, imagePosition: "center", alt: "Students playing carrom at a university sports event" },
  { title: "Chess", image: chessImage, imagePosition: "center", alt: "Students engaged in a chess match during a university tournament" },
  { title: "Tug of War", image: tugOfWarImage, imagePosition: "center", alt: "Students competing in a tug of war event on the university grounds" },
];
const special = [
  { title: "Pawandeep & Arunita", video: pawandeepArunitaVideo },
  { title: "Darshan Raval", video: srmuDarshanVideo },
  { title: "Shaan", video: shaanVideo },
  { title: "Shilpa Rao", video: shilpaRaoVideo },
  { title: "Sunny Deol & Preity Zinta", video: sunnyDeolVideo },
];
const faqs = [
  ["What types of events are organised at SRMU?", "SRMU organises academic, technical, cultural, sports and special events across departments throughout the year."],
  ["How can students participate in SRMU events?", "Contact your department coordinator for participation and registration details."],
  ["Does SRMU organise academic conferences and workshops?", "Yes, SRMU hosts conferences, seminars and faculty development workshops across disciplines."],
  ["Does SRMU organise technical events and hackathons?", "Technical events include hackathons, coding contests and project exhibitions."],
  ["Does SRMU organise cultural and sports events?", "Cultural festivals and inter-college sports competitions are part of campus life at SRMU."],
  ["How can I find upcoming events at SRMU?", "Explore the Events Calendar and Upcoming Events sections. This preview currently shows sample events; confirm schedules with the department coordinator."],
  // ["Where can I find previous SRMU events?", "Browse the Event Archives by year and category, or search for an event by name."],
  ["Does SRMU organise guest lectures and alumni talks?", "Guest lectures and alumni interaction sessions form part of SRMU's academic events programme."],
];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Placeholder({ label, children }: { label: string; children?: ReactNode }) {
  return <div className="relative flex aspect-[16/11] min-h-[130px] flex-col items-center justify-center gap-[18px] overflow-hidden rounded-[14px] border border-[#21A5DB] bg-[#E0F1FF] p-5 text-center text-[#0F4A85] before:absolute before:aspect-square before:w-[65%] before:translate-x-[58%] before:-translate-y-[36%] before:rounded-full before:border before:border-[#21A5DB] before:opacity-35 before:content-[''] [&>svg]:size-[clamp(35px,6vw,76px)] [&>svg]:stroke-[1.2] [&>span]:relative [&>span]:text-[.8rem] [&>span]:font-medium" role="img" aria-label={`${label} — image placeholder`}>
    {children || <Image aria-hidden="true" />}<span>{label}</span>
  </div>;
}

function Section({ id, title, description, alternate, className = "", children }: { id?: string; title: ReactNode; description?: string; alternate?: boolean; className?: string; children: ReactNode }) {
  return <section id={id} className={`py-[52px] min-[861px]:py-[76px] ${alternate ? "bg-[#E0F1FF]" : ""} ${className}`}>
    <div className={Global.container}>
      <div className="mb-[34px] max-w-full [&>p]:mt-3.5"><h2>{title}</h2>{description && <p>{description}</p>}</div>
      {children}
    </div>
  </section>;
}

type EventCardData = {
  title: string;
  label: string;
  description: string;
  image: string;
  imagePosition: string;
  alt: string;
};

function EventCardGrid({ events, variant }: { events: EventCardData[]; variant: "academic" | "technical" }) {
  const academicViewportRef = useRef<HTMLDivElement>(null);
  const [canScrollAcademicPrev, setCanScrollAcademicPrev] = useState(false);
  const [canScrollAcademicNext, setCanScrollAcademicNext] = useState(false);

  useEffect(() => {
    if (variant !== "academic") return;
    const viewport = academicViewportRef.current;
    if (!viewport) return;

    const updateScrollButtons = () => {
      setCanScrollAcademicPrev(viewport.scrollLeft > 0);
      setCanScrollAcademicNext(
        viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1,
      );
    };

    updateScrollButtons();
    viewport.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      viewport.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [events, variant]);

  const scrollAcademic = (direction: -1 | 1) => {
    const viewport = academicViewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelector<HTMLElement>("article");
    const gap = Number.parseFloat(getComputedStyle(viewport).columnGap) || 0;
    viewport.scrollBy({
      left: direction * ((card?.getBoundingClientRect().width ?? viewport.clientWidth) + gap),
      behavior: "smooth",
    });
  };

  if (variant === "academic") {
    return (
      <div className={styles.academicCarousel}>
        <div
          ref={academicViewportRef}
          className={styles.academicGrid}
          role="region"
          aria-label="Academic event categories"
          aria-description="Scroll horizontally or use the buttons to browse all academic event categories."
          tabIndex={0}
        >
          {events.map(({ title, label, description, image, imagePosition, alt }) => (
            <article key={title} className={styles.academicCard}>
              <div className={styles.cardImage}>
                <img src={image} alt={alt} loading="lazy" decoding="async" width={640} height={480} style={{ objectPosition: imagePosition }} />
              </div>
              <span className={styles.academicIcon}><GraduationCap size={24} aria-hidden="true" /></span>
              <div className={styles.cardCopy}>
                <span className={styles.cardLabel}>{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.academicCarouselControls} aria-label="Academic events navigation">
          <button
            type="button"
            onClick={() => scrollAcademic(-1)}
            disabled={!canScrollAcademicPrev}
            aria-label="Previous academic events"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollAcademic(1)}
            disabled={!canScrollAcademicNext}
            aria-label="Next academic events"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.technicalGrid}>
      {events.map(({ title, label, description, image, imagePosition, alt }) => (
        <article key={title} className={styles.technicalCard}>
          <div className={styles.cardImage}>
            <img src={image} alt={alt} loading="lazy" decoding="async" width={640} height={480} style={{ objectPosition: imagePosition }} />
          </div>
          <div className={styles.cardCopy}>
            <span className={styles.cardLabel}>{label}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function VideoGallery({ items, label, celebrity = false, autoAdvance = false }: { items: { title: string; video: EventVideoAsset }[]; label: string; celebrity?: boolean; autoAdvance?: boolean }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!autoAdvance || isHovered || isFocused || !gallery || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const advance = () => {
      const card = gallery.querySelector<HTMLElement>("figure");
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
      const lastPosition = gallery.scrollWidth - gallery.clientWidth;
      if (gallery.scrollLeft >= lastPosition - 2) {
        gallery.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        gallery.scrollBy({
          left: card.getBoundingClientRect().width + gap,
          behavior: "smooth",
        });
      }
    };

    const interval = window.setInterval(advance, 4500);
    return () => window.clearInterval(interval);
  }, [autoAdvance, isHovered, isFocused, items.length]);

  const moveGallery = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    const card = gallery?.querySelector<HTMLElement>("figure");
    if (!gallery || !card) return;
    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    const lastPosition = gallery.scrollWidth - gallery.clientWidth;
    if (direction < 0 && gallery.scrollLeft <= 2) {
      gallery.scrollTo({ left: lastPosition, behavior: "smooth" });
    } else if (direction > 0 && gallery.scrollLeft >= lastPosition - 2) {
      gallery.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      gallery.scrollBy({
        left: direction * (card.getBoundingClientRect().width + gap),
        behavior: "smooth",
      });
    }
  };

  return <div className={styles.videoGalleryCarousel}>
    <div
      ref={galleryRef}
      className={`${styles.videoGallery} ${celebrity ? styles.celebrityGallery : ""} ${autoAdvance ? styles.autoAdvanceGallery : ""}`}
      role="region"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      {items.map(({ title, video }) => <figure key={title} className={styles.videoCard}>
        <EventVideo {...video} className={styles.panelMedia} />
        <figcaption><h3>{title}</h3></figcaption>
      </figure>)}
    </div>
    {autoAdvance && (
      <div className={styles.videoGalleryControls} aria-label={`${label} navigation`}>
        <button type="button" onClick={() => moveGallery(-1)} aria-label={`Previous ${label}`}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => moveGallery(1)} aria-label={`Next ${label}`}>
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    )}
  </div>;
}

type Detail = { title: string; category?: string; date?: string; venue?: string; description: string; gallery?: boolean };

export default function NewEventComponent() {
  const [month, setMonth] = useState(new Date(2026, 9, 1));
  const [filter, setFilter] = useState("All");
  // Event Archives filters — restore with the section below.
  // const [year, setYear] = useState("All");
  // const [archiveCategory, setArchiveCategory] = useState("All");
  // const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllFaq, setShowAllFaq] = useState(false);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [showAllMonthEvents, setShowAllMonthEvents] = useState(false);
  const [activePanel, setActivePanel] = useState("Special");
  const [activeSport, setActiveSport] = useState(0);
  const [sportsMeet, setSportsMeet] = useState("Utsaah");
  const [newsPaused, setNewsPaused] = useState(false);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (newsPaused) return;
    const interval = setInterval(() => {
      setActiveNewsIndex((current) => (current + 1) % eventsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsPaused]);

  useEffect(() => {
    setShowAllMonthEvents(false);
  }, [month, filter]);

  useEffect(() => {
    if (!detail) return;
    const element = dialog.current;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [detail]);

  const monthKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;
  const monthEvents = (calendarEvents[monthKey] || []).filter(event => filter === "All" || event.cat === filter);
  // const filteredArchive = archiveEvents.filter(event => (year === "All" || event.year === year) && (archiveCategory === "All" || event.cat === archiveCategory) && event.title.toLowerCase().includes(search.trim().toLowerCase()));
  // const upcoming = calendarEvents["2026-10"]; // Restore with Upcoming Events.
  const openEvent = (event: CalendarEvent, date = month) => setDetail({ title: event.title, category: event.cat, date: `${event.day} ${months[date.getMonth()]} ${date.getFullYear()} · ${event.time}`, venue: event.venue, description: event.desc });
  const chooseCategory = (category: string) => {
    setFilter(category);
    setMonth(new Date(2026, 9, 1));
  };

  return (
    <main className="bg-white text-[#14284E] leading-[1.65] scheme-light [&_h1]:font-bold [&_h1]:leading-[1.22] [&_h1]:text-[clamp(2rem,3.5vw,3.4rem)] [&_h1]:tracking-[-.035em] [&_h1_em]:text-[#0F4A85] [&_h1_em]:not-italic [&_h2]:font-bold [&_h2]:leading-[1.22] [&_h2]:text-[clamp(1.65rem,2.6vw,2.4rem)] [&_h2]:tracking-[-.025em] [&_h3]:text-[1.05rem] [&_h3]:font-bold [&_h3]:leading-[1.22] [&_button]:cursor-pointer [&_button]:uppercase [&_a]:uppercase [&_:focus-visible]:outline-3 [&_:focus-visible]:outline-[#0F4A85] [&_:focus-visible]:outline-offset-4 [&_section[id]]:scroll-mt-40 [&_input]:placeholder:text-[#0F4A85] motion-reduce:[&_*]:transition-none" id="event-new-top">
      <section className={styles.hero} aria-labelledby="events-hero-title">
        <picture className={styles.heroBanner}>
          <source media="(max-width: 860px)" srcSet={mobileEventsBanner} width={1080} height={1080} />
          <img src={desktopEventsBanner} width={1358} height={576} alt="" loading="eager" {...({ fetchpriority: "high" } as {})} decoding="async" />
        </picture>
        <div className={`${Global.container} relative z-10`}>
          <div className={styles.heroContent}>
            {/* <p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-white uppercase"><span className="size-2 rounded-full bg-[#FFB703]" /> Events & Activities</p> */}
            <h1 id="events-hero-title" className="text-white">Events at Shri Ramswaroop Memorial University <span className="text-[#FFB703]">(SRMU)</span></h1>
            <p className="mt-6 mb-7 hidden max-w-[570px] text-white/90 min-[861px]:block">Unleash Your Inner Stage</p>
            <div className="hidden flex-wrap items-center gap-3 min-[861px]:flex">
              <a href="#categories" className={`${eventButtonClassName} focus-visible:outline-white!`}>Explore Events <ArrowRight size={18} aria-hidden="true" /></a>
              <a href="#calendar" className="inline-flex max-w-full w-fit items-center justify-center gap-2 rounded-lg border border-white/70 bg-[#14284E]/25 px-8 py-3 text-center text-[14px] font-bold tracking-wider text-white uppercase shadow-md shadow-[#14284E]/10 cursor-pointer transition-colors hover:bg-white/15 focus-visible:outline-white! [&>svg]:shrink-0"><CalendarDays size={18} aria-hidden="true" /> View Event Calendar</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Banner ── */}
      <section className="hidden bg-[#E0F1FF] px-6 py-2 sm:block" aria-label="Event highlights">
        <div className="mx-auto max-w-[1100px]">
          <dl className="m-0 grid grid-cols-4 gap-x-4">
            {([
              { value: "500+", label: "Events Organised" },
              { value: "100+", label: "Workshops & Conferences" },
              { value: "50+", label: "Industry & Expert Sessions" },
              { value: "10000+", label: "Student Participants" },
            ] as const).map((stat) => (
              <div key={stat.label} className="flex min-w-0 flex-col items-center gap-0.5 text-center text-[#14284E]">
                <dt className="text-[9px] leading-snug font-bold tracking-[0.04em] uppercase lg:text-[11px]">{stat.label}</dt>
                <dd className="font-display order-first m-0 text-[26px] leading-none font-extrabold text-[#D62C2B] lg:text-[32px]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Section Nav ── */}
      <EventSectionNav />

      <Section id="news" title="News & Updates">
        <div className={styles.newsFeature}>
          <div className={styles.newsImage}>
            <img src={eventsData[activeNewsIndex].image} alt={eventsData[activeNewsIndex].title} loading="lazy" decoding="async" />
          </div>
          <div className={styles.newsCopy}>
            <span className={styles.newsDate}><CalendarDays size={16} aria-hidden="true" />{eventsData[activeNewsIndex].date}</span>
            <h3>{eventsData[activeNewsIndex].title}</h3>
            <div className={styles.newsExcerpt} dangerouslySetInnerHTML={{ __html: eventsData[activeNewsIndex].description ?? eventsData[activeNewsIndex].excerpt ?? "" }} />
            <button className={eventButtonClassName} onClick={() => {
              const news = eventsData[activeNewsIndex];
              setDetail({ title: news.title, date: news.date, description: news.description ?? news.excerpt ?? "" });
            }}>Read More <ArrowRight size={16} aria-hidden="true" /></button>
            <div className={styles.newsControls}>
              <button type="button" aria-label="Previous news" onClick={() => { setNewsPaused(true); setActiveNewsIndex((activeNewsIndex + eventsData.length - 1) % eventsData.length); }}><ChevronLeft size={18} /></button>
              <span>{activeNewsIndex + 1} / {eventsData.length}</span>
              <button type="button" aria-label="Next news" onClick={() => { setNewsPaused(true); setActiveNewsIndex((activeNewsIndex + 1) % eventsData.length); }}><ChevronRight size={18} /></button>
              <button type="button" aria-label={newsPaused ? "Play news slideshow" : "Pause news slideshow"} onClick={() => setNewsPaused(!newsPaused)}>{newsPaused ? <Play size={16} /> : <Pause size={16} />}</button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="categories" title="Explore Events at SRMU" description="From academic conferences and technical competitions to cultural celebrations and sporting events, explore the diverse events conducted across the university." alternate>
        <div className={styles.explorePanels}>
          {exploreReels.map(({ name, title, Icon, description, reelVideo }) => (
            <a key={name} href={`#${categories.find(category => category.name === name)?.id ?? "cultural-events"}`}
              className={styles.explorePanel} data-active={activePanel === name}
              onMouseEnter={() => setActivePanel(name)} onFocus={() => setActivePanel(name)}>
              {reelVideo && <EventVideo {...reelVideo} poster={exploreThumbnails[name] ?? reelVideo.poster} showPosterUntilPlaying className={styles.panelMedia} />}
              <span className={styles.panelIcon}><Icon size={20} aria-hidden="true" /></span>
              <div className={styles.panelCopy}><h3>{title}</h3><p>{description}</p></div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="academic-events" title="Academic Events" description="Opportunities for students and faculty to learn from experts, exchange ideas, develop professional skills and engage with emerging areas of knowledge." className={styles.academicSection}>
        <EventCardGrid events={academic} variant="academic" />
        <div className="mt-8"><a href="#calendar" className={`${eventButtonClassName} !bg-[#14284E] !text-white`} onClick={() => chooseCategory("Academic")}>View All Academic Events<ArrowRight size={16} /></a></div>
      </Section>

      <Section id="technical-events" title={<>Technical Events - <span className="text-[#FFB703]">Viveka</span></>} description="Activities designed to encourage innovation, problem-solving, practical learning and industry exposure.">
        <EventCardGrid events={[...technical.filter(event => event.title !== "Industrial Visits"), technical[4]]} variant="technical" />
        <div className="mt-8"><a href="#calendar" className={eventButtonClassName} onClick={() => chooseCategory("Technical")}>View All Technical Events<ArrowRight size={16} /></a></div>
      </Section>

      <Section id="cultural-events" title={<>Cultural Events - <span className="text-[#FFB703]">Dharohar</span></>} description="Celebrations of music, art, drama and literature that bring the SRMU community together." className={styles.darkSection}>
        <VideoGallery items={cultural} label="Cultural event videos" autoAdvance />
        <div className="mt-8"><a href="#calendar" className={eventButtonClassName} onClick={() => chooseCategory("Cultural")}>Explore Cultural Events <ArrowRight size={16} /></a></div>
      </Section>

      <Section id="sports-events" title={<>Sports &amp; Fitness - <span className="text-[#FFB703]">Utsaah &amp; Ullaas</span></>} description="Sports at SRMU encourage teamwork, discipline, leadership and a healthy campus lifestyle." alternate>
        <div className={styles.sportsMeets} role="group" aria-label="Sports meets">
          {["Utsaah", "Ullas"].map(meet => <button type="button" key={meet} aria-pressed={sportsMeet === meet} onClick={() => setSportsMeet(meet)}>
            <span className={styles.meetIcon}><Trophy aria-hidden="true" /></span>
            <span><strong>{meet}</strong><small>Includes all {sports.length} games</small></span>
          </button>)}
        </div>
        <div className={styles.sportsLayout}>
          <div className={styles.sportsList} role="group" aria-label="Choose a sport">
            {sports.map(({ title }, index) => <button key={title} type="button" aria-pressed={activeSport === index} aria-controls="sports-preview" onClick={() => setActiveSport(index)}>{title}<ChevronRight size={16} aria-hidden="true" /></button>)}
          </div>
          <figure id="sports-preview" className={styles.sportsPreview} aria-live="polite">
            <img src={sports[activeSport].image} alt={sports[activeSport].alt} loading="lazy" decoding="async" style={{ objectPosition: sports[activeSport].imagePosition }} />
            <span className={styles.sportsTag}>{sportsMeet}</span>
            <figcaption><h3>{sports[activeSport].title}</h3></figcaption>
          </figure>
        </div>
        <div className="mt-8"><a href="#calendar" className={eventButtonClassName} onClick={() => chooseCategory("Sports")}>View Sports Events <ArrowRight size={16} aria-hidden="true" /></a></div>
      </Section>

      <Section id="special-events" title={<span className="text-[#FFB703]">Celebrity &amp; Special Events</span>} description="Engage with distinguished personalities, industry leaders, experts and inspiring speakers through special sessions at SRMU." className={`${styles.darkSection} ${styles.specialSection}`}>
        <VideoGallery items={special} label="Special event videos" celebrity />
        <div className="mt-8"><a href="#calendar" className={eventButtonClassName} onClick={() => chooseCategory("Special")}>Explore Special Events <ArrowRight size={16} /></a></div>
      </Section>

      {/* Holidays & Closures hidden for now.
      <Section id="holiday-events" title="Holidays & Closures" description="University holidays, mandatory celebration days and restricted holidays (aligned with government holidays)." alternate>
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#21A5DB] bg-white p-5 text-center text-[#14284E] min-[561px]:p-6">
          <Palmtree size={48} className="mx-auto mb-4 text-[#0F4A85]" aria-hidden="true" />
          <h3 className="mb-2 text-xl">2026 Holiday Calendar Available</h3>
          <p className="mb-6">The complete list of regular and restricted holidays for 2026 has been updated. You can view them in the university calendar below.</p>
          <a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" onClick={() => chooseCategory("Holiday")}>View Holidays on Calendar</a>
        </div>
      </Section>

      */}

      <Section id="calendar" title="SRMU Events Calendar" description="Stay updated with upcoming academic, technical, cultural, sports and special events at SRMU.">
        <div className={styles.calendarFilters} role="group" aria-label="Filter calendar events">
          {[{ name: "All", Icon: CalendarDays }, ...categories].map(({ name, Icon }) => <button type="button" key={name} aria-pressed={filter === name} onClick={() => setFilter(name)}><Icon size={17} aria-hidden="true" />{name === "All" ? "All Events" : name}</button>)}
        </div>
        <div className={styles.calendarLayout}>
          <div className={styles.calendarWall}>
            <div className={styles.calendarRings} aria-hidden="true">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</div>
            <div className={styles.calendarHeader}>
              <button type="button" aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}><ChevronLeft /></button>
              <h3 aria-live="polite">{months[month.getMonth()]} {month.getFullYear()}</h3>
              <button type="button" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}><ChevronRight /></button>
            </div>
            <div className={styles.calendarGrid}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <span className={styles.weekday} key={day}>{day}</span>)}
              {Array.from({ length: month.getDay() }, (_, index) => <span key={`empty-${index}`} />)}
              {Array.from({ length: new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate() }, (_, index) => {
                const day = index + 1;
                const event = monthEvents.find(item => item.day === day);
                const Icon = categories.find(category => category.name === event?.cat)?.Icon ?? CalendarDays;
                return event ? <button type="button" className={styles.calendarDay} data-category={event.cat} key={day} onClick={() => openEvent(event)} aria-label={`${day} ${months[month.getMonth()]}: ${event.title}`}>{day}<Icon size={15} aria-hidden="true" /></button> : <span className={styles.calendarDay} key={day}>{day}</span>;
              })}
            </div>
            <div className={styles.calendarLegend}>{categories.map(({ name, Icon }) => <span key={name}><i data-category={name}><Icon size={13} aria-hidden="true" /></i>{name}</span>)}</div>
          </div>
          <div className={styles.monthEvents}>
            <h3>Selected Month&apos;s Events</h3>
            <div id="selected-month-events" className={styles.eventTickets} aria-live="polite">
              {monthEvents.length ? (showAllMonthEvents ? monthEvents : monthEvents.slice(0, 3)).map(event => {
                const category = categories.find(item => item.name === event.cat);
                const Icon = category?.Icon ?? CalendarDays;
                const image = event.cat === "Academic" ? conferenceImage : category?.reelVideo?.poster;
                return <button type="button" className={styles.eventTicket} key={`${event.day}-${event.title}`} onClick={() => openEvent(event)}>
                  <span className={styles.ticketImage}>{image && <img src={image} alt="" loading="lazy" decoding="async" />}<i data-category={event.cat}><Icon size={20} aria-hidden="true" /></i></span>
                  <span className={styles.ticketBody}><span className={styles.ticketDate}><b>{event.day}</b><span>{months[month.getMonth()].slice(0, 3)}</span></span><span className={styles.ticketCopy}><em>{event.cat}</em><strong>{event.title}</strong><small><MapPin size={14} aria-hidden="true" />{event.venue}</small></span></span>
                </button>;
              }) : <p className={styles.calendarEmpty}><CalendarDays size={28} aria-hidden="true" />No events for this filter this month.</p>}
            </div>
            {monthEvents.length > 3 && <button type="button" className={`${eventButtonClassName} mt-6`} aria-expanded={showAllMonthEvents} aria-controls="selected-month-events" onClick={() => setShowAllMonthEvents(previous => !previous)}>
              {showAllMonthEvents ? "Show fewer events" : `View all ${monthEvents.length} events`}<ArrowRight size={16} aria-hidden="true" />
            </button>}
          </div>
        </div>
      </Section>
      {/*
      <Section id="upcoming-events" title="Upcoming Events" description="A look ahead at learning, collaboration and campus life." alternate>
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-4 [&>*]:min-w-0">{upcoming.map(event => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={event.title}><Placeholder label={event.cat + " event"} /><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><h3>{event.title}</h3><p>{event.venue} · {event.day} Oct 2026</p><button className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => openEvent(event, new Date(2026, 9, 1))}>View Details <ArrowRight size={16} /></button></article>)}</div>
        <div className="mt-8 flex justify-center"><a className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" href="#calendar" onClick={() => chooseCategory("All")}>View All Upcoming Events</a></div>
      </Section>
      */}

      {/* Event Archives hidden for now.
      <Section id="archive" title="Event Archives" description="Explore events, activities and memorable moments from previous academic years at SRMU.">
        <div className="mb-[22px] flex flex-wrap gap-2" aria-label="Filter archive by year">{["All", "2026", "2025", "2024", "2023"].map(value => <button key={value} className="rounded-full border border-[#0F4A85] bg-transparent px-[17px] py-[9px] text-[.82rem] text-[#0F4A85] aria-pressed:border-[#FFB703] aria-pressed:bg-[#FFB703] aria-pressed:font-semibold aria-pressed:text-[#14284E]" onClick={() => setYear(value)} aria-pressed={year === value}>{value}</button>)}</div>
        <div className="flex flex-col flex-wrap gap-3.5 min-[561px]:flex-row [&>label]:flex [&>label]:flex-1 [&>label]:flex-col [&>label]:gap-1.5 [&>label]:text-[.8rem] [&>label]:font-semibold min-[561px]:[&>label]:max-w-[400px] [&_input]:min-w-0 [&_input]:w-full [&_input]:rounded-[10px] [&_input]:border [&_input]:border-[#0F4A85] [&_input]:bg-white [&_input]:px-4 [&_input]:py-3 [&_select]:min-w-0 [&_select]:w-full [&_select]:rounded-[10px] [&_select]:border [&_select]:border-[#0F4A85] [&_select]:bg-white [&_select]:px-4 [&_select]:py-3"><label>Search events<input type="search" placeholder="Search events..." value={search} onChange={event => setSearch(event.target.value)} /></label><label>Category<select value={archiveCategory} onChange={event => setArchiveCategory(event.target.value)}><option value="All">All Categories</option>{categories.map(category => <option key={category.name}>{category.name}</option>)}</select></label></div>
        <p className="my-[18px] text-[.8rem]" role="status">{filteredArchive.length} {filteredArchive.length === 1 ? "event" : "events"} found</p>
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[861px]:grid-cols-3 [&>*]:min-w-0">{filteredArchive.map(event => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={event.title}><Placeholder label={event.title} /><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><h3>{event.title}</h3><p>{event.date}</p><p>{event.desc}</p><button className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => setDetail({ title: event.title, category: event.cat, date: event.date, description: event.desc })}>View Event <ArrowRight size={16} /></button></article>)}</div>
        {!filteredArchive.length && <p className="py-6 text-[.9rem]">No matching events found. Try another year, category or search term.</p>}
      </Section>
      */}

      {/* <section className="py-[52px] min-[861px]:py-[76px]"><div className={`${Global.container} grid grid-cols-1 items-center gap-7 min-[861px]:grid-cols-[1.1fr_1fr] min-[1101px]:gap-12 [&>*]:min-w-0 [&>div>button]:mt-6 [&>div>span]:mb-4`}><Placeholder label="Event highlight photograph"><Cpu aria-hidden="true" /></Placeholder><div><p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-[#0F4A85] uppercase [&>span]:size-2 [&>span]:rounded-full [&>span]:bg-[#D62C2B]">Event Highlight</p><h2>From Code to Creativity: The Rise of Generative AI</h2><ul className="my-[22px] list-none p-0 text-[.9rem] [&>li]:mb-2"><li><b>Guest Speaker:</b> Leading AI researcher</li><li><b>Date:</b> September 2026</li><li><b>Department:</b> Computer Science & Engineering</li><li><b>Highlight:</b> Live demonstrations and student Q&amp;A</li></ul><button className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5" onClick={() => setDetail({ title: "From Code to Creativity: The Rise of Generative AI", category: "Academic", date: "September 2026", description: "A sample event highlight featuring live demonstrations and student Q&A with a leading AI researcher from the Computer Science & Engineering programme." })}>Read Event Story <ArrowRight size={18} /></button></div></div></section> */}

      {/* <section className="border-y border-[#21A5DB] bg-[#E0F1FF] pt-[42px] pb-[26px] text-center [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-6 min-[861px]:[&>div]:grid-cols-4 [&_b]:block [&_b]:text-[clamp(1.9rem,3vw,2.8rem)] [&_b]:leading-[1.3] [&_b]:text-[#0F4A85] [&_span]:text-[.85rem] [&>p]:mt-6 [&>p]:text-[.72rem]" aria-label="Sample event statistics"><div className={Global.container}>{[["500+", "Events Organised"], ["100+", "Workshops & Conferences"], ["50+", "Industry & Expert Sessions"], ["10000+", "Student Participants"]].map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        <p>Illustrative figures for this preview</p>
      </section> */}

      <section className={styles.insiders} aria-labelledby="insiders-heading">
        <div className={styles.insidersLayout}>
          <header className={styles.insidersContent}>
            <h2 id="insiders-heading" className={styles.insidersHeading}>
              Stay Updated with{" "}
              <span>SRMU Events</span>
            </h2>
            <p className={styles.insidersDescription}>
              Get updates about upcoming events, workshops, conferences, competitions and campus activities.
            </p>
          </header>

          <div className={styles.insidersPosterFrame}>
            <img
              src={insidersBannerImage}
              alt="SRMU Insiders — Who's got the tea? We do."
              className={styles.insidersPoster}
              width={1440}
              height={1800}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={styles.insidersMessage}>
            <p>Be a part of <span>Something<br />Bigger!</span></p>
            <svg viewBox="0 0 110 70" aria-hidden="true" focusable="false">
              <path d="M8 12C5 44 43 38 36 15C29 -7 7 41 61 49C74 51 89 48 99 43M86 39L101 43L92 55" />
            </svg>
          </div>

          <div className={styles.insidersQr}>
            <div className={styles.insidersQrCard}>
              <img
                src={scannerImage}
                alt="Scan to know more about SRMU Insider"
                width={548}
                height={494}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p>Scan to know more</p>
            <a
              href="/insider"
              target="_blank"
              rel="noopener noreferrer"
              className={`${eventButtonClassName} ${styles.insidersButton}`}
            >
              Apply Now <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faqs" className={`py-10 md:py-14 ${styles.faqSection}`}>
        <div className={Global.container}>
          {/* Header */}
          <div className="w-full mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] break-words">
                Frequently Asked <span className="text-[#FFB703]">Questions</span> About SRMU Events
              </h2>
              {/* <p className="text-[14px] text-[#0F4A85] mt-2 break-words whitespace-normal">
                          Everything you need to know about campus life and activities.
                      </p> */}
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col mt-6">
            {(showAllFaq ? faqs : faqs.slice(0, 3)).map(([q, a], i) => (
              <div
                key={i}
                className={styles.faqItem}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-[18px] cursor-pointer"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-[14.5px] sm:text-[15px] text-[#14284E] pr-2 leading-snug">
                    <span className="text-[#D62C2B] mr-2">{String(i + 1).padStart(2, "0")}.</span>
                    {q}
                  </span>
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[18px] shrink-0 transition-all duration-300 font-sans ${openFaq === i
                      ? "bg-[#14284E] text-white rotate-45"
                      : "bg-[#E0F1FF] text-[#14284E]"
                      }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 px-5 sm:px-6 ${openFaq === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                >
                  <div className="w-full h-px bg-[#E6E6E7] mb-4" />
                  <p className="text-[14px] sm:text-[14.5px] text-[#0F4A85] leading-[1.7] text-justify">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {faqs.length > 3 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllFaq(!showAllFaq)}
                className={eventButtonClassName}
              >
                {showAllFaq ? "View Less" : "Read More"} <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final call to action hidden for now.
      <section className="py-[52px] min-[861px]:py-[76px]"><div className={Global.container}><div className="rounded-3xl border-t-[5px] border-[#FFB703] bg-[#E0F1FF] px-5 py-10 text-center min-[561px]:px-[30px] min-[561px]:py-16"><p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-[#0F4A85] uppercase [&>span]:size-2 [&>span]:rounded-full [&>span]:bg-[#D62C2B]">Learn. Connect. Celebrate.</p><h2>Be Part of the SRMU Experience</h2><p>Explore upcoming events, discover new opportunities and be part of the vibrant academic and student life at Shri Ramswaroop Memorial University.</p><div className="flex flex-wrap items-center gap-3"><a href="#upcoming-events" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5">Explore Upcoming Events <ArrowRight size={18} /></a><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5">View Event Calendar</a></div></div></div></section>
      */}

      {detail && <dialog ref={dialog} className="fixed inset-0 m-auto max-h-[85dvh] w-[min(560px,calc(100%-32px))] max-w-none overflow-y-auto rounded-[20px] border border-[#21A5DB] bg-[#E0F1FF] p-0 text-[#14284E] backdrop:bg-[#14284E]/45 [&_h2]:mt-3.5 [&_h2]:mb-5 [&_h2]:pr-5 [&_h2]:text-[1.65rem]! [&_p]:my-3" aria-labelledby="event-new-detail-title" onCancel={() => setDetail(null)} onClose={() => setDetail(null)} onClick={event => { if (event.target === event.currentTarget) setDetail(null); }}><div className="relative px-7 pt-11 pb-7"><button className="absolute top-2.5 right-2.5 grid size-10 place-items-center rounded-full border-0 bg-white text-[#0F4A85]" aria-label="Close event preview" onClick={() => setDetail(null)} autoFocus><X /></button>{detail.category && <span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{detail.category}</span>}<h2 id="event-new-detail-title">{detail.title}</h2>{detail.gallery && <Placeholder label={detail.title} />}{detail.date && <p>{detail.date}</p>}{detail.venue && <p>{detail.venue}</p>}<div className="text-[.95rem] leading-relaxed [&_p]:mb-3 [&_strong]:font-bold [&_em]:italic" dangerouslySetInnerHTML={{ __html: detail.description }} />
        {/* <p className="mb-[18px] text-[.8rem] text-[#0F4A85]">Sample content for the new events page preview.</p> */}
      </div></dialog>}
    </main>
  );
}
