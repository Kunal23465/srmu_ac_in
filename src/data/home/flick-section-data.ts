import facalties from "../../assets/images/banner/facalties-banner.webp";
import green from "../../assets/images/banner/green-banner.webp";
import clubs from "../../assets/images/banner/clubs-banner.webp";
import innovation from "../../assets/images/banner/innovation-banner.webp";
import consultancy from "../../assets/images/banner/consultancy-banner.webp";
import events from "../../assets/images/banner/events-banner.webp";
interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const flickcategories: CategoryItem[] = [
  {
    id: "section_24",
    title: "Facilities: Connect, Explore & Thrive",
    description: "SRMU’s state-of-the-art campus is designed to foster academic excellence, personal growth, and community engagement.",
    image: facalties,
  },
  {
    id: "section_25",
    title: "Green Initiatives: Journey Towards A Greener Future",
    description: "We strive to create a campus culture that embraces environmentally conscious practices, extending from classrooms to wider community spaces.",
    image: green,
  },
  {
    id: "section_26",
    title: "Clubs: It Fuels Fun",
    description: "Joining a student club at SRMU isn't just about finding a hobby; it's a transformative experience.",
    image: clubs,
  },
  {
    id: "section_64",
    title: "Innovation: Sparking Inventive Breakthroughs",
    description: "Rooted in a culture of originality and forward-thinking, the university places a premium on creative exploration and novel solutions.",
    image: innovation,
  },
  {
    id: "section_65",
    title: "Consultancy: Delivering Strategic Solutions",
    description: "Positioned as a bridge between academia and practical application, the consultancy initiatives at SRMU bring together academic expertise and industry needs.",
    image: consultancy,
  },
  {
    id: "section_66",
    title: "Events: Year-Round Campus Activities",
    description: "A rich tapestry of celebrations and milestones defines SRMU’s collective journey.",
    image: events,
  },
];
