import { customeOverViewType } from "../../../types/home-data-type";
import director from "../../../assets/images/campus-life/student-senate/prof.-b-m-dixit-photo-10062510410818.jpg"
import overview from "../../../assets/images/campus-life/student-senate/overview-06032410434024.jpg"
import preamble from "../../../assets/images/campus-life/student-senate/preamble-06032410435072.jpg"
import studensenate from "../../../assets/images/campus-life/student-senate/studensenate-06052402335522.jpg"
import overviewpdf from "../../../assets/pdf/campus-life/student-senate/overview-050324011318-1--140324100640.pdf"
import preamblepdf from "../../../assets/pdf/campus-life/student-senate/preamble-050324011326-120324024301.pdf"
import formationpdf from "../../../assets/pdf/campus-life/student-senate/university-student-senate-is-formed-through-indire-140324100649.pdf"


import year22 from "../../../assets/images/campus-life/student-senate/22.jpg"
import year21 from "../../../assets/images/campus-life/student-senate/21.jpg"
import year20 from "../../../assets/images/campus-life/student-senate/20.jpg"
import year19 from "../../../assets/images/campus-life/student-senate/19.jpg"
import year18 from "../../../assets/images/campus-life/student-senate/18.jpg"

export const StudentSenateOverviewData: customeOverViewType = {
  heading: "Student Senate",
  content: `The SRMU student senate is an independent student body to address academic and administrative concerns, facilitating amicable solutions with university authorities. 
It is an interface through which student concerns get represented to the university authorities with a fair and community-driven approach.
`,
};



export const directorData = {
  name: "Prof. (Dr.) B.M. Dixit",
  designation: "Director Student Welfare, SRMU",
  qualification: "M.Sc. (Physics), M.Sc. (Maths), Ph.D.",
  experience: "25 Years",
  phdGuided: "01 (Awarded)",
  email: "director.insh@srmuc.ac.in",
  contact: "+91-8090954435",
  extension: "403",
  orcid: "https://orcid.org/0000-0002-3490-9162",
  image: director,
  bio: [
    `Dr. Bhanu Mani Dixit is Professor in Faculty of Physical Sciences and also holds position of Director – Student Welfare. He after earning two Postgraduate degrees first in Physics and then in Mathematics, obtained his Ph.D degree in cross-disciplinary topic of double beta decay which deals theoretically - nuclear structure frameworks and neutrino physics. His philosophy about effective teaching is that it requires understanding of a subject to a level which is appropriate for the transference of knowledge from the teacher’s perspective to that of the students. Further, he acknowledges the importance of innovation in delivery style apart from the up gradation of knowledge.`,

    `For past two decades, he has taught over a dozen different courses at Undergraduate and Postgraduate levels, wrote popular science articles and delivered popular lectures, presented and published many research papers in conferences and in peer reviewed journals respectively. His current research interest includes medical physics and academic planning in higher education. To pursue his research interest, he is also guiding couple of students for a Ph.D. degree.`,

    `Being associated with the present group since its inception way back in 2001, he was among the very few who were entrusted to raise this University in 2011 as a center of universal learning. His academic outlook towards teaching methodology, faculty constitution is to create conducive environment for academic learning, while in administration his active role in team building and establishing harmonious accord amongst hundreds of faculty members and thousands of students is pivotal and all inclusive.`
  ]
};


export interface StudentSenate {
  id: number;
  title: string;
  description: string;
  image: string;
  pdfLink: string;
}


export const students: StudentSenate[] = [
  {
    id: 1,
    title: "Overview",
    description:
      "The Student Senate focuses on two key concerns: fostering an independent student body capable of addressing academic and administrative issues, and collaborating with university authorities to reach new solutions and strategies to benefit university life.",

    image: overview,
    pdfLink: overviewpdf,
  },
  {
    id: 2,
    title: "Preamble",
    description:
      "The Lyngdoh Committee Report makes certain recommendations in the election of student bodies in universities. SRMU has adopted an indirect method of election to establish an independent University Student Senate. Senate members, in collaboration with university authorities, shall work to enhance the overall academic ambience, general discipline among students, and campus life.",

    image: preamble,
    pdfLink: preamblepdf,
  },
  {
    id: 3,
    title: "Formation of University Student Senate",
    description:
      "The Senate is established through an indirect election process, with Class Representatives (CRs) directly elected for each undergraduate and postgraduate class. These CRs then elect a set number of Institute Representatives (IRs) from each institute, totaling 40 elected IRs. The 40 IRs, along with 10 Nominated Members, form the University Student Senate, consisting of 50 members who further elect 4 Office Bearers—Convener, Deputy Convener, Secretary, and Treasurer.",

    image: studensenate,
    pdfLink: formationpdf,
  },

];


export const meetingFrequencyData = [
  {
    year: "2022-23",
    image: year22,
    issues: [
      "The formation of Student Senate has been amended from session 2022-23 wherein for the post of Institute Representatives (IRs) and Office Bearers process of election has been changed as per University Student Senate amended Policy and an impartial Selection Committee at Institute Level and University Level respectively will judge through interview/interaction amongst all the interested CRs for IRs and IRs for Office Bearer who have filed their nomination as a candidate for the said post.  ",
      "Announcement of dates of Nomination and Election of Class Representative (CRs), Institute Representative (IRs), Office Bearers and Nominated Members on 20th September, 2022 and amended on 10th October, 2022.",
      "The Class Representative’s election have been successfully conducted on 11th October, 2022 with 165 CRs being elected/unopposed from all Institutes, while selection for University Student Senate 40 IRs on 21st October, 2022 while for 10 Nominated Members and 4 Office Bearers on 29th October, 2022.",
      "Badge Giving and Oath Taking Ceremony was held on 23rd November, 2022 with Hon’ble Vice Chancellor, Pro Vice Chancellor and Registrar.",
      "Meetings with IRs on 8th February and 27th April, 2023 to finalize the agenda points for the meeting with University Authorities.",
      "Meeting with IRs and University Authorities headed by Vice Chancellor on 8th May, 2023  with 15 agenda points from Senate side was handled by Convener and Secretary of USS in association with DSW.",
      "Concluding Meeting with Senate Members was held on 21st June, 2023 wherein Action Taken Report was presented by Dy. Reg. Acad. and then Certificates were distributed amongst Senate Members by Hon’ble Vice Chancellor and Pro Vice Chancellor while Director-Student welfare proposed the vote of thanks.",
    ],
  },
  {
    year: "2021-22",
    image: year21,
    issues: [
      "Announcement of dates of Nomination and Election of Class Representative (CRs), Institute Representative (IRs), Office Bearers and Nominated Members on 27th September, 2021 and 26th October, 2021 respectively.",
      "The election for University Student Senate have been successfully conducted on 30th October, 2021 with 40 IRs, 4 Office Bearers on 11th November, 2021 and 10 nominated Members on 16th November, 2021.",
      "Badge Giving and Oath Taking Ceremony was held on 25th November, 2021 with Hon’ble Vice Chancellor, Pro Vice Chancellor and Registrar.",
      "Meetings with IRs on 13th December, 2021 to finalize the agenda points for the meeting with University Authorities.",
      "Meeting with IRs and University Authorities headed by Vice Chancellor on 26th March, 2022  with 7 agenda points from Senate side and 2 Addional Points was handled by Convener and Secretary of USS in association with DSW.",
      "Concluding Meeting with Senate Members was held on 4th July, 2022 wherein Action Taken Report was presented by Dy. Reg. Acad. and then Certificates were distributed amongst Senate Members by Hon’ble Vice Chancellor and Pro Vice Chancellor while Director-Student welfare proposed the vote of thanks.",
    ],
  },
  {
    year: "2020-21",
    image: year20,
    sections: [
      {
        title: "Pre-Election Activities:",
        points: [
          "Noting Sheet approval of ONLINE Election on 17th December, 2020.",
          "Announcement of dates of Nomination and Election (18th December, 2020) of Class Representative (CRs), Institute Representative (IRs), Office Bearers and Nomination from Institutes for Nominated Members (12th January, 2021).",
        ]
      },
      {
        title: "Election:",
        points: [
          "Successful conduction of election of CRs (30th December 2020),  IRs (11th January, 2021),  Office Bearers ( 18th January, 2021) and identification of 10 Nominated Members (14th February, 2021).",
          "Elected Office Bearers are Convener - Sharukh Khan, MA JMC 2nd Year, Deputy Convener - Satyam Soni, B.Tech. CE 4th Year, Secretary - Aanchal Singh, BA JMC 3rd  Year, and Treasurer - Aditya Vikram Singh, BBA 2nd Year.",
        ]
      },
      {
        title: "Activities of Senate:",
        points: [
          "On 5th March, 2021, Badge Giving and Oath Taking ceremony of Senate Members and Introductory Meeting with University Authorities was held.",
          "On 8th and 9th June, 2021, ONLINE Meeting of Senate Members were took place in WhatsApp Group wherein all IRs were present and finalized the agenda points for the meeting with University Authorities.",
          "On 8th July, 2021, ONLINE Meeting with IRs and University Authorities headed by Vice Chancellor and Pro Chancellor was special attendee which generate a lot of enthusiasm amongst Senate Members was held. In the meeting, Convener put up the 10 agenda points wherein on each agenda point Pro Chancellor herself initiated detailed discussion and meeting took over 2 hrs to end. Senate members had raised few other issues with the permission of the chair and in the end DSW thanked one and all present.",
          "On 22nd September, 2021, in the concluding meeting with Senate Members, Dy. Registrar Academic presented the Action Taken Report on the Agenda discussed on 8th July meeting. Senate has accepted the action taken report in good spirit. Senate Members have also shared their experience and feedback with the University Authorities. Pro VC and Registrar encouraged the Members to be participative in such opportunity as it will help in development of University and to the Members also while DSW thanked the Senate Members for their support and dedication towards the betterment of the University.",
        ]
      }
    ]
  },
  {
    year: "2019-20",
    image: year19,
    issues: [
      "Announcement of dates of Nomination and Election of Class Representative (CRs), Institute Representative (IRs), Nominated Members and Office Bearers issued on 3rd June 2019 and on later days.",
      "Successful conduction of election with  34 IRs, 10 Nominated Members and 4 Office Bearers by 11th September, 2019.",
      "The Office Bearers are Convener -Shreya Srivastava BA (Hons.) Sociology 3rd Year, Deputy Conveyer – Abhishek Kr. Tiwari BCA 3rd Year, Secretary – Tarun Mishra BBA LLB 3rd Year and Treasurer – Wali Azam Khan Diploma EE 3rd Year.",
      "Meeting with CRs and IRs 24th September, 2019 to finalize the agenda points for the meeting with University Authorities.",
      "Meeting with IRs and University Authorities headed by Vice Chancellor on 3rd October, 2019 with 10 agenda points was handled by Convener and Secretary of USS in association with DSW.",
      "Meeting with CRs and IRs to finalize the agenda points for (Even Semester – 4th April, 2019) the meeting with University Authorities.",
      "ONLINE Meeting with IRs and University Authorities headed by Vice Chancellor on 31st May, 2020 with 10 agenda points was handled by Convener and Secretary of USS in association with DSW.",
    ],
  },
  {
    year: "2018-19",
    image: year18,
    issues: [
      "Noting Sheet approval of formation of University Student Senate on 18th December, 2017.",
      "Policy on University Student Senate released on 4th April, 2018. ",
      "Proposal for University Student Senate is passed on last meeting of Student Council held on 18th April, 2018.",
      "Announcement of dates of Nomination and Election of Class Representative (CRs), Institute Representative (IRs), Nominated Members and Office Bearers.",
      "Successful conduction of election with 90 CRs, 33 IRs, 10 Nominated Members and 4 Office Bearers.",
      "The Office Bearers are Convener – Mayank Khandari B. Tech. CS 4th Year, Deputy Conveyer – Rimjhim Priya B. Com. LLB 4th Year, Secretary – Vineet Chaubey B. Tech. ME 4th Year  and Treasurer – Saurabh Agarwal BA (Hons.) Economics.",
      "Introductory Meeting with IRs and University Authorities held on 10th October, 2018.",
      "Meeting with CRs and IRs (Odd Semester - 24th and 31st October, 2018) to finalize the agenda points for the meeting with University Authorities.",
      "Meeting with IRs and University Authorities headed by Vice Chancellor on 30th November, 2018 with 10 agenda points was handled by Convener and Secretary of USS in association with DSW.",
      "Announcement of dates of nomination and Election of CRs of First Year Students.",
      "Meeting with CRs and IRs to finalize the agenda points for (Even Semester – 4th April, 2019) the meeting with University Authorities.",
      "Meeting with IRs and University Authorities headed by Vice Chancellor on 1st May, 2019 with 10 agenda points was handled by Convener and Secretary of USS in association with DSW. ",
      "On 13th May, 2019, USS proposed the dates of Election for 2019-20 sessions.",
      "USS gets dissolved on 30th June 2019 with the end of Academic Session 2018-19.",
    ],
  },

];
