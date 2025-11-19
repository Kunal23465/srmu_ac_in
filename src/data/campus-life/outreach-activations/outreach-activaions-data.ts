import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";
import icon1 from "../../../assets/images/campus-life/outreach-activations/camps-organized-19012401183310.png"
import icon2 from "../../../assets/images/campus-life/outreach-activations/nss-volunteers-19012401184820.png"
import icon3 from "../../../assets/images/campus-life/outreach-activations/blood-donation-drives-19012401190156.png"
import suddhii from "../../../assets/images/campus-life/outreach-activations/shuddhi-05032411530091.jpg"
import apnipath from "../../../assets/images/campus-life/outreach-activations/apnipath.jpg"
import nsss from "../../../assets/images/campus-life/outreach-activations/nsssss.jpg"
import freelegal from "../../../assets/images/campus-life/outreach-activations/free-legal-aid-centre-19012401222255.jpg"
import swach from "../../../assets/images/campus-life/outreach-activations/swachh-bharat-abhiyan-05032411450182.jpg"
import unnat from "../../../assets/images/campus-life/outreach-activations/unnat-bharat-abhiyan-05032411402516.jpg"


export const OutreachActivationsOverviewData: customeOverViewType = {
  heading: "Outreach Activations",
  content: `The University’s CSR activities intend to link the university with the community. Geographically surrounded by the villages of Barabanki District, Uttar Pradesh, the CSR activities have been an integral part of SRMU since its inception. The need to improve the condition of the rural people calls for the CSR activity. With this vision, SRMU has adopted five villages from its local neighbourhood. Efforts have been made to bring about appropriate behavioural changes by imparting education and sensitize them towards the use of science and technology.
`,
};


export const counterDataForOutreachActivationPage: counterDataType[] = [
  { id: 1, value: "1000", suffix: "+", label: "Camps Organised", icon: icon1 },
  { id: 2, value: "500", suffix: "+", label: "NSS Volunteers", icon: icon2 },
  { id: 3, value: "50", suffix: "+", label: "Blood Donation Drives", icon: icon3 },

];



export const cardsData = [
  {
    id: 1,
    title: "Apni Pathshala",
    description:
      `To empower the underprivileged children, “Apni Pathshala” was constituted in SRMU on Sept. 12, 2012, which has been instrumental in imparting primary education for children. Free skill development workshops, like bag making from waste product, snack items, rakhi making, papad making, pickle making, etc., were organized to enhance the livelihood of women from the nearby villages.`,
    image: apnipath,
  },
  {
    id: 2,
    title: "NSS",
    description:
      `Shri Ramswaroop Memorial University is one step ahead to motivate students for social welfare along with education. NSS Volunteers are highly encouraged to contribute their knowledge and skills at ground level. The programme aims to include social welfare in students, and to provide service to society without bias.`,
    image: nsss,
  },
  {
    id: 3,
    title: "Shuddhi",
    description:
      `The CSR campaign is an endeavor of Shri Ramswaroop Memorial University for societal development under the directive of the Government of India. This campaign is aimed at promoting hygiene, sanitation and healthy living habits to ensure that each and everyone is aware about the basics of healthy liviing. Shuddhi - Be Clean, Be Healthy has been conceptualized to be in sync with Swachh Bharat, Swasth Bharat Mission for a better and healthier India.`,
    image: suddhii,
  },
  {
    id: 4,
    title: "Free Legal Aid Centre",
    description:
      `Keeping the tenets of the Constitution in mind the Institute of Legal Studies, Shri Ramswaroop Memorial University, Legal Aid Cell seeks to ensure dissemination of justice equally among all sections of the society. To this end, it seeks to promote free legal aid so that those who may be at a disadvantage end may be able to access courts and justice on equal terms with the more fortunate way.`,
    image: freelegal,
  },
  {
    id: 5,
    title: "Swacch Bharat Abhiyan",
    description:
      `NSS – Unit 2 of SHRI RAMSWAROOP MEMORIAL UNIVERSITY organizes 7 days special (Day/Night) camps at regular intervals in the five local villages of Barabanki which have been adopted by the university. NSS Volunteers visited the adopted villages and took up door to door campaign made the local masses aware about the importance of cleanliness in their surroundings. During the campaign the discussion was focused on various aspects of cleanliness in village.`,
    image: swach,
  },
  {
    id: 6,
    title: "Unnat Bharat Abhiyan",
    description:
`As covid-19 had hit the entire world and due to high risk of infection, people need to take precautions. Thus, an initiative for free masks and sanitizer distribution to the economically weaker section of society was started by Shri Ramswaroop Memorial University (SRMU) under Unnat Bharat Abhiyan project. Ladies from nearby villages good at sewing and stitching were engaged after a short training to make the masks and were paid for the same. It is a movement towards rural transformation and development.`,
    image: unnat,
  },
];