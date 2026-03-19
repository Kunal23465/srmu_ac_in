import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { tabs } from "../../data/home/program-section-data";


const ProgramsSectionStatic: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id || 1);
  const [isMobile, setIsMobile] = useState(false);

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activePrograms = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab)?.programs || [];
  }, [activeTab]);

  const mobileSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < activePrograms.length; i += 4) {
      slides.push(activePrograms.slice(i, i + 4));
    }
    return slides;
  }, [activePrograms]);

  return (
    <section className="bg-cover bg-center bg-fixed py-20 mb-20" style={{ backgroundImage: "url('programs-bg.png')" }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-white mb-10">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">Our Programs</h2>

          <span className="text-lg mt-2 max-w-2xl opacity-90 block">
            At University’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-y-10 md:gap-10">
          <div className="w-full md:max-w-[350px] programs-tabs">
            <ul className="flex flex-row md:flex-col pb-5 sm:pb-0 manage-program-flow overflow-x-auto">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left uppercase hidden sm:flex gap-x-2 items-center text-nowrap rounded-md py-5 md:pl-6 md:pr-16 mb-1 px-5 text-base md:text-[1.25rem] cursor-pointer transition-all ${
                      activeTab === tab.id ? "programsection shadow-lg text-white" : "bg-transparent text-white"
                    }`}
                  >
                    {tab.title}
                    <span className="block md:hidden text-white">
                      <GoArrowUpRight size={24} />
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className="w-full text-left uppercase flex flex-col sm:hidden gap-2 px-2 items-center text-nowrap text-white rounded-md py-5 mb-1 text-xs cursor-pointer"
                  >
                    <span
                      className={`block ${
                        activeTab === tab.id
                          ? "programsection shadow-lg w-12 h-12 flex justify-center rounded-full items-center"
                          : "bg-white w-12 h-12 flex justify-center rounded-full items-center text-[#219ebc]"
                      }`}
                    >
                      <GoArrowUpRight size={24} />
                    </span>

                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:ml-6">
            {isMobile ? (
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {mobileSlides.map((group, index) => (
                    <div key={index} className="flex-[0_0_100%] grid grid-cols-2 gap-4">
                      {group.map((item, idx) => (
                        <a key={`${item.name}-${idx}`} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                          <img src={item.img} alt={item.name} className="w-full h-36 object-cover border-white border-2 rounded-xl" />

                          <div className="text-left text-white mt-2 text-xs">{item.name}</div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="grid gap-6 grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(170px,170px))] list-none">
                {activePrograms.map((item, idx) => (
                  <li key={`${item.name}-${idx}`} className="list-none">
                    <a href={item.link} rel="noopener noreferrer" className="block overflow-hidden bg-transparent transition-all hover:-translate-y-2 duration-300">
                      <img src={item.img} alt={item.name} className="w-full h-40 object-cover border-white border-2 rounded-xl" />

                      <div className="text-left text-white mt-4 text-sm sm:text-base">{item.name}</div>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="text-center mt-10">
              <Link
                to="/online-admission"
                className="uppercase inline-flex items-center bg-[#ffb703] text-[#023047] font-medium py-4 px-8 rounded-xl hover:bg-transparent hover:border-1 hover:text-[#ffb703] hover:border-[#ffb703] transition shadow-md"
              >
                Enroll Now
                <LiaLongArrowAltRightSolid size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSectionStatic;
