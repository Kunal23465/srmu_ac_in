import { customeOverViewType } from "../../../types/home-data-type";

export const admissionFaqOverviewData: customeOverViewType = {
    heading: "Admission-FAQs",
    content: `Explore answers to commonly asked questions about the admission process at SRMU. Find valuable information on eligibility criteria, application procedures, and other key details to navigate your journey seamlessly.`,
};


import React from "react";

export interface AccordionItem {
    id: number;
    question: string;
    layoutType: "text" | "list" | "table" | "custom";
    content?: string;
    listItems?: string[];
    tableData?: {
        topHeader?: any;
        headers: string[];
        rows: string[][];
    };
    customComponent?: React.ReactNode;
}

export const faqData: AccordionItem[] = [
    {
        id: 1,
        question: "What is the criterion for admission in SRMU?",
        layoutType: "text",
        content:
            "Prospective candidates seeking admission to any undergraduate, postgraduate, integrated, or diploma program must ensure they meet the prescribed eligibility criteria for the specific course. Explore the eligibility criteria for different courses at https://srmu.ac.in/pdf/EligibilityCriteriaforAdmissions.pdf.",
    },
    {
        id: 2,
        question: "What is the mode of admission in SRMU?",
        layoutType: "text",
        content:
            "Candidates aspiring to take admission in any course (except LL.M. and B.Ed.) can apply and take admission on the basis of marks scored in entrance examinations. In case of LL.M., selection is done on the basis of entrance examination and interview. For B.Ed., the candidate needs to appear in an interview process before getting admission. However, due to COVID-19, all entrance examinations/interviews have been cancelled and direct admission is provided on the basis of marks scored in qualifying examinations.",
    },
    {
        id: 3,
        question: "How can I apply for a particular course?",
        layoutType: "text",
        content:
            "After getting the information regarding the courses and knowing eligibility criteria, students can apply for any course by paying the required amount for reserving the seat either offline or online at https://srmu.ac.in/online-admission.",
    },
    {
        id: 4,
        question: "Am I eligible to take admission in SRMU programs?",
        layoutType: "text",
        content:
            "You are welcome to apply to SRMU. We will evaluate your credentials and admissibility after you have submitted an application. Here at SRMU, we do a comprehensive review of all applications.",
    },
    {
        id: 5,
        question:
            "What should be the minimum percentage for getting admission in different courses?",
        layoutType: "text",
        content:
            "The minimum percentage criteria for admission is 45% marks in the qualifying examination (10th for Diploma / 12th for Undergraduate and Integrated excluding B.Ed. and LL.B. / Graduation for Post Graduate courses). However, there are certain courses where the minimum percentage required is higher. It is advised to check the eligibility criterion for different courses.",
    },
    {
        id: 6,
        question:
            "Can students apply for any course even if they have a compartment in class 12th?",
        layoutType: "text",
        content:
            "Students can apply for the courses even if they have a compartment in their exam, but that admission would be considered provisional until the time the student submits the original passing mark sheet. The deadline for the same is 30th October.",
    },
    {
        id: 7,
        question:
            "Is it possible that I can take admission in a course even when board results of class 12th are awaited?",
        layoutType: "text",
        content:
            "You can apply for a course even if your board results are awaited, but that admission would be considered provisional until you submit the original passing mark sheet. The deadline for the same is 30th October.",
    },
    {
        id: 8,
        question:
            "Is there an option of taking admission for students appearing in board exams or final year of graduation?",
        layoutType: "text",
        content:
            "Yes, all such students are provided provisional admission subject to confirmation on the basis of their final result meeting the eligibility criterion of the chosen course.",
    },
    {
        id: 9,
        question:
            "While filling the online application form, I am facing issues related to payment (payment failed/ payment awaited/ payment failure).",
        layoutType: "text",
        content:
            "In such cases, you need to contact us on our Tollfree number 18001026004 or WhatsApp at 9554965586. Normally, if payment gets deducted due to issues with banking servers/payment gateways/internet connection, the amount is credited back by concerned agencies within 2–7 days. You can also contact our representatives for assistance to apply through offline mode by making form fee payment to the university bank account.",
    },
    {
        id: 10,
        question:
            "In case the student admitted provisionally fails to meet the eligibility criterion, is there an option of course switching?",
        layoutType: "text",
        content:
            "If the candidate meets the eligibility of another course in which switching is desired, the same is permissible once only and before class commencement. Fees paid will be adjusted against the new course.",
    },
    {
        id: 11,
        question: "What is SRMU-SET and who all can appear in this exam?",
        layoutType: "text",
        content:
            "SRMU-SET is a scholarship entrance test offered by SRMU. Any student interested in undergraduate (except B.Ed. and LL.B.) and integrated programs can apply for the scholarship exam.",
    },
    {
        id: 12,
        question:
            "What are the different scholarship schemes other than SRMU-SET offered at SRMU and on what basis are they given out?",
        layoutType: "list",
        content:
            "SRMU offers various scholarship schemes to provide financial benefits to performers and achievers.",
        listItems: [
            "SRMUSET Scholarship",
            "Merit Based Scholarship",
            "National Entrance Score Based Scholarship",
            "Special Scholarships",
        ],
    },
    {
        id: 13,
        question: "What is SRMUSET Scholarship Scheme?",
        layoutType: "table",
        content:
            "SRMUSET is a scholarship-cum-entrance test which provides aspirants of undergraduate (except B.Ed. & LL.B.) and integrated programs a chance to score well and get rewarded.",
        tableData: {
            headers: [
                "Score",
                "Scholarship (Phase 1- 05th Dec 2025 – 30th Apr 2026)",
                "Scholarship (Phase 2- 01st May 2026 – 31st Jul 2026)",
                "Scholarship (Phase 3- 01st Aug 2026 Till Closure)",
            ],
            rows: [
                [">=90.1", "100% Tuition Fee", "50% Tuition Fee", "30% Tuition Fee"],
                ["80.1-90", "50%", "30%", "20%"],
                ["70.1-80", "30%", "20%", "10%"],
                ["60.1-70", "20%", "10%", "NA"],
                ["<=60", "10%", "NA", "NA"],
            ],
        },
    },
    {
        id: 14,
        question: "What is Merit Based Scholarship Scheme?",
        layoutType: "table",
        content:
            "This scholarship scheme rewards the outstanding efforts of meritorious students and is not applicable in LL.M. and transfer cases.",
        tableData: {
            headers: ["Category", "Score Range", "Scholarship"],
            rows: [
                ["Under Graduate & Integrated (12th Marks)", ">=95.1", "100% Yearly Tuition Fee"],
                ["", "90.1-95", "100% Semester Tuition Fee"],
                ["", "80.1-90", "50% Semester Tuition Fee"],
                ["", "70.1-80", "30% Semester Tuition Fee"],
                ["", "60.1-70", "20% Semester Tuition Fee"],
                ["B.Tech (Lateral) & B.Arch (Diploma/B.Sc. Marks)", ">=85.1", "100% Yearly Tuition Fee"],
                ["", "80.1-85", "100% Semester Tuition Fee"],
                ["", "70.1-80", "50% Semester Tuition Fee"],
                ["", "60.1-70", "30% Semester Tuition Fee"],
                ["", "<=60", "10% Semester Tuition Fee"],

                ["Post Graduate (Graduation Marks)", ">=85.1", "100% Yearly Tuition Fee"],
                ["", "80.1-85", "100% Semester Tuition Fee"],
                ["", "70.1-80", "50% Semester Tuition Fee"],
                ["", "60.1-70", "30% Semester Tuition Fee"],
            ],
        },
    },
    {
        id: 15,
        question: "What is Career Progression Scholarship Scheme?",
        layoutType: "table",
        content:
            "This scheme is applicable only to those students who have done a degree/diploma course from our college or university campus and are now interested in pursuing the next level of a degree course from the same university campus.",
        tableData: {
            topHeader: [
                {
                    id: 1,
                    title: ""
                },
                {
                    id: 2,
                    title: ""
                }
            ],
            headers: [
                // "Existing Students of SRMU",
                "CGPA Scored",
                "Scholarships",
                // "Existing Students of SRMGPC",
                "Percentage Scored",
                "Scholarships",
            ],
            rows: [
                [">8.5", "100% of yearly tuition fee", ">80", "100% of yearly tuition fee"],
                ["7.5 to 8.5", "100% of semester tuition fee", "70-80", "100% of semester tuition fee"],
                ["6.5 to 7.5", "50% of semester tuition fee", "60-70", "50% of semester tuition fee"],
                ["<6.5", "30% of semester tuition fee", "<60", "30% of semester tuition fee"],
            ],
        },
    },
    {
        id: 16,
        question:
            "I am eligible for multiple scholarship schemes, how much fee waiver will I get?",
        layoutType: "table",
        content:
            "A student will be able to avail one of the scholarship schemes subject to the condition that they satisfy the eligibility criterion of the course in which admission is desired. The scholarships can only be clubbed with One Time Payment (OTP) discounts as shown below:",
        tableData: {
            headers: ["Tuition Fees Applicable", "Discount (INR)"],
            rows: [
                ["90,000 and above", "₹5000"],
                ["70,000 - 90,000", "₹4000"],
                ["50,000 - 70,000", "₹3000"],
                ["Less than 50,000", "₹2000"],
            ],
        },
    },
    {
        id: 17,
        question: "What are special scholarships and who all are eligible for it?",
        layoutType: "list",
        content:
            "As a gesture of appreciation to our staff and students, SRMU provides special fee waivers to strengthen community bonding. We also honor our defense personnel and sportspersons through dedicated scholarships:",
        listItems: [
            "For ward of martyrs – 100% of yearly tuition fee",
            "For ward of serving/retired defense personnel – 100% of semester tuition fee",
            "For national-level sportsperson – 100% of semester tuition fee",
            "For state-level sportsperson – 50% of semester tuition fee",
            "For sibling – 50% of semester tuition fee",
            "For blood relatives/wards of faculty/staff – 50% of semester tuition fee",
            "For student referrals – 30% of semester tuition fee (adjusted in the referred student’s fee)",
            "For staff referrals – 30% of semester tuition fee (adjusted in staff’s referred student fee)",
        ],
    },
    {
        id: 18,
        question:
            "Will I get fee waivers or scholarship in subsequent years of my course?",
        layoutType: "text",
        content:
            "Yes, SRMU provides Performance-Based Scholarships in subsequent years. Meritorious students are rewarded with attractive fee incentives based on their academic performance.",
    },
    {
        id: 19,
        question:
            "What is the fee payment schedule that needs to be followed while taking admission in SRMU?",
        layoutType: "list",
        content:
            "Candidates can follow the fee payment schedule given below:",
        listItems: [
            "30% of first-year course fee at the time of seat locking cum registration",
            "20% of first-year course fee on or before 30th September",
            "50% of first-year course fee on or before 25th December",
            "A one-time payment discount applies if the candidate opts to pay the entire first-year course fee at once.",
        ],
    },
    {
        id: 20,
        question:
            "If a student fails in board/qualifying examination or gets compartment then is admission cancelled?",
        layoutType: "text",
        content:
            "Yes, in such cases, admission will be cancelled. Course change is allowed if the candidate meets the eligibility criteria of the new course. Fees will be adjusted or refunded as per the case, following the university refund policy.",
    },
    {
        id: 21,
        question:
            "Is there some special programs or initiatives for female students at university campus?",
        layoutType: "list",
        content:
            "SRMU aims to empower and motivate women through various initiatives to ensure safety, confidence, and leadership development:",
        listItems: [
            "Appointing female students as Power Angels in Women Powerline 1090 (Special Police Officer role)",
            "Regular sessions by Women Powerline 1090 at campus",
            "NCC for girls and boys",
            "Self-defense workshops in collaboration with Red Brigade",
            "Inspirational sessions by women achievers, including Padma Awardees and civil servants",
        ],
    },
    {
        id: 22,
        question: "Do you have medical facilities for the students?",
        layoutType: "text",
        content:
            "Yes, SRMU provides enhanced medical facilities within the campus for students, faculty, and staff. The facility, managed by ‘Doctel,’ includes health kiosks, regular check-ups, nurses, first aid, and access to doctors via video conferencing. All medical data is securely stored in an app.",
    },
    {
        id: 23,
        question: "Is there any platform to handle student issues and problems?",
        layoutType: "text",
        content:
            "Yes, SRMU has a Student Senate—an independent student body that collaborates with the university administration to address student issues. Additionally, an Online Grievance Redressal Mechanism is in place for transparent resolution of complaints.",
    },
    {
        id: 24,
        question: "How would I get to know about my admission status?",
        layoutType: "text",
        content:
            "Students will receive an official Admission Receipt by post. The Admission Information Letter will include details about hostel accommodation, orientation, and next steps for joining the program.",
    },
    {
        id: 25,
        question: "Is there an application fee?",
        layoutType: "text",
        content:
            "Yes, the application fee is ₹1000 for all courses except Diploma in Engineering, where it is ₹500.",
    },
    {
        id: 26,
        question: "To whom should I contact during the application process?",
        layoutType: "text",
        content:
            "You can contact SRMU’s admission support team on the Toll-Free Number: 18001026004 for any queries related to the application process.",
    },
    {
        id: 27,
        question:
            "I am in final year of graduation/appearing in board examinations, can I apply at SRMU?",
        layoutType: "text",
        content:
            "Yes, you may apply before completing your current academic qualification. You must fill in the examination details and expected completion date in the application form.",
    },
    // Continue after id: 27
    {
        id: 28,
        question: "Can I apply for more than one program?",
        layoutType: "text",
        content:
            "Currently students cannot apply to more than one program."
    },
    {
        id: 29,
        question: "A gap year student could get admission in under graduation courses?",
        layoutType: "text",
        content:
            "Yes, candidates having gap year are eligible to get admission in undergraduate programs."
    },
    {
        id: 30,
        question: "What is the maximum year gap allowed to take admission in UG courses?",
        layoutType: "text",
        content:
            "A maximum of 3 years gap is allowed to take admission in undergraduate courses."
    },
    {
        id: 31,
        question: "Can I speak with an academic advisor to learn more about programs offered?",
        layoutType: "text",
        content:
            "Yes, SRMU has an expert panel of academic counselors ready to help you with career-related queries. You can contact us on Toll Free number 18001026004."
    },
    {
        id: 32,
        question: "What all documents do one need to carry on the day of selection process?",
        layoutType: "text",
        content:
            "A student needs to carry all mark sheets and essential original credentials on the day of the selection process."
    },
    {
        id: 33,
        question: "What system of education is followed at SRMU?",
        layoutType: "text",
        content:
            "Students are required to maintain a minimum SGPA (Semester Grade Point Average) and CGPA (Cumulative Grade Point Average) to get promoted to the next semester and qualify for the Degree or Diploma."
    },
    {
        id: 34,
        question: "What is the attendance requirement?",
        layoutType: "text",
        content:
            "A minimum of 75% attendance is required to appear in the examinations."
    },
    {
        id: 35,
        question: "Can I make partial payment after selection so as to reserve my seat?",
        layoutType: "text",
        content:
            "Partial payments are not accepted. You are required to pay the first semester fee as well as the academic security fee as per the deadline."
    },
    {
        id: 36,
        question: "What if one fails to deposit the fee as per the last date mentioned on the admission letter?",
        layoutType: "text",
        content:
            "If you are unable to pay the fees within the specified date due to a valid reason, you must approach the admission office. Depending on seat availability and the decision of the admission committee, an extension may be considered."
    },
    {
        id: 37,
        question: "What is the campus placement criterion of the university?",
        layoutType: "text",
        content:
            "SRMU assures 100% placement assistance. To be eligible for recruitment, students must achieve a minimum of 6 on a 10-point scale."
    },
    {
        id: 38,
        question: "What would be the mode of language for examination?",
        layoutType: "text",
        content:
            "The mode of language will be English for all programs except for B.Ed. and M.A. (Journalism & Mass Communication), which will be bilingual."
    },
    {
        id: 39,
        question: "When does the campus recruitment season begin?",
        layoutType: "text",
        content:
            "The campus placement season usually begins during the pre-final or final semester, starting in July and continuing until the end of the academic year."
    },
    {
        id: 40,
        question: "Is there a facility of campus tour for the students and parents?",
        layoutType: "text",
        content:
            "Yes, SRMU provides a 15-minute campus tour for students and parents, starting from the admission center. The tour is available throughout the calendar year."
    },
    {
        id: 41,
        question: "Is there any transportation facility available for day scholars?",
        layoutType: "text",
        content:
            "Yes, SRMU provides bus facilities covering all major areas to ensure students’ convenience."
    },
    {
        id: 42,
        question: "How to apply for the hostel accommodation?",
        layoutType: "text",
        content:
            "The university provides three-bedded hostel accommodation with standard civic amenities, mess, and laundry facilities. You should submit your request as soon as possible since allocation is on a first-come, first-served basis."
    }

];
