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
    <div className="py-20 bg-[#f7f9ff] flex flex-col items-center">
      <h2 className="text-[28px] text-center lg:text-[3.125rem] fw600 mb-12">
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
                    className={`rounded-full transition-all duration-300 overflow-hidden border-2
                    w-[90px] h-[90px]
                    sm:w-[120px] sm:h-[120px]
                    md:w-[168px] md:h-[168px]
                    ${index === activeIndex
                        ? "border-[#3A6EFF] scale-100 shadow-lg"
                        : "border-gray-300"
                      }`}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonial text */}

      <div className="max-w-3xl mx-auto text-center px-4 mt-10">
        <div className="flex justify-center">
          <img src={quote} className="w-10 md:w-auto" alt="quote" />
        </div>

        <h3 className="font21 fw600 mt-4">
          {hometestimonial[displayIndex].name}
        </h3>

        <p className="text-[#00000099] text-sm">
          {hometestimonial[displayIndex].batch}
        </p>

        <p className="mt-4 text-[#00000099] leading-relaxed font19">
          {hometestimonial[displayIndex].text}
        </p>

        <div className="mt-10">
          <Link
            to="/placements/student-testimonial"
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