import logo from "../../assets/images/srmcem_head_logo.png";
export const HeaderData = [
  {
    TopHeaderData: [
      {
        leftContent: [
          {
            item: "Notice",
            path: "/notice",
          },
          {
            item: "Admission Enquiry",
          },
          {
            item: "Shift Schedule",
            path: "/shift-schedule",
          },
        ],
        rightContent: [
          {
            id: 1,
            logo: "",
            content1: [{ item: "Student Login" }, { item: "Student Login" }],
          },
          {
            id: 3,
            logo: "",
          },
          {
            id: 2,
            logo: "",
            content1: [{ icon: "", info: "Admission Helpline", phone: "18001026004" }, { item: "Student Login" }],
          },
        ],
      },
    ],
    bottomHeaderData: [
      {
        logo: logo,
        navitems: [
          {
            id: 0,
            item: "About Us",
            path: "/about-us",
            subItem: [
              { item: "About SRMU", path: "about-us" },
              { item: "Leadership & Governance", path: "about-us/leadership-and-governance" },
              { item: "Committee & Cells", path: "about-us/committees-and-cells" },
              { item: "Approval & Associations", path: "about-us/approvals-and-associations" },
              { item: "Awards & Rankings", path: "about-us/award-overview" },
              { item: "Quality Assurance Cell", path: "about-us/iqac-overview" },
              { item: "NAAC", path: "about-us/naac" },
              { item: "NIRF", path: "about-us/nirf" },
              { item: "Organizational Structure & Plan", path: "about-us/organization-structure-plan" },
            ],
          },
          {
            id: 1,
            item: "Academics",
            path: "/academics",
            subItem: [
              {
                item: "Institute",
                path: "/academics",
              },
              {
                item: "Policies & Reports",
                path: "/academics/policies-reports",
              },
              {
                item: "Curriculum Design",
                path: "/academics/curriculum-design",
              },
              {
                item: "Teaching Learning Process",
                path: "/academics/teaching-learning-process",
              },
              {
                item: "Academic Calendar",
                path: "/academics/academic-calender",
              },

              {
                item: "Academic Bank of Credit",
                path: "/academics/academic-depository-nad-and-abc",
              },
              {
                item: "E-Content Cell",
                path: "/academics/e-content-development-cell",
              },
            ],
          },
          {
            id: 2,
            item: "Programs",
            path: "#",
            isMegaMenu: true,
            megaMenu: [
              {
                id: 0,
                column: [
                  {
                    heading: "After Class 10th",
                    path: "after-class-10th",
                    item: [{ path: "after-class-10th/polytechnic", item: "Polytechnic" }],
                  },

                  {
                    heading: "After Polytechnic",
                    path: "after-polytechnic",
                    item: [
                      { path: "after-polytechnic/biotechnology", item: "Biotechnology" },
                      { path: "after-polytechnic/computer-science", item: "Computer Science" },
                      { path: "after-polytechnic/engineering", item: "Engineering" },
                    ],
                  },
                ],
              },
              {
                id: 1,
                column: [
                  {
                    heading: "After Class 12th",
                    path: "/programs/after-class-12th",
                    item: [
                      { path: "after-12th/computer-science", item: "Computer Science" },
                      { path: "after-12th/computer-application", item: "Computer Application" },
                      { path: "after-12th/allied-health-sciences", item: "Allied Health Sciences" },
                      { path: "after-12th/agriculture", item: "Agriculture" },
                      { path: "after-12th/biotechnology", item: "Biotechnology" },
                      { path: "after-12th/engineering", item: "Engineering" },
                      { path: "after-12th/pharmacy", item: "Pharmacy" },
                      { path: "after-12th/management", item: "Management" },
                      { path: "after-12th/law", item: "Law" },
                      { path: "after-12th/media-studies", item: "Media Studies" },
                      { path: "after-12th/commerce-economics", item: "Commerce & Economics" },
                      { path: "after-12th/food-technology", item: "Food Technology" },
                      { path: "after-12th/nutrition-dietetics", item: "Nutrition & Dietetics" },
                      { path: "after-12th/arts-science", item: "Arts & Science" },
                      { path: "after-12th/polytechnic-lateral", item: "Polytechnic (Lateral)" },
                    ],
                  },
                ],
              },
              {
                id: 2,
                column: [
                  {
                    heading: "Industry Honors Programs",
                    path: "industry-honors",
                    item: [
                      { path: "industry-honors/industry_honors_btech_cse_aiml", item: "B.Tech. in CSE (Artificial Intelligence & Machine Learning)" },
                      { path: "industry-honors/btech-cse-cyber-security", item: "B.Tech. in CSE (Cyber Security) with L&T" },
                      { path: "industry-honors/btech-cse-data-science", item: "B.Tech. in CSE (Data Science & AI) with L&T" },
                      { path: "industry-honors/btech-me-ev", item: "B.Tech. in ME (EV Engineering) with L&T" },
                      { path: "industry-honors/btech-ee-ev", item: "B.Tech. in EE (EV Engineering) with L&T" },
                      { path: "industry-honors/btech-ece-ev", item: "B.Tech. in ECE (EV Engineering) with L&T" },
                      { path: "industry-honors/btech-ce-adcons", item: "B.Tech. in CE (Ad. Cons. Prac.) with L&T" },
                      { path: "industry-honors/bca-cyber-security", item: "B.C.A. (Cyber Security) with L&T" },
                      { path: "industry-honors/bca-data-science", item: "B.C.A. (Data Science & AI) with L&T" },
                      { path: "industry-honors/bba-business-analytics", item: "B.B.A. in Business Analytics with L&T" },
                      { path: "industry-honors/bcom-hons-lt", item: "B.Com (Hons.) with L&T" },
                      { path: "industry-honors/mba-business-analytics", item: "M.B.A. in Business Analytics with L&T" },
                      { path: "industry-honors/mtech-ai-ml", item: "M.Tech. in Artificial Intelligence & Machine Learning" },
                      { path: "industry-honors/mtech-data-science", item: "M.Tech. in Data Science" },
                    ],
                  },
                ],
              },

              {
                id: 3,
                column: [
                  {
                    heading: "After Graduation",
                    path: "after-graduation",
                    item: [
                      { path: "after-graduation/agriculture", item: "Agriculture" },
                      { path: "after-graduation/biotechnology", item: "Biotechnology" },
                      { path: "after-graduation/computer-science", item: "Computer Science" },
                      { path: "after-graduation/computer-application", item: "Computer Application" },
                      { path: "after-graduation/engineering", item: "Engineering" },
                      { path: "after-graduation/management", item: "Management" },
                      { path: "after-graduation/law", item: "Law" },
                      { path: "after-graduation/commerce-economics", item: "Commerce & Economics" },
                      { path: "after-graduation/education", item: "Education" },
                      { path: "after-graduation/media-studies", item: "Media Studies" },
                      { path: "after-graduation/arts-science", item: "Arts & Science" },
                      { path: "after-graduation/social-work", item: "Social Work" },
                    ],
                  },

                  {
                    heading: "After Post Graduation",
                    path: "after-post-graduation",
                    item: [{ path: "after-post-graduation/phd", item: "Ph.D." }],
                  },
                ],
              },
            ],
          },

          {
            id: 3,
            item: "Admission",
            path: "admission",
            subItem: [
              {
                item: "Overview",
                path: "/admission",
              },
              {
                item: "How to Apply",
                path: "/admission/how-to-apply",
              },
              {
                item: "Program Finder",
                path: "/admission/program-finder",
              },
              {
                item: "Fee Structure",
                path: "/admission/fee-structure",
              },
              {
                item: "Scholarship",
                path: "/admission/scholarship-scheme",
              },
              {
                item: "Shift Schedule (First Year Only)",
                path: "/admission/shift-schedule",
              },
              {
                item: "Document Checklist",
                path: "/admission/document-checklist",
              },

              { item: "Admission Policies", path: "/admission/admission-policy" },

              {
                item: "Admission FAQs",
                path: "/admission/admission-faq",
              },
            ],
          },

          {
            id: 4,
            item: "Campus Life",
            path: "/campus-life",
            subItem: [
              { item: "Facilities", path: "/campus-life" },

              { item: "Central Library", path: "/campus-life/central-library" },
              {
                item: "Events",
                path: "/campus-life/events",
              },
              {
                item: "Clubs",
                path: "/campus-life/clubs",
              },
              {
                item: "Convocation",
                path: "/campus-life/convocation",
              },
              {
                item: "Green Initiative",
                path: "/campus-life/green-initiative",
              },
              {
                item: "Women Empowerment",
                path: "/campus-life/women-empowerment",
              },

              {
                item: "Outreach Activations",
                path: "/campus-life/outreach-activations",
              },
              {
                item: "Student Senate",
                path: "/campus-life/student-senate",
              },
              {
                item: "Student Corner",
                path: "/campus-life/student-corner",
              },
              {
                item: "Grievance Redressal System",
                path: "/campus-life/grievance-redressal-system",
              },
            ],
          },

          {
            id: 5,
            item: "Placements",
            path: "/placements",
            subItem: [
              {
                item: "Placement Overview",
                path: "/placements",
              },
              {
                item: "Placement Cell",
                path: "/placements/placement-cell",
              },
              {
                item: "Placement Policies",
                path: "/placements/placement-policies",
              },

              {
                item: "Student Testimonials",
                path: "/placements/student-testimonial",
              },
              {
                item: "Alumni Registration",
                path: "/placements/alumni-registration",
              },
              {
                item: "Alumni Feedback",
                path: "/placements/alumni-feedback",
              },
              {
                item: "Alumni Testimonials",
                path: "/placements/notable-alumni",
              },
            ],
          },

          {
            id: 6,
            item: "Research",
            path: "/research",
            subItem: [
              { item: "Overview", path: "/research" },
              { item: "Process And Initiatives", path: "/research/process-and-initiatives" },

              { item: "Ph.D. Notification (Session: 2025-26)", path: "/research/phd-notification-session" },
              { item: "Publication", path: "/research/publication" },
              { item: "Innovation", path: "/research/innovation" },
              { item: "Consultancy", path: "/research/consultancy" },
            ],
          },
        ],
      },
    ],
  },
];
