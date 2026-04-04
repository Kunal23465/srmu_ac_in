import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { hometestimonial } from "../../data/home/student-testimonialhome-data";
import quote from "../../assets/images/home/quote.png";
import Classes from "../../utils/styles/Global.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 items-center justify-center rounded-full border border-gray-200 z-10 hover:bg-[#ffb703] hover:text-white"
  >
    <MdKeyboardArrowRight size={26} />
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 items-center justify-center rounded-full border border-gray-200 z-10 hover:bg-[#ffb703] hover:text-white"
  >
    <MdKeyboardArrowLeft size={26} />
  </button>
);

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const goNext = () => emblaApi?.scrollNext();
  const goPrev = () => emblaApi?.scrollPrev();

  const displayIndex = activeIndex % hometestimonial.length;

  return (
    <div className="py-8 md:py-10 lg:py-12 bg-[#f7f9ff] flex flex-col items-center">
      <h2 className="text-[28px] text-center lg:text-[3rem] fw600 mb-10">
        Student Testimonials
      </h2>

      <div
        className={`relative ${Classes["container"]} w-full max-w-[1200px] mx-auto`}
      >
        {/* arrows */}
        <PrevArrow onClick={goPrev} />
        <NextArrow onClick={goNext} />

        {/* slider */}
        <div className="overflow-hidden px-14" ref={emblaRef}>
          <div className="flex gap-4">
            {hometestimonial.map((item, index) => (
              <div
                key={item.id}
                className="flex-[0_0_14.285%]"
              >
                <div className="flex justify-center">
                  <div
                    className={`relative rounded-full transition-all duration-300
                    w-[92px] h-[92px]
                    sm:w-[122px] sm:h-[122px]
                    md:w-[176px] md:h-[176px]
                    ${index === activeIndex ? "scale-100" : "scale-[0.86] md:scale-[0.82]"}`}
                  >
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-[radial-gradient(circle_at_center,_rgba(58,110,255,0.22),_rgba(58,110,255,0)_68%)] scale-[1.14]"
                          : "bg-[radial-gradient(circle_at_center,_rgba(2,48,71,0.08),_rgba(2,48,71,0)_72%)]"
                      }`}
                    />
                    <div
                      className={`relative h-full w-full rounded-full p-[4px] transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-[linear-gradient(145deg,#ffb703,#3a6eff)] shadow-[0_18px_40px_rgba(58,110,255,0.22)]"
                          : "bg-white shadow-[0_10px_24px_rgba(2,48,71,0.08)]"
                      }`}
                    >
                      <div
                        className={`h-full w-full overflow-hidden rounded-full border transition-all duration-300 ${
                          index === activeIndex ? "border-white/80 bg-white" : "border-[#d8deea] bg-[#eef3fb]"
                        }`}
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className={`block aspect-square h-full w-full object-cover object-top transition-all duration-300 ${
                            index === activeIndex
                              ? "scale-105 saturate-110 contrast-105"
                              : "grayscale-[0.12] brightness-[0.97]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonial text */}

      <div className="max-w-3xl mx-auto text-center px-4 mt-8">
        <div className="flex justify-center">
          <img src={quote} className="w-10 md:w-auto" alt="quote" />
        </div>

        <h2 className="font21 fw600 mt-4">
          {hometestimonial[displayIndex].name}
        </h2>

        <p className="text-[#00000099] text-sm">
          {hometestimonial[displayIndex].batch}
        </p>

        <p className="mt-4 text-[#00000099] leading-relaxed font19">
          {hometestimonial[displayIndex].text}
        </p>

        <div className="mt-8">
          <Link
            to="/all-testimonial"
            className="bg-[#023047] inline-flex gap-x-2 items-center text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#023047] border hover:border-[#023047]"
          >
            VIEW ALL TESTIMONIALS
            <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
