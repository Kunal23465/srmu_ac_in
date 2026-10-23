import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileText, Handshake, UsersRound } from "lucide-react";
import { directorData, meetingFrequencyData, students } from "../../../data/campus-life/student-senate/student-senate-data";
import StudentSenateSectionNav from "./StudentSenateSectionNav";
import styles from "./StudentSenateNew.module.css";

const structure = [
  { title: "Class Representatives", text: "Students elect Class Representatives to bring forward questions and priorities from their class." },
  { title: "Institute Representatives", text: "Class Representatives participate in the process for selecting Institute Representatives under the Senate policy." },
  { title: "University Student Senate", text: "Forty elected Institute Representatives and ten nominated members make up the 50-member Senate." },
  { title: "Office Bearers", text: "The Senate selects four Office Bearers: Convener, Deputy Convener, Secretary and Treasurer." },
];

const principles = [
  { title: "Student voice", text: "A formal channel for students to bring academic and administrative concerns forward.", icon: UsersRound },
  { title: "Constructive dialogue", text: "Representatives work with university authorities to discuss issues and identify practical responses.", icon: Handshake },
];

export default function StudentSenateNew() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const activeYear = meetingFrequencyData[activeYearIndex];

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="student-senate-new-title">
      <img className={styles.heroImage} src={meetingFrequencyData[0].image} alt="SRMU students participating in a Student Senate gathering" fetchPriority="high" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Represent · Discuss · Make a difference</p>
          <h1 id="student-senate-new-title" className={styles.heroTitle}>Student voices.<br /><span>Shared responsibility.</span></h1>
          <div className={styles.heroRule} aria-hidden="true" />
          <p className={styles.heroText}>The SRMU Student Senate brings student representatives and university authorities together to discuss academic and administrative concerns and strengthen campus life.</p>
          <a className={styles.button} href="#student-senate-new-structure">Explore the Senate <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section className={styles.stats} aria-label="Student Senate structure">
      <dl className={`${styles.container} ${styles.statsGrid}`}>
        {[
          { value: "40", label: "Institute representatives" },
          { value: "10", label: "Nominated members" },
          { value: "50", label: "Senate members" },
          { value: "4", label: "Office bearers" },
        ].map(({ value, label }) => <div key={label} className={styles.stat}><dt className={styles.statLabel}>{label}</dt><dd className={styles.statValue}>{value}</dd></div>)}
      </dl>
    </section>

    <StudentSenateSectionNav />

    <section id="student-senate-new-overview" className={`${styles.section} ${styles.anchoredSection}`} aria-labelledby="student-senate-new-overview-title">
      <div className={`${styles.container} ${styles.overview}`}>
        <div>
          <p className={styles.eyebrow}>A representative student body</p>
          <h2 id="student-senate-new-overview-title" className={styles.heading}>A platform for <span>student voice.</span></h2>
          <p className={styles.lead}>The Student Senate is an independent student body that represents student perspectives on academic and administrative matters. It offers a structured way to raise concerns, discuss possible solutions and contribute to a supportive university environment.</p>
          <div className={styles.principles}>
            {principles.map(({ title, text, icon: Icon }) => <article className={styles.principle} key={title}>
              <span className={styles.principleIcon}><Icon size={22} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>)}
          </div>
        </div>
        <figure className={styles.overviewImageWrap}>
          <img className={styles.overviewImage} src={students[0].image} alt="Student Senate representatives meeting at SRMU" loading="lazy" decoding="async" />
          <figcaption className={styles.imageCaption}>Students and university authorities working together for a better campus.</figcaption>
        </figure>
      </div>
    </section>

    <section id="student-senate-new-structure" className={`${styles.section} ${styles.sectionTint} ${styles.anchoredSection}`} aria-labelledby="student-senate-new-structure-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>From class to university</p>
        <h2 id="student-senate-new-structure-title" className={styles.heading}>How representation <span>comes together.</span></h2>
        <p className={styles.lead}>The Senate connects student representation at class and institute levels with university-wide discussion.</p>
        <div className={styles.steps}>
          {structure.map(({ title, text }, index) => <article className={styles.step} key={title}>
            <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="student-senate-new-documents" className={`${styles.section} ${styles.anchoredSection}`} aria-labelledby="student-senate-new-documents-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Understand the framework</p>
        <h2 id="student-senate-new-documents-title" className={styles.heading}>Senate information <span>and policy.</span></h2>
        <p className={styles.lead}>Read the overview, preamble and formation details that guide the University Student Senate.</p>
        <div className={styles.documents}>
          {students.map((item) => <article className={styles.document} key={item.id}>
            <img className={styles.documentImage} src={item.image} alt="" loading="lazy" decoding="async" />
            <div className={styles.documentBody}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className={styles.documentLink} href={item.pdfLink} target="_blank" rel="noreferrer">Read document <FileText size={17} aria-hidden="true" /><ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section id="student-senate-new-director" className={`${styles.sectionTint} ${styles.anchoredSection}`} aria-labelledby="student-senate-new-director-title">
      <div className={`${styles.container} ${styles.section} ${styles.director}`}>
        <div className={styles.directorPhotoFrame}>
          <img className={styles.directorPhoto} src={directorData.image} alt={directorData.name} loading="lazy" decoding="async" />
        </div>
        <div>
          <p className={styles.eyebrow}>Guidance and student welfare</p>
          <h2 id="student-senate-new-director-title" className={styles.directorName}>{directorData.name}</h2>
          <p className={styles.directorRole}>{directorData.designation}</p>
          <dl className={styles.directorFacts}>
            <div className={styles.fact}><dt>Qualification</dt><dd>{directorData.qualification}</dd></div>
            <div className={styles.fact}><dt>Experience</dt><dd>{directorData.experience}</dd></div>
            <div className={styles.fact}><dt>Contact</dt><dd><a href={`tel:${directorData.contact.replaceAll("-", "")}`}>{directorData.contact}</a> · Ext. {directorData.extension}</dd></div>
            <div className={styles.fact}><dt>Email</dt><dd><a href={`mailto:${directorData.email}`}>{directorData.email}</a></dd></div>
          </dl>
          <div className={styles.bio}>
            {directorData.bio.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
            <a className={styles.orcid} href={directorData.orcid} target="_blank" rel="noreferrer">View ORCID profile <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>

    <section id="student-senate-new-meetings" className={`${styles.section} ${styles.anchoredSection}`} aria-labelledby="student-senate-new-meetings-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Discussion and follow-through</p>
        <h2 id="student-senate-new-meetings-title" className={styles.heading}>Meetings and <span>yearly updates.</span></h2>
        <p className={styles.lead}>Class and Institute Representatives gather agenda points during the semester. Institute Representatives also meet university authorities to discuss student concerns and follow up on actions.</p>
        <div className={styles.yearTabs} role="tablist" aria-label="Student Senate yearly updates">
          {meetingFrequencyData.map((item, index) => <button key={item.year} type="button" role="tab" id={`senate-year-tab-${index}`} aria-selected={activeYearIndex === index} aria-controls="senate-year-panel" className={styles.yearTab} onClick={() => setActiveYearIndex(index)}>Year {item.year}</button>)}
        </div>
        <div id="senate-year-panel" role="tabpanel" aria-labelledby={`senate-year-tab-${activeYearIndex}`} className={styles.yearPanel}>
          <div>
            <h3 className={styles.yearHeading}>{activeYear.year}</h3>
            <p className={styles.yearSubheading}>Important issues and activities</p>
            {activeYear.sections ? <div className={styles.bio}>
              {activeYear.sections.map((section) => <div key={section.title}>
                <h4>{section.title}</h4>
                <ul className={styles.issueList}>{section.points.map((point) => <li className={styles.issue} key={point}><Check size={17} aria-hidden="true" /><span>{point}</span></li>)}</ul>
              </div>)}
            </div> : <ul className={styles.issueList}>{activeYear.issues?.map((issue) => <li className={styles.issue} key={issue}><Check size={17} aria-hidden="true" /><span>{issue}</span></li>)}</ul>}
          </div>
          <img className={styles.yearPhoto} src={activeYear.image} alt={`Student Senate activity in ${activeYear.year}`} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section id="student-senate-new-contact" className={`${styles.container} ${styles.sectionCta} ${styles.anchoredSection}`} aria-label="Contact the Student Senate office">
      <div><h2>Bring your voice <span>to the conversation.</span></h2><p>Contact the Director of Student Welfare for information about the Student Senate.</p></div>
      <a className={styles.button} href={`mailto:${directorData.email}`}>Contact Student Welfare <ArrowRight size={17} aria-hidden="true" /></a>
    </section>
    <div className="h-12" aria-hidden="true" />
  </main>;
}
