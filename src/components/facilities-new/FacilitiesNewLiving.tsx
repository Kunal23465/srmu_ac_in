import { useEffect, useState, useSyncExternalStore } from "react";
import type { MouseEventHandler } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, BedDouble, Bus, HeartPulse, Landmark } from "lucide-react";
import { facilitiesNewPageCopy } from "../../data/campus-life/facilities/facilities-new-data";
import styles from "./FacilitiesNewLiving.module.css";

type SectionNavigation = MouseEventHandler<HTMLAnchorElement>;
const essentials = [
  { id: "healthcare", title: "Healthcare", text: facilitiesNewPageCopy.healthcareAndMedicalFacilities, icon: HeartPulse, to: "/facilities-new#facilities-new-facility-10", link: "Explore healthcare" },
  { id: "banking", title: "Banking", text: "On-campus banking facilities help with routine financial needs, including access to cash and other provider services.", icon: Landmark, to: "#facilities-new-hostels", link: "View residential services" },
  { id: "hostel", title: "Hostel Accommodation", text: "Explore residential options, amenities and information for students and research scholars.", icon: BedDouble, to: "#facilities-new-hostels", link: "Explore the hostels" },
  { id: "transport", title: "Transport, Fees & Routes", text: "Check published bus routes, pickup points and departure timings.", icon: Bus, to: facilitiesNewPageCopy.busRoutesAndTimings.url, link: "View transport routes" },
];
type Essential = (typeof essentials)[number];
const amenityGroups = [
  { id: "comfort", label: "Rooms and Comfort" },
  { id: "study", label: "Study and Recreation" },
  { id: "safety", label: "Safety and Security" },
  { id: "health", label: "Food and Health" },
  { id: "services", label: "Services and Guests" },
] as const;
type AmenityGroup = (typeof amenityGroups)[number]["id"];
// These categories follow the existing amenities data, without shortening its conditions.
const amenityCategories: AmenityGroup[] = ["comfort", "comfort", "comfort", "health", "study", "services", "safety", "safety", "safety", "health", "comfort", "comfort", "study", "study", "study", "services"];
const amenityOrder = [0, 4, 6, 9, 2, 14, 5, 7, 10, 12, 3, 11, 8, 13, 15, 1];
const subscribeToDesktop = (callback: () => void) => {
  const query = window.matchMedia("(min-width: 900px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const desktopSnapshot = () => window.matchMedia("(min-width: 900px)").matches;
const serverSnapshot = () => false;

function EssentialDetails({ item, onSectionNavigate }: { item: Essential; onSectionNavigate: SectionNavigation }) {
  const Icon = item.icon;
  const label = <>{item.link}<ArrowUpRight size={18} aria-hidden="true" /></>;
  return (
    <>
      <span className={styles.serviceIcon}><Icon size={42} strokeWidth={1.5} aria-hidden="true" /></span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      {item.to.startsWith("/") ? <Link className={styles.serviceLink} to={item.to}>{label}</Link> :
        <a className={styles.serviceLink} href={item.to} onClick={item.to.startsWith("#") ? onSectionNavigate : undefined} target={item.to.startsWith("https:") ? "_blank" : undefined} rel={item.to.startsWith("https:") ? "noreferrer" : undefined}>{label}</a>}
    </>
  );
}

export default function FacilitiesNewLiving({ onSectionNavigate }: { onSectionNavigate: SectionNavigation }) {
  const { hash } = useLocation();
  const [selectedId, setSelectedId] = useState(essentials[0].id);
  const [highlightedGroup, setHighlightedGroup] = useState<AmenityGroup | null>(null);
  const isDesktop = useSyncExternalStore(subscribeToDesktop, desktopSnapshot, serverSnapshot);
  const selected = essentials.find((item) => item.id === selectedId) ?? essentials[0];
  const hostels = facilitiesNewPageCopy.hostels;

  useEffect(() => {
    const item = essentials.find((entry) => hash === `#facilities-new-essentials-${entry.id}`);
    if (item) setSelectedId(item.id);
  }, [hash]);

  return (
    <>
      <section id="facilities-new-essentials" tabIndex={-1} className={`${styles.section} ${styles.essentials}`} aria-labelledby="facilities-new-essentials-title">
        <div className={styles.container}>
          <h2 id="facilities-new-essentials-title" className={styles.heading}>Everyday <span>Essentials.</span></h2>
          <div className={styles.serviceLayout}>
            <ul className={styles.serviceList}>
              {essentials.map((item) => {
                const active = selectedId === item.id;
                const buttonId = `facilities-new-service-${item.id}`;
                const detailId = `facilities-new-service-details-${item.id}`;
                return (
                  <li key={item.id} id={`facilities-new-essentials-${item.id}`} className={styles[item.id]} data-active={active}>
                    <button id={buttonId} type="button" aria-expanded={isDesktop ? undefined : active} aria-pressed={isDesktop ? active : undefined} aria-controls={isDesktop ? "facilities-new-service-panel" : detailId} onClick={() => setSelectedId(item.id)}>
                      <span className={styles.activeDot} aria-hidden="true" />
                      <span className={styles.serviceName}>{item.title}</span>
                      <span className={styles.serviceArrow}><ArrowUpRight size={20} aria-hidden="true" /></span>
                    </button>
                    {!isDesktop && <div id={detailId} className={styles.serviceDescription} role="region" aria-labelledby={buttonId} hidden={!active}>
                      {active && <EssentialDetails item={item} onSectionNavigate={onSectionNavigate} />}
                    </div>}
                  </li>
                );
              })}
            </ul>
            {isDesktop && <aside id="facilities-new-service-panel" className={`${styles.servicePanel} ${styles[selected.id]}`} aria-live="polite" aria-atomic="true" aria-label="Selected campus service">
              <EssentialDetails key={selected.id} item={selected} onSectionNavigate={onSectionNavigate} />
            </aside>}
          </div>
        </div>
      </section>

      <section id="facilities-new-hostels" tabIndex={-1} className={`${styles.section} ${styles.hostels}`} aria-labelledby="facilities-new-hostels-title">
        <div className={styles.container}>
          <h2 id="facilities-new-hostels-title" className={styles.heading}>Residential Life <span>at SRMU.</span></h2>
          <p className={styles.introduction}>{hostels.introduction}</p>
          <div className={styles.residences}>
            {hostels.residences.map((hostel, index) => <article key={hostel.title} className={`${styles.residence} ${index === 0 ? styles.girls : styles.boys}`}>
              <img className={styles.residenceImage} src={hostel.image} alt={`${hostel.title} building`} width={1365} height={768} loading="lazy" decoding="async" />
              <h3>{hostel.title}</h3>
              <p>{hostel.text}</p>
            </article>)}
          </div>

          <div className={styles.amenities}>
            <h3>Hostel Amenities and Support</h3>
            <div className={styles.legend} role="group" aria-label="Highlight hostel amenities by group">
              <button type="button" className={styles.all} aria-pressed={highlightedGroup === null} aria-controls="hostel-amenities-list" onClick={() => setHighlightedGroup(null)}>All Amenities</button>
              {amenityGroups.map((group) => <button key={group.id} type="button" className={styles[group.id]} aria-pressed={highlightedGroup === group.id} aria-controls="hostel-amenities-list" onClick={() => setHighlightedGroup((current) => current === group.id ? null : group.id)}>{group.label}</button>)}
            </div>
            <ul id="hostel-amenities-list" className={styles.cloud}>
              {amenityOrder.map((index) => <li key={hostels.amenities[index]} className={styles[amenityCategories[index]]} data-muted={highlightedGroup !== null && highlightedGroup !== amenityCategories[index]}>{hostels.amenities[index]}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="facilities-new-residential-support" tabIndex={-1} className={`${styles.section} ${styles.supportSection}`} aria-label="Residential support and outing information">
        <div className={styles.container}>
          <div className={styles.support}>
            <section aria-labelledby="facilities-new-committees-title">
              <h3 id="facilities-new-committees-title" className={styles.supportHeading}>Residential <span>Committees</span></h3>
              <p className={styles.supportLead}>{hostels.administration}</p>
              <div className={styles.tree} role="group" aria-label="Hostel administration structure">
                <div className={styles.treeRoot}>
                  <h4>Hostel Administration</h4>
                  <ul className={styles.roles} aria-label="Residential staff roles">
                    <li>Chief warden</li><li>Wardens</li><li>Supporting residential staff</li>
                  </ul>
                </div>
                <div className={styles.treeBranch}>
                  <div className={styles.committeeIntro}>
                    <h4>Student Committees</h4>
                    <p>Support hostel administration and resident engagement.</p>
                  </div>
                  <ul className={styles.committeeList}>
                    {hostels.committees.map((committee) => <li key={committee}>{committee}</li>)}
                  </ul>
                </div>
              </div>
            </section>
            <section aria-labelledby="facilities-new-outings-title">
              <h3 id="facilities-new-outings-title" className={`${styles.supportHeading} ${styles.singleLineHeading}`}>Outings and <span>Accommodation Information</span></h3>
              <div className={styles.route} aria-hidden="true">
                <span className={styles.routeStop}>Hostel</span>
                <span className={styles.routeLine}><Bus size={30} strokeWidth={1.8} /></span>
                <span className={`${styles.routeStop} ${styles.destination}`}>Sunday outing</span>
              </div>
              <p className={styles.outingsCopy}>{hostels.outings}</p>
              <dl className={styles.ledger}>
                <dt>Hostel accommodation is subject to</dt>
                <dd><ul>
                  <li>Eligibility</li><li>Room availability</li><li>University policies</li><li>The applicable fee structure</li>
                </ul></dd>
                <dt>Students and parents should contact the university for current</dt>
                <dd><ul>
                  <li>Hostel fees</li><li>Room categories</li><li>Mess charges</li><li>Security deposits</li><li>Application procedures</li><li>Allocation rules</li>
                </ul></dd>
              </dl>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
