import { lazy } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Approvals from "./components/Approvals";
// import Excellence from './components/Excellence';
import Placements from "./Placements";
import Hero from "./Hero";
import PciApprovalPopup from "../home/PciApprovalPopup";
import LazyWhenVisible from "./LazyWhenVisible";

const AIPowered = lazy(() => import("./AIPowered"));
const CoreEngineering = lazy(() => import("./CoreEngineering"));
const Reels = lazy(() => import("./Reels"));
const Legacy = lazy(() => import("./Legacy"));
const Programs = lazy(() => import("./Programs"));
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
        <PciApprovalPopup />
        <Hero />
        {/* <Approvals /> */}
        {/* <Excellence /> */}
        <Placements />
        <LazyWhenVisible minHeight={620}>
          <AIPowered />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={620}>
          <CoreEngineering />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520}>
          <Reels />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520}>
          <Programs />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={440}>
          <Events />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={360}>
          <MoU />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={620}>
          <Alumni />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520}>
          <Legacy />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={360}>
          <Map />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={260}>
          <FAQ />
        </LazyWhenVisible>

      </main>
      {/* <Footer /> */}
    </div>
  );
}




export default NewHome
