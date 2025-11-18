import React from "react";
import { useState } from "react";
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

  if (isExpanded !== null) {
    (document.body.style.overflow = "hidden"), (document.body.style.height = "100vh");
  } else {
    (document.body.style.overflow = "auto"), (document.body.style.height = "auto");
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10  mt-40">
      {data.map(({ id, img, text, name, batch }) => (
        <div key={id} className=" px-5 pb-5 shadow-xl rounded-2xl  mb-20">
          <img className="w-25 h-25 -mt-12.5 mb-5 mx-auto rounded-full" src={img} alt={name} />
          <p className="text-[16px]! ">{text.substring(0,200)}...</p> {/* <-- truncation applied */}
          <button className="mb-4 ml-2 text-[16px] font-medium text-blue-800 italic underline" onClick={() => setIsExpanded(id)}>
            Read More
          </button>
          <br />
          <CustomModal setIsExpanded={setIsExpanded} id={id} img={img} text={text} name={name} batch={batch} isExpanded={isExpanded} />
          <strong>{name}</strong>
          <p className="text-xs! text-gray-700">{batch}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomTestimonial;
