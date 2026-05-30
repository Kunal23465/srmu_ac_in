import event1 from "../../assets/new-home/events/1.webp";
import event2 from "../../assets/new-home/events/2.webp";
import event3 from "../../assets/new-home/events/3.webp";
import event4 from "../../assets/new-home/events/4.webp";
export type EventItem = {
  id: string | number;
  image?: string;
  date: string;
  title: string;
  excerpt?: string;
  description?: string;
  // theme token: used by UI to pick correct bg classes
  token?: "accent" | "primary" | "neutral";
};

const eventsData: EventItem[] = [
  {
    id: 3,
    image: event3,
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
    id: 1,
    image: event1,
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
    image: event2,
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
    id: 3,
    image: event4,
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
