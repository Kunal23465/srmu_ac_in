import event1Small from "../../assets/new-home/events/optimized/1-480.webp";
import event1 from "../../assets/new-home/events/optimized/1-960.webp";
import event2Small from "../../assets/new-home/events/optimized/2-480.webp";
import event2 from "../../assets/new-home/events/optimized/2-960.webp";
import event3Small from "../../assets/new-home/events/optimized/3-480.webp";
import event3 from "../../assets/new-home/events/optimized/3-960.webp";
import event4Small from "../../assets/new-home/events/optimized/4-480.webp";
import event4 from "../../assets/new-home/events/optimized/4-960.webp";
import eventcard1 from "../../assets/new-home/events/hours.webp";
import eventcard1Small from "../../assets/new-home/events/hours-small.webp";
// import eventcard2 from "../../assets/new-home/events/algo-big.webp";
import LegalStudies from "../../assets/new-home/events/legal_studies.jpeg";
// import eventcard2Small from "../../assets/new-home/events/algo-small.webp";
import alumini_connect_desktop from "../../assets/new-home/events/alumini-connect-desktop.webp";
import alumini_connect_mobile from "../../assets/new-home/events/alumini-connect-mobile.webp";
import alumini1_desktop from "../../assets/new-home/events/alumini1-desktop.webp";
import alumini1_mobile from "../../assets/new-home/events/alumini1-mobile.webp";
import alumini2_desktop from "../../assets/new-home/events/alumini2-desktop.webp";
import alumini2_mobile from "../../assets/new-home/events/alumini2-mobile.webp";
import hostFinancial from "../../assets/new-home/events/host-financial-new.webp";
import fordesk from "../../assets/images/home/events/for-desk.jpeg";
import forMobile from "../../assets/images/home/events/for-mobile.png";
import SRMUConductsDays from "../../assets/new-home/events/SRMU-Conducts-Days.webp";
import SRMUWelcomes from "../../assets/new-home/events/dikshant-1.jpeg";
import CyberCrime from "../../assets/new-home/events/cyberCrime.jpeg";
import Batwara from "../../assets/new-home/events/batwara1.webp";
import SpaceEconomy from "../../assets/new-home/events/SpaceEconomy.jpg";
import IBSCollaboration from "../../assets/new-home/events/IBSCollaboration.jpg";
import CricketStars from "../../assets/new-home/events/CricketStars-1.jpg";
import aluminiTalks from "../../assets/new-home/events/alumni_talk_law.webp";
import financialAwareness from "../../assets/new-home/events/Financial-Awareness.webp";
import memoryManagement from "../../assets/new-home/events/Memory-Management.webp";
import villageVisit from "../../assets/new-home/events/Legal-Aid-Cell-Institute-of-Legal-Studies-organised-drive-at-srmu.webp";
import expressionsOrganized from "../../assets/new-home/events/Expressions_Organized.webp";




import constitutionalSafeguards from "../../assets/new-home/events/News.webp";


export type EventItem = {
  id: string | number;
  image: string;
  imageSmall: string;
  date: string;
  title: string;
  excerpt?: string;
  description?: string;
  isUpcoming?: boolean;
  isRedirect?: boolean;
  redirectTo?: string;
  // theme token: used by UI to pick correct bg classes
  token?: "accent" | "primary" | "neutral";
};

const eventsData: EventItem[] = [
  {
    id: 24,
    isRedirect: false,
    image: constitutionalSafeguards,
    imageSmall: constitutionalSafeguards,
    date: "September 18th, 2026",
    title: `Guest Lecture on “Constitutional Safeguards in the Criminal Justice System” Organized at Institute of Legal Studies, SRMU`,
    description: `
The <strong>Institute of Legal Studies, Shri Ramswaroop Memorial University (SRMU)</strong>, organized a guest lecture on <strong>“Constitutional Safeguards in the Criminal Justice System”</strong> on <strong>18 September 2026</strong> at <strong>11:00 AM</strong>. The lecture was organized by <strong>FGWIC, Institute of Legal Studies</strong>, and was conducted online through <strong>Google Meet</strong>.

<br/><strong>Guest Speaker</strong><br/>

The session was delivered by <strong>Mr. Ali Bin Saif, Advocate, Supreme Court of India</strong>, who provided valuable insights into the constitutional framework governing the criminal justice system in India.

<br/><strong>Mode of Lecture</strong><br/>

The lecture was conducted through the <strong>Google Meet online platform</strong>, providing students and faculty members with an opportunity to participate in the session and gain valuable knowledge from the guest speaker.

<br/><strong>Key Areas Discussed</strong><br/>

The lecture focused on the important role of the <strong>Constitution of India</strong> in protecting the rights and liberties of individuals involved in criminal proceedings. Key constitutional principles discussed during the session included <strong>equality before law, protection of life and personal liberty, safeguards against arbitrary arrest and detention, the right to a fair procedure, protection against self-incrimination, and access to justice</strong>.

<br/><strong>Constitutional Safeguards in Criminal Justice</strong><br/>

The session emphasized the importance of maintaining a balance between the powers of <strong>law-enforcement agencies and the judiciary</strong> while ensuring the fundamental rights of accused persons and other stakeholders in the criminal justice process. The discussion highlighted how constitutional provisions and judicial principles work together to promote <strong>fairness, due process, accountability, and protection of individual rights</strong>.

<br/><strong>Impact of the Initiative</strong><br/>

The guest lecture provided students with a deeper understanding of the <strong>constitutional safeguards governing the criminal justice system</strong> and enhanced their awareness of fundamental rights and legal procedures. The session served as a valuable academic platform for students to connect constitutional principles with their practical application in the criminal justice process.
`,
  },

  {
    id: 23,
    isRedirect: false,
    image: expressionsOrganized,
    imageSmall: expressionsOrganized,
    date: "September 14th - 15th, 2026",
    title: `Abhivyakti - A Celebration of Expressions Organized at SRMU, Institute of Legal Studies`,
    description: `
The <strong>Institute of Legal Studies, Shri Ramswaroop Memorial University (SRMU)</strong>, organized a two-day event, <strong>"Abhivyakti - A Celebration of Expressions,"</strong> on <strong>14 - 15 September 2026</strong> to commemorate <strong>National Hindi Day</strong> and provide students with a platform to showcase their creativity, communication skills, and talent.

<br/><strong>Creative and Intellectual Competitions</strong><br/>

The event featured various <strong>creative and intellectual competitions</strong>, including <strong>debate, speech, story writing, essay writing, and meme-making.</strong> Students participated enthusiastically and shared their ideas on social, academic, and contemporary issues, demonstrating creativity, critical thinking, communication skills, and confidence.

<br/><strong>Special Guest</strong><br/>

The event was graced by <strong>Mr. Ved Prakash, Additional Commissioner, U.P. Sales Tax (Retired)</strong>, whose presence encouraged and motivated students to participate actively and express their ideas with confidence.

<br/><strong>Program Guidance</strong><br/>

The program was organized under the guidance of <strong>Hon’ble Chancellor Engr. Pankaj Agrawal, Pro-Chancellor Engr. Pooja Agrawal, Vice-Chancellor Prof. (Dr.) Vijay Tiwari, and Registrar Dr. Hemendra Sharma</strong>, under the direction of <strong>Prof. (Dr.) Narendra Bahadur Singh, Director, Institute of Legal Studies</strong>.

<br/><strong>Program Coordination</strong><br/>

The program was conducted by <strong>Dr. Shruti Sharma</strong>, with active participation and support from faculty members and students.

<br/><strong>Impact of the Initiative</strong><br/>

<strong>“Abhivyakti”</strong> provided students with a meaningful platform to recognize their talents, develop <strong>creative and independent thinking</strong>, and strengthen their <strong>communication and self-expression skills</strong>.

The event reflected the university’s commitment to <strong>student development, creativity, intellectual growth, and effective communication</strong>.
`,
  },

  {
    id: 22,
    isRedirect: false,
    image: villageVisit,
    imageSmall: villageVisit,
    date: "September 10th, 2026",
    title: `Village Visit in Mati Organized by Legal Aid Cell, ILS, SRMU`,
    description: `
The <strong>Legal Aid Cell, Institute of Legal Studies (ILS), Shri Ramswaroop Memorial University (SRMU)</strong>, organized a village visit to <strong>Mati</strong> as part of its community outreach and legal awareness initiatives.

<br/><strong>Community Outreach Activity</strong><br/>

As part of the visit, students conducted a <strong>Nukkad Natak on “Children’s Right to Education”</strong>, highlighting the importance of education as a fundamental right and creating awareness among the local community.

<br/><strong>Student Engagement</strong><br/>

The activity provided students with an opportunity to <strong>engage directly with the community</strong> and promote awareness about important social and legal issues.

<br/><strong>Village Visit Details</strong><br/>

<strong>Event:</strong> Village Visit in Mati<br/>
<strong>Organized by:</strong> Legal Aid Cell, Institute of Legal Studies (ILS), SRMU<br/>
<strong>Date:</strong> 10 September 2026<br/>
<strong>Activity:</strong> Nukkad Natak on “Children’s Right to Education”

<br/><strong>Impact of the Initiative</strong><br/>

The Nukkad Natak and village outreach activity encouraged <strong>meaningful interaction with residents</strong> and helped students understand the role of legal education in creating social awareness.

The event reflects the university’s commitment to <strong>community engagement, legal awareness, and social responsibility</strong>.
`,
  },

  //   {
  //     id: 21,
  //     isRedirect: false,
  //     image: memoryManagement,
  //     imageSmall: memoryManagement,
  //     date: "September 3rd, 2026",
  //     title: `Guest Lecture on Memory Management & Mnemonics Organized at IMCE`,
  //     description: `
  // The <strong>Faculty of Commerce & Economics, Institute of Management, Commerce and Economics (IMCE), Shri Ramswaroop Memorial University</strong>, is organizing an insightful guest lecture on <strong>“Forget Forgetting: Memory Management Session - About Mnemonics.”</strong>

  // <br/><strong>About the Session</strong><br/>

  // The session is designed to introduce students to <strong>effective memory management and mnemonic techniques</strong> for improving retention, recall, and developing smarter learning strategies.

  // <br/><strong>Guest Speaker</strong><br/>

  // The session will feature <strong>Dr. Anil Lamba</strong> as the guest speaker, who will share valuable insights into memory management and the effective use of mnemonic techniques.

  // <br/><strong>Session Details</strong><br/>

  // <strong>Date:</strong> 03 September 2026<br/>
  // <strong>Time:</strong> 10:30 AM onwards<br/>
  // <strong>Venue:</strong> B1-007

  // <br/><strong>Who Can Attend</strong><br/>

  // The session is specially designed for students of <strong>B.Com (NEP & Hons.) and B.A. (H) 2nd & 3rd Year</strong>.

  // The guest lecture aims to help students strengthen their memory, improve information retention and recall, and develop smarter and more effective learning strategies.
  // `,
  //   },
  //   {
  //     id: 20,
  //     isRedirect: false,
  //     image: financialAwareness,
  //     imageSmall: financialAwareness,
  //     date: "September 2nd, 2026",
  //     title: `Guest Lecture on Financial Awareness and Smart Financial Planning Organized at IMCE`,
  //     description: `
  // The <strong>Faculty of Commerce & Economics, Institute of Management, Commerce and Economics (IMCE), Shri Ramswaroop Memorial University</strong>, is organizing an insightful guest lecture on <strong>“Building Financial Confidence Through Awareness, Planning, Saving, and Smart Choices.”</strong>

  // <br/><strong>About the Session</strong><br/>

  // The session will provide students with practical insights into <strong>financial planning, saving habits, financial awareness, and making informed financial decisions</strong>.

  // <br/><strong>Guest Speaker</strong><br/>

  // The session will feature <strong>CA Devesh Agarwal</strong> as the guest speaker, who will share valuable insights into financial awareness, planning, saving, and making smart financial choices.

  // <br/><strong>Session Details</strong><br/>

  // <strong>Date:</strong> 02 September 2026<br/>
  // <strong>Time:</strong> 11:30 AM onwards<br/>
  // <strong>Venue:</strong> Mini Auditorium

  // <br/><strong>Who Can Attend</strong><br/>

  // The session is open to students of <strong>B.Com (NEP & Hons.), B.A. (H), and M.Com – All Years</strong>.

  // The guest lecture aims to enhance students' understanding of personal financial management and equip them with practical knowledge to make informed and responsible financial decisions.
  // `,
  //   },
  //   {
  //     id: 19,
  //     isRedirect: false,
  //     image: aluminiTalks,
  //     imageSmall: aluminiTalks,
  //     date: "August 22nd, 2026",
  //     title: `Alumni Talk on Building a Career in Litigation Organized by Institute of Legal Studies`,
  //     description: `
  // The <strong>Institute of Legal Studies, Shri Ramswaroop Memorial University (SRMU), Lucknow-Deva Road, Barabanki</strong>, organized an <strong>Alumni Talk</strong> on <strong>“Building a Career in Litigation: Lessons from Criminal, Service and SARFAESI Practice”</strong> on 22 August 2026 through Google Meet.

  // <br/><strong>About the Session</strong><br/>

  // The session featured <strong>Adv. Sumit Srivastava</strong>, <strong>LLM (CCL), Batch 2020 and LLM Gold Medalist</strong>, as the resource person. Drawing from his professional journey and practical experience, he shared valuable insights into the opportunities, challenges, and realities of building a successful career in litigation.

  // <br/><strong>Key Highlights</strong><br/>

  // The interaction focused particularly on <strong>Criminal, Service and SARFAESI matters</strong>, providing students with a practical understanding of courtroom proceedings, litigation practice, and professional development. The speaker also highlighted the importance of <strong>practical legal knowledge, professional skills, and continuous learning</strong> for aspiring lawyers.

  // The session provided students with an opportunity to interact with an accomplished alumnus and gain first-hand perspectives on pursuing a career in litigation. The insightful discussion encouraged students to connect their academic learning with the practical requirements of the legal profession.
  // `,
  //   },
  // {
  //   id: 18,
  //   isRedirect: false,
  //   image: LegalStudies,
  //   imageSmall: LegalStudies,
  //   date: "August 27th, 2026",
  //   title: `Guest Lecture on Formation of Contracts Organized at the Institute of Legal Studies`,
  //   description: `
  //   The <strong>Institute of Legal Studies</strong> is organizing a special Guest Lecture on <strong>"From Online Shopping to Business Deals: Understanding the Formation of Contracts"</strong> under the aegis of the Institution's Innovation Council (IIC), Ministry of Education.

  //   <br/><strong>Event Details</strong><br/>
  //   <strong>📅 Date:</strong> 27 August 2026<br/>
  //   <strong>⏰ Time:</strong> 10:30 AM onwards<br/>
  //   <strong>📍 Venue:</strong> B1-007, SRMU<br/>
  //   <strong>🎤 Guest Speaker:</strong> Prof. (Dr.) Mohd. Nizam Ashraf Khan<br/>
  //   <strong>🏛️ Affiliation:</strong> IILM University, Greater Noida<br/>
  //   <strong>🏫 Organized By:</strong> Institute of Legal Studies, SRMU

  //   <br/><strong>About the Lecture</strong><br/>
  //   The session will focus on the fundamental principles of contract formation and their practical application in today's digital and commercial environment. Students will explore how contracts are formed in online shopping, e-commerce, and business transactions, with discussions on offer and acceptance, consideration, contractual obligations, and online contracts.

  //   The interactive lecture will also provide students with an opportunity to connect legal theory with real-world examples and interact with the resource person through a question-and-answer session.

  //   The programme is being organized under the guidance of Hon'ble Chancellor Er. Pankaj Agrawal, Pro-Chancellor Er. Pooja Agrawal, and Vice-Chancellor Prof. (Dr.) Vijay Tiwari, and under the direction of Prof. (Dr.) Narendra Bahadur Singh, Director, Institute of Legal Studies.
  // `,
  // },
  {
    id: 17,
    isRedirect: false,
    image: SpaceEconomy,
    imageSmall: SpaceEconomy,
    date: "August 22nd, 2026",
    title: `SRMU to Host University-Wide Open Lecture on India's New Space Economy`,
    description: `
    The <strong>Faculty of Physical Sciences (FoPS), Shri Ramswaroop Memorial University (SRMU)</strong>, is organizing a university-wide open lecture on the occasion of <strong>National Space Day 2026</strong>, aligned with this year's theme, <strong>"India's Space Journey Towards Viksit Bharat 2047."</strong>

    The lecture, titled <strong>"India's Space Revolution: Preparing Students for the New Space Economy,"</strong> will explore the transformation of India's space sector and the growing opportunities emerging for students and young professionals in the new space economy.

    The program will be delivered by <strong>Lalit Kumar Shukla, Assistant Professor, Faculty of Physical Sciences (FoPS)</strong>, who will discuss the evolving landscape of India's space sector and how today's students can prepare themselves to contribute to the country's future space ambitions.

    <br/><strong>Program Details:</strong><br/>

    <strong>Date:</strong> 22 August 2026 (Saturday)<br>
    <strong>Time:</strong> 11:30 AM<br>
    <strong>Venue:</strong> B1-007<br>
    <strong>Keynote Speaker:</strong> Lalit Kumar Shukla, Assistant Professor, FoPS<br>
    <strong>Topic:</strong> India's Space Revolution: Preparing Students for the New Space Economy

    The lecture is open to students, research scholars, faculty members, and staff of the university, providing an opportunity for participants from different academic backgrounds to engage with the rapidly evolving field of space science and technology.

    The program aims to create awareness about India's growing capabilities in the space sector while encouraging students to explore emerging academic, research, and career opportunities associated with the New Space Economy.

    The initiative also reflects SRMU's commitment to promoting interdisciplinary learning and connecting students with emerging areas of science, technology, and national development.

    Faculty members, students, research scholars, and staff are encouraged to participate in the lecture and gain insights into India's space journey and the role that the next generation can play in shaping its future.
  `,
  },
  {
    id: 16,
    isRedirect: false,
    image: IBSCollaboration,
    imageSmall: IBSCollaboration,
    date: "August 22nd, 2026",
    title: `SRMU to Organize Student Development and Faculty Knowledge Sharing Programmes in Collaboration with IBS`,
    description: `
    The <strong>Faculty of Commerce & Economics, Institute of Management, Commerce & Economics (IMCE), Shri Ramswaroop Memorial University (SRMU)</strong>, is organizing a <strong>Student Development Programme (SDP)</strong> and a <strong>Faculty Knowledge Sharing Programme</strong> in collaboration with <strong>IBS</strong> on 22 August 2026 (Saturday).

    The programs have been planned to provide students and faculty members with valuable exposure to emerging technologies, industry-oriented knowledge, and contemporary professional practices.

    <strong>Student Development Programme</strong>

    The Student Development Programme is expected to bring together around 200 final-year students from B.Tech, BBA, and B.Com (Hons.) programmes.

    <strong>Date:</strong> 22 August 2026<br>
    <strong>Time:</strong> 10:00 AM – 11:00 AM<br>
    <strong>Venue:</strong> Mini Auditorium<br>
    <strong>Programs:</strong> B.Tech, BBA & B.Com (Hons.) Final Year<br>
    <strong>Topic:</strong> AI & Generative AI Tools

    The session will focus on introducing students to the growing applications of artificial intelligence and generative AI tools and their relevance in academic, professional, and industry settings.

    <strong>Faculty Knowledge Sharing Programme</strong>

    Following the student session, a Faculty Knowledge Sharing Programme will be organised to facilitate knowledge exchange and strengthen faculty members' understanding of emerging technology applications.

    <strong>Date:</strong> 22 August 2026<br>
    <strong>Time:</strong> 11:00 AM – 12:30 PM<br>
    <strong>Expected Participation:</strong> 50 faculty members<br>
    <strong>Programs:</strong> Management – BBA, B.Com & IoT<br>
    <strong>Topic:</strong> Generative AI & Data Analytics Using Python

    The session will provide faculty members with an opportunity to explore the practical applications of generative AI and Python-based data analytics, enabling them to enhance their academic and professional capabilities.

    The programs are being organized with the objective of promoting continuous learning, technology awareness, and industry-oriented development among both students and faculty members.

    Faculty members have been requested to nominate suitable faculty coordinators and student groups/classes from their respective programs to ensure smooth coordination and active participation.

    The initiative is expected to provide participants with meaningful academic and professional insights from experts associated with IBS while encouraging greater awareness of emerging technologies and their applications in education and industry.

    Through such initiatives, SRMU continues to strengthen opportunities for student development, faculty upskilling, and industry-academia engagement.
  `,
  },
  {
    id: 15,
    isRedirect: false,
    image: CricketStars,
    imageSmall: CricketStars,
    date: "", // no date was provided — update as needed
    title: `SRMU Campus Hosts UP T20 Cricket Stars Swastik Chikara & Kartik Tyagi`,
    description: `
    The excitement of UP T20 came to life at Shri Ramswaroop Memorial University (SRMU) as the <strong>SRMU Sports Club</strong> hosted a meet-and-greet with cricket stars <strong>Swastik Chikara</strong> and <strong>Kartik Tyagi</strong>.

    The event allowed students to interact with the players, engage in conversations around cricket, and experience the energy and excitement of UP T20 up close. The presence of the cricket stars created an engaging sporting atmosphere on campus and brought students closer to the professional cricketing experience.

    Adding to the excitement, students also participated in a <strong>Reel Competition</strong>, capturing their favorite moments from the event and sharing them across social media platforms.

    The competition has added another layer of excitement, with the winning reel to be determined on the basis of the reach generated on social media. Students are therefore encouraged to keep watching, engaging, and supporting their favorite entries as the competition unfolds.

    The event reflected SRMU's efforts to create an active and engaging campus environment where students can connect with sports, athletes, and contemporary sporting experiences beyond the classroom.

    Stay tuned to find out which reel takes the top spot!
  `,
  },
  {
    id: 14,
    isRedirect: false,
    image: CyberCrime,
    imageSmall: CyberCrime,
    date: "August 12th, 2026",
    title: `SRMU Organizes Guest Lecture on Cyber Crime, Prevention, Investigation & Legal Remedies`,
    description: `
    The Institute of Legal Studies, Shri Ramswaroop Memorial University (SRMU), Lucknow-Deva Road, Barabanki, organized a special guest lecture on <strong>“Cyber Crime in Everyday Life: Prevention, Investigation & Legal Remedies”</strong> on 12 August 2026 under the aegis of the <strong>Institution’s Innovation Council (IIC)</strong>, an initiative of the Ministry of Education.

    The program aimed to sensitize students to the growing incidence of cybercrime in everyday life and provide them with practical insights into cybercrime prevention, investigative procedures, and the legal remedies available to victims.

    The session was addressed by <strong>Ms. Titiksha Srivastava, Advocate and Cyber Law Expert</strong>, who provided valuable insights into various forms of cybercrimes, online fraud, cybersecurity, digital evidence, the investigation of cybercrimes, and the legal remedies available to victims. She also highlighted the importance of safe and responsible use of digital platforms and apprised students of the precautions and legal procedures to be followed in cases involving cyber crime.

    The lecture featured an engaging interaction between the expert and the students, who actively participated in the question-and-answer session and raised questions on contemporary cybercrime and cyber law issues. The interaction enabled students to gain a better understanding of the practical dimensions of cyber law and the emerging challenges at the intersection of law and technology.

    The programme was organised under the guidance of <strong>Hon’ble Chancellor Er. Pankaj Agrawal, Pro-Chancellor Er. Pooja Agrawal, Vice-Chancellor Prof. (Dr.) Vijay Tiwari, and Registrar Dr. Hemendra Sharma.</strong>

    The event was conducted under the direction of <strong>Prof. (Dr.) Narendra Bahadur Singh, Director, Institute of Legal Studies</strong>, and coordinated by <strong>Assistant Professor Rajat Saxena, Coordinator, Guest Lecture Committee</strong>. Students and faculty members of the institute participated enthusiastically in the program.

    The guest lecture strengthened students’ awareness of cyber crimes, digital responsibility and cyber security while providing practical exposure to the legal mechanisms available to address cyber-related offences. The initiative also contributed to integrating contemporary technological challenges with legal education and encouraging students to develop a more informed and responsible approach towards the digital world.

    The program was covered by <strong>Assistant Professor Shashi Shukla, Head, Media Committee, Institute of Legal Studies</strong>.
  `,
  },
  {
    id: 13,
    isRedirect: false,
    image: Batwara,
    imageSmall: Batwara,
    date: "August 7th, 2026",
    title: `SRMU to Host Exclusive ‘Batwara 1947’ Star Cast Interaction on 7th August`,
    description: `
    Shri Ramswaroop Memorial University (SRMU) is excited to host the star cast of <strong>Batwara 1947</strong> for an exclusive campus interaction on <strong>7th August 2026</strong>, starting at <strong>11:00 AM</strong> in the <strong>Double Height, Admin Block</strong>. Students will have the unique opportunity to meet the cast, hear behind-the-scenes stories, learn about the making of one of the year's most anticipated films, and participate in an engaging interactive session with the team. The event promises an unforgettable experience, bringing the excitement of cinema directly to the SRMU campus.
  `,
  },
  {
    id: 12,
    // isUpcoming:true,
    isRedirect: true,
    redirectTo: "/convocation2026",
    image: fordesk,
    imageSmall: forMobile,
    date: "July 22, 2026",
    title: "Grand Convocation Ceremony of Shri Ramswaroop Memorial University Concludes: Degrees Awarded to 7,519 Students, Medals to 405",
    description: `
    <p>
      <strong>Lucknow/Barabanki, July 22, 2026:</strong> The Convocation Ceremony of
      <strong>Shri Ramswaroop Memorial University (SRMU)</strong> was held with great grandeur on
      Wednesday at the Mass Auditorium of Indira Gandhi Pratishthan, Gomti Nagar. In this majestic
      ceremony, a total of <strong>7,519 students</strong> were awarded degrees in various programs.
      Additionally, <strong>405 students</strong> were honored with medals for academic excellence,
      including <strong>232 Gold Medals</strong>, <strong>165 Silver Medals</strong>, and
      <strong>8 Chancellor's and Pro-Chancellor's Medals</strong>. The ceremony was graced by the
      presence of Chief Guest <strong>Prof. (Dr.) Bhushan Patwardhan</strong>, Chancellor, Deccan
      College (Deemed to be University), Pune & National Research Professor, Ministry of AYUSH,
      Government of India, and Distinguished Guest <strong>Shri Akhilesh Mishra</strong>, former
      Director General of Indian Council for Cultural Relations and former Ambassador.
    </p>

    <p class="mt-2">
      In the presence of University Chancellor <strong>Er. Pankaj Agarwal</strong>, Pro-Chancellor
      <strong>Er. Pooja Agarwal</strong>, Vice Chancellor <strong>Prof. (Dr.) Vijay Tiwari</strong>,
      Academic Advisor <strong>Arushi Agarwal</strong>, and other dignitaries, the Chancellor's and
      Pro-Chancellor's Medals were conferred, which are the most prestigious institutional honors,
      distinct from the Gold and Silver Medals. These are awarded on the basis of outstanding
      academic achievement, exemplary personality, leadership qualities, and overall excellent
      performance.
    </p>

    <p class="mt-2">
      A special and inspiring highlight of this year was that all eight prestigious medals from the
      sessions 2021-22 to 2024-25 were won by female students. The <strong>Chancellor's Medal</strong>
      was awarded to Aadya Sharma (Session 2024-25, Integrated Bachelor of Business Administration–
      Bachelor of Laws, Hons), Khushi Budhraja (Session 2023-24, Bachelor of Technology–Cloud
      Computing and Artificial Intelligence), Krati Jain (Session 2022-23, Bachelor of Technology–
      Bio-Technology), and Muskan Budhraja (Session 2021-22, Bachelor of Technology–Computer Science
      & Engineering). The <strong>Pro-Chancellor's Medal</strong> was awarded to Praneta Yadav
      (Session 2024-25, Master of Technology–Bio-Technology), Saumya Singh (Session 2023-24, Master
      of Science–Chemistry), Shreya Srivastava (Session 2022-23, Master of Arts–Sociology), and Rahat
      Parveen (Session 2021-22, Master of Technology–Bio-Technology). The achievements of these young
      women have not only brought glory to the University but have also proved that daughters are
      continuously setting new records in the field of talent, dedication, and excellence.
    </p>

    <p class="mt-2">
      The University's tradition of encouraging academic excellence is also getting stronger. In the
      session 2021-22, 52 students were awarded Gold Medals and 43 students received Silver Medals.
      In the session 2022-23, this number increased to 55 Gold and 40 Silver Medals. In the session
      2023-24, 61 students earned Gold Medals and 45 students earned Silver Medals. Meanwhile, in the
      session 2024-25, 64 students were awarded Gold Medals and 37 students received Silver Medals.
      This achievement is a testament to the University's excellent teaching system, quality academic
      environment, and the continuous hard work and talent of the students.
    </p>

    <div class="mt-3">
      <h5><strong>Medal Distribution by Session</strong></h5>
      <ul>
        <li>Session 2021-22: 52 Gold Medals, 43 Silver Medals</li>
        <li>Session 2022-23: 55 Gold Medals, 40 Silver Medals</li>
        <li>Session 2023-24: 61 Gold Medals, 45 Silver Medals</li>
        <li>Session 2024-25: 64 Gold Medals, 37 Silver Medals</li>
      </ul>
    </div>

    <p class="mt-2">
      Chief Guest <strong>Prof. (Dr.) Bhushan Patwardhan</strong> in his address said that this
      convocation ceremony is not just an occasion to award degrees, but a celebration of years of
      hard work, discipline, and pursuit of knowledge. Highlighting the significance of the name
      "Ramswaroop", he emphasized the need to adopt Indian knowledge traditions, free oneself from
      mental slavery, and move forward with self-respect. He expressed confidence that SRMU graduates
      will make every section of society's life better by making moral values, innovation, and social
      responsibility their guiding principles.
    </p>

    <p class="mt-2">
      Vice Chancellor <strong>Prof. (Dr.) Vijay Tiwari</strong>, while inaugurating the convocation
      ceremony, welcomed everyone and presented the progress report of the University's four-year
      development journey from 2021-22 to 2024-25. He informed that during this period, the
      University has achieved remarkable accomplishments in academic expansion, quality, and
      institutional development. He stated that in 2021-22, the number of students in the University
      was 4,764, which has increased to 10,444 by 2024-25. Currently, approximately 12,000 students
      are studying in various faculties and programs. He added that this continuously increasing
      number of students is a symbol of growing societal trust in the University. The Vice Chancellor
      said that along with the increase in student numbers, the University's responsibilities have
      also grown equally. Our objective is not only to increase enrollment but to provide every
      student with quality education, effective guidance, academic support, proper counseling,
      excellent infrastructure, and value-based education.
    </p>

    <div class="mt-3">
      <h5><strong>Student Enrollment Growth</strong></h5>
      <ul>
        <li>2021-22: 4,764 students</li>
        <li>2024-25: 10,444 students</li>
        <li>Currently (2026): Approximately 12,000 students across various faculties and programs</li>
      </ul>
    </div>

    <p class="mt-2">
      Chancellor <strong>Er. Pankaj Agarwal</strong> in his inspiring address extended heartfelt
      congratulations and best wishes to all degree recipients, their parents, teachers, and the
      entire University family. He said that the convocation ceremony is not merely an occasion to
      award degrees but an important moment to begin a new journey of life with knowledge,
      responsibility, and social commitment. He appealed to the students not to limit the use of
      their acquired knowledge and skills to personal success only, but to dedicate them also to
      nation-building, societal upliftment, and service to humanity.
    </p>

    <p class="mt-2">
      Distinguished Guest <strong>Shri Akhilesh Mishra</strong>, in his address, reiterated the
      message given by the Guru to his disciples in the Taittiriya Upanishad. He appealed to the
      youth to speak the truth, follow dharma (duty and righteousness), engage in continuous
      self-study, contribute to the progress of society, never deviate from truth and dharma, and
      always strive for prosperity and public welfare. He said that democracy is not limited to
      rights alone but is linked to the fulfillment of duties, and the responsibility of the nation's
      future lies on the youth.
    </p>

    <div class="mt-3">
      <h5><strong>Event Details</strong></h5>
      <p>
        <strong>Date:</strong> July 22, 2026<br/>
        <strong>Venue:</strong> Mass Auditorium, Indira Gandhi Pratishthan, Gomti Nagar, Lucknow<br/>
        <strong>Organized By:</strong> Shri Ramswaroop Memorial University (SRMU)<br/>
        <strong>Compered By:</strong> Controller of Examinations Prof. (Dr.) Akanksha Nigam<br/>
        <strong>Present:</strong> Deans of all faculties, Directors of institutes, Heads of departments, and teachers
      </p>
    </div>
  `,
  },

  {
    id: 11,
    isRedirect: false,
    image: hostFinancial,
    imageSmall: hostFinancial,
    date: "June 18th , 2026",
    title: `SRMU Hosts Financial Literacy Drive with FICCI FLO Lucknow Under "I Am My Own Laxmi"`,
    description: `
    <p>
    Shri Ramswaroop Memorial University (SRMU), in collaboration with FICCI FLO Lucknow, successfully organized the <b> Financial Literacy Drive </b> under the initiative "<b> I Am My Own Laxmi. </b>" The session empowered students with essential financial knowledge, covering smart money management, budgeting, savings, investing, and financial planning. The initiative encouraged young learners to make informed financial decisions, build confidence in managing their finances, and work towards long-term financial independence and security.
    </p>

   
  	`,
  },

  {
    id: 10,
    isRedirect: false,
    image: SRMUConductsDays, // Replace with the new FDP image if available
    imageSmall: SRMUConductsDays,
    date: "July 28th, 2026",
    title: `SRMU Conducts 3-Day Faculty Development Programme on Universal Human Values with AICTE`,
    description: `
    <p>
      Shri Ramswaroop Memorial University (SRMU), in coordination with <b>AICTE</b>, successfully commenced a <b>3-Day Faculty Development Programme (FDP)</b> on <b>"Universal Human Values"</b> from <b>28th to 30th July 2026</b>. The inaugural session was graced by <b>Hon'ble Vice Chancellor Dr. Vijay Tiwari</b>, <b>Hon'ble Registrar Dr. Hemendra Sharma</b>, along with esteemed Deans, Directors, and faculty members.
    </p>

    <p>
      The programme aims to strengthen <b>value-based education</b> by promoting ethical principles, holistic thinking, and their integration into teaching, learning, and the overall academic ecosystem.
    </p>
  `,
  },
  {
    id: 9,
    isRedirect: false,
    image: SRMUWelcomes, // Replace with Student Induction Programme image
    imageSmall: SRMUWelcomes,
    date: "August 5th, 2026",
    title: `SRMU Welcomes the 15th Batch with a Two-Day Student Induction Programme`,
    description: `
    <p>
      <b>Shri Ramswaroop Memorial University (SRMU)</b> is set to warmly welcome its <b>15th Batch of students</b> through a <b>Two-Day Student Induction Programme</b> on <b>5th and 6th August 2026</b>. The programme is designed to help freshers transition smoothly into university life by introducing them to SRMU's academic environment, campus facilities, student support services, clubs, and opportunities for holistic development.
    </p>

    <p>
      Through interactive sessions with university leadership, faculty members, and senior students, the induction aims to inspire, guide, and prepare students for a successful academic journey while fostering a strong sense of belonging from day one.
    </p>
  `,
  },

  // {
  //   id: 1,
  //   isRedirect: true,
  //   image: eventcard1,
  //   imageSmall: "eventcard1Small",
  //   date: "July 22, 2026",
  //   title: "Grand Convocation Ceremony 2026 - Degrees Awarded to 7,519 Students",
  //   description: `
  //   <p>
  //     <strong>Shri Ramswaroop Memorial University (SRMU)</strong> celebrated its Grand Convocation Ceremony with great grandeur on Wednesday at the Mass Auditorium of Indira Gandhi Pratishthan, Gomti Nagar, Lucknow. The majestic ceremony marked a significant milestone as a total of <strong>7,519 students</strong> were awarded degrees across various programs.
  //   </p>

  //   <p class="mt-2">
  //     In recognition of academic excellence, <strong>405 students</strong> were honored with medals, including <strong>232 Gold Medals, 165 Silver Medals, and 8 Chancellor's and Pro-Chancellor's Medals</strong>. A special highlight of this year was that all eight prestigious medals from the sessions 2021-22 to 2024-25 were won by female students, showcasing their outstanding dedication and performance.
  //   </p>

  //   <p class="mt-2">
  //     The ceremony was graced by the presence of <strong>Chief Guest Prof. (Dr.) Bhushan Patwardhan</strong>, Chancellor, Deccan College (Deemed to be University), Pune & National Research Professor, Ministry of AYUSH, Government of India, and <strong>Distinguished Guest Shri Akhilesh Mishra</strong>, former Director General of Indian Council for Cultural Relations and former Ambassador.
  //   </p>

  //   <div class="mt-3">
  //     <h5><strong>Program Highlights</strong></h5>
  //     <ul>
  //       <li>Degrees awarded to 7,519 students across multiple programs</li>
  //       <li>405 medals conferred for academic excellence</li>
  //       <li>All 8 Chancellor's and Pro-Chancellor's Medals won by female students</li>
  //       <li>Graced by eminent national dignitaries and academic leaders</li>
  //       <li>Celebration of academic expansion, quality, and institutional development</li>
  //       <li>Emphasis on moral values, innovation, and social responsibility</li>
  //     </ul>
  //   </div>

  //   <div class="mt-3">
  //     <h5><strong>Medal Distribution Details</strong></h5>
  //     <ul>
  //       <li><strong>Chancellor's Medal:</strong> Aadya Sharma (2024-25), Khushi Budhraja (2023-24), Krati Jain (2022-23), Muskan Budhraja (2021-22)</li>
  //       <li><strong>Pro-Chancellor's Medal:</strong> Praneta Yadav (2024-25), Saumya Singh (2023-24), Shreya Srivastava (2022-23), Rahat Parveen (2021-22)</li>
  //       <li><strong>Gold Medals:</strong> 232 awarded across all sessions</li>
  //       <li><strong>Silver Medals:</strong> 165 awarded across all sessions</li>
  //     </ul>
  //   </div>

  //   <div class="mt-3">
  //     <h5><strong>University Progress & Vision</strong></h5>
  //     <ul>
  //       <li>Student enrollment grew from 4,764 (2021-22) to 10,444 (2024-25)</li>
  //       <li>Currently approximately 12,000 students studying across faculties</li>
  //       <li>Focus on quality education, guidance, academic support, and value-based learning</li>
  //       <li>Commitment to nation-building, societal upliftment, and service to humanity</li>
  //     </ul>
  //   </div>

  //   <div class="mt-3">
  //     <h5><strong>Event Details</strong></h5>
  //     <p>
  //       <strong>Event:</strong> Grand Convocation Ceremony<br/>
  //       <strong>Date:</strong> July 22, 2026<br/>
  //       <strong>Venue:</strong> Mass Auditorium, Indira Gandhi Pratishthan, Gomti Nagar, Lucknow<br/>
  //       <strong>Degrees Awarded:</strong> 7,519<br/>
  //       <strong>Medals Awarded:</strong> 405 (232 Gold, 165 Silver, 8 Chancellor's/Pro-Chancellor's)
  //     </p>
  //   </div>
  // `,
  // },

  {
    id: 8,
    isRedirect: true,
    image: eventcard1,
    imageSmall: eventcard1Small,
    date: "June 8, 2026",
    title: "40 Hours Online Mediation Training Program - Become a Certified Mediator",
    description: `
    <p>
      <strong>Shri Ramswaroop Memorial University (SRMU)</strong>, in collaboration with
      <strong>DRF Conflict Management Solutions</strong>, is offering a comprehensive
      <strong>40 Hours Online Mediation Training Program</strong> designed in accordance with
      the guidelines of the <strong>MCPC, Supreme Court of India</strong>. The program is
      aimed at equipping participants with practical mediation, negotiation, and conflict
      resolution skills through expert-led sessions and hands-on learning experiences.
    </p>

    <p class="mt-2">
      Participants will gain in-depth knowledge of Alternative Dispute Resolution (ADR),
      mediation processes, communication strategies, conflict management techniques,
      and the ethical responsibilities of mediators. The training includes interactive
      sessions, practical exercises, case studies, and role-play simulations to ensure
      real-world learning outcomes.
    </p>

    <p class="mt-2">
      Organized by the <strong>Institute of Legal Studies (ILS), SRMU</strong>, this program
      welcomes students, legal professionals, academicians, and working professionals
      seeking to build expertise in mediation and dispute resolution.
    </p>

    <div class="mt-3">
      <h5><strong>Program Highlights</strong></h5>
      <ul>
        <li>Supreme Court guideline-based curriculum</li>
        <li>Expert trainers and mediators from across India</li>
        <li>Interactive sessions and role-play exercises</li>
        <li>Understanding ADR and mediation processes</li>
        <li>Professional certification upon successful completion</li>
        <li>Career opportunities in mediation and dispute resolution</li>
      </ul>
    </div>

    <div class="mt-3">
      <h5><strong>Course Highlights</strong></h5>
      <ul>
        <li>Introduction to Mediation and ADR</li>
        <li>Understanding Conflict & Conflict Management</li>
        <li>Mediation Process and Stages</li>
        <li>Communication & Negotiation Skills</li>
        <li>Ethics and Role of Mediators</li>
        <li>Practical Training Sessions & Role-Plays</li>
        <li>Career Opportunities in Mediation</li>
      </ul>
    </div>

    <div class="mt-3">
      <h5><strong>Program Details</strong></h5>
      <p>
        <strong>Duration:</strong> 40 Hours Online Training<br/>
        <strong>Start Date:</strong> 9 June 2026<br/>
        <strong>End Date:</strong> 28 June 2026<br/>
        <strong>Mode:</strong> Online<br/>
        <strong>Certification:</strong> Provided upon successful completion
      </p>
    </div>
  `,
  },
  // {
  //   id: 2,
  //   // isUpcoming:true,
  //   isRedirect: true,
  //   image: eventcard2,
  //   imageSmall: eventcard2Small,
  //   date: "June 8, 2026",
  //   title: "Online National Conference on Algorithmic Justice: Re-imagining Due Process in the Age of AI",
  //   description: `
  //   <p>
  //     The <strong>Institute of Legal Studies (ILS), Shri Ramswaroop Memorial University (SRMU)</strong>
  //     is organizing an <strong>Online National Conference</strong> on
  //     <strong>"Algorithmic Justice: Re-imagining Due Process in the Age of AI"</strong>.
  //     This conference aims to bring together distinguished legal experts, academicians,
  //     researchers, policymakers, and students to explore the growing intersection of
  //     <strong>Artificial Intelligence, law, governance, and justice</strong>.
  //   </p>

  //   <p class="mt-2">
  //     As AI continues to influence governance structures, judicial systems, and
  //     decision-making processes, the conference seeks to examine the opportunities,
  //     challenges, and ethical implications of algorithmic systems. Participants will
  //     engage in meaningful discussions on how legal frameworks can evolve to ensure
  //     fairness, transparency, accountability, and due process in an increasingly
  //     AI-driven world.
  //   </p>

  //   <p class="mt-2">
  //     The event will serve as a national platform for interdisciplinary dialogue,
  //     enabling scholars, professionals, and researchers to exchange ideas and
  //     contribute to shaping the future of AI governance and justice systems.
  //   </p>

  //   <div class="mt-3">
  //     <h5><strong>Conference Highlights</strong></h5>
  //     <ul>
  //       <li>Discussions on AI and judicial decision-making</li>
  //       <li>Expert keynote and panel sessions</li>
  //       <li>Research paper presentations</li>
  //       <li>Emerging legal and ethical challenges of AI</li>
  //       <li>Networking opportunities for scholars and professionals</li>
  //       <li>National platform for interdisciplinary dialogue</li>
  //     </ul>
  //   </div>

  //   <div class="mt-3">
  //     <h5><strong>Key Themes</strong></h5>
  //     <ul>
  //       <li>AI in Judicial Decision-Making</li>
  //       <li>Constitutional and Procedural Fairness</li>
  //       <li>Criminal Justice and Emerging Technologies</li>
  //       <li>Data Protection and Governance</li>
  //       <li>AI, Human Rights & Access to Justice</li>
  //       <li>Future of Due Process in the Digital Age</li>
  //       <li>Legal Regulation of Artificial Intelligence</li>
  //       <li>Ethical Challenges in Automated Systems</li>
  //     </ul>
  //   </div>

  //   <div class="mt-3">
  //     <h5><strong>Why Participate?</strong></h5>
  //     <ul>
  //       <li>Learn from renowned legal scholars and experts</li>
  //       <li>Present research and gain valuable feedback</li>
  //       <li>Explore emerging legal-tech developments</li>
  //       <li>Network with academicians and professionals</li>
  //       <li>Contribute to discussions on the future of AI governance</li>
  //     </ul>
  //   </div>

  //   <div class="mt-3">
  //     <h5><strong>Event Details</strong></h5>
  //     <p>
  //       <strong>Date:</strong> 13 June 2026<br/>
  //       <strong>Mode:</strong> Online<br/>
  //       <strong>Organized By:</strong> Institute of Legal Studies (ILS), SRMU<br/>
  //       <strong>Participants:</strong> Students, Researchers, Academicians, Legal Professionals & Policy Experts
  //     </p>
  //   </div>
  // `,
  // },
  //   {
  //     id: 7,
  //     isRedirect: false,
  //     image: alumini_connect_desktop,
  //     imageSmall: alumini_connect_mobile,
  //     date: "June 18th , 2026",
  //     title: `Alumni Connect 2026 – "A Bridge Between Our Proud Past and a Promising Future"`,
  //     description: `
  //     <p>
  //     The Institute of Management, Commerce & Economics (IMCE), Faculty of Commerce & Economics, SRMU, successfully organized "Alumni Connect 2026" on 18th June 2026, 10:00 AM–12:30 PM, via Google Meet, under the theme "Reconnect, Inspire, Empower." The event connected alumni with current students of B.Com, BA (Hons.) Economics, and M.Com programmes.
  //     </p>

  //     <p class="mt-2">
  // The session featured keynote talks by distinguished alumni from corporate, financial, and entrepreneurial backgrounds, followed by a panel discussion on industry trends, career opportunities, and higher education prospects. An interactive Q&A allowed students to seek mentorship and career advice, while a networking session enabled deeper alumni-student-faculty connections.
  //     </p>

  //     <p class="mt-2">
  // The event was graced by university leadership, including Chancellor Er. Pankaj Agarwal, Vice Chancellor Prof. (Dr.) Vijay Tiwari, and Registrar Prof. (Dr.) Hemendra Sharma, and coordinated by the IMCE organizing committee under Prof. (Dr.) Veena Singh, HOD. The session saw enthusiastic student participation, reaffirming the faculty's commitment to alumni engagement.
  //     </p>
  //   	`,
  //   },
  //   {
  //     id: 6,
  //     isRedirect: false,
  //     image: alumini1_desktop,
  //     imageSmall: alumini1_mobile,
  //     date: "June 18th , 2026",
  //     title: `Alumni Connect 2026 – "Let's Build Tomorrow, Together"`,
  //     description: `
  //     <p>
  // The Polytechnic, Faculty of Civil Engineering, Shri Ramswaroop Memorial University, successfully organized "Alumni Connect 2026" on 18th June 2026, 12:30 PM–2:30 PM, via Google Meet, with the goal of strengthening alumni-student bonds and empowering the next generation of civil engineers.
  //     </p>

  //     <p class="mt-2">
  // The session covered key themes including Alumni Career Journeys, Industry Trends & Future Opportunities, Career Guidance & Placement Readiness, Higher Education & Entrepreneurship Opportunities, and Alumni Feedback on Curriculum & Skill Development. Alumni speakers shared their journeys "from classrooms to construction sites, from ideas to impact," giving students a real-world perspective on translating academic learning into professional practice.
  //     </p>

  //     <p class="mt-2">
  // An interactive Q&A session enabled students to engage directly with alumni, sparking enthusiastic discussions on career planning, industry expectations, and skill-building.
  // The event reflected the Polytechnic's commitment to fostering strong alumni-student relationships, reinforcing the vision of building a stronger foundation for future civil engineers. Encouraged by the positive response, the faculty plans to host similar sessions ahead.    </p>
  //   	`,
  //   },
  //   {
  //     id: 5,
  //     isRedirect: false,
  //     image: alumini2_desktop,
  //     imageSmall: alumini2_mobile,
  //     date: "June 18th , 2026",
  //     title: `Alumni Conclave 2026 – Connecting Alumni, Inspiring Students, Building Futures`,
  //     description: `
  //     <p>
  // The Institute of Natural Sciences and Humanities (INSH), Shri Ramswaroop Memorial University, successfully organized "Alumni Conclave 2026" on 18th June 2026, 2:00 PM–3:30 PM, via Google Meet. Jointly hosted by the Faculty of Physical Sciences, Faculty of Chemical Sciences, and Faculty of Mathematical & Statistical Sciences, the event centered on the theme "Connecting Alumni, Inspiring Students, Building Futures."
  //     </p>

  //     <p class="mt-2">
  // Distinguished alumni speakers — Mr. Akash Saxena (Ph.D. Scholar, IIT Bombay), Mr. Vivekanand Chaubey (Research Scholar, IIT Indore), and Ms. Ritika Jain (MBA Student, SRMCEM Lucknow) — shared their academic journeys and career insights, engaging students through discussions on higher education, research pathways, and career planning.
  //     </p>

  //     <p class="mt-2">
  // The session saw enthusiastic participation from students and faculty across departments, who benefited from alumni success stories and direct interaction. The event reaffirmed INSH's commitment to strengthening alumni engagement, with plans for similar sessions ahead.
  // </p>
  //   	`,
  //   },

  {
    id: 4,
    isRedirect: true,
    image: event3,
    imageSmall: event3Small,
    date: "April 22, 2026",
    title: "SRMU–L&T Collaborative Programs Celebrate Academic Excellence and Industry Readiness",
    description: `
    <p>
      <strong>Shri Ramswaroop Memorial University (SRMU)</strong>, in collaboration with 
      <strong>Larsen & Toubro (L&T)</strong>, continues to set new benchmarks in industry-integrated education across disciplines such as Computer Science Engineering, Computer Applications, Management, and core engineering branches. As part of this collaboration, students who demonstrated outstanding academic performance in their first year and successfully completed impactful live projects were recognized for their excellence. Their achievements reflect not only strong academic foundations but also the ability to apply knowledge in real-world industry scenarios.
    </p>

    <p class="mt-2">
      In a special felicitation ceremony, these high-performing students were jointly recognized by officials from SRMU and L&T. The Vice-Chancellor of the University, 
      <strong>Prof. (Dr.) Vijay Tiwari</strong>, personally felicitated the students, appreciating their dedication, innovation, and commitment to excellence.
    </p>

    <p class="mt-2">
      The initiative highlights SRMU’s focus on nurturing industry-ready professionals and strengthening the synergy between academia and industry, thereby empowering students to excel in competitive and dynamic professional environments.
    </p>
  	`,
  },

  {
    id: 3,
    isRedirect: true,
    image: event1,
    imageSmall: event1Small,
    date: "April 09, 2026",
    title: "SRMU Hosts International Conference on “Sustainable Innovation 2.0” to Bridge Research and Industry",
    description: `
    <p>
      Shri Ramswaroop Memorial University (SRMU), in collaboration with the International Fashion Business Exchange Council (IFBEC), inaugurated a three-day international conference on 
      <em>“Sustainable Innovation 2.0”</em> under the theme 
      <em>“Bridging Research and Industry for a Resilient Future.”</em> 
      Conducted in hybrid mode, the conference has brought together academicians, researchers, and industry experts from across the globe to explore sustainable and innovative solutions to emerging challenges.
    </p>

    <p class="mt-2">
      The inaugural session was graced by 
      <strong>Chief Guest Prof. (Dr.) Mrutyunjay Suar (DG – Research & Innovation and CEO – IIT-TBI, KIIT University)</strong>, 
      along with distinguished dignitaries including 
      <strong>Chancellor Er. Pankaj Agarwal</strong>, 
      <strong>Pro-Chancellor Er. Pooja Agarwal</strong>, 
      <strong>Vice-Chancellor Prof. (Dr.) Vijay Kumar Tiwari</strong>, 
      <strong>Registrar Prof. (Dr.) Hemendra Sharma</strong>, 
      and Conference Chairperson 
      <strong>Prof. (Dr.) B. M. Dixit</strong>, among other eminent guests.
    </p>

    <p class="mt-2">
      The conference emphasizes the need to bridge the gap between academic research and industry applications, promoting innovation that is both sustainable and practical. Industry leaders such as 
      <strong>Dr. Kailash Nath Mahapatra (Chairperson, KASAR Technologies)</strong> 
      and international academic experts including 
      <strong>Prof. Edmond Hajrizi (Rector, University for Business and Technology, Kosovo)</strong> 
      shared valuable insights on global collaboration, cost-effective sustainability, and the transition towards responsible innovation.
    </p>

    <p class="mt-2">
      The event provides a dynamic platform for students and researchers to engage with global experts, present their research, and contribute towards building a resilient future. With multiple technical sessions and wide participation, the conference reflects SRMU’s commitment to innovation, collaboration, and sustainable development.
    </p>
  	`,
  },
  {
    id: 2,
    isRedirect: true,
    image: event2,
    imageSmall: event2Small,
    date: "March 08, 2026",
    title: "Celebrating Visionary Leadership and Women Empowerment",
    description: `
    <p>
      Our Hon’ble Pro-Chancellor, 
      <strong>Er. Pooja Agarwal</strong>, 
      was honored by the Hon’ble Governor of Uttar Pradesh on the occasion of 
      <strong>International Women’s Day</strong>. 
      This prestigious recognition is a testament to her inspiring leadership, unwavering commitment to education, and her continuous efforts towards empowering women through knowledge and opportunity. Her journey reflects a perfect blend of academic excellence, visionary thinking, and social responsibility, making her a role model for aspiring leaders.
    </p>

    <p class="mt-2">
      Adding to this proud moment, she also participated as a distinguished panelist in the discussion titled 
      <em>“Digital Bhagidari aur Bharat ki Nari,”</em> 
      organized by <strong>The Times of India</strong>, where she shared insightful perspectives on the evolving role of women in India’s digital transformation. Her thoughts emphasized the importance of inclusive growth and the need to empower women in the digital era.
    </p>

    <p class="mt-2">
      Heartiest congratulations to our Co-founder, 
      <strong>Er. Pooja Agarwal</strong>, 
      on this remarkable achievement—her vision and leadership continue to inspire the entire SRM Group fraternity.
    </p>
  	`,
  },
  {
    id: 1,
    isRedirect: true,
    image: event4,
    imageSmall: event4Small,
    date: "May 22, 2026",
    title: "SRMU Signs MoUs with Five Organizations to Strengthen Education and Skill Development",
    description: `
    <p>
      <strong>Lucknow/Barabanki:</strong> Shri Ramswaroop Memorial University (SRMU) has taken a significant step by signing Memorandums of Understanding (MoUs) with five prominent organizations. These collaborations will provide students with enhanced opportunities in education, skill development, research, and industry engagement.
    </p>

    <p class="mt-2">
      The five organizations include 
      <strong>FICCI FLOW</strong>, 
      <strong>Jute for Life</strong>, 
      <strong>Aao Seekhe</strong>, 
      <strong>Solar Energy</strong>, and 
      <strong>Socio-aid Services and Development Foundation</strong>. 
      The MoUs have been signed to establish long-term cooperation in areas such as education, renewable energy, social entrepreneurship, women empowerment, and jute-based industries.
    </p>

    <p class="mt-2">
      The ceremony was attended by 
      <strong>SRMU Pro-Chancellor Er. Pooja Agrawal</strong>, 
      <strong>Vice-Chancellor Prof. (Dr.) Vijay Tiwari</strong>, 
      <strong>IQAC Director Prof. (Dr.) Ritu Chandra</strong>, 
      <strong>Head of the Department of Commerce & Economics Prof. (Dr.) Veena Singh</strong>, 
      <strong>Dr. Vaibhav Sharma</strong>, and other senior university officials.
    </p>

    <p class="mt-2">
      Speaking on the occasion, Pro-Chancellor 
      <strong>Er. Pooja Agrawal</strong> 
      said, 
      <em>
        “These partnerships are a significant achievement in our efforts to provide education aligned with industry requirements. Our aim is not only to award degrees but also to equip students with employability skills, innovative thinking, and a sense of social responsibility. Through these MoUs, we are taking a concrete step toward ensuring a better future for our students.”
      </em>
    </p>

    <p class="mt-2">
      Vice-Chancellor 
      <strong>Prof. (Dr.) Vijay Tiwari</strong> 
      stated that these collaborations would provide students with practical exposure alongside theoretical knowledge. He added that partnerships in areas such as solar energy and social entrepreneurship would help position SRMU as a leading institution at the regional level.
    </p>

    <p class="mt-2">
      Under the MoUs, 
      <strong>IQAC Director Prof. (Dr.) Ritu Chandra</strong> 
      and 
      <strong>Prof. (Dr.) Veena Singh</strong> 
      signed the agreement with 
      <strong>FICCI FLOW</strong>; 
      <strong>DCSIS HOD Prof. (Dr.) Vineet Gupta</strong> 
      and 
      <strong>Prof. (Dr.) Veena Singh</strong> 
      signed with 
      <strong>Jute for Life</strong>; 
      <strong>IoT Director Prof. (Dr.) Apoorv Anand</strong>, 
      <strong>Dr. Madhu Dixit</strong>, and 
      <strong>Prof. (Dr.) Ritu Chandra</strong> 
      signed with 
      <strong>Aao Seekhe</strong>; 
      <strong>EEE HOD Prof. (Dr.) R. S. Bajpai</strong> 
      and 
      <strong>Director of the Institute of Agricultural Sciences & Technology Prof. (Dr.) Gajendra Singh</strong> 
      signed with 
      <strong>Solar Energy</strong>; 
      while 
      <strong>Prof. (Dr.) Veena Singh</strong> 
      and 
      <strong>Prof. (Dr.) Ritu Chandra</strong> 
      signed the agreement with 
      <strong>Socio-aid Services and Development Foundation</strong>.
    </p>

    <p class="mt-2">
      Through these collaborations, the university reaffirmed its commitment to advancing education and skill development. 
      <strong>IQAC Director Prof. (Dr.) Ritu Chandra</strong> 
      described these MoUs as a strong reflection of the university’s commitment to academic excellence and social responsibility. She said the partnerships would create better opportunities for internships, workshops, job placements, and real-time projects for students.
    </p>

    <p class="mt-2">
      These agreements will enable SRMU students to acquire modern skills while also engaging in practical initiatives related to jute products, women empowerment, educational awareness, and environmentally sustainable energy solutions.
    </p>

    <p class="mt-2">
      Shri Ramswaroop Memorial University continues to strengthen industry-academia collaborations to prepare students for a bright and successful future.
    </p>
  `,
  },
];

export default eventsData;
