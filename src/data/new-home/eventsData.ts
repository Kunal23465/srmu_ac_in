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
import eventcard2 from "../../assets/new-home/events/algo-big.webp";
import eventcard2Small from "../../assets/new-home/events/algo-small.webp";
import alumini_connect_desktop from "../../assets/new-home/events/alumini-connect-desktop.webp";
import alumini_connect_mobile from "../../assets/new-home/events/alumini-connect-mobile.webp";
import alumini1_desktop from "../../assets/new-home/events/alumini1-desktop.webp";
import alumini1_mobile from "../../assets/new-home/events/alumini1-mobile.webp";
import alumini2_desktop from "../../assets/new-home/events/alumini2-desktop.webp";
import alumini2_mobile from "../../assets/new-home/events/alumini2-mobile.webp";
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
  // theme token: used by UI to pick correct bg classes
  token?: "accent" | "primary" | "neutral";
};

const eventsData: EventItem[] = [
  {
    id: 1,
   isRedirect:true, 
// isUpcoming:true,
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
  {
    id: 2,
    // isUpcoming:true,
    isRedirect:true, 
    image: eventcard2,
    imageSmall: eventcard2Small,
    date: "June 8, 2026",
    title: "Online National Conference on Algorithmic Justice: Re-imagining Due Process in the Age of AI",
    description: `
    <p>
      The <strong>Institute of Legal Studies (ILS), Shri Ramswaroop Memorial University (SRMU)</strong>
      is organizing an <strong>Online National Conference</strong> on
      <strong>"Algorithmic Justice: Re-imagining Due Process in the Age of AI"</strong>.
      This conference aims to bring together distinguished legal experts, academicians,
      researchers, policymakers, and students to explore the growing intersection of
      <strong>Artificial Intelligence, law, governance, and justice</strong>.
    </p>

    <p class="mt-2">
      As AI continues to influence governance structures, judicial systems, and
      decision-making processes, the conference seeks to examine the opportunities,
      challenges, and ethical implications of algorithmic systems. Participants will
      engage in meaningful discussions on how legal frameworks can evolve to ensure
      fairness, transparency, accountability, and due process in an increasingly
      AI-driven world.
    </p>

    <p class="mt-2">
      The event will serve as a national platform for interdisciplinary dialogue,
      enabling scholars, professionals, and researchers to exchange ideas and
      contribute to shaping the future of AI governance and justice systems.
    </p>

    <div class="mt-3">
      <h5><strong>Conference Highlights</strong></h5>
      <ul>
        <li>Discussions on AI and judicial decision-making</li>
        <li>Expert keynote and panel sessions</li>
        <li>Research paper presentations</li>
        <li>Emerging legal and ethical challenges of AI</li>
        <li>Networking opportunities for scholars and professionals</li>
        <li>National platform for interdisciplinary dialogue</li>
      </ul>
    </div>

    <div class="mt-3">
      <h5><strong>Key Themes</strong></h5>
      <ul>
        <li>AI in Judicial Decision-Making</li>
        <li>Constitutional and Procedural Fairness</li>
        <li>Criminal Justice and Emerging Technologies</li>
        <li>Data Protection and Governance</li>
        <li>AI, Human Rights & Access to Justice</li>
        <li>Future of Due Process in the Digital Age</li>
        <li>Legal Regulation of Artificial Intelligence</li>
        <li>Ethical Challenges in Automated Systems</li>
      </ul>
    </div>

    <div class="mt-3">
      <h5><strong>Why Participate?</strong></h5>
      <ul>
        <li>Learn from renowned legal scholars and experts</li>
        <li>Present research and gain valuable feedback</li>
        <li>Explore emerging legal-tech developments</li>
        <li>Network with academicians and professionals</li>
        <li>Contribute to discussions on the future of AI governance</li>
      </ul>
    </div>

    <div class="mt-3">
      <h5><strong>Event Details</strong></h5>
      <p>
        <strong>Date:</strong> 13 June 2026<br/>
        <strong>Mode:</strong> Online<br/>
        <strong>Organized By:</strong> Institute of Legal Studies (ILS), SRMU<br/>
        <strong>Participants:</strong> Students, Researchers, Academicians, Legal Professionals & Policy Experts
      </p>
    </div>
  `,
  },
   {
    id: 3,
    isRedirect:false, 
    image: alumini_connect_desktop,
    imageSmall: alumini_connect_mobile,
    date: "June 18th , 2026",
    title: `Alumni Connect 2026 – "A Bridge Between Our Proud Past and a Promising Future"`,
    description: `
    <p>
    The Institute of Management, Commerce & Economics (IMCE), Faculty of Commerce & Economics, SRMU, successfully organized "Alumni Connect 2026" on 18th June 2026, 10:00 AM–12:30 PM, via Google Meet, under the theme "Reconnect, Inspire, Empower." The event connected alumni with current students of B.Com, BA (Hons.) Economics, and M.Com programmes.
    </p>

    <p class="mt-2">
The session featured keynote talks by distinguished alumni from corporate, financial, and entrepreneurial backgrounds, followed by a panel discussion on industry trends, career opportunities, and higher education prospects. An interactive Q&A allowed students to seek mentorship and career advice, while a networking session enabled deeper alumni-student-faculty connections.
    </p>

    <p class="mt-2">
The event was graced by university leadership, including Chancellor Er. Pankaj Agarwal, Vice Chancellor Prof. (Dr.) Vijay Tiwari, and Registrar Prof. (Dr.) Hemendra Sharma, and coordinated by the IMCE organizing committee under Prof. (Dr.) Veena Singh, HOD. The session saw enthusiastic student participation, reaffirming the faculty's commitment to alumni engagement.
    </p>
  	`,
  },
  {
    id: 4,
    isRedirect:false, 
    image: alumini1_desktop,
    imageSmall: alumini1_mobile,
    date: "June 18th , 2026",
    title: `Alumni Connect 2026 – "Let's Build Tomorrow, Together"`,
    description: `
    <p>
The Polytechnic, Faculty of Civil Engineering, Shri Ramswaroop Memorial University, successfully organized "Alumni Connect 2026" on 18th June 2026, 12:30 PM–2:30 PM, via Google Meet, with the goal of strengthening alumni-student bonds and empowering the next generation of civil engineers.
    </p>

    <p class="mt-2">
The session covered key themes including Alumni Career Journeys, Industry Trends & Future Opportunities, Career Guidance & Placement Readiness, Higher Education & Entrepreneurship Opportunities, and Alumni Feedback on Curriculum & Skill Development. Alumni speakers shared their journeys "from classrooms to construction sites, from ideas to impact," giving students a real-world perspective on translating academic learning into professional practice.
    </p>

    <p class="mt-2">
An interactive Q&A session enabled students to engage directly with alumni, sparking enthusiastic discussions on career planning, industry expectations, and skill-building.
The event reflected the Polytechnic's commitment to fostering strong alumni-student relationships, reinforcing the vision of building a stronger foundation for future civil engineers. Encouraged by the positive response, the faculty plans to host similar sessions ahead.    </p>
  	`,
  },
  {
    id: 5,
    isRedirect:false, 
    image: alumini2_desktop,
    imageSmall: alumini2_mobile,
    date: "June 18th , 2026",
    title: `Alumni Conclave 2026 – Connecting Alumni, Inspiring Students, Building Futures`,
    description: `
    <p>
The Institute of Natural Sciences and Humanities (INSH), Shri Ramswaroop Memorial University, successfully organized "Alumni Conclave 2026" on 18th June 2026, 2:00 PM–3:30 PM, via Google Meet. Jointly hosted by the Faculty of Physical Sciences, Faculty of Chemical Sciences, and Faculty of Mathematical & Statistical Sciences, the event centered on the theme "Connecting Alumni, Inspiring Students, Building Futures."
    </p>

    <p class="mt-2">
Distinguished alumni speakers — Mr. Akash Saxena (Ph.D. Scholar, IIT Bombay), Mr. Vivekanand Chaubey (Research Scholar, IIT Indore), and Ms. Ritika Jain (MBA Student, SRMCEM Lucknow) — shared their academic journeys and career insights, engaging students through discussions on higher education, research pathways, and career planning.
    </p>

    <p class="mt-2">
The session saw enthusiastic participation from students and faculty across departments, who benefited from alumni success stories and direct interaction. The event reaffirmed INSH's commitment to strengthening alumni engagement, with plans for similar sessions ahead.
</p>
  	`,
  },


  {
    id: 6,
    isRedirect:true, 
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
    id: 7,
    isRedirect:true,
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
    id: 8,
    isRedirect:true,
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
    id: 9,
    isRedirect:true,
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
