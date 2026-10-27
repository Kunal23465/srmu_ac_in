import { useEffect, useState, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { facilitiesNewCards } from "../../data/campus-life/facilities/facilities-new-data";
import styles from "./FacilitiesNewExplorer.module.css";

type Category = "all" | "labs" | "learning" | "health";
type Facility = (typeof facilitiesNewCards)[number];
const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "labs", label: "Labs & research" },
  { id: "learning", label: "Learning spaces" },
  { id: "health", label: "Health & wellbeing" },
];
const categoryOf = (id: number): Category => id === 10 ? "health" : [4, 9, 11, 12, 13, 14].includes(id) ? "learning" : "labs";
const facilityOrder = [1, 2, 3, 8, 5, 6, 7, 11, 9, 4, 13, 14, 12, 10];
const facilities = [...facilitiesNewCards].sort((a, b) => facilityOrder.indexOf(a.id) - facilityOrder.indexOf(b.id));
const desktopQuery = "(min-width: 900px)";
const subscribeToDesktop = (callback: () => void) => {
  const query = window.matchMedia(desktopQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const desktopSnapshot = () => window.matchMedia(desktopQuery).matches;
const serverSnapshot = () => false;

function FacilityDetails({ facility }: { facility: Facility }) {
  return (
    <>
      <div className={styles.media}>
        <img src={facility.imageUrl} alt={`${facility.title} at SRMU`} width={720} height={450} loading="lazy" decoding="async" />
      </div>
      <span className={styles.tag}>{categories.find((category) => category.id === categoryOf(facility.id))?.label}</span>
      <h3>{facility.title}</h3>
      <p>{facility.description}</p>
      {facility.id === 11 && <Link className={styles.more} to="/central-library">Explore the library</Link>}
    </>
  );
}

export default function FacilitiesNewExplorer() {
  const { hash } = useLocation();
  const [category, setCategory] = useState<Category>("all");
  const [selectedId, setSelectedId] = useState(facilities[0].id);
  const [expanded, setExpanded] = useState(true);
  const isDesktop = useSyncExternalStore(subscribeToDesktop, desktopSnapshot, serverSnapshot);
  const visibleFacilities = facilities.filter((facility) => category === "all" || categoryOf(facility.id) === category);
  const selected = facilities.find((facility) => facility.id === selectedId) ?? facilities[0];

  // Existing facility links must also reveal entries hidden by a category filter.
  useEffect(() => {
    const match = /^#facilities-new-facility-(\d+)$/.exec(hash);
    if (!match || !facilities.some((facility) => facility.id === Number(match[1]))) return;
    setCategory("all");
    setSelectedId(Number(match[1]));
    setExpanded(true);
  }, [hash]);

  const filterFacilities = (nextCategory: Category) => {
    const first = facilities.find((facility) => nextCategory === "all" || categoryOf(facility.id) === nextCategory);
    if (!first) return;
    setCategory(nextCategory);
    setSelectedId(first.id);
    setExpanded(true);
  };

  return (
    <section id="facilities-new-academics" tabIndex={-1} className={styles.section} aria-labelledby="facilities-new-academics-title">
      <div className={styles.container}>
        <h2 id="facilities-new-academics-title" className={styles.heading}>Equipped for <span>what’s next.</span></h2>
        <div className={styles.filters} role="group" aria-label="Filter facilities by category">
          {categories.map(({ id, label }) => (
            <button key={id} type="button" className={styles.chip} aria-pressed={category === id} aria-controls="facilities-new-results" onClick={() => filterFacilities(id)}>
              {label} <small>{facilities.filter((facility) => id === "all" || categoryOf(facility.id) === id).length}</small>
            </button>
          ))}
        </div>

        <div className={styles.layout}>
          <ul id="facilities-new-results" className={styles.list} aria-label="Campus facilities">
            {visibleFacilities.map((facility) => {
              const active = facility.id === selectedId && (isDesktop || expanded);
              const detailId = `facilities-new-details-${facility.id}`;
              const buttonId = `facilities-new-select-${facility.id}`;
              return (
                <li key={facility.id} id={`facilities-new-facility-${facility.id}`} className={`${styles.item} ${styles[categoryOf(facility.id)]}`} data-active={active}>
                  <button id={buttonId} type="button" aria-expanded={isDesktop ? undefined : active} aria-pressed={isDesktop ? active : undefined} aria-controls={isDesktop ? "facilities-new-preview" : detailId} onClick={() => {
                    setSelectedId(facility.id);
                    setExpanded(isDesktop || facility.id !== selectedId || !expanded);
                  }}>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{facility.title}</span>
                    <ChevronRight className={styles.arrow} size={18} aria-hidden="true" />
                  </button>
                  {!isDesktop && <div id={detailId} className={styles.accordion} role="region" aria-labelledby={buttonId} hidden={!active}>
                    {active && <FacilityDetails facility={facility} />}
                  </div>}
                </li>
              );
            })}
          </ul>
          {isDesktop && <article id="facilities-new-preview" className={`${styles.preview} ${styles[categoryOf(selected.id)]}`} aria-label="Selected facility" aria-live="polite" aria-atomic="true">
            <FacilityDetails key={selected.id} facility={selected} />
          </article>}
        </div>
      </div>
    </section>
  );
}
