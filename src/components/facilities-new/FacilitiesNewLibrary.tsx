import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, BookOpen, Database, FileText, Monitor, Printer, UsersRound, Wifi } from "lucide-react";
import { facilitiesNewPageCopy } from "../../data/campus-life/facilities/facilities-new-data";
import libraryImage from "../../assets/images/bus-images/IMG_1667.webp";
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
        <div className={styles.headingArea}>
          <div className={`${styles.heading} ${styles.reveal}`}>
            <h2 id="facilities-new-library-title">Central Library and <span>Digital Learning Resources</span></h2>
          </div>
          <p className={`${styles.introduction} ${styles.reveal}`} style={stagger(60)}>{library.introduction}</p>
        </div>

        <div className={styles.content}>
          <h3 className={styles.subheading}>Library Collection</h3>
          <p className={styles.sectionLead}>{library.collectionIntroduction}</p>
          <ul className={styles.collections}>
            {library.collections.map(({ value, label }, index) => {
              const Icon = collectionIcons[index] ?? BookOpen;
              return (
                <li key={label} className={`${styles.collection} ${styles[collectionColors[index]]} ${styles.reveal}`} style={stagger(120 + index * 80)}>
                  <span className={styles.icon}><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className={styles.collectionText}><strong>{value}</strong> {label}</span>
                </li>
              );
            })}
            <li className={`${styles.collectionWide} ${styles.reveal}`} style={stagger(360)}>
              {library.additionalMaterials}
            </li>
          </ul>

          <h3 className={styles.subheading}>Library Facilities</h3>
          <p className={styles.sectionLead}>{library.facilitiesIntroduction}</p>
          <ul className={styles.features}>
            {library.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? FileText;
              return (
                <li key={feature} className={`${styles.feature} ${styles[featureColors[index]]} ${styles.reveal}`} style={stagger(200 + index * 55)}>
                  <span className={styles.icon}><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${styles.visual} ${styles.reveal}`} style={stagger(220)}>
          <div className={styles.photoDecorations} aria-hidden="true">
            <span className={styles.navyShape} />
            <span className={styles.yellowShape} />
            <span className={`${styles.dots} ${styles.photoDots}`} />
            <span className={styles.backFrame} />
          </div>
          <figure className={styles.photo}>
            <div className={styles.imageCrop}><img src={libraryImage} alt="SRMU student browsing academic books in the Central Library" width={6000} height={4000} loading="lazy" decoding="async" /></div>
            <figcaption><BookOpen size={27} strokeWidth={1.8} aria-hidden="true" /><span>The Central Library at SRMU</span></figcaption>
          </figure>
        </div>
        <div className={`${styles.digitalResources} ${styles.reveal}`} style={stagger(430)}>
          <h3 className={styles.subheading}>Digital Research Resources</h3>
          <p className={styles.databases}>{library.databases}</p>
        </div>
        <div className={`${styles.actions} ${styles.reveal}`} style={stagger(500)}>
          <a className={styles.primaryButton} href={library.webOpacUrl} target="_blank" rel="noreferrer">WebOPAC Access Link <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className={styles.secondaryButton} href={library.remoteAccessUrl} target="_blank" rel="noreferrer">Remote Access Link <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
