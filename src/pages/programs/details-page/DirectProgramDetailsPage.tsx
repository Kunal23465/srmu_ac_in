import ProgramDetails from "../../../components/programs/program-details/ProgramDetails";

/**
 * Renders the program details page for "direct" program URLs such as
 * /b-tech-cse-cyber-security (as opposed to the canonical /program/:programName).
 *
 * ProgramDetails falls back to extracting the slug from location.pathname when
 * the "programName" route param is absent (which it will be for these routes).
 */
const DirectProgramDetailsPage = () => {
  return <ProgramDetails />;
};

export default DirectProgramDetailsPage;
