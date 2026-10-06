import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Cpu, GraduationCap, Image, MapPin, Mic, Music, Sparkles, Trophy, X } from "lucide-react";
import { archiveEvents, calendarEvents, type CalendarEvent } from "./eventNewData";
import Global from "../../utils/styles/Global.module.css";

const categories = [
  { name: "Academic", title: "Academic Events", id: "academic-events", Icon: GraduationCap, description: "Conferences, faculty development programmes, workshops, guest lectures and alumni interactions." },
  { name: "Technical", title: "Technical Events", id: "technical-events", Icon: Cpu, description: "Hackathons, coding competitions, technical workshops, project exhibitions and innovation events." },
  { name: "Cultural", title: "Cultural Events", id: "cultural-events", Icon: Music, description: "Cultural festivals, music, dance, drama, literary activities and celebrations." },
  { name: "Sports", title: "Sports", id: "sports-events", Icon: Trophy, description: "Annual sports meets, inter-college competitions, athletics and indoor and outdoor activities." },
  { name: "Special", title: "Celebrity & Special", id: "special-events", Icon: Mic, description: "Celebrity interactions, industry leader talks, motivational sessions and distinguished speakers." },
];
const academic = [
  ["Faculty Training & Development", "Structured programmes building teaching and research capability."],
  ["Conferences & Seminars", "Research presentations and expert-led discussions across disciplines."],
  ["Workshops & Industrial Training", "Hands-on sessions connecting classroom learning to industry practice."],
  ["Alumni Talks & Interaction", "Graduates share career journeys and mentor current students."],
];
const technical = [
  ["Hackathons", "48-hour builds tackling real-world problem statements."],
  ["Technical Workshops", "Skill-building sessions on current tools and platforms."],
  ["Coding Competitions", "Timed contests testing algorithmic problem-solving."],
  ["Project Exhibitions", "Students showcase semester and capstone projects."],
  ["Industrial Visits", "On-site exposure to manufacturing and R&D facilities."],
  ["Innovation Challenges", "Cross-disciplinary competitions for original ideas."],
];
const cultural = ["Cultural Fest", "Music & Dance", "Drama & Theatre", "Literary Events", "Art & Photography", "National Celebrations"];
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

function Section({ id, title, description, alternate, children }: { id?: string; title: string; description?: string; alternate?: boolean; children: ReactNode }) {
  return <section id={id} className={`py-[52px] min-[861px]:py-[76px] ${alternate ? "bg-[#E0F1FF]" : ""}`}>
    <div className={Global.container}>
      <div className="mb-[34px] max-w-[740px] [&>p]:mt-3.5"><h2>{title}</h2>{description && <p>{description}</p>}</div>
      {children}
    </div>
  </section>;
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
  const dialog = useRef<HTMLDialogElement>(null);

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
        <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[861px]:grid-cols-3 min-[1101px]:grid-cols-5">{categories.map(({ name, title, id, Icon, description }) => <article className="flex flex-col items-start gap-4 rounded-2xl border border-t-4 border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&:nth-child(2)]:border-t-[#0F4A85] [&:nth-child(3)]:border-t-[#FFB703] [&:nth-child(4)]:border-t-[#D62C2B] [&:nth-child(5)]:border-t-[#14284E]" key={name}><Icon size={32} aria-hidden="true" /><h3>{title}</h3><p>{description}</p><a href={`#${id}`} className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0">Explore {name} Events <ArrowRight size={16} /></a></article>)}</div>
      </Section>

      <Section id="academic-events" title="Academic Events" description="Opportunities for students and faculty to learn from experts, exchange ideas, develop professional skills and engage with emerging areas of knowledge.">
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-4 [&>*]:min-w-0">{academic.map(([title, description]) => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={title}><Placeholder label={title}><GraduationCap aria-hidden="true" /></Placeholder><h3>{title}</h3><p>{description}</p><a className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" href="#calendar" onClick={() => chooseCategory("Academic")}>View Events <ArrowRight size={16} /></a></article>)}</div>
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" onClick={() => chooseCategory("Academic")}>View All Academic Events</a></div>
      </Section>

      <Section id="technical-events" title="Technical Events" description="Activities designed to encourage innovation, problem-solving, practical learning and industry exposure." alternate>
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[861px]:grid-cols-3 [&>*]:min-w-0">{technical.map(([title, description]) => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={title}><Cpu size={28} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" onClick={() => chooseCategory("Technical")}>View All Technical Events</a></div>
      </Section>

      <Section id="cultural-events" title="Cultural Events" description="Celebrations of music, art, drama and literature that bring the SRMU community together.">
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[861px]:grid-cols-3 [&>*]:min-w-0">{cultural.map(title => <button className="rounded-2xl border-0 bg-transparent p-0 [&>[role=img]]:aspect-[4/3] hover:[&>[role=img]]:border-[#0F4A85]" key={title} onClick={() => setDetail({ title, gallery: true, description: "A glimpse of creativity and celebration at SRMU. Event photography will be added here." })} aria-label={`Preview ${title}`}><Placeholder label={title}><Music aria-hidden="true" /></Placeholder></button>)}</div>
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => chooseCategory("Cultural")}>Explore Cultural Events <ArrowRight size={16} /></a></div>
      </Section>

      <Section id="sports-events" title="Sports & Fitness" description="Sports at SRMU encourage teamwork, discipline, leadership and a healthy campus lifestyle." alternate>
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[861px]:grid-cols-3 [&>*]:min-w-0">{["Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Athletics"].map(title => <article className={`flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem] flex-row! items-center! gap-4!`} key={title}><Trophy size={24} aria-hidden="true" /><h3>{title}</h3></article>)}</div>
        <div className="mt-8 flex justify-center"><a href="#calendar" className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => chooseCategory("Sports")}>View Sports Events <ArrowRight size={16} /></a></div>
      </Section>

      <Section id="special-events" title="Celebrity & Special Events" description="Engage with distinguished personalities, industry leaders, experts and inspiring speakers through special sessions at SRMU.">
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-4 [&>*]:min-w-0">{special.map(title => <article className="[&>[role=img]]:aspect-[4/3] min-[561px]:[&>[role=img]]:aspect-[9/14] [&:last-child>[role=img]]:border-2 [&:last-child>[role=img]]:border-[#FFB703] [&>[role=img]>span]:absolute [&>[role=img]>span]:inset-x-0 [&>[role=img]>span]:bottom-0 [&>[role=img]>span]:bg-white [&>[role=img]>span]:px-3 [&>[role=img]>span]:py-[18px] [&>[role=img]>span]:font-semibold" key={title}><Placeholder label={title}><Mic aria-hidden="true" /></Placeholder></article>)}</div>
      </Section>

      <Section id="calendar" title="SRMU Events Calendar" description="Stay updated with upcoming academic, technical, cultural, sports and special events at SRMU." alternate>
        <p className="mb-[18px] text-[.8rem] text-[#0F4A85]">Design preview: event dates, archive entries and statistics are sample content.</p>
        <div className="mb-[22px] flex flex-wrap gap-2" aria-label="Filter calendar events">{["All", ...categories.map(category => category.name)].map(category => <button key={category} className="rounded-full border border-[#0F4A85] bg-transparent px-[17px] py-[9px] text-[.82rem] text-[#0F4A85] aria-pressed:border-[#FFB703] aria-pressed:bg-[#FFB703] aria-pressed:font-semibold aria-pressed:text-[#14284E]" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category === "All" ? "All Events" : category}</button>)}</div>
        <div className="grid grid-cols-1 items-center gap-7 min-[861px]:grid-cols-[1.1fr_1fr] min-[1101px]:gap-12 [&>*]:min-w-0 [&>div>button]:mt-6 [&>div>span]:mb-4">
          <div className="self-stretch rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6">
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
          <div className="self-stretch rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6"><h3>Selected Month&apos;s Events</h3><div aria-live="polite">{monthEvents.length ? monthEvents.map(event => <button className="flex w-full items-center gap-3.5 border-0 border-b border-[#21A5DB] bg-transparent py-4 text-left text-[#14284E] last:border-b-0 [&>span:nth-child(2)]:flex-1 [&>svg]:shrink-0 [&>svg]:text-[#0F4A85] [&_strong]:my-1 [&_strong]:block [&_strong]:text-[.85rem] [&_strong]:leading-[1.4]" key={event.title} onClick={() => openEvent(event)}><span className="min-w-[58px] rounded-[10px] bg-[#E0F1FF] px-3 py-2 text-center text-[#0F4A85] [&>b]:block [&>b]:text-[1.35rem] [&>span]:block [&>span]:text-[.72rem]"><b>{event.day}</b><span>{months[month.getMonth()].slice(0, 3)}</span></span><span><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><strong>{event.title}</strong><span className="block text-[.72rem]">{event.venue}</span></span><ArrowRight size={18} aria-hidden="true" /></button>) : <p className="py-6 text-[.9rem]">No events for this filter this month.</p>}</div></div>
        </div>
      </Section>

      <Section id="upcoming-events" title="Upcoming Events" description="A look ahead at learning, collaboration and campus life.">
        <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[1101px]:grid-cols-4 [&>*]:min-w-0">{upcoming.map(event => <article className="flex flex-col items-start gap-3 rounded-2xl border border-[#21A5DB] bg-white p-5 min-[561px]:p-6 [&>svg]:text-[#0F4A85] [&>p]:text-[.86rem] [&>a]:mt-auto [&>button]:mt-auto [&>[role=img]]:mb-1.5 [&>[role=img]]:aspect-auto [&>[role=img]]:h-[140px] [&>[role=img]]:w-full [&>[role=img]>svg]:size-9 [&>[role=img]>span]:text-[.7rem]" key={event.title}><Placeholder label={event.cat + " event"} /><span className="inline-flex w-fit rounded-full bg-[#FFB703] px-3 py-1 text-[.72rem] leading-normal font-semibold text-[#14284E]">{event.cat}</span><h3>{event.title}</h3><p>{event.venue} · {event.day} Oct 2026</p><button className="inline-flex items-center gap-2 border-0 bg-transparent py-[5px] text-left text-[.85rem] font-semibold text-[#0F4A85] hover:underline hover:underline-offset-4 [&>svg]:shrink-0" onClick={() => openEvent(event, new Date(2026, 9, 1))}>View Details <ArrowRight size={16} /></button></article>)}</div>
        <div className="mt-8 flex justify-center"><a className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#0F4A85] bg-transparent px-[22px] py-[13px] text-center text-[.88rem] font-semibold text-[#0F4A85] transition-transform hover:-translate-y-0.5" href="#calendar" onClick={() => chooseCategory("All")}>View All Upcoming Events</a></div>
      </Section>

      <Section id="archive" title="Event Archives" description="Explore events, activities and memorable moments from previous academic years at SRMU." alternate>
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
