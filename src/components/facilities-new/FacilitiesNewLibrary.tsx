import { ArrowUpRight, BookOpen, Database, FileText, Monitor, Printer, UsersRound, Wifi } from "lucide-react";
import { facilitiesNewPageCopy } from "../../data/campus-life/facilities/facilities-new-data";
import libraryImage from "../../assets/images/bus-images/IMG_1667.webp";

const featureIcons = [BookOpen, Wifi, Monitor, Database, UsersRound, FileText, Printer, Monitor];
const featureIconColors = [
  "from-[#0F4A85] to-[#21A5DB] text-white",
  "from-[#21A5DB] to-[#0F4A85] text-white",
  "from-[#FFB703] to-[#FFB703] text-white",
  "from-[#D62C2B] to-[#D62C2B] text-white",
  "from-[#21A5DB] to-[#0F4A85] text-white",
  "from-[#0F4A85] to-[#14284E] text-white",
  "from-[#D62C2B] to-[#D62C2B] text-white",
  "from-[#FFB703] to-[#FFB703] text-white",
];
const featureIconRings = [
  "border-t-[#21A5DB] border-r-[#FFB703] border-b-[#0F4A85] border-l-transparent",
  "border-t-[#0F4A85] border-r-[#FFB703] border-b-transparent border-l-transparent",
  "border-t-[#FFB703] border-r-[#D62C2B] border-b-[#14284E] border-l-transparent",
  "border-t-[#14284E] border-r-[#FFB703] border-b-[#D62C2B] border-l-transparent",
  "border-t-[#0F4A85] border-r-[#FFB703] border-b-transparent border-l-transparent",
  "border-t-[#0F4A85] border-r-[#FFB703] border-b-[#14284E] border-l-transparent",
  "border-t-[#14284E] border-r-[#FFB703] border-b-[#D62C2B] border-l-transparent",
  "border-t-[#FFB703] border-r-[#0F4A85] border-b-[#14284E] border-l-transparent",
];

export default function FacilitiesNewLibrary() {
  const library = facilitiesNewPageCopy.library;

  return (
    <section id="facilities-new-library" className="scroll-mt-24" aria-labelledby="facilities-new-library-title">
      <div className="bg-[#14284E] px-6 py-6 text-white sm:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 id="facilities-new-library-title" className="font-display text-[clamp(30px,3.8vw,48px)] leading-[1.12] font-semibold tracking-tight">Central Library and <span className="text-[#FFB70F]">Digital Learning Resources</span></h2>
          <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
          <p className="w-full text-[15px] leading-[1.75] text-[#AEBBD8] sm:text-base">{library.introduction}</p>
          <div className="mt-8 max-w-[900px]">
            <h3 className="font-display text-lg font-semibold">Library Collection</h3>
            <p className="mt-2 text-sm text-[#AEBBD8]">{library.collectionIntroduction}</p>
            <dl className="mt-5 grid grid-cols-1 border-t border-white/30 sm:grid-cols-3">
              {library.collections.map(({ value, label }, index) => {
                return (
                  <div key={label} className={`flex flex-col py-5 sm:pr-5 ${index > 0 ? "border-t border-white/30 sm:border-t-0 sm:border-l sm:pl-6" : ""}`}>
                    <dt className="mt-2 text-sm text-[#CFDAF0]">{label}</dt>
                    <dd className="order-first font-display text-[clamp(36px,5vw,64px)] leading-none font-bold text-[#FFB70F]">{value}</dd>
                  </div>
                );
              })}
            </dl>
            <p className="max-w-[76ch] text-sm leading-relaxed text-[#AEBBD8]">{library.additionalMaterials}</p>
          </div>
        </div>
      </div>

      <div className="grid bg-[#14284E] lg:min-h-[460px] lg:grid-cols-2">
        <figure className="relative m-0 min-h-[280px] overflow-hidden bg-[#FFB70F] lg:min-h-[460px] lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_34px)_100%,0_100%)]">
          <img src={libraryImage} alt="SRMU student browsing academic books in the Central Library" width={6000} height={4000} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_62px)_100%,0_100%)]" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14284E]/90 to-transparent px-5 pb-4 pt-14 font-semibold text-white">The Central Library at SRMU</figcaption>
        </figure>
        <div className="flex flex-col justify-center px-6 py-6 sm:px-10 sm:py-8 lg:py-10 lg:pr-10 lg:pl-16">
          <h3 className="font-display text-xl font-semibold text-white">Library Facilities</h3>
          {/* <p className="max-w-[58ch] text-[15px] leading-[1.75] text-[#5B6885]">{library.facilitiesIntroduction}</p> */}
          <ul className="mt-5 grid list-none gap-x-8 p-0 lg:grid-cols-2">
            {library.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? FileText;
              return <li key={feature} className="group flex min-w-0 list-none items-center gap-4 py-2 text-sm leading-relaxed text-[#AEBBD8] before:content-none">
                  <span className="relative isolate grid size-[76px] shrink-0 place-items-center" aria-hidden="true">
                    <span className={`absolute inset-[6px] rounded-full bg-gradient-to-br shadow-[0_8px_14px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110 ${featureIconColors[index % featureIconColors.length]}`} />
                    <span className={`absolute inset-0 rotate-12 rounded-full border-[3px] border-transparent transition-transform duration-700 ease-out group-hover:rotate-[190deg] ${featureIconRings[index % featureIconRings.length]}`} />
                    <span className="absolute -inset-1.5 -rotate-12 rounded-full border-2 border-transparent border-b-[#21A5DB]/70 border-l-[#14284E]/80 transition-transform duration-1000 ease-out group-hover:-rotate-[190deg]" />
                    <Icon className="relative z-10" size={27} strokeWidth={1.9} />
                  </span>
                  <span>{feature}</span>
                </li>;
            })}
          </ul>
          <div className="mt-7 border-t border-white/25 pt-6">
            <h3 className="font-display text-xl font-semibold text-white">Digital research resources</h3>
            <p className="mt-2 max-w-[78ch] text-sm leading-relaxed text-[#AEBBD8]">Students and faculty can access subscribed academic databases and digital learning resources, as listed by the university.</p>
            <ul className="mt-4 flex list-none flex-wrap gap-x-7 gap-y-2 p-0 text-sm font-semibold text-white">
              {library.databaseNames.map((name) => <li key={name} className="relative list-none pl-4 before:absolute before:top-[0.62em] before:left-0 before:size-[7px] before:rounded-full before:bg-[#FFB70F]">{name}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="inline-flex min-h-11 items-center gap-2 border-2 border-[#FFB70F] bg-[#FFB70F] px-7 py-3 text-sm font-semibold text-[#14284E] transition-colors hover:bg-[#FFC83D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB70F]" href={library.webOpacUrl} target="_blank" rel="noreferrer">WebOPAC access link <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="inline-flex min-h-11 items-center gap-2 border-2 border-white px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#14284E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB70F]" href={library.remoteAccessUrl} target="_blank" rel="noreferrer">Remote access link <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
