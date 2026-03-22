export type LegacyArticle = {
  slug: string;
  title: string;
  description: string;
  postedOn?: string;
  imagePath?: string;
  metaDescription?: string;
};

export const legacyNewsArticles: LegacyArticle[] = [
  {
    slug: "srmu-and-tata-motors-launch-diploma-in-mechatronics-engineering-under-kaushalya-program",
    title: "SRMU and Tata Motors Launch Diploma in Mechatronics Engineering Under Kaushalya Program",
    postedOn: "2025-05-15",
    metaDescription:
      "SRMU and Tata Motors launched a Diploma in Mechatronics Engineering under the Kaushalya Program to blend academic learning with industry training.",
    description: `
      <p>Shri Ramswaroop Memorial University announced a collaboration with Tata Motors Ltd., Lucknow Plant, to launch a three-year Diploma in Mechatronics Engineering under the Kaushalya Program.</p>
      <p>The program was introduced as an earn-and-learn model designed to combine classroom instruction, hands-on technical training, and direct exposure to industrial practice for future-ready learners.</p>
    `,
  },
  {
    slug: "srmu-celebrates-international-yoga-day-with-great-enthusiasm1",
    title: "SRMU Celebrates International Yoga Day with Great Enthusiasm",
    metaDescription:
      "SRMU marked International Yoga Day with participation from students, faculty, and staff, highlighting wellness, mindfulness, and holistic development.",
    description: `
      <p>SRMU observed International Yoga Day with enthusiastic participation across the campus community.</p>
      <p>The event highlighted the importance of physical wellness, mental balance, and disciplined daily practice as part of a holistic student life.</p>
    `,
  },
  {
    slug: "transforming-futures-ibm-centre-of-excellence-launched-at-srmu",
    title: "Transforming Futures: IBM Centre of Excellence Launched at SRMU",
    postedOn: "2025-07-12",
    metaDescription:
      "SRMU launched the IBM Centre of Excellence to strengthen industry-aligned learning in AI, cloud computing, data science, cybersecurity, and innovation.",
    description: `
      <p>SRMU inaugurated the IBM Centre of Excellence as part of its effort to connect academic learning with current industry technologies and practice.</p>
      <p>The centre is intended to support hands-on learning, certifications, innovation, and project-based exposure in areas such as artificial intelligence, cloud computing, data science, and cybersecurity.</p>
    `,
  },
];

export const legacyBlogArticles: LegacyArticle[] = [
  {
    slug: "top-mba-colleges-in-lucknow-for-aspiring-business-leaders",
    title: "Top MBA Colleges in Lucknow for Aspiring Business Leaders",
    metaDescription:
      "Review what aspiring management students should compare when choosing an MBA program in Lucknow.",
    description: `
      <p>This SRMU article discusses what aspiring management students should evaluate when comparing MBA options in Lucknow.</p>
      <p>It focuses on academic structure, career readiness, industry exposure, and long-term leadership development.</p>
    `,
  },
  {
    slug: "best-biotechnology-colleges-and-universities-in-lucknow-top-options-for-2025-admissions",
    title: "Best Biotechnology Colleges and Universities in Lucknow: Top Options for 2025 Admissions",
    metaDescription:
      "Explore biotechnology study options in Lucknow, with guidance on curriculum, facilities, faculty, and career prospects.",
    description: `
      <p>This archived SRMU article explores leading biotechnology study options in Lucknow and the factors students should compare during admission planning.</p>
      <p>It focuses on curriculum quality, laboratory exposure, faculty support, and long-term career opportunities in biotechnology.</p>
    `,
  },
  {
    slug: "career-opportunities-for-mba-business-analytics-graduates",
    title: "Career Opportunities for MBA Business Analytics Graduates",
    metaDescription:
      "Understand the career paths available after an MBA in Business Analytics, including data-driven roles across business functions.",
    description: `
      <p>This archived SRMU article outlines career opportunities available to graduates of MBA programs focused on business analytics.</p>
      <p>It covers the growing demand for professionals who can combine business decision-making with data interpretation and analytical tools.</p>
    `,
  },
  {
    slug: "career-scope-after-b-sc-hons-in-medical-laboratory-technology-in-india",
    title: "Career Scope After B.Sc. (Hons.) in Medical Laboratory Technology in India",
    metaDescription:
      "Review the career scope, sector demand, and progression opportunities after studying Medical Laboratory Technology.",
    description: `
      <p>This archived SRMU article discusses the career scope available after completing a B.Sc. (Hons.) in Medical Laboratory Technology.</p>
      <p>It highlights diagnostic, hospital, and laboratory roles while explaining the importance of skilled allied-health professionals in healthcare delivery.</p>
    `,
  },
  {
    slug: "how-a-b-sc-in-ott-can-open-doors-to-exciting-careers-in-healthcare",
    title: "How a B.Sc. in OTT Can Open Doors to Exciting Careers in Healthcare",
    metaDescription:
      "See how Operation Theatre Technology builds practical healthcare skills and opens pathways in clinical support and surgical environments.",
    description: `
      <p>This archived SRMU article explains how a B.Sc. in Operation Theatre Technology can lead to rewarding careers in healthcare.</p>
      <p>It focuses on practical skills, clinical readiness, and the growing need for trained professionals in surgical and hospital support systems.</p>
    `,
  },
  {
    slug: "the-role-of-medical-laboratory-technologists-mlt-in-modern-healthcare",
    title: "The Role of Medical Laboratory Technologists (MLT) in Modern Healthcare",
    metaDescription:
      "Learn how medical laboratory technologists support diagnosis, treatment planning, and reliable clinical decision-making.",
    description: `
      <p>This archived SRMU article explains the role of medical laboratory technologists in modern healthcare systems.</p>
      <p>It emphasizes their contribution to accurate testing, diagnosis support, and efficient patient care workflows.</p>
    `,
  },
  {
    slug: "top-benefits-of-pursuing-b-sc-in-medical-laboratory-technology-bmlt-in-today-s-job-market",
    title: "Top Benefits of Pursuing B.Sc. in Medical Laboratory Technology (BMLT) in Today's Job Market",
    metaDescription:
      "Explore the employability, practical training, and career advantages of pursuing BMLT in the current healthcare job market.",
    description: `
      <p>This archived SRMU article reviews the benefits of pursuing a B.Sc. in Medical Laboratory Technology in the current job market.</p>
      <p>It covers employability, practical diagnostic training, and the relevance of allied-health skills across modern healthcare settings.</p>
    `,
  },
  {
    slug: "top-colleges-for-b-tech-in-computer-science-in-lucknow-nearby-cities-best-picks-for-2025",
    title: "Top Colleges for B.Tech in Computer Science in Lucknow and Nearby Cities: Best Picks for 2025",
    metaDescription:
      "Compare computer science study options in Lucknow and nearby cities by looking at curriculum, industry exposure, and placement support.",
    description: `
      <p>This archived SRMU article compares B.Tech in Computer Science options in Lucknow and nearby cities for students planning their next admission cycle.</p>
      <p>It discusses curriculum strength, technology exposure, and placement-oriented learning environments.</p>
    `,
  },
  {
    slug: "why-paramedical-courses-are-the-future-of-healthcare",
    title: "Why Paramedical Courses Are the Future of Healthcare",
    metaDescription:
      "Understand why paramedical education is becoming central to a modern, technology-enabled healthcare workforce.",
    description: `
      <p>This archived SRMU article explains why paramedical education is becoming increasingly important in the future of healthcare.</p>
      <p>It highlights rising demand for skilled support professionals, practical healthcare training, and expanding career opportunities across the medical sector.</p>
    `,
  },
  {
    slug: "why-srmu-is-one-of-the-best-b-sc-hons-mlt-colleges-in-lucknow-for-paramedical-programs",
    title: "Why SRMU Is One of the Best B.Sc. (Hons.) MLT Colleges in Lucknow for Paramedical Programs",
    metaDescription:
      "See what makes SRMU a strong option for Medical Laboratory Technology and paramedical education in Lucknow.",
    description: `
      <p>This archived SRMU article outlines the academic and practical strengths of SRMU for students considering B.Sc. (Hons.) Medical Laboratory Technology.</p>
      <p>It focuses on paramedical learning quality, professional preparation, and the broader value of structured healthcare education.</p>
    `,
  },
];
