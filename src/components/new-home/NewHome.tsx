import { lazy, Suspense } from "react";
import Classes from "../../utils/styles/Global.module.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Approvals from "./components/Approvals";
// import Excellence from './components/Excellence';
import Placements from "./Placements";
import Programs from "./Programs";
import MoU from "./MoU";
import Alumni from "./Alumni";
import FAQ from "./FAQ";
import Map from "./Map";
import Events from "./Events";
import Hero from "./Hero";

const AIPowered = lazy(() => import("./AIPowered"));
const CoreEngineering = lazy(() => import("./CoreEngineering"));
const Reels = lazy(() => import("./Reels"));
const Legacy = lazy(() => import("./Legacy"));

function NewHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <Approvals /> */}
        {/* <Excellence /> */}
        <Placements />
        <Suspense fallback={null}>
          <AIPowered />
          <CoreEngineering />
          <Reels />
        </Suspense>
        <Programs />
        <Events />
        <MoU />

        <Alumni />

        <Suspense fallback={null}>
          <Legacy />
        </Suspense>
        <Map />
        <FAQ />

      </main>
      {/* <Footer /> */}
    </div>
  );
}




export default NewHome
