import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, HeartHandshake, Leaf, Mic2, Palette, Search, Sparkles, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cardclubCardsData, ClubsOverviewData } from "../../../data/campus-life/clubs/clubs-data";
import clubsBanner from "../../../assets/images/banner/clubs-banner.webp";
import styles from "./ClubsNew.module.css";

const categories = ["All clubs", "Arts & culture", "Music & movement", "Technology", "Wellbeing & service"] as const;
type Category = (typeof categories)[number];

const categoryByClub: Record<string, Exclude<Category, "All clubs">> = {
  Razzmataz: "Arts & culture",
  "Beat the Beats": "Music & movement",
  Expressions: "Arts & culture",
  "The Manch Club": "Arts & culture",
  "1090 Power Angels & The Power Super Heroes Club": "Wellbeing & service",
  "Tech Fusion Club": "Technology",
  "The Ozone Club": "Wellbeing & service",
  "Sur Jhankar": "Music & movement",
  "Positive Psychology": "Wellbeing & service",
  "Srijan Club": "Arts & culture",
  Snapshot: "Arts & culture",
  "Apni Pathshala Club": "Wellbeing & service",
  "The Golden Pen Club": "Arts & culture",
};

const categoryIcons = [Palette, Mic2, Sparkles, HeartHandshake];
const clubAnchor = (title: string) => `club-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export default function ClubsNew() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<Category>("All clubs");
  const [search, setSearch] = useState("");
  const [selectedClub, setSelectedClub] = useState<(typeof cardclubCardsData)[number] | null>(null);

  const visibleClubs = useMemo(() => cardclubCardsData.filter((club) => {
    const matchesCategory = activeCategory === "All clubs" || categoryByClub[club.title] === activeCategory;
    const matchesSearch = `${club.title} ${club.desc}`.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  }), [activeCategory, search]);

  useEffect(() => {
    if (!location.hash) return;
    const clubId = decodeURIComponent(location.hash.slice(1));
    const club = cardclubCardsData.find((item) => clubAnchor(item.title) === clubId);
    if (club) setSelectedClub(club);
  }, [location.hash]);

  useEffect(() => {
    if (!selectedClub) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedClub(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedClub]);

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="clubs-new-title">
        <img className={styles.heroImage} src={clubsBanner} alt="Students taking part in campus club activities" fetchPriority="high" />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.container}>
          {/* <p className={styles.heroEyebrow}>Discover · Create · Belong</p> */}
          <h1 id="clubs-new-title">Find your people.<br /><span>Follow your passion.</span></h1>
          <div className={styles.heroRule} aria-hidden="true" />
          <p className={styles.heroCopy}>From music and theatre to technology and community service, there’s a place to explore what you love and meet people who love it too.</p>
          <a className={styles.primaryButton} href="#clubs-new-directory">Explore our clubs <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="clubs-new-intro-title">
        <div className={`${styles.container} ${styles.introGrid}`}>
          <div>
            <p className={styles.eyebrow}>A community for every interest</p>
            <h2 id="clubs-new-intro-title">More than a club.<br /><span>Your campus community.</span></h2>
          </div>
          <p className={styles.introCopy}>{ClubsOverviewData.content}</p>
        </div>
        <div className={`${styles.container} ${styles.pillars}`}>
          {["Arts & culture", "Music & movement", "Technology", "Wellbeing & service"].map((label, index) => {
            const Icon = categoryIcons[index];
            return <div className={styles.pillar} key={label}><span><Icon size={20} aria-hidden="true" /></span><strong>{label}</strong></div>;
          })}
        </div>
      </section>

      <section className={styles.directory} id="clubs-new-directory" aria-labelledby="clubs-new-directory-title">
        <div className={styles.container}>
          <div className={styles.directoryHeading}>
            <div>
              <p className={styles.eyebrow}>Find your next thing</p>
              <h2 id="clubs-new-directory-title">Explore student clubs</h2>
            </div>
            <label className={styles.searchBox}>
              <Search size={18} aria-hidden="true" />
              <span className={styles.visuallyHidden}>Search clubs</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search clubs" />
            </label>
          </div>

          <div className={styles.filters} role="group" aria-label="Filter clubs by interest">
            {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? styles.activeFilter : ""} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>

          {visibleClubs.length ? <div className={styles.clubGrid}>
            {visibleClubs.map((club) => <article className={styles.clubCard} id={clubAnchor(club.title)} key={club.title}>
              <div className={styles.cardImageWrap}><img src={club.img} alt="" loading="lazy" className={styles.cardImage} /><span className={styles.cardCategory}>{categoryByClub[club.title]}</span></div>
              <div className={styles.cardBody}>
                <h3>{club.title}</h3>
                <p>{club.desc}</p>
                <button className={styles.textButton} type="button" onClick={() => setSelectedClub(club)} aria-label={`Read more about ${club.title}`}>Discover this club <ArrowRight size={16} aria-hidden="true" /></button>
              </div>
            </article>)}
          </div> : <p className={styles.emptyState}>No clubs match that search. Try another name or interest.</p>}
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className={`${styles.container} ${styles.joinCard}`}>
          <div className={styles.joinIcon}><Leaf size={24} aria-hidden="true" /></div>
          <div><p className={styles.joinEyebrow}>Ready to get involved?</p><h2>Bring your curiosity.<br /><span>We’ll help you find your place.</span></h2><p>Have a question about student clubs or want to know how to join? Reach out to the university team.</p></div>
          <Link to="/contact-us" className={styles.joinButton}>Contact SRMU <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      {selectedClub && <div className={styles.modalBackdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedClub(null); }}>
        <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="club-modal-title">
          <button type="button" className={styles.closeButton} aria-label="Close club details" onClick={() => setSelectedClub(null)}><X size={21} /></button>
          <img className={styles.modalImage} src={selectedClub.img} alt="" />
          <div className={styles.modalBody}><p className={styles.eyebrow}>{categoryByClub[selectedClub.title]}</p><h2 id="club-modal-title">{selectedClub.title}</h2><p>{selectedClub.desc}</p><Link to="/contact-us" className={styles.modalLink}>Ask how to join <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </section>
      </div>}
    </main>
  );
}
