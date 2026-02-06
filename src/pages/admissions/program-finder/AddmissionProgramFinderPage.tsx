import React from "react";
// import ProgramFinderHome from "../../../components/program-finder-home/ProgramFinderHome";
import ProgramFinder from "../../../components/admissions/program-finder/ProgramFinder";
import { Helmet } from "react-helmet-async";

const AddmissionProgramFinderPage: React.FC = () => {
  return <>
    <Helmet>
      <title>Explore Diverse Academic Programs with SRMU&#039;s Program Finder | Shri Ramswaroop Memorial University</title>
      <meta name="description" content="Discover a range of undergraduate, postgraduate, and diploma programs at Shri Ramswaroop Memorial University. Use SRMU&#039;s Program Finder to explore courses, specializations, and career paths tailored to your goals." />
    </Helmet>
    <ProgramFinder />
  </>
};

export default AddmissionProgramFinderPage;
