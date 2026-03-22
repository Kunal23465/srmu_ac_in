import React, { useEffect, useState } from "react";
import { testimonialCard } from "../../data/placement/student-testimonial/testimonialcardData";
import { MdClose } from "react-icons/md";
interface CustomTestimonialProps {
  data: testimonialCard[];
}

interface propsModal {
  id: number;
  img: string;
  text: string;
  name: string;
  batch: string;
  isExpanded: number | null;
  setIsExpanded: any;
}

const CustomModal: React.FC<propsModal> = ({ id, img, text, name, batch, isExpanded, setIsExpanded }) => {
  return (
    <>
      {isExpanded == id && (
        <>
          <div className="bg-gray-950/80 w-full h-screen fixed top-0 left-0 z-[999]"></div>
          <div className="w-[90%]  max-w-[500px] xl:max-w-[800px]  fixed top-[50%] left-[50%] border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85] bg-white translate-x-[-50%] translate-y-[-50%] z-[9999]">
            <div className="max-h-[650px] overflow-y-auto px-5 py-10">
              <span
                onClick={() => setIsExpanded(null)}
                className="flex justify-center items-center min-w-[25px] min-h-[25px] bg-[#0f4a85] text-white shadow-md rounded-full absolute -top-[10px] -right-[10px] cursor-pointer"
              >
                <MdClose size={18} />
              </span>
              <center>
                <img className="w-78 h-78 mb-5 mx-auto" src={img} alt={name} />

                <div dangerouslySetInnerHTML={{ __html: text }} />
                <br />
                <strong>{name}</strong>
                <p className="text-xs! text-gray-700">{batch}</p>
              </center>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const CustomTestimonial: React.FC<CustomTestimonialProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = isExpanded !== null ? "hidden" : "auto";
    document.body.style.height = isExpanded !== null ? "100vh" : "auto";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [isExpanded]);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10  mt-40">
      {data.map(({ id, img, text, name, batch }) => (
        <div key={id}>
          <button
            type="button"
            onClick={() => setIsExpanded(id)}
            className="mb-20 cursor-pointer rounded-2xl border border-gray-200 px-5 pb-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#0f4a85]/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0f4a85]/30"
          >
            <img className="w-25 h-25 -mt-12.5 mb-5 mx-auto rounded-full" src={img} alt={name} />
            <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] ">{text.substring(0, 171)}...</p>
            <span className="mb-4 ml-2 inline-block text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] font-medium text-blue-800 italic underline">
              Read More
            </span>
            <br />
            <strong className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">{name}</strong>
            <p className=" text-gray-700 lg:text-[12px] md:text-[11.25px] sm:text-[10.5px] text-[10.5px]">{batch}</p>
          </button>
          <CustomModal setIsExpanded={setIsExpanded} id={id} img={img} text={text} name={name} batch={batch} isExpanded={isExpanded} />
        </div>
      ))}
    </div>
  );
};

export default CustomTestimonial;
