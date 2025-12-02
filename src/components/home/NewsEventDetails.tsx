import React from "react";
import { useLocation } from "react-router-dom";
import Classes from "../../utils/styles/Global.module.css";
const NewsEventDetails: React.FC = () => {
  const location = useLocation();
  const news = location.state;
  return (
    <div className={`${Classes["container"]} py-20`}>
      <h1 className="font-bold text-4xl">{news.title}</h1>
      <div className="mt-6 font-normal bg-amber-400 text-blue-900 w-fit px-3 py-1 rounded-2xl">{news.date}</div>
      <div className="w-full mt-10 mb-4">
        <img src={news.image} className="w-full"/>
      </div>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsEventDetails;
