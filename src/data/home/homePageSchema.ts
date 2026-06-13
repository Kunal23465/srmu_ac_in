export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://srmu.ac.in/#university",
      name: "Shri Ramswaroop Memorial University",
      alternateName: "SRMU",
      url: "https://srmu.ac.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://srmu.ac.in/assets/logo-Bss7whPf.svg",
      },
      description:
        "Shri Ramswaroop Memorial University (SRMU) is a multidisciplinary university in Uttar Pradesh offering undergraduate, postgraduate, diploma and doctoral programs in Engineering, Management, Law, Agriculture, Pharmacy, Computer Applications, Journalism, Sciences and Humanities. Recognized as a leading university in Lucknow offering future-ready and industry-aligned education.",
      keywords:
        "best university in Lucknow, top university in Lucknow, private university in Uttar Pradesh, SRMU admissions, engineering college in Lucknow, MBA college in Lucknow, BCA college in Lucknow",
      telephone: "+91-9838904666",
      email: "admissions@srmu.ac.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lucknow-Deva Road",
        addressLocality: "Barabanki",
        addressRegion: "Uttar Pradesh",
        postalCode: "225003",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.9152",
        longitude: "81.1691",
      },
      hasMap: "https://maps.app.goo.gl/vSNyWkPssAdfDpkV8",
      sameAs: [
        "https://www.facebook.com/srmuofficial",
        "https://www.instagram.com/srmuofficial",
        "https://www.linkedin.com/school/shri-ramswaroop-memorial-university/",
        "https://www.youtube.com/@SRMUOfficial",
      ],
    },

    {
      "@type": "Organization",
      "@id": "https://srmu.ac.in/#organization",
      name: "Shri Ramswaroop Memorial University",
      url: "https://srmu.ac.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://srmu.ac.in/assets/logo-Bss7whPf.svg",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://srmu.ac.in/#website",
      url: "https://srmu.ac.in/",
      name: "SRMU",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://srmu.ac.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://srmu.ac.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://srmu.ac.in/",
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": "https://srmu.ac.in/#programs",
      name: "Programs Offered at SRMU",
      itemListElement: [
        {
          "@type": "Course",
          position: 1,
          name: "B.Tech",
        },
        {
          "@type": "Course",
          position: 2,
          name: "MBA",
        },
        {
          "@type": "Course",
          position: 3,
          name: "BBA",
        },
        {
          "@type": "Course",
          position: 4,
          name: "BCA",
        },
        {
          "@type": "Course",
          position: 5,
          name: "LLB",
        },
        {
          "@type": "Course",
          position: 6,
          name: "B.Pharm",
        },
        {
          "@type": "Course",
          position: 7,
          name: "Agriculture",
        },
        {
          "@type": "Course",
          position: 8,
          name: "Journalism and Mass Communication",
        },
      ],
    },

    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/AI%20Learning-1e3hOqyf.mp4",
      contentUrl: "https://srmu.ac.in/assets/AI%20Learning-1e3hOqyf.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/Annual%20Fest-DUKZV9V5.mp4",
      contentUrl: "https://srmu.ac.in/assets/Annual%20Fest-DUKZV9V5.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/Clubs-BTOoaTOx.mp4",
      contentUrl: "https://srmu.ac.in/assets/Clubs-BTOoaTOx.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/Explore%20_%20Learn-DypI6Ctx.mp4",
      contentUrl: "https://srmu.ac.in/assets/Explore%20_%20Learn-DypI6Ctx.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/sports-BVLYTRe0.mp4",
      contentUrl: "https://srmu.ac.in/assets/sports-BVLYTRe0.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/SRMU%20Vibes-Dyb_2CiV.mp4",
      contentUrl: "https://srmu.ac.in/assets/SRMU%20Vibes-Dyb_2CiV.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/Women%20Empowerment-x8FITLhK.mp4",
      contentUrl: "https://srmu.ac.in/assets/Women%20Empowerment-x8FITLhK.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      name: "Shri Ramswaroop Memorial University Campus Tour",
      description:
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      uploadDate: "2026-01-01T10:30:00+05:30",
      duration: "PT5M30S",
      embedUrl: "https://srmu.ac.in/assets/Events-vGQCrdSb.mp4",
      contentUrl: "https://srmu.ac.in/assets/Events-vGQCrdSb.mp4",
      publisher: {
        "@id": "https://srmu.ac.in/#organization",
      },
    },

    {
      "@type": "FAQPage",
      "@id": "https://srmu.ac.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: " What courses are offered at SRMU Lucknow and what is the fee structure?  ",
          acceptedAnswer: {
            "@type": "Answer",
            text: " SRMU offers 115+ courses across 11 disciplines including B.Tech (16 specializations), MBA, BBA, BCA, B.Sc, B.Com, LL.B, M.Tech, Pharmacy, and Agriculture. For 2026, fees range from INR 62,000 to INR 5 Lakhs depending on the course. B.Tech fees range from INR 1 lakh to INR 5.3 lakh for the full program. BCA first-year fees are INR 1 Lakh. The university also offers scholarships through SRMUSET (Scholarship cum Entrance Test) to reduce the financial burden on deserving students. Admission helpline: +91-9838904666.  ",
          },
        },
        {
          "@type": "Question",
          name: "Is SRMU a UGC approved and NAAC accredited university?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " Yes, Shri Ramswaroop Memorial University (SRMU) is fully approved by the University Grants Commission (UGC) and the Government of Uttar Pradesh. SRMU holds NAAC B+ accreditation with a score of 2.7. The university was established in 2012 under the Uttar Pradesh Private Universities Act and has been consistently recognized for academic quality. SRMU has been ranked 70th in the University (Private) category by India Today 2025 and 429th by QS World Rankings 2026, making it one of the top-ranked private universities in Uttar Pradesh.  ",
          },
        },
        {
          "@type": "Question",
          name: "What is SRMU placement record and highest package offered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SRMU Lucknow has a strong placement record with approximately 90% placement rate as per 2025 data. The highest salary package offered in 2026 was INR 17 LPA, while the average package was INR 4.5 LPA. Top recruiters include Accenture, Amazon, Jaro Education, Internshala, and BlueStone Jewellery. SRMU claims 100% placement achievement in Engineering, Management, Computer Application, and Polytechnic programs.",
          },
        },
        {
          "@type": "Question",
          name: "What courses are offered at SRMU Lucknow and what is the fee structure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SRMU offers 115+ courses across 11 disciplines including B.Tech (16 specializations), MBA, BBA, BCA, B.Sc, B.Com, LL.B, M.Tech, Pharmacy, and Agriculture. For 2026, fees range from INR 62,000 to INR 5 Lakhs depending on the course. B.Tech fees range from INR 1 lakh to INR 5.3 lakh for the full program. BCA first-year fees are INR 1 Lakh. The university also offers scholarships through SRMUSET (Scholarship cum Entrance Test) to reduce the financial burden on deserving students. Admission helpline: +91-9838904666.",
          },
        },
        {
          "@type": "Question",
          name: "Is SRMU law degree recognized by BCI and UGC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The law programs offered by Shri Ramswaroop Memorial University are recognized by the Bar Council of India (BCI), and the university is recognized by the University Grants Commission (UGC). This recognition ensures that eligible students can pursue legal education and career opportunities in accordance with regulatory standards in India.",
          },
        },
        {
          "@type": "Question",
          name: "Where is SRMU located and what are its campus facilities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shri Ramswaroop Memorial University (SRMU) is located on Lucknow-Deva Road, Barabanki, Uttar Pradesh, approximately 25 kilometers from Lucknow city center. The campus spans 100 acres and features technology-enabled classrooms, advanced research laboratories, a central library, innovation and incubation center, digital learning resources, and separate hostel facilities for boys and girls. The university also offers sports infrastructure, green spaces, and student activity centers. For location and directions, students can visit the official SRMU website.",
          },
        },
      ],
    },
  ],
};
