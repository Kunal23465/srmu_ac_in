import EmblaCarousel from "./EmbelCrousel";
import amazon from "../../assets/new-home/recruiters/amazon.png";
import capgemini from "../../assets/new-home/recruiters/capgemini.jpg";
import gsk from "../../assets/new-home/recruiters/gsk.jpg";
import lt from "../../assets/new-home/recruiters/l-t.jpg";
import mankind from "../../assets/new-home/recruiters/mankind.jpg";
import policy from "../../assets/new-home/recruiters/policy.jpg";
import ranbaxy from "../../assets/new-home/recruiters/ranbaxy.jpg";
import tataSteel from "../../assets/new-home/recruiters/tata-steek.jpg";
import zydus from "../../assets/new-home/recruiters/zydus.jpg";
import MobileReadMore from "./MobileReadMore";
import Classes from "../../utils/styles/Global.module.css";

const placementStats = [
  { v: '₹17 LPA', l: 'Highest Package' },
  { v: '1100+', l: 'Job Offers' },
  { v: '225', l: 'Students Above 5+ LPA' },
  { v: '33%', l: 'Students with Multiple Offers' },
  { v: '100%', l: 'Placement in Core Branches' },


];

const companies = [
  { name: 'Amazon', logo: amazon },
  { name: 'Capgemini', logo: capgemini },
  { name: 'GSK', logo: gsk },
  { name: 'L&T', logo: lt },
  { name: 'Mankind', logo: mankind },
  { name: 'Policy', logo: policy },
  { name: 'Ranbaxy', logo: ranbaxy },
  { name: 'Tata Steel', logo: tataSteel },
  { name: 'Zydus', logo: zydus },
];

export default function Placements() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-[#CEE0EF] to-white pt-8 md:pt-16 pb-8 md:pb-16">
        <div className={`${Classes["container"]} `}>
          <div className="mb-5 md:mb-10">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight">
              Trusted Education with <span className="text-[#FFC107]  lg:text-3xl  block!">Outstanding Placements</span>
            </h2>
            <MobileReadMore className="mt-2 md:mt-3 text-[13px] md:text-base text-gray-600 leading-relaxed">
              SRMU combines academic learning with industry exposure, internships, technical training and placement preparation to help students build future-ready careers. Recognized among the preferred choices for students seeking the best university in Uttar Pradesh for professional and technology-focused education, SRMU emphasizes practical learning through live projects, coding culture, recruiter engagement and skill-focused training across engineering, AI, management, healthcare and emerging technologies.
            </MobileReadMore>
          </div>

          {/* <div className="md:hidden">
            <EmblaCarousel
              slides={placementStats}
              getSlideKey={(s) => s.l}
              slideClassName="min-w-0 shrink-0 grow-0 basis-1/2 pl-3"
              containerClassName="-ml-3 flex"
              autoplayDelay={1800}
              showDots={false}
              loop
              renderSlide={(s) => (
                <div className="h-24 rounded-lg border border-gray-100 bg-white px-3 py-4 text-center shadow-soft">
                  <p className="text-lg font-extrabold leading-none text-[#FFB703]">{s.v}</p>
                  <p className="mt-3 text-[9px] font-bold uppercase tracking-wide leading-snug text-gray-900">
                    {s.l}
                  </p>
                </div>
              )}
            />
          </div> */}


          {/* For Big Screen */}
          <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 hidden ">
            {placementStats.map((s) => (
              <div
                key={s.l}
                className="bg-white border border-gray-100 rounded-xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-3 sm:p-5 text-center"
              >
                <p className="text-xl md:text-2xl font-extrabold text-[#FFB703]">{s.v}</p>
                <p className="text-[10px] md:text-[11px] font-semibold text-gray-700 uppercase tracking-wider mt-2 leading-snug">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          {/* For Mobile Screen */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 sm:hidden ">
            {placementStats.slice(0, 4).map((s) => (
              <div
                key={s.l}
                className="bg-white border border-gray-100 rounded-xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-3 sm:p-5 text-center"
              >
                <p className="text-xl md:text-2xl font-extrabold text-[#FFB703]">{s.v}</p>
                <p className="text-[10px] md:text-[11px] font-semibold text-gray-700 uppercase tracking-wider mt-2 leading-snug">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 sm:hidden flex justify-center">
            {placementStats.slice(4, 5).map((s) => (
              <div
                key={s.l}
                className="bg-white border border-gray-100 rounded-xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-3 sm:p-5 text-center"
              >
                <p className="text-xl md:text-2xl font-extrabold text-[#FFB703]">{s.v}</p>
                <p className="text-[10px] md:text-[11px] font-semibold text-gray-700 uppercase tracking-wider mt-2 leading-snug">
                  {s.l}
                </p>
              </div>
            ))}
          </div>




        </div>
      </section>
      <section className="bg-[#0F4A85] py-6 md:py-12">
        <div className={`${Classes["container"]} `}>
          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white flex flex-col leading-tight md:leading-tight">
            Leading Companies
            <span className="text-[#FFC107] lg:text-3xl block">Recruiting from SRMU</span>
          </h2>


          <MobileReadMore className="text-[13px] md:text-base text-white leading-relaxed mt-2 md:mt-3 mb-5 md:mb-6">
            Along with strong placement opportunities, SRMU stands among the preferred choices for students seeking the best college in Uttar Pradesh by encouraging innovation, startup culture and entrepreneurship through practical learning, live projects and industry exposure.
          </MobileReadMore>

          <EmblaCarousel
            slides={companies}
            getSlideKey={(c) => c.name}
            slideClassName="min-w-0 shrink-0 grow-0 basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 pl-4"
            containerClassName="-ml-4 flex"
            autoplayDelay={2000}
            showDots={false}
            loop
            renderSlide={(c) => (
              <div className="flex items-center bg-white rounded-md overflow-hidden justify-center h-20 md:h-24 px-2">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-full max-w-full object-contain "
                />
              </div>
            )}
          />



        </div>
      </section>

    </>
  );
}
