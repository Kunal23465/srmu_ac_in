import SeoHead from "../../../components/seo/SeoHead";
import ClubsNew from "../../../components/campus-life/clubs/ClubsNew";

export default function ClubsNewPage() {
  return (
    <>
      <SeoHead
        title="Student Clubs | Shri Ramswaroop Memorial University, Lucknow"
        description="Explore student clubs at SRMU, from arts and music to technology, wellbeing and community service. Find your interests and get involved."
        pathname="/clubs-new"
      />
      <ClubsNew />
    </>
  );
}
