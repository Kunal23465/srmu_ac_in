import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { aboutOverviewData, counterDataForAboutPage, CustomTopFooterAbout } from "../../../data/about/aboutusData";
import Counter from "../../../utils/custom/Counter";
import Effort from "./Effort";
import kulgeetimg from "../../../assets/images/about/aboutUs/kulgeet-img.png";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import MIssionAndVission from "./MIssionAndVission";
import CoreValues from "./CoreValue";
import KnowOurCampus from "./KnowYourCampus";
import aboutSliderData from "../../../data/about/silder/slider-data";
import CustomAboutUsSlider from "../../../utils/custom/CustomAboutUsSlider";

const About: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={aboutOverviewData} />
        <Counter counterData={counterDataForAboutPage} classes="counter" aboutusClass={"text-black mt-3"} />
        <CustomAboutUsSlider data={aboutSliderData} />
      </div>
      <MIssionAndVission />
      <div className={`${Classes["container"]}`}>
        <CoreValues />
      </div>
      <KnowOurCampus />
      <div className={`${Classes["container"]} mt-14`}>
        <Effort />
      </div>
      {/* kulgeet section  */}
      <div className="flex flex-col items-center justify-center pb-10 w-full ">
        <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text=[#023047] font-medium">Kulgeet</h1>
        <img src={kulgeetimg} alt="kulgeet" />
      </div>

      <div></div>

      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default About;
