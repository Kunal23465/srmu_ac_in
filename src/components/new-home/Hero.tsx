import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bannerVideo from '../../assets/new-home/banner_video_optimized.mp4';
import bannerImage from '../../assets/new-home/video-banner.webp';
import ApprovedData from '../../data/new-home/ApprovedData';
import Classes from "../../utils/styles/Global.module.css";
export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);


  return (
    <>
      <section className="relative overflow-hidden pt-[78px] pb-8 md:min-h-[720px] md:pt-36 md:pb-20">
        {/* Background Image */}
        <img
          src={bannerImage}
          alt=""
          aria-hidden="true"
          className={`absolute top-0 left-0 h-[320px] w-full object-cover md:h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
        />

        {/* Background Video */}
        <video
          className={`absolute top-0 left-0 h-[320px] w-full object-cover md:h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={bannerImage}
          onCanPlay={() => setVideoLoaded(true)}
          src={bannerVideo}
          style={{ filter: 'contrast(1.05) saturate(1.05)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 sm:bg-gradient-to-r from-[#03182B]/80 via-[#062744]/45 to-transparent" />

        {/* Mobile bottom white */}
        <div className="absolute left-0 right-0 top-[320px] bottom-0 bg-white md:hidden" />
        <div className={`${Classes["container"]} `}>
        <div  className="relative  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-white mt-16 md:mt-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC107]" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em]">
                Admission Open · 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[24px] leading-[1.2] font-extrabold md:text-[46px] md:leading-[1.3]">
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
                Approved by
              </span>

              {/* Icons */}
              <h3 className="block md:hidden mt-24 text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight mb-3">
                Approved by
              </h3>
              <div className="grid grid-cols-5   sm:mt-0 gap-2 md:flex md:max-w-[320px]">
                {ApprovedData.map((data) => (
                  <div
                    key={data.id}
                    className="rounded-lg shadow-md bg-white/95 p-1 flex items-center justify-center h-12 md:h-14"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APPLY FORM DESKTOP */}
          <div className="hidden sm:block lg:col-span-5">
            <ApplyForm />
          </div>
        </div>
        </div>
      </section>

      {/* MOBILE FORM */}
      <div className="block sm:hidden px-4 -mt-10 relative z-20">
        <ApplyForm />
      </div>
    </>
  );
}

/* FORM COMPONENT */
function ApplyForm() {
  return (
    <div className="relative mt-10 sm:mt-0 md:max-w-md lg:ml-auto">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FFC107]/30 to-[#0A4A8F]/30 blur-lg opacity-60" />

      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#0A4A8F] to-[#062744] px-5 pt-6 pb-5 text-center">
          <h3 className="text-base md:text-xl font-bold text-white">
            Shri Ramswaroop Memorial University
          </h3>

          <p className="text-[10px] md:text-[11px] text-white/70 mt-1">
            Begin your journey in under 60 seconds
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-1.5 w-16 rounded-full bg-[#FFC107]" />
        </div>

        {/* Form */}
        <form className="px-5 pt-6 pb-5 space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none"
          />

          <div className="grid grid-cols-2 gap-3">
            <select className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm">
              <option>Programme</option>
            </select>

            <select className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm">
              <option>Level</option>
            </select>
          </div>

          <button
            type="submit"
            className="group btn-primary w-full py-3 text-sm tracking-wide flex items-center justify-center gap-2"
          >
            APPLY NOW

            <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <p className="text-[10px] text-center text-gray-500">
            By submitting, you agree to be contacted by SRMU regarding
            admissions.
          </p>
        </form>
      </div>
    </div>
  );
}