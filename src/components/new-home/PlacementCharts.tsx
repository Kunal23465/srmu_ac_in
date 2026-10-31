import { useEffect, useId, useState } from "react";
import type { KeyboardEvent } from "react";
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
        <h3 className={styles.eyebrow}>Salary Package Ranges · <span className={styles.headingAccent}>{year}</span></h3>
        <p className={styles.noSalaryData}>Salary range data is available for 2021–2023, 2025 and 2026.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.distribution} ${styles.salaryDistribution}`} data-package-chart>
      <h3 className={styles.eyebrow}>Salary Package Ranges · <span className={styles.headingAccent}>{year}</span></h3>
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
  const patternId = `placement-hatch-${useId().replace(/:/g, "")}`;
  const selected = placementChartYears[activeIndex];
  const metricLabel = selected.metric ?? "Students Placed";
  const maxValue = Math.max(1000, Math.ceil(Math.max(...placementChartYears.map(({ records }) => records)) / 10) * 10);
  const left = 38, right = 418, top = 72, bottom = 232;
  const slot = (right - left) / placementChartYears.length;
  const barWidth = Math.min(36, slot * .38);
  const points = placementChartYears.map((year, index) => ({
    x: left + slot * (index + 0.5),
    y: bottom - year.records / maxValue * (bottom - top),
  }));
  const line = points.map((point, index) => {
    if (!index) return `M ${point.x} ${point.y}`;
    const prior = points[index - 1];
    const mid = (prior.x + point.x) / 2;
    return `C ${mid} ${prior.y}, ${mid} ${point.y}, ${point.x} ${point.y}`;
  }).join(" ");
  const current = points[activeIndex];

  const select = (index: number) => onYearChange(index);
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = Math.min(placementChartYears.length - 1, index + 1);
    else if (event.key === "ArrowLeft") next = Math.max(0, index - 1);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = placementChartYears.length - 1;
    else if (event.key === "Escape") return;
    else if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    select(next);
    event.currentTarget.parentElement?.querySelector<SVGGElement>(`[data-chart-year="${placementChartYears[next].year}"]`)?.focus();
  };

  return (
    <div className={styles.trend} data-trend-chart>
      <h3 className={styles.eyebrow}>{metricLabel} · <span className={styles.headingAccent}>{selected.year}</span></h3>
      {!selected.hideValue && (
        <div className={styles.total}>
          <strong>{number(selected.records)}</strong>
          <span>{metricLabel.toLowerCase()}</span>
        </div>
      )}
      <svg className={styles.chart} viewBox="0 0 440 270" role="group" aria-label="Placement bars by year. Hover, tap, or use arrow keys to select a year.">
        <defs><pattern id={patternId} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="7" height="7" fill="#edf3f9" /><line x1="0" y1="0" x2="0" y2="7" stroke="#c4d4e5" strokeWidth="2" /></pattern></defs>
        <g aria-hidden="true">
          {[0, 1, 2, 3, 4].map((tick) => {
            const y = bottom - (bottom - top) * tick / 4;
            const value = maxValue * tick / 4;
            return <g key={tick}>
              <line x1={left} x2={right} y1={y} y2={y} className={styles.gridLine} />
              <text x={left - 9} y={y + 4} textAnchor="end" className={styles.axisLabel}>{number(value)}</text>
            </g>;
          })}
          {points.map((point, index) => <rect key={placementChartYears[index].year} x={point.x - barWidth / 2} y={point.y} width={barWidth} height={bottom - point.y} rx="3" fill={`url(#${patternId})`} stroke="#d8e3ee" />)}
          <path d={line} className={styles.trendLine} />
          <rect className={styles.selectedBar} x={current.x - barWidth / 2} y={current.y} width={barWidth} height={bottom - current.y} rx="3" />
          <g className={styles.marker} style={{ transform: `translate(${current.x}px, ${current.y}px)` }}>
            <circle r="17" fill="#fff" stroke="#ffb703" strokeWidth="3" />
            <circle r="11" fill="#0a4a8f" />
            <path d="M -7 -1 L 0 -5 L 7 -1 L 0 3 Z M -4 1 V 5 Q 0 8 4 5 V 1 M 7 -1 V 5" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
          </g>
          {points.map((point, index) => <g key={placementChartYears[index].year}>
            {index === activeIndex && <rect x={point.x - 24} y={bottom + 10} width="48" height="22" rx="11" fill="#0a4a8f" />}
            <text x={point.x} y={bottom + 25} textAnchor="middle" className={styles.yearLabel} data-selected={index === activeIndex}>{placementChartYears[index].year}</text>
          </g>)}
        </g>
        {placementChartYears.map((year, index) => <g key={year.year} role="button" tabIndex={index === activeIndex ? 0 : -1} aria-pressed={index === activeIndex}
          aria-label={`${year.year}: ${year.hideValue ? `${year.metric ?? "placement"} count hidden` : `${number(year.records)} ${year.metric ?? "students placed"}`}.`} data-chart-year={year.year}
          className={styles.yearTarget} onMouseEnter={() => select(index)} onFocus={() => select(index)} onClick={() => select(index)} onKeyDown={(event) => handleKeyDown(event, index)}>
          <rect x={left + slot * index} y={top - 25} width={slot} height={bottom - top + 60} fill="transparent" />
        </g>)}
      </svg>
      {/* <p className={styles.chartNote}>Hover or tap a year to explore its packages.</p> */}
      {/* <p className={styles.sourceNote}>Based on listed SRMU records, not annual placement totals.</p> */}
    </div>
  );
}
