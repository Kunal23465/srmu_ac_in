// Programme snapshot supplied with the new finder design. Fees can be refreshed
// through programFees; eligibility and scholarship rules remain locally versioned.
export interface FinderProgram {
  name: string;
  entry: string;
  lastq: string;
  domains: string[];
  duration: string;
  fee: number;
  caution: number;
  link: string;
}

export const PROGRAMS: FinderProgram[] = [
  {
    "name": "Diploma in Civil Engineering",
    "entry": "First Year",
    "lastq": "Class 10",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-civil-engineering"
  },
  {
    "name": "Diploma in Mechanical Engineering (Production)",
    "entry": "First Year",
    "lastq": "Class 10",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-mechanical-engineering-production"
  },
  {
    "name": "Diploma in Mechanical Engineering (Automobile)",
    "entry": "First Year",
    "lastq": "Class 10",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-mechanical-engineering-automobile"
  },
  {
    "name": "Diploma in Electrical Engineering",
    "entry": "First Year",
    "lastq": "Class 10",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-electrical-engineering"
  },
  {
    "name": "Diploma in Computer Science Engineering",
    "entry": "First Year",
    "lastq": "Class 10",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-computer-science-engineering"
  },
  {
    "name": "Diploma in Electronics & Communication Engineering",
    "entry": "First Year",
    "lastq": "Class 10",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-electronics-communication-engineering"
  },
  {
    "name": "Diploma in Civil Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Class 12 OR ITI",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-civil-engineering-lateral-entry"
  },
  {
    "name": "Diploma in Mechanical Engineering (Production) (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Class 12 OR ITI",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-mechanical-engineering-production-lateral-entry"
  },
  {
    "name": "Diploma in Mechanical Engineering (Automobile) (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Class 12 OR ITI",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-mechanical-engineering-automobile-lateral-entry"
  },
  {
    "name": "Diploma in Electrical Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Class 12 OR ITI",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-electrical-engineering-lateral-entry"
  },
  {
    "name": "Diploma in Computer Science Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Class 12 OR ITI",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-computer-science-engineering-lateral-entry"
  },
  {
    "name": "Diploma in Electronics & Communication Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Class 12 OR ITI",
    "domains": [
      "Polytechnic",
      "Diploma"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/diploma-electronics-communication-engineering-lateral-entry"
  },
  {
    "name": "B.Sc.(Hons.) in Agriculture",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Agriculture"
    ],
    "duration": "4 Years",
    "fee": 62100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-agriculture"
  },
  {
    "name": "B.Pharma. (Bachelor of Pharmacy)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Pharmacy"
    ],
    "duration": "4 Years",
    "fee": 145100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bpharm-bachelor-of-pharmacy"
  },
  {
    "name": "D.Pharma. (Diploma in Pharmacy)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Pharmacy"
    ],
    "duration": "2 Years",
    "fee": 92100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/d-pharm-diploma-in-pharmacy"
  },
  {
    "name": "B.Sc.(Hons.) in Biotechnology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Bioscience"
    ],
    "duration": "3 Years",
    "fee": 75100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-biotechnology"
  },
  {
    "name": "B.Tech. in Biotechnology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Biotechnology"
    ],
    "duration": "4 Years",
    "fee": 137100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-biotechnology"
  },
  {
    "name": "B.Sc. in Information Technology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Information Technology"
    ],
    "duration": "3 Years",
    "fee": 68100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-information-technology"
  },
  {
    "name": "B.C.A. (Bachelor of Computer Applications)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Application"
    ],
    "duration": "3 Years",
    "fee": 85100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bca-bachelor-of-computer-applications"
  },
  {
    "name": "B.C.A. (Data Science & Artificial Intelligence) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Application",
      "Data Science",
      "Artificial Intelligence"
    ],
    "duration": "3 Years",
    "fee": 110600,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bca-data-science-artificial-intelligence"
  },
  {
    "name": "B.C.A. (Cyber Security) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Application",
      "Cyber Security"
    ],
    "duration": "3 Years",
    "fee": 110600,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bca-cyber-security"
  },
  {
    "name": "B.C.A. (Artificial Intelligence & Machine Learning)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Application",
      "Artificial Intelligence & Machine Learning"
    ],
    "duration": "3 Years",
    "fee": 110600,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bca-artificial-intelligence-machine-learning"
  },
  {
    "name": "B.Tech. in Computer Science Engineering",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Science Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-computer-science-engineering"
  },
  {
    "name": "B.Tech. in CSE (Cyber Security) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Science Engineering",
      "Cyber Security",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 170100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-cse-cyber-security"
  },
  {
    "name": "B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Science Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 170100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-cse-data-science-artificial-intelligence"
  },
  {
    "name": "B.Tech. in CSE (Artificial Intelligence & Machine Learning)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Science Engineering",
      "Artificial Intelligence & Machine Learning",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 170100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-cse-artificial-intelligence-machine-learning"
  },
  {
    "name": "B.B.A. (Bachelor of Business Administration)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Management"
    ],
    "duration": "3 Years",
    "fee": 90100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bba-bachelor-of-business-administration"
  },
  {
    "name": "B.B.A. (Business Analytics) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Management",
      "Business Analytics"
    ],
    "duration": "3 Years",
    "fee": 110600,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bba-business-analytics"
  },
  {
    "name": "B.Com. (Bachelor of Commerce)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Commerce"
    ],
    "duration": "3 Years",
    "fee": 30100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-com"
  },
  {
    "name": "B.B.A. (AI Augmented Fintech) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Management",
      "Artificial Intelligence",
      "Fintech"
    ],
    "duration": "3 Years",
    "fee": 110600,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bba-ai-augmented-fintech"
  },
  {
    "name": "B.Com.(Hons.) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Commerce"
    ],
    "duration": "3 Years",
    "fee": 87100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-com-hons-with-l-t"
  },
  {
    "name": "B.A.(Hons.) in Economics",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Economics"
    ],
    "duration": "3 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-a-hons-economics"
  },
  {
    "name": "B.Tech. in Civil Engineering with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Civil Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-civil-engineering"
  },
  {
    "name": "B.Tech. in Mechanical Engineering with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Mechanical Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-me-ev-engineering"
  },
  {
    "name": "B.Sc.(Hons.) in Physics",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Natural Science",
      "Physics"
    ],
    "duration": "3 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-physics"
  },
  {
    "name": "B.Sc.(Hons.) in Chemistry",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Natural Science",
      "Chemistry"
    ],
    "duration": "3 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-chemistry"
  },
  {
    "name": "B.Sc.(Hons.) in Mathematics",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Natural Science",
      "Mathematics"
    ],
    "duration": "3 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-mathematics"
  },
  {
    "name": "B.Sc. in Mathematics with Data Science",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Natural Science",
      "Mathematics",
      "Data Science"
    ],
    "duration": "3 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bsc-mathematics-with-data-science"
  },
  {
    "name": "B.Sc.(Hons.) in Food Technology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Bioscience",
      "Food Technology"
    ],
    "duration": "3 Years",
    "fee": 62100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-food-technology"
  },
  {
    "name": "B.Sc.(Hons.) in Microbiology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Bioscience",
      "Microbiology"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-microbiology"
  },
  {
    "name": "B.Sc. (Hons.) Nutrition & Dietetics",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Bioscience",
      "Nutrition & Dietetics"
    ],
    "duration": "3 Years",
    "fee": 60100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-sc-hons-nutrition-dietetics"
  },
  {
    "name": "B.A.(Hons.) in English",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Humanities",
      "English"
    ],
    "duration": "3 Years",
    "fee": 32100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-a-hons-english"
  },
  {
    "name": "B.A.(Hons.) in Political Science",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Humanities",
      "Political Science"
    ],
    "duration": "3 Years",
    "fee": 32100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-a-hons-political-science"
  },
  {
    "name": "B.A.(Hons.) in Sociology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Humanities",
      "Sociology"
    ],
    "duration": "3 Years",
    "fee": 32100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-a-hons-sociology"
  },
  {
    "name": "B.A.(Hons.) in Applied Psychology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Humanities",
      "Applied Psychology"
    ],
    "duration": "3 Years",
    "fee": 32100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-a-hons-applied-psychology"
  },
  {
    "name": "B.A. in Journalism & Mass Communication",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Journalism & Mass Comm."
    ],
    "duration": "3 Years",
    "fee": 94100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-a-journalism-mass-communication"
  },
  {
    "name": "B.Tech. in Electronics & Communication Engineering with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electronics & Communication Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ece-ev-engineering"
  },
  {
    "name": "B.Tech. in ME (EV Engineering) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Mechanical Engineering",
      "EV Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-me-ev-engineering"
  },
  {
    "name": "B.Tech. in EE (EV Engineering) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electrical Engineering",
      "EV Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ee-ev-engineering"
  },
  {
    "name": "B.Tech. in ECE (Semiconductor Design) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electronics & Communication Engineering",
      "Semiconductor Design",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/btech-ece-semiconductor-design"
  },
  {
    "name": "B.Tech. in ECE (EV Engineering) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electronics & Communication Engineering",
      "EV Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ece-ev-engineering"
  },
  {
    "name": "B.Tech. in Biotechnology (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Biotechnology"
    ],
    "duration": "3 Years",
    "fee": 137100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-biotechnology-lateral-entry"
  },
  {
    "name": "B.Tech. in EE (EV Engineering) (Lateral Entry) with L&T",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Electrical Engineering",
      "EV Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ee-ev-engineering-lateral-entry"
  },
  {
    "name": "B.Tech. in ECE (EV Engineering) (Lateral Entry) with L&T",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Electronics & Communication Engineering",
      "EV Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ece-ev-engineering-lateral-entry"
  },
  {
    "name": "Bachelor in Medical Laboratory Science (BMLS)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Allied Health Science",
      "Paramedical"
    ],
    "duration": "4 Years",
    "fee": 100100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bachelor-of-medical-laboratory-sciences-bmls"
  },
  {
    "name": "Bachelor in Operation Theatre Technology (B.AOTT)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Allied Health Science",
      "Paramedical"
    ],
    "duration": "4 Years",
    "fee": 100100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bachelor-of-anaesthesia-and-operation-theatre-technology-b-aott"
  },
  {
    "name": "Bachelor in Medical Radiologic and Imaging Technology (BMRIT)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Allied Health Science",
      "Paramedical"
    ],
    "duration": "4 Years",
    "fee": 100100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bachelor-of-medical-radiology-imaging-technology-bmrit"
  },
  {
    "name": "Bachelor of Optometry",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Allied Health Science",
      "Paramedical"
    ],
    "duration": "5 Years",
    "fee": 100100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bachelor-of-optometry"
  },
  {
    "name": "B.Tech. in Computer Science Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Computer Science Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-computer-science-engineering-lateral-entry"
  },
  {
    "name": "B.Tech. in Mechanical Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Mechanical Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-me-ev-engineering-lateral-entry"
  },
  {
    "name": "B.Tech. in Civil Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Civil Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-civil-engineering-lateral-entry"
  },
  {
    "name": "B.Tech. in Electrical Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ee-ev-engineering-lateral-entry"
  },
  {
    "name": "B.Tech. in ME (EV Engineering) (Lateral Entry) with L&T",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Mechanical Engineering",
      "EV Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-me-ev-engineering-lateral-entry"
  },
  {
    "name": "B.Tech. in Electronics & Communication Engineering (Lateral Entry)",
    "entry": "Lateral/ Second Year",
    "lastq": "Diploma",
    "domains": [
      "Electronics & Communication Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ece-ev-engineering-lateral-entry"
  },
  {
    "name": "B.Ed. (Bachelor of Education)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Education"
    ],
    "duration": "2 Years",
    "fee": 62100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bed-bachelor-of-education"
  },
  {
    "name": "B.Tech. in Electrical Engineering with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "4 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ee-ev-engineering"
  },
  {
    "name": "LL.B. (Bachelor of Law)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Law"
    ],
    "duration": "3 Years",
    "fee": 57100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/llb"
  },
  {
    "name": "B.Tech. in ME + M.B.A.",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Mechanical Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-me-mba"
  },
  {
    "name": "B.Tech. + M.Tech. in Mechanical Engineering",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Mechanical Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-m-tech-me"
  },
  {
    "name": "B.Tech. in ECE + M.B.A.",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electronics & Communication Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ece-mba"
  },
  {
    "name": "B.Tech. + M.Tech. in Electronics & Communication Engineering",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electronics & Communication Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-m-tech-ece"
  },
  {
    "name": "B.A. + LL.B. (Hons.)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Law"
    ],
    "duration": "5 Years",
    "fee": 100100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/ba-llb-hons"
  },
  {
    "name": "B.B.A. + LL.B. (Hons.)",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Law"
    ],
    "duration": "5 Years",
    "fee": 90100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bba-llb-hons"
  },
  {
    "name": "B.Tech. + M.Tech.  in Biotechnology",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Biotechnology",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 137100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-m-tech-biotechnology"
  },
  {
    "name": "B.Tech. in CSE + M.B.A.",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Science Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-cse-mba"
  },
  {
    "name": "B.Tech. + M.Tech. in Computer Science Engineering",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Computer Science Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-m-tech-cse"
  },
  {
    "name": "B.Tech. in CE + M.B.A.",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Civil Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ce-mba"
  },
  {
    "name": "B.Tech. + M.Tech. in Civil Engineering",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Civil Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-m-tech-ce"
  },
  {
    "name": "B.Tech. + M.Tech. in Electrical Engineering",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electrical Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-m-tech-ee"
  },
  {
    "name": "B.Tech in EE + M.B.A.",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Electrical Engineering",
      "Engineering",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 152100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-ee-mba"
  },
  {
    "name": "B.Tech. in Biotechnology + M.B.A.",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Biotechnology",
      "Integrated Program"
    ],
    "duration": "5 Years",
    "fee": 137100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-biotechnology-mba"
  },
  {
    "name": "M.Sc. in Physics",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Natural Science",
      "Physics"
    ],
    "duration": "2 Years",
    "fee": 47100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-physics"
  },
  {
    "name": "M.Sc. in Chemistry",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Natural Science",
      "Chemistry"
    ],
    "duration": "2 Years",
    "fee": 47100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-chemistry"
  },
  {
    "name": "M.Sc. in Mathematics",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Natural Science",
      "Mathematics"
    ],
    "duration": "2 Years",
    "fee": 47100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-mathematics"
  },
  {
    "name": "M.A. in English",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Humanities",
      "English"
    ],
    "duration": "2 Years",
    "fee": 37100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-a-english"
  },
  {
    "name": "M.A. in Psychology",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Humanities",
      "Psychology"
    ],
    "duration": "2 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-a-psychology"
  },
  {
    "name": "M.A. in Political Science",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Humanities",
      "Political Science"
    ],
    "duration": "2 Years",
    "fee": 37100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-a-political-science"
  },
  {
    "name": "M.A. in Sociology",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Humanities",
      "Sociology"
    ],
    "duration": "2 Years",
    "fee": 37100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-a-sociology"
  },
  {
    "name": "M.P.H. (Master in Public Health)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Humanities",
      "Public Health"
    ],
    "duration": "2 Years",
    "fee": 37100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/mph-master-in-public-health"
  },
  {
    "name": "M.Sc. in Biotechnology",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Bioscience"
    ],
    "duration": "2 Years",
    "fee": 84100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-biotechnology"
  },
  {
    "name": "M.Tech. in Biotechnology",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Biotechnology"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-biotechnology"
  },
  {
    "name": "M.B.A. (Master of Business Administration)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Management"
    ],
    "duration": "2 Years",
    "fee": 145100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/mba-master-of-business-administration"
  },
  {
    "name": "M.B.A. (Business Analytics) with L&T",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Management",
      "Business Analytics"
    ],
    "duration": "2 Years",
    "fee": 160100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/mba-business-analytics"
  },
  {
    "name": "M.B.A. (AI Augmented Fintech) with L&T",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Management",
      "Artificial Intelligence",
      "Fintech"
    ],
    "duration": "2 Years",
    "fee": 160100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/mba-ai-augmented-fintech"
  },
  {
    "name": "M.B.A. in Healthcare & Hospital Management",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Management",
      "Healthcare & Hospital Management"
    ],
    "duration": "2 Years",
    "fee": 150100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-b-a-healthcare-hospital-management"
  },
  {
    "name": "M.B.A. in Agribusiness Management",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Agriculture",
      "Management"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/mba-abm"
  },
  {
    "name": "LL.M. in Criminal & Security Law",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Law"
    ],
    "duration": "1 Year",
    "fee": 81500,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/ll-m-criminal-security-law"
  },
  {
    "name": "LL.M. in Corporate & Commercial Law",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Law"
    ],
    "duration": "1 Year",
    "fee": 81500,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/ll-m-corporate-commercial-law"
  },
  {
    "name": "LL.M. in Constitutional & Administrative Law",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Law"
    ],
    "duration": "1 Year",
    "fee": 81500,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/ll-m-constitutional-administrative-law"
  },
  {
    "name": "LL.M. in International & Comparative Law",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Law"
    ],
    "duration": "1 Year",
    "fee": 81500,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/ll-m-international-comparative-law"
  },
  {
    "name": "LL.M.",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Law"
    ],
    "duration": "2 Years",
    "fee": 81500,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/master-of-laws"
  },
  {
    "name": "M.A. in Journalism & Mass Communication",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Journalism & Mass Comm."
    ],
    "duration": "2 Years",
    "fee": 62100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-a-journalism-mass-communication"
  },
  {
    "name": "M. Tech. in Environmental Engineering",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Environmental Engineering",
      "Civil Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-environmental-engineering"
  },
  {
    "name": "M.Tech. in Structural Engineering",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Structural Engineering",
      "Civil Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-structural-engineering"
  },
  {
    "name": "M.Tech. in Environmental Engineering (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Environmental Engineering",
      "Civil Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-environmental-engineering-part-time"
  },
  {
    "name": "M.Tech. in Structural Engineering (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Structural Engineering",
      "Civil Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-structural-engineering-part-time"
  },
  {
    "name": "M.Tech. in Production & Industrial Engineering",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Production & Industrial Engineering",
      "Mechanical Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-production-industrial-engineering"
  },
  {
    "name": "M.Tech. in Production & Industrial Engineering (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Production & Industrial Engineering",
      "Mechanical Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-production-industrial-engineering-part-time"
  },
  {
    "name": "M.Tech. in Computer Science Engineering",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Computer Science Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-computer-science-engineering"
  },
  {
    "name": "M.Tech. in Computer Science Engineering (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Computer Science Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-computer-science-engineering-part-time"
  },
  {
    "name": "M.Tech. in Digital Communication",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Digital Communication",
      "Electronics & Communication Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-digital-communication"
  },
  {
    "name": "M.Tech. in Digital Communication (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Digital Communication",
      "Electronics & Communication Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-digital-communication-part-time"
  },
  {
    "name": "M.Tech. in Electric Vehicle Technology",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "EV Engineering",
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-electric-vehicle-technology"
  },
  {
    "name": "M.Tech. in Electric Vehicle Technology (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "EV Engineering",
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-electric-vehicle-technology-part-time"
  },
  {
    "name": "M.Tech. in Data Science",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Computer Science Engineering",
      "Data Science",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-data-science"
  },
  {
    "name": "M.C.A. (Master of Computer Application)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Computer Application"
    ],
    "duration": "2 Years",
    "fee": 109100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/mca"
  },
  {
    "name": "M.A. in Education",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Education"
    ],
    "duration": "2 Years",
    "fee": 37100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-a-education"
  },
  {
    "name": "M.Sc. (Horticulture) in Fruit Science",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Agriculture",
      "Horticulture"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/msc-horticulture-fruit-science"
  },
  {
    "name": "M.Sc. (Horticulture) in Vegetable Science",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Agriculture",
      "Horticulture"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/msc-horticulture-veg-sc"
  },
  {
    "name": "M.Sc in Statistics",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Natural Science",
      "Mathematics",
      "Statistics"
    ],
    "duration": "2 Years",
    "fee": 47100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-statistics"
  },
  {
    "name": "M.Tech. in Power Electronics & Electric Drives",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Power Electronics & Electric Drives",
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-power-electronics-electric-drives1"
  },
  {
    "name": "M.Tech. in Power Electronics & Electric Drives (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Power Electronics & Electric Drives",
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-power-electronics-electric-drives-part-time"
  },
  {
    "name": "M. Tech. in Renewable Energy and Energy Audit",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Renewable Energy and Energy Audit",
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-renewable-energy-energy-audit"
  },
  {
    "name": "M. Tech. in Renewable Energy and Energy Audit (Part Time)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Renewable Energy and Energy Audit",
      "Electrical Engineering",
      "Engineering"
    ],
    "duration": "3 Years",
    "fee": 69000,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-renewable-energy-energy-audit-part-time"
  },
  {
    "name": "M.Sc. (Environmental Science)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Environmental Science"
    ],
    "duration": "2 Years",
    "fee": 64100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-environmental-science"
  },
  {
    "name": "B.Tech. in CE (Advanced Practices in Construction) with L&T",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Civil Engineering",
      "Engineering",
      "Advanced Construction Practices"
    ],
    "duration": "4 Years",
    "fee": 146475,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/b-tech-civil-engineering"
  },
  {
    "name": "M.Com. (Master of Commerce)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Commerce"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-com1"
  },
  {
    "name": "M.Sc. Economics",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Economics"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-sc-economics"
  },
  {
    "name": "M.Sc. Agronomy",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Agriculture"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/msc-agronomy"
  },
  {
    "name": "M.Sc. Soil Science & Agricultural Chemistry",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Agriculture"
    ],
    "duration": "2 Years",
    "fee": 50100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/msc-soil-science-agricultural-chemistry"
  },
  {
    "name": "M.B.A. in Leadership & Governance",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Management",
      "Leadership & Governance"
    ],
    "duration": "2 Years",
    "fee": 145100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-b-a-leadership-governance"
  },
  {
    "name": "M.S.W. (Master of Social Work)",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Humanities",
      "Social Work"
    ],
    "duration": "2 Years",
    "fee": 42100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/msw"
  },
  {
    "name": "Bachelor of Physiotherapy",
    "entry": "First Year",
    "lastq": "Class 12",
    "domains": [
      "Allied Health Science",
      "Paramedical"
    ],
    "duration": "5 Years",
    "fee": 100100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/bachelor-in-physiotherapy"
  },
  {
    "name": "M.Tech. in Artificial Intelligence & Machine Learning",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Computer Science Engineering",
      "Engineering",
      "Artificial Intelligence & Machine Learning"
    ],
    "duration": "2 Years",
    "fee": 107100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-tech-artificial-intelligence-machine-learning"
  },
  {
    "name": "M.Pharm in Pharmaceutics",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Pharmacy"
    ],
    "duration": "2 Years",
    "fee": 120100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-pharm-in-pharmaceutics"
  },
  {
    "name": "M.Pharm in Pharmacology",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Pharmacy"
    ],
    "duration": "2 Years",
    "fee": 140100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-pharm-in-pharmacology"
  },
  {
    "name": "M.Pharm in Pharmacognosy",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Pharmacy"
    ],
    "duration": "2 Years",
    "fee": 120100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-pharm-in-pharmacognosy"
  },
  {
    "name": "M.Pharm in Pharmaceutical Chemistry",
    "entry": "First Year",
    "lastq": "Graduate",
    "domains": [
      "Pharmacy"
    ],
    "duration": "2 Years",
    "fee": 120100,
    "caution": 5000,
    "link": "https://srmu.ac.in/program/m-pharm-in-pharmaceutical-chemistry"
  }
];
