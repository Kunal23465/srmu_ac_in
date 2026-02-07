import React from "react";
import Banner from "./Banner";
import MemorialCollege from "./MemorialCollege";
import InnovationCulture from "./InnovationCulture";
import Apply from "./Apply";
import ProgramsSection from "./ProgramSection";
import AlumniSlider from "./NotableAlumni";
import FlickeringSection from "./FlickeringSection";
import TestimonialSlider from "./TestimonialSlider";
import DepartmentalVideoComponent from "./DepartmentalVideoComponent";
import Placements from "./Placements";
import MobilePlacements from "./MobilePlacements";
import Events from "./Events";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../data/about/aboutusData";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <ProgramsSection />
      <Apply />
      <InnovationCulture />
      <Events />
      <FlickeringSection />
      <div className="hidden sm:block">
        <Placements />
      </div>
      <div className="sm:hidden">
        <MobilePlacements />
      </div>
      <AlumniSlider />
      <div className="bg-[#ecf0f9]">
        <TestimonialSlider />
      </div>

      <DepartmentalVideoComponent />


      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default Home;
