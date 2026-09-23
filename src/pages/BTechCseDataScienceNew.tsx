// ============================================================
// BTechCseDataScienceNew.tsx — Thin wrapper
// Renders the generic ProgramPageTemplateNew with Data Science data.
// All content lives in src/data/programs/dataScienceNew.ts
// Route: /b-tech-cse-data-science-new
// ============================================================

import ProgramPageTemplateNew from "../customs/program-page-new/ProgramPageTemplateNew";
import dataScienceNewData from "../data/programs/dataScienceNew";

const BTechCseDataScienceNew = () => {
  return <ProgramPageTemplateNew data={dataScienceNewData} />;
};

export default BTechCseDataScienceNew;
