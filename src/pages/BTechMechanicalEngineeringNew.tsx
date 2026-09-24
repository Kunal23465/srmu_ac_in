// ============================================================
// BTechMechanicalEngineeringNew.tsx — Thin wrapper
// Renders the generic ProgramPageTemplateNew with Mechanical Engineering data.
// All content lives in src/data/programs/mechanicalEngineeringNew.ts
// Route: /b-tech-mechanical-engineering-new
// ============================================================

import ProgramPageTemplateNew from "../customs/program-page-new/ProgramPageTemplateNew";
import mechanicalEngineeringNewData from "../data/programs/mechanicalEngineeringNew";

const BTechMechanicalEngineeringNew = () => {
  return <ProgramPageTemplateNew data={mechanicalEngineeringNewData} />;
};

export default BTechMechanicalEngineeringNew;
