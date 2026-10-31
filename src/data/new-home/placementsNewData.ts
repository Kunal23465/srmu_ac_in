import amazon from "../../assets/new-home/recruiters/amazon.webp";
import capgemini from "../../assets/new-home/recruiters/capgemini.webp";
import gsk from "../../assets/new-home/recruiters/gsk.webp";
import lt from "../../assets/new-home/recruiters/l-t.webp";
import mankind from "../../assets/new-home/recruiters/mankind.webp";
import policy from "../../assets/new-home/recruiters/policy.webp";
import ranbaxy from "../../assets/new-home/recruiters/ranbaxy.webp";
import tataSteel from "../../assets/new-home/recruiters/tata-steek.webp";
import zydus from "../../assets/new-home/recruiters/zydus.webp";
import rudraPrakashTiwari from "../../assets/images/new-placement-section/rudra-prakash-tiwari.png";
import shauryaKumarDubey from "../../assets/images/new-placement-section/shaurya-kumar-dubey.png";
import garimaRai from "../../assets/images/new-placement-section/garima-rai.png";
import rashiGupta from "../../assets/images/new-placement-section/rashi-gupta.jpeg";
import aryaMishra from "../../assets/images/new-placement-section/arya-mishra.png";

// Keep the original Placements.tsx independent. Add new approved content here.
export const placementsNewData = {
  heading: "Trusted Education with",
  highlight: "Outstanding Placements",
  description:
    "SRMU combines academic learning with industry exposure, internships, technical training and placement preparation to help students build future-ready careers. Recognized among the preferred choices for students seeking the best university in Uttar Pradesh for professional and technology-focused education, SRMU emphasizes practical learning through live projects, coding culture, recruiter engagement and skill-focused training across engineering, AI, management, healthcare and emerging technologies.",
  stats: [
    { id: "highest-package", value: 53, prefix: "₹", suffix: " LPA", label: "Highest Package" },
    { id: "job-offers", value: 1200, prefix: "", suffix: "+", label: "Job Offers" },
    { id: "students", value: 225, prefix: "", suffix: "", label: "Students Above 5+ LPA" },
    { id: "multiple-offers", value: 33, prefix: "", suffix: "%", label: "Students with Multiple Offers" },
  ],
  corePlacement: { value: 100, label: "Placement in Core Branches" },
  recruiters: [
    { name: "Amazon", logo: amazon },
    { name: "Capgemini", logo: capgemini },
    { name: "GSK", logo: gsk },
    { name: "L&T", logo: lt },
    { name: "Mankind", logo: mankind },
    { name: "Policy", logo: policy },
    { name: "Ranbaxy", logo: ranbaxy },
    { name: "Tata Steel", logo: tataSteel },
    { name: "Zydus", logo: zydus },
  ],
  alumni: [
    {
      id: "rudra-prakash-tiwari",
      name: "Rudra Prakash Tiwari",
      title: "15 LPA - Taste of MoM",
      image: rudraPrakashTiwari,
    },
    {
      id: "shaurya-kumar-dubey",
      name: "Shaurya Kumar Dubey",
      title: "15 LPA - Taste of MoM",
      image: shauryaKumarDubey,
    },
    {
      id: "garima-rai",
      name: "Garima Rai",
      title: "8 LPA - Coding Ninjas",
      image: garimaRai,
    },
    {
      id: "arya-mishra",
      name: "Arya Mishra",
      title: "8 LPA - Coding Ninjas",
      image: aryaMishra,
    },
  ],
  placementsHref: "/placements",
  alumniHref: "/notable-alumni",
};
