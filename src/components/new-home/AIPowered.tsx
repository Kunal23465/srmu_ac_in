import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ltVideo1 from '../../assets/new-home/reels/AI Learning.mp4';
import ltVideo2 from '../../assets/new-home/reels/real-word.mp4';
import lt from "../../assets/new-home/l-t.webp"
import EmblaCarousel from './EmbelCrousel';
import MobileReadMore from './MobileReadMore';
import { BiChevronDown } from 'react-icons/bi';
import Classes from "../../utils/styles/Global.module.css";
import { Link } from 'react-router-dom';
import LazyVideo from './LazyVideo';

const ltReels = [
  {
    tag: 'L&T',
    tagColor: 'bg-[#0A4A8F]',
    label: 'Industry-Led AI Curriculum',
    sub: 'Built with L&T experts',
    src: ltVideo1,
  },
  {
    tag: 'L&T',
    tagColor: 'bg-[#F47B20]',
    label: 'Real-World Projects',
    sub: 'Hands-on with industry mentors',
    src: ltVideo2,
  },
];

const features = [
  { title: 'Industry-Collaborated AI Learning', desc: 'Practical AI training with industry-focused exposure.' },
  { title: 'Live AI Projects from Early Semesters', desc: 'Hands-on AI and data science projects from day one.' },
  { title: 'Advanced AI & Data Science Labs', desc: 'Modern labs with AI tools, cloud and analytics technologies.' },
  { title: 'Machine Learning & Analytics Focus', desc: 'Focused learning in AI, big data and intelligent systems.' },
  { title: 'Training by Industry Experts', desc: 'Workshops and mentorship from technology professionals.' },
  { title: 'Future-Ready Technology Curriculum', desc: 'Curriculum aligned with evolving AI and digital trends.' },
  { title: 'Career-Focused Skill Development', desc: 'Technical training for AI and technology-driven careers.' },
  { title: 'Innovation & Entrepreneurship Ecosystem', desc: 'Encouraging AI innovation, startup ideas and live projects.' },
];

const ltIntegratedPrograms: { title: string; path: string }[] = [
  {
    title: "B.Tech. CSE - (Cyber Security)",
    path: "/program/b-tech-cse-cyber-security",
  },
  {
    title: "B.Tech. CSE - (Data Science & Artificial Intelligence)",
    path: "/program/b-tech-cse-data-science-artificial-intelligence",
  },
  {
    title: "B.C.A. CSE - (Cyber Security)",
    path: "/program/bca-cyber-security",
  },
  {
    title: "B.C.A. CSE - (Data Science & Artificial Intelligence)",
    path: "/program/bca-data-science-artificial-intelligence",
  },
  {
    title: "BBA (AI-Augmented FinTech)",
    path: "/program/bba-ai-augmented-fintech",
  },
  {
    title: "M.B.A. (Business Analytics)",
    path: "/program/mba-business-analytics",
  },
];

export default function AIPowered() {
  const [open, setOpen] = useState(false);
  const [playingStates, setPlayingStates] = useState(ltReels.map(() => true));

  return (
    <section className="bg-[#F0F6FB] ">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] mb-2 md:mb-3 flex flex-col leading-tight md:leading-tight">
          Industry-Collaborated  AI Courses  <div className='flex gap-x-2'> <span className="text-[#FFC107] lg:text-3xl block">Backed by</span> <img src={lt} width={360} height={110} className='max-w-[100px] object-contain' alt="L&T" /> </div>
        </h2>
        <MobileReadMore className="text-[13px] md:text-base text-gray-700 leading-relaxed mb-5 md:mb-8">
          SRMU empowers students with practical AI skills, live projects and innovation-driven learning through industry-collaborated AI programs supported by L&amp;T. From the second year itself, students work on real-world AI applications, emerging technology solutions and startup-oriented projects designed to build future-ready technical and entrepreneurial skills. Recognized among the preferred choices for students seeking the best college in Uttar Pradesh for AI and technology-focused education, SRMU combines academic learning with industry exposure, hands-on training and innovation-led experiences aligned with modern digital careers.
        </MobileReadMore>

        <div className="mb-5 md:mb-10 rounded-2xl border border-[#0A4A8F]/15 bg-white p-4 md:p-6 shadow-sm">

          {/* Desktop View */}
          <div className="hidden md:block">
            <p className="text-xs md:text-sm font-bold tracking-wider text-[#0A4A8F] mb-3">
              L&amp;T Integrated Program
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {ltIntegratedPrograms.map((p, i) => (
                <Link to={p.path}
                  key={i}
                  className="flex items-start gap-2 text-[13px] md:text-sm text-gray-700"
                >
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#FFC107] text-[#0A4A8F] text-[10px] font-semibold flex-shrink-0">
                    {i + 1}
                  </span>

                  <span>{p.title}</span>
                </Link>
              ))}
            </ul>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between"
            >
              <p className="text-xs font-bold tracking-wider text-[#0A4A8F]">
                L&amp;T Integrated Program
              </p>

              <BiChevronDown
                className={`w-4 h-4 text-[#0A4A8F] transition-transform duration-300 ${open ? 'rotate-180' : ''
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] mt-4' : 'max-h-0'
                }`}
            >
              <ul className="space-y-3">
                {ltIntegratedPrograms.map((p, i) => (
                  <Link
                    to={p.path}
                    key={i}
                    className="flex items-start gap-2 text-[13px] text-gray-700"
                  >
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#FFC107] text-[#0A4A8F] text-[10px] font-semibold flex-shrink-0">
                      {i + 1}
                    </span>

                    <span>{p.title}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-stretch">
          {/* Left: L&T reels */}
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
              {ltReels.map((r, i) => (
                <div
                  key={i}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative bg-black flex-1 min-h-[240px] md:min-h-[320px] w-full overflow-hidden">
                    <LazyVideo
                      src={r.src}
                      className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      rootMargin="120px 0px"
                      onPlay={() => {
                        setPlayingStates((prev) => {
                          const next = [...prev];
                          next[i] = true;
                          return next;
                        });
                      }}
                      onPause={() => {
                        setPlayingStates((prev) => {
                          const next = [...prev];
                          next[i] = false;
                          return next;
                        });
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {/* <span
                      className={`absolute top-3 left-3 ${r.tagColor} text-white text-[9px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-md uppercase shadow-md backdrop-blur-sm`}
                    >
                      {r.tag}
                    </span> */}
                    {!playingStates[i] && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="h-12 w-12 rounded-full bg-[#FFB703] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ring-4 ring-white/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-3 py-3 text-center border-t border-gray-100">
                    <p className="font-bold text-xs md:text-sm text-[#0A4A8F] leading-snug">{r.label}</p>
                    <p className="text-[10.5px] text-gray-500 mt-1 leading-snug">{r.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-5 md:pt-10 text-center">
              <a href="tel:+919838904666" className="btn-primary text-xs md:text-sm py-2.5 md:py-3">
                Connect To Counselor
                <FaArrowRight aria-hidden="true" className="text-sm" />
              </a>
            </div>
          </div>

          {/* Right: 8 USP features */}
          <div className="flex flex-col h-full">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#0A4A8F] mb-3 md:mb-4">
              Why SRMU is a Preferred Choice for <span>AI &amp; Data Science</span> Programs
            </h2>
            <div className="md:hidden">
              <EmblaCarousel
                slides={features}
                getSlideKey={(f) => f.title}
                className="relative"
                slideClassName="min-w-0 shrink-0 grow-0 basis-[86%] pl-3"
                containerClassName="-ml-3 flex"
                autoplayDelay={2000}
                showDots={false}
                showArrows
                loop
                renderSlide={(f, i) => (
                  <div className="group relative min-h-32 rounded-lg bg-white px-4 py-4 pl-4 shadow-sm ring-1 ring-gray-200/70 overflow-hidden">
                    <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b from-[#FFC107] to-[#FFC107]/30" />
                    <p className="flex items-start gap-2.5 text-sm font-bold text-[#0A4A8F]">
                      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0A4A8F] text-[11px] font-extrabold text-white">
                        {i + 1}
                      </span>
                      <span className="leading-snug pt-0.5">{f.title}</span>
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-gray-700">{f.desc}</p>
                  </div>
                )}
              />
            </div>

            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-3.5 auto-rows-fr flex-1">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="group relative h-full flex flex-col bg-white rounded-xl px-5 py-4 pl-5 shadow-sm ring-1 ring-gray-200/70 hover:ring-[#0A4A8F]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                >
                  {/* Left accent bar */}
                  <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b from-[#FFC107] to-[#FFC107]/30 group-hover:from-[#FFC107] group-hover:to-[#0A4A8F] transition-colors duration-300" />

                  <p className="text-[15px] font-bold text-[#0A4A8F] flex items-start gap-2.5">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#0A4A8F] text-white text-[11px] font-extrabold flex-shrink-0 shadow-sm shadow-[#0A4A8F]/20 group-hover:bg-[#FFC107] group-hover:text-[#0A4A8F] transition-colors">
                      {i + 1}
                    </span>
                    <span className="leading-snug pt-0.5">{f.title}</span>
                  </p>
                  <p className="text-[13px] text-gray-600 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-5 md:pt-10 text-center">
              <Link to="/institutes-info" className="btn-primary text-xs md:text-sm py-2.5 md:py-3">
                Know Your Faculty
                <FaArrowRight aria-hidden="true" className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
