import React, { useEffect } from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
// @ts-ignore
import { NoticeOverviewData, NoticeTopFooterData, NoticePdfData } from "../../data/notice/NoticeData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchNotice } from "../../store/notice/noticeThunk";

const Notice: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.getNotice);
  useEffect(() => {
    dispatch(fetchNotice());
  }, []);
  if (loading) {
    return <h3 className="text-center text-2xl font-semibold">Loading ...</h3>;
  }
  function formatDate(dateStr: any) {
    const date = new Date(dateStr);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={NoticeOverviewData} />
        <div className="bg-slate-100 my-25 py-16 px-12 rounded-xl">
          {data.map((item) => (
            <div key={item.noticeId} className="">
              <a href={item.imagePath} target="_blank">
                <p className="font-medium border-l-3 border-transparent duration-300 hover:ease-in-out hover:bg-white hover:border-l-amber-400 p-5 pb-8">
                  {item.title}
                  <br />
                  <br />
                  <span className="font-normal bg-amber-400 px-3 py-1 rounded-3xl"> {formatDate(item.noticeDate)}</span>
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
