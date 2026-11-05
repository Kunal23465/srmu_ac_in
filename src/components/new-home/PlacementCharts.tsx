import { useEffect, useId, useState } from "react";
import type { KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { placementChartYears, salaryRanges2021, salaryRanges2022, salaryRanges2023, salaryRanges2025, salaryRanges2026, type PlacementChartYear } from "../../data/new-home/placementChartData";
import styles from "./PlacementCharts.module.css";

const number = (value: number) => value.toLocaleString("en-IN");

export function SalaryRangeChart({ year }: { year: string }) {
  const [activeBand, setActiveBand] = useState<number | null>(null);
  const salaryRangeMap: Record<string, typeof salaryRanges2026> = {
    "2021": salaryRanges2021,
    "2022": salaryRanges2022,
    "2023": salaryRanges2023,
    "2025": salaryRanges2025,
    "2026": salaryRanges2026,
  };
  const salaryRanges = salaryRangeMap[year];
  const hasSalaryData = !!salaryRanges;
  const total = hasSalaryData ? salaryRanges.reduce((sum, band) => sum + band.count, 0) : 0;

  useEffect(() => { setActiveBand(null); }, [year]);

  if (!hasSalaryData) {
    return (
      <div className={styles.distribution} data-package-chart>
        <h2 className={styles.eyebrow}>Salary Packages and Placement Statistics · <span className={styles.headingAccent}>{year}</span></h2>
        <p className={styles.noSalaryData}>Salary range data is available for 2021–2023, 2025 and 2026.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.distribution} ${styles.salaryDistribution}`} data-package-chart>
      <h2 className={styles.eyebrow}>Salary Packages and Placement Statistics · <span className={styles.headingAccent}>{year}</span></h2>
      <div className={styles.bands} onMouseLeave={() => setActiveBand(null)}>
        {salaryRanges.filter((band) => band.count > 0).map((band, index) => {
          const share = total ? band.count / total * 100 : 0;
          return (
            <button
              key={band.label}
              type="button"
              className={styles.band}
              data-active={activeBand === index}
              data-muted={activeBand !== null && activeBand !== index}
              aria-label={`${band.label}: ${band.count} salary records, ${Math.round(share)} percent`}
              aria-pressed={activeBand === index}
              onMouseEnter={() => setActiveBand(index)}
              onFocus={() => setActiveBand(index)}
              onBlur={() => setActiveBand(null)}
              onClick={() => setActiveBand(index)}
              onKeyDown={(event) => { if (event.key === "Escape") setActiveBand(null); }}
            >
              <span className={styles.bandLabel}><span>{band.label}</span><span><small>{Math.round(share)}%</small></span></span>
              <span className={styles.bandTrack} aria-hidden="true"><span className={styles.bandFill} style={{ width: `${share}%` }} /></span>
            </button>
          );
        })}
      </div>
      {/* <div className={styles.bandFooter}><span>Share of salary records</span></div> */}
      {/* <span className={styles.bandTooltip} aria-live="polite">{active ? `${active.label} · ${active.count} students` : "Hover or tap a bar"}</span> */}
    </div>
  );
}

interface PlacementTrendChartProps {
  activeIndex: number;
  onYearChange: (index: number) => void;
}

export function PlacementTrendChart({ activeIndex, onYearChange }: PlacementTrendChartProps) {
  const gradientId = `placement-area-${useId().replace(/:/g, "")}`;
  const [range, setRange] = useState<"six" | "three">("six");
  const maxValue = Math.max(1000, Math.ceil(Math.max(...placementChartYears.map(({ records }) => records)) / 10) * 10);
  const left = 38, right = 418, top = 72, bottom = 232;
  const visibleIndices = placementChartYears.map((_, index) => index).slice(range === "six" ? 0 : -3);
  const points = visibleIndices.map((dataIndex, visibleIndex) => ({
    dataIndex,
    year: placementChartYears[dataIndex],
    x: visibleIndices.length === 1 ? (left + right) / 2 : left + ((right - left) * visibleIndex) / (visibleIndices.length - 1),
    y: bottom - placementChartYears[dataIndex].records / maxValue * (bottom - top),
  }));
  const line = points.map((point, index) => {
    if (!index) return `M ${point.x} ${point.y}`;
    const prior = points[index - 1];
    const mid = (prior.x + point.x) / 2;
    return `C ${mid} ${prior.y}, ${mid} ${point.y}, ${point.x} ${point.y}`;
  }).join(" ");
  const area = `${line} L ${points[points.length - 1].x} ${bottom} L ${points[0].x} ${bottom} Z`;
  const visibleActiveIndex = visibleIndices.includes(activeIndex) ? activeIndex : visibleIndices[visibleIndices.length - 1];
  const selected = placementChartYears[visibleActiveIndex];
  const current = points.find((point) => point.dataIndex === visibleActiveIndex) ?? points[points.length - 1];

  const changeRange = (nextRange: "six" | "three") => {
    setRange(nextRange);
    const nextVisibleIndices = placementChartYears.map((_, index) => index).slice(nextRange === "six" ? 0 : -3);
    if (!nextVisibleIndices.includes(activeIndex)) onYearChange(nextVisibleIndices[nextVisibleIndices.length - 1]);
  };

  const select = (index: number) => onYearChange(index);
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>, index: number) => {
    const currentPosition = visibleIndices.indexOf(index);
    let nextPosition = currentPosition;
    if (event.key === "ArrowRight") nextPosition = Math.min(visibleIndices.length - 1, currentPosition + 1);
    else if (event.key === "ArrowLeft") nextPosition = Math.max(0, currentPosition - 1);
    else if (event.key === "Home") nextPosition = 0;
    else if (event.key === "End") nextPosition = visibleIndices.length - 1;
    else if (event.key === "Escape") return;
    else if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const next = visibleIndices[nextPosition];
    select(next);
    event.currentTarget.parentElement?.querySelector<SVGGElement>(`[data-chart-year="${placementChartYears[next].year}"]`)?.focus();
  };

  return (
    <div className={styles.trend} data-trend-chart>
      <div className={styles.trendHeader}>
        <h3 className={styles.eyebrow}>Students Placed <span className={styles.headingAccent}>at SRMU</span></h3>
        <label className={styles.rangeControl}>
          <span className={styles.srOnly}>Placement history range</span>
          <select aria-label="Placement history range" value={range} onChange={(event) => changeRange(event.target.value as "six" | "three")}>
            <option value="six">Last 6 Years</option>
            <option value="three">Last 3 Years</option>
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </label>
      </div>
      {!selected.hideValue && (
        <div className={styles.total}>
          <strong>{number(selected.records)}</strong>
          <span>students placed</span>
        </div>
      )}
      <svg className={styles.chart} viewBox="0 0 440 270" role="group" aria-label="Placement trend by year. Hover, tap, or use arrow keys to select a year.">
        <defs>
          <linearGradient id={gradientId} x1="0" y1={top} x2="0" y2={bottom} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#bcd2ee" stopOpacity=".66" />
            <stop offset="100%" stopColor="#e7eff8" stopOpacity=".24" />
          </linearGradient>
        </defs>
        <g aria-hidden="true">
          <path d={area} fill={`url(#${gradientId})`} />
          {[0, 1, 2, 3, 4].map((tick) => {
            const y = bottom - (bottom - top) * tick / 4;
            const value = maxValue * tick / 4;
            return <g key={tick}>
              <line x1={left} x2={right} y1={y} y2={y} className={styles.gridLine} />
              <text x={left - 9} y={y + 4} textAnchor="end" className={styles.axisLabel}>{number(value)}</text>
            </g>;
          })}
          <rect className={styles.selectedHighlight} x={current.x - 15} y={current.y} width="30" height={bottom - current.y} rx="5" />
          <path d={line} className={styles.trendLine} />
          {points.filter((point) => point.dataIndex !== visibleActiveIndex).map((point) => (
            <circle key={point.year.year} cx={point.x} cy={point.y} r="4.5" className={styles.dataPoint} />
          ))}
          <g className={styles.marker} style={{ transform: `translate(${current.x}px, ${current.y}px)` }}>
            <circle r="17" fill="#fff" stroke="#ffb703" strokeWidth="3" />
            <circle r="11" fill="#0a4a8f" />
            <path d="M -7 -1 L 0 -5 L 7 -1 L 0 3 Z M -4 1 V 5 Q 0 8 4 5 V 1 M 7 -1 V 5" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
          </g>
          {points.map((point) => <g key={point.year.year}>
            {point.dataIndex === visibleActiveIndex && <rect x={point.x - 24} y={bottom + 10} width="48" height="22" rx="11" fill="#0a4a8f" />}
            <text x={point.x} y={bottom + 25} textAnchor="middle" className={styles.yearLabel} data-selected={point.dataIndex === visibleActiveIndex}>{point.year.year}</text>
          </g>)}
        </g>
        {points.map((point, visibleIndex) => {
          const hitLeft = visibleIndex === 0 ? left : (points[visibleIndex - 1].x + point.x) / 2;
          const hitRight = visibleIndex === points.length - 1 ? right : (point.x + points[visibleIndex + 1].x) / 2;
          return <g key={point.year.year} role="button" tabIndex={point.dataIndex === visibleActiveIndex ? 0 : -1} aria-pressed={point.dataIndex === visibleActiveIndex}
            aria-label={`${point.year.year}: ${point.year.hideValue ? `${point.year.metric ?? "placement"} count hidden` : `${number(point.year.records)} ${point.year.metric ?? "students placed"}`}.`} data-chart-year={point.year.year}
            className={styles.yearTarget} onMouseEnter={() => select(point.dataIndex)} onFocus={() => select(point.dataIndex)} onClick={() => select(point.dataIndex)} onKeyDown={(event) => handleKeyDown(event, point.dataIndex)}>
            <rect x={hitLeft} y={top - 25} width={hitRight - hitLeft} height={bottom - top + 60} fill="transparent" />
          </g>;
        })}
      </svg>
      {/* <p className={styles.chartNote}>Hover or tap a year to explore its packages.</p> */}
      {/* <p className={styles.sourceNote}>Based on listed SRMU records, not annual placement totals.</p> */}
    </div>
  );
}
