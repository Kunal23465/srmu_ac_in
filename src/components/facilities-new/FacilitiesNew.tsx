import { useEffect, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { ArrowLeft, ArrowRight, BedDouble, BookOpen, Bus, Camera, Dumbbell, Droplets, FileText, Fingerprint, FlaskConical, HeartPulse, Landmark, Leaf, Monitor, Shield, Trees, UsersRound, WashingMachine, Wifi, Zap } from "lucide-react";
import { facilitiesNewBlocks, facilitiesNewPageCopy, facilitiesNewSportsImages } from "../../data/campus-life/facilities/facilities-new-data";
import campus from "../../assets/images/breadcrumb/campus.webp";
import campusBus from "../../assets/images/bus-images/Bus.webp";
import campusBusFleet from "../../assets/images/bus-images/SR7D5284.webp";
import FacilitiesNewLibrary from "./FacilitiesNewLibrary";
import FacilitiesNewDining from "./FacilitiesNewDining";
import canteen1 from "../../assets/images/new-canteen/canteen-1.webp";
import canteen2 from "../../assets/images/new-canteen/canteen-2.webp";
import canteen3 from "../../assets/images/new-canteen/canteen-3.webp";
import canteen4 from "../../assets/images/new-canteen/canteen-4.webp";
import canteen5 from "../../assets/images/new-canteen/canteen-5.webp";
import canteen6 from "../../assets/images/new-canteen/canteen-6.webp";
import computerCentresImage from "../../assets/images/new-labo/computer-centres.webp";
import engineeringLabsImage from "../../assets/images/new-labo/engineering-labs.webp";
import specializedLaboratoryImage from "../../assets/images/new-labo/specialized-laboratory.webp";
import biotechnologyLabImage from "../../assets/images/new-labo/biotechnology-lab.webp";
import pharmacyLabImage from "../../assets/images/new-labo/pharmacy-lab.webp";
import seminarHallsImage from "../../assets/images/new-labo/seminar-halls-and-auditorium.webp";
import medicalFacilityImage from "../../assets/images/new-labo/medical-facility.webp";
import mootCourtsImage from "../../assets/images/new-labo/moot-courts.webp";
import studioMediaLabImage from "../../assets/images/new-labo/studio-and-media-lab.webp";
import smartClassImage from "../../assets/images/new-labo/smart-class.webp";
import agricultureFarmsImage from "../../assets/images/new-labo/agriculture-farms.webp";
import languageLabImage from "../../assets/images/new-labo/language-lab.webp";

const containerClass = "mx-auto w-full max-w-[1280px]";
const sectionClass = "scroll-mt-24 border-b border-[#DCE6F2] px-4 py-8 sm:px-6 sm:py-10";
const sectionHeadingClass = "mb-3 text-[24px] leading-[1.2] font-bold font-display text-[#14284E] sm:text-[36px]";
const paragraphClass = "text-justify text-[15px] leading-relaxed text-[#405575] sm:text-base";
const darkParagraphClass = "text-justify text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base";
const cardClass = "group relative min-w-0 overflow-hidden rounded-2xl border border-[#DCE6F2] border-t-4 border-t-[#D62C2B] bg-white p-5 shadow-[0_2px_12px_rgba(15,31,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,31,61,0.10)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6";
const diningImages = [
  { src: canteen1, caption: "Students at the campus canteen counter" },
  { src: canteen2, caption: "Students sharing a meal in the canteen" },
  { src: canteen3, caption: "Students gathering in the cafeteria" },
  { src: canteen4, caption: "Students being served in the dining hall" },
  { src: canteen5, caption: "Campus café and eating joint" },
  { src: canteen6, caption: "Students dining in the campus canteen" },
];
const campusLifeHighlights = [
  { label: "Green Campus", icon: Leaf, color: "bg-[#14284E] text-white" },
  { label: "Landscaped Spaces", icon: Trees, color: "bg-[#14284E] text-white" },
  { label: "Sports & Recreation", icon: Dumbbell, color: "bg-[#35A6D7] text-white" },
  { label: "Vibrant Student Life", icon: UsersRound, color: "bg-white/85 text-[#35A6D7]" },
];

const sectionNav = [
  { id: "facilities-new-overview", label: "Overview" },
  { id: "facilities-new-blocks", label: "Academic Blocks" },
  { id: "facilities-new-laboratories", label: "Laboratories" },
  { id: "facilities-new-healthcare", label: "Healthcare" },
  { id: "facilities-new-library", label: "Central Library" },
  { id: "facilities-new-hostels", label: "Hostels" },
];

const overviewFacts = [
  "100+ smart classrooms equipped with projectors and audiovisual teaching aids.",
  "60+ specialized laboratories supporting practical learning across disciplines.",
  "1,000+ high-end computer systems, as listed on the university's official Facilities page.",
  "Dedicated academic blocks for different institutes and departments.",
  "Seminar halls and auditoriums for lectures, workshops, conferences, and university events.",
  "Specialized workshops, research facilities, and discipline-specific learning spaces.",
];
const overviewFactHeadings = [
  "100+ smart classrooms",
  "60+ specialized laboratories",
  "1,000+ high-end computer systems,",
  "Dedicated academic blocks",
  "Seminar halls and auditoriums",
  "Specialized workshops, research facilities,",
];
const overviewFactIcons = [UsersRound, FlaskConical, Monitor, Landmark, UsersRound, BookOpen];
const overviewFactPositions = [
  "py-3 sm:py-4",
  "py-3 sm:border-l sm:pl-5 sm:py-4 lg:border-l lg:pl-6",
  "py-3 sm:border-t sm:pt-5 sm:py-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-4",
  "py-3 sm:border-l sm:border-t sm:pl-5 sm:pt-5 sm:py-4 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5",
  "py-3 sm:border-t sm:pt-5 sm:py-4 lg:border-l lg:border-t lg:pl-6 lg:pt-5",
  "py-3 sm:border-l sm:border-t sm:pl-5 sm:pt-5 sm:py-4 lg:border-l lg:border-t lg:pl-6 lg:pt-5",
];

const blockDescriptions = [
  "B1 Academic Block accommodates departments and institutes associated with civil engineering, mechanical engineering, electrical engineering, chemical sciences, natural sciences and humanities, biosciences, and technology. The block also features auditoriums and specialized facilities, including the Centre for Energy Conservation.",
  "B2 Academic Block houses academic departments associated with computer science, computer applications, physical sciences, and mathematical sciences. It also supports research, consultancy, and other academic activities.",
  "B3 Academic Block accommodates institutes associated with pharmacy, architecture and planning, and education and research, providing dedicated spaces for teaching and discipline-specific academic activities.",
];

const laboratoryCards = [
  {
    title: "Specialized Laboratories",
    image: specializedLaboratoryImage,
    text: facilitiesNewPageCopy.laboratories.introduction,
  },
  {
    title: "Computer Centers",
    image: computerCentresImage,
    text: facilitiesNewPageCopy.laboratories.computerCenters,
  },
  {
    title: "Biotechnology Laboratories",
    image: biotechnologyLabImage,
    text: facilitiesNewPageCopy.laboratories.biotechnologyLaboratories,
  },
  {
    title: "Pharmacy Laboratories",
    image: pharmacyLabImage,
    text: facilitiesNewPageCopy.laboratories.pharmacyLaboratories,
  },
  {
    title: "Engineering Workshops",
    image: engineeringLabsImage,
    text: facilitiesNewPageCopy.laboratories.engineeringWorkshops,
  },
  {
    title: "Agricultural Farms and Herbal Gardens",
    image: agricultureFarmsImage,
    text: facilitiesNewPageCopy.laboratories.agriculturalFarmsAndHerbalGardens,
  },
  {
    title: "Moot Court",
    image: mootCourtsImage,
    text: facilitiesNewPageCopy.laboratories.mootCourt,
  },
  {
    title: "Studio and Media Laboratories",
    image: studioMediaLabImage,
    text: facilitiesNewPageCopy.laboratories.studioAndMediaLaboratories,
  },
  {
    title: "Language Laboratory",
    image: languageLabImage,
    text: facilitiesNewPageCopy.laboratories.languageLaboratory,
  },
  {
    title: "Smart Classrooms",
    image: smartClassImage,
    text: "More than 100 smart classrooms are equipped with projectors and audiovisual teaching aids to support interactive learning.",
  },
];

const libraryCollections = [
  "65,399 books and e-books.",
  "121 print journals.",
  "2,086 e-journals.",
  "PhD theses, project reports, magazines, newspapers, and other academic materials.",
];

const libraryFeatures = [
  "A fully air-conditioned reading and study environment.",
  "Wi-Fi and CCTV facilities.",
  "An open-shelf system for browsing and accessing library materials.",
  "KOHA-based library management and catalogue services.",
  "Circulation and reference sections.",
  "Periodicals and digital resource sections.",
  "Printing, photocopying, and scanning services.",
  "Online access to academic resources through Web OPAC and the university's e-library.",
];

const hostelAmenityDescriptions = [
  "AC Room Options: Air-conditioned accommodation options, subject to the hostel's current room categories and availability.",
  "Laundry Facilities: Laundry arrangements for students' everyday clothing and personal needs, subject to the services currently provided.",
  "24-Hour Power Backup: Power backup arrangements to support essential residential facilities.",
  "Medical Aid: Medical assistance provisions for hostel residents.",
  "Wi-Fi Facility: Internet connectivity to support online learning, research, and communication.",
  "ATM and Banking Facilities: Access to banking amenities listed by the university.",
  "CCTV Surveillance: CCTV cameras monitor designated areas and hostel peripheries as part of the university's security arrangements.",
  "Police Outpost: A police outpost is listed among the university's campus security provisions.",
  "Biometric Attendance: Biometric attendance arrangements support applicable hostel attendance and monitoring procedures.",
  "Dining Hall: A designated dining area for residents' meals.",
  "Water Purification: Water coolers fitted with water purifiers are provided in the hostel wings, according to the published hostel information.",
  "Common Room: A shared recreational space with television and DTH facilities.",
  "Reading Room: A reading space with library resources to support study and independent learning.",
  "Indoor and Outdoor Sports: Recreational opportunities for hostel residents.",
  "Gymnasium: A gymnasium for physical fitness and exercise.",
  "Visitor Facilities: A designated visiting area and furnished guest rooms, as described on the official hostel page.",
];

const hostelAmenityGroups = [
  hostelAmenityDescriptions.slice(0, 6).map((description, index) => ({ description, index })),
  hostelAmenityDescriptions.slice(6, 11).map((description, index) => ({ description, index: index + 6 })),
  hostelAmenityDescriptions.slice(11).map((description, index) => ({ description, index: index + 11 })),
];
const hostelAmenityIcons = [BedDouble, WashingMachine, Zap, HeartPulse, Wifi, Landmark, Camera, Shield, Fingerprint, UsersRound, Droplets, UsersRound, BookOpen, Dumbbell, Dumbbell, UsersRound];
const hostelAmenityIconColors = ["bg-[#14284E]", "bg-[#35A6D7]", "bg-[#FFB703]", "bg-[#D62C2B]"];

const hostelCommittees = [
  "Anti-Ragging Committee",
  "Discipline Committee",
  "Mess Committee",
  "Library Committee",
  "Sports Committee",
  "Cultural Committee",
  "Maintenance Committee",
  "Gymnasium Committee",
  "Common Room Committee",
];

function Section({
  id,
  title,
  children,
  tone = "white",
}: {
  id: string;
  title: ReactNode;
  children: ReactNode;
  tone?: "white" | "pale" | "navy" | "gold";
}) {
  const dark = tone === "navy";
  const gold = tone === "gold";
  const background = tone === "pale" ? "bg-[#F0F6FB]" : dark ? "bg-[#14284E]" : gold ? "bg-[#FFB703]" : "bg-white";
  const titleColor = dark ? "text-white" : "text-[#14284E]";

  return (
    <section id={id} className={`${sectionClass} ${background}`} aria-labelledby={`${id}-title`}>
      <div className={containerClass}>
        <h2 id={`${id}-title`} className={`${sectionHeadingClass} ${titleColor}`}>{title}</h2>
        <div className={dark ? "text-[#E0F1FF]" : gold ? "text-[#14284E]" : "text-[#405575]"}>{children}</div>
      </div>
    </section>
  );
}

function ContentCard({
  title,
  image,
  imageAlt,
  children,
}: {
  title: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
}) {
  return (
    <article className={cardClass}>
      {image && <img className="mb-4 aspect-[16/9] w-full rounded-xl border border-[#DCE6F2] object-cover" src={image} alt={imageAlt ?? ""} loading="lazy" decoding="async" />}
      <h3 className="mb-2 text-[17px] leading-snug font-bold font-display text-[#14284E]">{title}</h3>
      <div className="text-sm leading-relaxed text-[#405575] sm:text-[15px]">{children}</div>
    </article>
  );
}

function SportsCarousel({ images }: { images: readonly { src: string; caption: string }[] }) {
  const [index, setIndex] = useState(0);
  const showImage = (nextIndex: number) => setIndex((nextIndex + images.length) % images.length);
  const current = images[index];

  return (
    <div className="min-w-0" role="region" aria-label="Sports and recreation photos" aria-roledescription="carousel">
      <figure className="relative m-0 overflow-hidden rounded-2xl border border-white/20 bg-[#10244E] shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
        <img key={current.src} src={current.src} alt={`${current.caption} at SRMU`} width={900} height={560} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
        <figcaption className="absolute inset-x-3 bottom-3 flex min-h-14 items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#091C40]/90 px-4 py-3 text-white sm:inset-x-4 sm:bottom-4 sm:px-5">
          <span className="text-sm font-bold sm:text-base">{current.caption}</span>
          <span className="shrink-0 text-xs font-bold tracking-wider text-[#FFB703]">{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
      <div className="mt-3 flex items-center justify-between gap-2">
        <button type="button" onClick={() => showImage(index - 1)} aria-label="Previous sports photo" className="grid size-10 shrink-0 place-items-center rounded-full border border-white/30 bg-white text-[#14284E] transition-colors hover:bg-[#FFB703] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB703] sm:size-11">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <div className="flex min-w-0 items-center justify-center gap-0.5" role="group" aria-label="Choose sports photo">
          {images.map((image, imageIndex) => (
            <button key={image.src} type="button" aria-label={`Show ${image.caption} photo`} aria-pressed={imageIndex === index} onClick={() => showImage(imageIndex)} className="grid size-6 shrink-0 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#FFB703]">
              <span className={`h-2 rounded-full transition-all ${imageIndex === index ? "w-5 bg-[#FFB703]" : "w-2 bg-[#E0F1FF]/60"}`} />
            </button>
          ))}
        </div>
        <button type="button" onClick={() => showImage(index + 1)} aria-label="Next sports photo" className="grid size-10 shrink-0 place-items-center rounded-full border border-white/30 bg-white text-[#14284E] transition-colors hover:bg-[#FFB703] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB703] sm:size-11">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function FacilitiesNew() {
  const [activeNav, setActiveNav] = useState(sectionNav[0].id);
  const hostelImages = facilitiesNewPageCopy.hostels.residences;

  useEffect(() => {
    const updateActiveSection = () => {
      let current = sectionNav[0].id;
      for (const item of sectionNav) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 128) current = item.id;
      }
      setActiveNav(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="facilities-new-page w-full max-w-full overflow-x-clip bg-white text-[#14284E] antialiased [&_ul]:!list-none [&_ol]:!list-none">
      <section className="relative isolate flex min-h-[460px] w-full items-end overflow-hidden bg-[#071329] px-4 py-10 sm:min-h-[504px] sm:items-center sm:px-6 sm:py-14" aria-labelledby="facilities-new-hero-title">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover object-center" src={campus} alt="SRMU campus buildings and grounds" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071329]/95 via-[#071329]/55 to-[#071329]/15 sm:bg-gradient-to-r sm:from-[#071329]/80 sm:via-[#091A38]/55 sm:to-[#071329]/15" aria-hidden="true" />
        <div className={`${containerClass} relative z-10`}>
          <div className="max-w-[760px] text-white">
            {/* <p className="mb-1.5 text-[16px] leading-snug font-semibold text-[#38BDF8] sm:text-[24px]">Shri Ramswaroop Memorial University (SRMU)</p> */}
            <h1 id="facilities-new-hero-title" className="text-[36px] leading-[1.1] font-bold text-white/90 sm:text-[clamp(40px,4vw,56px)]">
              Campus <span className="text-[#FFB703]">
                Facilities</span>
            </h1>
            <div className="my-4 h-[3px] w-20 rounded-full bg-[#38BDF8] sm:w-[200px]" aria-hidden="true" />
            {/* <p className="max-w-[700px] text-[15px] leading-relaxed text-white/90 sm:text-base">{facilitiesNewPageCopy.hero}</p> */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/admission-enquiry" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#DCE6F2]/70 bg-[#14284E]/80 px-5 py-3 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-[#14284E] sm:text-sm">Plan Your Next Step</a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-7 hidden md:block">
        <section className="px-4 sm:px-6" aria-label="Campus facilities highlights">
          <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-[22px] border border-[#E5EAF1] border-t-[5px] border-t-[#FFB703] bg-white shadow-[0_14px_35px_rgba(15,31,61,0.12)]">
            <dl className="m-0 grid grid-cols-2 md:grid-cols-4">
              {facilitiesNewPageCopy.highlights.map((stat, index) => (
                <div key={stat.label} className={`flex min-w-0 flex-col items-start gap-px px-4 pt-3 pb-4 text-left text-[#14284E] ${index % 2 === 1 ? "border-l border-[#D5E5F4]" : ""} ${index >= 2 ? "border-t border-[#D5E5F4]" : ""} ${index > 0 ? "md:border-l" : "md:border-l-0"} md:border-t-0`}>
                  <dt className="text-[13px] leading-[1.4] text-[#405575]">{stat.label}</dt>
                  <dd className="order-first m-0 text-[clamp(24px,2vw,32px)] leading-[1.1] font-extrabold text-[#D62C2B]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <nav className="mt-3 hidden border-b border-[#DCE6F2] bg-white px-4 py-2 sm:px-6 md:block" aria-label="Facilities sections">
          <div className="mx-auto max-w-[1180px]">
            <ul className="m-0 flex list-none flex-wrap items-center justify-start gap-2 p-0">
              {sectionNav.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} aria-current={activeNav === id ? "location" : undefined} onClick={(event) => navigateToSection(event, id)} className={`flex min-h-[38px] items-center justify-center rounded-full px-4 py-2 text-center text-[13px] leading-snug font-medium tracking-normal normal-case transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14284E] ${activeNav === id ? "bg-[#FFB703] text-[#14284E]" : "bg-[#E0F1FF] text-[#14284E] hover:bg-[#d1e9fc]"}`}>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <section id="facilities-new-overview" className={`${sectionClass} bg-white`} aria-labelledby="facilities-new-overview-title">
        <div className={containerClass}>
          <h2 id="facilities-new-overview-title" className={sectionHeadingClass}>About Our <span className="text-[#FFB703]">Campus Facilities</span></h2>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:gap-10">
            <div className="space-y-4 text-justify">
              <p className={paragraphClass}>Shri Ramswaroop Memorial University (SRMU), located on Lucknow–Deva Road, Uttar Pradesh, offers modern classrooms, specialized laboratories, seminar halls, library resources, healthcare, transport, sports, and hostel facilities. The campus supports academic excellence, practical learning, research, recreation, and overall student development.</p>
              <p className={paragraphClass}>SRMU's campus infrastructure comprises dedicated academic blocks, administrative facilities, classrooms, laboratories, workshops, seminar halls, libraries, and student amenities. These facilities support teaching, research, practical education, and extracurricular engagement across multiple disciplines.</p>
              <p className={paragraphClass}>The campus is organized to provide students with access to the academic and support facilities required throughout their educational journey.</p>
            </div>
            <figure className="relative m-0 overflow-hidden rounded-2xl border border-[#DCE6F2] bg-white shadow-[0_2px_12px_rgba(15,31,61,0.08)]">
              <img className="aspect-[16/10] w-full object-cover" src={computerCentresImage} alt="Students using computers in an SRMU computer centre" loading="lazy" decoding="async" />
              <figcaption className="border-t-[4px] border-[#FFB703] bg-[#14284E] px-4 py-3 text-sm font-semibold text-white">The campus supports academic excellence, practical learning, research, recreation, and overall student development.</figcaption>
            </figure>
          </div>
          <ul className="mt-6 grid list-none grid-cols-1 gap-x-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {overviewFacts.map((fact, index) => {
              const heading = overviewFactHeadings[index] ?? "";
              const FactIcon = overviewFactIcons[index] ?? FileText;
              return (
                <li key={fact} className={"flex min-w-0 items-start gap-4 border-[#DCE6F2] " + (overviewFactPositions[index] ?? "py-3 sm:py-4")}>
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#FFF0B3] text-[#14284E] sm:size-16" aria-hidden="true">
                    <FactIcon size={31} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 text-[#405575]">
                    <strong className="block text-[15px] leading-snug font-bold text-[#14284E] sm:text-base">{heading}</strong>
                    <span className="my-2 block h-[3px] w-8 rounded-full bg-[#FFB703]" aria-hidden="true" />
                    <span className="block text-sm leading-relaxed">{fact.slice(heading.length)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Section id="facilities-new-blocks" title={<>Academic <span className="text-[#FFB703]">Blocks</span></>} tone="pale">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {facilitiesNewBlocks.map((block, index) => (
            <ContentCard key={block.id} title={block.title} image={block.image} imageAlt={`${block.title} building`}>
              <p>{blockDescriptions[index]}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section id="facilities-new-laboratories" title={<>Laboratories and <span className="text-[#FFB703]">Practical Learning Facilities</span></>} tone="navy">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {laboratoryCards.map((item) => (
            <ContentCard key={item.title} title={item.title} image={item.image} imageAlt={`${item.title} at SRMU`}>
              <p>{item.text}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section id="facilities-new-seminar-halls" title={<>Seminar Halls and <span className="text-[#FFB703]">Auditoriums</span></>} tone="pale">
        <p className="mb-5 w-full text-[15px] leading-relaxed text-[#405575] sm:text-base">SRMU's seminar halls and auditoriums provide dedicated spaces for academic discussions, guest lectures, conferences, workshops, presentations, expert interactions, and university events.</p>
        <figure className="m-0 overflow-hidden rounded-2xl border border-[#D5E5F4] bg-[#14284E] shadow-[0_12px_30px_rgba(20,40,78,0.16)]">
          <img src={seminarHallsImage} alt="Seminar hall and auditorium facilities at SRMU" loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover sm:aspect-[16/6]" />
        </figure>
      </Section>

      <Section id="facilities-new-healthcare" title={<>Healthcare and <span className="text-[#FFB703]">Medical Facilities</span></>} tone="pale">
        <ContentCard title="Medical Facilities" image={medicalFacilityImage} imageAlt="Medical facility at SRMU">
          <p>The campus's healthcare arrangements help students access assistance when required and support a learning environment that considers physical well-being alongside academic development. Students should contact the university's designated medical facility or administration for information about available services, operating hours, and emergency procedures.</p>
        </ContentCard>
      </Section>

      <Section id="facilities-new-transport" title={<>Bus Routes and Timings, <span className="text-[#FFB703]">Transport Fees</span></>} tone="white">
        <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          <div className="space-y-4">
            <p className={paragraphClass}>SRMU buses connect the campus with designated pickup points. Students can consult the official transportation page for published routes, pickup locations, and departure timings.</p>
            <p className={paragraphClass}>Transportation fees may depend on the applicable route and university fee schedule. Students and parents should confirm current charges, route availability, pickup locations, and payment procedures with the university before opting for the service.</p>
            <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#FFB703] px-5 py-3 text-sm font-bold text-[#14284E] transition-colors hover:bg-[#FFC642] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14284E]" href="https://srmu.ac.in/transportation" target="_blank" rel="noreferrer">
              View Transport Routes <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4" role="group" aria-label="Photos of SRMU campus buses">
            <figure className="relative m-0 min-w-0 overflow-hidden rounded-2xl border border-[#DCE6F2] bg-[#14284E] shadow-[0_8px_24px_rgba(20,40,78,0.12)]">
              <img src={campusBus} alt="SRMU campus bus parked beside an academic building" width={5568} height={3712} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091C40]/90 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-white sm:px-4 sm:pb-4 sm:text-sm">Campus transport</figcaption>
            </figure>
            <figure className="relative m-0 min-w-0 overflow-hidden rounded-2xl border border-[#DCE6F2] bg-[#14284E] shadow-[0_8px_24px_rgba(20,40,78,0.12)]">
              <img src={campusBusFleet} alt="A line of SRMU buses ready for campus transport" width={5472} height={3648} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091C40]/90 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-white sm:px-4 sm:pb-4 sm:text-sm">SRMU bus fleet</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section id="facilities-new-sports" title={<>Sports and <span className="text-[#FFB703]">Fitness Facilities</span></>} tone="navy">
        <p className="mb-6 text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base">SRMU provides sports and recreational facilities that encourage physical fitness, teamwork, discipline, and participation in campus activities.</p>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          <div className="order-2 space-y-4 lg:order-1">
            <article className="rounded-2xl border border-white/15 bg-white p-5 text-[#14284E] shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full bg-[#FFB703]" aria-hidden="true" />
                <h3 className="text-lg font-bold font-display sm:text-xl">Published Sports Facilities Include:</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Cricket", "Football", "Basketball", "Volleyball", "Tennis", "Badminton"].map((sport) => (
                  <span key={sport} className="rounded-full border border-[#D5E5F4] bg-[#E0F1FF] px-3.5 py-2 text-sm font-semibold text-[#14284E]">{sport}</span>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-white/15 bg-white p-5 text-[#14284E] shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full bg-[#35A6D7]" aria-hidden="true" />
                <h3 className="text-lg font-bold font-display sm:text-xl">Indoor Recreational Activities</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[#405575] sm:text-[15px]">Students can participate in indoor recreational activities, including chess and carrom. The university also lists a gymnasium among its sports and fitness facilities.</p>
              <div className="flex flex-wrap gap-2">
                {["Chess", "Carrom", "Gymnasium"].map((sport) => (
                  <span key={sport} className="rounded-full border border-[#D5E5F4] bg-[#E0F1FF] px-3.5 py-2 text-sm font-semibold text-[#14284E]">{sport}</span>
                ))}
              </div>
            </article>
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <SportsCarousel images={facilitiesNewSportsImages} />
          </div>
        </div>
        <div className="mt-6 w-full space-y-4 border-t border-white/20 pt-5">
          <p className="w-full text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base">Sports and fitness activities provide opportunities for students to develop coordination, perseverance, teamwork, and a healthy balance between academic and recreational commitments. The availability of specific courts, equipment, and activities may depend on campus arrangements and schedules.</p>
          {/* <p className="w-full text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base"></p> */}
        </div>
      </Section>

      <FacilitiesNewLibrary />

      <Section id="facilities-new-banking" title={<>Banking and ATM <span className="text-[#FFB703]">Facilities</span></>} tone="white">
        <ContentCard title="">
          <p>Banking facilities help students manage routine financial requirements during their time at the university. These facilities can support everyday banking needs, including access to cash and other services offered by the relevant banking provider.</p>
        </ContentCard>
      </Section>

      <section id="facilities-new-hostels" className={sectionClass + " relative isolate overflow-hidden bg-[linear-gradient(115deg,#F3F9FE_0%,#EAF5FE_52%,#F6FAFE_100%)] lg:[&_p]:text-justify"} aria-labelledby="facilities-new-hostels-title">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <span className="absolute -top-16 -left-16 hidden size-44 rounded-full bg-[#FFB703]/30 sm:block" />
          <span className="absolute -right-20 -bottom-24 size-64 rounded-full bg-[#35A6D7]/20" />
        </div>

        <div className={containerClass + " relative z-10"}>
          <header className="mb-5 sm:mb-6">
            <div className="w-full">
              <h2 id="facilities-new-hostels-title" className={sectionHeadingClass}>Hostel Facilities <span className="text-[#FFB703]">at SRMU</span></h2>
              <p className={paragraphClass}>{facilitiesNewPageCopy.hostels.introduction}</p>
            </div>
          </header>

          <div className="grid gap-4 xl:grid-cols-2">
            {hostelImages.map((hostel, index) => (
              <article key={hostel.title} className="grid min-w-0 overflow-hidden rounded-xl border border-[#D9E9F7] bg-white/45 shadow-[0_8px_24px_rgba(20,40,78,0.04)] sm:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <figure className="relative m-0 min-w-0 overflow-hidden bg-[#D9EDFF]">
                  <img src={hostel.image} alt={hostel.title + " building"} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full sm:min-h-[250px] sm:rounded-r-[42%]" />
                  <span className={"pointer-events-none absolute inset-y-[-4%] right-[-8%] hidden w-20 rounded-[50%] border-r-[8px] sm:block " + (index === 0 ? "border-[#FFB703]" : "border-[#35A6D7]")} aria-hidden="true" />
                </figure>
                <div className="flex min-w-0 flex-col items-start justify-center px-5 py-5 sm:px-5 sm:py-6 lg:px-6">
                  <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-[#35A6D7] uppercase">{index === 0 ? "Girls Hostel" : "Boys Hostel"}</p>
                  <h3 className="mb-2 text-[20px] leading-tight font-bold font-display text-[#14284E] sm:text-[23px]">{hostel.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#405575] sm:text-[15px]">{index === 0
                    ? "Gargi Girls Hostel provides residential accommodation for eligible female students of SRMU. Its residential environment is intended to support students' academic routines, everyday needs, and participation in university life."
                    : "Tygore Boys Hostel provides residential accommodation for eligible male students of SRMU. The hostel supports students who prefer to live on campus while pursuing their academic programs."}</p>
                  <a href="#facilities-new-hostel-amenities" className="mt-3 inline-flex items-center gap-2 border-b-2 border-[#FFB703] pb-1 text-sm font-bold text-[#14284E] transition-colors hover:text-[#0F4A85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14284E]">
                    Know More <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div id="facilities-new-hostel-amenities" className="mt-7 border-t border-[#CFE2F2] pt-6 sm:mt-8 sm:pt-7">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,3.1fr)] xl:gap-8">
              <div>
                <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-[#35A6D7] uppercase">Hostel Facilities</p>
                <h3 className="text-[20px] leading-tight font-bold font-display text-[#14284E] sm:text-[26px]">Everything for a Comfortable Stay</h3>
              </div>
              <div className="grid gap-x-5 sm:grid-cols-2 xl:grid-cols-3">
                {hostelAmenityGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className={groupIndex > 0 ? "border-[#CFE2F2] sm:border-l sm:pl-5" : ""}>
                    {group.map(({ description, index: amenityIndex }) => {
                      const separator = description.indexOf(":");
                      const amenityName = separator >= 0 ? description.slice(0, separator) : description;
                      const amenityText = separator >= 0 ? description.slice(separator + 1).trim() : "";
                      const AmenityIcon = hostelAmenityIcons[amenityIndex] ?? FileText;
                      return (
                        <article key={description} className="flex min-w-0 items-start gap-3 border-b border-[#DCEAF6] py-3 last:border-b-0">
                          <span className={"grid size-10 shrink-0 place-items-center rounded-full text-white " + hostelAmenityIconColors[amenityIndex % hostelAmenityIconColors.length]} aria-hidden="true">
                            <AmenityIcon size={19} strokeWidth={1.8} />
                          </span>
                          <p className="min-w-0 text-[12px] leading-[1.4] text-[#405575] sm:text-[13px]">
                            <strong className="mb-0.5 block font-bold text-[#14284E]">{amenityName}</strong>
                            <span>{amenityText}</span>
                          </p>
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-5 border-l-4 border-[#FFB703] pl-4 text-[13px] leading-relaxed text-[#405575]">Room categories, AC availability, laundry arrangements, charges, and other accommodation conditions should be confirmed with the hostel administration.</p>
          </div>
        </div>
      </section>

      <Section id="facilities-new-residential-committees" title={<>Hostel Management and <span className="text-[#FFB703]">Student Committees</span></>} tone="navy">
        <p className={`${darkParagraphClass} mb-3`}>SRMU's hostel administration includes a chief warden, wardens, and supporting residential staff. The university also describes student participation through committees that support hostel administration and resident engagement.</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hostelCommittees.map((committee) => <div key={committee} className="rounded-xl border border-white/20 bg-[#1B355F] px-4 py-3 text-sm font-medium text-white shadow-sm sm:text-[15px]">{committee}</div>)}
        </div>
      </Section>

      <section id="facilities-new-outings" className="scroll-mt-24 border-b border-[#DCE6F2] bg-[linear-gradient(110deg,#EAF6FF_0%,#DDEFFF_52%,#EAF6FF_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:py-14" aria-label="Hostel transport, fees, and admission">
        <div className={`${containerClass} grid gap-y-14 lg:grid-cols-2 lg:gap-x-16`}>
          <article className="min-w-0">
            <div className="mb-4 grid size-[72px] place-items-center rounded-full bg-[#D9EDFF] text-[#14284E] sm:mb-5 sm:size-[82px]" aria-hidden="true">
              <Bus size={40} strokeWidth={1.8} />
            </div>
            <h2 id="facilities-new-hostel-transport-title" className={sectionHeadingClass}>
              Hostel Transport <span className="text-[#FFB703]">for Residents</span>
            </h2>
            <div className="my-5 h-1 w-20 bg-[#FFB703] sm:my-6 sm:h-[6px]" aria-hidden="true" />
            <p className="text-left text-[15px] leading-relaxed text-[#405575] sm:text-base">{facilitiesNewPageCopy.hostels.outings}</p>
          </article>

          <article id="facilities-new-hostel-fees" className="min-w-0">
            <div className="mb-4 grid size-[72px] place-items-center rounded-full bg-[#FFF1C7] text-[#14284E] sm:mb-5 sm:size-[82px]" aria-hidden="true">
              <FileText size={40} strokeWidth={1.8} />
            </div>
            <h2 id="facilities-new-hostel-fees-title" className={sectionHeadingClass}>
              Hostel Fees <span className="text-[#FFB703]">and Admission</span>
            </h2>
            <div className="my-5 h-1 w-20 bg-[#35A6D7] sm:my-6 sm:h-[6px]" aria-hidden="true" />
            <p className="text-left text-[15px] leading-relaxed text-[#405575] sm:text-base">{facilitiesNewPageCopy.hostels.fees}</p>
          </article>
        </div>
      </section>

      <FacilitiesNewDining images={diningImages} description={facilitiesNewPageCopy.dining} />

      <section id="facilities-new-campus-life" className={`${sectionClass} relative isolate overflow-hidden border-t-4 border-t-[#14284E] border-b-[8px] border-b-[#14284E] bg-[#FFB703]`} aria-labelledby="facilities-new-campus-life-title">
        <div className="pointer-events-none absolute -left-28 bottom-[-7rem] -z-0 size-72 rounded-full border border-white/90 sm:size-96" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 bottom-[-5.5rem] -z-0 size-56 rounded-full bg-white/10 sm:size-72" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 bottom-[-9rem] -z-0 size-80 rounded-full border border-white/90 sm:size-[28rem]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-[-7rem] -z-0 size-64 rounded-full bg-white/15 sm:size-96" aria-hidden="true" />
        <div className="pointer-events-none absolute top-8 right-[8%] z-0 hidden grid-cols-4 gap-3 sm:grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, dot) => <span key={dot} className="size-1.5 rounded-full bg-white/75" />)}
        </div>
        <div className="pointer-events-none absolute bottom-6 left-[7%] z-0 hidden grid-cols-3 gap-3 sm:grid" aria-hidden="true">
          {Array.from({ length: 6 }, (_, dot) => <span key={dot} className="size-1.5 rounded-full bg-white/65" />)}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6">
          <h2 id="facilities-new-campus-life-title" className={`${sectionHeadingClass} max-w-none xl:whitespace-nowrap`}>
            Green Campus and <span className="text-white [text-shadow:0_1px_3px_rgba(20,40,78,0.55)]">Student Recreation</span>
          </h2>
          <div className="mt-4 w-full space-y-2 text-[15px] leading-relaxed font-medium text-[#14284E] sm:text-base">
            <p>SRMU's green campus, landscaped spaces, and recreational areas provide students with a refreshing environment to relax and connect with peers. Sports and student activity spaces further enrich campus life beyond academics.</p>
            <p>At SRMU, every space is designed to inspire learning, encourage exploration, and make student life more rewarding. From hands-on learning and research to sports, recreation, and comfortable hostel living, students find the facilities and opportunities to learn, grow, and create lasting memories.</p>
          </div>
          <a className="mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#14284E] px-7 py-3 text-sm font-bold tracking-wide text-white uppercase shadow-[0_8px_18px_rgba(20,40,78,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#203A68] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white" href="#facilities-new-overview">
            Explore campus <ArrowRight size={18} aria-hidden="true" />
          </a>

          <div className="mt-7 grid max-w-[900px] grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
            {campusLifeHighlights.map(({ label, icon: Icon, color }, index) => (
              <div key={label} className={`flex flex-col items-center px-3 text-center ${index > 0 ? "sm:border-l sm:border-[#14284E]/40" : ""}`}>
                <span className={`mb-2 grid size-16 place-items-center rounded-full shadow-[0_5px_14px_rgba(20,40,78,0.12)] sm:size-[72px] ${color}`} aria-hidden="true">
                  <Icon size={31} strokeWidth={1.8} />
                </span>
                <span className="max-w-[120px] text-sm leading-tight font-bold text-[#14284E] sm:text-[15px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
