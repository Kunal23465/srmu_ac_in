import GreenInitiativeNew from "../../components/green-initative-new/GreenInitiativeNew";
import SeoHead from "../../components/seo/SeoHead";

export default function GreenInitiativeNewPage() {
  return (
    <>
      <SeoHead
        title="Green Initiative | Shri Ramswaroop Memorial University, Lucknow"
        description="Explore SRMU's green initiatives, from renewable energy and water conservation to biodiversity and responsible waste management."
        pathname="/green-initiative-new"
      />
      <GreenInitiativeNew />
    </>
  );
}
