import { customeOverViewType } from "../../../types/home-data-type";
import flowimg from "../../../assets/images/campus-life/clubs/stude_feed.webp";

export const greenRedressalOverviewData: customeOverViewType = {
  heading: "Grievance Redressal System",
  content: `
Shri Ramswaroop Memorial University (SRMU) employs a robust grievance redressal system aimed at ensuring a fair and transparent resolution of concerns raised by students, faculty, and staff. The system provides a structured mechanism for individuals to submit their grievances, which are then reviewed by a designated committee. This committee works diligently to investigate and address the concerns raised, maintaining confidentiality and impartiality throughout the process. SRMU's grievance redressal system underscores the institution's commitment to fostering a positive and supportive academic environment by offering an avenue for individuals to voice their concerns and seek resolution in a systematic and timely manner.`,
};

export const grievanceData = {
  about: {
    title: "About Grievance Redressal System",
    purposeTitle: "Purpose",
    purposeText:
      "The Online Grievance Redressal Mechanism for the students of the University has been started to resolve the complaints/ issues faced by the students. This system is drawn in the light of guidelines set under The Shri Ramswaroop Memorial University Uttar Pradesh Act, 2011 and UGC (Grievance Redressal) Regulations 2012. This system aims at identifying before management the problems areas for students and resolving them quickly.",
    objectivesTitle: "Objectives",
    objectivesIntro: "The Online Grievance Redressal Mechanism for the students has been started with the following end objectives:",
    objectivesList: [
      "To resolve grievances of the students",
      "To provide a transparent system of handling the student grievances",
      "To ensure effective solution to the student’s grievances",
      "To investigate the reason of dissatisfaction",
      "To obtain where possible a speedy resolution to the problem",
      "To ensure that all student related issues/ problems are visible to management",
    ],
  },

  // You can add similar structures for other tabs like:
  types: {
    title: "Types of Grievance",
    objectivesTitle: "The following issues of the students will be considered",
    objectivesList: [
      "Admission related issues",
      "Fees related issues",
      "Concession related issues",
      "Hostel related issues",
      "Sexual harassment related issues",
      "Discrimination related issues which covers up complaints of alleged discrimination of students on basis of SC, ST, OBC, Minority, Women or Disabled Categories",
      "Academic issues related to Performance/Examination",
      "Scholarships related issues",
      "Issues related to Faculty Members",
      "Medical/Health related issues",
      "Lab related issues",
      "Library related issues",
      "Buses related issues",
      "Basic amenities related issues",
      "Other relevant issues",
    ],
  },

  procedures: {
    title: "Procedures",
    objectivesTitle: "The standard process to be followed under this redressal mechanism is as follows:",
    objectivesList: [
      "Student registers his grievance from his own login or can make their grievance on the official number of the Students' Grievance Cell and can also email.",
      "Once a grievance is registered, a mail notification is sent to Admin. He then, based on the type and description of the grievance, assigns it to a particular official.",
      "The concerned official receives a mail notification requesting to take necessary steps to resolve the grievance assigned.",
      "The official can assign IN PROCESS status to the grievance if he requires some time for working on the issue.",

      "The official can assign the grievance to some other official whom he thinks can resolve the issue by assigning FORWARDED status to the grievance. The new person will receive the mail notification and will follow the same process.",

      "The official can take necessary steps to resolve the grievance and assign SETTLED status to the allotted grievance.",
      "Once a SETTLED status is assigned, the student or call center executive is informed via mail notification. The student can provide SATISFIED/ NOT SATISFIED status to the SETTLED grievance. In case the grievance was registered by call center executive, he calls up the concerned student to take feedback and allot the status.",
      "In case SATISFIED status is assigned, Admin simply puts up a CLOSED status to the grievance. In case of NOT SATISFIED status, Admin allots the grievance to concerned official by putting up a RE-OPEN status.",
    ],
  },

  guidelines: {
    title: "General Guidelines",
    purposeText:
      "This grievance redressal system is implemented in order to reduce paper work and wait time for complaint resolving and at the same time bring transparency in the entire system of grievance handling. To maintain the end objectives and decorum, certain guidelines need to be taken care of by all the related stakeholders while registering, assigning and resolving grievances-",

    objectivesTitle: "Constitution of SC/ST Welfare Committee 2021-22.",
    objectivesList: [
      "Student should register a grievance only when he/she is not getting a response from the concerned authorities/persons at the department/administration level.",
      "Personal issues between student-student should be avoided unless they turn into instances of harassment or other such disciplinary cases.",
      "All day-to-day working-related matters should be resolved preferably through personal interactions with concerned faculty/staff/officials.",
      "Students should properly describe the problem/issue faced by him/her while registering the grievance.",
      "Students should never use obscene language or comments while registering a grievance or providing feedback. Strict action will be taken in case any student is found involved in any such practice.",
      "Student should ensure timely feedback so that proper closure or remedial action can be taken.",
      "On registering the grievance via call center, provide all the information required by the executive as all details are kept confidential.",
      "Arguments/comments/use of derogatory language with the executive should be avoided as this can lead to serious disciplinary actions.",
      "The system should not be used to get information or inquiry purposes.",
      "The system is meant to handle individual grievances only.",
      "The system is not intended to resolve personal/family-related issues.",
    ],
  },
};

export const processFlowCall = {
  registeringGrievance: {
    title: "For Registering Grievance",
    purposeText1:
      "Under the grievance redressal system, the student is provided a mechanism to get his/her problems/issues/complaints resolved in an effective and speedy way. They have an option of calling up the official number of Students’ Grievance Cell and get the complaints registered. The process is very simple and the Students’ Grievance Cell member needs to just capture basic details of student and register the grievance by selecting the type and putting in a description of the issue faced by the student.",
    purposeText2:
      "Once the grievance is raised by Students’ Grievance Cell official, Admin allots it to the concerned official. When the grievance is resolved, Students’ Grievance Cell official gets a mail notification and is required to take feedback from the student, depending upon which the grievance is either closed or re-opened. The Students’ Grievance Cell member has to follow the following steps to register the grievance:",

    objectivesList: [
      "Access Student Portal or Campus Community by visiting SRMU Website and selecting Students in LOGIN tab or going through the ERP link directly",
      "Provide your credentials and click on Sign In",
      "Click on NavBar present at right most corner at top of Home Page",
      "A menu opens up, click on Navigator",
      "Click on Record Grievances",
      "A search screen opens up. Select the Add a New Value tab",
      "A screen comes up showing Type and Description fields under Grievance tab. On top select radio button Other. Take down the Name, contact number and ERP ID of complainant",
      "Select the Type by clicking on lookup and put the details of issue under Description box. The Status is by default set as APPEALED. Click on Save",
      "A grievance id is generated and student grievance is registered and sent to admin for further working",
    ],
  },

  takingFeedback: {
    title: "For Taking Feedback",
    purposeText1:
      "The Students’ Grievance Cell member has to call up student and take the following steps to take feedback once he receives mail notification stating that a particular grievance raised by him has been settle",

    objectivesList: [
      "Access Student Portal or Campus Community by visiting SRMU Website and selecting Students in LOGIN tab or going through the ERP link directly",
      "Provide your credentials and click on Sign In",
      "Click on NavBar present at right most corner at top of Home Page",
      "A menu opens up, click on Navigator",
      "Click on Record Grievances",
      "A search screen opens up. Put the ID of settled grievance in the Grievance ID box and click on Search",
      "Two tabs, Grievance and Grievance Resolution are visible on the screen that comes up",
      "Check the Resolution Comments under Grievance Resolution tab",
    ],
  },
};

export const processFlowStudent = {
  registeringGrievance: {
    title: "Registering a Grievance",
    purposeText1:
      "The student is provided a mechanism to get his problems/issues/complaints resolved in an effective and speedy way. He has an option of directly registering the grievance from his own login. The process is very simple and the student is just required to select the grievance type and put in a description while registering his grievance.",
    purposeText2:
      "Once the grievance is raised by the student, admin allots it to the concerned official. Once the grievance is resolved, the student gets a mail notification and is required to give feedback depending upon which the grievance is either closed or re-opened. The student has to follow the below steps to register the grievance:",

    objectivesList: [
      "Access Student Portal or Campus Community by visiting SRMU Website and selecting Students in LOGIN tab or going through the ERP link directly",
      "Provide your credentials and click on Sign In",
      "Click on NavBar present at right most corner at top of Home Page",
      "A menu opens up, click on Navigator",
      "Click on Record Grievances",
      "A search screen opens up. Select the Add a New Value tab",
      "A screen comes up showing Type and Description fields under Grievance tab",
      "Select the Type by clicking on lookup and put the details of issue under Description box. The Status is by default set as APPEALED. Click on Save",
      "A grievance id is generated and your grievance is registered and sent to admin for further working",
    ],
  },

  takingFeedback: {
    title: "Providing Feedback",
    purposeText1: "The student has to take the following steps to give feedback once he receives a mail notification stating that the grievance raised by him has been settled:",

    objectivesList: [
      "Access Student Portal or Campus Community by visiting SRMU Website and selecting Students in LOGIN tab or going through the ERP link directly",
      "Provide your credentials and click on Sign In",
      "Click on NavBar present at right most corner at top of Home Page",
      "A menu opens up, click on Navigator",
      "Click on Record Grievances",
      "A search screen opens up. Put the ID of settled grievance in the Grievance ID box and click on Search",
      "Two tabs, Grievance and Grievance Resolution are visible on the screen that comes up",
      "Check the Resolution Comments under Grievance Resolution tab",
    ],
    flowimg: flowimg,
  },
};
