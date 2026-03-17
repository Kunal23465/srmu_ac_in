import React, { Suspense } from "react";
import Banner from "./Banner";
import MemorialCollege from "./MemorialCollege";
import InnovationCulture from "./InnovationCulture";
import Apply from "./Apply";
import Events from "./Events";
const ProgramsSection = React.lazy(() => import("./ProgramSection"));
const AlumniSlider = React.lazy(() => import("./NotableAlumni"));
const FlickeringSection = React.lazy(() => import("./FlickeringSection"));
const TestimonialSlider = React.lazy(() => import("./TestimonialSlider"));
const DepartmentalVideoComponent = React.lazy(() => import("./DepartmentalVideoComponent"));
const Placements = React.lazy(() => import("./Placements"));
const MobilePlacements = React.lazy(() => import("./MobilePlacements"));
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../data/about/aboutusData";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
        <ProgramsSection />
      </Suspense>
      <Apply />
      <InnovationCulture />
      <Events />
      <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
        <FlickeringSection />
      </Suspense>
      <div className="hidden sm:block">
        <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
          <Placements />
        </Suspense>
      </div>
      <div className="sm:hidden">
        <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
          <MobilePlacements />
        </Suspense>
      </div>
      <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
        <AlumniSlider />
      </Suspense>
      <div className="bg-[#ecf0f9]">
        <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
          <TestimonialSlider />
        </Suspense>
      </div>
      <Suspense fallback={<div className="text-center bg-gray-100 py-8 rounded-lg my-5">Loading...</div>}>
        <DepartmentalVideoComponent />
      </Suspense>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default Home;
