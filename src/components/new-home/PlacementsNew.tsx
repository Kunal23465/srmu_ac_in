import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { placementsNewData as data } from "../../data/new-home/placementsNewData";
import { placementChartYears } from "../../data/new-home/placementChartData";
import { SalaryRangeChart, PlacementTrendChart } from "./PlacementCharts";
import MobileReadMore from "./MobileReadMore";
import Classes from "../../utils/styles/Global.module.css";
import styles from "./PlacementsNew.module.css";

export default function PlacementsNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const [alumniIndex, setAlumniIndex] = useState(0);
  const [activeYearIndex, setActiveYearIndex] = useState(() => {
    const referenceYear = placementChartYears.findIndex(({ year }) => year === "2023");
    return referenceYear >= 0 ? referenceYear : placementChartYears.length - 1;
  });
  const alumnus = data.alumni[alumniIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add({
      desktop: "(min-width: 1024px)",
      mobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      if (context.conditions?.reduceMotion) return;

      section.querySelectorAll<HTMLElement>("[data-placement-reveal]").forEach((element, index) => {
        gsap.fromTo(element, { y: context.conditions?.desktop ? 45 + index * 30 : 24 }, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 98%",
            end: "top 58%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });

      section.querySelectorAll<HTMLElement>("[data-placement-count]").forEach((counter) => {
        gsap.fromTo(counter, { textContent: 0 }, {
          textContent: Number(counter.dataset.placementCount),
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: counter, start: "top 92%", once: true },
        });
      });

      gsap.fromTo(section.querySelectorAll("[data-placement-logo]"), { opacity: 0.35, y: 12 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.055,
        ease: "power2.out",
        scrollTrigger: { trigger: section.querySelector("[data-placement-recruiters]"), start: "top 90%", once: true },
      });
    }, section);

    return () => media.revert();
  }, []);

  const changeAlumnus = (direction: number) => {
    setAlumniIndex((current) => (current + direction + data.alumni.length) % data.alumni.length);
  };

  return (
    <section ref={sectionRef} id="home-placements" className={styles.section} aria-labelledby="home-placements-title">
      <div className={Classes.container}>
        <div className={styles.sectionIntro} data-placement-reveal>
          <h2 id="home-placements-title" className={styles.sectionTitle}>
            {data.heading}<span>{data.highlight}</span>
          </h2>
          <MobileReadMore className={styles.description}>{data.description}</MobileReadMore>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.mainContent} data-placement-reveal>
            <section className={styles.highlights} aria-labelledby="placement-highlights-title">
              <h2 id="placement-highlights-title" className={styles.cardTitle}>
                SRMU Placement <span>Highlights 2026</span>
              </h2>
              <dl className={styles.stats}>
                {data.stats.map((stat) => (
                  <div key={stat.id} className={styles.stat}>
                    <dt>{stat.label}</dt>
                    <dd>
                      <span className={styles.srOnly}>{stat.prefix}{stat.value}{stat.suffix}</span>
                      <span aria-hidden="true">{stat.prefix}<span data-placement-count={Number.isInteger(stat.value) ? stat.value : undefined}>{stat.value}</span><span className={stat.suffix.includes("LPA") ? styles.unit : undefined}>{stat.suffix}</span></span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className={styles.coreSummary}>
                <GraduationCap size={23} aria-hidden="true" />
                <strong><span data-placement-count={data.corePlacement.value}>{data.corePlacement.value}</span>%</strong>
                <span>{data.corePlacement.label}</span>
              </div>
            </section>

            <div className={styles.analytics}>
              <div className={styles.salaryChart}>
                <SalaryRangeChart year={placementChartYears[activeYearIndex].year} />
                <Link to={data.placementsHref} className={`${styles.textLink} ${styles.chartLink}`}>
                  Explore placements <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className={styles.trendChart}>
                <PlacementTrendChart activeIndex={activeYearIndex} onYearChange={setActiveYearIndex} />
              </div>
            </div>

            <section className={styles.recruiters} aria-labelledby="home-recruiters-title">
              <div className={styles.recruiterHeading}>
                <h3 id="home-recruiters-title">Top Recruiters <span>at SRMU</span></h3>
              </div>
              <div className={styles.logoGrid} data-placement-recruiters role="region" aria-label="SRMU recruiters">
                <div className={styles.logoTrack}>
                  {[0, 1].map((copy) => (
                    <div key={copy} className={styles.logoGroup} aria-hidden={copy === 1 ? true : undefined}>
                      {data.recruiters.map((company) => (
                        <div key={company.name} className={styles.logoTile} data-placement-logo>
                          <img
                            src={company.logo}
                            alt={copy === 0 ? company.name : ""}
                            width={220}
                            height={106}
                            loading="lazy"
                            decoding="async"
                            style={{ transform: `scale(${company.scale * 1.18})` }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {alumnus && (
            <article className={styles.alumniCard} data-placement-reveal aria-roledescription="carousel" aria-label="SRMU alumni">
              <div className={styles.alumniHeader}>
                <div>
                  <span className={styles.eyebrow}>From Classrooms to Careers</span>
                  <h3>Featured Placement <span>Success Stories</span></h3>
                </div>
                <Link to={data.alumniHref} className={styles.iconLink} aria-label="View all notable SRMU alumni"><ArrowUpRight size={20} /></Link>
              </div>
              <div className={styles.portrait} aria-live="polite" aria-atomic="true">
                <img key={alumnus.id} src={alumnus.image} alt={alumnus.name} width={640} height={640} loading="eager" decoding="async" />
                <div className={styles.portraitCaption}>
                  <h4>{alumnus.name}</h4>
                  <p>{alumnus.title}</p>
                </div>
              </div>
              <div className={styles.carouselFooter}>
                <span className={styles.slideCount}><strong>{String(alumniIndex + 1).padStart(2, "0")}</strong> / {String(data.alumni.length).padStart(2, "0")}</span>
                <div className={styles.carouselDots} role="group" aria-label="Choose an alumnus">
                  {data.alumni.map((person, index) => (
                    <button key={person.id} type="button" aria-label={`Show ${person.name}`} aria-pressed={index === alumniIndex} onClick={() => setAlumniIndex(index)} />
                  ))}
                </div>
                <div className={styles.carouselControls}>
                  <button type="button" onClick={() => changeAlumnus(-1)} aria-label="Previous alumnus"><ChevronLeft size={18} /></button>
                  <button type="button" onClick={() => changeAlumnus(1)} aria-label="Next alumnus"><ChevronRight size={18} /></button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
