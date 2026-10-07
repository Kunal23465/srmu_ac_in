import { useEffect, useState } from "react";
import { API } from "../../apis/axiosinstance";
import { resolveProgramRouteSlug } from "../../utils/legacyProgramRoutes";
import type { FinderProgram } from "./programsNew";
import { scholarshipFeeBase } from "./scholarshipsNew";

export interface FinderFees { fee: number; caution: number; base: number }
export interface FeeState extends FinderFees { source: "loading" | "live" | "reference" }
const cache = new Map<string, { expires: number; request: Promise<FinderFees | null> }>();

// Do not sum all rows: the API also includes Total Fee, optional hostel and transport.
export function parseProgramFees(payload: unknown, slug: string): FinderFees | null {
  const entry = Array.isArray(payload) ? payload.find(item => item?.programSlug === slug) : payload;
  if (!entry || typeof entry !== "object" || !("programSlug" in entry) || entry.programSlug !== slug || !("fees" in entry) || !Array.isArray(entry.fees)) return null;
  const rows = entry.fees as { feeTypeName?: string; yearWiseAmount?: Record<string, unknown> }[];
  const amount = (name: string) => {
    const matches = rows.filter(r => r.feeTypeName?.trim().toLowerCase() === name);
    if (matches.length !== 1) return null;
    const value = matches[0].yearWiseAmount?.["1"];
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return null;
    return value;
  };
  const course = amount("course fee"), caution = amount("caution money");
  const hasWelfare = rows.some(r => r.feeTypeName?.trim().toLowerCase() === "student welfare fund");
  const welfare = hasWelfare ? amount("student welfare fund") : 0;
  if (course === null || caution === null || welfare === null) return null;
  return { fee: course + welfare, caution, base: course };
}
function requestFees(slug: string) {
  const existing = cache.get(slug);
  if (existing && existing.expires > Date.now()) return existing.request;
  const request = API.get("/academicProgram/programFees", { params: { programSlug: slug }, timeout: 10000 })
    .then(response => parseProgramFees(response.data, slug)).catch(() => null);
  cache.set(slug, { expires: Date.now() + 5 * 60 * 1000, request });
  return request;
}
export function useProgramFees(program: FinderProgram): FeeState {
  const slug = resolveProgramRouteSlug(program.link.split("/").pop() || "");
  const fallback = { fee: program.fee, caution: program.caution, base: scholarshipFeeBase(program) };
  const [result, setResult] = useState<{ slug: string; data: FinderFees | null } | null>(null);
  useEffect(() => {
    let active = true;
    requestFees(slug).then(data => { if (active) setResult({ slug, data }); });
    return () => { active = false; };
  }, [slug]);
  if (!result || result.slug !== slug) return { ...fallback, source: "loading" };
  return result.data ? { ...result.data, source: "live" } : { ...fallback, source: "reference" };
}
export const formatRupees = (value: number) => `₹${value.toLocaleString("en-IN")}`;
