import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Cpu, GraduationCap, Image, MapPin, Mic, Music, Palmtree, Pause, Play, Sparkles, Trophy, X } from "lucide-react";
import technicalVideo from "../../assets/video/events-new/Technical event.mp4";
import culturalVideo from "../../assets/video/events-new/Cultural Event.mp4";
import sportsVideo from "../../assets/video/events-new/Sports.mp4";
import celebrityVideo from "../../assets/video/events-new/Celebrity.mp4";
import facultyTrainingImage from "../../assets/images/event-new/academic-event/Faculty  training & Development.webp";
import conferenceImage from "../../assets/images/event-new/academic-event/Conference.webp";
import workshopImage from "../../assets/images/event-new/academic-event/Academic Workshop Group Portrait.webp";
import seminarImage from "../../assets/images/event-new/academic-event/Seminar.webp";
import alumniTalkImage from "../../assets/images/event-new/academic-event/Alumni Talk.webp";
import visitsImage from "../../assets/images/event-new/academic-event/Visits.webp";
import hackathonImage from "../../assets/images/event-new/technical-event/Hackathon.webp";
import technicalWorkshopImage from "../../assets/images/event-new/technical-event/sxnhgivgepzqz9bvrjoq.webp";
import codingImage from "../../assets/images/event-new/technical-event/Coading.webp";
import projectImage from "../../assets/images/event-new/technical-event/Project.webp";
import industrialVisitImage from "../../assets/images/event-new/technical-event/Industrial visit.webp";
import innovationImage from "../../assets/images/event-new/technical-event/Innovation.webp";
import anubhutiVideo from "../../assets/video/events-new/cultural-event/Anubhuti.mp4";
import dandiyaNightVideo from "../../assets/video/events-new/cultural-event/Dandiya Night.mp4";
import funDayVideo from "../../assets/video/events-new/cultural-event/Fun day.mp4";
import harmonyVideo from "../../assets/video/events-new/cultural-event/Harmony.mp4";
import independenceDayVideo from "../../assets/video/events-new/cultural-event/Independence Day.mp4";
import rangBarsheVideo from "../../assets/video/events-new/cultural-event/Rang Barshe.mp4";
import basketballImage from "../../assets/images/event-new/sports-event/Basket ball.webp";
import kabaddiImage from "../../assets/images/event-new/sports-event/Kabaddi.webp";
import khoKhoImage from "../../assets/images/event-new/sports-event/Kho kho.webp";
import tableTennisImage from "../../assets/images/event-new/sports-event/Table tennis.webp";
import volleyballImage from "../../assets/images/event-new/sports-event/Volley ball.webp";
import athleteImage from "../../assets/images/event-new/sports-event/athlete..webp";
import { archiveEvents, calendarEvents, type CalendarEvent } from "./eventNewData";
import Global from "../../utils/styles/Global.module.css";
import styles from "./NewEventComponent.module.css";

const categories = [
  { name: "Academic", title: "Academic Events", id: "academic-events", Icon: GraduationCap, description: "Conferences, faculty development programmes, workshops, guest lectures and alumni interactions.", reelVideo: undefined as string | undefined },
  { name: "Technical", title: "Technical Events", id: "technical-events", Icon: Cpu, description: "Hackathons, coding competitions, technical workshops, project exhibitions and innovation events.", reelVideo: technicalVideo as string },
  { name: "Cultural", title: "Cultural Events", id: "cultural-events", Icon: Music, description: "Cultural festivals, music, dance, drama, literary activities and celebrations.", reelVideo: culturalVideo as string },
  { name: "Sports", title: "Sports", id: "sports-events", Icon: Trophy, description: "Annual sports meets, inter-college competitions, athletics and indoor and outdoor activities.", reelVideo: sportsVideo as string },
  { name: "Special", title: "Celebrity & Special", id: "special-events", Icon: Mic, description: "Celebrity interactions, industry leader talks, motivational sessions and distinguished speakers.", reelVideo: celebrityVideo as string },
  { name: "Holiday", title: "Holidays", id: "holiday-events", Icon: Palmtree, description: "University holidays, mandatory celebration days and restricted holidays.", reelVideo: undefined as string | undefined },
];
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
];
const special = ["Celebrity Talks", "Industry Leader Sessions", "Motivational Talks", "Ideas & Inspiration Talks"];
const faqs = [
  ["What types of events are organised at SRMU?", "SRMU organises academic, technical, cultural, sports and special events across departments throughout the year."],
  ["How can students participate in SRMU events?", "Contact your department coordinator for participation and registration details."],
  ["Does SRMU organise academic conferences and workshops?", "Yes, SRMU hosts conferences, seminars and faculty development workshops across disciplines."],
  ["Does SRMU organise technical events and hackathons?", "Technical events include hackathons, coding contests and project exhibitions."],
  ["Does SRMU organise cultural and sports events?", "Cultural festivals and inter-college sports competitions are part of campus life at SRMU."],
  ["How can I find upcoming events at SRMU?", "Explore the Events Calendar and Upcoming Events sections. This preview currently shows sample events; confirm schedules with the department coordinator."],
  ["Where can I find previous SRMU events?", "Browse the Event Archives by year and category, or search for an event by name."],
  ["Does SRMU organise guest lectures and alumni talks?", "Guest lectures and alumni interaction sessions form part of SRMU's academic events programme."],
];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Placeholder({ label, children }: { label: string; children?: ReactNode }) {
  return <div className="relative flex aspect-[16/11] min-h-[130px] flex-col items-center justify-center gap-[18px] overflow-hidden rounded-[14px] border border-[#21A5DB] bg-[#E0F1FF] p-5 text-center text-[#0F4A85] before:absolute before:aspect-square before:w-[65%] before:translate-x-[58%] before:-translate-y-[36%] before:rounded-full before:border before:border-[#21A5DB] before:opacity-35 before:content-[''] [&>svg]:size-[clamp(35px,6vw,76px)] [&>svg]:stroke-[1.2] [&>span]:relative [&>span]:text-[.8rem] [&>span]:font-medium" role="img" aria-label={`${label} — image placeholder`}>
    {children || <Image aria-hidden="true" />}<span>{label}</span>
  </div>;
}

function Section({ id, title, description, alternate, className = "", children }: { id?: string; title: string; description?: string; alternate?: boolean; className?: string; children: ReactNode }) {
  return <section id={id} className={`py-[52px] min-[861px]:py-[76px] ${alternate ? "bg-[#E0F1FF]" : ""} ${className}`}>
    <div className={Global.container}>
      <div className="mb-[34px] max-w-[740px] [&>p]:mt-3.5"><h2>{title}</h2>{description && <p>{description}</p>}</div>
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

function EventCardGrid({ events, category, onChooseCategory }: { events: EventCardData[]; category: string; onChooseCategory: (category: string) => void }) {
  return (
    <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-3 [&>*]:min-w-0">
      {events.map(({ title, label, description, image, imagePosition, alt }) => (
        <article key={title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCE6EF] border-b-4 border-b-[#ED332D] bg-white shadow-[0_8px_24px_rgba(20,40,78,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,40,78,0.12)] motion-reduce:hover:translate-y-0">
          <div className="aspect-video overflow-hidden bg-[#E0F1FF]">
            <img src={image} alt={alt} loading="lazy" decoding="async" width={640} height={360} style={{ objectPosition: imagePosition }} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
          </div>
          <div className="flex flex-1 flex-col p-5 min-[561px]:p-6">
            <p className="mb-2 text-[.68rem] font-bold tracking-[.08em] text-[#C92A25] uppercase">{label}</p>
            <h3>{title}</h3>
            <p className="mt-2 mb-5 text-[.86rem] leading-relaxed text-[#536174]">{description}</p>
            <a className="mt-auto flex min-h-11 items-center gap-2 border-t border-[#EDF1F5] pt-4 text-[.72rem] font-bold tracking-[.08em] text-[#C92A25] uppercase hover:underline hover:underline-offset-4" href="#calendar" aria-label={`View ${title} events`} onClick={() => onChooseCategory(category)}>
              View Events <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

type Detail = { title: string; category?: string; date?: string; venue?: string; description: string; gallery?: boolean };

export default function NewEventComponent() {
  const [month, setMonth] = useState(new Date(2026, 9, 1));
  const [filter, setFilter] = useState("All");
  const [year, setYear] = useState("All");
  const [archiveCategory, setArchiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [showAllMonthEvents, setShowAllMonthEvents] = useState(false);
  const [culturalScrollingPaused, setCulturalScrollingPaused] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

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
  const filteredArchive = archiveEvents.filter(event => (year === "All" || event.year === year) && (archiveCategory === "All" || event.cat === archiveCategory) && event.title.toLowerCase().includes(search.trim().toLowerCase()));
  const upcoming = calendarEvents["2026-10"];
  const openEvent = (event: CalendarEvent, date = month) => setDetail({ title: event.title, category: event.cat, date: `${event.day} ${months[date.getMonth()]} ${date.getFullYear()} · ${event.time}`, venue: event.venue, description: event.desc });
  const chooseCategory = (category: string) => {
    setFilter(category);
    setMonth(new Date(2026, 9, 1));
  };

  return (
    <main className="bg-white text-[#14284E] leading-[1.65] scheme-light [&_h1]:font-bold [&_h1]:leading-[1.22] [&_h1]:text-[clamp(2rem,3.5vw,3.4rem)] [&_h1]:tracking-[-.035em] [&_h1_em]:text-[#0F4A85] [&_h1_em]:not-italic [&_h2]:font-bold [&_h2]:leading-[1.22] [&_h2]:text-[clamp(1.65rem,2.6vw,2.4rem)] [&_h2]:tracking-[-.025em] [&_h3]:text-[1.05rem] [&_h3]:font-bold [&_h3]:leading-[1.22] [&_button]:cursor-pointer [&_:focus-visible]:outline-3 [&_:focus-visible]:outline-[#0F4A85] [&_:focus-visible]:outline-offset-4 [&_section[id]]:scroll-mt-40 [&_input]:placeholder:text-[#0F4A85] motion-reduce:[&_*]:transition-none" id="event-new-top">
      <section className="border-b-4 border-[#21A5DB] bg-[#E0F1FF] pt-[124px] pb-11 min-[561px]:pt-[150px] min-[561px]:pb-[72px]">
        <div className={Global.container}>
          <div className="grid grid-cols-1 items-center gap-7 min-[861px]:grid-cols-[1.1fr_1fr] min-[1101px]:gap-12 [&>*]:min-w-0 [&>div>button]:mt-6 [&>div>span]:mb-4">
            <div>
              <p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-[#0F4A85] uppercase [&>span]:size-2 [&>span]:rounded-full [&>span]:bg-[#D62C2B]"><span /> Events & Activities</p>
              <h1>Events at Shri Ramswaroop Memorial University <em>(SRMU)</em></h1>
              <p className="mt-6 mb-7 max-w-[570px]">Discover academic, technical, cultural, sports and special events that bring together students, faculty, industry experts, alumni and distinguished guests at SRMU.</p>
              <div className="flex flex-wrap items-center gap-3"><a href="#categories" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5">Explore Events <ArrowRight size={18} /></a><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5"><CalendarDays size={18} /> View Event Calendar</a></div>
            </div>
            <div className="relative mx-auto w-full max-w-[600px] pb-5 [&>[role=img]]:aspect-[4/3] [&>[role=img]]:rounded-[26px] [&>[role=img]]:bg-white"><Placeholder label="Campus event photograph"><GraduationCap aria-hidden="true" /></Placeholder><div className="absolute right-3 bottom-0 left-3 flex items-center justify-center gap-3 rounded-[14px] bg-[#FFB703] p-3.5 text-[.8rem] font-semibold min-[561px]:right-[22px] min-[561px]:left-[22px] min-[561px]:p-[18px] min-[561px]:text-[.92rem]"><Sparkles size={20} /><span>A campus full of possibilities</span></div></div>
          </div>
        </div>
      </section>

      <section className="py-[52px] min-[861px]:py-[76px]">
        <div className={`${Global.container} grid grid-cols-1 items-center gap-7 min-[861px]:grid-cols-[1.1fr_1fr] min-[1101px]:gap-12 [&>*]:min-w-0 [&>div>button]:mt-6 [&>div>span]:mb-4`}>
          <Placeholder label="Featured event photograph"><GraduationCap aria-hidden="true" /></Placeholder>
          <div><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">Academic Event</span><p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-[#0F4A85] uppercase [&>span]:size-2 [&>span]:rounded-full [&>span]:bg-[#D62C2B]">Upcoming Event · Sample</p><h2>{upcoming[0].title}</h2><div className="my-5 flex flex-wrap gap-x-[22px] gap-y-3 text-[.86rem] text-[#0F4A85] [&>span]:flex [&>span]:items-center [&>span]:gap-2"><span><CalendarDays size={17} />15 Oct 2026</span><span><MapPin size={17} />SRMU Campus</span></div><p>A university-wide gathering of researchers, students and industry experts exploring advances in AI, sustainable engineering and digital transformation.</p><button className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5" onClick={() => openEvent(upcoming[0], new Date(2026, 9, 1))}>View Event Details <ArrowRight size={18} /></button></div>
        </div>
      </section>

      <Section id="categories" title="Explore Events at SRMU" description="From academic conferences and technical competitions to cultural celebrations and sporting events, explore the diverse events conducted across the university." alternate>
        <style>{`
          @keyframes reel-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .reel-track {
            animation: reel-marquee 18s linear infinite;
          }
          .reel-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        {/* overflow wrapper — clips the scrolling track */}
        <div className="-mx-4 overflow-hidden min-[561px]:-mx-6">
          {/* track — doubled cards for seamless loop */}
          <div className="reel-track flex gap-3 w-max px-4 min-[561px]:px-6">
            {[...categories.filter(({ reelVideo }) => !!reelVideo), ...categories.filter(({ reelVideo }) => !!reelVideo)].map(({ name, title, id, Icon, description, reelVideo }, index) => (
              <article
                key={`${name}-${index}`}
                className="group relative flex-shrink-0 w-[200px] min-[561px]:w-[220px] min-[861px]:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
              >
                <video src={reelVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 grid size-9 place-items-center rounded-xl bg-white/20 backdrop-blur-sm text-white">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="mb-1 text-[.95rem] font-bold leading-[1.2] text-white">{title}</h3>
                  <p className="mb-3 text-[.72rem] leading-[1.45] text-white/80 line-clamp-3">{description}</p>
                  <a href={`#${id}`} className="inline-flex items-center gap-1.5 text-[.75rem] font-semibold text-[#FFB703] hover:underline hover:underline-offset-2 [&>svg]:shrink-0" aria-label={`Explore ${name} Events`}>
                    Explore <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="academic-events" title="Academic Events" description="Opportunities for students and faculty to learn from experts, exchange ideas, develop professional skills and engage with emerging areas of knowledge." className="bg-[#F0F7FC]">
        <EventCardGrid events={academic} category="Academic" onChooseCategory={chooseCategory} />
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" onClick={() => chooseCategory("Academic")}>View All Academic Events</a></div>
      </Section>

      <Section id="technical-events" title="Technical Events" description="Activities designed to encourage innovation, problem-solving, practical learning and industry exposure." className="bg-[#F0F7FC]">
        <EventCardGrid events={technical} category="Technical" onChooseCategory={chooseCategory} />
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" onClick={() => chooseCategory("Technical")}>View All Technical Events</a></div>
      </Section>

      <Section id="cultural-events" title="Cultural Events" description="Celebrations of music, art, drama and literature that bring the SRMU community together.">
        <div className="mb-4 flex justify-end">
          <button type="button" className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0F4A85] px-4 py-2 text-[.8rem] font-semibold text-[#0F4A85] ${styles.scrollControl}`} aria-controls="cultural-reels" onClick={() => setCulturalScrollingPaused(paused => !paused)}>
            {culturalScrollingPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            {culturalScrollingPaused ? "Resume scrolling" : "Pause scrolling"}
          </button>
        </div>
        <div id="cultural-reels" className={styles.culturalReels} role="region" aria-label="Cultural event videos" tabIndex={0}>
          <div className={styles.culturalTrack} style={{ animationPlayState: culturalScrollingPaused ? "paused" : undefined }}>
            {[0, 1].map(copy => (
              <div key={copy} className={styles.culturalGroup} aria-hidden={copy === 1 ? true : undefined}>
                {cultural.map(({ title, video }) => (
                  <article key={title} className="group relative aspect-[9/16] w-[200px] shrink-0 overflow-hidden rounded-2xl bg-[#14284E] min-[561px]:w-[220px] min-[861px]:w-[240px]">
                    <video src={video} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 grid size-9 place-items-center rounded-xl bg-white/20 text-white backdrop-blur-sm"><Music size={18} aria-hidden="true" /></div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="mb-2 text-[.65rem] font-semibold tracking-[.12em] text-[#FFB703] uppercase">Cultural Events</p>
                      <h3 className="text-white">{title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => chooseCategory("Cultural")}>Explore Cultural Events <ArrowRight size={16} /></a></div>
      </Section>

      <Section id="sports-events" title="Sports & Fitness" description="Sports at SRMU encourage teamwork, discipline, leadership and a healthy campus lifestyle." className="bg-[#F0F7FC]">
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-3 [&>*]:min-w-0">
          {sports.map(({ title, image, imagePosition, alt }) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-[#DCE6EF] border-b-4 border-b-[#ED332D] bg-white shadow-[0_8px_24px_rgba(20,40,78,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,40,78,0.12)] motion-reduce:hover:translate-y-0">
              <div className="aspect-[3/2] overflow-hidden bg-[#E0F1FF]">
                <img src={image} alt={alt} loading="lazy" decoding="async" width={600} height={400} style={{ objectPosition: imagePosition }} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
              </div>
              <div className="flex items-center gap-3 p-5 min-[561px]:p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F0F7FC] text-[#0F4A85]"><Trophy size={20} aria-hidden="true" /></span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-colors hover:bg-[#0F4A85] hover:text-white" onClick={() => chooseCategory("Sports")}>View Sports Events <ArrowRight size={16} aria-hidden="true" /></a></div>
      </Section>

      <Section id="special-events" title="Celebrity & Special Events" description="Engage with distinguished personalities, industry leaders, experts and inspiring speakers through special sessions at SRMU.">
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-4 [&>*]:min-w-0">{special.map(title => <article className="[&>[role=img]]:aspect-[4/3] min-[561px]:[&>[role=img]]:aspect-[9/14] [&:last-child>[role=img]]:border-2 [&:last-child>[role=img]]:border-[#FFB703] [&>[role=img]>span]:absolute [&>[role=img]>span]:inset-x-0 [&>[role=img]>span]:bottom-0 [&>[role=img]>span]:bg-white [&>[role=img]>span]:px-3 [&>[role=img]>span]:py-[18px] [&>[role=img]>span]:font-semibold" key={title}><Placeholder label={title}><Mic aria-hidden="true" /></Placeholder></article>)}</div>
      </Section>

      <Section id="holiday-events" title="Holidays & Closures" description="University holidays, mandatory celebration days and restricted holidays (aligned with government holidays)." alternate>
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#21A5DB] bg-white p-5 text-center text-[#14284E] min-[561px]:p-6">
            <Palmtree size={48} className="mx-auto mb-4 text-[#0F4A85]" aria-hidden="true" />
            <h3 className="mb-2 text-xl">2026 Holiday Calendar Available</h3>
            <p className="mb-6">The complete list of regular and restricted holidays for 2026 has been updated. You can view them in the university calendar below.</p>
            <a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" onClick={() => chooseCategory("Holiday")}>View Holidays on Calendar</a>
        </div>
      </Section>

      <Section id="calendar" title="SRMU Events Calendar" description="Stay updated with upcoming academic, technical, cultural, sports and special events at SRMU.">
        <p className="mb-[18px] text-[.8rem] text-[#0F4A85]">Design preview: event dates, archive entries and statistics are sample content.</p>
        <div className="mb-[22px] flex flex-wrap gap-2" aria-label="Filter calendar events">{["All", ...categories.map(category => category.name)].map(category => <button key={category} className="rounded-full border border-[#0F4A85] bg-transparent px-[17px] py-[9px] text-[.82rem] text-[#0F4A85] aria-pressed:border-[#FFB703] aria-pressed:bg-[#FFB703] aria-pressed:font-semibold aria-pressed:text-[#14284E]" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category === "All" ? "All Events" : category}</button>)}</div>
        <div className="grid grid-cols-1 items-start gap-7 min-[861px]:grid-cols-[1.1fr_1fr] min-[1101px]:gap-12 [&>*]:min-w-0 [&>div>button]:mt-6 [&>div>span]:mb-4">
          <div className="rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6">
            <div className="mb-[22px] flex items-center justify-between gap-2 [&>button]:grid [&>button]:size-10 [&>button]:place-items-center [&>button]:rounded-[10px] [&>button]:border [&>button]:border-[#21A5DB] [&>button]:bg-[#E0F1FF] [&>button]:text-[#0F4A85] max-[560px]:[&>h3]:text-[.95rem]"><button aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}><ChevronLeft /></button><h3 aria-live="polite">{months[month.getMonth()]} {month.getFullYear()}</h3><button aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}><ChevronRight /></button></div>
            <div className="grid grid-cols-7 gap-[3px] text-center text-[.86rem] min-[561px]:gap-[7px]">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <span className="pb-2 text-[.72rem] font-semibold" key={day}>{day}</span>)}
              {Array.from({ length: month.getDay() }, (_, index) => <span key={`empty-${index}`} />)}
              {Array.from({ length: new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate() }, (_, index) => {
                const day = index + 1;
                const event = monthEvents.find(item => item.day === day);
                return event ? <button className="relative flex min-h-10 items-center justify-center rounded-lg border border-[#21A5DB] bg-[#E0F1FF] font-bold text-[#0F4A85] hover:bg-[#FFB703] min-[561px]:min-h-11 [&>span]:absolute [&>span]:bottom-[5px] [&>span]:size-1 [&>span]:rounded-full [&>span]:bg-[#D62C2B]" key={day} onClick={() => openEvent(event)} aria-label={`${day} ${months[month.getMonth()]}: ${event.title}`}>{day}<span /></button> : <span className="flex min-h-10 items-center justify-center rounded-lg min-[561px]:min-h-11" key={day}>{day}</span>;
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6">
            <h3>Selected Month&apos;s Events</h3>
            <div id="selected-month-events" aria-live="polite">
              {monthEvents.length ? (showAllMonthEvents ? monthEvents : monthEvents.slice(0, 3)).map(event => <button className="flex w-full items-center gap-3.5 border-0 border-b border-[#21A5DB] bg-transparent py-4 text-left text-[#14284E] last:border-b-0 [&>span:nth-child(2)]:flex-1 [&>svg]:shrink-0 [&>svg]:text-[#0F4A85] [&_strong]:my-1 [&_strong]:block [&_strong]:text-[.85rem] [&_strong]:leading-[1.4]" key={event.title} onClick={() => openEvent(event)}><span className="min-w-[58px] rounded-[10px] bg-[#E0F1FF] px-3 py-2 text-center text-[#0F4A85] [&>b]:block [&>b]:text-[1.35rem] [&>span]:block [&>span]:text-[.72rem]"><b>{event.day}</b><span>{months[month.getMonth()].slice(0, 3)}</span></span><span><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><strong>{event.title}</strong><span className="block text-[.72rem]">{event.venue}</span></span><ArrowRight size={18} aria-hidden="true" /></button>) : <p className="py-6 text-[.9rem]">No events for this filter this month.</p>}
            </div>
            {monthEvents.length > 3 && (
              <button
                type="button"
                className="mt-3 flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-[#0F4A85]/10 bg-[#E0F1FF] px-4 py-3 text-[.85rem] font-semibold text-[#0F4A85] transition-colors duration-200 hover:border-[#0F4A85]/25 hover:bg-[#D0E8FC] active:bg-[#C2E0F8]"
                aria-expanded={showAllMonthEvents}
                aria-controls="selected-month-events"
                onClick={() => setShowAllMonthEvents(previous => !previous)}
              >
                <span>{showAllMonthEvents ? "Show fewer events" : `View all ${monthEvents.length} events`}</span>
                <ChevronDown size={18} aria-hidden="true" className={`shrink-0 transition-transform duration-200 ${showAllMonthEvents ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
        </div>
      </Section>

      <Section id="upcoming-events" title="Upcoming Events" description="A look ahead at learning, collaboration and campus life." alternate>
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-4 [&>*]:min-w-0">{upcoming.map(event => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={event.title}><Placeholder label={event.cat + " event"} /><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><h3>{event.title}</h3><p>{event.venue} · {event.day} Oct 2026</p><button className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => openEvent(event, new Date(2026, 9, 1))}>View Details <ArrowRight size={16} /></button></article>)}</div>
        <div className="mt-8 flex justify-center"><a className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" href="#calendar" onClick={() => chooseCategory("All")}>View All Upcoming Events</a></div>
      </Section>

      <Section id="archive" title="Event Archives" description="Explore events, activities and memorable moments from previous academic years at SRMU.">
        <div className="mb-[22px] flex flex-wrap gap-2" aria-label="Filter archive by year">{["All", "2026", "2025", "2024", "2023"].map(value => <button key={value} className="rounded-full border border-[#0F4A85] bg-transparent px-[17px] py-[9px] text-[.82rem] text-[#0F4A85] aria-pressed:border-[#FFB703] aria-pressed:bg-[#FFB703] aria-pressed:font-semibold aria-pressed:text-[#14284E]" onClick={() => setYear(value)} aria-pressed={year === value}>{value}</button>)}</div>
        <div className="flex flex-col flex-wrap gap-3.5 min-[561px]:flex-row [&>label]:flex [&>label]:flex-1 [&>label]:flex-col [&>label]:gap-1.5 [&>label]:text-[.8rem] [&>label]:font-semibold min-[561px]:[&>label]:max-w-[400px] [&_input]:min-w-0 [&_input]:w-full [&_input]:rounded-[10px] [&_input]:border [&_input]:border-[#0F4A85] [&_input]:bg-white [&_input]:px-4 [&_input]:py-3 [&_select]:min-w-0 [&_select]:w-full [&_select]:rounded-[10px] [&_select]:border [&_select]:border-[#0F4A85] [&_select]:bg-white [&_select]:px-4 [&_select]:py-3"><label>Search events<input type="search" placeholder="Search events..." value={search} onChange={event => setSearch(event.target.value)} /></label><label>Category<select value={archiveCategory} onChange={event => setArchiveCategory(event.target.value)}><option value="All">All Categories</option>{categories.map(category => <option key={category.name}>{category.name}</option>)}</select></label></div>
        <p className="my-[18px] text-[.8rem]" role="status">{filteredArchive.length} {filteredArchive.length === 1 ? "event" : "events"} found</p>
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[861px]:grid-cols-3 [&>*]:min-w-0">{filteredArchive.map(event => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={event.title}><Placeholder label={event.title} /><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><h3>{event.title}</h3><p>{event.date}</p><p>{event.desc}</p><button className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => setDetail({ title: event.title, category: event.cat, date: event.date, description: event.desc })}>View Event <ArrowRight size={16} /></button></article>)}</div>
        {!filteredArchive.length && <p className="py-6 text-[.9rem]">No matching events found. Try another year, category or search term.</p>}
      </Section>

      <section className="py-[52px] min-[861px]:py-[76px]"><div className={`${Global.container} grid grid-cols-1 items-center gap-7 min-[861px]:grid-cols-[1.1fr_1fr] min-[1101px]:gap-12 [&>*]:min-w-0 [&>div>button]:mt-6 [&>div>span]:mb-4`}><Placeholder label="Event highlight photograph"><Cpu aria-hidden="true" /></Placeholder><div><p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-[#0F4A85] uppercase [&>span]:size-2 [&>span]:rounded-full [&>span]:bg-[#D62C2B]">Event Highlight</p><h2>From Code to Creativity: The Rise of Generative AI</h2><ul className="my-[22px] list-none p-0 text-[.9rem] [&>li]:mb-2"><li><b>Guest Speaker:</b> Leading AI researcher</li><li><b>Date:</b> September 2026</li><li><b>Department:</b> Computer Science & Engineering</li><li><b>Highlight:</b> Live demonstrations and student Q&amp;A</li></ul><button className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5" onClick={() => setDetail({ title: "From Code to Creativity: The Rise of Generative AI", category: "Academic", date: "September 2026", description: "A sample event highlight featuring live demonstrations and student Q&A with a leading AI researcher from the Computer Science & Engineering programme." })}>Read Event Story <ArrowRight size={18} /></button></div></div></section>

      <section className="border-y border-[#21A5DB] bg-[#E0F1FF] pt-[42px] pb-[26px] text-center [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-6 min-[861px]:[&>div]:grid-cols-4 [&_b]:block [&_b]:text-[clamp(1.9rem,3vw,2.8rem)] [&_b]:leading-[1.3] [&_b]:text-[#0F4A85] [&_span]:text-[.85rem] [&>p]:mt-6 [&>p]:text-[.72rem]" aria-label="Sample event statistics"><div className={Global.container}>{[["500+", "Events Organised"], ["100+", "Workshops & Conferences"], ["50+", "Industry & Expert Sessions"], ["10000+", "Student Participants"]].map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        {/* <p>Illustrative figures for this preview</p> */}
      </section>

      <section className="py-[52px] min-[861px]:py-[76px]"><div className={Global.container}><div className="mx-auto max-w-[760px] rounded-3xl border border-[#21A5DB] bg-[#E0F1FF] px-5 py-[30px] text-center min-[561px]:p-11 [&>svg]:mx-auto [&>svg]:mb-4 [&>svg]:text-[#0F4A85] [&>p]:mt-3.5 [&>[role=status]]:text-[.82rem]"><CalendarDays size={32} aria-hidden="true" /><h2>Stay Updated with SRMU Events</h2><p>Get updates about upcoming events, workshops, conferences, competitions and campus activities.</p><form className="mt-6 flex flex-col gap-2.5 min-[561px]:flex-row [&>input]:min-w-0 [&>input]:w-full [&>input]:flex-1 [&>input]:rounded-full [&>input]:border [&>input]:border-[#0F4A85] [&>input]:bg-white [&>input]:px-4 [&>input]:py-3" onSubmit={event => { event.preventDefault(); setNewsletterMessage("Subscriptions will be available when this page launches. No email has been submitted."); }}><label className="sr-only" htmlFor="event-new-email">Email address</label><input id="event-new-email" type="email" required placeholder="Enter your email address" autoComplete="email" /><button className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5" type="submit">Subscribe</button></form><p role="status">{newsletterMessage}</p></div></div></section>

      <Section title="Frequently Asked Questions About SRMU Events" alternate>
        <div className="max-w-[850px]">{faqs.map(([question, answer], index) => <div className="border-b border-[#21A5DB] [&_h3_button]:flex [&_h3_button]:w-full [&_h3_button]:items-center [&_h3_button]:justify-between [&_h3_button]:gap-6 [&_h3_button]:border-0 [&_h3_button]:bg-transparent [&_h3_button]:py-[22px] [&_h3_button]:text-left [&_h3_button]:text-base [&_h3_button]:leading-normal [&_h3_button]:font-semibold [&_h3_span]:text-2xl [&_h3_span]:text-[#0F4A85] [&_p]:max-w-[75ch] [&_p]:pb-[22px] [&_p]:text-[.9rem]" key={question}><h3><button id={`event-new-question-${index}`} aria-expanded={openFaq === index} aria-controls={`event-new-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<span aria-hidden="true">{openFaq === index ? "−" : "+"}</span></button></h3><div id={`event-new-answer-${index}`} role="region" aria-labelledby={`event-new-question-${index}`} hidden={openFaq !== index}><p>{answer}</p></div></div>)}</div>
      </Section>

      {/* Final call to action hidden for now.
      <section className="py-[52px] min-[861px]:py-[76px]"><div className={Global.container}><div className="rounded-3xl border-t-[5px] border-[#FFB703] bg-[#E0F1FF] px-5 py-10 text-center min-[561px]:px-[30px] min-[561px]:py-16"><p className="mb-4 flex items-center gap-[9px] text-[.78rem] font-bold tracking-[.1em] text-[#0F4A85] uppercase [&>span]:size-2 [&>span]:rounded-full [&>span]:bg-[#D62C2B]">Learn. Connect. Celebrate.</p><h2>Be Part of the SRMU Experience</h2><p>Explore upcoming events, discover new opportunities and be part of the vibrant academic and student life at Shri Ramswaroop Memorial University.</p><div className="flex flex-wrap items-center gap-3"><a href="#upcoming-events" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFB703] bg-[#FFB703] px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#14284E] transition-transform hover:-translate-y-0.5">Explore Upcoming Events <ArrowRight size={18} /></a><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5">View Event Calendar</a></div></div></div></section>
      */}

      {detail && <dialog ref={dialog} className="fixed inset-0 m-auto max-h-[85dvh] w-[min(560px,calc(100%-32px))] max-w-none overflow-y-auto rounded-[20px] border border-[#21A5DB] bg-[#E0F1FF] p-0 text-[#14284E] backdrop:bg-[#14284E]/45 [&_h2]:mt-3.5 [&_h2]:mb-5 [&_h2]:pr-5 [&_h2]:text-[1.65rem]! [&_p]:my-3" aria-labelledby="event-new-detail-title" onCancel={() => setDetail(null)} onClose={() => setDetail(null)} onClick={event => { if (event.target === event.currentTarget) setDetail(null); }}><div className="relative px-7 pt-11 pb-7"><button className="absolute top-2.5 right-2.5 grid size-10 place-items-center rounded-full border-0 bg-white text-[#0F4A85]" aria-label="Close event preview" onClick={() => setDetail(null)} autoFocus><X /></button>{detail.category && <span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{detail.category}</span>}<h2 id="event-new-detail-title">{detail.title}</h2>{detail.gallery && <Placeholder label={detail.title} />}{detail.date && <p>{detail.date}</p>}{detail.venue && <p>{detail.venue}</p>}<p>{detail.description}</p><p className="mb-[18px] text-[.8rem] text-[#0F4A85]">Sample content for the new events page preview.</p></div></dialog>}
    </main>
  );
}
