import { lazy, Suspense, useEffect, useState } from 'react';
import bannerVideo from '../../assets/new-home/banner-v-compressed.mp4';
import bannerImage640 from '../../assets/new-home/video-banner-640.webp';
import bannerImage960 from '../../assets/new-home/video-banner-960.webp';
import bannerImage from '../../assets/new-home/video-banner.webp';
import bannerImage640Avif from '../../assets/new-home/video-banner-640.avif';
import bannerImage960Avif from '../../assets/new-home/video-banner-960.avif';
import bannerImageAvif from '../../assets/new-home/video-banner.avif';
import ApprovedData from '../../data/new-home/ApprovedData';
import Classes from "../../utils/styles/Global.module.css";

const HeroApplyForm = lazy(() => import("./HeroApplyForm"));

const ApplyFormShell = () => (
  <div className="relative mt-10 sm:mt-0 md:max-w-md lg:ml-auto" aria-hidden="true">
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FFC107]/20 to-[#0A4A8F]/20 blur-lg opacity-50" />
    <div className="relative min-h-[432px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
      <div className="bg-[#0A4A8F] px-5 pt-6 pb-5 text-center">
        <div className="mx-auto h-5 w-56 max-w-full rounded bg-white/25" />
        <div className="mx-auto mt-2 h-3 w-40 rounded bg-white/15" />
      </div>
      <div className="space-y-3 px-5 pt-6 pb-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="h-11 rounded-lg bg-gray-100" />
          <div className="h-11 rounded-lg bg-gray-100" />
        </div>
        <div className="h-11 rounded-lg bg-gray-100" />
        <div className="h-11 rounded-lg bg-gray-100" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-11 rounded-lg bg-gray-100" />
          <div className="h-11 rounded-lg bg-gray-100" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-11 rounded-lg bg-gray-100" />
          <div className="h-11 rounded-lg bg-gray-100" />
        </div>
        <div className="h-8 rounded bg-gray-100" />
        <div className="h-11 rounded-lg bg-[#FFC107]/70" />
      </div>
    </div>
  </div>
);

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (connection?.saveData || connection?.effectiveType === "2g") {
      return;
    }

    const enableVideo = () => setShouldLoadVideo(true);
    const requestIdle = (window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    }).requestIdleCallback;

    if (requestIdle) {
      const idleId = requestIdle(enableVideo, { timeout: 1800 });
      return () => {
        (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      };
    }

    const timeout = window.setTimeout(enableVideo, 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-[78px] pb-8 md:min-h-[720px] md:pt-36 md:pb-20">
        {/* Background Image */}
        <picture>
          <source
            srcSet={`${bannerImage640Avif} 640w, ${bannerImage960Avif} 960w, ${bannerImageAvif} 1348w`}
            type="image/avif"
            sizes="100vw"
          />
          <source
            srcSet={`${bannerImage640} 640w, ${bannerImage960} 960w, ${bannerImage} 1348w`}
            type="image/webp"
            sizes="100vw"
          />
          <img
            src={bannerImage}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width={1348}
            height={564}
            sizes="100vw"
            className={`absolute top-0 left-0 h-[320px] w-full object-cover md:h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
          />
        </picture>

        {/* Background Video */}
        <video
          className={`absolute top-0 left-0 h-[320px] w-full object-cover md:h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          autoPlay={shouldLoadVideo}
          muted
          loop
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
          poster={bannerImage}
          onCanPlay={() => setVideoLoaded(true)}
          src={shouldLoadVideo ? bannerVideo : undefined}
          style={{ filter: 'contrast(1.05) saturate(1.05)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 sm:bg-gradient-to-r from-[#03182B]/80 via-[#062744]/45 to-transparent" />

        {/* Mobile bottom white */}
        <div className="absolute left-0 right-0 top-[320px] bottom-0 bg-white md:hidden" />
        <div className={`${Classes["container"]} `}>
          <div className="relative  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT CONTENT */}
            <div className=" lg:col-span-7
    text-white
    mt-10 md:mt-0
    sm:bg-black/10
    py-5 px-5
    rounded-[2rem_0_2rem_0]
    hover:rounded-[0_2rem_0_2rem]
    transition-all duration-500 ease-in-out cursor-pointer">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC107]" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em]">
                  Admission Open · 2026
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[20px] sm:text-[24px] leading-[1.2] font-extrabold md:text-[40px] md:leading-[1.3]">
                Best University in
                <span className="text-[#FFC107] ml-2 relative inline-block">
                  Uttar Pradesh
                </span>
                <br />
                for Future-Ready Careers
              </h1>

              {/* Desktop Content */}
              <p className="hidden md:block mt-4 max-w-2xl text-base text-white/90">
                Recognized among the preferred private universities for students
                across Uttar Pradesh and nearby regions. SRMU is ISO 9001, ISO
                14001, and ISO 50001 certified organization Rated A++ By Career
                360.
              </p>

              {/* Approved */}
              <div className="mt-5">
                <span className="hidden md:inline-block text-sm text-[#FFC107] font-medium mb-3">
                  Recognitions & Accreditation
                </span>

                {/* Icons */}
                <h3 className="block md:hidden mt-24 text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight mb-3">
                  Recognitions & Accreditation
                </h3>
                <div className="grid grid-cols-5 sm:mt-0 gap-2 md:flex md:max-w-[320px]">
                  {ApprovedData.map((data) => (
                    <div key={data.id}>
                      <div

                        className="rounded-lg shadow-md bg-white/95 p-1 flex items-center sm:min-w-[65px] justify-center h-12 md:h-14"
                      >
                        <img
                          src={data.img}
                          alt={data.title}
                          width={160}
                          height={160}
                          sizes="65px"
                          className="h-full w-full object-contain"
                        />

                      </div>
                      <div className="text-[10px] sm:text-xs text-center mt-2 font-medium text-[#0A4A8F] sm:text-white">{data.title}</div>
                    </div>
                  ))}
                </div>


              </div>
            </div>

            {/* APPLY FORM DESKTOP */}
            <div className="hidden sm:block lg:col-span-5">
              <Suspense fallback={<ApplyFormShell />}>
                <HeroApplyForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FORM */}
      <div className="block sm:hidden px-4 -mt-16 relative z-20">
        <Suspense fallback={<ApplyFormShell />}>
          <HeroApplyForm />
        </Suspense>
      </div>
    </>
  );
}
