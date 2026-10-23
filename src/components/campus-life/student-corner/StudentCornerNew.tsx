import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, FileText, GraduationCap, HandHeart, Play, Search, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { studentCornerFirstCycle, StudentCornerOverviewData, studentCornerSecondCycle } from "../../../data/campus-life/student-corner/student-corner-data";
import type { TableRowData } from "../../../types/table-data-types";
import campusImage from "../../../assets/images/about/aboutUs/knowyourcampusimg.webp";
import studentImage from "../../../assets/images/home/girls-image.webp";
import styles from "./StudentCornerNew.module.css";

type ResourceKind = "Policy" | "Fee guide" | "Tutorial";
type ResourceFilter = "All resources" | "Policies" | "Fee guides";
type Resource = TableRowData & { category: ResourceKind; description: string };

const descriptions: Record<string, string> = {
  "Student Support Manual": "A practical guide to student support services, welfare resources and help available at SRMU.",
  "University Student Senate": "Learn about student representation and the University Student Senate framework.",
  "Student Welfare Fund Policy": "Information about the University’s student welfare fund and its policy framework.",
  "Grievance Redressal Mechanism For Students": "Understand the process for raising student grievances and seeking a resolution.",
  "Disciplinary Policy": "Guidance on the rules and procedures that support a safe and respectful campus.",
  "Code of Ethics & Code of Conduct For Students": "The values and conduct expected of students as members of the SRMU community.",
  "Slow Learner Policy": "Support framework and guidance for students who need additional academic assistance.",
  "Advance Learner Policy": "Guidance and opportunities for students ready to extend their academic learning.",
  "Quick Fee Payment(Online Payment): User Manual": "Step-by-step instructions for making an online fee payment.",
  "Online Fee Payment for 2nd Year & Above(Tutorial)": "Watch the online fee payment walkthrough for students in second year and above.",
};

const resources: Resource[] = [
  ...studentCornerSecondCycle.map((item) => ({ ...item, category: "Policy" as const, description: descriptions[item.title] ?? "Student information and guidance from SRMU." })),
  ...studentCornerFirstCycle.map((item) => ({
    ...item,
    category: item.download.type === "video" ? "Tutorial" as const : "Fee guide" as const,
    description: descriptions[item.title] ?? "A guide to student services and resources.",
  })),
];

const principles = [
  { title: "Student support", text: "Find information about welfare and the support available to students.", icon: HandHeart },
  { title: "Learning resources", text: "Explore guidance for slow learners and advanced learners.", icon: GraduationCap },
  { title: "Campus policies", text: "Read the conduct, discipline and student welfare policies.", icon: ShieldCheck },
  { title: "Student voice", text: "Learn how students can take part in Senate representation.", icon: UsersRound },
];

export default function StudentCornerNew() {
  const [filter, setFilter] = useState<ResourceFilter>("All resources");
  const [query, setQuery] = useState("");
  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesFilter = filter === "All resources" || (filter === "Policies" ? resource.category === "Policy" : resource.category !== "Policy");
      const matchesQuery = !normalizedQuery || `${resource.title} ${resource.description}`.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="student-corner-new-title">
      <img className={styles.heroImage} src={campusImage} alt="SRMU campus" fetchPriority="high" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroCopy}>
          {/* <p className={styles.eyebrow}>Learn · Find support · Move forward</p> */}
          <h1 id="student-corner-new-title" className={styles.heroTitle}>Your student guide.<br /><span>All in one place.</span></h1>
          <div className={styles.heroRule} aria-hidden="true" />
          <p className={styles.heroText}>{StudentCornerOverviewData.content.trim()}</p>
          <a className={styles.button} href="#student-corner-new-resources">Explore student resources <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section className={styles.stats} aria-label="Student Corner resources">
      <dl className={`${styles.container} ${styles.statsGrid}`}>
        {[
          { value: String(studentCornerSecondCycle.length), label: "Student policies" },
          { value: String(studentCornerFirstCycle.length), label: "Fee payment resources" },
          { value: String(studentCornerFirstCycle.filter((item) => item.download.type === "video").length), label: "Video tutorial" },
          { value: String(resources.length), label: "Resources" },
        ].map(({ value, label }) => <div key={label} className={styles.stat}><dt className={styles.statLabel}>{label}</dt><dd className={styles.statValue}>{value}</dd></div>)}
      </dl>
    </section>

    <section className={styles.section} aria-labelledby="student-corner-new-overview-title">
      <div className={`${styles.container} ${styles.overview}`}>
        <div>
          <p className={styles.eyebrow}>A useful place to start</p>
          <h2 id="student-corner-new-overview-title" className={styles.heading}>Support for your <span>student journey.</span></h2>
          <p className={styles.lead}>Student Corner brings together useful information for academic life, student welfare, campus conduct and support. Browse the resource library to find policies, manuals and tutorials in one place.</p>
          <div className={styles.principles}>
            {principles.map(({ title, text, icon: Icon }) => <article key={title} className={styles.principle}>
              <span className={styles.principleIcon}><Icon size={22} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>)}
          </div>
        </div>
        <figure className={styles.overviewVisual}>
          <img className={styles.overviewImage} src={studentImage} alt="SRMU students supporting one another" loading="lazy" decoding="async" />
          <figcaption className={styles.visualNote}>Information and guidance for every step of campus life.</figcaption>
        </figure>
      </div>
    </section>

    <section id="student-corner-new-resources" className={`${styles.section} ${styles.sectionTint}`} aria-labelledby="student-corner-new-resources-title">
      <div className={styles.container}>
        <div className={styles.resourceHeader}>
          <div>
            <p className={styles.eyebrow}>Policies, manuals and tutorials</p>
            <h2 id="student-corner-new-resources-title" className={styles.heading}>Find the resource <span>you need.</span></h2>
            <p className={styles.lead}>Open a document or tutorial for more detailed guidance.</p>
          </div>
          <div className={styles.filters} role="group" aria-label="Filter student resources">
            {(["All resources", "Policies", "Fee guides"] as const).map((option) => <button key={option} type="button" className={styles.filter} aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>)}
          </div>
        </div>
        <label className={styles.searchWrap}>
          <Search className={styles.searchIcon} size={18} aria-hidden="true" />
          <span className="sr-only">Search student resources</span>
          <input className={styles.search} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search policies and guides" />
        </label>
        <div className={styles.resourceGrid} aria-live="polite">
          {filteredResources.length ? filteredResources.map((resource) => {
            const isVideo = resource.download.type === "video";
            const Icon = isVideo ? Play : FileText;
            return <article className={styles.resource} key={`${resource.category}-${resource.id}`}>
              <div className={styles.resourceTop}>
                <span className={styles.resourceIcon}><Icon size={25} aria-hidden="true" /></span>
                <span className={styles.resourceType}>{isVideo ? <Play size={12} aria-hidden="true" /> : <BookOpen size={12} aria-hidden="true" />}{resource.category}</span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a className={styles.resourceLink} href={resource.download.url} target="_blank" rel="noreferrer">
                {isVideo ? "Watch tutorial" : "Open resource"}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>;
          }) : <p className={styles.emptyState}>No resources match that search. Try a different title or category.</p>}
        </div>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="student-corner-new-steps-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Simple to use</p>
        <h2 id="student-corner-new-steps-title" className={styles.heading}>Get to the right <span>information.</span></h2>
        <div className={styles.steps}>
          {[
            { title: "Choose a topic", text: "Filter the library or search by policy, support area or payment guide." },
            { title: "Open the resource", text: "Read or download a PDF, or watch the online fee payment tutorial." },
            { title: "Find more support", text: "Use the relevant university service when you need personal assistance." },
          ].map(({ title, text }, index) => <article key={title} className={styles.step}>
            <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className={`${styles.container} ${styles.cta}`} aria-label="Further student support">
      <div><h2>Need more <span>student support?</span></h2><p>Explore student representation or contact SRMU for help with your query.</p></div>
      <div className={styles.ctaActions}>
        <Link className={styles.button} to="/student-senate-new">Student Senate <ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className={styles.button} to="/contact-us">Contact SRMU <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
    <div className="h-12" aria-hidden="true" />
  </main>;
}
