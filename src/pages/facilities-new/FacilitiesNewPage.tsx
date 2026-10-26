import FacilitiesNew from "../../components/facilities-new/FacilitiesNew";
import SeoHead from "../../components/seo/SeoHead";

export default function FacilitiesNewPage() {
  return (
    <>
      <SeoHead
        title="Campus Facilities | Shri Ramswaroop Memorial University, Lucknow"
        description="Explore SRMU's academic blocks, smart classrooms, laboratories, central library, hostels, sports, healthcare, dining and transportation facilities."
        pathname="/facilities-new"
      />
      <FacilitiesNew />
    </>
  );
}
