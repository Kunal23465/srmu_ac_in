import { Helmet } from "react-helmet-async";
import NewProgramFinder from "../../components/program-finder-new/new";

export default function NewProgramFinderPage() {
  return <>
    <Helmet>
      <title>Program Finder &amp; Eligibility | SRMU</title>
      <meta name="description" content="Find SRMU programmes for your qualification, check eligibility, explore fees and estimate SRMUSET, merit and special scholarships." />
    </Helmet>
    <NewProgramFinder />
  </>;
}
