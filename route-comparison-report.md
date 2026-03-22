# Route Comparison Report

Date: 2026-03-21

Compared:
- Old site: `https://srmu.ac.in`
- New site: `http://10.8.20.38:3031`

## Executive Summary

The deployed new site now matches the old-site sitemap completely, and the extra sitemap count has come down to a small final blog-only bucket.

Latest live results against the deployed host:

- Old sitemap URLs: `425`
- New sitemap URLs: `439`
- Exact sitemap overlap: `425`
- Old-site paths still missing from the new sitemap: `0`
- Extra paths in the new sitemap: `14`

This is a major improvement from the previous live compare:

- Overlap remains `425`
- Missing old URLs remain `0`
- Extra sitemap URLs dropped from `57` to `14`
- The old one-segment program/category routes are now live on the new host
- The sitemap host is still correct: `10.8.20.38:3031`

Route parity is complete. The remaining work is sitemap cleanup of extra new URLs.

## Live Checks

Representative old URLs now working on the deployed new host:

- `/` -> `200`
- `/about-us` -> `200`
- `/program/bba-business-analytics` -> `200`
- `/program/b-tech-ce-advanced-practices-in-construction` -> `200`
- `/program/b-tech-cse-cyber-security` -> `200`
- `/blog/top-mba-colleges-in-lucknow-for-aspiring-business-leaders` -> `200`
- `/blog/why-paramedical-courses-are-the-future-of-healthcare` -> `200`
- `/event/anubhuti-2025` -> `200`
- `/conference/icansvme-24` -> `200`
- `/newsletter` -> `200`
- `/campus-life/e-content-cell` -> `200`
- `/campus-life/grievance-redressal-system` -> `200`
- `/ph-d-application-offline-mode` -> `200`
- `/innovations` -> `200`
- `/committe/anti-ragging-committee` -> `200`
- `/news/transforming-futures-ibm-centre-of-excellence-launched-at-srmu` -> `200`
- `/after-class-12th/natural-sciences` -> `200`
- `/after-graduation/legal-studies-law` -> `200`
- `/after-class-12th` -> `200`
- `/after-graduation` -> `200`
- `/after-post-graduation` -> `200`
- `/after-polytechnic` -> `200`
- `/engineering` -> `200`
- `/bio-technology` -> `200`
- `/computer-science-engineering` -> `200`
- `/social-work/undergraduate` -> `200`
- `/after-graduation/social-work` -> `200`

Current deployed `404` checks worth noting:

- `/program/mpharm-master-of-pharmacy` -> `404`
- `/program/bachelor-of-physiotherapy` -> `404`
- `/program/bsw` -> `404`

## Sitemap Findings

Current live sitemap comparison:

- Old sitemap count: `425`
- New sitemap count: `439`
- Exact overlap: `425`
- Missing old URLs: `0`
- Extra new URLs: `14`

Largest remaining missing groups:

- None

Largest remaining extra groups:

- Blog detail pages: `14`

The sitemap host issue remains fixed:

- New sitemap URLs use `10.8.20.38:3031`
- They do not point to `https://srmu.ac.in`

## Remaining Missing Paths

There are no remaining old-site paths missing from the new sitemap.

## Representative Extra Paths

These appear in the new sitemap but were not found in the old sitemap:

- `/after-class-12th/nutrition-dietetics`
- `/after-post-graduation/ph-d1`
- `/agriculture`
- `/artificial-intelligence`
- `/artificial-intelligence/industry-honors1`
- `/artificial-intelligence/postgraduate`
- `/artificial-intelligence/undergraduate`
- `/arts-science`
- `/blog/a-student-s-guide-to-building-a-career-with-a-bca-degree1`
- `/blog/advance-your-career-with-srmu-s-l-t-integrated-mba-in-business-analytics`
- `/blog/benefits-of-pursuing-a-bba-degree`
- `/blog/best-biotechnology-colleges-and-universities-in-lucknow-top-options-for-2026-admissions`
- `/blog/build-a-future-in-business-finance-with-a-b-com-degree`
- `/blog/build-a-strong-foundation-in-commerce-with-srmu-s-l-t-integrated-b-com-hons`
- `/blog/career-opportunities-after-b-tech-in-computer-science`
- `/blog/career-opportunities-for-mba-business-analytics-graduatescareer-opportunities-for-mba-business-analytics-graduates`
- `/blog/cultivating-the-future-explore-career-opportunities-with-a-degree-in-agriculture2`
- `/blog/explore-the-world-of-programming-with-the-bca-program`
- `/blog/how-a-biotechnology-program-can-shape-your-future-in-science-research`
- `/blog/how-to-get-into-top-postgraduate-biotechnology-programs`
- `/blog/kickstart-a-high-potential-commerce-career-with-a-b-com-hons-degree`
- `/blog/pursue-legal-studies-at-the-best-law-colleges-in-lucknow`
- `/blog/shape-tomorrow-with-srmu-s-l-t-integrated-b-tech-programs`
- `/blog/study-bba-in-business-analytics-at-srmu-l-t-backed-industry-focused-program1`
- `/blog/study-bca-in-ai-and-cyber-security-at-srmu-with-l-t-industry-collaboration`
- `/blog/top-colleges-for-btech-in-computer-science-in-lucknow-and-nearby-cities-best-picks-for-2026`
- `/blog/what-makes-srmu-a-top-choice-for-bba-aspirants-in-uttar-pradesh`
- `/blog/why-b-tech-in-computer-science-is-the-smartest-career-move-in-2025`

## Current Assessment

The deployed host is now fully route-compatible with the old site at the sitemap level. The remaining work is pruning the remaining extra URLs from the sitemap.

Current cutover blockers:

1. Decide whether the remaining `14` extra sitemap paths are intentional.
2. Clean the malformed or duplicate-looking blog slugs before final cutover.
3. Trim non-canonical legacy/category URLs from the sitemap if they should remain routable but not indexed.
4. Re-run one final live comparison after the sitemap cleanup.
