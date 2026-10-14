import { BrainCircuit, Braces, Cloud, Code2, Database, LockKeyhole, Shield, SquareTerminal } from "lucide-react";
import styles from "./CareerBackground.module.css";

const leftPaths = ["M-20 235 Q225 40 410 210", "M-20 600 Q155 405 325 575 T440 650"];
const rightPaths = ["M-20 225 Q205 295 440 115", "M-20 530 Q240 435 440 545"];
const mobilePaths = [
    "M-75 50 Q-10 10 70 43",
    "M305 42 Q380 10 445 50",
    "M-75 375 Q10 340 100 385",
    "M270 385 Q360 340 445 375",
];

export function MobileCareerBackground() {
    return (
        <g data-career-background className={styles.mobileBackground} aria-hidden="true">
            {mobilePaths.map((path, index) => (
                <g key={path}>
                    <path className={styles.dashedPath} d={path} />
                    <circle className={styles.traveler} r="2.5" style={{ offsetPath: `path("${path}")`, animationDelay: `${index * -5}s` }} />
                </g>
            ))}
            {/* These pockets scale with the diagram and stay clear of its labels. */}
            <g transform="translate(-65 65)"><g data-career-vector className={styles.mobileVector}><Code2 width={32} height={32} /></g></g>
            <g transform="translate(395 65)"><g data-career-vector className={styles.mobileVector}><BrainCircuit width={32} height={32} /></g></g>
            <g transform="translate(-65 145)">
                <g data-career-vector className={styles.mobileVector}>
                    <Cloud width={30} height={30} />
                    <Database x={16} y={14} width={20} height={23} fill="#EEF5FC" />
                </g>
            </g>
            <g transform="translate(395 155)"><g data-career-vector className={styles.mobileVector}><Braces width={32} height={32} /></g></g>
            <g transform="translate(-55 345)"><g data-career-vector className={styles.mobileVector}><SquareTerminal width={32} height={32} /></g></g>
            <g transform="translate(385 345)"><g data-career-vector className={styles.mobileVector}><Shield width={32} height={32} /></g></g>
            <g className={styles.sparks}>
                <circle cx="40" cy="38" r="2.5" /><circle cx="330" cy="38" r="2.5" />
                <circle cx="30" cy="375" r="2.5" /><circle cx="340" cy="375" r="2.5" />
            </g>
        </g>
    );
}

function Trails({ paths }: { paths: string[] }) {
    return (
        <svg className={styles.trails} viewBox="0 0 420 740" preserveAspectRatio="none">
            {paths.map((path, index) => (
                <g key={path}>
                    <path className={styles.dashedPath} d={path} />
                    <circle className={styles.traveler} r="4" style={{ offsetPath: `path("${path}")`, animationDelay: `${index * -9}s` }} />
                </g>
            ))}
            <g className={styles.sparks}>
                <circle cx="52" cy="495" r="5" />
                <circle cx="280" cy="170" r="5" />
                <circle cx="225" cy="650" r="5" />
            </g>
        </svg>
    );
}

export default function CareerBackground() {
    return (
        <div data-career-background className={styles.background} aria-hidden="true">
            <div className={`${styles.side} ${styles.left}`}>
                <Trails paths={leftPaths} />
                <div data-career-vector className={`${styles.vector} ${styles.code}`}><Code2 /></div>
                <div data-career-vector className={`${styles.vector} ${styles.braces}`}><Braces /></div>
                <div data-career-vector className={`${styles.vector} ${styles.cloud}`}>
                    <Cloud />
                    <Database className={styles.database} />
                </div>
                <svg data-career-vector className={`${styles.vector} ${styles.binary}`} viewBox="0 0 100 90">
                    <text x="5" y="22"><tspan x="5">0101</tspan><tspan x="5" dy="25">0100</tspan><tspan x="5" dy="25">1010</tspan></text>
                </svg>
            </div>
            <div className={`${styles.side} ${styles.right}`}>
                <Trails paths={rightPaths} />
                <div data-career-vector className={`${styles.vector} ${styles.brain}`}><BrainCircuit /></div>
                <div data-career-vector className={`${styles.vector} ${styles.network}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 5 11 11 20 7M11 11 4 18M11 11 18 20M8 5 20 7" />
                        <circle cx="8" cy="5" r="2" /><circle cx="11" cy="11" r="2.4" />
                        <circle cx="20" cy="7" r="2.5" /><circle cx="4" cy="18" r="2.3" /><circle cx="18" cy="20" r="2.5" />
                    </svg>
                </div>
                <div data-career-vector className={`${styles.vector} ${styles.terminal}`}><SquareTerminal /></div>
                <div data-career-vector className={`${styles.vector} ${styles.shield}`}>
                    <Shield />
                    <LockKeyhole className={styles.lock} />
                </div>
                <div data-career-vector className={`${styles.vector} ${styles.bottomCode}`}><Code2 /></div>
            </div>
        </div>
    );
}
