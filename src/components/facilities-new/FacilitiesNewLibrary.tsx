import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, BookOpen, Database, FileText, Monitor, Printer, UsersRound, Wifi } from "lucide-react";
import { facilitiesNewPageCopy } from "../../data/campus-life/facilities/facilities-new-data";
import libraryImage from "../../assets/images/campus-life/facilities/centrallibrary.jpg";
import styles from "./FacilitiesNewLibrary.module.css";

const collectionIcons = [BookOpen, FileText, FileText];
const featureIcons = [BookOpen, Wifi, Monitor, Database, UsersRound, FileText, Printer, Monitor];
const featureColors = ["navy", "blue", "yellow", "red", "blue", "navy", "red", "yellow"];
const collectionColors = ["navy", "blue", "yellow"];
const stagger = (delay: number) => ({ "--reveal-delay": `${delay}ms` }) as CSSProperties;

export default function FacilitiesNewLibrary() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const library = facilitiesNewPageCopy.library;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="facilities-new-library" tabIndex={-1} className={styles.section} data-visible={visible} aria-labelledby="facilities-new-library-title">
      <div className={styles.decoration} aria-hidden="true">
        <span className={styles.wash} />
        <span className={styles.topCircle} />
        <span className={styles.topRing} />
        <span className={styles.bottomCircle} />
        <span className={styles.bottomRing} />
        <span className={styles.yellowRing} />
        <span className={`${styles.dots} ${styles.leftDots}`} />
        <span className={`${styles.dots} ${styles.bottomDots}`} />
      </div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={`${styles.heading} ${styles.reveal}`}>
            <div className={styles.accent} aria-hidden="true"><span /><span /></div>
            <h2 id="facilities-new-library-title">The Central <span>Library.</span></h2>
          </div>
          <p className={`${styles.introduction} ${styles.reveal}`} style={stagger(60)}>{library.introduction} Its physical and digital collections include:</p>

          <dl className={styles.collections}>
            {library.collections.map(({ value, label }, index) => {
              const Icon = collectionIcons[index];
              return (
                <div key={label} className={`${styles.collection} ${styles[collectionColors[index]]} ${styles.reveal}`} style={stagger(120 + index * 80)}>
                  <span className={styles.icon}><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div><dt>{label}</dt><dd>{value}</dd></div>
                </div>
              );
            })}
          </dl>

          <p className={styles.materials}>{library.additionalMaterials}</p>
          <ul className={styles.features}>
            {library.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <li key={feature} className={`${styles.feature} ${styles[featureColors[index]]} ${styles.reveal}`} style={stagger(200 + index * 55)}>
                  <span className={styles.icon}><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
          <p className={styles.databases}>{library.databases}</p>
        </div>

        <div className={`${styles.visual} ${styles.reveal}`} style={stagger(220)}>
          <div className={styles.photoDecorations} aria-hidden="true">
            <span className={styles.navyShape} />
            <span className={styles.yellowShape} />
            <span className={`${styles.dots} ${styles.photoDots}`} />
            <span className={styles.backFrame} />
          </div>
          <figure className={styles.photo}>
            <div className={styles.imageCrop}><img src={libraryImage} alt="Bookshelves inside the Central Library at SRMU" width={720} height={480} loading="lazy" decoding="async" /></div>
            <figcaption><BookOpen size={27} strokeWidth={1.8} aria-hidden="true" /><span>Physical collections and digital resources for every stage of learning.</span></figcaption>
          </figure>
        </div>
        <div className={`${styles.actions} ${styles.reveal}`} style={stagger(500)}>
          <a className={styles.primaryButton} href={library.webOpacUrl} target="_blank" rel="noreferrer">Open Web OPAC <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className={styles.secondaryButton} href={library.remoteAccessUrl} target="_blank" rel="noreferrer">Remote library access <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
