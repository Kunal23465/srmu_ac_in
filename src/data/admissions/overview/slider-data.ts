import bestclass from "../../../assets/images/admissions/overview/best-in-class-facilities-21122306243021.webp"
import industrydriven from "../../../assets/images/admissions/overview/industry-driven-environment-21122306245548.webp"
import scholarshipschemes from "../../../assets/images/admissions/overview/scholarship-schemes-21122306252422.webp"
import lifebeyond from "../../../assets/images/admissions/overview/life-beyond.webp"
import globalexp from "../../../assets/images/admissions/overview/global-explore.webp"
import valueadded from "../../../assets/images/admissions/overview/value-added.webp"
import placement from "../../../assets/images/admissions/overview/dedicated-placement.webp"
import research from "../../../assets/images/admissions/overview/best-in-class-facilities-21122306254545.webp"

export interface AdvantageItem {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  extraText: string;
}

export const advantageData: AdvantageItem[] = [
  {
    id: 1,
    icon: bestclass,
    title: "Best in",
    subtitle: "Class Facilities",
    description: `
      <p>Shri Ramswaroop Memorial University is committed to leveraging its facilities and the system of world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities.</p>
    `,
    extraText: `
      <p>This makes SRMU a repository of academic and extra-curricular excellence.</p>
    `,
  },
  {
    id: 2,
    icon: industrydriven,
    title: "Industry",
    subtitle: "Driven Environment",
    description: `
      <p>SRMU is the only campus in the region having the best industry interface to ensure in-demand skill development and a plethora of career opportunities. Choose a program in your preferred area and turn your dreams into reality.</p>
      <p><strong>Ramswaroop graduates</strong> get the advantage of our strategic alliances with top industry leaders which ensures continuous skill-based learning and exclusive opportunities to meet and participate with leading organizations.</p>

    `,
    extraText: `
    `,
  },
  {
    id: 3,
    icon: scholarshipschemes,
    title: "Scholarship",
    subtitle: "Schemes",
    description: `
      <p>We at Shri Ramswaroop Memorial University strongly believe that monetary constraints should not prevent a student from accessing quality education. <strong>We are fully committed to our social responsibilities.</strong></p>
            <p>Hence, the university came up with <strong>scholarship plans</strong> that provide a golden opportunity for students. Scholarships are available for all programs offered by the University.</p>

    `,
    extraText: `
    `,
  },
  {
    id: 4,
    icon: research,
    title: "Robust",
    subtitle: "Research Environment",
    description: `
    <p>To improve the research/innovation ecosystem in the university,<strong>“University Research Fund”</strong>
     was established with a provision to provide financial assistance to research scholars/faculty members for undertaking translational research activities. The efforts have shown result in a short span of time, with consistent increase in number of quality publications in journals of repute, in-house innovations, consultancy projects from World Bank, Govt. organizations and extension services.
    </p>

    `,
    extraText: `
    `,
  },
  {
    id: 5,
    icon: placement,
    title: "Dedicated",
    subtitle: "Placement Cell",
    description: `
    <p>
    Dreaming of working with Fortune 500 Companies of India, then SRMU is the platform where you can think of realizing your dreams. Based on a strong Industry-Academic interface,
    <strong>Ramswaroop University</strong> is setting new benchmarks in campus placements year on year. <strong>
    Amazon, IBM, PayTM, Cognizant, TCS, Torrent Gas, Windmoller, Hettich, Piramal, HDFC, Adani, and SAP</strong> are some of the prominent names from the industry who are visiting our campus every year for recruitment of fresh talent.
    </p>
    `,
    extraText: `
    `,
  },
  {
    id: 6,
    icon: valueadded,
    title: "Value",
    subtitle: "Added Courses",
    description: `
<p>
Aiming to develop skill set beyond the boundaries of the opted course curriculum and as per the interest area of student, plethora of value added courses have been launched. These interdisciplinary courses are market oriented and skill enhancing which empower the students beyond their normal domain of studies. These courses make <strong>
Ramswaroop Graduates</strong> stand apart from their counterparts from other institutions.
</p>    `,
    extraText: "",
  },
  {
    id: 7,
    icon: globalexp,
    title: "Global",
    subtitle: "Exposure",
    description: `
<p>
Through conferences, seminars, guest lectures and global study tours (GST), we encourage our students to witness and learn the diverse strategies of teaching and learning. Exposure through such programs facilitates personal maturity, self-confidence and adaptability to new cultures. This provides <strong>

Ramswaroop graduates</strong>better employment prospects due to better soft skills and work environment flexibility.</p>
    `,
    extraText: "",
  },
  {
    id: 8,
    icon: lifebeyond,
    title: "Life Beyond",
    subtitle: "Academics",
    description: `
<p>
The university runs some effective initiatives like SRMU clubs, which are an array of student-run committees providing opportunities to students to put theory into practice. This is a platform for the students to<strong>
experiment, innovate and imbibe the spirit of team work
</strong>. These clubs play a vital role in shaping the passion and interest of the students, apart from the academics. SRMU believes that indulging in such activities teaches the real-time facets of life.
</p>
    `,
    extraText: "",
  },
];
