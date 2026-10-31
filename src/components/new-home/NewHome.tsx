import { lazy } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Approvals from "./components/Approvals";
// import Excellence from './components/Excellence';
import Placements from "./Placements";
// import PlacementsNew from "./PlacementsNew";
import Hero from "./Hero";
import PciApprovalPopup from "../home/PciApprovalPopup";
import LazyWhenVisible from "./LazyWhenVisible";

const AIPowered = lazy(() => import("./AIPowered"));
const CoreEngineering = lazy(() => import("./CoreEngineering"));
const Reels = lazy(() => import("./Reels"));
const Legacy = lazy(() => import("./Legacy"));
const Programs = lazy(() => import("./Programs"));
const DepartmentScholarships = lazy(() => import("../academics/departmentOfComputerScienceAndEngineeringNew/DepartmentScholarships"));
const Events = lazy(() => import("./Events"));
const MoU = lazy(() => import("./MoU"));
const Alumni = lazy(() => import("./Alumni"));
const Map = lazy(() => import("./Map"));
const FAQ = lazy(() => import("./FAQ"));

function NewHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        {/* <PciApprovalPopup /> */}
        <Hero />
        {/* <Approvals /> */}
        {/* <Excellence /> */}
        <Placements />
        {/* <PlacementsNew /> */}
        <LazyWhenVisible minHeight={620} rootMargin="260px 0px">
          <AIPowered />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={620} rootMargin="220px 0px">
          <CoreEngineering />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520} rootMargin="160px 0px">
          <Reels />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520} rootMargin="180px 0px">
          <Programs />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={620} rootMargin="180px 0px">
          <DepartmentScholarships id="home-scholarships" />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={440} rootMargin="180px 0px">
          <Events />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={360} rootMargin="180px 0px">
          <MoU />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={620} rootMargin="180px 0px">
          <Alumni />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520} rootMargin="160px 0px">
          <Legacy />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={360} rootMargin="160px 0px">
          <Map />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={260} rootMargin="120px 0px">
          <FAQ />
        </LazyWhenVisible>

      </main>
      {/* <Footer /> */}
    </div>
  );
}




export default NewHome
