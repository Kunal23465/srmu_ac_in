import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Banknote, BedDouble, BookOpen, BusFront, Camera, Coffee, Cross, Droplets, Dumbbell, Fingerprint, FlaskConical, HeartPulse, Landmark, Leaf, Monitor, Presentation, Shield, Trees, UsersRound, Volleyball, WashingMachine, Wifi, Zap } from "lucide-react";
import { facilitiesNewBlocks, facilitiesNewPageCopy, facilitiesNewSportsImages } from "../../data/campus-life/facilities/facilities-new-data";
import campusBus from "../../assets/images/bus-images/Bus.webp";
import campusBusesImage from "../../assets/images/new-facilities/SRMU-Buses.webp";
import libraryBannerImage from "../../assets/images/new-facilities/banner/3.webp";
import laboratoriesBannerImage from "../../assets/images/new-facilities/banner/4.webp";
import sportsBannerImage from "../../assets/images/new-facilities/banner/5.webp";
import hostelsBannerImage from "../../assets/images/new-facilities/banner/6.webp";
import transportBannerImage from "../../assets/images/new-facilities/banner/7.webp";
import healthcareBannerImage from "../../assets/images/new-facilities/banner/8.webp";
import seminarHallsBannerImage from "../../assets/images/new-facilities/banner/9.webp";
import cafeteriaBannerImage from "../../assets/images/new-facilities/banner/10.webp";
import atmBoothImage from "../../assets/images/new-facilities/ATM-Booth.webp";
import hostelAmenitiesRoomImage from "../../assets/images/new-facilities/image1.webp";
import hostelAmenitiesStudentsImage from "../../assets/images/new-facilities/Students-Studying-Together-on-Campus.webp";
import hostelAmenitiesMobileBackground from "../../assets/images/new-facilities/new-mobile-view.png";
import FacilitiesNewLibrary from "./FacilitiesNewLibrary";
import FacilitiesNewDining from "./FacilitiesNewDining";
import heroStyles from "./FacilitiesNewHero.module.css";
import CustomDepartmentSlider from "../../utils/custom/CustomDepartmentSlider";
import canteen1 from "../../assets/images/new-canteen/canteen-1.webp";
import canteen2 from "../../assets/images/new-canteen/canteen-2.webp";
import canteen3 from "../../assets/images/new-canteen/canteen-3.webp";
import canteen4 from "../../assets/images/new-canteen/canteen-4.webp";
import canteen5 from "../../assets/images/new-canteen/canteen-5.webp";
import canteen6 from "../../assets/images/new-canteen/canteen-6.webp";
import campusTeaBreakImage from "../../assets/images/new-facilities/Campus-Tea-Break-at-SRMU.webp";
import collegeCanteenImage from "../../assets/images/new-facilities/College-Canteen-Nescafe-Maggi-Stall.webp";
import classroomLectureImage from "../../assets/images/new-facilities/RAMSWAROOP-Classroom-Lecture.webp";
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
import herbalGardenImage from "../../assets/images/new-facilities/Herbal-garden.png";
import languageLabImage from "../../assets/images/new-labo/language-lab.webp";

const containerClass = "mx-auto w-full max-w-[1200px]";
const sectionHeadingClass = "text-[clamp(30px,3.8vw,48px)] leading-[1.12] font-semibold font-display tracking-tight";
const laboratorySliderBreakpoints = { desktop: 3, tablet: 2, mobile: 1 };
const diningImages = [
  // { src: canteen1, caption: "Students at the campus canteen counter" },
  { src: canteen2, caption: "Students sharing a meal in the canteen" },
  { src: canteen3, caption: "Students gathering in the cafeteria" },
  { src: canteen4, caption: "Students being served in the dining hall" },
  { src: canteen5, caption: "Campus café and eating joint" },
  { src: canteen6, caption: "Students dining in the campus canteen" },
  { src: campusTeaBreakImage, caption: "Students taking a break on campus" },
  { src: collegeCanteenImage, caption: "Nescafé and Maggi stall at the college canteen", objectPosition: "top center" },
];
const campusLifeHighlights = [
  { label: "Green Campus", icon: Leaf },
  { label: "Landscaped Spaces", icon: Trees },
  { label: "Sports & Recreation", icon: Dumbbell },
  { label: "Vibrant Student Life", icon: UsersRound },
];

const sectionNav = [
  { id: "facilities-new-laboratories", label: "Laboratories", image: laboratoriesBannerImage, icon: FlaskConical },
  { id: "facilities-new-library", label: "Library", image: libraryBannerImage, icon: BookOpen },
  { id: "facilities-new-hostels", label: "Hostels", image: hostelsBannerImage, icon: BedDouble },
  { id: "facilities-new-sports", label: "Sports", image: sportsBannerImage, icon: Volleyball },
  { id: "facilities-new-healthcare", label: "Healthcare", image: healthcareBannerImage, icon: Cross },
  { id: "facilities-new-transport", label: "Transport", image: transportBannerImage, icon: BusFront },
  { id: "facilities-new-seminar-halls", label: "Seminar halls", image: seminarHallsBannerImage, icon: Presentation },
  { id: "facilities-new-dining", label: "Cafeteria", image: cafeteriaBannerImage, icon: Coffee },
];
// const facilitiesTickerItems = ["Smart classrooms", "Specialized laboratories", "Computer centers", "Central library", "Seminar halls", "Healthcare", "Transport", "Sports and fitness", "Hostels", "Cafeteria"];

const overviewFacts = [
  "60+ specialized laboratories supporting practical learning across disciplines.",
  "1,000+ high-end computer systems, as listed on the university's official Facilities page.",
  "Dedicated academic blocks for different institutes and departments.",
  "Seminar halls and auditoriums for lectures, workshops, conferences, and university events.",
  "Specialized workshops, research facilities, and discipline-specific learning spaces.",
];
const overviewFactHeadings = [
  "60+ specialized laboratories",
  "1,000+ high-end computer systems,",
  "Dedicated academic blocks",
  "Seminar halls and auditoriums",
  "Specialized workshops, research facilities,",
];
const overviewFactIcons = [FlaskConical, Monitor, Landmark, UsersRound, BookOpen];

const blockDescriptions = [
  "Academic Block accommodates departments and institutes associated with civil engineering, mechanical engineering, electrical engineering, chemical sciences, natural sciences and humanities, biosciences, and technology. The block also features auditoriums and specialized facilities, including the Centre for Energy Conservation.",
  "Academic Block houses academic departments associated with computer science, computer applications, physical sciences, and mathematical sciences. It also supports research, consultancy, and other academic activities.",
  "Academic Block accommodates institutes associated with pharmacy, architecture and planning, and education and research, providing dedicated spaces for teaching and discipline-specific academic activities.",
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
    image: herbalGardenImage,
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

const hostelAmenityDescriptions = [
  "AC Room Options: Air-conditioned accommodation options, subject to the hostel's current room categories and availability.",
  "Laundry Facilities: Laundry arrangements for students' everyday clothing and personal needs, subject to the services currently provided.",
  "24-Hour Power Backup: Power backup arrangements to support essential residential facilities.",
  "Medical Aid: Medical assistance provisions for hostel residents.",
  "Wi-Fi Facility: Internet connectivity to support online learning, research, and communication.",
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
  "ATM and Banking Facilities: Access to banking amenities listed by the university.",
];
const hostelAmenityGroups = [hostelAmenityDescriptions.slice(0, 5), hostelAmenityDescriptions.slice(5, 10), hostelAmenityDescriptions.slice(10)];
const hostelAmenityIcons = [BedDouble, WashingMachine, Zap, HeartPulse, Wifi, Camera, Shield, Fingerprint, UsersRound, Droplets, UsersRound, BookOpen, Dumbbell, Dumbbell, UsersRound, Landmark];
const hostelAmenityIconColors = ["bg-[#14284E] text-white", "bg-[#35A6D7] text-white", "bg-[#FFB703] text-[#14284E]", "bg-[#D62C2B] text-white"];

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

function SportsPhoto({ image }: { image: { src: string; caption: string } }) {
  return (
    <figure className="relative m-0 min-h-[280px] overflow-hidden bg-[#FFB70F] lg:h-full lg:min-h-[520px] lg:[clip-path:polygon(34px_0,100%_0,100%_100%,0_100%)]">
      <img src={image.src} alt={`${image.caption} at SRMU`} width={900} height={560} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(62px_0,100%_0,100%_100%,0_100%)]" />
    </figure>
  );
}

export default function FacilitiesNew() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeNav, setActiveNav] = useState("");
  const [selectedHostel, setSelectedHostel] = useState(0);
  const [heroBackgrounds, setHeroBackgrounds] = useState<[string, string]>([libraryBannerImage, libraryBannerImage]);
  const [activeHeroBackground, setActiveHeroBackground] = useState(0);
  const hostelImages = facilitiesNewPageCopy.hostels.residences;
  const selectedHostelData = hostelImages[selectedHostel] ?? hostelImages[0];

  useEffect(() => {
    const page = pageRef.current;
    const hero = heroRef.current;
    if (!page || !hero) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add({
      desktop: "(min-width: 1024px)",
      mobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      if (context.conditions?.reduceMotion) return;

      hero.querySelectorAll<HTMLElement>("[data-facilities-hero-reveal]").forEach((element, index) => {
        gsap.fromTo(element, { y: context.conditions?.desktop ? 45 + index * 30 : 24 }, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 98%",
            end: "top 58%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });

      // The reference's cards rise into place with scroll progress.
      page.querySelectorAll<HTMLElement>("h2, [data-facilities-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: context.conditions?.desktop ? 60 : 20 }, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 98%",
            end: "top 65%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.fromTo(hero.querySelectorAll(`.${heroStyles.navItem}`), { opacity: 0.35, y: 16 }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: hero.querySelector(`.${heroStyles.navigation}`),
          start: "top 95%",
          once: true,
        },
      });

      if (context.conditions?.desktop) {
        gsap.to(hero.querySelector(`.${heroStyles.backgrounds}`), {
          yPercent: 5,
          scale: 1.12,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.8 },
        });

        page.querySelectorAll<HTMLImageElement>("figure > img, #facilities-new-dining-gallery > img").forEach((image) => {
          gsap.fromTo(image, { scale: 1.06 }, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
      }
    }, page);

    return () => media.revert();
  }, []);

  const showHeroBackground = (image: string) => {
    if (heroBackgrounds[activeHeroBackground] === image) return;
    const nextBackground = 1 - activeHeroBackground;
    setHeroBackgrounds((current) => {
      const updated: [string, string] = [...current];
      updated[nextBackground] = image;
      return updated;
    });
    setActiveHeroBackground(nextBackground);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      let current = "";
      let closestTop = -Infinity;
      for (const item of sectionNav) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top;
        if (top <= 128 && top > closestTop) {
          current = item.id;
          closestTop = top;
        }
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
    <div ref={pageRef} className="facilities-new-page w-full max-w-full overflow-x-clip bg-white text-[#27324B] antialiased lg:[&_p]:text-justify [&_ul]:!list-none [&_ol]:!list-none">
      <section ref={heroRef} className={heroStyles.hero} aria-labelledby="facilities-new-hero-title">
        <div className={heroStyles.stage}>
          <div className={heroStyles.backgrounds} aria-hidden="true">
            {heroBackgrounds.map((image, index) => (
              <img key={index} src={image} alt="" className={heroStyles.backgroundImage} data-visible={activeHeroBackground === index} />
            ))}
          </div>
          <div className={heroStyles.shade} aria-hidden="true" />
          <span className={heroStyles.cornerArc} aria-hidden="true" />
          <span className={heroStyles.heroDots} aria-hidden="true" />
          <div className={heroStyles.content} data-facilities-hero-reveal>
            <h1 id="facilities-new-hero-title" className={`${heroStyles.title} font-display`}>Campus <span>Facilities</span></h1>
            <a href="/admission-enquiry" className={heroStyles.cta}>
              Plan Your Next Step <ArrowRight size={21} aria-hidden="true" />
            </a>
          </div>
        </div>
        <svg className={heroStyles.waves} viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 130C180 215 280 60 420 126S680 254 890 170S1240 12 1440 34V220H0Z" fill="#21a5db" fillOpacity="0.12" />
          <path d="M0 172C245 240 345 108 520 163S900 247 1130 154S1350 64 1440 94V220H0Z" fill="#e0f1ff" />
        </svg>
        <span className={heroStyles.footerDots} aria-hidden="true" />
        <nav
          className={heroStyles.navigation}
          data-facilities-hero-reveal
          aria-label="Explore facilities sections"
          onMouseLeave={() => showHeroBackground(libraryBannerImage)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) showHeroBackground(libraryBannerImage);
          }}
        >
          {sectionNav.map(({ id, label, image, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={heroStyles.navItem}
              aria-current={activeNav === id ? "location" : undefined}
              onClick={(event) => navigateToSection(event, id)}
              onMouseEnter={() => showHeroBackground(image)}
              onFocus={() => showHeroBackground(image)}
            >
              <span className={heroStyles.iconCircle}><Icon size={33} strokeWidth={1.7} aria-hidden="true" /></span>
              <span className={`${heroStyles.navLabel} font-display`}>{label}</span>
            </a>
          ))}
        </nav>
      </section>

      {/* <div className="group overflow-hidden border-b border-white/10 bg-[#14284E] py-4 text-white" aria-label="Campus facilities">
<div className="flex w-max animate-facilities-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
{[0, 1].map((copy) => <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center font-display text-sm font-semibold sm:text-base">
{facilitiesTickerItems.map((item) => <span key={item} className="inline-flex items-center gap-8 px-5 sm:px-8">{item}<i className="size-[11px] rotate-45 bg-[#FFB70F]" aria-hidden="true" /></span>)}
</div>)}
</div>
</div> */}

      <section id="facilities-new-overview" className="scroll-mt-24 px-4 py-6 sm:px-6 sm:py-8 lg:py-10" aria-labelledby="facilities-new-overview-title">
        <div className={containerClass}>
          <h2 id="facilities-new-overview-title" className={`${sectionHeadingClass} text-[#14284E]`}>About Our <span className="text-[#FFB70F]">Campus Facilities</span></h2>
          <div className="mt-5 grid items-center gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:gap-10">
            <div data-facilities-reveal className="text-[15px] leading-[1.75] text-[#5B6885] sm:text-base">
              <p>Shri Ramswaroop Memorial University (SRMU), located on Lucknow–Deva Road, Uttar Pradesh, offers modern classrooms, specialized laboratories, seminar halls, library resources, healthcare, transport, sports, and hostel facilities. The campus supports academic excellence, practical learning, research, recreation, and overall student development.</p>
              <p className="mt-3">SRMU's campus infrastructure comprises dedicated academic blocks, administrative facilities, classrooms, laboratories, workshops, seminar halls, libraries, and student amenities. These facilities support teaching, research, practical education, and extracurricular engagement across multiple disciplines.</p>
              <p className="mt-3">The campus is organized to provide students with access to the academic and support facilities required throughout their educational journey.</p>
            </div>
            <figure className="relative m-0 overflow-hidden rounded-2xl border border-[#DCE6F2] bg-white shadow-[0_8px_24px_rgba(15,31,61,0.08)]">
              <img src={classroomLectureImage} alt="Students attending a classroom lecture at SRMU" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
            </figure>
          </div>
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {overviewFacts.map((fact, index) => {
              const heading = overviewFactHeadings[index] ?? "Campus facilities";
              const Icon = overviewFactIcons[index] ?? BookOpen;
              return <div key={fact} data-facilities-reveal className={`flex gap-4 border-t border-[#DCE6F2] py-5 ${index % 3 !== 0 ? "lg:border-l lg:pl-6" : "lg:pr-6"}`}>
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#FFF0B3] text-[#14284E]" aria-hidden="true"><Icon size={29} strokeWidth={1.8} /></span>
                <div>
                  <dt className="font-display text-base font-semibold text-[#14284E]">{heading}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#5B6885]">{fact.slice(heading.length).trim()}</dd>
                </div>
              </div>;
            })}
          </dl>
        </div>
      </section>

      <section id="facilities-new-blocks" className="scroll-mt-24 bg-[#e0f1ff] px-4 py-6 sm:px-6 sm:py-8 lg:py-10" aria-labelledby="facilities-new-blocks-title">
        <div className={containerClass}>
          <h2 id="facilities-new-blocks-title" className={`${sectionHeadingClass} text-[#14284E]`}>Academic <span className="text-[#FFB70F]">Blocks</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <CustomDepartmentSlider
            data={facilitiesNewBlocks}
            breakpoints={{ desktop: 1, tablet: 1, mobile: 1 }}
            sectionClassName="py-0 sm:hidden"
            containerClassName="px-0"
            renderCard={({ item, index }) => (
              <article className="min-w-0">
                <img src={item.image} alt={`${item.title} building`} loading="lazy" decoding="async" className="aspect-[4/3] w-full border-b-[8px] border-[#FFB70F] object-cover" />
                <h3 className="mt-5 font-display text-xl font-semibold text-[#14284E]">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5B6885]">{blockDescriptions[index]}</p>
              </article>
            )}
          />
          <div className="hidden gap-x-8 gap-y-12 sm:grid lg:grid-cols-3 lg:gap-x-12">
            {facilitiesNewBlocks.map((block, index) => (
              <article key={block.id} data-facilities-reveal className="min-w-0">
                <img src={block.image} alt={`${block.title} building`} loading="lazy" decoding="async" className="aspect-[4/3] w-full border-b-[8px] border-[#FFB70F] object-cover" />
                <h3 className="mt-5 font-display text-xl font-semibold text-[#14284E]">{block.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5B6885]">{blockDescriptions[index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities-new-laboratories" className="scroll-mt-24 px-4 py-6 sm:px-6 sm:py-8 lg:py-10" aria-labelledby="facilities-new-laboratories-title">
        <div className={containerClass}>
          <h2 id="facilities-new-laboratories-title" className={`${sectionHeadingClass} text-[#14284E]`}>Laboratories & <span className="text-[#FFB70F]">Practical Learning Facilities</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <CustomDepartmentSlider
            data={laboratoryCards}
            breakpoints={laboratorySliderBreakpoints}
            sectionClassName="py-0"
            containerClassName="px-0"
            renderCard={({ item }) => (
              <article className="border-t-[8px] border-[#FFB70F]">
                <img src={item.image} alt={`${item.title} at SRMU`} loading="lazy" decoding="async" draggable={false} className="aspect-[4/3] w-full object-cover" />
                <h3 className="mt-5 font-display text-xl font-semibold text-[#14284E]">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5B6885]">{item.text}</p>
              </article>
            )}
          />
        </div>
      </section>

      <section id="facilities-new-seminar-halls" className="scroll-mt-24 grid bg-[#14284E] text-white lg:grid-cols-2" aria-labelledby="facilities-new-seminar-halls-title">
        <figure className="relative m-0 min-h-[280px] overflow-hidden bg-[#FFB70F] lg:min-h-[520px] lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_34px)_100%,0_100%)]">
          <img src={seminarHallsImage} alt="Seminar hall and auditorium at SRMU" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_62px)_100%,0_100%)]" />
        </figure>
        <div className="flex flex-col justify-center px-4 py-6 sm:px-10 sm:py-8 lg:py-10 lg:pr-[max(40px,calc((100vw_-_1200px)/2))] lg:pl-10">
          <h2 id="facilities-new-seminar-halls-title" className={`${sectionHeadingClass} text-white`}>Seminar Halls <span className="text-[#FFB70F]">and Auditoriums</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <p className="max-w-[58ch] text-[15px] leading-[1.75] text-[#AEBBD8] sm:text-base">{facilitiesNewPageCopy.seminarHallsAndAuditoriums}</p>
        </div>
      </section>

      <section id="facilities-new-healthcare" className="scroll-mt-24 grid bg-[#e0f1ff] lg:grid-cols-2" aria-labelledby="facilities-new-healthcare-title">
        <div className="flex flex-col justify-center px-4 py-6 sm:px-10 sm:py-8 lg:py-10 lg:pl-[max(40px,calc((100vw_-_1200px)/2))] lg:pr-10">
          <h2 id="facilities-new-healthcare-title" className={`${sectionHeadingClass} text-[#14284E]`}>Healthcare and <span className="text-[#FFB70F]">Medical Facilities</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <p className="max-w-[58ch] text-[15px] leading-[1.75] text-[#5B6885] sm:text-base">The campus's healthcare arrangements help students access assistance when required and support a learning environment that considers physical well-being alongside academic development. Students should contact the university's designated medical facility or administration for information about available services, operating hours, and emergency procedures.</p>
        </div>
        <figure className="relative order-first m-0 min-h-[280px] overflow-hidden bg-[#FFB70F] sm:min-h-[360px] lg:order-none lg:min-h-[520px] lg:[clip-path:polygon(34px_0,100%_0,100%_100%,0_100%)]">
          <img src={medicalFacilityImage} alt="Medical facility at SRMU" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(62px_0,100%_0,100%_100%,0_100%)]" />
        </figure>
      </section>

      <section id="facilities-new-transport" className="relative z-10 scroll-mt-24 bg-[#FFB70F] px-4 py-6 sm:px-6 sm:py-8 lg:py-10" aria-labelledby="facilities-new-transport-title">
        <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14`}>
          <div>
            <h2 id="facilities-new-transport-title" className={`${sectionHeadingClass} text-[#14284E]`}>Transport Routes <span className="text-white">& Fee Structure</span></h2>
            <div className="my-5 h-[5px] w-16 bg-[#14284E] sm:my-6" aria-hidden="true" />
            <p className="text-[15px] leading-[1.75] text-[#2B3A5C] sm:text-base">SRMU buses connect the campus with designated pickup points. Students can consult the official transportation page for published routes, pickup locations, and departure timings.</p>
            <p className="mt-3 text-[15px] leading-[1.75] text-[#2B3A5C] sm:text-base">Transportation fees may depend on the applicable route and university fee schedule. Students and parents should confirm current charges, route availability, pickup locations, and payment procedures with the university before opting for the service.</p>
            <a className="mt-6 inline-flex h-12 w-[260px] max-w-full items-center justify-center gap-2 rounded-full border-2 border-[#14284E] bg-[#14284E] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#22407A] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#14284E]" href="https://srmu.ac.in/transportation" target="_blank" rel="noreferrer">View Transport Routes <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="relative m-0 aspect-[3/2] min-w-0 overflow-hidden border-[7px] border-white bg-white shadow-[0_16px_28px_rgba(20,40,78,0.32)] transition-transform duration-500 lg:rotate-[-2deg]">
            <img src={campusBusesImage} alt="SRMU campus buses" width={1536} height={1024} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
          </figure>
        </div>
      </section>

      <section id="facilities-new-sports" className="scroll-mt-24 grid bg-white text-[#14284E] lg:grid-cols-2" aria-labelledby="facilities-new-sports-title">
        <div className="flex flex-col justify-center px-4 py-6 sm:px-10 sm:py-8 lg:py-10 lg:pl-[max(40px,calc((100vw_-_1200px)/2))] lg:pr-10">
          <h2 id="facilities-new-sports-title" className={`${sectionHeadingClass} text-[#14284E]`}>Sports and <span className="text-[#FFB70F]">fitness facilities</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <p className="text-[15px] leading-[1.75] text-[#5B6885] sm:text-base">SRMU provides sports and recreational facilities that encourage physical fitness, teamwork, discipline, and participation in campus activities.</p>
          <h3 className="mt-6 font-display text-lg font-semibold text-[#14284E]">Sports facilities include</h3>
          <ul className="mt-3 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {["Cricket", "Football", "Basketball", "Volleyball", "Tennis", "Badminton"].map((sport) => <li key={sport} className="flex items-center gap-2 text-sm font-medium text-[#14284E]"><span className="size-[7px] shrink-0 rounded-full bg-[#FFB70F]" aria-hidden="true" />{sport}</li>)}
          </ul>
          <h3 className="mt-6 font-display text-lg font-semibold text-[#14284E]">Indoor recreational activities</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5B6885]">Indoor recreational activities include chess, carrom, table tennis, badminton, ludo, and yoga. The university also lists a gymnasium among its sports and fitness facilities.</p>
          <ul className="mt-3 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {["Chess", "Carrom", "Table Tennis", "Badminton", "Ludo", "Yoga", "Gymnasium"].map((sport) => <li key={sport} className="flex items-center gap-2 text-sm font-medium text-[#14284E]"><span className="size-[7px] shrink-0 rounded-full bg-[#FFB70F]" aria-hidden="true" />{sport}</li>)}
          </ul>
        </div>
        <div className="relative min-h-[280px] bg-[#FFB70F] sm:min-h-[360px] lg:min-h-[520px]">
          <SportsPhoto image={facilitiesNewSportsImages[0]} />
        </div>
      </section>

      {/* <section className="px-6 py-16 sm:py-20 lg:py-24" aria-label="Sports facilities information">
<div className={containerClass}>
<p className="max-w-[80ch] text-[15px] leading-[1.75] text-[#5B6885] sm:text-base">Sports and fitness activities provide opportunities for students to develop coordination, perseverance, teamwork, and a healthy balance between academic and recreational commitments. The availability of specific courts, equipment, and activities may depend on campus arrangements and schedules.</p>
</div>
</section> */}

      <FacilitiesNewLibrary />

      <section id="facilities-new-banking" className="scroll-mt-24 grid bg-white text-[#14284E] lg:min-h-[520px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]" aria-labelledby="facilities-new-banking-title">
        <figure className="relative order-2 m-0 min-h-[280px] overflow-hidden bg-[#14284E] lg:order-2 lg:min-h-[520px] lg:[clip-path:polygon(34px_0,100%_0,100%_100%,0_100%)]">
          <img src={atmBoothImage} alt="SRMU student using an ATM booth" width={1086} height={1448} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover object-top lg:object-[center_20%] lg:[clip-path:polygon(62px_0,100%_0,100%_100%,0_100%)]" />
        </figure>
        <div className="order-1 flex min-w-0 flex-col justify-center px-4 py-6 sm:px-10 sm:py-8 lg:order-1 lg:py-10 lg:pl-[max(40px,calc((100vw_-_1200px)/2))] lg:pr-10 xl:pr-12">
          <h2 id="facilities-new-banking-title" className={`${sectionHeadingClass} text-[#14284E]`}>Banking and <span className="text-[#FFB70F]">ATM facilities</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <p className="!text-left text-[15px] leading-[1.75] text-[#5B6885] sm:text-base">Banking facilities help students manage routine financial requirements during their time at the university. These facilities can support everyday banking needs, including access to cash and other services offered by the relevant banking provider.</p>
          {/* <div className="mt-5 grid gap-4 border-t border-[#E1E8F0] pt-4 sm:grid-cols-2 sm:gap-6"> */}
          {/* <div className="flex items-start gap-3">
<span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#FFF5D9] text-[#14284E]" aria-hidden="true"><Banknote size={23} strokeWidth={1.7} /></span>
<div>
<h3 className="font-display text-sm font-semibold text-[#14284E]">Access to cash</h3>
<p className="mt-1 !text-left text-sm leading-relaxed text-[#5B6885]">ATM facilities for everyday needs.</p>
</div>
</div> */}
          {/* <div className="flex items-start gap-3">
<span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#EFF4FC] text-[#14284E]" aria-hidden="true"><Landmark size={23} strokeWidth={1.7} /></span>
<div>
<h3 className="font-display text-sm font-semibold text-[#14284E]">Banking support</h3>
<p className="mt-1 !text-left text-sm leading-relaxed text-[#5B6885]">Services from the banking provider.</p>
</div>
</div> */}
          {/* </div> */}
        </div>
      </section>

      <section id="facilities-new-hostels" className="scroll-mt-24" aria-labelledby="facilities-new-hostels-title">
        <div className="grid w-full bg-[#e0f1ff] text-[#14284E] lg:min-h-[520px] lg:grid-cols-5">
          <div className="order-1 flex min-w-0 flex-col justify-center px-4 py-6 sm:px-10 sm:py-8 lg:col-start-3 lg:col-span-3 lg:order-2 lg:py-10 lg:pl-12 lg:pr-[max(40px,calc((100vw_-_1200px)/2))] xl:pl-16">
            <h2 id="facilities-new-hostels-title" className={`${sectionHeadingClass} text-[#14284E]`}>Hostel Facilities <span className="text-[#FFB70F]">at SRMU</span></h2>
            <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
            <p className="w-full text-[15px] leading-[1.75] text-[#5B6885] sm:text-base">{facilitiesNewPageCopy.hostels.introduction}</p>
            <div className="mt-5 flex gap-7" role="tablist" aria-label="Hostel accommodation">
              {hostelImages.map((hostel, index) => <button key={hostel.title} id={`facilities-new-hostel-tab-${index}`} type="button" role="tab" aria-selected={selectedHostel === index} aria-controls="facilities-new-hostel-panel" onClick={() => setSelectedHostel(index)} className={`border-b-4 px-1 pb-3 font-display text-base font-semibold transition-colors sm:text-lg ${selectedHostel === index ? "border-[#FFB70F] text-[#14284E]" : "border-transparent text-[#5B6885] hover:text-[#14284E]"}`}>{index === 0 ? "Girls hostel" : "Boys hostel"}</button>)}
            </div>
            {selectedHostelData && (
              <article id="facilities-new-hostel-panel" role="tabpanel" aria-labelledby={`facilities-new-hostel-tab-${selectedHostel}`} className="mt-5">
                <h3 className="font-display text-[22px] font-semibold text-[#14284E]">{selectedHostelData.title}</h3>
                <p className="mt-2 max-w-[58ch] text-[15px] leading-[1.75] text-[#5B6885]">{selectedHostel === 0 ? "Gargi Girls Hostel provides residential accommodation for eligible female students of SRMU. Its residential environment is intended to support students' academic routines, everyday needs, and participation in university life." : "Tygore Boys Hostel provides residential accommodation for eligible male students of SRMU. The hostel supports students who prefer to live on campus while pursuing their academic programs."}</p>
                <a href="/contact-us" className="mt-5 inline-flex h-12 w-[260px] max-w-full items-center justify-center gap-2 rounded-full border-2 border-[#FFB70F] bg-[#FFB70F] px-4 py-3 text-center text-sm font-semibold text-[#14284E] transition-colors hover:border-[#FFC83D] hover:bg-[#FFC83D] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#14284E]">
                  Contact Hostel Management <ArrowRight size={18} aria-hidden="true" />
                </a>
              </article>
            )}
          </div>
          {selectedHostelData && (
            <figure className="relative order-2 m-0 min-h-[280px] overflow-hidden bg-[#14284E] lg:col-start-1 lg:col-span-2 lg:order-1 lg:min-h-[520px] lg:[clip-path:polygon(0_0,calc(100%_-_34px)_0,100%_100%,0_100%)]">
              <img src={selectedHostelData.image} alt={`${selectedHostelData.title} building`} loading="lazy" decoding="async" style={{ objectPosition: selectedHostel === 0 ? "25% center" : "center" }} className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(0_0,calc(100%_-_62px)_0,100%_100%,0_100%)]" />
            </figure>
          )}
        </div>

        <div id="facilities-new-hostel-amenities" className="relative isolate overflow-hidden bg-[#EFF4FC] px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
          <img src={hostelAmenitiesMobileBackground} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 size-full object-cover object-center" />
          <img src={hostelAmenitiesStudentsImage} alt="" aria-hidden="true" className="pointer-events-none absolute left-8 top-1/2 z-[1] hidden aspect-[4/3] w-[clamp(140px,15vw,280px)] -translate-y-1/2 -rotate-3 border-[8px] border-white object-cover shadow-xl 2xl:block" />
          <img src={hostelAmenitiesRoomImage} alt="" aria-hidden="true" className="pointer-events-none absolute right-8 top-1/2 z-[1] hidden aspect-[4/3] w-[clamp(140px,15vw,280px)] -translate-y-1/2 rotate-3 border-[8px] border-white object-cover shadow-xl 2xl:block" />
          <div
            className={`${containerClass} relative z-10 rounded-2xl bg-[#EFF4FC]/90 p-4 backdrop-blur-sm sm:p-6`}
            style={{
              background: "linear-gradient(180deg, #fff 0%, #cee0ef 100%)",
              backgroundSize: "100% 100%",
            }}
          >
            <h3 className="font-display text-xl font-semibold text-[#14284E]">Hostel amenities</h3>
            <div className="mt-5 grid gap-x-5 lg:grid-cols-3 lg:divide-x lg:divide-[#D5E5F4]">
              {hostelAmenityGroups.map((group, groupIndex) => (
                <div key={groupIndex} data-facilities-reveal className="lg:px-5 first:lg:pl-0 last:lg:pr-0">
                  {group.map((description, rowIndex) => {
                    const amenityIndex = [0, 5, 10][groupIndex] + rowIndex;
                    const separator = description.indexOf(":");
                    const amenityName = separator >= 0 ? description.slice(0, separator) : description;
                    const amenityText = separator >= 0 ? description.slice(separator + 1).trim() : "";
                    const Icon = hostelAmenityIcons[amenityIndex] ?? BookOpen;
                    return <article key={description} className="flex items-start gap-3 border-t border-[#D5E5F4] py-3 first:border-t-0">
                      <span className={`grid size-10 shrink-0 place-items-center rounded-full ${hostelAmenityIconColors[amenityIndex % hostelAmenityIconColors.length]}`} aria-hidden="true"><Icon size={18} strokeWidth={1.8} /></span>
                      <div><h4 className="font-display text-sm font-semibold text-[#14284E]">{amenityName}</h4><p className="mt-1 text-sm leading-relaxed text-[#5B6885]">{amenityText}</p></div>
                    </article>;
                  })}
                </div>
              ))}
            </div>
            {/* <p className="mt-5 max-w-[80ch] border-l-[5px] border-[#FFB70F] pl-4 text-sm leading-relaxed text-[#5B6885]">Room categories, AC availability, laundry arrangements, charges, and other accommodation conditions should be confirmed with the hostel administration.</p> */}
          </div>
        </div>
      </section>

      {/* <section id="facilities-new-residential-committees" className="scroll-mt-24 bg-[#14284E] px-6 py-14 text-white sm:py-16 lg:py-[68px]" aria-labelledby="facilities-new-committees-title">
<div className={containerClass}>
<h2 id="facilities-new-committees-title" className="font-display text-lg font-semibold capitalize text-white sm:text-xl">Hostel management and student committees</h2>
<p className="mt-1 max-w-[80ch] text-[15px] leading-[1.75] text-[#AEBBD8] sm:text-base">SRMU's hostel administration includes a chief warden, wardens, and supporting residential staff. The university also describes student participation through committees that support hostel administration and resident engagement.</p>
<ul className="mt-5 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-[15px] font-semibold leading-6 text-white">
{hostelCommittees.map((committee) => <li key={committee} className="flex items-center gap-2 before:size-[7px] before:shrink-0 before:rounded-full before:bg-[#FFB70F] before:content-['']">{committee}</li>)}
</ul>
<div id="facilities-new-outings" className="mt-11 grid gap-8 lg:grid-cols-2 lg:gap-16">
<article className="border-t-[3px] border-[#FFB70F] pt-5">
<h3 className="font-display text-base font-semibold">Hostel transport for residents</h3>
<p className="mt-1 text-[15px] leading-[1.85] text-[#AEBBD8]">{facilitiesNewPageCopy.hostels.outings}</p>
</article>
<article id="facilities-new-hostel-fees" className="border-t-[3px] border-[#FFB70F] pt-5">
<h3 className="font-display text-base font-semibold">Hostel fees and admission</h3>
<p className="mt-1 text-[15px] leading-[1.85] text-[#AEBBD8]">{facilitiesNewPageCopy.hostels.fees}</p>
</article>
</div>
</div>
</section> */}

      <FacilitiesNewDining images={diningImages} description={facilitiesNewPageCopy.dining} />

      <section id="facilities-new-campus-life" className="relative z-10 scroll-mt-24 bg-[#e0f1ff] px-4 py-6 text-left sm:px-6 sm:py-8 lg:py-10" aria-labelledby="facilities-new-campus-life-title">
        <div className={`${containerClass} mx-auto`}>
          <h2 id="facilities-new-campus-life-title" className={`${sectionHeadingClass} max-w-[900px] text-[#14284E]`}>Green Campus <span className="text-[#FFB70F]">and Student Recreation</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#14284E] sm:my-6" aria-hidden="true" />
          <div className="w-full text-[15px] leading-[1.75] text-[#2B3A5C] sm:text-base">
            <p className="!text-left">SRMU's green campus, landscaped spaces, and recreational areas provide students with a refreshing environment to relax and connect with peers. Sports and student activity spaces further enrich campus life beyond academics.</p>
            {/* <p className="mt-3">At SRMU, every space is designed to inspire learning, encourage exploration, and make student life more rewarding. From hands-on learning and research to sports, recreation, and comfortable hostel living, students find the facilities and opportunities to learn, grow, and create lasting memories.</p> */}
          </div>
          <div className="mt-8 grid max-w-[900px] grid-cols-2 sm:grid-cols-4">
            {campusLifeHighlights.map(({ label, icon: Icon }) => <div key={label} className="flex flex-col items-start gap-3 px-3 py-4"><span className="grid size-14 place-items-center rounded-full bg-[#14284E] text-white sm:size-16"><Icon size={28} strokeWidth={1.8} aria-hidden="true" /></span><span className="max-w-[130px] text-sm font-semibold text-[#14284E]">{label}</span></div>)}
          </div>
          <a className="mt-7 inline-flex h-12 w-[260px] max-w-full items-center justify-center gap-2 rounded-full border-2 border-[#14284E] bg-[#14284E] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#22407A] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#14284E]" href="#facilities-new-overview">Explore campus <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  );
}