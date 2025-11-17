import logo from "../../assets/images/srmcem_head_logo.png";
import scst from "../../assets/pdf/SC-ST Committee.pdf";
export const HeaderData = [
  {
    TopHeaderData: [
      {
        leftContent: [
          {
            item: "Notice",
          },
          {
            item: "Admission Enquiry",
          },
          {
            item: "Career",
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
            path: "/about",
            subItem: [
              { item: "About SRMU", path: "/about" },
              { item: "Leadership & Governance", path: "/about/leadership-and-governance" },
              { item: "Committee & Cells", path: "/about/committees-and-cells" },
              { item: "Approval & Associations", path: "/about/recognition-approvals" },
              { item: "Awards & Rankings", path: "#" },
              { item: "Quality Assurance Cell", path: "/about/iqac-overview" },
              { item: "NAAC", path: "/about/naac" },
              { item: "NIRF", path: "/about/nirf" },
              { item: "Organizational Structure & Plan", path: "/about/organization-structure-plan" },
            ],
          },
          {
            id: 1,
            item: "Academics",
            path: "/academics/institutes-info",
            subItem: [
              {
                item: "Institute",
                path: "/academics/institutes-info",
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
            subItem: [
              { item: "Courses Offerd", path: "admissions/course-offered" },
              { item: "How To Apply", path: "admissions/how-to-apply" },
              // {
              //     item: "Anti Ragging",
              //     path: "#",
              //     isMode: "fifth",
              //     nestedSubItem: [
              //         {
              //             item: "Anti Ragging Policy",
              //             path: anti_raging_policy,
              //             href: true
              //         },
              //         {
              //             item: "Anti Ragging Committee",
              //             path: anti_raging_coomuity,
              //             href: true
              //         },
              //         {
              //             item: "Anti Ragging Affidavit ",
              //             path: anti_raging_affidavit,
              //             href: true
              //         },
              //     ],
              // },
              { item: "SC/ST Committee", path: scst },
            ],
          },
          {
            id: 3,
            item: "Addmission",
            path: "adsmission/admission-overview",
            subItem: [
              {
                item: "Overview",
                path: "/adsmission/adsmission/admission-overview",
              },
              {
                item: "How to Apply",
                path: "/adsmission/civil-engineering",
              },
              {
                item: "Program Finder",
                path: "/adsmission/program-finder",
              },
              {
                item: "Fee Structure",
                path: "/adsmission/fee-structure",
              },
              {
                item: "Scholarship",
                path: "/adsmission/data-science",
              },
              {
                item: "Shift Schedule (First Year Only)",
                path: "/adsmission/shift-schedule",
              },
              {
                item: "Document Checklist",
                path: "/adsmission/document-checklist",
              },

              { item: "Admission Policies", path: "/adsmission/it" },

              {
                item: "Admission FAQs",
                path: "/adsmission/admission-faq",
              },
            ],
          },

          {
            id: 4,
            item: "Campus Life",
            path: "/campus-life/facilities",
            subItem: [
              { item: "Facilities", path: "/campus-life/student-corner" },
              { item: "Central Library", path: "/campus-life/central-library" },

              {
                item: "Events",
                path: "/campus-life/events",
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
            ],
          },

          {
            id: 5,
            item: "Placements",
            path: "/placements",
            subItem: [
              {
                item: "Student testimonial",
                path: "/placements/student-testimonial",
              },
              {
                item: "Alumni Registration",
                path: "/placements/alumni-registration",
              },

              // student-testimonial
              {
                item: "Placement Plolicies",
                path: "/placements/placement-policies",
              },
            ],
          },

          {
            id: 6,
            item: "Research",
            path: "#",
            subItem: [
              { item: "Academics Facilities", path: "/facilities/academics" },
              { item: "Other Facilities", path: "/facilities/other" },
            ],
          },
        ],
      },
    ],
  },
];
