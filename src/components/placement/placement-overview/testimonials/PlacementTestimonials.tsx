import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "./Testimonials.css";
import OurRecruiters from "../OurRecruiters";
import { Testimonial, testimonialData } from "../../../../data/placement/placementData";

type ActiveTab = "recruiters" | "students";

const PlacementTestimonials: FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("recruiters");
  const sliderRef = useRef<Slider>(null);
const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonials: Testimonial[] = testimonialData[activeTab];
const maxIndex = currentTestimonials.length - 1;
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    sliderRef.current?.slickGoTo(0);
    setCurrentIndex(0);

  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: "ease-in-out",
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div className="testimonials-section">
      <div className="content-container">
        <h2 className="text-3xl md:text-5xl mb-2 font-medium text-center">What Our People say</h2>
        <p className="subtitle text-center max-w-3xl mx-auto">Testimonials from student, staff, and alumni on their placement experience at SRMU</p>

        <div className="block md:flex justify-between items-center min-h-[500px] gap-[60px] mt-12">
          {/* LEFT SIDE */}
          <div className="flex-1 max-w-[600px]">
            {/* Tabs */}
            <div className="flex justify-start mb-10 overflow-x-auto gap-0">
              <button className={`tab-button px-3 sm:px-6 py-1 sm:py-3 texm-sm! sm:text-[16px]! ${activeTab === "recruiters" ? "active" : ""}`} onClick={() => handleTabChange("recruiters")}>
                RECRUITERS TESTIMONIALS
              </button>

              <button className={`tab-button px-3 sm:px-6 py-1 sm:py-3 texm-sm! sm:text-[16px]! ${activeTab === "students" ? "active" : ""}`} onClick={() => handleTabChange("students")}>
                STUDENT TESTIMONIALS
              </button>
            </div>

            {/* SLIDER */}
            <div className="slider-track-container" style={{ position: "relative", overflow: "hidden" }}>
              <Slider ref={sliderRef} {...settings}>
                {currentTestimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-slide">
                    <p className="testimonial-text leading-7 text-sm md:text-lg text-[#757575]">{testimonial.text}</p>

                    <div className="testimonial-author-info mt-8 flex items-center gap-4">
                      <img src={testimonial.image} alt={testimonial.author} className="author-image-small" />

                      <div className="author-details">
                        <p className="author-name font-semibold">{testimonial.author} |</p>
                        <p className="author-title text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="mt-10 flex gap-6 justify-end">
              {/* ARROWS */}
              <button
                className="arrow-button"
                onClick={() => sliderRef.current?.slickPrev()}
                disabled={currentIndex === 0}
                style={{
                  opacity: currentIndex === 0 ? 0.4 : 1,
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                <FaArrowLeft fill="gray" />
              </button>

              <button
                className="arrow-button"
                onClick={() => sliderRef.current?.slickNext()}
                disabled={currentIndex === maxIndex}
                style={{
                  opacity: currentIndex === maxIndex ? 0.4 : 1,
                  cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
                }}
              >
                <FaArrowRight fill="gray" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center items-center mx-w-[420px] mx-h-[420px] overflow-hidden rounded-full bg-gray-100">
            <img
              src={
                activeTab === "recruiters"
                  ? "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
                  : "/src/assets/images/placements/placement-overview/students-testimonials.jpg"
              }
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
