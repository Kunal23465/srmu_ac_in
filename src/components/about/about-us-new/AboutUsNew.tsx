import { useId } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  FlaskConical,
  HeartHandshake,
  Landmark,
  Leaf,
  Lightbulb,
  Microscope,
  Monitor,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Target,
  Trophy,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import studentsPlacedImage from "../../../assets/images/cyber-security-new/where-our-students-get-placed.webp";
import researchImage from "../../../assets/images/about/aboutUs/mission-img.webp";
import industryImage from "../../../assets/images/about/aboutUs/vision.webp";
import studentImage from "../../../assets/images/about/aboutUs/core-values-img.webp";
import campusLifeImage from "../../../assets/images/campus-life/events/harmony-5.jpg";
import legacyImage from "../../../assets/images/campus-life/events/harmony2018/harmony_1.webp";
import styles from "./AboutUsNew.module.css";

const timelineItems = [
  {
    heading: "Founding ideals",
    copy: "Inspired by the ideals of Late Shri Ramswaroop Agarwal Ji, the university upholds the values of integrity, hard work, inclusivity and responsible citizenship.",
  },
  {
    heading: "Education as a foundation",
    copy: "SRMU's journey reflects a longstanding commitment to making education a foundation for individual growth and societal progress.",
  },
  {
    heading: "A multidisciplinary university",
    copy: "Programmes today span engineering and technology, computer applications, management, commerce, law, pharmacy, agriculture, biosciences, sciences and humanities.",
  },
  {
    heading: "Learning beyond the classroom",
    copy: "With a focus on knowledge, professional competence, ethical values and social responsibility, SRMU creates an educational experience that extends beyond the classroom.",
  },
  {
    heading: "Carrying the vision forward",
    copy: "SRMU continues this vision through an environment that encourages intellectual curiosity, professional development and lifelong learning.",
  },
];

const disciplines: { label: string; Icon: LucideIcon }[] = [
  { label: "Engineering & Technology", Icon: Cpu },
  { label: "Computer Applications", Icon: Monitor },
  { label: "Management", Icon: BriefcaseBusiness },
  { label: "Commerce", Icon: Landmark },
  { label: "Law", Icon: Scale },
  { label: "Pharmacy", Icon: FlaskConical },
  { label: "Agriculture", Icon: Sprout },
  { label: "Biosciences", Icon: Microscope },
  { label: "Sciences", Icon: Lightbulb },
  { label: "Humanities", Icon: BookOpen },
];

const beyondCards = [
  {
    title: "Research & Innovation",
    copy: "Opportunities that turn curiosity into discovery.",
    image: researchImage,
    alt: "Hands working together to bring ideas together",
    Icon: Lightbulb,
    tone: styles.gold,
  },
  {
    title: "Industry Interaction",
    copy: "Practical exposure that connects learning with the real world.",
    image: industryImage,
    alt: "Aiming for goals and purposeful progress",
    Icon: Target,
    tone: styles.blue,
  },
  {
    title: "Culture, Sports & Engagement",
    copy: "A vibrant campus life that builds confidence and perspective.",
    image: campusLifeImage,
    alt: "Students celebrating together at a campus event",
    Icon: Trophy,
    tone: styles.red,
  },
];

const campusValues: { label: string; Icon: LucideIcon }[] = [
  { label: "Excellence", Icon: Award },
  { label: "Integrity", Icon: ShieldCheck },
  { label: "Inclusivity", Icon: UsersRound },
  { label: "Innovation", Icon: Lightbulb },
  { label: "Social Responsibility", Icon: HeartHandshake },
  { label: "Sustainability", Icon: Leaf },
];

export default function AboutUsNew() {
  const valuesPhotoClipId = useId();

  return (
    <div id="top" className={styles.page}>
      <section className={styles.aboutBanner} aria-labelledby="about-us-banner-title">
        <div className={styles.aboutBannerImage} aria-hidden="true">
          <img src={studentsPlacedImage} alt="" fetchPriority="high" />
        </div>
        <div className={styles.aboutBannerOverlay} aria-hidden="true" />
        <div className={`${styles.width} ${styles.aboutBannerContent}`}>
          <h1 id="about-us-banner-title" className={styles.aboutBannerTitle}>About Us</h1>
          <span className={styles.aboutBannerRule} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.hero} aria-labelledby="about-us-intro-title">
        <div className={`${styles.width} ${styles.heroGrid}`}>
          <h2 id="about-us-intro-title" className={styles.heroTitle}>
            Shaping Minds <span>Building Futures</span>
          </h2>
          <p className={styles.heroCopy}>
            Shri Ramswaroop Memorial University (SRMU) is a multidisciplinary institution committed to academic excellence, research, innovation and holistic development, with industry-oriented learning and a vibrant campus environment that prepares students for a changing world.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#academics">
              Explore Our Programmes <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className={styles.outlineButton} href="#vision">
              Our Vision <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="legacy" className={styles.legacySection}>
        <div className={styles.width}>
          <div className={styles.legacyIntro}>
            {/* <div className={styles.eyebrow}><span /> Our Legacy</div> */}
            <h2 className={styles.legacyTitle}>An Educational Vision <em>That Continues to Inspire</em></h2>
            <p className={styles.legacyLead}>Built on a legacy of educational commitment, SRMU brings together diverse disciplines, industry-oriented learning and a vibrant campus environment to prepare students for a changing world.</p>
          </div>
          <div className={styles.legacyGrid}>
            <div className={styles.timeline}>
              {timelineItems.map((item, index) => (
                <article key={item.heading} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.timelineText}>
                    <h3>{item.heading}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.legacyVisual}>
              <img src={legacyImage} alt="University community viewing student work" />
            </div>
          </div>
        </div>
      </section>

      <section id="academics" className={`${styles.section} ${styles.academicsSection}`}>
        <div className={styles.width}>
          <div className={styles.sectionIntro}>
            <div>
              {/* <div className={styles.eyebrow}><span /> Academic Excellence</div> */}
              <h2>Diverse Disciplines <em>Boundless Possibilities</em></h2>
            </div>
            <p>SRMU offers a broad spectrum of academic programmes across these disciplines. Its academic ecosystem integrates foundational knowledge with practical learning, research opportunities and industry engagement, enabling students to explore their interests and develop capabilities relevant to their chosen fields.</p>
          </div>
          <div className={styles.disciplines}>
            {disciplines.map(({ label, Icon }, index) => (
              <article key={label} className={styles.disciplineCard}>
                <span className={styles.disciplineIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.disciplineIcon}><Icon aria-hidden="true" size={25} strokeWidth={1.8} /></span>
                <b>{label}</b>
                <ArrowRight aria-hidden="true" className={styles.disciplineArrow} size={17} />
              </article>
            ))}
          </div>
          <div className={styles.moreDisciplines}>
            <span className={styles.moreIcon}><Sparkles aria-hidden="true" size={19} /></span>
            <span>Foundational knowledge <i>+</i> practical learning <i>+</i> research <i>+</i> industry engagement</span>
            <b>&amp; Other Disciplines <ArrowRight aria-hidden="true" size={17} /></b>
          </div>
        </div>
      </section>

      <section id="beyond" className={`${styles.section} ${styles.beyondSection}`}>
        <div className={styles.width}>
          <div className={styles.sectionIntro}>
            <div>
              {/* <div className={styles.eyebrow}><span /> Beyond Academics</div> */}
              <h2>An Environment for <em>Growth and Discovery</em></h2>
            </div>
            <p>Education at SRMU extends beyond academic instruction. Research, innovation, industry interaction, cultural activities, sports and student engagement contribute to a campus environment where individuals can develop their knowledge, confidence and perspectives.</p>
          </div>
          <div className={styles.cards}>
            {beyondCards.map(({ title, copy, image, alt, Icon, tone }) => (
              <article key={title} className={`${styles.beyondCard} ${tone}`}>
                <div className={styles.beyondImageWrap}>
                  <img src={image} alt={alt} />
                  <span className={styles.beyondIcon}><Icon aria-hidden="true" size={21} /></span>
                  <span className={styles.cardCorner} aria-hidden="true"><ArrowRight size={17} /></span>
                </div>
                <div className={styles.beyondCardCopy}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <blockquote className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <p>The university aims to nurture well-rounded graduates equipped with professional skills, independent thinking and a sense of responsibility towards society.</p>
            <span className={styles.quoteRule} aria-hidden="true" />
          </blockquote>
        </div>
      </section>

      <section id="vision" className={`${styles.section} ${styles.visionSection}`}>
        <div className={styles.width}>
          <div className={styles.visionHeading}>
            {/* <div className={styles.eyebrow}><span /> Direction</div> */}
            <h2>Our Vision <em>&amp; Mission</em></h2>
          </div>
          <div className={styles.visionMission}>
            <article className={`${styles.visionCard} ${styles.visionCardNavy}`}>
              <div className={styles.visionCardHead}>
                <span className={styles.visionIcon}><Target aria-hidden="true" size={23} /></span>
                <span>Our Vision</span>
              </div>
              <p>To become a globally recognised institution for education and research that nurtures individuals with ethical, social and ecological awareness, contributing to the prosperity of the nation.</p>
              <span className={styles.visionCardAccent} aria-hidden="true" />
            </article>
            <article className={`${styles.visionCard} ${styles.visionCardWhite}`}>
              <div className={styles.visionCardHead}>
                <span className={styles.visionIcon}><HeartHandshake aria-hidden="true" size={23} /></span>
                <span>Our Mission</span>
              </div>
              <ul>
                <li>To expand academic programmes and introduce new programmes aligned with emerging national and global developments and local needs.</li>
                <li>To nurture wisdom, professional ethics, values and social awareness among students from diverse backgrounds.</li>
              </ul>
              <span className={styles.visionCardAccent} aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section id="values" className={`${styles.section} ${styles.valuesSection}`} aria-labelledby="core-values-title">
        <svg className={styles.valuesSprig} viewBox="0 0 210 250" fill="none" aria-hidden="true" focusable="false">
          <path d="M162 250C136 205 126 153 146 100M143 116C143 79 165 40 187 16C188 60 170 94 143 116ZM135 172C112 153 105 128 106 103C130 124 140 147 135 172ZM149 223C113 212 77 187 57 157C97 167 129 187 149 223Z" />
        </svg>
        <div className={styles.width}>
          <div className={styles.sectionIntro}>
            <div>
              {/* <div className={styles.eyebrow}><span /> Our Core Values</div> */}
              <h2 id="core-values-title">Principles That <em>Guide Us</em></h2>
            </div>
            <p>These values guide SRMU's approach to education, research, institutional development and community engagement.</p>
          </div>
          <div className={styles.valuesLayout}>
            <div className={styles.valuesImage}>
              <svg className={styles.valuesPhotoShape} viewBox="0 0 700 470" role="img" aria-label="Students studying together on campus">
                <defs>
                  <clipPath id={valuesPhotoClipId}>
                    <path d="M35 303C45 253 54 163 104 126C146 96 187 112 247 81C366 21 537 -12 622 31C695 68 695 152 678 242C662 333 616 384 511 422C403 463 234 477 112 445C34 425 6 386 35 303Z" />
                  </clipPath>
                </defs>
                <path className={styles.valuesPhotoBackdrop} d="M19 316C35 226 104 81 210 35C315 -10 390 49 466 102C564 171 677 190 687 289C699 381 570 431 439 449C299 469 143 474 54 427C-2 398 -7 370 19 316Z" />
                <path className={styles.valuesPhotoOutline} d="M648 201C722 289 692 363 586 411C540 432 479 446 427 454" />
                <image href={studentImage} x="25" y="-85" width="660" height="769" clipPath={`url(#${valuesPhotoClipId})`} />
              </svg>
              <svg className={styles.valuesPhotoRays} viewBox="0 0 72 82" fill="none" aria-hidden="true" focusable="false">
                <path d="M54 30L33 7M34 48L3 36M28 70L15 71" />
              </svg>
            </div>
            <div className={styles.valuesGrid}>
              {campusValues.map(({ label, Icon }) => (
                <article key={label} className={styles.valueCard}>
                  <span className={styles.valueIcon}><Icon aria-hidden="true" size={48} strokeWidth={1.6} /></span>
                  <b>{label}</b>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
