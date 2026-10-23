import { useState } from "react";
import { ArrowDown, ArrowRight, BookOpen, Building2, Bus, Check, CircleHelp, CreditCard, FileCheck2, GraduationCap, HeartPulse, House, Landmark, ShieldCheck, UsersRound } from "lucide-react";
import { grievanceData, processFlowCall, processFlowStudent } from "../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data";
import committeeImage from "../../../assets/images/about/committeesAndCells/Student-Grievance-and-Redressal-Committee.webp";
import GrievanceSectionNav from "./GrievanceSectionNav";
import styles from "./GrievanceRedressalSystemNew.module.css";

type Audience = "student" | "cell";

const categoryIcons = [GraduationCap, CreditCard, Building2, House, ShieldCheck, ShieldCheck, FileCheck2, CreditCard, UsersRound, HeartPulse, Building2, BookOpen, Bus, Landmark, CircleHelp];

export default function GrievanceRedressalSystemNew() {
  const [audience, setAudience] = useState<Audience>("student");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllProcedureSteps, setShowAllProcedureSteps] = useState(false);
  const [showAllGuidelines, setShowAllGuidelines] = useState(false);
  const process = audience === "student" ? processFlowStudent : processFlowCall;
  const registration = process.registeringGrievance;
  const feedback = process.takingFeedback;
  const feedbackImage = audience === "student" ? processFlowStudent.takingFeedback.flowimg : undefined;

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="grievance-new-title">
      <img className={styles.heroImage} src={committeeImage} alt="SRMU Student Grievance and Redressal Committee meeting" fetchPriority="high" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Listen · Review · Resolve</p>
          <h1 id="grievance-new-title" className={styles.heroTitle}>Your concerns.<br /><span>A clear path forward.</span></h1>
          <div className={styles.heroRule} aria-hidden="true" />
          <p className={styles.heroText}>SRMU’s Student Grievance Redressal System provides a structured way to raise concerns, follow their progress and share feedback on a resolution.</p>
          <a href="#grievance-new-types" className={styles.button}>Explore grievance types <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section className={styles.stats} aria-label="Grievance system at a glance">
      <dl className={`${styles.container} ${styles.statsGrid}`}>
        {[
          { value: String(grievanceData.types.objectivesList.length), label: "Concern categories" },
          { value: String(grievanceData.procedures.objectivesList.length), label: "Resolution stages" },
          { value: String(grievanceData.guidelines.objectivesList.length), label: "Guideline points" },
          { value: String(processFlowStudent.registeringGrievance.objectivesList.length), label: "Portal steps" },
        ].map(({ value, label }) => <div key={label} className={styles.stat}><dt className={styles.statLabel}>{label}</dt><dd className={styles.statValue}>{value}</dd></div>)}
      </dl>
    </section>

    <GrievanceSectionNav />

    <section id="grievance-new-overview" className={`${styles.section} ${styles.anchoredSection}`} aria-labelledby="grievance-new-about-title">
      <div className={`${styles.container} ${styles.overview}`}>
        <div>
          <p className={styles.eyebrow}>A fair and transparent process</p>
          <h2 id="grievance-new-about-title" className={styles.heading}>A system built to <span>hear and respond.</span></h2>
          <p className={styles.lead}>{grievanceData.about.purposeText}</p>
          <div className={styles.purposeCard}>
            <h3>{grievanceData.about.objectivesTitle}</h3>
            <p>{grievanceData.about.objectivesIntro}</p>
            <ul className={styles.objectives}>{grievanceData.about.objectivesList.map((objective) => <li className={styles.objective} key={objective}><Check size={17} aria-hidden="true" /><span>{objective}</span></li>)}</ul>
          </div>
        </div>
        <figure className={styles.overviewFigure}>
          <img className={styles.overviewImage} src={committeeImage} alt="Members of the Student Grievance and Redressal Committee" loading="lazy" decoding="async" />
          <figcaption className={styles.figureCaption}>A designated committee reviews concerns with confidentiality and impartiality.</figcaption>
        </figure>
      </div>
    </section>

    <section id="grievance-new-types" className={`${styles.section} ${styles.sectionTint} ${styles.anchoredSection}`} aria-labelledby="grievance-new-types-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>What can be raised</p>
        <h2 id="grievance-new-types-title" className={styles.heading}>Issues the system <span>can address.</span></h2>
        <p className={styles.lead}>Student concerns may relate to academic, administrative, welfare or campus service matters, including:</p>
        <ul id="grievance-new-category-list" className={styles.categories}>
          {grievanceData.types.objectivesList.map((item, index) => {
            const Icon = categoryIcons[index % categoryIcons.length] ?? CircleHelp;
            return <li className={`${styles.category} ${index >= 4 && !showAllCategories ? styles.categoryMore : ""}`} key={item}><span className={styles.categoryIcon}><Icon size={19} aria-hidden="true" /></span><span>{item}</span></li>;
          })}
        </ul>
        <button type="button" className={styles.categoryToggle} aria-expanded={showAllCategories} aria-controls="grievance-new-category-list" onClick={() => setShowAllCategories((show) => !show)}>
          {showAllCategories ? "View Less" : "View More"}
        </button>
      </div>
    </section>

    <section id="grievance-new-process" className={`${styles.section} ${styles.anchoredSection}`} aria-labelledby="grievance-new-process-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>From submission to follow-up</p>
        <h2 id="grievance-new-process-title" className={styles.heading}>How a grievance is <span>handled.</span></h2>
        <p className={styles.lead}>{grievanceData.procedures.objectivesTitle}</p>
        <ol id="grievance-new-process-steps" className={styles.guidelines}>
          {grievanceData.procedures.objectivesList.map((step, index) => <li className={`${styles.guideline} ${index >= 4 && !showAllProcedureSteps ? styles.processMore : ""}`} key={step}><span className={styles.guidelineNumber}>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
        </ol>
        <button type="button" className={styles.processToggle} aria-expanded={showAllProcedureSteps} aria-controls="grievance-new-process-steps" onClick={() => setShowAllProcedureSteps((show) => !show)}>
          {showAllProcedureSteps ? "View Less" : "View More"}
        </button>
        <div className={styles.notice}><ShieldCheck size={23} aria-hidden="true" /><p>Grievances can move through in-process, forwarded, settled, closed or re-opened statuses. Students are notified when a resolution is ready and can share whether they are satisfied with the outcome.</p></div>
      </div>
    </section>

    <section id="grievance-new-guidelines" className={`${styles.sectionTint} ${styles.anchoredSection}`} aria-labelledby="grievance-new-guidelines-title">
      <div className={`${styles.container} ${styles.section}`}>
        <p className={styles.eyebrow}>Before submitting</p>
        <h2 id="grievance-new-guidelines-title" className={styles.heading}>Helpful guidelines for <span>students.</span></h2>
        <p className={styles.lead}>{grievanceData.guidelines.purposeText}</p>
        <ol id="grievance-new-guideline-list" className={styles.guidelines}>
          {grievanceData.guidelines.objectivesList.map((guideline, index) => <li className={`${styles.guideline} ${index >= 4 && !showAllGuidelines ? styles.guidelineMore : ""}`} key={guideline}><span className={styles.guidelineNumber}>{String(index + 1).padStart(2, "0")}</span><p>{guideline}</p></li>)}
        </ol>
        <button type="button" className={styles.guidelineToggle} aria-expanded={showAllGuidelines} aria-controls="grievance-new-guideline-list" onClick={() => setShowAllGuidelines((show) => !show)}>
          {showAllGuidelines ? "View Less" : "View More"}
        </button>
      </div>
    </section>

    <section id="grievance-new-instructions" className={`${styles.section} ${styles.anchoredSection}`} aria-labelledby="grievance-new-instructions-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Step-by-step instructions</p>
        <h2 id="grievance-new-instructions-title" className={styles.heading}>Choose your <span>registration route.</span></h2>
        <p className={styles.lead}>Students can register a grievance from their own account. A Students’ Grievance Cell member can also record it on a student’s behalf.</p>
        <div className={styles.processTabs} role="group" aria-label="Choose grievance registration route">
          <button type="button" className={styles.processTab} aria-pressed={audience === "student"} onClick={() => setAudience("student")}>For students</button>
          <button type="button" className={styles.processTab} aria-pressed={audience === "cell"} onClick={() => setAudience("cell")}>For Grievance Cell</button>
        </div>
        <p className={styles.processIntro}>{registration.purposeText1}</p>
        {registration.purposeText2 && <p className={styles.processIntro}>{registration.purposeText2}</p>}
        <div className={styles.processColumns}>
          <article className={styles.processCard}>
            <h3>{registration.title}</h3>
            <ol className={styles.stepList}>{registration.objectivesList.map((step, index) => <li className={styles.stepItem} key={step}><span className={styles.stepIndex}>{index + 1}</span><span>{step}</span></li>)}</ol>
          </article>
          <article className={styles.processCard}>
            <h3>{feedback.title}</h3>
            <p className={styles.processDescription}>{feedback.purposeText1}</p>
            <ol className={styles.stepList}>{feedback.objectivesList.map((step, index) => <li className={styles.stepItem} key={step}><span className={styles.stepIndex}>{index + 1}</span><span>{step}</span></li>)}</ol>
          </article>
        </div>
        {feedbackImage && <img className={styles.flowImage} src={feedbackImage} alt="Flow chart for providing feedback on a resolved grievance" loading="lazy" decoding="async" />}
      </div>
    </section>

    <section id="grievance-new-portal" className={`${styles.container} ${styles.cta} ${styles.anchoredSection}`} aria-label="Open the Student Grievance Redressal Portal">
      <div><h2>Ready to raise a <span>grievance?</span></h2><p>Sign in to the online portal to register an issue and follow up on its status.</p></div>
      <a href="https://eyojan.unif.co.in/" target="_blank" rel="noreferrer" className={styles.button}>Go to grievance portal <ArrowRight size={17} aria-hidden="true" /></a>
    </section>
    <div className="h-12" aria-hidden="true" />
  </main>;
}
