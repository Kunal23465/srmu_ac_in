import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";

import Slider from "react-slick";
import { FaRegCalendar, FaTimes } from "react-icons/fa";
import { eventsData } from "../../data/home/EventsData";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ image, description, date,title, onReadMore }: any) => {
    const truncatedDesc = description.length > 300 ? description.slice(0, 220) + "..." : description;

    return (
      <div className="lg:flex items-center gap-x-5 border p-3 rounded-md border-[#ffb703] transition-all duration-200">
        <img src={image} alt="Event" className="transition-all aspect-[4/3] duration-200 rounded-md w-full lg:max-w-[200px] max-h-[400px] object-cover" />
        <div className="">
          <div className="flex items-center gap-x-2 font-medium">
            <FaRegCalendar color="#3f9cbb" />
            {date}
          </div>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="mt-2" dangerouslySetInnerHTML={{ __html: truncatedDesc }}></p>
          {description.length > 200 && (
            <div className="flex items-center  mt-2">
              <button
                className=" flex items-center mt-8 bg-yellow-400 text-[#0F4A85] font-medium uppercase py-3 px-8 rounded-xl transition border border-yellow-400 hover:bg-transparent hover:text-yellow-400"
                onClick={onReadMore}
              >
                Read More
                <svg className="ml-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 225">
                  <polygon fill="#0F4A85" points="420,94.5 420,94.5 328.3,2.7 310.3,20.7 389.4,99.8 1.9,99.8 1.9,125.2 389.4,125.2 310.3,204.2 328.3,222.2 438,112.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

const NewsCard1 = ({ image, description, date, title,onReadMore }: any) => {
    const truncatedDesc = description.length > 100 ? description.slice(0, 220) + "..." : description;
    return (
      <div className="w-full cursor-pointer">
        <img src={image} alt="Event" className="transition-all duration-200 rounded-md mb-4 w-[100%] object-cover max-h-[400px] object-bottom" />
        <div className="w-full">
          <div className="flex items-center gap-x-2 font-medium">
            <FaRegCalendar color="#3f9cbb" />
            {date}
          </div>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="mt-2" dangerouslySetInnerHTML={{ __html: truncatedDesc }}></p>
          {description.length > 200 && (
            <div className="flex items-center  mt-1.5">
              <button
                className=" flex items-center mt-8 bg-yellow-400 text-[#0F4A85] font-medium uppercase py-3 px-8 rounded-xl transition border border-yellow-400 hover:bg-transparent hover:text-yellow-400"
                onClick={onReadMore}
              >
                Read More
                <svg className="ml-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 225">
                  <polygon fill="#0F4A85" points="420,94.5 420,94.5 328.3,2.7 310.3,20.7 389.4,99.8 1.9,99.8 1.9,125.2 389.4,125.2 310.3,204.2 328.3,222.2 438,112.5" />
                </svg>
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
        navigate(`/news-and-events/${news.title.replace(/\s+/g, '-').toLowerCase()}`, { state: news });     
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
        <h2 className="text-center text-3xl lg:text-4xl font-bold">Latest News and Events</h2>
        <p className="text-center mt-3 lg:mt-4">
          On the college’s dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills
          in a supportive environment.
        </p>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row-reverse  gap-x-10 mt-6 md:mt-8 lg:mt-10">
          <div className="w-full lg:w-[40%] border p-3 rounded-md border-[#ffb703] transition-all duration-200">
            {eventsData.slice(0, 1).map((news, index) => (
              <NewsCard1
                key={index}
                image={news.image}
                date={news.date}
                title={news.title}
                description={news.description}
                onReadMore={() => handleReadMore(news)}
                // guest={news.guest}
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
        <div className="lg:hidden mt-5">
          <Slider {...sliderSettings}>
            {eventsData.map((news, index) => (
              <div key={index} className="w-full lg:w-[60%] border min-h-[450px] sm:min-h-0 p-3 rounded-md border-[#ffb703] transition-all duration-200">
                <NewsCard1 image={news.image} date={news.date} description={news.description} onReadMore={() => handleReadMore(news)} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
};

export default Events;
