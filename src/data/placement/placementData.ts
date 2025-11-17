import { customeOverViewType } from "../../types/home-data-type";
import { TableRowData } from "../../types/table-data-types";
import Placement_Policy from "../../assets/pdf/placement/placement-policies/placement-policy-191223122840-060324102152.pdf";
import Early_Joining_Policy from "../../assets/pdf/placement/placement-policies/early-joining-policy-191223122925-060324102214.pdf";
import Industrial_Visit_Policy from "../../assets/pdf/placement/placement-policies/industrial-visit-policy-191223123100-060324102231.pdf"
export const studentTestimonialOverviewData: customeOverViewType = {
  heading: "All Testimonial",
  content:
    "Student testimonials serve as invaluable reflections of the educational experience within an institution, offering insights into the impact of academic programs, faculty engagement, and the overall campus environment. These testimonials, often shared voluntarily by students, provide a firsthand account of their journey, highlighting the strengths of the educational institution, personal growth, and the effectiveness of learning methodologies. Student testimonials not only offer prospective students a glimpse into the vibrant and supportive community but also act as a testament to the institution's commitment to delivering a transformative and enriching academic experience.",
};
export const StudentTestimonialTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const PlacementPoliciesOverviewData: customeOverViewType = {
  heading: "Placement Policies",
  content:
    "University placement policies encompass a set of guidelines and strategies designed to facilitate the successful transition of students from academic studies to the professional realm. These policies typically involve collaboration with industries, organizing placement drives, career counseling, and skill development initiatives to enhance students' employability. Universities often cultivate partnerships with various companies and organizations, creating a bridge between students and potential employers. Additionally, placement policies may incorporate internships, workshops, and industry-oriented curricula to ensure students are well-equipped for the demands of the job market. The ultimate goal is to empower graduates with the necessary skills and knowledge to secure fulfilling and relevant employment opportunities upon completing their education.",
};
export const PlacementPoliciesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const policiesPdfData: TableRowData[] = [
  {
    id: 1,
    title: 'Placement Policy',
    download: { type: 'pdf', url: Placement_Policy },
  },
  {
    id: 2,
    title: 'Early Joining Policy',
    download: { type: 'pdf', url: Early_Joining_Policy },
  },
  {
    id: 1,
    title: 'Industrial Visit Policy',
    download: { type: 'pdf', url: Industrial_Visit_Policy },
  },
];
