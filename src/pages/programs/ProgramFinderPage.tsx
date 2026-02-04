import React from "react";
import ProgramFinderHome from "../../components/program-finder-home/ProgramFinderHome";
import { useLocation, useParams } from "react-router-dom";
// import ProgramFinderHome from "../../../components/program-finder-home/ProgramFinderHome";
// import ProgramFinder from "../../../components/admissions/program-finder/ProgramFinder";

const ProgramFinderPage: React.FC = () => {
  const { programType, item } = useParams();
  const location = useLocation();

  console.log("URL Params:", { programType, item });
  console.log("Route State:", location.state);

  console.log("ProgramFinderPage")
  return <>


    <ProgramFinderHome />
  </>;
};

export default ProgramFinderPage;
