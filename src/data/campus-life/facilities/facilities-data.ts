import { customeOverViewType } from "../../../types/home-data-type";
import computercenter from "../../../assets/images/campus-life/facilities/computerlab-1302241158026.jpg"
import biotechnology from "../../../assets/images/campus-life/facilities/biotechnology.jpg"
import pharmacylabs from "../../../assets/images/campus-life/facilities/pharmacylabs.jpg"
import mootcourt from "../../../assets/images/campus-life/facilities/mootcourt.jpg"
import studioandmedia from "../../../assets/images/campus-life/facilities/studioandmedia.jpg"
import agriculture from "../../../assets/images/campus-life/facilities/agriculture.jpg"
import herbal from "../../../assets/images/campus-life/facilities/herbal.jpg"
import stateofart from "../../../assets/images/campus-life/facilities/stateofart.jpg"
import modernclass from "../../../assets/images/campus-life/facilities/modernclass.jpg"
import healthcare from "../../../assets/images/campus-life/facilities/healthcare.jpg"
import centrallibrary from "../../../assets/images/campus-life/facilities/centrallibrary.jpg"
import seminarhall from "../../../assets/images/campus-life/facilities/seminarhall.jpg"
import languagelab from "../../../assets/images/campus-life/facilities/languagelab.jpg"
import workshop from "../../../assets/images/campus-life/facilities/workshop.jpg"

import img1 from "../../../assets/images/campus-life/facilities/tennis-22122306280275.jpg";
import img2 from "../../../assets/images/campus-life/facilities/cricket-22122306142914.jpg";
import img3 from "../../../assets/images/campus-life/facilities/volleyball-22122306154913.jpg";
import img4 from "../../../assets/images/campus-life/facilities/kabaddi-22122306282561.jpg";
import img5 from "../../../assets/images/campus-life/facilities/badminton-22122306160875.jpg";
import img6 from "../../../assets/images/campus-life/facilities/table-tennis-22122306285390.jpg";
import img7 from "../../../assets/images/campus-life/facilities/basketball-22122306171125.jpg";
import img8 from "../../../assets/images/campus-life/facilities/gymnasium-2212230619143.jpg";
import img9 from "../../../assets/images/campus-life/facilities/football-22122306193148.jpg";

import b1 from "../../../assets/images/campus-life/facilities/b-1.jpeg"
import b2 from "../../../assets/images/campus-life/facilities/b-2.jpeg"
import b3 from "../../../assets/images/campus-life/facilities/b-3.jpeg"
import b4 from "../../../assets/images/campus-life/facilities/b-4.jpeg"
import b5 from "../../../assets/images/campus-life/facilities/b-5.jpeg"

export const outreachImages = [
  { src: img1, caption: "Tennis" },
  { src: img2, caption: "Cricket" },
  { src: img3, caption: "Volleyball" },
  { src: img4, caption: "Kabaddi" },
  { src: img5, caption: "Badminton" },
  { src: img6, caption: "Table Tennis" },
  { src: img7, caption: "BasketBall" },
  { src: img8, caption: "Gymnasium" },
  { src: img9, caption: "Football" },
];

export const FacilitiesOverviewData: customeOverViewType = {
  heading: "Facilities",
  content: `SRMU’s state-of-the-art campus is designed to foster academic excellence, personal growth, and community engagement. From contemporary research facilities to vibrant student spaces, we provide a dynamic environment to support your educational journey.From modern classrooms equipped with the latest technology, extensive libraries for comprehensive study, to collaborative spaces that encourage creativity – SRMU unlocks a million possibilities. Our world-class laboratories, on-campus food joints, and sports facilities offer a holistic blend of academic and extracurricular pursuits. Join us in a campus where you not just learn, but connect, explore, and thrive.`,
};

export interface FacilityCard {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface CardData {
    id: string;
    title: string;
    image: string;
    description: string;
}

export const facilitiesData: FacilityCard[] = [
  {
    id: 1,
    imageUrl: computercenter,
    title: 'Computer Centres',
    description: `<p>Over <b>1000+ High-end systems having</b> Intel Core i7 configuration with licensed software and 24/7 internet access. Supports coding, design, simulations, and research work across all programs.</p>`,
  },
  {
    id: 2,
    imageUrl: biotechnology,
    title: 'Biotechnology Labs',
    description: `<p>Equipped with <b>10+ specialized labs</b> including Molecular Biology, Microbiology, Biochemistry & Genetic Engineering. Advanced instruments like PCR machines, spectrophotometers, laminar airflow, and centrifuges for hands-on research and experimentation.</p>`,
  },
  {
    id: 3,
    imageUrl: pharmacylabs,
    title: 'Pharmacy Labs',
    description: `<p>Includes <b>10+ specialized labs</b> like Pharmacology, Pharmaceutics, and Pharmaceutical Chemistry. Used by <b>1000+ students</b> for hands-on training in drug formulation, analysis, and research.</p>`,
  },
  {
    id: 4,
    imageUrl: mootcourt,
    title: 'Moot Court',
    description: `<p>A fully functional courtroom setup for <b>realistic legal training and mock trials</b>. Engages <b>law students</b> in case arguments, drafting, and legal simulations.</p>`,
  },
  {
    id: 5,
    imageUrl: studioandmedia,
    title: 'Studio & Media Labs',
    description: `<p>Includes <b>2 news studios</b>, an editing suite, soundproof voiceover room & green screen setup. Offers hands-on training in <b>news reading, video editing, podcasting & filmmaking.</b></p>`,
  },
  {
    id: 6,
    imageUrl: agriculture,
    title: 'Agricultural Farms',
    description: `<p>Over <b>20 hectares of farmland</b> for hands-on training in modern agriculture. Used by <b>200+ students yearly</b> for live demos, crop studies, and field research.</p>`,
  },
  {
    id: 7,
    imageUrl: herbal,
    title: 'Herbal Garden',
    description: `<p>Home to <b>100+ medicinal plant species</b> used for study and research. Supports <b>pharmacy, biotech & agriculture students</b> with real-time learning in herbal sciences.</p>`,
  },
  {
    id: 8,
    imageUrl: stateofart,
    title: 'State-of-the-Art Labs',
    description: `<p>More than <b>60+ specialized labs</b> across disciplines like Engineering, Pharmacy & Sciences.Equipped with <b>latest tools and instruments</b> to ensure practical learning.</p>`,
  },
  {
    id: 9,
    imageUrl: modernclass,
    title: 'Modern Classrooms',
    description: `<p>Over <b>100+ smart classrooms</b> equipped with projectors and audio-visual systems. Designed to support <b>interactive learning</b> with comfortable seating and modern teaching aids.</p>`,
  },
  {
    id: 10,
    imageUrl: healthcare,
    title: 'Healthcare Facilities',
    description: `<p>SRMU’s on-campus healthcare facilities ensure the well-being of the student community with comprehensive and accessible medical services.Promotes a healthy campus environment.</p>`,
  },
  {
    id: 11,
    imageUrl: centrallibrary,
    title: 'Central Library',
    description: `<p>The Central Library provides access to 65,399 Books/eBooks, 121 print journals, 2086 e-Journals etc. It has membership of IIM Lucknow, NDLI Club, Current Science Association and DELNET.</p>`,
  },
  {
    id: 12,
    imageUrl: seminarhall,
    title: 'Seminar Hall',
    description: `<p>SRMU’s seminar halls provide state-of-the-art facilities for lectures, workshops, and events. Supports effective learning and large group interactions.</p>`,
  },
  {
    id: 13,
    imageUrl: languagelab,
    title: 'Language Lab',
    description: `<p>Equipped with <b>30+ interactive modules</b> for language enhancement and communication skills.Trains <b>300+ students every semester</b> in spoken English, pronunciation, and soft skills.</p>`,
  },
  {
    id: 14,
    imageUrl: workshop,
    title: 'Workshop',
    description: `<p>Fully equipped mechanical and technical workshops with <b>modern tools & machinery</b>. Used by <b>2500+ engineering students</b> for hands-on training in fabrication, carpentry, welding, and more.</p>`,
  },
];






export const CARD_CONTENT: CardData[] = [
    {
        id: 'B1',
        title: 'B1: Academic Block',
        image: b1,
        description:
            "B1 Academic Block at Shri Ramswaroop Memorial University (SRMU) is a multidisciplinary hub housing departments such as Civil, Mechanical, Electrical, and Chemical Sciences, facilitating diverse educational pursuits. Additionally, it hosts the Institute of Natural Sciences & Humanities, Institute of Biosciences & Technology, and features two state-of-the-art auditoriums. With specialized facilities like the Centre for Energy Conservation, B1 Academic Block stands as a comprehensive center fostering academic excellence and innovation across various disciplines at SRMU.",
    },
    {
        id: 'B2',
        title: 'B2: Academic Block',
        image: b2,
        description:
            "B2 Academic Block at Shri Ramswaroop Memorial University (SRMU) is a thriving hub for academic excellence, housing departments in Computer Science, Computer Application, Physical Sciences, and Mathematical Sciences. It is also home to vital research and consultancy services, fostering a culture of innovation and inquiry. With a centralized library and other essential academic facilities, B2 Academic Block stands as a comprehensive space dedicated to the advancement of knowledge and intellectual exploration at SRMU.",
    },
    {
        id: 'B3',
        title: 'B3: Academic Block',
        image: b3,
        description:
            "B3 Academic Block at Shri Ramswaroop Memorial University (SRMU) is a dynamic center hosting specialized institutes, including Pharmacy, Architecture & Planning, and Education & Research. The block accommodates a well-equipped library and other essential academic facilities, creating an integrated space for diverse educational pursuits. B3 Academic Block reflects SRMU's commitment to providing a comprehensive environment for learning, research, and innovation in these distinctive fields.",
    },
    {
        id: 'B4',
        title: 'B4: Academic Block',
        image: b4,
        description:
            "B4 Academic Block at Shri Ramswaroop Memorial University (SRMU) serves as a vibrant hub for a wide range of academic disciplines, including Humanities, Management, Commerce & Economics, Legal Studies, and Media Studies. It houses essential facilities such as offices for NCC, NSS, moot court, and the university club, fostering extracurricular engagement and holistic development among students. With its diverse offerings and comprehensive infrastructure, B4 Academic Block exemplifies SRMU's commitment to providing a multifaceted educational experience encompassing various fields and interests.",
    },
    {
        id: 'B5',
        title: 'B5: Academic Block',
        image: b5,
        description:
            "B5 Academic Block at Shri Ramswaroop Memorial University (SRMU) is dedicated to fostering agricultural education and technological advancements, hosting the Institute of Agricultural Sciences & Technology and the School of Polytechnic. The block includes well-equipped workshops and other academic facilities, providing students with hands-on experiences and practical learning opportunities. B5 Academic Block exemplifies SRMU's commitment to holistic education, particularly in the fields of agriculture and technology.",
    },
];


