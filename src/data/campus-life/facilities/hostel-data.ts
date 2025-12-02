import { customeOverViewType } from "../../../types/home-data-type";

export const hostelOverviewData: customeOverViewType = {
  heading: "Hostel",
  content:
    "University Hostels includes both Gargi Girls Hostel (GGH) and Tygore Boys Hostel (TBH) is a resident Hostel for full-time Graduate, Postgraduate students and also for research scholars pursuing Ph.D. from Shri Ramswaroop Memorial University.",
  counterSibling:
    "It has provision for accommodating a large number of students from all states of India and abroad. It provides a comfortable, congenial and homely environment to the residents. Elegantly designed and surrounded by greenery, both the hostel has 6 floors, 12 wings consisting of 216 rooms.",
};


export interface HostelType {
  title?: string;
  listItems?: string[];
  description?: string;
}

export const hostelTermsData: HostelType[] = [
  {
    title: "Committee",
    listItems: [
      "Anti-Ragging Committee",
      "Discipline Committee",
      "Mess Committee",
      "Library Committee",
      "Sport Committee",
      "Cultural Committee",
      "Maintenance Committee",
      "Gymnasium Committee",
      "Common Room Committee",
    ],
    description: `University Hostels includes both Gargi Girls Hostel (GGH) and Tygore Boys Hostel (TBH) is a resident Hostel for full-time Graduate, Postgraduate students and also for research scholars pursuing Ph.D. from Shri Ramswaroop Memorial University.\n
It has provision for accommodating a large number of students from all states of India and abroad. It provides a comfortable, congenial and homely environment to the residents. Elegantly designed and surrounded by greenery, both the hostel has 6 floors, 12 wings consisting of 216 rooms.\n
The common room fitted with LCD television and DTH connection for recreational activities and reading room with a library facility for mental fitness while outdoor & indoor sports facility along with a fully equipped gymnasium for physical fitness. Dining Hall is maintained hygienically for students to enjoy their meals and water cooler fitted with water purifier is available in each wing of each floor.\
There is a designated well-maintained visiting area for the visitors of the residents while there are well furnished guest rooms available for the comfortable overnight stay of the resident’s guest.\n
Modern amenities such as 24 hours power back up, Medical aid, Wi-Fi facility, ATM, Bank Facility. For security purpose a Police outpost and CCTV Cameras monitor security in all peripheries along with Biometric attendance facility helps in maintaining secure campus and also for prompt action if need arises. As University is located in Barabanki hence, a university bus exclusively for hostel inmates is available on Sunday for outing with fix timing to make their outing comfortable as well as secure.\
Hostel Management is twofold—one is from University side wherein Chief Warden is the head of all the hostels while Wardens are the administrative head of the Hostel. For internal administration and day-to-day discipline and medical issues, the Resident Warden, Medical practitioner, Office Executive, and Office attendants assist the Warden.\n
Second is student side whose participation is ensured through various committees wherein they decide the most crucial issue of finalization of menu and also there is mess committee which has right to take surprise visit into store and check the quality of products used for mess purpose.\n
For smooth functioning, the hostels are netted with following committees.`,
  },
];
