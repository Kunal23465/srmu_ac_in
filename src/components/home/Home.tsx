import React, { Suspense } from "react";
import Banner from "./Banner";
import MemorialCollege from "./MemorialCollege";
import Apply from "./Apply";
import DeferredSection from "./DeferredSection";
import DeferredSectionFallback from "./DeferredSectionFallback";
import ProgramsSectionStatic from "./ProgramSectionStatic";
import { CustomTopFooterAbout } from "../../data/about/aboutusData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";

const InnovationCulture = React.lazy(() => import("./InnovationCulture"));
const Events = React.lazy(() => import("./Events"));
const AlumniSlider = React.lazy(() => import("./NotableAlumni"));
const FlickeringSection = React.lazy(() => import("./FlickeringSection"));
const TestimonialSlider = React.lazy(() => import("./TestimonialSlider"));
const DepartmentalVideoComponent = React.lazy(() => import("./DepartmentalVideoComponent"));
const Placements = React.lazy(() => import("./Placements"));
const MobilePlacements = React.lazy(() => import("./MobilePlacements"));

const renderSectionFallback = (minHeight: number) => <DeferredSectionFallback minHeight={minHeight} />;

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <ProgramsSectionStatic />
      <Apply />

      <DeferredSection minHeight={460} rootMargin="220px 0px" fallback={renderSectionFallback(460)}>
        <Suspense fallback={renderSectionFallback(460)}>
          <InnovationCulture />
        </Suspense>
      </DeferredSection>


      <DeferredSection minHeight={560} rootMargin="260px 0px" fallback={renderSectionFallback(560)}>
        <Suspense fallback={renderSectionFallback(560)}>
          <Events />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={260} rootMargin="300px 0px" fallback={renderSectionFallback(260)}>
        <Suspense fallback={renderSectionFallback(260)}>
          <FlickeringSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={560} rootMargin="320px 0px" fallback={renderSectionFallback(560)}>
        <div className="hidden sm:block">
          <Suspense fallback={renderSectionFallback(560)}>
            <Placements />
          </Suspense>
        </div>
        <div className="sm:hidden">
          <Suspense fallback={renderSectionFallback(560)}>
            <MobilePlacements />
          </Suspense>
        </div>
      </DeferredSection>
      <DeferredSection minHeight={420} rootMargin="320px 0px" fallback={renderSectionFallback(420)}>
        <Suspense fallback={renderSectionFallback(420)}>
          <AlumniSlider />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={420} rootMargin="340px 0px" fallback={renderSectionFallback(420)}>
        <div className="bg-[#ecf0f9]">
          <Suspense fallback={renderSectionFallback(420)}>
            <TestimonialSlider />
          </Suspense>
        </div>
      </DeferredSection>
      <DeferredSection minHeight={420} rootMargin="360px 0px" fallback={renderSectionFallback(420)}>
        <Suspense fallback={renderSectionFallback(420)}>
          <DepartmentalVideoComponent />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={220} rootMargin="360px 0px" fallback={renderSectionFallback(220)}>
        <Suspense fallback={renderSectionFallback(220)}>
          <CustomTopFooter data={CustomTopFooterAbout} />
        </Suspense>
      </DeferredSection>
    </div>
  );
};

export default Home;
