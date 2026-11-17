import { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    BrainCircuit,
    Building2,
    Check,
    ChevronDown,
    Cog,
    Cpu,
    Database,
    GraduationCap,
    Lightbulb,
    Target,
    UsersRound,
    Zap,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/institute-of-technology-new/hero-robotics.jpg";
import projectImage from "../../../assets/images/institute-of-technology-new/engineering-project.jpg";
import collaborationImage from "../../../assets/images/institute-of-technology-new/lt-collaboration.jpg";
import aboutBackground from "../../../assets/images/institute-of-technology-new/Modern Engineering Waves with Gear and Robot Accents.png";
import blueprintBackground from "../../../assets/images/institute-of-technology-new/Engineering Blueprints in Motion.png";
import academicBackground from "../../../assets/images/institute-of-technology-new/Minimalist Academic Arcs Banner.png";
import industryBackground from "../../../assets/images/institute-of-technology-new/Golden Abstract Tech Wave Banner.png";
import conceptLearningImage from "../../../assets/images/new-labo/smart-class.webp";
import laboratoryLearningImage from "../../../assets/images/new-labo/engineering-labs.webp";
import collaborativeLearningImage from "../../../assets/images/new-facilities/Students-Studying-Together-on-Campus.webp";
import industryLearningImage from "../../../assets/images/academics/institutes/industrial-visit.webp";

const departments = [
    {
        name: "Department of Computer Science and Engineering",
        description: "Explore the foundations of computing, programming, software technologies, and emerging digital innovations. The department develops technical understanding and computational problem-solving abilities through academic and practical learning.",
        href: "/department-of-computer-science-and-engineering-new",
        icon: Cpu,
    },
    {
        name: "Department of Computer Science and Information Systems",
        description: "Study computing applications, information systems, and software technologies, with an academic approach that connects digital solutions to professional sectors.",
        href: "/department-of-computer-science-and-information-systems",
        icon: Database,
    },
    {
        name: "Faculty of Mechanical Engineering",
        description: "Explore mechanical systems, engineering design, manufacturing processes, and industrial technologies, including the principles behind modern machines and engineering applications.",
        href: "/department-of-mechanical-engineering-new",
        icon: Cog,
    },
    {
        name: "Department of Electrical and Electronics Engineering",
        description: "Learn about electrical systems, electronics, power technologies, electric mobility, renewable energy, communication technologies, and electronic systems.",
        href: "/department-of-electrical-and-electronics-engineering-new",
        icon: Zap,
    },
    {
        name: "Faculty of Civil Engineering",
        description: "Study the engineering principles behind infrastructure, construction, structural systems, and sustainable development, from planning to the built environment.",
        href: "/department-of-civil-engineering-new",
        icon: Building2,
    },
];

const learningApproaches = [
    {
        title: "Concept-Based Learning",
        description: "Build a strong foundation in engineering fundamentals through structured academic instruction and faculty guidance.",
        image: conceptLearningImage,
    },
    {
        title: "Laboratory-Based Learning",
        description: "Explore technical concepts through experiments, demonstrations, and hands-on activities in relevant laboratories.",
        image: laboratoryLearningImage,
    },
    {
        title: "Project-Based Learning",
        description: "Apply engineering knowledge to projects and practical challenges while developing creativity and problem-solving abilities.",
        image: projectImage,
    },
    {
        title: "Collaborative Learning",
        description: "Work with peers, participate in group activities, and exchange ideas to develop teamwork and communication skills.",
        image: collaborativeLearningImage,
    },
    {
        title: "Industry-Oriented Learning",
        description: "Understand professional practices and evolving technologies through industry interactions, workshops, and practical exposure.",
        image: industryLearningImage,
    },
];

const aboutParagraphs = [
    "The Institute of Technology at Shri Ramswaroop Memorial University brings together different branches of engineering and technology, giving students the opportunity to learn, explore, and develop their technical interests. For students looking at engineering colleges in the Lucknow region and across Uttar Pradesh, SRMU offers a learning environment that goes beyond classroom teaching. Students get opportunities to gain hands-on experience through well-equipped laboratories, technical workshops, industry interactions, projects, and research activities.",
    "Learning at the institute is centered on developing practical knowledge, problem-solving skills, analytical thinking, and professional confidence. With guidance from experienced faculty members and exposure to different engineering disciplines, students are encouraged to understand how technology works and how it can be used to address real-world challenges.",
    "Through its undergraduate, postgraduate, and doctoral programs, the Institute of Technology strives to prepare students for evolving career opportunities in engineering and technology while helping them build the skills and knowledge needed to contribute meaningfully to the industry and society.",
];
const aboutParagraphPreview = "The Institute of Technology at Shri Ramswaroop Memorial University brings together different branches of engineering and technology, giving students the opportunity to learn, explore, and develop their technical interests.";

const faqs = [
    {
        question: "What is the Institute of Technology at SRMU?",
        answer: "The Institute of Technology at Shri Ramswaroop Memorial University brings together multiple engineering disciplines. It focuses on engineering education, practical learning, technological innovation, research, and industry interaction.",
    },
    {
        question: "Where is the Institute of Technology at SRMU located?",
        answer: "The Institute of Technology is located at Shri Ramswaroop Memorial University, on Lucknow–Deva Road, Barabanki, Uttar Pradesh, India.",
    },
    {
        question: "Which engineering departments are available at SRMU?",
        answer: "The Institute of Technology comprises five departments: Computer Science and Engineering, Computer Science and Information Systems, Mechanical Engineering, Electrical and Electronics Engineering, and Civil Engineering.",
    },
    {
        question: "What engineering programs can students explore at SRMU?",
        answer: "Students can explore undergraduate, postgraduate, and doctoral opportunities across different engineering disciplines. These include computer science and engineering, mechanical engineering, electrical engineering, electronics and communication engineering, and civil engineering, subject to current program availability.",
    },
    {
        question: "Does SRMU offer industry-oriented engineering education?",
        answer: "Yes. SRMU incorporates industry-oriented academic initiatives and collaborations involving L&T in selected programs and technology areas.",
    },
    {
        question: "What is the learning approach at the Institute of Technology?",
        answer: "The institute combines classroom instruction with practical learning, laboratory activities, technical workshops, project-based assignments, and academic interactions to help students understand engineering concepts and their applications.",
    },
    {
        question: "Does SRMU provide opportunities to explore emerging technologies?",
        answer: "Yes. Relevant academic programs and activities introduce students to areas such as artificial intelligence, data science, cyber security, electric mobility, electronics, automation, and other emerging technologies.",
    },
    {
        question: "How can I explore B.Tech courses at SRMU?",
        answer: "Explore available B.Tech courses, specializations, eligibility criteria, course duration, and fee details on the",
        link: "https://srmu.ac.in/program-finder",
        linkLabel: "official program listing",
    },
    {
        question: "How can I check B.Tech admission details for 2027 at SRMU?",
        answer: "Students interested in B.Tech admission for the 2027 academic session can check the latest application dates, eligibility requirements, available programs, and admission procedures on the",
        link: "https://srmu.ac.in/admission-overview",
        linkLabel: "official SRMU admission portal",
    },
    {
        question: "How can I apply for admission to the Institute of Technology at SRMU?",
        answer: "Visit the official SRMU website or admission portal, select your preferred engineering program, review its eligibility requirements, and complete the",
        link: "https://srmu.ac.in/how-to-apply",
        linkLabel: "online application process",
    },
];

const visionText = "To be an institute of excellence in engineering and technology, emphasising quality education, research, consultancy, and innovation while remaining committed to professional ethics and societal development.";

const missionItems = [
    "Offer graduate, postgraduate, doctoral, and other value-added programmes that benefit students.",
    "Establish state-of-the-art facilities and resources to achieve excellence in teaching, learning, and supplementary processes.",
    "Promote research among students and faculty through projects, consultancy, and collaboration with national and international institutes of eminence.",
    "Instil high ethical standards, values, and a sense of professionalism among students.",
    "Prepare students to become socially responsible citizens.",
];

export default function InstituteOfTechnologyNew() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllFaq, setShowAllFaq] = useState(false);
    const [aboutExpanded, setAboutExpanded] = useState(false);
    const [departmentEmblaRef, departmentEmblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        breakpoints: {
            "(min-width: 640px)": { active: false },
        },
    });
    const [departmentCanPrev, setDepartmentCanPrev] = useState(false);
    const [departmentCanNext, setDepartmentCanNext] = useState(true);

    useEffect(() => {
        if (!departmentEmblaApi) return;
        const updateControls = () => {
            setDepartmentCanPrev(departmentEmblaApi.canScrollPrev());
            setDepartmentCanNext(departmentEmblaApi.canScrollNext());
        };
        updateControls();
        departmentEmblaApi.on("select", updateControls);
        departmentEmblaApi.on("reInit", updateControls);
        return () => {
            departmentEmblaApi.off("select", updateControls);
            departmentEmblaApi.off("reInit", updateControls);
        };
    }, [departmentEmblaApi]);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add({
            desktop: "(min-width: 1024px)",
            mobile: "(max-width: 1023px)",
            reduceMotion: "(prefers-reduced-motion: reduce)",
        }, (context) => {
            if (context.conditions?.reduceMotion) return;

            const animateReveal = (element: HTMLElement, offset = context.conditions?.desktop ? 32 : 18) => {
                gsap.fromTo(element, { autoAlpha: 0, y: offset }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        once: true,
                        invalidateOnRefresh: true,
                    },
                });
            };

            page.querySelectorAll<HTMLElement>("[data-tech-hero-reveal]").forEach((element) => {
                animateReveal(element, context.conditions?.desktop ? 40 : 24);
            });

            page.querySelectorAll<HTMLElement>("h2").forEach((element) => {
                if (!element.closest("[data-tech-reveal]")) animateReveal(element);
            });
            page.querySelectorAll<HTMLElement>("[data-tech-reveal]").forEach(animateReveal);

            if (context.conditions?.desktop) {
                page.querySelectorAll<HTMLElement>("[data-tech-parallax]").forEach((element) => {
                    gsap.fromTo(element, { scale: 1.06 }, {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: element.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                });
            }
        }, page);

        return () => media.revert();
    }, []);

    return (
        <div ref={pageRef} className="overflow-hidden bg-white text-[#14284E]">
            <section className="relative isolate flex min-h-[600px] items-end overflow-hidden bg-[#071634] text-white sm:min-h-[504px] sm:items-center">
                <img
                    src={heroImage}
                    alt="Students building and testing a robotics vehicle in an engineering laboratory"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    fetchPriority="high"
                />
                <div className="relative mx-auto w-full max-w-7xl px-5 pt-20 pb-10 sm:px-8 sm:py-20 lg:px-10">
                    <div className="max-w-3xl" data-tech-hero-reveal>
                        {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFB703] backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-[#FFB703]" />
                            Engineering and Technology at SRMU
                        </div> */}
                        <h1 className="font-display font-bold leading-[1.08] tracking-[-0.035em] text-white">
                            <span className="mb-1 block text-[clamp(18px,2.4vw,26px)] tracking-normal text-[#58C5F4]">Institute of</span>
                            <span className="block text-[clamp(32px,4vw,36px)] lg:text-[51px]"><span className="text-[#FFB703]">Technology</span> at SRMU</span>
                        </h1>
                        <span aria-hidden="true" className="mt-4 block h-[3px] w-40 bg-[#58C5F4]" />
                        {/* <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                            Engineering education shaped by practical learning, technological innovation, research, and industry interaction.
                        </p> */}
                        <div className="mt-9 flex flex-nowrap gap-2 sm:gap-3">
                            <a href="#departments" className="inline-flex min-h-10 flex-none items-center gap-1 whitespace-nowrap rounded-full bg-[#FFB703] px-2 py-2 text-[clamp(9px,2.6vw,10px)] font-bold uppercase text-[#14284E] transition hover:-translate-y-0.5 hover:bg-[#ffd05a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-12 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm sm:tracking-wide">
                                Explore departments <ArrowRight size={17} className="h-3.5 w-3.5 sm:h-[17px] sm:w-[17px]" />
                            </a>
                            <a href="https://srmu.ac.in/online-admission" className="inline-flex min-h-10 flex-none items-center gap-1 whitespace-nowrap rounded-full border border-[#58C5F4] bg-[#58C5F4] px-2 py-2 text-[clamp(9px,2.6vw,10px)] font-bold uppercase text-[#14284E] transition hover:bg-[#40B5E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-12 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm sm:tracking-wide">
                                Apply for Admission 2027 <ArrowRight size={17} className="h-3.5 w-3.5 sm:h-[17px] sm:w-[17px]" />
                            </a>
                        </div>
                        {/* <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-white/80">
                            <span><strong className="mr-2 text-[#FFB703]">05</strong> engineering departments</span>
                            <span><strong className="mr-2 text-[#FFB703]">Labs</strong> practical learning</span>
                            <span><strong className="mr-2 text-[#FFB703]">Industry</strong> exposure and interaction</span>
                        </div> */}
                    </div>
                </div>
                <div aria-hidden="true" className="absolute bottom-0 right-0 h-1.5 w-1/3 bg-[#FFB703]" />
            </section>

            <section
                id="about"
                className="relative isolate scroll-mt-24 overflow-hidden bg-[#F4F7FF] px-4 pt-12 pb-6 sm:px-6 sm:pt-16 sm:pb-8 lg:pt-16 lg:pb-8"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 scale-[1.12] -translate-y-[10%] bg-cover bg-center sm:transform-none"
                    style={{ backgroundImage: `url("${aboutBackground}")` }}
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/15" />
                <div className="relative z-10 mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
                        <div>
                            {/* <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0F4A85] sm:text-xs">
                                <span className="h-[3px] w-9 bg-[#FFB703]" />About the Institute
                            </p> */}
                            <h2 className="max-w-[700px] font-display text-[clamp(28px,3vw,36px)] font-bold leading-tight text-[#14284E] lg:text-[36px]">
                                Engineering for a <span className="text-[#FFB703]">Changing World</span>
                            </h2>
                            <div className="my-5 flex h-1 w-20 overflow-hidden rounded-full" aria-hidden="true">
                                <span className="w-2/3 bg-[#14284E]" />
                                <span className="w-1/3 bg-[#FFB703]" />
                            </div>
                            <div data-tech-reveal className="space-y-4 text-left text-[15px] leading-7 text-[#263B63] sm:text-[15.5px] sm:leading-relaxed lg:text-base lg:!text-justify">
                                <p>
                                    <span className={aboutExpanded ? "hidden" : "sm:hidden"}>{aboutParagraphPreview}</span>
                                    <span className={aboutExpanded ? "" : "hidden sm:inline"}>{aboutParagraphs[0]}</span>
                                </p>
                                {aboutParagraphs.slice(1).map((paragraph) => (
                                    <p key={paragraph} className={!aboutExpanded ? "hidden sm:block" : ""}>{paragraph}</p>
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={() => setAboutExpanded((expanded) => !expanded)}
                                aria-expanded={aboutExpanded}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#FFB703] transition hover:text-[#E5A300] sm:hidden"
                            >
                                {aboutExpanded ? "Read Less" : "Read More"}
                                <ChevronDown size={16} className={`transition-transform ${aboutExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
                            </button>
                        </div>
                        <figure className="relative mx-auto w-[88%] max-w-[600px] lg:w-full" data-tech-reveal>
                            <div aria-hidden="true" className="absolute right-[-3%] top-[12%] h-[78%] w-[88%] rotate-[5deg] rounded-[30px] bg-[#FFB703] sm:rounded-[38px]" />
                            <div className="relative -rotate-[3deg] rounded-[28px] border-[6px] border-white bg-white p-1 shadow-[0_20px_45px_rgba(20,40,78,0.2)] sm:rounded-[36px] sm:border-[8px]">
                                <img src={projectImage} alt="Students collaborating on an engineering project in a laboratory" className="aspect-[1.38/1] w-full rounded-[22px] object-cover object-center sm:rounded-[28px]" loading="lazy" data-tech-parallax />
                            </div>
                            <figcaption className="absolute -bottom-5 left-1/2 z-10 flex w-[calc(100%+12px)] max-w-[520px] -translate-x-1/2 items-center gap-3 rounded-full bg-[#14284E] py-2 pl-3 pr-3 text-white shadow-[0_16px_35px_rgba(20,40,78,0.25)] sm:-bottom-6 sm:w-[90%] sm:gap-4 sm:py-2.5 sm:pl-4 sm:pr-4">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#FFB703] text-[#14284E] sm:h-[52px] sm:w-[52px]"><GraduationCap size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                                <span className="min-w-0 flex-1 font-display text-xs font-bold leading-snug sm:text-sm">Practical learning, built into every discipline</span>
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/50 text-white sm:h-11 sm:w-11"><ArrowRight size={19} aria-hidden="true" /></span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section id="vision" className="relative isolate scroll-mt-24 overflow-hidden bg-[#F4F7FF] px-5 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 lg:px-10 lg:pt-8 lg:pb-16">
                <style>{`
                    @keyframes institute-vision-float {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(0, -14px, 0) rotate(5deg); }
                    }
                    @keyframes institute-vision-drift {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(10px, -8px, 0) rotate(-6deg); }
                    }
                    .institute-vision-float { animation: institute-vision-float 9s ease-in-out infinite; }
                    .institute-vision-drift { animation: institute-vision-drift 11s ease-in-out infinite; }
                    @media (prefers-reduced-motion: reduce) {
                        .institute-vision-float, .institute-vision-drift { animation: none; }
                    }
                `}</style>
                <Cog aria-hidden="true" className="institute-vision-float pointer-events-none absolute left-[7%] top-[14%] z-0 h-14 w-14 text-[#0F4A85]/20 sm:h-20 sm:w-20" strokeWidth={1} />
                <Cpu aria-hidden="true" className="institute-vision-drift pointer-events-none absolute right-[7%] top-[42%] z-0 h-12 w-12 text-[#D62C2B]/20 sm:h-[72px] sm:w-[72px]" strokeWidth={1} />
                <BrainCircuit aria-hidden="true" className="institute-vision-float pointer-events-none absolute bottom-[8%] left-[12%] z-0 h-14 w-14 text-[#FFB703]/35 sm:h-[76px] sm:w-[76px]" strokeWidth={1} style={{ animationDelay: "-4s" }} />
                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-0">
                        <article className="rounded-2xl border border-[#D62C2B] border-t-4 bg-white px-6 py-7 shadow-[0_14px_36px_rgba(20,40,78,0.12)] sm:px-10 sm:py-9 lg:rounded-r-none" data-tech-reveal>
                            <Lightbulb size={31} strokeWidth={1.6} className="mb-4 text-[#D62C2B]" aria-hidden="true" />
                            <div className="mb-4 flex items-center gap-2 text-[13px] font-extrabold tracking-[0.12em] text-[#D62C2B]">
                                <span className="h-[2px] w-6 bg-[#D62C2B]" />MISSION
                            </div>
                            <h2 className="font-display text-xl font-bold text-[#14284E] sm:text-[22px]">What we work towards every day</h2>
                            <ul className="mt-5 space-y-3">
                                {missionItems.map((item) => <li key={item} className="flex gap-3 text-left text-[14px] leading-6 text-[#4B5A72] sm:text-[14.5px]">
                                    <span className="shrink-0 font-bold text-[#D62C2B]">+</span>
                                    <span>{item}</span>
                                </li>)}
                            </ul>
                        </article>
                        <article className="rounded-2xl border border-[#D62C2B] border-t-4 border-t-[#FFB703] bg-[#14284E] px-6 py-7 text-white shadow-[0_14px_36px_rgba(20,40,78,0.12)] sm:px-10 sm:py-9 lg:rounded-l-none lg:border-l-0" data-tech-reveal>
                            <Target size={31} strokeWidth={1.6} className="mb-4 text-[#FFB703]" aria-hidden="true" />
                            <div className="mb-4 flex items-center gap-2 text-[13px] font-extrabold tracking-[0.12em] text-[#FFB703]">
                                <span className="h-[2px] w-6 bg-[#FFB703]" />VISION
                            </div>
                            <h2 className="font-display text-xl font-bold text-white sm:text-[22px]">Where we’re headed</h2>
                            <p className="mt-4 text-left text-[14px] leading-6 text-white/90 sm:text-[14.5px]">{visionText}</p>
                        </article>
                </div>
            </section>

            <section
                id="departments"
                className="relative isolate scroll-mt-24 overflow-hidden bg-[#071B4A] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-16"
                style={{ backgroundImage: `url("${blueprintBackground}")`, backgroundPosition: "center", backgroundSize: "cover" }}
            >
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#061638]/15" />
                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="w-full max-w-none">
                        {/* <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFB703]">Five engineering disciplines</p> */}
                        <h2 className="font-display text-[clamp(30px,4vw,46px)] font-bold leading-tight text-white lg:text-[36px]">Explore Engineering Departments <span className="text-[#FFB703]">at SRMU</span></h2>
                        <p data-tech-reveal className="mt-5 text-left text-[15px] leading-7 text-white lg:text-base lg:!text-justify">The Institute of Technology comprises specialized departments that provide academic opportunities across computing, infrastructure, mechanical systems, electrical technologies, and electronics. Explore disciplines and identify programs aligned with your academic interests and career aspirations.</p>
                    </div>
                    <div className="mt-8 flex justify-end gap-2 sm:hidden">
                        <button
                            type="button"
                            onClick={() => departmentEmblaApi?.scrollPrev()}
                            disabled={!departmentCanPrev}
                            aria-label="Previous department card"
                            aria-controls="institute-department-cards"
                            className="grid size-10 place-items-center rounded-full border border-white/40 bg-[#14284E] text-white transition disabled:cursor-not-allowed disabled:opacity-35"
                        >
                            <ArrowLeft size={17} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => departmentEmblaApi?.scrollNext()}
                            disabled={!departmentCanNext}
                            aria-label="Next department card"
                            aria-controls="institute-department-cards"
                            className="grid size-10 place-items-center rounded-full bg-[#FFB703] text-[#14284E] transition disabled:cursor-not-allowed disabled:opacity-35"
                        >
                            <ArrowRight size={17} aria-hidden="true" />
                        </button>
                    </div>
                    <div ref={departmentEmblaRef} role="region" aria-label="Engineering department cards" tabIndex={0} className="mt-5 -mx-5 overflow-hidden px-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB703] sm:mx-0 sm:mt-10 sm:overflow-visible sm:px-0">
                        <div id="institute-department-cards" className="flex gap-4 touch-pan-y sm:grid sm:grid-cols-2 lg:grid-cols-6">
                            {departments.map((department, index) => {
                                const Icon = department.icon;
                                return (
                                    <article data-tech-reveal key={department.name} className={`group relative grid min-h-[220px] w-[88%] shrink-0 grid-cols-[48px_minmax(0,1fr)] grid-rows-[auto_auto_1fr_auto] gap-x-4 gap-y-2 overflow-hidden rounded-[20px] border border-white/80 bg-[#F5F8FF] p-5 text-[#14284E] shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0_22px_42px_rgba(0,0,0,0.3)] sm:w-auto sm:shrink sm:p-6 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
                                        <span aria-hidden="true" className="absolute -right-9 -top-12 z-0 h-24 w-40 rotate-[28deg] bg-[#FFBF24] transition-transform duration-300 group-hover:translate-y-1" />
                                        <span aria-hidden="true" className="absolute -bottom-12 -right-10 z-0 h-40 w-40 rounded-full border-[10px] border-[#DCE7FA]/70" />
                                        <span aria-hidden="true" className="absolute -bottom-6 -right-6 z-0 h-32 w-32 overflow-hidden rounded-full border-4 border-white/90 shadow-sm">
                                            <img src={projectImage} alt="" loading="lazy" className="h-full w-full object-cover" />
                                        </span>
                                        <span className="relative z-10 row-span-3 grid h-12 w-12 place-items-center self-start rounded-full bg-[#FFD45A] text-[#14284E] shadow-sm transition group-hover:scale-105"><Icon size={24} strokeWidth={1.9} /></span>
                                        <p className="relative z-10 self-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#D62C2B]">Department 0{index + 1}</p>
                                        <h3 className="relative z-10 font-display text-base font-bold leading-snug sm:text-[17px]">{department.name}</h3>
                                        <p className="relative z-10 text-left text-[13px] leading-[1.55] text-[#435575] sm:text-sm">{department.description}</p>
                                        <Link to={department.href} className="relative z-10 col-start-2 mt-2 inline-flex min-h-9 w-fit items-center gap-2 text-[13px] font-bold text-[#14284E] transition group-hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4A85]">
                                            <span className="border-b-2 border-[#FFB703] pb-1">Explore department</span> <ArrowRight size={16} />
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="approach"
                className="relative isolate scroll-mt-24 overflow-hidden bg-[#F4F7FF] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-16"
                style={{ backgroundImage: `url("${academicBackground}")`, backgroundPosition: "center", backgroundSize: "cover" }}
            >
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/20" />
                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="w-full max-w-none">
                        {/* <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F0A900]">
                            <span className="h-[3px] w-9 bg-[#FFB703]" />How students learn<span aria-hidden="true" className="hidden h-px max-w-52 flex-1 bg-[#FFB703] sm:block" />
                        </p> */}
                        <h2 className="font-display text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#14284E] lg:text-[36px]">A Practical Approach to <span className="text-[#F0A900]">Engineering Education</span></h2>
                        <p data-tech-reveal className="mt-5 text-left text-[15px] leading-7 text-[#34496B] lg:text-base lg:!text-justify">Engineering education involves more than understanding theories and technical concepts. It requires the ability to apply knowledge, analyze challenges, and develop solutions. The teaching-learning approach combines academic instruction with practical engagement to help students understand engineering applications.</p>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
                        {learningApproaches.map((approach) => {
                            return (
                                <article data-tech-reveal key={approach.title} className="group relative z-0 flex flex-col items-center border-b border-[#CBD7EA] px-1 pb-6 text-center transition-[transform,box-shadow,background-color,border-radius] duration-500 ease-out [transform-style:preserve-3d] sm:px-5 lg:border-b-0 lg:border-r lg:border-[#CBD7EA] lg:px-5 lg:py-2 lg:last:border-r-0 hover:z-20 hover:rounded-2xl hover:bg-white/90 hover:shadow-[0_20px_40px_rgba(20,40,78,0.16)] hover:ring-1 hover:ring-[#FFB703]/50 hover:[transform:perspective(1000px)_translateZ(16px)_scale(1.025)]">
                                    <div className="mb-5 flex w-full items-center justify-center">
                                        <span className="relative grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[#14284E] text-white shadow-sm">
                                            <span aria-hidden="true" className="absolute -right-1 -top-1 h-[104px] w-[104px] rotate-[28deg] rounded-full border-[3px] border-transparent border-r-[#FFB703] border-t-[#FFB703]" />
                                            <span aria-hidden="true" className="absolute -right-3 -top-4 z-20 h-5 w-1.5 rotate-[12deg] rounded-full bg-[#FFB703]" />
                                            <span aria-hidden="true" className="absolute -right-6 -top-2 z-20 h-5 w-1.5 rotate-[38deg] rounded-full bg-[#FFB703]" />
                                            <span aria-hidden="true" className="absolute -right-1 -top-7 z-20 h-5 w-1.5 rotate-[24deg] rounded-full bg-[#FFB703]" />
                                            <img src={approach.image} alt="" loading="lazy" className="relative z-10 h-[88px] w-[88px] rounded-full border-2 border-[#14284E] object-cover" />
                                        </span>
                                    </div>
                                    <h3 className="w-full font-display text-base font-bold leading-snug text-[#14284E]">{approach.title}</h3>
                                    <p className="mt-3 w-full text-center text-sm leading-[1.6] text-[#435575]">{approach.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                id="industry"
                className="relative isolate scroll-mt-24 overflow-hidden bg-[#FFB703] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-16"
                style={{ backgroundImage: `url("${industryBackground}")`, backgroundPosition: "center", backgroundSize: "cover" }}
            >
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#FFB703]/10" />
                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
                    <div>
                        {/* <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#14284E]/80">
                            Industry connection<span aria-hidden="true" className="h-px max-w-52 flex-1 bg-[#14284E]/55" />
                        </p> */}
                        <h2 className="font-display text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#14284E] lg:text-[36px]">Industry Collaboration and <span className="text-white">Professional Exposure</span></h2>
                        <div data-tech-reveal className="mt-5 space-y-4 text-left text-[15px] leading-7 text-[#15203A] lg:text-base lg:!text-justify">
                            <p>Connecting academic learning with industry practices is an important part of engineering education at SRMU. The Institute of Technology encourages students to understand how engineering knowledge is applied in professional environments through industry-oriented academic initiatives and collaborations.</p>
                            <p>The university's technology and engineering ecosystem includes initiatives associated with Larsen &amp; Toubro (L&amp;T), providing relevant exposure across selected academic programs. These initiatives connect students with developments in computing, electric mobility, engineering applications, and emerging technologies.</p>
                        </div>
                        <div data-tech-reveal className="mt-6 flex items-center gap-4 rounded-2xl border-l-4 border-[#14284E] bg-white/55 p-4 text-sm font-semibold leading-6 text-[#14284E] shadow-sm sm:p-5">
                            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/75 text-[#14284E]"><UsersRound size={24} strokeWidth={1.8} aria-hidden="true" /></span>
                            <span className="h-10 w-px shrink-0 bg-[#14284E]/25" aria-hidden="true" />
                            <span className="text-left">The specific collaboration, curriculum, and learning opportunities vary according to the respective academic program.</span>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {["Computing", "Electric mobility", "Engineering applications", "Emerging technologies"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-[#14284E] shadow-sm"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#14284E] text-white"><Check size={12} strokeWidth={2.5} /></span>{item}</span>)}
                        </div>
                    </div>
                    <figure data-tech-reveal className="relative mx-auto w-[88%] max-w-[500px] lg:w-full">
                        <div aria-hidden="true" className="absolute inset-3 rotate-[5deg] rounded-[30px] border-2 border-[#14284E]/75" />
                        <div aria-hidden="true" className="absolute inset-1 rotate-[3deg] rounded-[30px] border-2 border-white/90" />
                        <div className="relative -rotate-[3deg] rounded-[26px] border-[6px] border-white bg-white p-2.5 shadow-[0_24px_55px_rgba(20,40,78,0.24)] sm:rounded-[32px] sm:border-[8px] sm:p-3">
                            <img data-tech-parallax src={collaborationImage} alt="Tech collaboration: L&T EduTech and Shri Ramswaroop Memorial University (SRMU)" className="aspect-[0.9/1] w-full rounded-[18px] object-cover object-center sm:rounded-[22px]" loading="lazy" />
                        </div>
                    </figure>
                </div>
            </section>

            <section id="faq" className="scroll-mt-24 bg-[#F4F7FB] px-4 py-12 sm:px-6 sm:py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex w-full flex-col gap-4">
                        <h2 className="self-start break-words text-left !text-left font-display text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-[#14284E] lg:text-[36px]">
                            Frequently Asked <span className="text-[#FFB703]">Questions</span> About the Institute
                        </h2>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        {(showAllFaq ? faqs : faqs.slice(0, 3)).map((faq, index) => (
                            <div
                                key={faq.question}
                                data-tech-reveal
                                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-colors duration-200 ${openFaq === index ? "border-[#14284E]" : "border-[#E5E7EB]"}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[18px]"
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="pr-2 text-[14.5px] font-bold leading-snug text-[#14284E] sm:text-[15px]">
                                        <span className="mr-2 text-[#D62C2B]">{String(index + 1).padStart(2, "0")}.</span>
                                        {faq.question}
                                    </span>
                                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-sans text-[18px] transition-all duration-300 sm:h-8 sm:w-8 ${openFaq === index ? "rotate-45 bg-[#14284E] text-white" : "bg-[#F6FAFE] text-[#14284E]"}`}>
                                        +
                                    </span>
                                </button>
                                <div className={`overflow-hidden px-5 transition-all duration-300 sm:px-6 ${openFaq === index ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"}`}>
                                    <div className="mb-4 h-px w-full bg-[#E5E7EB]" />
                                    <p className="text-left text-[14.5px] leading-[1.7] text-[#4C5A65] sm:text-[14.5px] lg:text-base lg:!text-justify">
                                        {faq.answer}{faq.link && <> {" "}<a href={faq.link} className="font-bold text-[#0F4A85] underline decoration-[#FFB703] decoration-2 underline-offset-2">{faq.linkLabel}</a>.</>}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {faqs.length > 3 && <div className="mt-8 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setShowAllFaq(!showAllFaq)}
                            className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#FFB703] px-8 py-3 text-[14px] font-bold uppercase tracking-wider text-[#14284E] shadow-md transition-colors hover:bg-[#ffd05a]"
                        >
                            {showAllFaq ? "View Less" : "Read More"}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAllFaq ? "rotate-180" : ""}`} />
                        </button>
                    </div>}
                </div>
            </section>

            {/* <section id="apply" className="relative isolate overflow-hidden bg-[#071634] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[30px] border-[#FFB703]/10" />
                <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFB703]">Admissions 2027</p>
                        <h2 className="font-display text-[clamp(30px,4.5vw,50px)] font-bold leading-tight text-white lg:text-[36px]">Ready to explore engineering at <span className="text-[#FFB703]">SRMU?</span></h2>
                        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75">Choose an engineering discipline and review current programs, eligibility, and admission details.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="https://srmu.ac.in/online-admission" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FFB703] px-6 py-3 text-sm font-bold text-[#14284E] transition hover:-translate-y-0.5 hover:bg-[#ffd05a]">Apply for Admission 2027 <ArrowRight size={17} /></a>
                            <a href="https://srmu.ac.in/how-to-apply" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">How to apply <ArrowRight size={17} /></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:min-w-[300px]">
                        <a href="tel:18001026004" className="flex min-h-11 items-center gap-3 text-sm font-semibold text-white/90 hover:text-[#FFB703]"><Phone size={18} className="text-[#FFB703]" />1800-102-6004</a>
                        <a href="https://wa.me/919120007948" className="flex min-h-11 items-center gap-3 text-sm font-semibold text-white/90 hover:text-[#FFB703]"><MessageCircle size={18} className="text-[#FFB703]" />WhatsApp +91-9120007948</a>
                        <a href="mailto:admissions@srmu.ac.in" className="flex min-h-11 items-center gap-3 text-sm font-semibold text-white/90 hover:text-[#FFB703]"><Mail size={18} className="text-[#FFB703]" />admissions@srmu.ac.in</a>
                        <div className="flex gap-3 border-t border-white/10 pt-4 text-xs leading-5 text-white/60"><MapPin size={17} className="shrink-0 text-[#FFB703]" />Lucknow–Deva Road, Barabanki, Uttar Pradesh</div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
