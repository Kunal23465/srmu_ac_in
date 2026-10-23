import SeoHead from "../../../components/seo/SeoHead";
import ConvocationNew from "../../../components/campus-life/convocation/ConvocationNew";

export default function ConvocationNewPage() {
  return (
    <>
      <SeoHead
        title="Convocation | Shri Ramswaroop Memorial University, Lucknow"
        description="Celebrate the achievements and memories of Shri Ramswaroop Memorial University's first convocation ceremony."
        pathname="/convocation-new"
      />
      <ConvocationNew />
    </>
  );
}
