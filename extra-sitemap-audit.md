# Extra Sitemap Audit

Date: 2026-03-21

Compared:
- Old site: `https://srmu.ac.in`
- New site: `http://10.8.20.38:3031`

## Summary

Before cleanup, the new sitemap had `57` extra URLs beyond the old site.

Live audit findings:

- `55` extras returned `200`
- `2` extras failed live
- many extras are valid current pages and are linked from header, home, or program-finder flows
- some extras are alias-only paths or dead pages and should not be in the sitemap

## Safe Removal Candidates

These were removed from sitemap generation in [sitemap.ts](/home/jaishankar/SRMU_Projects/srmu_new/src/utils/sitemap.ts):

- `/agriculture`
- `/after-class-12th/nutrition-dietetics`
- `/after-post-graduation/ph-d1`
- `/news/holi-celebration`
- `/program/bachelor-in-physiotherapy`
- `/artificial-intelligence`
- `/artificial-intelligence/industry-honors1`
- `/artificial-intelligence/postgraduate`
- `/artificial-intelligence/undergraduate`
- `/arts-science`
- `/blog/a-student-s-guide-to-building-a-career-with-a-bca-degree1`
- `/blog/best-biotechnology-colleges-and-universities-in-lucknow-top-options-for-2026-admissions`
- `/blog/career-opportunities-for-mba-business-analytics-graduatescareer-opportunities-for-mba-business-analytics-graduates`
- `/blog/cultivating-the-future-explore-career-opportunities-with-a-degree-in-agriculture2`
- `/blog/study-bba-in-business-analytics-at-srmu-l-t-backed-industry-focused-program1`
- `/blog/top-colleges-for-btech-in-computer-science-in-lucknow-and-nearby-cities-best-picks-for-2026`
- `/commerce-and-economics`
- `/computer-application`
- `/computer-science-engineering`
- `/disclaimer`
- `/education`
- `/food-technology`
- `/humanities`
- `/iirs-isro`
- `/industry-honors/artificial-intelligence`
- `/industry-honors/computer-application`
- `/industry-honors/computer-science-engineering`
- `/industry-honors/engineering`
- `/industry-honors/management`
- `/legal-studies-law`
- `/management`
- `/mandatory-disclouser`
- `/media-studies`
- `/microbiology`
- `/natural-sciences`
- `/nutrition-dietetics`
- `/policies-reports`
- `/privacy-policy`
- `/social-work`
- `/swayam-nptel-local-chapter`
- `/terms-conditions`
- `/after-class-12th/allied-health-sciences`
- `/after-graduation/natural-sciences`

Why these were pruned:

- two of them were failing live
- several blog slugs were malformed or alias-like:
  - trailing artifact suffixes such as `...degree1` or `...agriculture2`
  - a duplicated phrase slug
  - year-variant aliases not present as canonical current API slugs
- many top-level extras were discipline-root or support/legal pages that are routable but not required for old-site sitemap parity
- the remaining two-segment extras were current navigable category variants, but not part of old-site sitemap parity, so they were kept routable and removed only from sitemap output
- the industry-honors group appears to be alias inventory rather than linked canonical navigation
- the two category aliases above were live, but they were not found in rendered hub pages and do not look like preferred canonical paths

## Extras Still Present Intentionally For Now

These remain because they appear to be linked or currently in use:

- top-level discipline/program roots such as `/agriculture`, `/management`, `/computer-application`, `/social-work`, `/nutrition-dietetics`
- routed policy/legal pages such as `/privacy-policy`, `/terms-conditions`, `/disclaimer`, `/mandatory-disclouser`
- linked program-category pages such as `/artificial-intelligence/undergraduate`, `/artificial-intelligence/postgraduate`
- live blog detail URLs coming from current blog content

## Still Needs Judgment

These extras are live, but should be reviewed before final cutover:

- `/after-post-graduation/ph-d1`
- `/artificial-intelligence`
- `/humanities`
- `/microbiology`
- `/natural-sciences`
- `/swayam-nptel-local-chapter`
- the remaining extra blog URLs

These are not obvious dead pages, but they may be non-canonical current URLs and might still deserve sitemap exclusion if strict parity is required.
