import campusVideo from '../../assets/new-home/lT-V.mp4';
import engineeringIH from '../../assets/new-home/lT-V-poster.webp';
import lt from "../../assets/new-home/l-t.webp"
import MobileReadMore from './MobileReadMore';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Classes from "../../utils/styles/Global.module.css";
import { Link } from 'react-router-dom';
import LazyVideo from './LazyVideo';
const programs: { title: string; path: string }[] = [
  {
    title: "B.Tech CE (Adv. Construction Practices)",
    path: "/program/b-tech-civil-engineering",
  },
  {
    title: "B.Tech ME (EV Engineering)",
    path: "/program/b-tech-me-ev-engineering",
  },
  {
    title: "B.Tech EE (EV Engineering)",
    path: "/program/b-tech-ee-ev-engineering",
  },
  {
    title: "B.Tech ECE (EV Engineering)",
    path: "/program/b-tech-ece-ev-engineering",
  },
  {
    title: "B.Tech. in ECE (Semiconductor Design)",
    path: "/program/btech-ece-semiconductor-design",
  },
];
export default function CoreEngineering() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className="w-full  mb-4">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] felx flex-col leading-tight md:leading-tight">
            Practical Core Engineering Learning <div className='flex gap-x-2'> <span className="text-[#FFC107] lg:text-3xl block">with</span> <img src={lt} width={360} height={110} className=' object-contain max-w-[100px]' alt="L&T" /> </div>
          </h2>


        </div>

        <MobileReadMore className="text-[13px] md:text-base text-gray-700 leading-relaxed mb-4">
          SRMU enhances core engineering education through practical industry exposure and hands-on learning in collaboration with L&amp;T. Students from Civil, Mechanical, Electrical and Electronics programs gain real-world experience through technical visits, live learning and industrial exposure at major engineering sites including Ayodhya and Prayagraj.
          Focused on practical skills and industry-oriented learning, SRMU is emerging among the best colleges in Uttar Pradesh for core engineering education.
        </MobileReadMore>




        <div className="mb-5 md:mb-10 rounded-2xl border border-[#0A4A8F]/15 bg-white p-4 md:p-6 shadow-sm w-full">

          {/* Desktop View */}
          <div className="hidden md:block">
            <p className="text-xs md:text-sm font-bold  tracking-wider text-[#0A4A8F] mb-3">
              Featured Programs
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {programs.map((p, i) => (
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
              <p className="text-xs font-bold  tracking-wider text-[#0A4A8F]">
                Featured Programs
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
                {programs.map((p, i) => (
                  <Link to={p.path}
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

        {/* Full-width video with side controls */}
        <div className="relative lg:mb-5 group w-full">
          <div className="relative rounded-xl overflow-hidden shadow-card">
            <LazyVideo
              src={campusVideo}
              poster={engineeringIH}
              className="w-full aspect-video object-cover bg-gray-900 rounded-xl"
              controls
              muted
              loop
              playsInline
              preload="metadata"
              rootMargin="180px 0px"
            />

            {/* Bottom gradient overlay with description */}

          </div>
        </div>

      </div>
    </section>
  );
}
