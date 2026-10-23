import FacilitiesNew from "../../components/facilities-new/FacilitiesNew";
import SeoHead from "../../components/seo/SeoHead";

export default function FacilitiesNewPage() {
  return (
    <>
      <SeoHead
        title="Campus Facilities | Shri Ramswaroop Memorial University, Lucknow"
        description="Explore SRMU's classrooms, laboratories, library, sports facilities, cafeteria, transportation and academic blocks."
        pathname="/facilities-new"
      />
      <FacilitiesNew />
    </>
  );
}
