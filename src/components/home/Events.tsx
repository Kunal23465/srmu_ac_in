import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";

import Slider from "react-slick";
import { FaRegCalendar, FaTimes } from "react-icons/fa";
import { eventsData } from "../../data/home/EventsData";

const NewsCard = ({ image, description, date, onReadMore }: any) => {
    const truncatedDesc = description.length > 80 ? description.slice(0, 80) + "..." : description;

    return (
        <div className="lg:flex items-center gap-x-5 border p-3 rounded-md border-[#ffb703] transition-all duration-200">
            <img src={image} alt="Event" className="transition-all aspect-[4/3] duration-200 rounded-md w-full lg:max-w-[200px] max-h-[400px] object-cover" />
            <div className="">
                <div className="flex items-center gap-x-2 font-medium">
                    <FaRegCalendar color="#3f9cbb" />
                    {date}
                </div>

                <p className="mt-2">{truncatedDesc}</p>
                {description.length > 80 && (
                    <div className="flex items-center justify-end mt-2">
                        <button className=" bg-[#1B3A6F] text-white px-3 py-1 rounded-full" onClick={onReadMore}>
                            Read More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const NewsCard1 = ({ image, description, date, onReadMore }: any) => {
    const truncatedDesc = description.length > 220 ? description.slice(0, 220) + "..." : description;
    return (
        <div className="w-full cursor-pointer">
            <img src={image} alt="Event" className="transition-all duration-200 rounded-md mb-4 w-[100%] object-cover max-h-[400px] object-bottom" />
            <div className="w-full">
                <div className="flex items-center gap-x-2 font-medium">
                    <FaRegCalendar color="#3f9cbb" />
                    {date}
                </div>
                <p className="mt-2">{truncatedDesc}</p>
                {description.length > 220 && (
                    <div className="flex items-center justify-end mt-2">
                        <button className=" bg-[#1B3A6F] text-white px-3 py-1 rounded-full" onClick={onReadMore}>
                            Read More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const Events: React.FC = () => {
    const [selectedNews, setSelectedNews] = useState<any>(null);

    const handleReadMore = (news: any) => {
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
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
                        <NewsCard1 key={index} image={news.image} date={news.date} description={news.description} onReadMore={() => handleReadMore(news)} guest={news.guest} />
                    ))}
                </div>
                <div className="w-full mt-5 lg:mt-0 lg:w-[60%] flex flex-col gap-y-5">
                    {eventsData.slice(1, 3).map((news, index) => (
                        <NewsCard key={index} image={news.image} date={news.date} description={news.description} onReadMore={() => handleReadMore(news)} />
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

            {/* Modal Popup */}
            {selectedNews && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-[99999]">
                    <div className="relative bg-white px-8 py-8 rounded-md shadow-lg max-w-2xl w-full ">
                        {/* Close Icon */}
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                            <FaTimes size={20} />
                        </button>

                        {/* Image */}
                        <img src={selectedNews.image} alt="Event" className="w-full h-60 object-cover rounded-md" />

                        {/* Date */}
                        <div className="flex items-center gap-x-2 mt-6 font-medium">
                            <FaRegCalendar color="#3f9cbb" />
                            {selectedNews.date}
                        </div>

                        {/* Description */}
                        <p className="mt-3">{selectedNews.description}</p>
                        {selectedNews.guest && (
                            <div className="mt-4">
                                <span className="font-bold text-[16px] mt-6">Chief Guest : </span>
                                <p>{selectedNews.guest}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
