import React from "react";
import Classes from "../../utils/styles/Global.module.css";

import Slider from "react-slick";
import { FaRegCalendar } from "react-icons/fa";
import { eventsData } from "../../data/home/EventsData";
import { useNavigate } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const NewsCard = ({ image, description, date, title, onReadMore }: any) => {
  const truncatedDesc = description.length > 134 ? description.slice(0, 200) + "..." : description;

  return (
    <div className="lg:flex items-center gap-x-10 border p-3 rounded-lg border-[#ffb703] hover:shadow-2xl transition-all duration-200">
      <img src={image} alt="Event" className="transition-all aspect-4/3 duration-200 rounded-md w-full lg:max-w-[300px] max-h-[400px] object-cover" />
      <div className="">
        <div className="flex items-center gap-x-2 text-[#00000099]">
          <FaRegCalendar color="#3f9cbb" />
          {date}
        </div>
        <h1 className="font20 fw600">{title}</h1>
        <div className="mt-2 text-[#000000cc] text-justify" dangerouslySetInnerHTML={{ __html: truncatedDesc }}></div>
        {description.length > 200 && (
          <div className="flex items-center  mt-2">
            <button
              className=" flex items-center mt-8 gap-2 cursor-pointer bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-4 rounded-sm transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
              onClick={onReadMore}
            >
              Read More <LiaLongArrowAltRightSolid size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const NewsCard1 = ({ image, description, date, title, onReadMore }: any) => {
  const truncatedDesc = description.length > 200 ? description.slice(0, 200) + "..." : description;
  return (
    <div className="w-full cursor-pointer ">
      <img src={image} alt="Event" className="transition-all duration-200 rounded-lg mb-4 w-full object-cover max-h-[400px] object-bottom" />
      <div className="w-full">
        <div className="flex items-center gap-x-2 text-[#00000099]">
          <FaRegCalendar color="#3f9cbb" />
          {date}
        </div>
        <h1 className="font20 fw600">{title}</h1>
        <div className="mt-2 text-[#000000cc] text-justify" dangerouslySetInnerHTML={{ __html: truncatedDesc }}></div>
        {description.length > 200 && (
          <div className="flex items-center mt-2">
            <button
              className=" flex items-center mt-8 gap-2 cursor-pointer bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-4 rounded-sm transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
              onClick={onReadMore}
            >
              Read More
              <LiaLongArrowAltRightSolid size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Events: React.FC = () => {

  const navigate = useNavigate();
  const handleReadMore = (news: any) => {
    navigate(`/${news.title.replace(/\s+/g, '-').toLowerCase()}`, { state: news });
  };


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`${Classes["container"]} pt-7 sm:py-7 md:py-10 lg:py-14`}>
      <h2 className="text-[28px] text-left sm:text-xl lg:text-[3.125rem] fw600">Latest News and Events</h2>
      <p className="text-jsutify">
        At University’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.
      </p>

      {/* Desktop Layout */}

      <div className="hidden lg:flex flex-row-reverse  gap-x-10 mt-6 md:mt-8 lg:mt-10">
        <div className="w-full lg:w-[40%] border p-3 rounded-lg border-[#ffb703] hover:shadow-2xl transition-all duration-200">
          {eventsData.slice(0, 1).map((news, index) => (
            <NewsCard1
              key={index}
              image={news.image}
              date={news.date}
              title={news.title}
              description={news.description}
              onReadMore={() => handleReadMore(news)}
              // @ts-ignore
              guest={news?.guest}
            />
          ))}
        </div>
        <div className="w-full mt-5 lg:mt-0 lg:w-[60%] flex flex-col gap-y-5">
          {eventsData.slice(1, 3).map((news, index) => (
            <NewsCard key={index} image={news.image} date={news.date} title={news.title} description={news.description} onReadMore={() => handleReadMore(news)} />
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden mt-5 w-full overflow-hidden">
        <Slider {...sliderSettings}>
          {eventsData.map((news, index) => (
            <div key={index} className="w-full lg:w-[60%] border min-h-[450px] sm:min-h-0 p-3 hover:shadow-2xl rounded-md border-[#ffb703] transition-all duration-200">
              <NewsCard1 image={news.image} date={news.date} description={news.description} onReadMore={() => handleReadMore(news)} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
