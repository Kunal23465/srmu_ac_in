import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { NoticeOverviewData, NoticeTopFooterData, NoticePdfData } from "../../data/notice/NoticeData";

const Notice: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={NoticeOverviewData} />
        <div className="bg-slate-100 my-25 py-16 px-12 rounded-xl">
          {NoticePdfData.map((item) => (
            <div key={item.id} className="">
              <a href={item.doownload} target="_blank">
                <p className="font-medium border-l-3 border-transparent duration-300 hover:ease-in-out hover:bg-white hover:border-l-amber-400 p-5 pb-8">
                  {item.title}
                  <br />
                  <br />
                  <span className="font-normal bg-amber-400 px-3 py-1 rounded-3xl">{item.date}</span>
                </p>
              </a>
              <hr className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>

      <CustomTopFooter data={NoticeTopFooterData} />
    </div>
  );
};

export default Notice;
