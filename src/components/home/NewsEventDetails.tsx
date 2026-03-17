import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Classes from "../../utils/styles/Global.module.css";
import { AppDispatch, RootState } from "../../store";
import { fetchHomeEventsData } from "../../store/home-events/getHomeEventsThunk";
import { eventsData } from "../../data/home/EventsData";

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

const NewsEventDetails: React.FC = () => {
  const location = useLocation();
  const { programName, name } = useParams();
  const paramName = programName || name;
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.getHomeEventsData);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchHomeEventsData(1));
    }
  }, [data.length, dispatch]);

  const stateNews = location.state ? normalizeEvent(location.state, 0) : null;
  const normalizedStoreEvents = (Array.isArray(data) ? data : []).map((news: any, index: number) =>
    normalizeEvent(news, index)
  );
  const normalizedFallbackEvents = eventsData.map((news, index) => normalizeEvent(news, index));

  const news =
    stateNews ||
    normalizedStoreEvents.find((item) => slugifyEventTitle(item.title || "") === paramName) ||
    normalizedFallbackEvents.find((item) => slugifyEventTitle(item.title || "") === paramName);

  if (!news) {
    return (
      <div className={`${Classes["container"]} py-20`}>
        <h1 className="font-bold text-4xl">News Not Found</h1>
      </div>
    );
  }

  return (
    <div className={`${Classes["container"]} py-20`}>
      <h1 className="font-bold text-4xl">{news.title}</h1>
      <div className="mt-6 font-normal bg-amber-400 text-blue-900 w-fit px-3 py-1 rounded-2xl">{news.date}</div>
      <div className="w-full mt-10 mb-4">
        <img src={news.image} className="w-full"/>
      </div>
      <div dangerouslySetInnerHTML={{ __html: news.description }}></div>
    </div>
  );
};

export default NewsEventDetails;
