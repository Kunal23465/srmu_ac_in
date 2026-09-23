// ============================================================
// BTechCseCyberSecurityNew.tsx — Thin wrapper
// Renders the generic ProgramPageTemplateNew with Cyber Security data.
// All content lives in src/data/programs/cyberSecurityNew.ts
// ============================================================

import ProgramPageTemplateNew from "../customs/program-page-new/ProgramPageTemplateNew";
import cyberSecurityNewData from "../data/programs/cyberSecurityNew";

const BTechCseCyberSecurityNew = () => {
  return <ProgramPageTemplateNew data={cyberSecurityNewData} />;
};

export default BTechCseCyberSecurityNew;
