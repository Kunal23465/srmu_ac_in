import { FC, useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import "./Testimonials.css";
import OurRecruiters from "../OurRecruiters";
import { Testimonial, testimonialData } from "../../../../data/placement/placementData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import recruiters_testimonials from "../../../../assets/images/placements/placement-overview/recruiters-testimonials.jpg";
import students_testimonials from "../../../../assets/images/placements/placement-overview/students-testimonials.jpg";

type ActiveTab = "recruiters" | "students";

const PlacementTestimonials: FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("recruiters");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const currentTestimonials: Testimonial[] = testimonialData[activeTab];
  const maxIndex = currentTestimonials.length - 1;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  // Re-initialize when tab changes
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
      setCurrentIndex(0);
    }
  }, [activeTab, emblaApi, hasMounted]);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="testimonials-section">
        <div className="content-container">
          <h2 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-2 text-center">
            What Our People say
          </h2>
          <p className="subtitle text-center max-w-3xl text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] mx-auto">
            Testimonials from student, staff, and alumni on their placement experience at SRMU
          </p>

          <div className="block md:flex justify-between items-start min-h-[500px] gap-[60px] mt-12">
            {/* LEFT SIDE */}
            <div className="flex-1 max-w-[600px]">
              {/* Tabs */}
              <div className="flex justify-start mb-10 overflow-x-auto gap-0">
                <button
                  className={`tab-button px-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] sm:px-6 py-1 sm:py-3 texm-sm! ${activeTab === "recruiters" ? "active" : ""
                    }`}
                  onClick={() => handleTabChange("recruiters")}
                >
                  RECRUITERS TESTIMONIALS
                </button>

                <button
                  className={`tab-button px-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] sm:px-6 py-1 sm:py-3 texm-sm! ${activeTab === "students" ? "active" : ""
                    }`}
                  onClick={() => handleTabChange("students")}
                >
                  STUDENT TESTIMONIALS
                </button>
              </div>

              {/* Static first testimonial */}
              <div className="testimonial-slide">
                <p className="testimonial-text leading-7 lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] text-[#757575]">
                  {currentTestimonials[0]?.text}
                </p>

                <div className="testimonial-author-info mt-8 flex items-center gap-4">
                  <img
                    src={currentTestimonials[0]?.image}
                    alt={currentTestimonials[0]?.author}
                    className="author-image-small"
                  />

                  <div className="author-details">
                    <p className="author-name lg:text-[22px] md:text-[20.625px] sm:text-[19.25px] text-[19.25px]">
                      {currentTestimonials[0]?.author} |
                    </p>
                    <p className="author-title text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                      {currentTestimonials[0]?.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-6 justify-end">
                {/* ARROWS (disabled) */}
                <button
                  disabled
                  className="arrow-button text-gray-700 bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 opacity-40 cursor-not-allowed"
                >
                  <MdKeyboardArrowLeft fill="gray" size="26" />
                </button>

                <button
                  disabled
                  className="arrow-button text-gray-700 bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 opacity-40 cursor-not-allowed"
                >
                  <MdKeyboardArrowRight fill="gray" size="26" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center items-center mx-w-[420px] mx-h-[420px] overflow-hidden rounded-full bg-gray-100">
              <img
                src={activeTab === "recruiters" ? recruiters_testimonials : students_testimonials}
                className="w-full h-full object-cover rounded-full"
                alt="Testimonial Subject"
              />
            </div>
          </div>
        </div>

        <OurRecruiters />
      </div>
    );
  }

  return (
    <div className="testimonials-section">
      <div className="content-container">
        <h2 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-2 text-center">What Our People say</h2>
        <p className="subtitle text-center max-w-3xl text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] mx-auto">
          Testimonials from student, staff, and alumni on their placement experience at SRMU
        </p>

        <div className="block md:flex justify-between items-start min-h-[500px] gap-[60px] mt-12">
          {/* LEFT SIDE */}
          <div className="flex-1 max-w-[600px]">
            {/* Tabs */}
            <div className="flex justify-start mb-10 overflow-x-auto gap-0">
              <button
                className={`tab-button px-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] sm:px-6 py-1 sm:py-3 texm-sm! ${activeTab === "recruiters" ? "active" : ""
                  }`}
                onClick={() => handleTabChange("recruiters")}
              >
                RECRUITERS TESTIMONIALS
              </button>

              <button
                className={`tab-button px-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] sm:px-6 py-1 sm:py-3 texm-sm! ${activeTab === "students" ? "active" : ""
                  }`}
                onClick={() => handleTabChange("students")}
              >
                STUDENT TESTIMONIALS
              </button>
            </div>

            {/* EMBLA CAROUSEL */}
            <div className="slider-track-container" style={{ position: "relative", overflow: "hidden" }}>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {currentTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex-grow-0 w-full"
                    >
                      <div className="testimonial-slide">
                        <p className="testimonial-text leading-7 lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] text-[#757575]">
                          {testimonial.text}
                        </p>

                        <div className="testimonial-author-info mt-8 flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="author-image-small"
                          />

                          <div className="author-details">
                            <p className="author-name lg:text-[22px] md:text-[20.625px] sm:text-[19.25px] text-[19.25px]">
                              {testimonial.author} |
                            </p>
                            <p className="author-title text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-6 justify-end">
              {/* ARROWS */}
              <button
                className="arrow-button text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer transition-all"
                onClick={goToPrev}
                disabled={currentIndex === 0}
                style={{
                  opacity: currentIndex === 0 ? 0.4 : 1,
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                <MdKeyboardArrowLeft fill="gray" size="26" />
              </button>

              <button
                className="arrow-button text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer transition-all"
                onClick={goToNext}
                disabled={currentIndex === maxIndex}
                style={{
                  opacity: currentIndex === maxIndex ? 0.4 : 1,
                  cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
                }}
              >
                <MdKeyboardArrowRight fill="gray" size="26" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center items-center mx-w-[420px] mx-h-[420px] overflow-hidden rounded-full bg-gray-100">
            <img
              src={activeTab === "recruiters" ? recruiters_testimonials : students_testimonials}
              className="w-full h-full object-cover rounded-full"
              alt="Testimonial Subject"
            />
          </div>
        </div>
      </div>

      <OurRecruiters />
    </div>
  );
};

export default PlacementTestimonials;