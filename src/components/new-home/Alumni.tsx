import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { alumniData } from "../../data/new-home/alumniData";
import MobileReadMore from "./MobileReadMore";
import Classes from "../../utils/styles/Global.module.css";
import { Link } from "react-router-dom";

export default function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState<(typeof alumniData)[number] | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const mobileVisibleCount = 2;
  const mobileMaxIndex = Math.max(0, alumniData.length - mobileVisibleCount);
  const safeMobileIndex = Math.min(mobileIndex, mobileMaxIndex);
  const nextMobile = () => setMobileIndex(Math.min(mobileMaxIndex, safeMobileIndex + 1));
  const prevMobile = () => setMobileIndex(Math.max(0, safeMobileIndex - 1));

  return (
    <section className="bg-gradient-to-b from-white to-[#E0F1FF] ">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
          {/* Intro - row 1, cols 1-3 on md+ */}
          <div className="col-span-3 flex flex-col justify-center pr-4 sm:col-span-4 md:col-span-3">
            <h2 className="flex flex-col text-lg font-bold text-[#0A4A8F] md:text-3xl lg:text-4xl leading-tight md:leading-tight">
              From SRMU Classrooms to <span className="block text-[#FFC107] md:text-3xl lg:text-4xl">Global Careers</span>
            </h2>
            <MobileReadMore className="mt-2 md:mt-3 text-[13px] md:text-base leading-relaxed text-gray-700">
              From entrepreneurs and startup founders to professionals in government organizations and top multinational
              companies, SRMU alumni are building successful careers across diverse industries.
            </MobileReadMore>
            <Link
              to="/notable-alumni"
              className="mt-4 md:mt-5 inline-flex items-center justify-center gap-2 self-start rounded-md bg-[#0A4A8F] px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-base font-bold text-white shadow-md transition-colors duration-200 hover:bg-[#083B73]"
            >
              All Notable Alumni <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative col-span-3 sm:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${safeMobileIndex * 50}%)` }}
              >
                {alumniData.map((data) => (
                  <div key={data.id} className="w-1/2 flex-shrink-0 px-1.5">
                    <div className="group aspect-square [perspective:1000px]">
                      <div className="relative h-full w-full rounded-xl shadow-soft transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0 overflow-hidden rounded-xl [backface-visibility:hidden]">
                          <img
                            src={data.image}
                            alt={data.name}
                            width={640}
                            height={640}
                            sizes="50vw"
                            className="h-full w-full object-cover object-top"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <h3 className="text-[11px] font-bold leading-tight text-white">{data.name}</h3>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col justify-between rounded-xl bg-[#0A4A8F] p-2 text-white [backface-visibility:hidden]">
                          <div>
                            <h3 className="text-[11px] font-bold leading-tight">{data.name}</h3>
                            <p className="mt-1 line-clamp-2 text-[9px] font-medium leading-snug text-[#FFC107]">
                              {data.title}
                            </p>
                            <p className="mt-1 line-clamp-3 text-[10px] leading-snug text-white/90">{data.desc}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedAlumni(data)}
                            className="mt-1 w-full rounded-md bg-[#FFC107] px-2 py-1.5 text-[10px] font-bold text-[#0A4A8F] transition-colors hover:bg-[#E0A800] focus:outline-none focus:ring-2 focus:ring-white/80"
                          >
                            More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {alumniData.length > mobileVisibleCount && (
              <>
                <button
                  type="button"
                  onClick={prevMobile}
                  disabled={safeMobileIndex === 0}
                  aria-label="Previous alumni"
                  className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A4A8F] shadow-md disabled:opacity-40"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={nextMobile}
                  disabled={safeMobileIndex >= mobileMaxIndex}
                  aria-label="Next alumni"
                  className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A4A8F] shadow-md disabled:opacity-40"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          {alumniData.map((data) => (
            <div key={data.id} className="group hidden aspect-square [perspective:1000px] sm:block">
              <div className="relative h-full w-full rounded-xl shadow-soft transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 overflow-hidden rounded-xl [backface-visibility:hidden]">
                  <img
                    src={data.image}
                    alt={data.name}
                    width={640}
                    height={640}
                    sizes="(min-width: 768px) 20vw, (min-width: 640px) 25vw, 50vw"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-sm font-bold leading-tight text-white">{data.name}</h3>
                  </div>
                </div>

                <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col justify-between rounded-xl bg-[#0A4A8F] p-3 text-white [backface-visibility:hidden]">
                  <div>
                    <h3 className="text-sm font-bold leading-tight">{data.name}</h3>
                    <p className="mt-1 line-clamp-2 text-[11px] font-medium leading-snug text-[#FFC107]">
                      {data.title}
                    </p>
                    <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-white/90">{data.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedAlumni(data)}
                    className="mt-2 w-full rounded-md bg-[#FFC107] px-3 py-2 text-xs font-bold text-[#0A4A8F] transition-colors hover:bg-[#E0A800] focus:outline-none focus:ring-2 focus:ring-white/80"
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAlumni && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="alumni-modal-title"
          onClick={() => setSelectedAlumni(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-5 shadow-2xl md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedAlumni(null)}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A4A8F]"
            >
              <IoClose className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-5 sm:flex-row">
              <img
                src={selectedAlumni.image}
                alt={selectedAlumni.name}
                width={640}
                height={640}
                className="h-48 w-full rounded-lg object-cover object-top sm:h-56 sm:w-44"
              />
              <div className="pr-1 sm:pr-8">
                <h3 id="alumni-modal-title" className="text-2xl font-bold text-[#0A4A8F]">
                  {selectedAlumni.name}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#C58D00]">
                  {selectedAlumni.title}
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{selectedAlumni.fullDesc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
