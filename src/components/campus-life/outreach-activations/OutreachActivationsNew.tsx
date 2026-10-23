import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, GraduationCap, HandHeart, HeartPulse, Leaf, MapPin, Scale, UsersRound, X } from "lucide-react";
import { Link } from "react-router-dom";
import { OutreachActivationsOverviewData, OutreachInitiativesData, outreachItems, outreachStats } from "../../../data/campus-life/outreach-activations/outreach-activations-data";
import styles from "./OutreachActivationsNew.module.css";

const overview = OutreachActivationsOverviewData.content.trim();
const previewEnd = overview.indexOf("inception.") + "inception.".length;
const themes = [
  { title: "Community partnerships", icon: UsersRound, summary: "Connect university learning with the communities of Barabanki through extension activities and local engagement." },
  { title: "Rural development", icon: MapPin, summary: "Support five adopted villages through education, awareness and the practical use of science and technology." },
  { title: "Learning through service", icon: HeartPulse, summary: "Build social responsibility through volunteering, cleanliness drives, medical camps and blood donation." },
  { title: "Awareness and inclusion", icon: HandHeart, summary: "Work with NGOs to promote health, sanitation, legal literacy, women’s empowerment and children’s education." },
];
const initiativePresentation = [
  { icon: BookOpen, summary: "Primary education for underprivileged children and skill development workshops for women in neighbouring villages.", labels: ["Education", "Skills", "Opportunity"] },
  { icon: UsersRound, summary: "Student volunteers put their knowledge and skills to work at the grassroots, serving society without bias.", labels: ["Service", "Volunteering", "Community"] },
  { icon: HeartPulse, summary: "Be Clean, Be Healthy: promoting hygiene, sanitation and everyday habits for healthier communities.", labels: ["Health", "Hygiene", "Awareness"] },
  { icon: Scale, summary: "Promoting free legal aid and equal access to justice for people who face barriers to legal support.", labels: ["Justice", "Access", "Support"] },
  { icon: Leaf, summary: "NSS volunteers lead village camps and door-to-door campaigns on cleanliness in SRMU’s five adopted villages.", labels: ["Cleanliness", "Action", "Responsibility"] },
  { icon: HandHeart, summary: "Supporting rural transformation, including mask-making livelihoods and free masks and sanitizers during COVID-19.", labels: ["Livelihoods", "Care", "Development"] },
];

function useCardScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [controls, setControls] = useState({ previous: false, next: false });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => {
      const previous = element.scrollLeft > 2;
      const next = element.scrollLeft + element.clientWidth < element.scrollWidth - 2;
      setControls((current) => current.previous === previous && current.next === next ? current : { previous, next });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const element = ref.current;
    const card = element?.firstElementChild;
    if (!element || !card) return;
    const gap = parseFloat(window.getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };
  return { ref, controls, scroll };
}

function ScrollControls({ label, target, previous, next, scroll }: {
  label: string; target: string; previous: boolean; next: boolean; scroll: (direction: -1 | 1) => void;
}) {
  return <div className={styles.scrollControls} role="group" aria-label={`${label} navigation`}>
    <button type="button" aria-label={`Previous ${label}`} aria-controls={target} disabled={!previous} onClick={() => scroll(-1)}><ArrowLeft size={20} aria-hidden="true" /></button>
    <button type="button" aria-label={`Next ${label}`} aria-controls={target} disabled={!next} onClick={() => scroll(1)}><ArrowRight size={20} aria-hidden="true" /></button>
  </div>;
}

type Detail = { title: string; description: string; image?: string };

export default function OutreachActivationsNew() {
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const [detail, setDetail] = useState<Detail | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const themeScroll = useCardScroll<HTMLUListElement>();
  const initiativeScroll = useCardScroll<HTMLDivElement>();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!detail || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [detail]);

  const closeDetail = () => dialogRef.current?.close();

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="outreach-new-title">
      <div className={`${styles.container} ${styles.heroContent}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Outreach activations · Learn · Serve · Grow</p>
          <h1 id="outreach-new-title">Reaching out.<br /><span>Making a difference.</span></h1>
          <span className={styles.heroRule} aria-hidden="true" />
          <p>At SRMU, learning reaches beyond the classroom. Our students and faculty work with neighbouring communities to support education, health, dignity and opportunity.</p>
          <a href="#outreach-new-initiatives" className={styles.button}>Explore our initiatives <ArrowDown size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section className={styles.stats} aria-label="Outreach in numbers">
      <dl className={styles.container}>{outreachStats.map((stat) => <div key={stat.label}>
        <dt>{stat.label}</dt><dd>{stat.value.toLocaleString("en-IN")}+</dd>
      </div>)}</dl>
    </section>

    <section className={styles.section} aria-labelledby="outreach-new-overview-title">
      <div className={`${styles.container} ${styles.overview}`}>
        <div>
          <p className={styles.eyebrow}>A culture of care and responsibility</p>
          <h2 id="outreach-new-overview-title" className={styles.heading}>Connect and <span>contribute.</span></h2>
          <p className={styles.body}>
            {overview.slice(0, previewEnd)}
            <span id="outreach-new-overview-more" className={overviewExpanded ? undefined : styles.mobileCollapsed}>{overview.slice(previewEnd)}</span>
          </p>
          <button type="button" className={`${styles.readMore} ${styles.mobileReadMore}`} aria-expanded={overviewExpanded} aria-controls="outreach-new-overview-more" onClick={() => setOverviewExpanded((expanded) => !expanded)}>{overviewExpanded ? "Read Less" : "Read More"}</button>
          <div className={styles.overviewCards}>
            <div className={`${styles.overviewCard} ${styles.navyCard}`}><span className={styles.overviewIcon}><MapPin size={27} aria-hidden="true" /></span><div><h3>Five villages</h3><p>Long-term connections with our local communities.</p></div><ArrowRight className={styles.smallArrow} size={28} aria-hidden="true" /></div>
            <div className={styles.overviewCard}><span className={styles.overviewIcon}><GraduationCap size={27} aria-hidden="true" /></span><div><h3>Purpose in action</h3><p>Learning, volunteering and growing together.</p></div><ArrowRight className={styles.smallArrow} size={28} aria-hidden="true" /></div>
          </div>
        </div>
        <figure className={styles.overviewFigure}>
          <img src={OutreachInitiativesData.initiatives[1].front.img} alt="SRMU NSS volunteers taking part in community outreach" loading="lazy" decoding="async" width={408} height={581} />
          <figcaption><span>Knowledge, compassion and service for stronger communities.</span></figcaption>
        </figure>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="outreach-new-development-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Our commitment</p>
        <h2 id="outreach-new-development-title" className={styles.heading}>Holistic development <span>through service.</span></h2>
        <p className={styles.body}>Community engagement helps students build social values, understand local challenges and take responsibility for the world around them.</p>
        <ScrollControls label="development card" target="outreach-new-development-cards" {...themeScroll.controls} scroll={themeScroll.scroll} />
        <ul ref={themeScroll.ref} id="outreach-new-development-cards" className={styles.themeGrid} aria-label="Student development through outreach" tabIndex={0}>
          {themes.map(({ title, icon: Icon, summary }, index) => <li key={title} className={`${styles.themeCard} ${styles[`theme${index}`]}`}>
            <span className={styles.themeIcon}><Icon size={29} strokeWidth={1.8} aria-hidden="true" /></span>
            <div><h3>{title}</h3><p>{summary}</p><button type="button" className={styles.readMore} aria-label={`Read more about ${title.toLowerCase()}`} aria-haspopup="dialog" onClick={() => setDetail({ title, description: outreachItems.desc[index].point })}>Read More</button></div>
            <ArrowRight size={19} className={styles.themeArrow} aria-hidden="true" />
          </li>)}
        </ul>
      </div>
    </section>

    <section id="outreach-new-initiatives" className={`${styles.section} ${styles.initiatives}`} aria-labelledby="outreach-new-initiatives-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Support in action</p>
        <h2 id="outreach-new-initiatives-title" className={styles.heading}>Initiatives that <span>make a difference.</span></h2>
        <p className={styles.body}>{OutreachInitiativesData.desc}</p>
        <ScrollControls label="initiative card" target="outreach-new-initiative-cards" {...initiativeScroll.controls} scroll={initiativeScroll.scroll} />
        <div ref={initiativeScroll.ref} id="outreach-new-initiative-cards" className={styles.initiativeGrid} role="region" aria-label="Outreach initiative cards" tabIndex={0}>
          {OutreachInitiativesData.initiatives.map((initiative, index) => {
            const { icon: Icon, summary, labels } = initiativePresentation[index];
            return <article key={initiative.front.title} className={`${styles.initiativeCard} ${styles[`initiative${index}`]}`}>
              <span className={styles.initiativeIcon}><Icon size={35} strokeWidth={1.8} aria-hidden="true" /></span>
              <div className={styles.initiativeCopy}>
                <h3><button type="button" aria-haspopup="dialog" onClick={() => setDetail({ title: initiative.back.title, description: initiative.back.description, image: initiative.front.img })}>{initiative.front.title}<span><ArrowRight size={14} aria-hidden="true" /></span></button></h3>
                <p>{summary}</p>
                <button type="button" className={styles.readMore} aria-label={`Read more about ${initiative.front.title}`} aria-haspopup="dialog" onClick={() => setDetail({ title: initiative.back.title, description: initiative.back.description, image: initiative.front.img })}>Read More</button>
              </div>
              <p className={styles.cardLabels}>{labels.map((label) => <span key={label}>{label}</span>)}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="outreach-new-connect-title">
      <div className={`${styles.container} ${styles.cta}`}>
        <div><p className={styles.heroEyebrow}>A stronger community is everyone’s work</p><h2 id="outreach-new-connect-title">Small actions. <span>Lasting connections.</span></h2><p>Learn more about SRMU and the opportunities to learn, volunteer and contribute.</p></div>
        <Link to="/contact-us" className={styles.button}>Connect with SRMU <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>

    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="outreach-new-detail-title" onClose={() => setDetail(null)} onClick={(event) => { if (event.target === event.currentTarget) closeDetail(); }}>
      {detail && <div className={styles.dialogContent}>
        <div className={styles.dialogHeader}><h2 id="outreach-new-detail-title">{detail.title}</h2><button type="button" aria-label="Close details" onClick={closeDetail} autoFocus><X size={22} aria-hidden="true" /></button></div>
        {detail.image && <img className={styles.dialogImage} src={detail.image} alt={detail.title} width={408} height={581} />}
        <p className={styles.body}>{detail.description}</p>
      </div>}
    </dialog>
  </main>;
}
