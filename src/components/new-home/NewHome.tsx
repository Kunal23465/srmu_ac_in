import { lazy, Suspense, useEffect, useState } from "react";
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
import PciApprovalPopup from "../home/PciApprovalPopup";

const AIPowered = lazy(() => import("./AIPowered"));
const CoreEngineering = lazy(() => import("./CoreEngineering"));
const Reels = lazy(() => import("./Reels"));
const Legacy = lazy(() => import("./Legacy"));

function NewHome() {
  const [showDeferred, setShowDeferred] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setShowDeferred(true);
      return;
    }
    const enable = () => setShowDeferred(true);
    if ("requestIdleCallback" in window) {
      // @ts-ignore
      (window as any).requestIdleCallback(enable, { timeout: 1000 });
    } else {
      const t = setTimeout(enable, 300);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <PciApprovalPopup />
        <Hero />
        {/* <Approvals /> */}
        {/* <Excellence /> */}
        <Placements />
        {showDeferred && (
          <Suspense fallback={null}>
            <AIPowered />
            <CoreEngineering />
            <Reels />
          </Suspense>
        )}
        <Programs />
        <Events />
        <MoU />

        <Alumni />

        {showDeferred && (
          <Suspense fallback={null}>
            <Legacy />
          </Suspense>
        )}
        <Map />
        <FAQ />

      </main>
      {/* <Footer /> */}
    </div>
  );
}




export default NewHome
