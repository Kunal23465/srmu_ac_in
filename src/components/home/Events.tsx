import React, { useEffect, useState, useRef } from "react";
import Classes from "../../utils/styles/Global.module.css";

import { FaRegCalendar } from "react-icons/fa";
import { eventsData } from "../../data/home/EventsData";
import { useNavigate } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchHomeEventsData } from "../../store/home-events/getHomeEventsThunk";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* -------------------- Responsive Slice Hook -------------------- */

const useResponsiveSlice = () => {

  const [sliceLength, setSliceLength] = useState(100);

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 1280) {
        setSliceLength(200);
      } else {
        setSliceLength(100);
      }

    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return sliceLength;

};

/* -------------------- News Card (Right Side) -------------------- */

const NewsCard = ({ image, description, date, title, onReadMore }: any) => {

  const sliceLength = useResponsiveSlice();

  const truncatedDesc =
    description.length > sliceLength
      ? description.slice(0, sliceLength) + "..."
      : description;

  return (

    <div className="lg:flex items-center gap-x-10 border p-3 rounded-lg border-[#ffb703] hover:shadow-2xl transition-all duration-200">

      <img
        src={image}
        alt="Event"
        className="transition-all aspect-4/3 duration-200 rounded-md w-full max-w-[200px] xl:max-w-[300px] max-h-[400px] object-cover"
      />

      <div>

        <div className="flex items-center gap-x-2 text-[#00000099]">
          <FaRegCalendar color="#3f9cbb" />
          {date}
        </div>

        <h1 className="text-sm sm:text-[20px] fw600">{title}</h1>

        <div
          className="mt-2 text-[#000000cc] text-justify"
          dangerouslySetInnerHTML={{ __html: truncatedDesc }}
        />

        {description.length > sliceLength && (

          <div className="flex items-center mt-2">

            <button
              className="flex items-center cursor-pointer mt-8 gap-2 bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-4 rounded-sm transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
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

/* -------------------- News Card 1 -------------------- */

const NewsCard1 = ({ image, description, date, title, onReadMore }: any) => {

  const sliceLength = useResponsiveSlice();

  const truncatedDesc =
    description.length > sliceLength
      ? description.slice(0, sliceLength) + "..."
      : description;

  return (

    <div className="w-full cursor-pointer">

      <img
        src={image}
        alt="Event"
        className="transition-all duration-200 rounded-lg mb-4 w-full object-cover aspect-[5/3] object-bottom"
      />

      <div>

        <div className="flex items-center gap-x-2 text-[#00000099]">
          <FaRegCalendar color="#3f9cbb" />
          {date}
        </div>

        <h1 className="text-sm sm:text-[20px] fw600 min-h-16 sm:min-h-auto">
          {title}
        </h1>

        <div
          className="mt-2 text-[#000000cc] text-justify"
          dangerouslySetInnerHTML={{ __html: truncatedDesc }}
        />

        {description.length > sliceLength && (

          <div className="flex items-center mt-4">

            <button
              className="flex items-center sm:mt-8 cursor-pointer gap-2 bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-4 rounded-sm transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
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

/* -------------------- Main Component -------------------- */

const formatEventDate = (value: string) => {

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);

};

const normalizeEvent = (news: any, index: number) => {

  const rawDate = news?.date || news?.eventDate || news?.createdAt || "";
  const description = news?.description || news?.brief || "";
  const title = news?.title || news?.name || "News & Event";
  const image = news?.imagePath || news?.image || "";

  return {
    ...news,
    id: news?.eventId || news?.id || index,
    image,
    date: typeof rawDate === "string" ? formatEventDate(rawDate) : "",
    title,
    description,
  };

};

const slugifyEventTitle = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const Events: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { data } = useSelector(
    (state: RootState) => state.getHomeEventsData
  );

  const normalizedApiEvents = (Array.isArray(data) ? data : [])
    .map((news: any, index: number) => normalizeEvent(news, index))
    .filter((news: any) => news.image && news.title && news.description);

  const fallbackEvents = eventsData.map((news, index) => normalizeEvent(news, index));
  const events =
    normalizedApiEvents.length > 0
      ? [...normalizedApiEvents, ...fallbackEvents].slice(0, Math.max(3, normalizedApiEvents.length))
      : fallbackEvents;

  const navigate = useNavigate();

  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const handleReadMore = (news: any) => {

    navigate(`/news/${slugifyEventTitle(news.title || "")}`, {
      state: news,
    });

  };

  useEffect(() => {

    if (data.length === 0) {
      dispatch(fetchHomeEventsData(1));
    }

  }, [data.length, dispatch]);

  return (

    <div className={`${Classes["container"]} pt-7 pb-4 sm:py-7 md:py-10 lg:py-14`}>

      <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-left">
        Latest News and Events
      </h2>

      <p className="text-jsutify">
        At University’s beautiful campus, you’ll find a diverse and welcoming
        community that will teach you life skills along with having fun.
      </p>

      {/* ---------------- Desktop Layout ---------------- */}

      <div className="hidden lg:flex flex-row-reverse gap-x-10 mt-6 md:mt-8 lg:mt-10">

        <div className="w-full lg:w-[40%] border p-3 rounded-lg border-[#ffb703] hover:shadow-2xl transition-all duration-200">

          {events.slice(0, 1).map((news, index) => (

            <NewsCard1
              key={index}
              image={news.image}
              date={news.date}
              title={news.title}
              description={news.description}
              onReadMore={() => handleReadMore(news)}
            />

          ))}

        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-y-5">

          {events.slice(1, 3).map((news, index) => (

            <NewsCard
              key={index}
              image={news.image}
              date={news.date}
              title={news.title}
              description={news.description}
              onReadMore={() => handleReadMore(news)}
            />

          ))}

        </div>

      </div>

      {/* ---------------- Mobile Slider ---------------- */}

      <div className="lg:hidden mt-5 w-full overflow-hidden">

        <div className="overflow-hidden" ref={emblaRef}>

          <div className="flex">

            {events.map((news, index) => (

              <div
                key={index}
                className="flex-[0_0_100%] w-full border sm:min-h-0 p-3 hover:shadow-2xl rounded-md border-[#ffb703] transition-all duration-200"
              >

                <NewsCard1
                  image={news.image}
                  date={news.date}
                  title={news.title}
                  description={news.description}
                  onReadMore={() => handleReadMore(news)}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};

export default Events;
