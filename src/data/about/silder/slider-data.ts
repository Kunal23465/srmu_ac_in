export type WhyItem = {
  title: string;
  description: string;
};

export type OurGoals = {
  title: string;
  subtitle: string;
  description: string;
};

const data: WhyItem[] = [
  {
    title: "Build",
    description:
      "Your future career, with access to expert guidance, and with placements and job offers from 250+ top-level companies",
  },
  {
    title: "Leadership",
    description:
      "SRMU is the brainchild of Pooja and Pankaj Agarwal - two gold-medal-winning IIT-Kanpur alums from the batch of 1998 - who dreamed of building an institution where education is not a destination, but a journey of empowerment and transformation",
  },
  {
    title: "Exposure",
    description:
      "To prepare industry-ready professionals, SRMU offers industrial visits, hands-on laboratory work, expert guest lectures, and an incubation center to nurture emerging entrepreneurs.",
  },
  {
    title: "Dive",
    description:
      "Into a dynamic learning journey with our cutting-edge industry-driven programs, expert faculty, modern infrastructure, and wide range of scholarships.",
  },
  {
    title: "Explore",
    description:
      "Your curiosity and contribute to breakthroughs in diverse fields through our research initiatives",
  },
  {
    title: "Experience",
    description:
      "A vibrant campus life through our student clubs, sports facilities, homely campus accommodation, and exciting campus events.",
  },
  {
    title: "Connect",
    description:
      "With global trends, industry stalwarts, and new perspectives through our conferences.",
  },
];

export const ourGoalsData: OurGoals[] = [
  {
    title: "Goal One",
    subtitle: "TO CREATE CORPORATE READY PROFESSIONALS.",
    description:
      "We create opportunities for students to gain practical, real-world experience at SRMU, continuously refining our syllabus to align with industry demands",
  },
  {
    title: "Goal Two",
    subtitle: "TO BUILD STRONG RELATIONS WITH INDUSTRY STALWARTS.",
    description: `
        We stay in consistent touch with recruiters and top companies through regular HR conclaves and corporate meets. Additionally, we emphasize meaningful research and student-involved consultancy to provide tangible benefits to the industry`,
  },
  {
    title: "Goal Three",
    subtitle: "TO PROMOTING A GLOBAL OUTLOOK.",

    description: `We cultivate a strong cultural and social awareness in our students around global aspects of business, technology, research, and development.`,
  },
  {
    title: "Goal Four",
    subtitle: "TO BUILD AN INDUSTRY INTERFACE.",

    description: `
        We guarantee exposure through guest lectures, industrial visits, workshops, research collaborations, and industrial training for our students.`,
  },
  {
    title: "Goal Five",
    subtitle: "TO PROVIDE 100% PLACEMENT ASSISTANCE.",

    description: `
        Our Complete Career Building Programme (CCBP) operates year-round, boosting student employability and giving them a competitive advantage. Key areas of focus include English communication, computer skills, group discussion techniques, mock personal interviews, subject knowledge, and confidence building.`,
  },
];

export default data;
