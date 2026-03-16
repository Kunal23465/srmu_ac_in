import React, { Suspense } from "react";
import Banner from "./Banner";
import MemorialCollege from "./MemorialCollege";
import InnovationCulture from "./InnovationCulture";
import Apply from "./Apply";
const ProgramsSection = React.lazy(() => import("./ProgramSection"));
const AlumniSlider = React.lazy(() => import("./NotableAlumni"));
const FlickeringSection = React.lazy(() => import("./FlickeringSection"));
const TestimonialSlider = React.lazy(() => import("./TestimonialSlider"));
const DepartmentalVideoComponent = React.lazy(() => import("./DepartmentalVideoComponent"));
const Placements = React.lazy(() => import("./Placements"));
const MobilePlacements = React.lazy(() => import("./MobilePlacements"));
const Events = React.lazy(() => import("./Events"));
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../data/about/aboutusData";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <Suspense fallback={<div>Loading...</div>}>
        <ProgramsSection />
      </Suspense>
      <Apply />
      <InnovationCulture />
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FlickeringSection />
      </Suspense>
      <div className="hidden sm:block">
        <Suspense fallback={<div>Loading...</div>}>
          <Placements />
        </Suspense>
      </div>
      <div className="sm:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <MobilePlacements />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AlumniSlider />
      </Suspense>
      <div className="bg-[#ecf0f9]">
        <Suspense fallback={<div>Loading...</div>}>
          <TestimonialSlider />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DepartmentalVideoComponent />
      </Suspense>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default Home;
