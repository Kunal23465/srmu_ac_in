import { customeOverViewType } from "../../../types/home-data-type";

export interface AccordionItem {
  id: number;
  question: string;
  content: string | React.ReactNode;
}
export const admissionFaqOverviewData: customeOverViewType = {
  heading: "Admission-FAQs",
  content: `Explore answers to commonly asked questions about the admission process at SRMU. Find valuable information on eligibility criteria, application procedures, and other key details to navigate your journey seamlessly.`,
};
export const after12thFaqData: AccordionItem[] = [
  // ============================================================
  // Section: Courses After Class 12
  // ============================================================
  {
    id: 1,
    question:
      "Which course is best after Class 12 for a high-salary career in Uttar Pradesh?",
    content: `
      <p class="mb-3">
        Courses related to <strong>technology, engineering, data science, management, and agriculture technology</strong>
        currently offer some of the highest salary potential in India.
      </p>

      <p class="mb-2 font-semibold">Popular high-salary career courses after Class 12 include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Computer Science Engineering</li>
        <li>B.Tech Artificial Intelligence &amp; Machine Learning</li>
        <li>B.Tech Data Science</li>
        <li>B.Tech Cyber Security</li>
        <li>BCA (Computer Applications)</li>
        <li>BBA followed by MBA</li>
        <li>B.Sc Agriculture</li>
        <li>Integrated Law</li>
        <li>Pharmacy</li>
        <li>Biotechnology</li>
        <li>Fintech with AI</li>
      </ul>

      <p>
        Students from Lucknow and Eastern UP often choose technology and management programs because these fields
        offer strong placement opportunities in IT companies, startups, and multinational firms.
      </p>
    `,
  },
  {
    id: 2,
    question: "What are the best courses after 12th for government jobs in UP?",
    content: `
      <p class="mb-3">
        Students preparing for <strong>UPPSC, UPSC, SSC, and banking exams</strong> usually choose degrees that
        allow eligibility for government recruitment.
      </p>

      <p class="mb-2 font-semibold">Best courses include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Engineering</li>
        <li>B.Sc Agriculture</li>
        <li>BA / B.Sc for Civil Services preparation</li>
        <li>BA LLB / LLB for Judicial Services</li>
        <li>BBA or B.Com for banking careers</li>
      </ul>

      <p>
        Government jobs usually require a bachelor's degree from a recognized university, so students should
        ensure the institution is UGC approved.
      </p>
    `,
  },
  {
    id: 3,
    question: "Which course after 12th has the best placement opportunities?",
    content: `
      <p class="mb-2 font-semibold">Courses with strong placement prospects in India include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Computer Science Engineering</li>
        <li>Artificial Intelligence &amp; Machine Learning</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>BCA and MCA</li>
        <li>BBA followed by MBA</li>
      </ul>

      <p>
        These programs are highly valued because companies require software engineers, data analysts,
        business managers, and digital specialists.
      </p>
    `,
  },
  {
    id: 4,
    question: "Which course after 12th is best for students from UP?",
    content: `
      <p class="mb-3">
        Students from districts such as <strong>Gorakhpur, Azamgarh, Basti, Deoria, Varanasi, Jaunpur and Ballia</strong>
        usually choose courses that offer both private sector and government job opportunities.
      </p>

      <p class="mb-2 font-semibold">Popular choices include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Engineering programs (B.Tech)</li>
        <li>BCA and IT programs</li>
        <li>BBA and management programs</li>
        <li>Agriculture programs</li>
        <li>Biotechnology programs</li>
        <li>Pharmacy programs</li>
        <li>Law programs</li>
      </ul>

      <p>
        These courses provide career opportunities in technology, government services, agriculture, and business sectors.
      </p>
    `,
  },
  {
    id: 5,
    question: "What are the most popular courses after 12th in Lucknow universities?",
    content: `
      <p class="mb-3">
        Universities in Lucknow like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>
        offer a wide range of professional programs. The most popular courses among students include:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Engineering</li>
        <li>BCA</li>
        <li>BBA</li>
        <li>Agriculture</li>
        <li>Biotechnology</li>
        <li>Law (BA LLB / BBA LLB)</li>
        <li>Pharmacy</li>
      </ul>

      <p>
        Technology-related programs remain among the most demanded courses for students from Uttar Pradesh.
      </p>
    `,
  },
  {
    id: 6,
    question: "Should I choose engineering or management after Class 12?",
    content: `
      <p class="mb-3">
        The choice between engineering and management depends on your interests.
      </p>

      <p class="mb-2 font-semibold">Choose Engineering if you enjoy:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>mathematics</li>
        <li>programming</li>
        <li>problem solving</li>
        <li>technology development</li>
      </ul>

      <p class="mb-2 font-semibold">Choose Management if you prefer:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>business strategy</li>
        <li>entrepreneurship</li>
        <li>leadership roles</li>
        <li>marketing and finance</li>
      </ul>

      <p>Both career paths offer strong job opportunities in India.</p>
    `,
  },
  {
    id: 7,
    question: "Which course has the highest demand in India in the next 10 years?",
    content: `
      <p class="mb-2 font-semibold">Future career demand in India is expected in fields such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>Electric Vehicle Engineering</li>
        <li>Semiconductor Technology</li>
        <li>Agritech</li>
        <li>Biotechnology</li>
      </ul>

      <p>
        These industries are expanding due to digital transformation, technological innovation, and
        government initiatives like <strong>Digital India</strong> and <strong>Make in India</strong>.
      </p>
    `,
  },
  {
    id: 8,
    question: "Which degree is best for jobs in technology companies?",
    content: `
      <p class="mb-2 font-semibold">Technology companies usually hire graduates from programs such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Computer Science Engineering</li>
        <li>Artificial Intelligence &amp; Machine Learning</li>
        <li>Semiconductor Design</li>
        <li>Cyber Security</li>
        <li>Data Science</li>
        <li>BCA / MCA</li>
        <li>Information Technology</li>
      </ul>

      <p>
        These programs focus on programming, software development, cloud computing, and digital technologies,
        which are essential for IT careers.
      </p>
    `,
  },
  {
    id: 9,
    question: "Which course is better after 12th science with PCM?",
    content: `
      <p class="mb-2">
        Students with <strong>Physics, Chemistry and Mathematics</strong> usually pursue:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Engineering programs</li>
        <li>BCA</li>
        <li>B.Sc Physics or Mathematics</li>
        <li>BBA AI Augmented Fintech</li>
      </ul>

      <p>
        Engineering remains the most preferred option for PCM students because it offers careers in
        technology, infrastructure, research, and government services.
      </p>
    `,
  },
  {
    id: 10,
    question: "Which course is best after 12th science with Biology?",
    content: `
      <p class="mb-3">
        Students with Biology can choose careers in <strong>healthcare, agriculture and research</strong>.
      </p>

      <p class="mb-2 font-semibold">Popular programs include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Sc Agriculture</li>
        <li>Biotechnology</li>
        <li>Microbiology</li>
        <li>Nutrition and Dietetics</li>
        <li>Pharmacy</li>
      </ul>

      <p>
        These programs provide careers in healthcare companies, pharmaceutical industries,
        agriculture technology firms, and research organizations.
      </p>
    `,
  },
  {
    id: 11,
    question: "Which course is best after 12th commerce?",
    content: `
      <p class="mb-2">
        Commerce students often choose business and management programs such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>BBA</li>
        <li>B.Com</li>
        <li>BCA</li>
        <li>BA Economics</li>
        <li>Law (BA LLB / BBA LLB)</li>
      </ul>

      <p>
        Students interested in corporate careers often pursue <strong>BBA followed by MBA</strong>.
      </p>
    `,
  },
  {
    id: 12,
    question: "Which course is best after 12th arts?",
    content: `
      <p class="mb-2">
        Arts students have many career options including:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>BA (Humanities and Social Sciences)</li>
        <li>BA LLB (Law)</li>
        <li>Journalism and Mass Communication</li>
        <li>BBA</li>
        <li>Bachelor of Social Work</li>
      </ul>

      <p>
        These programs can lead to careers in <strong>civil services, media, law, administration and social development</strong>.
      </p>
    `,
  },
  {
    id: 13,
    question: "Which course after 12th offers the highest salary in India?",
    content: `
      <p class="mb-2 font-semibold">Courses that often lead to high salaries include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Computer Science Engineering</li>
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>BBA in Business Analytics</li>
        <li>BBA in Fintech</li>
        <li>Biotechnology</li>
      </ul>

      <p>
        Technology and management sectors typically offer higher salary packages and international career opportunities.
      </p>
    `,
  },
  {
    id: 14,
    question: "Which courses are best for students who want government jobs?",
    content: `
      <p class="mb-2">
        Students targeting government careers often choose degrees such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>BA / B.Sc for civil services preparation</li>
        <li>B.Tech for PSU jobs</li>
        <li>B.Sc Agriculture for agriculture officer roles</li>
        <li>Law for judicial services</li>
        <li>Commerce degrees for banking exams</li>
      </ul>

      <p>
        These programs provide eligibility for <strong>UPPSC, UPSC, SSC, and banking recruitment exams</strong>.
      </p>
    `,
  },
  {
    id: 15,
    question: "Which professional courses are available after 12th?",
    content: `
      <p class="mb-2 font-semibold">Professional degree programs include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Engineering</li>
        <li>BCA</li>
        <li>BBA</li>
        <li>B.Pharm</li>
        <li>BA LLB / BBA LLB</li>
        <li>Agriculture programs</li>
        <li>Biotechnology programs</li>
      </ul>

      <p>
        Professional courses combine academic learning with practical training and industry exposure.
      </p>
    `,
  },
  {
    id: 16,
    question: "What are the top emerging career courses after 12th?",
    content: `
      <p class="mb-2 font-semibold">Some of the fastest growing career programs include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>Business Analytics</li>
        <li>Agriculture</li>
        <li>Fintech</li>
        <li>Biotechnology</li>
      </ul>

      <p>These programs align with modern technology and global industry trends.</p>
    `,
  },
  {
    id: 17,
    question: "Which courses after 12th require mathematics?",
    content: `
      <p class="mb-2 font-semibold">Courses that usually require mathematics include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech Engineering</li>
        <li>B.Sc Mathematics</li>
        <li>Data Science programs</li>
        <li>Statistics programs</li>
      </ul>

      <p>
        Mathematics is important for careers in <strong>engineering, finance, data science and polytechnic</strong>.
      </p>
    `,
  },
  {
    id: 18,
    question: "Which courses after 12th do not require mathematics?",
    content: `
      <p class="mb-2">
        Students without mathematics can pursue programs such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>BBA</li>
        <li>BA</li>
        <li>Law programs</li>
        <li>Agriculture</li>
        <li>Biotechnology</li>
        <li>Journalism</li>
      </ul>

      <p>
        These programs offer career opportunities in <strong>business, law, agriculture and media</strong>.
      </p>
    `,
  },
  {
    id: 19,
    question: "Which courses after 12th provide international career opportunities?",
    content: `
      <p class="mb-2 font-semibold">Programs with global career prospects include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Computer Science Engineering</li>
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>Business Analytics</li>
        <li>Biotechnology</li>
        <li>MBA</li>
        <li>Fintech</li>
      </ul>

      <p>
        Graduates in these fields often work in multinational companies, research institutes and
        international organizations.
      </p>
    `,
  },
  {
    id: 20,
    question: "Which course after 12th is best for starting a business?",
    content: `
      <p class="mb-2">
        Students interested in entrepreneurship often choose:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>BBA</li>
        <li>B.Com</li>
        <li>Entrepreneurship programs</li>
        <li>Business Analytics programs</li>
      </ul>

      <p>
        These programs teach <strong>business strategy, marketing, finance and startup management</strong>,
        which are essential for building successful businesses.
      </p>
    `,
  },

  // ============================================================
  // Section: Engineering Courses
  // ============================================================
  {
    id: 21,
    question: "What is B.Tech and who should pursue it?",
    content: `
      <p class="mb-3">
        <strong>B.Tech (Bachelor of Technology)</strong> is a four-year undergraduate engineering degree
        that focuses on technical education, innovation, and problem-solving using science and technology.
      </p>

      <p class="mb-2 font-semibold">Students should pursue B.Tech if they are interested in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>engineering and technology</li>
        <li>mathematics and analytical thinking</li>
        <li>software development or product design</li>
        <li>building solutions for real-world problems</li>
      </ul>

      <p>
        B.Tech graduates can work in technology companies, manufacturing industries, government departments,
        and research organizations.
      </p>
    `,
  },
  {
    id: 22,
    question: "What is B.Tech Computer Science Engineering?",
    content: `
      <p class="mb-3">
        <strong>B.Tech Computer Science Engineering (CSE)</strong> is a specialized engineering program
        focused on computer systems and software development.
      </p>

      <p class="mb-2 font-semibold">Students study subjects such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>programming languages</li>
        <li>data structures and algorithms</li>
        <li>artificial intelligence</li>
        <li>cloud computing</li>
        <li>cybersecurity</li>
        <li>software engineering</li>
      </ul>

      <p>
        This program prepares students for careers in IT companies, startups, research labs, and
        multinational technology firms.
      </p>
    `,
  },
  {
    id: 23,
    question: "What is the difference between B.Tech CSE and IT?",
    content: `
      <p class="mb-3">
        B.Tech CSE and B.Tech IT are similar but differ slightly in focus.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Tech CSE</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Tech IT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Focuses on computer science fundamentals</td>
              <td class="border border-gray-300 px-4 py-2">Focuses on practical IT applications</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Includes algorithms, AI, and machine learning</td>
              <td class="border border-gray-300 px-4 py-2">Includes networking, databases, and IT systems</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Wider scope in research and advanced technologies</td>
              <td class="border border-gray-300 px-4 py-2">More focused on IT infrastructure</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Both programs lead to careers in software development and IT industries.</p>
    `,
  },
  {
    id: 24,
    question: "What are the career options after B.Tech CSE?",
    content: `
      <p class="mb-2 font-semibold">Career opportunities after B.Tech Computer Science Engineering include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Data Scientist</li>
        <li>AI Engineer</li>
        <li>Cyber Security Analyst</li>
        <li>Cloud Engineer</li>
        <li>Web Developer</li>
      </ul>

      <p>Graduates may also pursue <strong>M.Tech, MBA, or research careers</strong>.</p>
    `,
  },
  {
    id: 25,
    question: "What government jobs are available after B.Tech?",
    content: `
      <p class="mb-2">
        B.Tech graduates can apply for many government jobs including:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>PSU jobs through GATE</li>
        <li>Indian Engineering Services (IES)</li>
        <li>Defence technical services</li>
        <li>Civil Services (UPSC)</li>
        <li>State engineering services</li>
      </ul>

      <p>
        Many public sector companies recruit engineers for infrastructure, energy, and technology projects.
      </p>
    `,
  },
  {
    id: 26,
    question: "Can I get government jobs after engineering?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Engineering graduates are eligible for several government job opportunities.
      </p>

      <p class="mb-2 font-semibold">Common exams include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>UPSC Civil Services</li>
        <li>GATE for PSU recruitment</li>
        <li>SSC exams</li>
        <li>State Public Service Commission exams</li>
      </ul>

      <p>
        Engineers are also recruited in <strong>railways, defence, power sector, and public infrastructure projects</strong>.
      </p>
    `,
  },
  {
    id: 27,
    question: "Is B.Tech CSE good for future careers?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> B.Tech CSE is considered one of the best engineering programs for future careers
        because of the rapid growth of the digital economy.
      </p>

      <p class="mb-2 font-semibold">Career opportunities exist in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>software development</li>
        <li>artificial intelligence</li>
        <li>cloud computing</li>
        <li>cybersecurity</li>
        <li>data science</li>
      </ul>

      <p>These fields are expected to grow significantly in the coming decades.</p>
    `,
  },
  {
    id: 28,
    question: "What is B.Tech Artificial Intelligence and Machine Learning?",
    content: `
      <p class="mb-3">
        <strong>B.Tech Artificial Intelligence and Machine Learning (AI &amp; ML)</strong> is an engineering
        program focused on developing intelligent computer systems.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>machine learning algorithms</li>
        <li>deep learning</li>
        <li>neural networks</li>
        <li>natural language processing</li>
        <li>computer vision</li>
      </ul>

      <p>Graduates work in AI companies, research organizations, and technology startups.</p>
    `,
  },
  {
    id: 29,
    question: "What is B.Tech Data Science?",
    content: `
      <p class="mb-3">
        <strong>B.Tech Data Science</strong> focuses on extracting insights from large datasets.
      </p>

      <p class="mb-2 font-semibold">Students study:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>statistics and mathematics</li>
        <li>programming languages</li>
        <li>machine learning</li>
        <li>big data analytics</li>
        <li>data visualization</li>
      </ul>

      <p>
        Data scientists are in high demand across industries such as
        <strong>finance, healthcare, e-commerce, and technology</strong>.
      </p>
    `,
  },
  {
    id: 30,
    question: "What is B.Tech Cyber Security?",
    content: `
      <p class="mb-3">
        <strong>B.Tech Cyber Security</strong> is an engineering program that focuses on protecting
        digital systems and networks from cyber threats.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>ethical hacking</li>
        <li>network security</li>
        <li>cryptography</li>
        <li>digital forensics</li>
        <li>cyber law</li>
      </ul>

      <p>
        Cyber security professionals work in <strong>IT companies, government agencies, and financial institutions</strong>.
      </p>
    `,
  },
  {
    id: 31,
    question: "What is B.Tech Electronics and Communication Engineering?",
    content: `
      <p class="mb-3">
        <strong>Electronics and Communication Engineering (ECE)</strong> deals with electronic systems
        and communication technologies.
      </p>

      <p class="mb-2 font-semibold">Subjects include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>embedded systems</li>
        <li>communication networks</li>
        <li>semiconductor devices</li>
        <li>signal processing</li>
      </ul>

      <p>
        Graduates work in <strong>telecommunications, electronics manufacturing, and semiconductor industries</strong>.
      </p>
    `,
  },
  {
    id: 32,
    question: "What is B.Tech Mechanical Engineering?",
    content: `
      <p class="mb-3">
        <strong>Mechanical Engineering</strong> focuses on designing and manufacturing machines and mechanical systems.
      </p>

      <p class="mb-2 font-semibold">Key areas include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>thermodynamics</li>
        <li>robotics</li>
        <li>manufacturing technology</li>
        <li>automotive engineering</li>
      </ul>

      <p>
        Mechanical engineers work in <strong>manufacturing industries, automobile companies, and energy sectors</strong>.
      </p>
    `,
  },
  {
    id: 33,
    question: "What is B.Tech Civil Engineering?",
    content: `
      <p class="mb-2">
        <strong>Civil Engineering</strong> focuses on designing and constructing infrastructure such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>roads</li>
        <li>bridges</li>
        <li>buildings</li>
        <li>dams</li>
        <li>transportation systems</li>
      </ul>

      <p>
        Civil engineers work in <strong>construction companies, government infrastructure projects, and urban planning organizations</strong>.
      </p>
    `,
  },
  {
    id: 34,
    question: "What is B.Tech Electrical Engineering?",
    content: `
      <p class="mb-3">
        <strong>Electrical Engineering</strong> deals with the generation, transmission, and distribution of electricity.
      </p>

      <p class="mb-2 font-semibold">Students study:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>power systems</li>
        <li>electrical machines</li>
        <li>renewable energy technologies</li>
      </ul>

      <p>
        Electrical engineers work in <strong>power plants, renewable energy companies, and electrical equipment industries</strong>.
      </p>
    `,
  },
  {
    id: 35,
    question: "What is EV Engineering and what is its scope in India?",
    content: `
      <p class="mb-3">
        <strong>EV Engineering</strong> focuses on electric vehicle technology and sustainable transportation systems.
      </p>

      <p class="mb-2 font-semibold">Students learn about:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>battery technologies</li>
        <li>electric powertrains</li>
        <li>energy management systems</li>
      </ul>

      <p>
        With India's push toward green mobility, EV engineers will have growing opportunities in
        <strong>automobile and clean energy industries</strong>.
      </p>
    `,
  },
  {
    id: 36,
    question: "What is Semiconductor Design Engineering?",
    content: `
      <p class="mb-2">
        <strong>Semiconductor Design Engineering</strong> focuses on designing microchips and electronic
        circuits used in devices such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>smartphones</li>
        <li>computers</li>
        <li>automobiles</li>
        <li>communication systems</li>
      </ul>

      <p>
        India's semiconductor mission is creating strong demand for chip design engineers.
      </p>
    `,
  },
  {
    id: 37,
    question: "Can I do B.Tech without JEE Main?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Many universities like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>
        offer direct admission based on Class 12 marks or their own entrance exams.
      </p>

      <p>
        Students should check the admission process and eligibility criteria of the university.
      </p>
    `,
  },
  {
    id: 38,
    question: "How can I take direct admission in B.Tech?",
    content: `
      <p class="mb-2 font-semibold">Direct admission usually requires:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>completion of Class 12 with Physics, Chemistry, and Mathematics</li>
        <li>minimum percentage as specified by the university</li>
        <li>submission of application form and documents</li>
      </ul>

      <p>Some universities may also conduct interviews or entrance assessments.</p>
    `,
  },
  {
    id: 39,
    question: "What percentage is required for B.Tech admission?",
    content: `
      <p class="mb-3">
        Most universities like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>
        require minimum <strong>45–50% marks in Class 12 with PCM subjects</strong>.
      </p>

      <p>Some institutions may have higher eligibility criteria depending on the program.</p>
    `,
  },
  {
    id: 40,
    question: "What subjects are taught in B.Tech CSE?",
    content: `
      <p class="mb-2 font-semibold">Common subjects include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>programming languages</li>
        <li>data structures</li>
        <li>operating systems</li>
        <li>database management systems</li>
        <li>computer networks</li>
        <li>artificial intelligence</li>
      </ul>

      <p>Students also complete <strong>projects, internships, and industry training</strong>.</p>
    `,
  },
  {
    id: 41,
    question: "How many years is a B.Tech program?",
    content: `
      <p class="mb-3">
        A standard B.Tech program lasts <strong>four years</strong>, divided into <strong>eight semesters</strong>.
      </p>

      <p>
        Students study theoretical subjects along with laboratory work, internships, and projects.
      </p>
    `,
  },
  {
    id: 42,
    question: "What is integrated B.Tech + M.Tech?",
    content: `
      <p class="mb-3">
        <strong>Integrated B.Tech + M.Tech</strong> is a combined five-year program where students
        complete both undergraduate and postgraduate engineering degrees together.
      </p>

      <p class="mb-2 font-semibold">Benefits include:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>shorter total study duration</li>
        <li>advanced specialization</li>
        <li>better research opportunities</li>
      </ul>
    `,
  },
  {
    id: 43,
    question: "What is integrated B.Tech + MBA?",
    content: `
      <p class="mb-3">
        <strong>Integrated B.Tech + MBA</strong> is a dual-degree program combining engineering and management education.
      </p>

      <p class="mb-2 font-semibold">Students gain skills in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>technology development</li>
        <li>business management</li>
        <li>entrepreneurship</li>
      </ul>

      <p>This program prepares graduates for <strong>technical leadership and managerial roles</strong>.</p>
    `,
  },
  {
    id: 44,
    question: "Is B.Tech good for students from UP?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> B.Tech provides excellent career opportunities for students from
        <strong>Gorakhpur, Varanasi, Azamgarh, Jaunpur</strong> and other districts of Uttar Pradesh.
      </p>

      <p class="mb-2 font-semibold">Engineering graduates can work in:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>IT companies</li>
        <li>infrastructure projects</li>
        <li>manufacturing industries</li>
        <li>government engineering services</li>
      </ul>
    `,
  },
  {
    id: 45,
    question: "Which engineering branch has the highest salary?",
    content: `
      <p class="mb-2 font-semibold">Branches with high salary potential include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Computer Science Engineering</li>
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>Semiconductor Engineering</li>
      </ul>

      <p>These fields are in demand due to the growth of technology and digital industries.</p>
    `,
  },
  {
    id: 46,
    question: "Which engineering branch has the most government jobs?",
    content: `
      <p class="mb-2 font-semibold">Engineering branches with strong government job opportunities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Civil Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Electrical Engineering</li>
        <li>Electronics Engineering</li>
      </ul>

      <p>These branches are important for <strong>public infrastructure and energy projects</strong>.</p>
    `,
  },
  {
    id: 47,
    question: "What is lateral entry in B.Tech?",
    content: `
      <p class="mb-3">
        <strong>Lateral entry</strong> allows diploma engineering students to enter directly into the
        second year of B.Tech.
      </p>

      <p>
        This reduces the total duration of the degree to <strong>three years</strong> instead of four.
      </p>
    `,
  },
  {
    id: 48,
    question: "Can diploma holders take admission in B.Tech?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Students who have completed a Diploma in Engineering can apply for
        <strong>lateral entry admission</strong> into the second year of B.Tech.
      </p>

      <p>Admission depends on eligibility criteria and seat availability.</p>
    `,
  },
  {
    id: 49,
    question: "What is the difference between diploma engineering and B.Tech?",
    content: `
      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">Diploma Engineering</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Tech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">3 years after Class 10</td>
              <td class="border border-gray-300 px-4 py-2">4 years after Class 12</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Focus on practical skills</td>
              <td class="border border-gray-300 px-4 py-2">Focus on engineering theory and design</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Entry-level technical roles</td>
              <td class="border border-gray-300 px-4 py-2">Engineering and leadership roles</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>B.Tech graduates usually have wider career opportunities.</p>
    `,
  },
  {
    id: 50,
    question: "Which engineering branch is best for the future?",
    content: `
      <p class="mb-2 font-semibold">Engineering branches expected to have strong future demand include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
        <li>Semiconductor Engineering</li>
        <li>Electric Vehicle Engineering</li>
      </ul>

      <p>These fields are aligned with global technology trends and digital innovation.</p>
    `,
  },
];

export const bcaItFaqData: AccordionItem[] = [
  // ============================================================
  // Section: BCA & IT Courses
  // ============================================================
  {
    id: 1,
    question: "What is BCA?",
    content: `
      <p class="mb-3">
        <strong>BCA (Bachelor of Computer Applications)</strong> is a 3-year undergraduate degree program
        in computer science and IT applications. The course focuses on programming, software development,
        database management, networking, and emerging technologies.
      </p>

      <p class="mb-2 font-semibold">Students learn subjects such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Programming languages (C, Java, Python)</li>
        <li>Data Structures</li>
        <li>Database Management Systems</li>
        <li>Web Development</li>
        <li>Cloud Computing and Cyber Security</li>
      </ul>

      <p>
        BCA is considered one of the best IT courses after Class 12 for students who want to build careers
        in <strong>software development, IT services, or technology companies</strong>.
      </p>
    `,
  },
  {
    id: 2,
    question: "Is BCA good for IT careers?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA is an excellent course for IT careers. It prepares students for roles
        in the rapidly growing technology sector.
      </p>

      <p class="mb-2 font-semibold">Common career paths after BCA include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>Data Analyst</li>
        <li>Cyber Security Analyst</li>
        <li>Cloud Engineer</li>
        <li>System Administrator</li>
      </ul>

      <p>
        With further specialization like <strong>MCA, MBA IT,</strong> or certifications in
        <strong>AI, Data Science, or Cloud Computing</strong>, BCA graduates can work in top IT companies
        in India and abroad.
      </p>
    `,
  },
  {
    id: 3,
    question: "What are the career options after BCA?",
    content: `
      <p class="mb-3">
        After completing BCA, students have multiple career and higher education options, such as:
      </p>

      <p class="mb-2 font-semibold">Job Roles</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>App Developer</li>
        <li>Database Administrator</li>
        <li>IT Support Engineer</li>
        <li>Network Administrator</li>
        <li>Data Analyst</li>
      </ul>

      <p class="mb-2 font-semibold">Higher Studies</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MCA (Master of Computer Applications)</li>
        <li>MBA in IT or Business Analytics</li>
        <li>M.Sc. Data Science</li>
        <li>Certifications in AI, Cloud Computing, or Cyber Security</li>
      </ul>

      <p>
        These options make BCA one of the most popular IT courses after Class 12 in Uttar Pradesh.
      </p>
    `,
  },
  {
    id: 4,
    question: "Can BCA students get government jobs?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA graduates are eligible for many government jobs in India.
      </p>

      <p class="mb-2 font-semibold">Some popular options include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Banking Jobs (IBPS PO, Clerk, SBI exams)</li>
        <li>SSC exams (SSC CGL, CHSL)</li>
        <li>UPPSC and State Government Jobs</li>
        <li>Railway Recruitment Board (RRB) exams</li>
        <li>Cyber Security and IT roles in government departments</li>
      </ul>

      <p>
        Many BCA graduates also prepare for <strong>UPPSC, UPSC, and other competitive exams</strong>.
      </p>
    `,
  },
  {
    id: 5,
    question: "What is the difference between BCA and B.Tech?",
    content: `
      <p class="mb-3">
        The main difference between BCA and B.Tech is the depth of engineering education.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">Feature</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">BCA</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Tech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Course Duration</td>
              <td class="border border-gray-300 px-4 py-2">3 years</td>
              <td class="border border-gray-300 px-4 py-2">4 years</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Focus</td>
              <td class="border border-gray-300 px-4 py-2">Software &amp; applications</td>
              <td class="border border-gray-300 px-4 py-2">Engineering + software</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Eligibility</td>
              <td class="border border-gray-300 px-4 py-2">Any stream (often with maths preferred)</td>
              <td class="border border-gray-300 px-4 py-2">Mostly PCM</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Technical Depth</td>
              <td class="border border-gray-300 px-4 py-2">Moderate</td>
              <td class="border border-gray-300 px-4 py-2">Advanced engineering level</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Best for</td>
              <td class="border border-gray-300 px-4 py-2">IT careers</td>
              <td class="border border-gray-300 px-4 py-2">Engineering &amp; research careers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Students interested primarily in <strong>software development and IT careers</strong> often choose
        BCA, while those interested in <strong>engineering and hardware technologies</strong> may choose B.Tech.
      </p>
    `,
  },
  {
    id: 6,
    question: "Is BCA better than B.Tech for some students?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA may be better for certain students, depending on their career goals.
      </p>

      <p class="mb-2 font-semibold">BCA may be ideal if:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>You want to work in software development or IT services</li>
        <li>You prefer a shorter 3-year course</li>
        <li>You come from Commerce or Arts background</li>
        <li>You want to pursue MCA later</li>
      </ul>

      <p>
        For students interested in core engineering fields like
        <strong>AI engineering, robotics, or electronics</strong>, B.Tech may be more suitable.
      </p>
    `,
  },
  {
    id: 7,
    question: "What is BCA with Data Science?",
    content: `
      <p class="mb-3">
        <strong>BCA with Data Science</strong> is a specialization that combines computer applications
        with data analytics and machine learning skills.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Python for Data Science</li>
        <li>Machine Learning</li>
        <li>Big Data Analytics</li>
        <li>Data Visualization</li>
        <li>Statistical Analysis</li>
      </ul>

      <p class="mb-2 font-semibold">Graduates can work as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Data Analyst</li>
        <li>Business Intelligence Analyst</li>
        <li>Machine Learning Engineer</li>
        <li>Data Scientist</li>
      </ul>

      <p>
        This specialization is increasingly popular in technology universities across
        <strong>Lucknow and Uttar Pradesh</strong>.
      </p>
    `,
  },
  {
    id: 8,
    question: "What is BCA with Cyber Security?",
    content: `
      <p class="mb-3">
        <strong>BCA with Cyber Security</strong> focuses on protecting computer systems, networks,
        and digital data from cyber threats.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Ethical Hacking</li>
        <li>Network Security</li>
        <li>Digital Forensics</li>
        <li>Cryptography</li>
        <li>Cyber Law</li>
      </ul>

      <p class="mb-2 font-semibold">Career opportunities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Cyber Security Analyst</li>
        <li>Ethical Hacker</li>
        <li>Security Consultant</li>
        <li>Network Security Engineer</li>
      </ul>

      <p>
        With increasing cyber threats worldwide, this is one of the most in-demand IT specializations in India.
      </p>
    `,
  },
  {
    id: 9,
    question: "What is BCA with Artificial Intelligence?",
    content: `
      <p class="mb-3">
        <strong>BCA with Artificial Intelligence (AI)</strong> teaches students how to develop intelligent
        systems and AI-powered applications.
      </p>

      <p class="mb-2 font-semibold">Key subjects include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Natural Language Processing</li>
        <li>Robotics Programming</li>
      </ul>

      <p class="mb-2 font-semibold">AI professionals are in high demand in sectors like:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Technology companies</li>
        <li>Healthcare</li>
        <li>Finance</li>
        <li>Automation industries</li>
      </ul>
    `,
  },
  {
    id: 10,
    question: "Can students from commerce or arts take admission in BCA?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Students from Commerce, Arts, or Science streams can take admission in BCA
        in many universities like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>.
      </p>

      <p class="mb-2 font-semibold">However:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Some universities require Mathematics in Class 12</li>
        <li>Others allow admission without Mathematics but include a bridge course</li>
      </ul>

      <p>
        This flexibility makes BCA a popular career option for students from different streams.
      </p>
    `,
  },
  {
    id: 11,
    question: "Is mathematics compulsory for BCA?",
    content: `
      <p class="mb-3">
        Mathematics requirements vary by university.
      </p>

      <p class="mb-2 font-semibold">In many institutions:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Mathematics is preferred but not mandatory</li>
        <li>Students without mathematics may take foundation courses in mathematics and programming</li>
      </ul>

      <p>
        Students interested in <strong>programming and logical thinking</strong> can still succeed in
        BCA even without advanced mathematics.
      </p>
    `,
  },
  {
    id: 12,
    question: "What jobs can I get after BCA?",
    content: `
      <p class="mb-2 font-semibold">BCA graduates can work in many IT-related roles such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>Mobile App Developer</li>
        <li>System Analyst</li>
        <li>Database Administrator</li>
        <li>Network Engineer</li>
        <li>IT Consultant</li>
      </ul>

      <p>
        With experience and certifications, graduates can work in
        <strong>major IT companies, startups, and multinational technology firms</strong>.
      </p>
    `,
  },
  {
    id: 13,
    question: "Can BCA students work in IT companies?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA graduates commonly work in IT companies.
      </p>

      <p class="mb-2 font-semibold">Many technology companies hire BCA graduates for roles such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Development</li>
        <li>Technical Support</li>
        <li>Web Development</li>
        <li>Testing and Quality Assurance</li>
        <li>Data Analytics</li>
      </ul>

      <p>
        After gaining experience or completing MCA, BCA graduates can reach
        <strong>senior roles in software engineering and IT management</strong>.
      </p>
    `,
  },
];

export const bcaFaqData: AccordionItem[] = [
  // ============================================================
  // Section: BCA & IT Courses
  // ============================================================
  {
    id: 1,
    question: "What is BCA?",
    content: `
      <p class="mb-3">
        <strong>BCA (Bachelor of Computer Applications)</strong> is a 3-year undergraduate degree program
        in computer science and IT applications. The course focuses on programming, software development,
        database management, networking, and emerging technologies.
      </p>

      <p class="mb-2 font-semibold">Students learn subjects such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Programming languages (C, Java, Python)</li>
        <li>Data Structures</li>
        <li>Database Management Systems</li>
        <li>Web Development</li>
        <li>Cloud Computing and Cyber Security</li>
      </ul>

      <p>
        BCA is considered one of the best IT courses after Class 12 for students who want to build careers
        in <strong>software development, IT services, or technology companies</strong>.
      </p>
    `,
  },
  {
    id: 2,
    question: "Is BCA good for IT careers?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA is an excellent course for IT careers. It prepares students for roles
        in the rapidly growing technology sector.
      </p>

      <p class="mb-2 font-semibold">Common career paths after BCA include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>Data Analyst</li>
        <li>Cyber Security Analyst</li>
        <li>Cloud Engineer</li>
        <li>System Administrator</li>
      </ul>

      <p>
        With further specialization like <strong>MCA, MBA IT,</strong> or certifications in
        <strong>AI, Data Science, or Cloud Computing</strong>, BCA graduates can work in top IT companies
        in India and abroad.
      </p>
    `,
  },
  {
    id: 3,
    question: "What are the career options after BCA?",
    content: `
      <p class="mb-3">
        After completing BCA, students have multiple career and higher education options, such as:
      </p>

      <p class="mb-2 font-semibold">Job Roles</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>App Developer</li>
        <li>Database Administrator</li>
        <li>IT Support Engineer</li>
        <li>Network Administrator</li>
        <li>Data Analyst</li>
      </ul>

      <p class="mb-2 font-semibold">Higher Studies</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MCA (Master of Computer Applications)</li>
        <li>MBA in IT or Business Analytics</li>
        <li>M.Sc. Data Science</li>
        <li>Certifications in AI, Cloud Computing, or Cyber Security</li>
      </ul>

      <p>
        These options make BCA one of the most popular IT courses after Class 12 in Uttar Pradesh.
      </p>
    `,
  },
  {
    id: 4,
    question: "Can BCA students get government jobs?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA graduates are eligible for many government jobs in India.
      </p>

      <p class="mb-2 font-semibold">Some popular options include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Banking Jobs (IBPS PO, Clerk, SBI exams)</li>
        <li>SSC exams (SSC CGL, CHSL)</li>
        <li>UPPSC and State Government Jobs</li>
        <li>Railway Recruitment Board (RRB) exams</li>
        <li>Cyber Security and IT roles in government departments</li>
      </ul>

      <p>
        Many BCA graduates also prepare for <strong>UPPSC, UPSC, and other competitive exams</strong>.
      </p>
    `,
  },
  {
    id: 5,
    question: "What is the difference between BCA and B.Tech?",
    content: `
      <p class="mb-3">
        The main difference between BCA and B.Tech is the depth of engineering education.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">Feature</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">BCA</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Tech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Course Duration</td>
              <td class="border border-gray-300 px-4 py-2">3 years</td>
              <td class="border border-gray-300 px-4 py-2">4 years</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Focus</td>
              <td class="border border-gray-300 px-4 py-2">Software &amp; applications</td>
              <td class="border border-gray-300 px-4 py-2">Engineering + software</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Eligibility</td>
              <td class="border border-gray-300 px-4 py-2">Any stream (often with maths preferred)</td>
              <td class="border border-gray-300 px-4 py-2">Mostly PCM</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Technical Depth</td>
              <td class="border border-gray-300 px-4 py-2">Moderate</td>
              <td class="border border-gray-300 px-4 py-2">Advanced engineering level</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Best for</td>
              <td class="border border-gray-300 px-4 py-2">IT careers</td>
              <td class="border border-gray-300 px-4 py-2">Engineering &amp; research careers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Students interested primarily in <strong>software development and IT careers</strong> often choose
        BCA, while those interested in <strong>engineering and hardware technologies</strong> may choose B.Tech.
      </p>
    `,
  },
  {
    id: 6,
    question: "Is BCA better than B.Tech for some students?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA may be better for certain students, depending on their career goals.
      </p>

      <p class="mb-2 font-semibold">BCA may be ideal if:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>You want to work in software development or IT services</li>
        <li>You prefer a shorter 3-year course</li>
        <li>You come from Commerce or Arts background</li>
        <li>You want to pursue MCA later</li>
      </ul>

      <p>
        For students interested in core engineering fields like
        <strong>AI engineering, robotics, or electronics</strong>, B.Tech may be more suitable.
      </p>
    `,
  },
  {
    id: 7,
    question: "What is BCA with Data Science?",
    content: `
      <p class="mb-3">
        <strong>BCA with Data Science</strong> is a specialization that combines computer applications
        with data analytics and machine learning skills.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Python for Data Science</li>
        <li>Machine Learning</li>
        <li>Big Data Analytics</li>
        <li>Data Visualization</li>
        <li>Statistical Analysis</li>
      </ul>

      <p class="mb-2 font-semibold">Graduates can work as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Data Analyst</li>
        <li>Business Intelligence Analyst</li>
        <li>Machine Learning Engineer</li>
        <li>Data Scientist</li>
      </ul>

      <p>
        This specialization is increasingly popular in technology universities across
        <strong>Lucknow and Uttar Pradesh</strong>.
      </p>
    `,
  },
  {
    id: 8,
    question: "What is BCA with Cyber Security?",
    content: `
      <p class="mb-3">
        <strong>BCA with Cyber Security</strong> focuses on protecting computer systems, networks,
        and digital data from cyber threats.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Ethical Hacking</li>
        <li>Network Security</li>
        <li>Digital Forensics</li>
        <li>Cryptography</li>
        <li>Cyber Law</li>
      </ul>

      <p class="mb-2 font-semibold">Career opportunities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Cyber Security Analyst</li>
        <li>Ethical Hacker</li>
        <li>Security Consultant</li>
        <li>Network Security Engineer</li>
      </ul>

      <p>
        With increasing cyber threats worldwide, this is one of the most in-demand IT specializations in India.
      </p>
    `,
  },
  {
    id: 9,
    question: "What is BCA with Artificial Intelligence?",
    content: `
      <p class="mb-3">
        <strong>BCA with Artificial Intelligence (AI)</strong> teaches students how to develop intelligent
        systems and AI-powered applications.
      </p>

      <p class="mb-2 font-semibold">Key subjects include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Natural Language Processing</li>
        <li>Robotics Programming</li>
      </ul>

      <p class="mb-2 font-semibold">AI professionals are in high demand in sectors like:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Technology companies</li>
        <li>Healthcare</li>
        <li>Finance</li>
        <li>Automation industries</li>
      </ul>
    `,
  },
  {
    id: 10,
    question: "Can students from commerce or arts take admission in BCA?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Students from Commerce, Arts, or Science streams can take admission in BCA
        in many universities like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>.
      </p>

      <p class="mb-2 font-semibold">However:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Some universities require Mathematics in Class 12</li>
        <li>Others allow admission without Mathematics but include a bridge course</li>
      </ul>

      <p>
        This flexibility makes BCA a popular career option for students from different streams.
      </p>
    `,
  },
  {
    id: 11,
    question: "Is mathematics compulsory for BCA?",
    content: `
      <p class="mb-3">
        Mathematics requirements vary by university.
      </p>

      <p class="mb-2 font-semibold">In many institutions:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Mathematics is preferred but not mandatory</li>
        <li>Students without mathematics may take foundation courses in mathematics and programming</li>
      </ul>

      <p>
        Students interested in <strong>programming and logical thinking</strong> can still succeed in
        BCA even without advanced mathematics.
      </p>
    `,
  },
  {
    id: 12,
    question: "What jobs can I get after BCA?",
    content: `
      <p class="mb-2 font-semibold">BCA graduates can work in many IT-related roles such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>Mobile App Developer</li>
        <li>System Analyst</li>
        <li>Database Administrator</li>
        <li>Network Engineer</li>
        <li>IT Consultant</li>
      </ul>

      <p>
        With experience and certifications, graduates can work in
        <strong>major IT companies, startups, and multinational technology firms</strong>.
      </p>
    `,
  },
  {
    id: 13,
    question: "Can BCA students work in IT companies?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA graduates commonly work in IT companies.
      </p>

      <p class="mb-2 font-semibold">Many technology companies hire BCA graduates for roles such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Software Development</li>
        <li>Technical Support</li>
        <li>Web Development</li>
        <li>Testing and Quality Assurance</li>
        <li>Data Analytics</li>
      </ul>

      <p>
        After gaining experience or completing MCA, BCA graduates can reach
        <strong>senior roles in software engineering and IT management</strong>.
      </p>
    `,
  },
  {
    id: 14,
    question: "What is MCA?",
    content: `
      <p class="mb-3">
        <strong>MCA (Master of Computer Applications)</strong> is a postgraduate degree in computer science
        and software development, usually pursued after BCA or B.Sc. IT.
      </p>

      <p class="mb-2 font-semibold">The course focuses on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Advanced Programming</li>
        <li>Artificial Intelligence</li>
        <li>Software Engineering</li>
        <li>Cloud Computing</li>
        <li>Data Science</li>
      </ul>

      <p>
        MCA helps students build <strong>advanced IT careers</strong> in software development and technology companies.
      </p>
    `,
  },
  {
    id: 15,
    question: "Is MCA equivalent to B.Tech?",
    content: `
      <p class="mb-3">
        MCA is not exactly equivalent to B.Tech, but both can lead to similar IT careers.
      </p>

      <p class="mb-2 font-semibold">Key differences:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>B.Tech is an undergraduate engineering degree</li>
        <li>MCA is a postgraduate degree focused on software applications</li>
      </ul>

      <p>
        Many companies treat <strong>BCA + MCA</strong> graduates similar to B.Tech graduates for IT roles.
      </p>
    `,
  },
  {
    id: 16,
    question: "What is the difference between MCA and M.Tech?",
    content: `
      <p class="mb-3">
        The difference lies in focus and eligibility.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">MCA</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">M.Tech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Focus on software applications</td>
              <td class="border border-gray-300 px-4 py-2">Focus on engineering research</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Usually after BCA or B.Sc. IT</td>
              <td class="border border-gray-300 px-4 py-2">Usually after B.Tech</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Industry oriented</td>
              <td class="border border-gray-300 px-4 py-2">Research oriented</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Both programs offer strong career opportunities in technology and software development.
      </p>
    `,
  },
  {
    id: 17,
    question: "Can BCA students do MBA?",
    content: `
      <p class="mb-2">
        <strong>Yes.</strong> BCA graduates can pursue MBA programs in fields like:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MBA in Information Technology</li>
        <li>MBA in Business Analytics</li>
        <li>MBA in Finance</li>
        <li>MBA in Marketing</li>
        <li>MBA in Entrepreneurship</li>
      </ul>

      <p>This combination helps students move into <strong>management roles in IT companies</strong>.</p>
    `,
  },
  {
    id: 18,
    question: "Which is better after BCA — MCA or MBA?",
    content: `
      <p class="mb-3">
        The best choice depends on career goals.
      </p>

      <p class="mb-2 font-semibold">Choose MCA if you want:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Technical careers</li>
        <li>Software development</li>
        <li>IT engineering roles</li>
      </ul>

      <p class="mb-2 font-semibold">Choose MBA if you want:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Management roles</li>
        <li>Business leadership</li>
        <li>Entrepreneurship</li>
        <li>IT project management</li>
      </ul>
    `,
  },
  {
    id: 19,
    question: "Is BCA good for students from UP?",
    content: `
      <p class="mb-3">
        <strong>Yes</strong>, BCA is a very good course for students from Uttar Pradesh.
      </p>

      <p class="mb-2 font-semibold">Reasons include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Strong demand for IT professionals</li>
        <li>Increasing opportunities in software companies and startups</li>
        <li>Possibility of working in national and international technology firms</li>
      </ul>

      <p>
        Many students from <strong>Gorakhpur, Azamgarh, Varanasi, Jaunpur, Ballia, and Deoria</strong>
        choose BCA to build careers in the IT sector.
      </p>
    `,
  },
  {
    id: 20,
    question: "Which universities in Lucknow offer BCA programs?",
    content: `
      <p class="mb-3">
        Lucknow has several universities like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>
        and institutes like
        <a href="https://srmcem.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMCEM</a>
        offering BCA programs.
      </p>

      <p class="mb-2 font-semibold">Students should choose institutions that provide:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Modern computer labs</li>
        <li>Industry-aligned curriculum</li>
        <li>Internship opportunities</li>
        <li>Placement support in IT companies</li>
      </ul>
    `,
  },
];

export const managementFaqData: AccordionItem[] = [
  // ============================================================
  // Section: Management Courses
  // ============================================================
  {
    id: 1,
    question: "What is BBA?",
    content: `
      <p class="mb-3">
        <strong>BBA (Bachelor of Business Administration)</strong> is a 3-year undergraduate management degree
        designed for students who want to build careers in business, entrepreneurship, corporate management,
        or startups.
      </p>

      <p class="mb-2 font-semibold">The BBA course teaches students fundamentals of:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Business management</li>
        <li>Marketing</li>
        <li>Finance</li>
        <li>Human resource management</li>
        <li>Business analytics</li>
        <li>Entrepreneurship</li>
      </ul>

      <p>
        BBA is one of the most popular courses after Class 12 in
        <strong>Lucknow and Uttar Pradesh</strong> for students interested in management and business careers.
      </p>
    `,
  },
  {
    id: 2,
    question: "What are the career options after BBA?",
    content: `
      <p class="mb-3">
        After completing BBA, students can pursue both jobs and higher education.
      </p>

      <p class="mb-2 font-semibold">Common career options include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Business Development Executive</li>
        <li>Marketing Executive</li>
        <li>Financial Analyst</li>
        <li>HR Executive</li>
        <li>Operations Manager</li>
        <li>Sales Manager</li>
      </ul>

      <p>
        Many students also pursue <strong>MBA (Master of Business Administration)</strong> to move into
        senior management roles.
      </p>
    `,
  },
  {
    id: 3,
    question: "Is BBA a good course after Class 12?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> BBA is an excellent course after Class 12 for students who want careers in
        business, management, corporate jobs, or entrepreneurship.
      </p>

      <p class="mb-2 font-semibold">Advantages of BBA include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Early exposure to business management</li>
        <li>Development of leadership and communication skills</li>
        <li>Strong foundation for MBA</li>
        <li>Opportunities in corporate companies and startups</li>
      </ul>

      <p>It is widely considered one of the best management courses after 12th in India.</p>
    `,
  },
  {
    id: 4,
    question: "What is the difference between BBA and B.Com?",
    content: `
      <p class="mb-3">
        Both BBA and B.Com are popular commerce-related courses but focus on different areas.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">Feature</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">BBA</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Com</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Focus</td>
              <td class="border border-gray-300 px-4 py-2">Business management</td>
              <td class="border border-gray-300 px-4 py-2">Commerce &amp; accounting</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Subjects</td>
              <td class="border border-gray-300 px-4 py-2">Marketing, HR, business strategy</td>
              <td class="border border-gray-300 px-4 py-2">Accounting, taxation, finance</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Career Path</td>
              <td class="border border-gray-300 px-4 py-2">Management &amp; corporate jobs</td>
              <td class="border border-gray-300 px-4 py-2">Accounting, finance, CA/CS</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Students interested in <strong>business leadership and management roles</strong> usually choose BBA.
      </p>
    `,
  },
  {
    id: 5,
    question: "Which is better — BBA or B.Com?",
    content: `
      <p class="mb-3">
        The choice between BBA and B.Com depends on career goals.
      </p>

      <p class="mb-2 font-semibold">Choose BBA if you want:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Management careers</li>
        <li>MBA in future</li>
        <li>Corporate leadership roles</li>
        <li>Entrepreneurship</li>
      </ul>

      <p class="mb-2 font-semibold">Choose B.Com if you want:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Accounting or finance careers</li>
        <li>Chartered Accountant (CA)</li>
        <li>Banking or taxation roles</li>
      </ul>

      <p>Both degrees offer strong career opportunities in India.</p>
    `,
  },
  {
    id: 6,
    question: "What government jobs are available after BBA?",
    content: `
      <p class="mb-2">
        BBA graduates can apply for many government jobs in India, such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Banking jobs (IBPS PO, Clerk, SBI exams)</li>
        <li>SSC exams (SSC CGL, CHSL)</li>
        <li>UPPSC and State Government Jobs</li>
        <li>Railway Recruitment Board exams</li>
        <li>Civil services preparation (UPSC / State PCS)</li>
      </ul>

      <p>Many management graduates pursue government careers after gaining experience.</p>
    `,
  },
  {
    id: 7,
    question: "What is BBA Business Analytics?",
    content: `
      <p class="mb-3">
        <strong>BBA in Business Analytics</strong> is a modern management specialization that combines
        business knowledge with data analysis and decision-making tools.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Data analytics</li>
        <li>Business intelligence</li>
        <li>Data visualization</li>
        <li>Predictive analytics</li>
        <li>Decision science</li>
      </ul>

      <p>
        This specialization prepares students for careers in
        <strong>data-driven business environments and consulting firms</strong>.
      </p>
    `,
  },
  {
    id: 8,
    question: "What is BBA AI Augmented Fintech?",
    content: `
      <p class="mb-3">
        <strong>BBA AI-Augmented FinTech</strong> is a new-age management program that integrates
        financial technology with artificial intelligence.
      </p>

      <p class="mb-2 font-semibold">Students study:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Digital banking</li>
        <li>Blockchain technology</li>
        <li>Artificial intelligence in finance</li>
        <li>Financial data analytics</li>
        <li>Cryptocurrency systems</li>
      </ul>

      <p>FinTech is one of the fastest growing sectors in India and globally.</p>
    `,
  },
  {
    id: 9,
    question: "What jobs can BBA graduates get?",
    content: `
      <p class="mb-2 font-semibold">BBA graduates can work in various corporate roles such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Marketing Executive</li>
        <li>Business Analyst</li>
        <li>Sales Manager</li>
        <li>HR Executive</li>
        <li>Operations Manager</li>
        <li>Financial Consultant</li>
      </ul>

      <p>
        With experience and higher studies, BBA graduates can move into
        <strong>senior management roles in companies and multinational corporations</strong>.
      </p>
    `,
  },
  {
    id: 10,
    question: "Can BBA students start their own business?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> BBA is an excellent course for aspiring entrepreneurs.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Business planning</li>
        <li>Marketing strategies</li>
        <li>Financial management</li>
        <li>Startup management</li>
        <li>Leadership skills</li>
      </ul>

      <p>
        Many successful entrepreneurs start their journey with management education like <strong>BBA and MBA</strong>.
      </p>
    `,
  },
  {
    id: 11,
    question: "What is MBA?",
    content: `
      <p class="mb-3">
        <strong>MBA (Master of Business Administration)</strong> is a 2-year postgraduate management degree
        that prepares students for leadership roles in organizations.
      </p>

      <p class="mb-2 font-semibold">MBA programs focus on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Strategic management</li>
        <li>Marketing</li>
        <li>Finance</li>
        <li>Operations management</li>
        <li>Entrepreneurship</li>
        <li>Business analytics</li>
      </ul>

      <p>MBA is one of the most recognized professional degrees for corporate leadership.</p>
    `,
  },
  {
    id: 12,
    question: "What are the specializations in MBA?",
    content: `
      <p class="mb-3">
        MBA offers multiple specializations depending on career goals.
      </p>

      <p class="mb-2 font-semibold">Popular MBA specializations include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Marketing Management</li>
        <li>Finance Management</li>
        <li>Human Resource Management</li>
        <li>Operations Management</li>
        <li>IT</li>
        <li>Business Analytics</li>
        <li>Healthcare Management</li>
        <li>Agribusiness Management</li>
        <li>FinTech</li>
      </ul>

      <p>Each specialization prepares students for different sectors of the economy.</p>
    `,
  },
  {
    id: 13,
    question: "What is MBA in Healthcare Management?",
    content: `
      <p class="mb-3">
        <strong>MBA in Healthcare Management</strong> prepares students to manage hospitals,
        healthcare organizations, and medical institutions.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Hospital administration</li>
        <li>Healthcare operations</li>
        <li>Healthcare finance</li>
        <li>Medical services management</li>
        <li>Healthcare policy</li>
      </ul>

      <p>
        This specialization is increasingly important due to the rapid growth of the
        <strong>healthcare sector in India</strong>.
      </p>
    `,
  },
  {
    id: 14,
    question: "What is MBA in Agribusiness Management?",
    content: `
      <p class="mb-3">
        <strong>MBA in Agribusiness Management</strong> focuses on managing businesses related to
        agriculture, food processing, and rural development.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agricultural marketing</li>
        <li>Supply chain management</li>
        <li>Food processing industry</li>
        <li>Rural finance</li>
        <li>Agribusiness entrepreneurship</li>
      </ul>

      <p>
        This specialization is particularly relevant for students from
        <strong>agriculture-focused regions like Uttar Pradesh</strong>.
      </p>
    `,
  },
  {
    id: 15,
    question: "What is MBA in Fintech?",
    content: `
      <p class="mb-3">
        <strong>MBA in FinTech (Financial Technology)</strong> combines finance, banking, and technology.
      </p>

      <p class="mb-2 font-semibold">Students study:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Digital banking</li>
        <li>Blockchain</li>
        <li>Artificial intelligence in finance</li>
        <li>Financial data analytics</li>
        <li>Digital payment systems</li>
      </ul>

      <p>
        FinTech professionals work in <strong>banks, fintech startups, and global financial companies</strong>.
      </p>
    `,
  },
  {
    id: 16,
    question: "What is MBA in Business Analytics?",
    content: `
      <p class="mb-3">
        <strong>MBA in Business Analytics</strong> focuses on using data analysis and technology to
        make business decisions.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Data analytics tools</li>
        <li>Predictive modeling</li>
        <li>Business intelligence systems</li>
        <li>Statistical analysis</li>
        <li>Data visualization</li>
      </ul>

      <p>
        Business analytics professionals are in high demand in sectors such as
        <strong>technology, consulting, and finance</strong>.
      </p>
    `,
  },
  {
    id: 17,
    question: "Is CAT required for MBA admission?",
    content: `
      <p class="mb-3">
        <strong>No</strong>, CAT is not mandatory for MBA admission in all universities.
      </p>

      <p class="mb-2 font-semibold">Some institutions accept:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>CAT</li>
        <li>MAT</li>
        <li>CMAT</li>
        <li>XAT</li>
        <li>State-level entrance tests</li>
        <li>University entrance tests</li>
      </ul>

      <p>
        Many universities also offer <strong>direct admission based on graduation marks and personal interviews</strong>.
      </p>
    `,
  },
  {
    id: 18,
    question: "Can students take MBA admission without CAT?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Many universities allow MBA admission without CAT.
      </p>

      <p class="mb-2 font-semibold">Admission may be based on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Graduation percentage</li>
        <li>University entrance tests</li>
        <li>Personal interview</li>
        <li>MAT or CMAT scores</li>
      </ul>

      <p>Students should check admission criteria of individual universities.</p>
    `,
  },
  {
    id: 19,
    question: "Which MBA specialization has the highest salary?",
    content: `
      <p class="mb-2 font-semibold">Some MBA specializations often offer higher salary potential, including:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MBA in Business Analytics</li>
        <li>MBA in Finance</li>
        <li>MBA in FinTech</li>
        <li>MBA in Business Analytics</li>
        <li>MBA in Marketing (in corporate roles)</li>
      </ul>

      <p>
        Salary levels depend on <strong>skills, experience, and the institution</strong> from which the
        MBA is completed.
      </p>
    `,
  },
  {
    id: 20,
    question: "Which MBA specialization is best for the future?",
    content: `
      <p class="mb-2 font-semibold">Future-focused MBA specializations include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Business Analytics</li>
        <li>FinTech</li>
        <li>Healthcare Management</li>
        <li>Agribusiness Management</li>
        <li>Artificial Intelligence and Data Analytics</li>
      </ul>

      <p>These sectors are expected to grow significantly in the coming decade.</p>
    `,
  },
  {
    id: 21,
    question: "Can engineers do MBA?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Engineering graduates commonly pursue MBA to move into
        management and leadership roles.
      </p>

      <p class="mb-2 font-semibold">Popular MBA paths for engineers include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MBA in Finance</li>
        <li>MBA in Business Analytics</li>
        <li>MBA in Operations</li>
        <li>MBA in Fintech</li>
      </ul>

      <p>This combination is highly valued in <strong>technology companies</strong>.</p>
    `,
  },
  {
    id: 22,
    question: "Can BCA students do MBA?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> BCA graduates are eligible for MBA programs.
      </p>

      <p class="mb-2 font-semibold">Many BCA graduates pursue:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MBA in Information Technology</li>
        <li>MBA in Business Analytics</li>
        <li>MBA in Marketing</li>
        <li>MBA in Entrepreneurship</li>
      </ul>

      <p>
        This combination helps them transition from <strong>technical roles to managerial positions</strong>.
      </p>
    `,
  },
  {
    id: 23,
    question: "Can B.Sc graduates do MBA?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> B.Sc graduates can pursue MBA after completing their undergraduate degree.
      </p>

      <p class="mb-2 font-semibold">MBA allows science graduates to build careers in:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Management</li>
        <li>Consulting</li>
        <li>Technology companies</li>
        <li>Entrepreneurship</li>
      </ul>
    `,
  },
  {
    id: 24,
    question: "What jobs are available after MBA?",
    content: `
      <p class="mb-2 font-semibold">MBA graduates can work in various leadership roles such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Business Manager</li>
        <li>Marketing Manager</li>
        <li>Financial Analyst</li>
        <li>HR Manager</li>
        <li>Operations Manager</li>
        <li>Business Consultant</li>
      </ul>

      <p>
        Many MBA graduates also work in <strong>multinational corporations, consulting firms, and startups</strong>.
      </p>
    `,
  },
  {
    id: 25,
    question: "Can MBA graduates get government jobs?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> MBA graduates are eligible for many government and public sector jobs, including:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Banking sector (IBPS, SBI)</li>
        <li>Civil services exams (UPSC / State PCS)</li>
        <li>Public sector undertakings (PSUs)</li>
        <li>Government administrative services</li>
      </ul>

      <p>MBA graduates often work in management roles in government organizations.</p>
    `,
  },
  {
    id: 26,
    question: "Which MBA specialization is best for students from UP?",
    content: `
      <p class="mb-3">
        Students from <strong>Uttar Pradesh</strong> often prefer MBA specializations that align with
        regional economic sectors, such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agribusiness Management</li>
        <li>Healthcare Management</li>
        <li>Marketing</li>
        <li>Finance</li>
        <li>Business Analytics</li>
      </ul>

      <p>
        These sectors provide opportunities in
        <strong>agriculture, healthcare services, banking, and emerging businesses</strong>.
      </p>
    `,
  },
  {
    id: 27,
    question: "Which MBA specialization is best for agriculture students?",
    content: `
      <p class="mb-2">
        Students with an agriculture background often choose:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>MBA in Agribusiness Management</li>
        <li>MBA in Rural Management</li>
        <li>MBA in Food Supply Chain Management</li>
        <li>MBA in Agricultural Marketing</li>
      </ul>

      <p>
        These programs prepare graduates for careers in
        <strong>agriculture companies, food processing industries, and rural development organizations</strong>.
      </p>
    `,
  },
  {
    id: 28,
    question: "What is the duration of MBA?",
    content: `
      <p class="mb-3">
        The standard duration of MBA in India is <strong>2 years</strong>, divided into four semesters.
      </p>

      <p>Some institutions also offer <strong>Executive MBA</strong> programs for working professionals.</p>
    `,
  },
  {
    id: 29,
    question: "What skills are required for management careers?",
    content: `
      <p class="mb-2 font-semibold">Successful management professionals typically develop skills such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Leadership and decision-making</li>
        <li>Communication and negotiation</li>
        <li>Problem-solving ability</li>
        <li>Analytical thinking</li>
        <li>Team management</li>
        <li>Strategic planning</li>
      </ul>

      <p>
        These skills are developed during BBA and MBA programs through
        <strong>projects, internships, and industry exposure</strong>.
      </p>
    `,
  },
  {
    id: 30,
    question: "Which college in Lucknow is best for BBA and MBA?",
    content: `
      <p class="mb-2">
        Students looking for BBA or MBA programs in Lucknow and Uttar Pradesh should consider
        institutions that offer:
      </p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Industry-aligned curriculum</li>
        <li>Experienced faculty</li>
        <li>Internship opportunities</li>
        <li>Corporate placements</li>
        <li>Modern learning infrastructure</li>
      </ul>
    `,
  },
];
export const agricultureFaqData: AccordionItem[] = [
  // ============================================================
  // Section: Agriculture Courses
  // ============================================================
  {
    id: 1,
    question: "What is B.Sc Agriculture?",
    content: `
      <p class="mb-3">
        <strong>B.Sc Agriculture (Bachelor of Science in Agriculture)</strong> is a 4-year undergraduate
        degree program that focuses on modern farming techniques, crop production, soil science,
        agricultural economics, and agribusiness management.
      </p>

      <p class="mb-3">
        The program teaches students how to improve agricultural productivity using
        <strong>scientific methods, technology, and sustainable farming practices</strong>.
      </p>

      <p>
        It is one of the most important career-oriented courses after Class 12 for students interested in
        <strong>agriculture, agribusiness, and rural development</strong>.
      </p>
    `,
  },
  {
    id: 2,
    question: "Is B.Sc Agriculture a good course?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> B.Sc Agriculture is considered a strong career course in India, especially
        because agriculture remains one of the country's largest economic sectors.
      </p>

      <p class="mb-2 font-semibold">Advantages of studying agriculture include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>High demand for agricultural professionals</li>
        <li>Government job opportunities</li>
        <li>Agribusiness entrepreneurship</li>
        <li>Research and development careers</li>
        <li>Opportunities in agricultural technology companies</li>
      </ul>

      <p>
        It is particularly valuable for students from
        <strong>agriculture-based regions like Uttar Pradesh</strong>.
      </p>
    `,
  },
  {
    id: 3,
    question: "What are the career options after B.Sc Agriculture?",
    content: `
      <p class="mb-3">
        Graduates of B.Sc Agriculture can work in various sectors including
        <strong>government, private companies, and agribusiness</strong>.
      </p>

      <p class="mb-2 font-semibold">Common career options include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agriculture Officer</li>
        <li>Agronomist</li>
        <li>Agricultural Scientist</li>
        <li>Soil Scientist</li>
        <li>Agribusiness Manager</li>
        <li>Agriculture Consultant</li>
        <li>Farm Manager</li>
      </ul>

      <p>
        Students can also pursue higher education such as
        <strong>M.Sc Agriculture or MBA in Agribusiness Management</strong>.
      </p>
    `,
  },
  {
    id: 4,
    question: "What government jobs are available after B.Sc Agriculture?",
    content: `
      <p class="mb-2">
        Agriculture graduates are eligible for many government jobs, including:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agriculture Development Officer (ADO)</li>
        <li>IBPS Agriculture Field Officer</li>
        <li>UPPSC Agriculture Officer</li>
        <li>Agriculture Research Services</li>
        <li>Food Corporation of India jobs</li>
        <li>State agriculture department jobs</li>
      </ul>

      <p>
        Many agriculture graduates also prepare for <strong>UPSC civil services and state PCS exams</strong>.
      </p>
    `,
  },
  {
    id: 5,
    question: "What is IBPS Agriculture Field Officer?",
    content: `
      <p class="mb-3">
        The <strong>IBPS Agriculture Field Officer (AFO)</strong> is a specialist officer position in
        public sector banks.
      </p>

      <p class="mb-2 font-semibold">Responsibilities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Providing loans to farmers</li>
        <li>Evaluating agricultural projects</li>
        <li>Supporting rural banking operations</li>
        <li>Promoting agricultural development schemes</li>
      </ul>

      <p>
        Agriculture graduates can apply for this position through the
        <strong>IBPS Specialist Officer examination</strong>.
      </p>
    `,
  },
  {
    id: 6,
    question: "Can agriculture graduates work in banks?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Agriculture graduates can work in banks and financial institutions.
      </p>

      <p class="mb-2 font-semibold">Common banking roles include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agriculture Field Officer</li>
        <li>Rural Development Officer</li>
        <li>Loan Officer for agricultural credit</li>
        <li>Banking specialist in rural finance</li>
      </ul>

      <p>
        Banks require agriculture professionals to support
        <strong>agricultural lending and rural development programs</strong>.
      </p>
    `,
  },
  {
    id: 7,
    question: "What is MBA Agribusiness Management?",
    content: `
      <p class="mb-3">
        <strong>MBA in Agribusiness Management</strong> is a postgraduate management program that focuses
        on the business side of agriculture and food industries.
      </p>

      <p class="mb-2 font-semibold">Students learn about:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agricultural marketing</li>
        <li>Supply chain management</li>
        <li>Food processing industry</li>
        <li>Agricultural finance</li>
        <li>Agribusiness entrepreneurship</li>
      </ul>

      <p>
        This program prepares students for leadership roles in
        <strong>agriculture companies, food corporations, and rural development organizations</strong>.
      </p>
    `,
  },
  {
    id: 8,
    question: "Is agriculture a good career for students from UP?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Agriculture is a very promising career for students from Uttar Pradesh,
        because the region has a strong agricultural economy.
      </p>

      <p class="mb-2 font-semibold">Opportunities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Farming technology innovation</li>
        <li>Agribusiness startups</li>
        <li>Agricultural research</li>
        <li>Government agricultural services</li>
        <li>Rural development programs</li>
      </ul>

      <p>
        Students from districts like
        <strong>Gorakhpur, Azamgarh, Varanasi, Deoria, Ballia, and Jaunpur</strong>
        often pursue agriculture careers due to strong regional demand.
      </p>
    `,
  },
  {
    id: 9,
    question: "Which universities offer agriculture courses in UP?",
    content: `
      <p class="mb-3">
        Many universities in Uttar Pradesh like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>
        offer B.Sc Agriculture programs.
      </p>

      <p class="mb-2 font-semibold">Students should choose universities that provide:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agricultural research facilities</li>
        <li>Modern laboratories and farms</li>
        <li>Internship opportunities</li>
        <li>Industry and agribusiness exposure</li>
      </ul>

      <p>
        Agriculture programs that integrate <strong>modern farming technology, agribusiness training,
        and research opportunities</strong> offer the best career prospects.
      </p>
    `,
  },
  {
    id: 10,
    question: "What subjects are taught in B.Sc Agriculture?",
    content: `
      <p class="mb-3">
        B.Sc Agriculture includes a wide range of subjects related to farming, science, and agribusiness.
      </p>

      <p class="mb-2 font-semibold">Important subjects include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agronomy</li>
        <li>Soil Science</li>
        <li>Agricultural Economics</li>
        <li>Plant Breeding</li>
        <li>Horticulture</li>
        <li>Agricultural Engineering</li>
        <li>Plant Pathology</li>
        <li>Agricultural Biotechnology</li>
      </ul>

      <p>
        These subjects help students understand
        <strong>modern agricultural practices and farm management techniques</strong>.
      </p>
    `,
  },
  {
    id: 11,
    question: "What is agronomy?",
    content: `
      <p class="mb-3">
        <strong>Agronomy</strong> is the branch of agricultural science that deals with
        crop production and soil management.
      </p>

      <p class="mb-2 font-semibold">Agronomists study:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Crop growth techniques</li>
        <li>Soil fertility</li>
        <li>Irrigation management</li>
        <li>Sustainable farming practices</li>
      </ul>

      <p>
        Agronomy plays a crucial role in improving <strong>crop productivity and food security</strong>.
      </p>
    `,
  },
  {
    id: 12,
    question: "What is agricultural economics?",
    content: `
      <p class="mb-3">
        <strong>Agricultural economics</strong> is the study of how agricultural products are
        produced, distributed, and marketed.
      </p>

      <p class="mb-2 font-semibold">This field focuses on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Farm management</li>
        <li>Agricultural policies</li>
        <li>Food supply chains</li>
        <li>Rural economic development</li>
      </ul>

      <p>
        Agricultural economists help improve <strong>farm profitability and agricultural markets</strong>.
      </p>
    `,
  },
  {
    id: 13,
    question: "What jobs are available in agritech companies?",
    content: `
      <p class="mb-3">
        <strong>Agritech companies</strong> combine technology with agriculture to improve farming efficiency.
      </p>

      <p class="mb-2 font-semibold">Common jobs include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agritech Analyst</li>
        <li>Farm Technology Consultant</li>
        <li>Agricultural Data Analyst</li>
        <li>Precision Farming Specialist</li>
        <li>Agricultural Software Developer</li>
      </ul>

      <p>
        Agritech startups are growing rapidly in India, creating new career opportunities
        for agriculture graduates.
      </p>
    `,
  },
  {
    id: 14,
    question: "What is ICAR and what does it do?",
    content: `
      <p class="mb-3">
        <strong>ICAR (Indian Council of Agricultural Research)</strong> is the main organization
        responsible for agricultural research and education in India.
      </p>

      <p class="mb-2 font-semibold">ICAR works on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agricultural innovation</li>
        <li>Crop improvement</li>
        <li>Farming technologies</li>
        <li>Agricultural education</li>
      </ul>

      <p>
        Many agriculture universities and research institutes in India operate under <strong>ICAR guidelines</strong>.
      </p>
    `,
  },
  {
    id: 15,
    question: "Can agriculture graduates become researchers?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Agriculture graduates can become researchers by pursuing higher studies such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>M.Sc Agriculture</li>
        <li>PhD in Agricultural Sciences</li>
        <li>Agricultural Research Services</li>
      </ul>

      <p class="mb-2 font-semibold">Researchers work in:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Agricultural universities</li>
        <li>Research institutes</li>
        <li>Government organizations</li>
        <li>International agricultural research programs</li>
      </ul>
    `,
  },
  {
    id: 16,
    question: "What is NABARD and what jobs are available there?",
    content: `
      <p class="mb-3">
        <strong>NABARD (National Bank for Agriculture and Rural Development)</strong> is a government
        financial institution that supports rural development and agriculture.
      </p>

      <p class="mb-2 font-semibold">Jobs available for agriculture graduates include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Development Officer</li>
        <li>Agricultural Finance Specialist</li>
        <li>Rural Development Consultant</li>
        <li>Banking Officer in agricultural lending</li>
      </ul>

      <p>
        NABARD plays a key role in financing
        <strong>agricultural and rural development projects in India</strong>.
      </p>
    `,
  },
  {
    id: 17,
    question: "Can agriculture graduates start their own agri-business?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Agriculture graduates can start their own agri-business ventures.
      </p>

      <p class="mb-2 font-semibold">Examples include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Organic farming</li>
        <li>Agri-tech startups</li>
        <li>Food processing businesses</li>
        <li>Seed production companies</li>
        <li>Agricultural consulting services</li>
      </ul>

      <p>
        Entrepreneurship in agriculture is growing due to
        <strong>government support and technology innovation</strong>.
      </p>
    `,
  },
  {
    id: 18,
    question: "What higher studies are available after B.Sc Agriculture?",
    content: `
      <p class="mb-2">
        Students can pursue several advanced programs after B.Sc Agriculture, such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>M.Sc Agriculture</li>
        <li>M.Sc Horticulture</li>
        <li>MBA in Agribusiness Management</li>
        <li>PhD in Agricultural Sciences</li>
      </ul>

      <p>
        Higher education helps students move into
        <strong>research, teaching, or management roles</strong> in agriculture industries.
      </p>
    `,
  },
  {
    id: 19,
    question: "Is agriculture better than biotechnology for some students?",
    content: `
      <p class="mb-3">
        For students interested in <strong>farming, rural development, and agribusiness</strong>,
        agriculture may be a better choice.
      </p>

      <p class="mb-2 font-semibold">Biotechnology is more suitable for students interested in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Laboratory research</li>
        <li>Genetic engineering</li>
        <li>Pharmaceutical biotechnology</li>
      </ul>

      <p>The best choice depends on <strong>career goals and academic interests</strong>.</p>
    `,
  },
  {
    id: 20,
    question: "Which agriculture jobs are available in Uttar Pradesh?",
    content: `
      <p class="mb-3">
        Uttar Pradesh offers many agriculture-related career opportunities.
      </p>

      <p class="mb-2 font-semibold">Common roles include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Agriculture Development Officer</li>
        <li>Agricultural Scientist</li>
        <li>Farm Manager</li>
        <li>Agricultural Consultant</li>
        <li>Rural Development Officer</li>
        <li>Agribusiness Manager</li>
      </ul>

      <p>
        Due to the state's strong agricultural economy, agriculture professionals are needed in
        <strong>government departments, agritech companies, banks, and agricultural industries</strong>.
      </p>
    `,
  },
];
export const biotechnologyFaqData: AccordionItem[] = [
  // ============================================================
  // Section: Biotechnology & Life Sciences Courses
  // ============================================================
  {
    id: 1,
    question: "What is biotechnology?",
    content: `
      <p class="mb-3">
        <strong>Biotechnology</strong> is a scientific field that uses living organisms, cells, and biological
        systems to develop products and technologies that improve
        <strong>healthcare, agriculture, food production, and environmental sustainability</strong>.
      </p>

      <p class="mb-2 font-semibold">Biotechnology combines knowledge from:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Genetics</li>
        <li>Computer science</li>
        <li>Engineering</li>
      </ul>

      <p>
        Biotechnology innovations are widely used in
        <strong>pharmaceutical medicines, vaccines, genetically improved crops, and diagnostic technologies</strong>.
      </p>
    `,
  },
  {
    id: 2,
    question: "What is B.Sc Biotechnology?",
    content: `
      <p class="mb-3">
        <strong>B.Sc Biotechnology (Bachelor of Science in Biotechnology)</strong> is a 3-year undergraduate
        degree program that focuses on the study of biological systems and their technological applications.
      </p>

      <p class="mb-2 font-semibold">Students study subjects such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Molecular Biology</li>
        <li>Genetics</li>
        <li>Microbiology</li>
        <li>Biochemistry</li>
        <li>Cell Biology</li>
        <li>Bioinformatics</li>
      </ul>

      <p>
        This program prepares students for careers in
        <strong>research laboratories, pharmaceutical companies, and biotechnology industries</strong>.
      </p>
    `,
  },
  {
    id: 3,
    question: "What is B.Tech Biotechnology?",
    content: `
      <p class="mb-3">
        <strong>B.Tech Biotechnology (Bachelor of Technology in Biotechnology)</strong> is a 4-year
        engineering-based biotechnology degree that combines biology with engineering and technology.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Genetic engineering</li>
        <li>Bioprocess engineering</li>
        <li>Industrial biotechnology</li>
        <li>Bioinformatics</li>
        <li>Biomedical technologies</li>
      </ul>

      <p>
        B.Tech Biotechnology graduates often work in
        <strong>biotechnology industries, pharmaceutical companies, and research laboratories</strong>.
      </p>
    `,
  },
  {
    id: 4,
    question: "What is the difference between B.Sc and B.Tech Biotechnology?",
    content: `
      <p class="mb-3">
        The main difference lies in the approach and technical depth.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">Feature</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Sc Biotechnology</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Tech Biotechnology</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Duration</td>
              <td class="border border-gray-300 px-4 py-2">3 years</td>
              <td class="border border-gray-300 px-4 py-2">4 years</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Focus</td>
              <td class="border border-gray-300 px-4 py-2">Scientific research</td>
              <td class="border border-gray-300 px-4 py-2">Engineering applications</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Subjects</td>
              <td class="border border-gray-300 px-4 py-2">Biology-focused</td>
              <td class="border border-gray-300 px-4 py-2">Biology + engineering</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Career Path</td>
              <td class="border border-gray-300 px-4 py-2">Research &amp; academics</td>
              <td class="border border-gray-300 px-4 py-2">Biotechnology industries</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Students interested in <strong>research and higher studies</strong> may choose B.Sc, while those
        interested in <strong>biotech industries and technology development</strong> may prefer B.Tech Biotechnology.
      </p>
    `,
  },
  {
    id: 5,
    question: "What are the career options after biotechnology?",
    content: `
      <p class="mb-3">
        Biotechnology graduates can work in multiple sectors such as
        <strong>healthcare, pharmaceuticals, agriculture, and research</strong>.
      </p>

      <p class="mb-2 font-semibold">Common career options include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Biotechnologist</li>
        <li>Research Scientist</li>
        <li>Clinical Research Associate</li>
        <li>Bioinformatics Analyst</li>
        <li>Pharmaceutical Scientist</li>
        <li>Quality Control Analyst</li>
      </ul>

      <p>
        Higher studies such as <strong>M.Sc Biotechnology, MBA Biotechnology Management, or PhD</strong>
        further expand career opportunities.
      </p>
    `,
  },
  {
    id: 6,
    question: "What jobs are available in pharmaceutical companies?",
    content: `
      <p class="mb-2">
        Biotechnology graduates can work in pharmaceutical companies in roles such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Research Scientist</li>
        <li>Clinical Research Associate</li>
        <li>Drug Development Specialist</li>
        <li>Quality Control Analyst</li>
        <li>Regulatory Affairs Officer</li>
        <li>Bioprocess Engineer</li>
      </ul>

      <p>
        Pharmaceutical companies require biotechnology professionals to develop
        <strong>vaccines, medicines, and diagnostic technologies</strong>.
      </p>
    `,
  },
  {
    id: 7,
    question: "Can biotechnology graduates work in research institutes?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Biotechnology graduates can work in research institutes and scientific laboratories.
      </p>

      <p class="mb-2 font-semibold">Some well-known research organizations include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>CSIR laboratories</li>
        <li>ICMR institutes</li>
        <li>DBT research centers</li>
        <li>Agricultural research institutes</li>
      </ul>

      <p>
        Many students pursue <strong>M.Sc and PhD</strong> programs to build careers in biotechnology research.
      </p>
    `,
  },
  {
    id: 8,
    question: "What government jobs are available after biotechnology?",
    content: `
      <p class="mb-2">
        Biotechnology graduates can apply for several government positions such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Scientist positions in research institutes</li>
        <li>Laboratory technician roles</li>
        <li>Drug inspector jobs</li>
        <li>Public health research positions</li>
        <li>Teaching positions after qualifying eligibility tests</li>
      </ul>

      <p>Government research organizations regularly recruit biotechnology professionals.</p>
    `,
  },
  {
    id: 9,
    question: "What is UGC NET Life Sciences?",
    content: `
      <p class="mb-3">
        <strong>UGC NET Life Sciences</strong> is a national-level examination conducted for eligibility in
        assistant professor positions and research fellowships in India.
      </p>

      <p class="mb-2 font-semibold">Students with postgraduate degrees in biotechnology or life sciences can qualify for:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Assistant Professor positions in universities</li>
        <li>Junior Research Fellowship (JRF)</li>
        <li>Research careers in life sciences</li>
      </ul>
    `,
  },
  {
    id: 10,
    question: "What is GATE Biotechnology?",
    content: `
      <p class="mb-3">
        <strong>GATE Biotechnology (Graduate Aptitude Test in Engineering)</strong> is a national-level
        examination for admission into postgraduate engineering and research programs.
      </p>

      <p class="mb-2 font-semibold">GATE scores are used for:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>M.Tech Biotechnology admissions</li>
        <li>PhD programs</li>
        <li>Recruitment in public sector undertakings (PSUs)</li>
      </ul>

      <p>
        This exam is important for biotechnology students interested in
        <strong>advanced research or engineering careers</strong>.
      </p>
    `,
  },
  {
    id: 11,
    question: "What is microbiology?",
    content: `
      <p class="mb-3">
        <strong>Microbiology</strong> is the study of microscopic organisms such as
        <strong>bacteria, viruses, fungi, and algae</strong>.
      </p>

      <p class="mb-2 font-semibold">Microbiologists study how microorganisms affect:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Human health</li>
        <li>Agriculture</li>
        <li>Food production</li>
        <li>Environmental ecosystems</li>
      </ul>

      <p>
        Microbiology plays a major role in <strong>medicine, vaccines, and food safety</strong>.
      </p>
    `,
  },
  {
    id: 12,
    question: "What careers are available in microbiology?",
    content: `
      <p class="mb-3">
        Microbiology graduates can work in fields such as
        <strong>healthcare, research, and pharmaceuticals</strong>.
      </p>

      <p class="mb-2 font-semibold">Career options include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Microbiologist</li>
        <li>Clinical laboratory scientist</li>
        <li>Research scientist</li>
        <li>Quality control analyst</li>
        <li>Pharmaceutical researcher</li>
      </ul>

      <p>Microbiologists are also employed in <strong>food industries and environmental laboratories</strong>.</p>
    `,
  },
  {
    id: 13,
    question: "What is food technology?",
    content: `
      <p class="mb-3">
        <strong>Food technology</strong> is the study of how food is
        <strong>processed, preserved, packaged, and distributed</strong> safely.
      </p>

      <p class="mb-2 font-semibold">Food technologists work on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Food safety and quality</li>
        <li>Food processing techniques</li>
        <li>Nutritional improvement</li>
        <li>Food packaging technologies</li>
      </ul>

      <p>
        This field is essential for the
        <strong>food processing industry and food safety management</strong>.
      </p>
    `,
  },
  {
    id: 14,
    question: "What jobs are available after food technology?",
    content: `
      <p class="mb-2">
        Graduates in food technology can work in various industries such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Food processing companies</li>
        <li>Quality control laboratories</li>
        <li>Food safety agencies</li>
        <li>Research institutes</li>
        <li>Food product development teams</li>
      </ul>

      <p>
        Job roles include
        <strong>food technologist, quality assurance manager, and food safety officer</strong>.
      </p>
    `,
  },
  {
    id: 15,
    question: "What is nutrition and dietetics?",
    content: `
      <p class="mb-3">
        <strong>Nutrition and Dietetics</strong> is the study of food, nutrition, and their impact on human health.
      </p>

      <p class="mb-3">
        Professionals in this field help people
        <strong>maintain healthy diets and prevent diseases</strong> related to nutrition.
      </p>

      <p class="mb-2 font-semibold">They work in:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Hospitals</li>
        <li>Wellness centers</li>
        <li>Fitness organizations</li>
        <li>Public health programs</li>
      </ul>
    `,
  },
  {
    id: 16,
    question: "What careers are available in nutrition?",
    content: `
      <p class="mb-2 font-semibold">Careers in nutrition include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Clinical Dietitian</li>
        <li>Nutrition Consultant</li>
        <li>Public Health Nutritionist</li>
        <li>Food Safety Specialist</li>
        <li>Wellness Coach</li>
      </ul>

      <p>
        Nutrition professionals are in demand in
        <strong>healthcare institutions, fitness industries, and public health programs</strong>.
      </p>
    `,
  },
  {
    id: 17,
    question: "What is public health?",
    content: `
      <p class="mb-3">
        <strong>Public health</strong> focuses on protecting and improving the health of communities through
        <strong>disease prevention, health education, and healthcare policy</strong>.
      </p>

      <p class="mb-2 font-semibold">Public health professionals work on issues such as:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>Disease prevention</li>
        <li>Vaccination programs</li>
        <li>Health awareness campaigns</li>
        <li>Environmental health</li>
      </ul>
    `,
  },
  {
    id: 18,
    question: "What is Master of Public Health (MPH)?",
    content: `
      <p class="mb-3">
        <strong>Master of Public Health (MPH)</strong> is a postgraduate degree focused on improving
        community health and healthcare systems.
      </p>

      <p class="mb-2 font-semibold">Students study:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Epidemiology</li>
        <li>Health policy</li>
        <li>Public health management</li>
        <li>Disease prevention strategies</li>
      </ul>

      <p>
        MPH graduates work in
        <strong>government health departments, NGOs, international health organizations, and research institutions</strong>.
      </p>
    `,
  },
  {
    id: 19,
    question: "Can biotechnology graduates pursue PhD?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Biotechnology graduates can pursue PhD programs in
        <strong>biotechnology, microbiology, genetics, and related life sciences fields</strong>.
      </p>

      <p class="mb-2 font-semibold">PhD programs allow students to build careers in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Scientific research</li>
        <li>University teaching</li>
        <li>Biotechnology innovation</li>
        <li>Pharmaceutical research</li>
      </ul>

      <p>
        Many PhD students work in
        <strong>advanced research laboratories and international scientific institutions</strong>.
      </p>
    `,
  },
  {
    id: 20,
    question: "Is biotechnology a good career for the future?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Biotechnology is considered one of the most promising career fields of the future.
      </p>

      <p class="mb-2 font-semibold">The demand for biotechnology professionals is growing due to developments in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Healthcare and vaccines</li>
        <li>Genetic engineering</li>
        <li>Agricultural biotechnology</li>
        <li>Environmental sustainability</li>
        <li>Bioinformatics and drug development</li>
      </ul>

      <p>
        Biotechnology offers opportunities in
        <strong>research, healthcare, pharmaceuticals, and global scientific innovation</strong>.
      </p>
    `,
  },
];
export const lawFaqData: AccordionItem[] = [
  // ============================================================
  // Section: Law Courses
  // ============================================================
  {
    id: 1,
    question: "What is BA LLB?",
    content: `
      <p class="mb-3">
        <strong>BA LLB (Bachelor of Arts + Bachelor of Laws)</strong> is a 5-year integrated law degree
        program that combines arts subjects with legal education.
      </p>

      <p class="mb-2 font-semibold">Students study subjects such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Political Science</li>
        <li>Sociology</li>
        <li>Constitutional Law</li>
        <li>Criminal Law</li>
        <li>Contract Law</li>
      </ul>

      <p>
        BA LLB prepares students for careers in
        <strong>legal practice, judiciary, corporate law, and civil services</strong>.
      </p>
    `,
  },
  {
    id: 2,
    question: "What is BBA LLB?",
    content: `
      <p class="mb-3">
        <strong>BBA LLB (Bachelor of Business Administration + Bachelor of Laws)</strong> is a 5-year
        integrated law program that combines business management with legal studies.
      </p>

      <p class="mb-2 font-semibold">Students learn:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Business law</li>
        <li>Corporate law</li>
        <li>Business management</li>
        <li>Financial regulations</li>
        <li>Legal drafting and advocacy</li>
      </ul>

      <p>
        This program is ideal for students interested in
        <strong>corporate law, business law, and legal consultancy for companies</strong>.
      </p>
    `,
  },
  {
    id: 3,
    question: "What is the difference between BA LLB and BBA LLB?",
    content: `
      <p class="mb-3">
        The main difference between BA LLB and BBA LLB is the academic focus.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">BA LLB</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">BBA LLB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Focus on arts and social sciences</td>
              <td class="border border-gray-300 px-4 py-2">Focus on business and management</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Subjects like sociology and political science</td>
              <td class="border border-gray-300 px-4 py-2">Subjects like management and finance</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Suitable for judiciary and civil services</td>
              <td class="border border-gray-300 px-4 py-2">Suitable for corporate law careers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Both programs lead to <strong>legal practice and advocacy careers</strong>.</p>
    `,
  },
  {
    id: 4,
    question: "What jobs can law graduates get?",
    content: `
      <p class="mb-2">
        Law graduates have a wide range of career opportunities including:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Advocate or Lawyer</li>
        <li>Legal Advisor</li>
        <li>Corporate Legal Consultant</li>
        <li>Public Prosecutor</li>
        <li>Legal Analyst</li>
        <li>Legal Journalist</li>
      </ul>

      <p>
        Many law graduates also work in
        <strong>corporate firms, government departments, and international organizations</strong>.
      </p>
    `,
  },
  {
    id: 5,
    question: "Can law graduates become judges?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Law graduates can become judges by clearing the
        <strong>Judicial Services Examination</strong> conducted by state public service commissions.
      </p>

      <p class="mb-2 font-semibold">To become a judge, candidates typically need:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>A law degree (LLB)</li>
        <li>Qualification in judicial service exams</li>
        <li>Legal practice experience in some states</li>
      </ul>

      <p>Judicial officers work in <strong>district courts and higher judiciary systems</strong>.</p>
    `,
  },
  {
    id: 6,
    question: "What is the Judicial Services Examination?",
    content: `
      <p class="mb-3">
        The <strong>Judicial Services Examination</strong> is a competitive exam conducted by state
        governments to recruit civil judges and judicial magistrates.
      </p>

      <p class="mb-2 font-semibold">The exam usually includes:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Preliminary exam</li>
        <li>Main written exam</li>
        <li>Interview</li>
      </ul>

      <p>Candidates with <strong>LLB degrees</strong> can apply for this exam.</p>
    `,
  },
  {
    id: 7,
    question: "What government jobs are available after LLB?",
    content: `
      <p class="mb-2">
        Law graduates can apply for several government positions such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Judicial services (Civil Judge)</li>
        <li>Public Prosecutor</li>
        <li>Legal Advisor in government departments</li>
        <li>Law Officer in public sector undertakings</li>
        <li>Assistant Public Prosecutor</li>
      </ul>

      <p>
        Law graduates are also eligible for civil services exams like
        <strong>UPSC and State PCS</strong>.
      </p>
    `,
  },
  {
    id: 8,
    question: "Can law graduates appear for civil services?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Law graduates can appear for civil services examinations conducted by
        <strong>UPSC and State Public Service Commissions</strong>.
      </p>

      <p>
        Many successful civil servants in India have a background in law because legal studies provide
        strong knowledge of <strong>constitution, governance, and public administration</strong>.
      </p>
    `,
  },
  {
    id: 9,
    question: "What is corporate law?",
    content: `
      <p class="mb-3">
        <strong>Corporate law</strong> deals with legal rules governing companies and business organizations.
      </p>

      <p class="mb-2 font-semibold">Corporate lawyers handle issues such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Company formation</li>
        <li>Mergers and acquisitions</li>
        <li>Corporate compliance</li>
        <li>Business contracts</li>
        <li>Financial regulations</li>
      </ul>

      <p>Corporate law is one of the <strong>most lucrative legal specializations</strong> in India.</p>
    `,
  },
  {
    id: 10,
    question: "What is criminal law?",
    content: `
      <p class="mb-3">
        <strong>Criminal law</strong> deals with crimes and legal punishment for offenses against society.
      </p>

      <p class="mb-2 font-semibold">Criminal lawyers represent clients in cases related to:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Theft</li>
        <li>Fraud</li>
        <li>Assault</li>
        <li>Cybercrime</li>
        <li>Murder and serious crimes</li>
      </ul>

      <p>
        Criminal lawyers practice in
        <strong>courts, law firms, and government prosecution offices</strong>.
      </p>
    `,
  },
  {
    id: 11,
    question: "What is constitutional law?",
    content: `
      <p class="mb-3">
        <strong>Constitutional law</strong> focuses on the interpretation and application of a country's constitution.
      </p>

      <p class="mb-2 font-semibold">In India, constitutional law deals with topics such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Fundamental rights</li>
        <li>Powers of government institutions</li>
        <li>Judicial review</li>
        <li>Constitutional amendments</li>
      </ul>

      <p>
        Constitutional lawyers often work in
        <strong>high courts, the Supreme Court, and policy advisory roles</strong>.
      </p>
    `,
  },
  {
    id: 12,
    question: "What is international law?",
    content: `
      <p class="mb-3">
        <strong>International law</strong> governs relationships between
        <strong>countries, international organizations, and global institutions</strong>.
      </p>

      <p class="mb-2 font-semibold">It covers areas such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>International trade agreements</li>
        <li>Human rights law</li>
        <li>Diplomatic relations</li>
        <li>International environmental law</li>
      </ul>

      <p>
        Lawyers specializing in international law may work with
        <strong>global organizations and multinational companies</strong>.
      </p>
    `,
  },
  {
    id: 13,
    question: "What is LLM?",
    content: `
      <p class="mb-3">
        <strong>LLM (Master of Laws)</strong> is a postgraduate law degree pursued after completing LLB.
      </p>

      <p class="mb-3">
        LLM allows students to <strong>specialize in specific legal fields</strong> and develop advanced legal expertise.
      </p>

      <p>The program usually lasts <strong>1–2 years</strong> depending on the university.</p>
    `,
  },
  {
    id: 14,
    question: "What are the specializations in LLM?",
    content: `
      <p class="mb-2 font-semibold">Common LLM specializations include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Corporate Law</li>
        <li>Criminal Law</li>
        <li>Constitutional Law</li>
        <li>International Law</li>
        <li>Intellectual Property Law</li>
        <li>Human Rights Law</li>
      </ul>

      <p>
        Choosing a specialization helps lawyers build <strong>expertise in a particular legal field</strong>.
      </p>
    `,
  },
  {
    id: 15,
    question: "Is CLAT required for law admission?",
    content: `
      <p class="mb-3">
        <strong>CLAT (Common Law Admission Test)</strong> is required for admission into
        <strong>National Law Universities (NLUs)</strong>.
      </p>

      <p class="mb-2 font-semibold">However, many universities and private institutions offer law admissions through:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>their own entrance exams</li>
        <li>merit-based admissions</li>
        <li>other law entrance tests</li>
      </ul>
    `,
  },
  {
    id: 16,
    question: "Can students take law admission without CLAT?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Many universities allow law admission without CLAT scores.
      </p>

      <p class="mb-2 font-semibold">Admission may be based on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Class 12 marks</li>
        <li>university entrance tests</li>
        <li>personal interviews</li>
      </ul>

      <p>Students should check individual university admission requirements.</p>
    `,
  },
  {
    id: 17,
    question: "How many years is BA LLB?",
    content: `
      <p class="mb-3">
        The BA LLB integrated law program lasts <strong>5 years</strong>, divided into <strong>ten semesters</strong>.
      </p>

      <p>
        The program combines <strong>arts education with legal training</strong>, allowing students to
        pursue law directly after Class 12.
      </p>
    `,
  },
  {
    id: 18,
    question: "What skills are required to become a lawyer?",
    content: `
      <p class="mb-2 font-semibold">Successful lawyers usually develop skills such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Strong communication and argumentation</li>
        <li>Analytical thinking</li>
        <li>Legal research ability</li>
        <li>Negotiation and persuasion skills</li>
        <li>Knowledge of legal procedures</li>
      </ul>

      <p>
        These skills are developed through
        <strong>law education, internships, and court practice</strong>.
      </p>
    `,
  },
  {
    id: 19,
    question: "Is law a good career in India?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Law is considered a respected and rewarding career in India.
      </p>

      <p class="mb-2 font-semibold">Career opportunities exist in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>legal practice</li>
        <li>corporate law firms</li>
        <li>judiciary</li>
        <li>government legal services</li>
        <li>international organizations</li>
      </ul>

      <p>
        Experienced lawyers can build successful careers in
        <strong>litigation, consultancy, and corporate legal services</strong>.
      </p>
    `,
  },
  {
    id: 20,
    question: "Which university in Lucknow offers law programs?",
    content: `
      <p class="mb-3">
        Several universities and institutions in Lucknow and Uttar Pradesh like
        <a href="https://srmu.ac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">SRMU</a>
        offer law programs such as <strong>BA LLB and BBA LLB</strong>.
      </p>

      <p class="mb-2 font-semibold">Students should select institutions that provide:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>experienced law faculty</li>
        <li>moot court training</li>
        <li>internships with legal firms</li>
        <li>exposure to courts and legal practice</li>
      </ul>

      <p>
        Law programs with strong <strong>practical training and legal research opportunities</strong>
        help students build successful legal careers.
      </p>
    `,
  },
];
export const pharmacyFaqData: AccordionItem[] = [
  // ============================================================
  // Section: Pharmacy Courses
  // ============================================================
  {
    id: 1,
    question: "What is B.Pharma?",
    content: `
      <p class="mb-3">
        <strong>B.Pharma (Bachelor of Pharmacy)</strong> is a 4-year undergraduate degree program that
        focuses on the science of <strong>medicines, drug development, and pharmaceutical technology</strong>.
      </p>

      <p class="mb-2 font-semibold">Students study subjects such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Pharmaceutical Chemistry</li>
        <li>Pharmacology</li>
        <li>Pharmaceutics</li>
        <li>Pharmacognosy</li>
        <li>Drug formulation and manufacturing</li>
      </ul>

      <p>
        B.Pharma prepares students for careers in
        <strong>pharmaceutical companies, hospitals, research laboratories, and regulatory organizations</strong>.
      </p>
    `,
  },
  {
    id: 2,
    question: "What is D.Pharma?",
    content: `
      <p class="mb-3">
        <strong>D.Pharma (Diploma in Pharmacy)</strong> is a 2-year diploma program designed for students
        who want to start careers in the pharmacy sector quickly.
      </p>

      <p class="mb-2 font-semibold">The course focuses on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Basic pharmaceutical sciences</li>
        <li>Drug dispensing</li>
        <li>Pharmacy practice</li>
        <li>Hospital pharmacy</li>
      </ul>

      <p>
        D.Pharma graduates often work as pharmacists in
        <strong>hospitals, clinics, and medical stores</strong>.
      </p>
    `,
  },
  {
    id: 3,
    question: "What is the difference between B.Pharma and D.Pharma?",
    content: `
      <p class="mb-3">
        The main difference between B.Pharma and D.Pharma is the level of education and career opportunities.
      </p>

      <div class="overflow-x-auto mb-3">
        <table class="min-w-full border border-gray-300 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 font-semibold">Feature</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">B.Pharma</th>
              <th class="border border-gray-300 px-4 py-2 font-semibold">D.Pharma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Duration</td>
              <td class="border border-gray-300 px-4 py-2">4 years</td>
              <td class="border border-gray-300 px-4 py-2">2 years</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Degree</td>
              <td class="border border-gray-300 px-4 py-2">Undergraduate degree</td>
              <td class="border border-gray-300 px-4 py-2">Diploma</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Career Scope</td>
              <td class="border border-gray-300 px-4 py-2">Research, industry, hospitals</td>
              <td class="border border-gray-300 px-4 py-2">Pharmacy practice</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-medium">Higher Studies</td>
              <td class="border border-gray-300 px-4 py-2">Eligible for M.Pharma</td>
              <td class="border border-gray-300 px-4 py-2">Limited higher study options</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Students seeking <strong>advanced pharmaceutical careers and research roles</strong>
        often choose B.Pharma.
      </p>
    `,
  },
  {
    id: 4,
    question: "Can pharmacy graduates work in hospitals?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Pharmacy graduates can work in hospitals as <strong>hospital pharmacists</strong>.
      </p>

      <p class="mb-2 font-semibold">Their responsibilities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Dispensing medicines prescribed by doctors</li>
        <li>Managing hospital drug inventory</li>
        <li>Advising patients on medication use</li>
        <li>Ensuring safe drug administration</li>
      </ul>

      <p>
        Hospitals require qualified pharmacists to ensure
        <strong>proper medication management and patient safety</strong>.
      </p>
    `,
  },
  {
    id: 5,
    question: "What government jobs are available after pharmacy?",
    content: `
      <p class="mb-2">
        Pharmacy graduates can apply for various government jobs such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Drug Inspector</li>
        <li>Pharmacist in government hospitals</li>
        <li>Pharmaceutical research scientist</li>
        <li>Medical officer positions in public health programs</li>
        <li>Jobs in government drug regulatory authorities</li>
      </ul>

      <p>
        Many government organizations recruit pharmacy professionals to ensure
        <strong>drug safety and healthcare services</strong>.
      </p>
    `,
  },
  {
    id: 6,
    question: "What is Drug Inspector?",
    content: `
      <p class="mb-3">
        A <strong>Drug Inspector</strong> is a government officer responsible for ensuring the
        <strong>quality, safety, and proper manufacturing of medicines</strong>.
      </p>

      <p class="mb-2 font-semibold">Responsibilities include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Inspecting pharmaceutical companies</li>
        <li>Monitoring drug manufacturing standards</li>
        <li>Checking drug quality in the market</li>
        <li>Preventing sale of counterfeit medicines</li>
      </ul>

      <p>Drug Inspectors work under <strong>government drug regulatory departments</strong>.</p>
    `,
  },
  {
    id: 7,
    question: "Can pharmacy graduates open medical stores?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Pharmacy graduates can open medical stores or pharmacies after obtaining
        the required <strong>drug license</strong> from the drug control authority.
      </p>

      <p class="mb-2 font-semibold">To run a medical store:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>The owner must have a pharmacy qualification (D.Pharma or B.Pharma).</li>
        <li>The pharmacy must comply with drug licensing regulations.</li>
      </ul>

      <p>
        Many pharmacy graduates become <strong>pharmaceutical entrepreneurs</strong>
        by opening their own pharmacies.
      </p>
    `,
  },
  {
    id: 8,
    question: "What higher studies are available after B.Pharma?",
    content: `
      <p class="mb-2">
        After completing B.Pharma, students can pursue higher education such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>M.Pharma (Master of Pharmacy)</li>
        <li>MBA in Pharmaceutical Management</li>
        <li>Clinical Research programs</li>
        <li>PhD in Pharmaceutical Sciences</li>
      </ul>

      <p>
        Higher studies help students move into
        <strong>research, pharmaceutical management, and advanced healthcare careers</strong>.
      </p>
    `,
  },
  {
    id: 9,
    question: "What is M.Pharma?",
    content: `
      <p class="mb-3">
        <strong>M.Pharma (Master of Pharmacy)</strong> is a postgraduate pharmacy degree that focuses on
        <strong>advanced pharmaceutical research and drug development</strong>.
      </p>

      <p class="mb-2 font-semibold">Students can specialize in fields such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Pharmaceutics</li>
        <li>Pharmacology</li>
        <li>Pharmaceutical Chemistry</li>
        <li>Pharmaceutical Biotechnology</li>
        <li>Drug Regulatory Affairs</li>
      </ul>

      <p>
        M.Pharma graduates often work in
        <strong>research laboratories, pharmaceutical companies, and academic institutions</strong>.
      </p>
    `,
  },
  {
    id: 10,
    question: "Is pharmacy a good career in India?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Pharmacy is considered a stable and growing career in India due to the
        expansion of the <strong>healthcare and pharmaceutical industries</strong>.
      </p>

      <p class="mb-2 font-semibold">Career opportunities exist in:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Pharmaceutical companies</li>
        <li>Hospitals and healthcare organizations</li>
        <li>Drug regulatory authorities</li>
        <li>Research laboratories</li>
        <li>Medical stores and pharmaceutical entrepreneurship</li>
      </ul>

      <p>
        The demand for pharmacy professionals is increasing with the growth of
        <strong>healthcare services, biotechnology, and pharmaceutical manufacturing</strong> in India.
      </p>
    `,
  },
];
export const srmuAdmissionsFaqData: AccordionItem[] = [
  // ============================================================
  // Section: SRMU Admissions, Campus & Facilities
  // ============================================================
  {
    id: 1,
    question: "How can students apply for admission at SRMU?",
    content: `
      <p class="mb-3">
        Students can apply for admission at <strong>Shri Ramswaroop Memorial University (SRMU)</strong>
        through the online admission portal available on the official website.
      </p>

      <p class="mb-2 font-semibold">The application process usually includes:</p>

      <ol class="list-decimal pl-6 space-y-1 mb-3">
        <li>Filling out the online application form</li>
        <li>Uploading required documents</li>
        <li>Paying the application fee</li>
        <li>Verification of eligibility</li>
        <li>Confirmation of admission after fee payment</li>
      </ol>

      <p>
        Students may also contact the <strong>admissions office</strong> or visit the campus for
        counselling and guidance.
      </p>
    `,
  },
  {
    id: 2,
    question: "What documents are required for admission?",
    content: `
      <p class="mb-2">
        Students generally need to submit the following documents during admission:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Class 10 mark sheet and certificate</li>
        <li>Class 12 mark sheet and certificate</li>
        <li>Graduation mark sheet (for postgraduate programs)</li>
        <li>Passport-size photographs</li>
        <li>Identity proof</li>
        <li>Migration certificate (if applicable)</li>
      </ul>

      <p>
        Additional documents may be required depending on the
        <strong>course and eligibility criteria</strong>.
      </p>
    `,
  },
  {
    id: 3,
    question: "What is the application fee for admission?",
    content: `
      <p class="mb-3">
        Students applying for admission are required to pay a
        <strong>non-refundable application fee</strong> through the online admission portal.
      </p>

      <p>
        The exact fee amount may vary depending on the admission cycle and program, and students
        should check the <strong>official SRMU admission portal</strong> for the latest details.
      </p>
    `,
  },
  {
    id: 4,
    question: "What is the admission process for undergraduate programs?",
    content: `
      <p class="mb-2">
        Admission to undergraduate programs generally includes the following steps:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Submission of the online application form</li>
        <li>Verification of eligibility based on Class 12 marks</li>
        <li>Document verification</li>
        <li>Payment of admission fee</li>
      </ul>

      <p>Some programs may also involve <strong>entrance tests or counselling sessions</strong>.</p>
    `,
  },
  {
    id: 5,
    question: "What is the admission process for postgraduate programs?",
    content: `
      <p class="mb-2">
        Admission to postgraduate programs usually requires:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Completion of a relevant bachelor's degree</li>
        <li>Submission of the application form</li>
        <li>Document verification</li>
        <li>Fee payment</li>
      </ul>

      <p>
        Certain postgraduate programs may consider
        <strong>entrance test scores or interviews</strong> depending on the specialization.
      </p>
    `,
  },
  {
    id: 6,
    question: "Can students apply if their Class 12 results are awaited?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Students whose Class 12 results are awaited can apply for admission.
      </p>

      <p>
        However, the admission may remain <strong>provisional</strong> until the final mark sheet
        is submitted and eligibility criteria are verified.
      </p>
    `,
  },
  {
    id: 7,
    question: "Can students apply if they have a compartment in Class 12?",
    content: `
      <p class="mb-3">
        Students with a compartment in Class 12 may apply <strong>provisionally</strong>, but they
        must clear the subject and submit the updated mark sheet within the specified deadline.
      </p>

      <p>Admission confirmation depends on fulfilling the required eligibility criteria.</p>
    `,
  },
  {
    id: 8,
    question: "What is lateral entry admission?",
    content: `
      <p class="mb-3">
        <strong>Lateral entry admission</strong> allows diploma holders to take admission directly
        into the <strong>second year of a B.Tech program</strong>.
      </p>

      <p>
        Students who have completed <strong>Diploma in Engineering</strong> can apply for lateral
        entry based on eligibility criteria and seat availability.
      </p>
    `,
  },
  {
    id: 9,
    question: "What is the migration certificate requirement?",
    content: `
      <p class="mb-3">
        Students who have completed their previous education from another board or university must
        submit a <strong>migration certificate</strong> during the admission process.
      </p>

      <p>
        This certificate allows the university to officially transfer the student's academic record.
      </p>
    `,
  },
  {
    id: 10,
    question: "What is the refund policy for admission cancellation?",
    content: `
      <p class="mb-3">
        If a student cancels admission, the fee refund is processed according to
        <strong>UGC guidelines and university policies</strong>.
      </p>

      <p class="mb-2 font-semibold">The refundable amount depends on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Date of cancellation</li>
        <li>Admission timeline</li>
        <li>Applicable deductions</li>
      </ul>

      <p>Students should check the <strong>official refund policy</strong> provided during admission.</p>
    `,
  },
  {
    id: 11,
    question: "Are online classes available at SRMU?",
    content: `
      <p class="mb-3">
        SRMU primarily offers <strong>offline classroom-based learning</strong> to ensure practical
        exposure, laboratory training, and interaction with faculty.
      </p>

      <p class="mb-2 font-semibold">However, digital learning tools such as:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Learning Management Systems (LMS)</li>
        <li>Recorded lectures</li>
        <li>Online study resources</li>
      </ul>

      <p>may also be used to support academic learning.</p>
    `,
  },
  {
    id: 12,
    question: "Does SRMU provide hostel facilities?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> SRMU provides separate hostel facilities for boys and girls within the campus.
      </p>

      <p class="mb-2 font-semibold">Hostel facilities typically include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Furnished rooms</li>
        <li>Dining and mess facilities</li>
        <li>Internet connectivity</li>
        <li>Security and surveillance</li>
        <li>Recreational areas</li>
      </ul>

      <p>Many students from <strong>Uttar Pradesh</strong> stay in campus hostels.</p>
    `,
  },
  {
    id: 13,
    question: "Is the campus safe for students?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> The campus is designed to provide a safe and secure environment for students.
      </p>

      <p class="mb-2 font-semibold">Safety measures include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Campus security personnel</li>
        <li>CCTV surveillance</li>
        <li>Controlled campus entry</li>
        <li>Hostel wardens and supervision</li>
      </ul>

      <p>
        These measures ensure a secure academic environment for students from different regions.
      </p>
    `,
  },
  {
    id: 14,
    question: "Are there scholarships available for students?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> SRMU offers various scholarship schemes for deserving students.
      </p>

      <p class="mb-2 font-semibold">Scholarships may be based on:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Academic merit</li>
        <li>Entrance exam performance</li>
        <li>Special categories of students</li>
      </ul>

      <p>
        Scholarships help support students in pursuing higher education with
        <strong>financial assistance</strong>.
      </p>
    `,
  },
  {
    id: 15,
    question: "Can students from UP apply for UP government scholarships?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Students from Uttar Pradesh districts can apply for
        <strong>Uttar Pradesh Government Post-Matric Scholarships</strong> through the official
        scholarship portal.
      </p>

      <p class="mb-2 font-semibold">These scholarships are available for students belonging to categories such as:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>SC</li>
        <li>ST</li>
        <li>OBC</li>
        <li>Economically weaker sections</li>
      </ul>
    `,
  },
  {
    id: 16,
    question: "Are SRMU degrees valid for government jobs?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> Degrees from SRMU are valid for government job applications and higher
        education, provided the candidate meets the eligibility criteria mentioned in the recruitment notification.
      </p>

      <p class="mb-2 font-semibold">Graduates can apply for exams such as:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>UPSC Civil Services</li>
        <li>UPPSC</li>
        <li>SSC exams</li>
        <li>Banking exams</li>
        <li>Government sector jobs</li>
      </ul>
    `,
  },
  {
    id: 17,
    question: "What placement support does SRMU provide?",
    content: `
      <p class="mb-3">
        SRMU has a <strong>Training and Placement Cell</strong> that supports students in preparing
        for careers.
      </p>

      <p class="mb-2 font-semibold">Placement support includes:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Career guidance</li>
        <li>Industry interaction programs</li>
        <li>Skill development workshops</li>
        <li>Interview preparation</li>
        <li>Campus recruitment drives</li>
      </ul>

      <p>These initiatives help students prepare for <strong>corporate and professional careers</strong>.</p>
    `,
  },
  {
    id: 18,
    question: "Which companies recruit from SRMU?",
    content: `
      <p class="mb-3">
        Various companies from sectors such as
        <strong>IT, finance, consulting, healthcare, and manufacturing</strong>
        participate in campus recruitment.
      </p>

      <p class="mb-2 font-semibold">Companies usually look for students with:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>strong academic performance</li>
        <li>technical skills</li>
        <li>communication abilities</li>
      </ul>

      <p>The placement cell helps connect students with <strong>recruiters and industry opportunities</strong>.</p>
    `,
  },
  {
    id: 19,
    question: "How far is SRMU from Lucknow city?",
    content: `
      <p class="mb-3">
        SRMU is located near <strong>Lucknow–Deva Road in Barabanki district</strong>, which is
        close to Lucknow city.
      </p>

      <p>
        The campus is easily accessible from
        <strong>Lucknow railway station and airport</strong> by road transport.
      </p>
    `,
  },
  {
    id: 20,
    question: "How can students from Gorakhpur reach SRMU?",
    content: `
      <p class="mb-2 font-semibold">Students from Gorakhpur can reach SRMU by:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Train to Lucknow</li>
        <li>Bus services to Lucknow</li>
        <li>Private transport via highways</li>
      </ul>

      <p>
        From Lucknow, the university campus is accessible by
        <strong>road transport or local vehicles</strong>.
      </p>
    `,
  },
  {
    id: 21,
    question: "How can students from Varanasi reach SRMU?",
    content: `
      <p class="mb-2 font-semibold">Students from Varanasi can travel to Lucknow through:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Railways</li>
        <li>State transport buses</li>
        <li>Private vehicles</li>
      </ul>

      <p>
        After reaching Lucknow, the SRMU campus is easily accessible via
        <strong>Lucknow–Deva Road</strong>.
      </p>
    `,
  },
  {
    id: 22,
    question: "Do many students from UP study at SRMU?",
    content: `
      <p class="mb-3">
        <strong>Yes.</strong> A large number of students at SRMU come from Uttar Pradesh districts, including:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Gorakhpur</li>
        <li>Azamgarh</li>
        <li>Jaunpur</li>
        <li>Ballia</li>
        <li>Deoria</li>
        <li>Mau</li>
        <li>Ghazipur</li>
      </ul>

      <p>
        The university attracts students due to
        <strong>academic programs, accessibility, and campus facilities</strong>.
      </p>
    `,
  },
  {
    id: 23,
    question: "What facilities are available on campus?",
    content: `
      <p class="mb-2">
        SRMU campus provides a range of facilities such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Modern classrooms</li>
        <li>Advanced laboratories</li>
        <li>Central library</li>
        <li>Computer labs</li>
        <li>Wi-Fi-enabled campus</li>
        <li>Hostel accommodation</li>
        <li>Sports facilities</li>
      </ul>

      <p>These facilities help create a <strong>supportive academic environment</strong> for students.</p>
    `,
  },
  {
    id: 24,
    question: "What clubs and activities are available for students?",
    content: `
      <p class="mb-2 font-semibold">Students can participate in various clubs and student activities including:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Cultural clubs</li>
        <li>Technical clubs</li>
        <li>Entrepreneurship clubs</li>
        <li>Debate and literary societies</li>
        <li>Innovation and startup activities</li>
      </ul>

      <p>
        These activities help students develop
        <strong>leadership and teamwork skills</strong>.
      </p>
    `,
  },
  {
    id: 25,
    question: "What sports facilities are available at SRMU?",
    content: `
      <p class="mb-2">
        SRMU encourages sports and physical activities through facilities such as:
      </p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Cricket ground</li>
        <li>Football ground</li>
        <li>Basketball courts</li>
        <li>Indoor sports facilities</li>
        <li>Fitness and recreational areas</li>
      </ul>

      <p>
        Students often participate in
        <strong>university and inter-college sports competitions</strong>.
      </p>
    `,
  },
  {
    id: 26,
    question: "What career counselling support does SRMU provide?",
    content: `
      <p class="mb-3">
        The university provides <strong>career counselling and academic guidance</strong> through
        faculty advisors and placement professionals.
      </p>

      <p class="mb-2 font-semibold">Students receive guidance on:</p>

      <ul class="list-disc pl-6 space-y-1">
        <li>career planning</li>
        <li>higher education opportunities</li>
        <li>skill development</li>
        <li>job preparation</li>
      </ul>
    `,
  },
  {
    id: 27,
    question: "What internship opportunities are available?",
    content: `
      <p class="mb-3">
        Students are encouraged to participate in
        <strong>internships during their academic programs</strong>.
      </p>

      <p class="mb-2 font-semibold">Internships help students:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>gain industry exposure</li>
        <li>apply classroom knowledge in real situations</li>
        <li>build professional skills</li>
      </ul>

      <p>
        Many internships are arranged through
        <strong>industry collaborations and placement support</strong>.
      </p>
    `,
  },
  {
    id: 28,
    question: "How does SRMU help students prepare for government exams?",
    content: `
      <p class="mb-2 font-semibold">Students interested in government careers receive support through:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>academic mentoring</li>
        <li>career counselling</li>
        <li>guidance for competitive exams</li>
        <li>skill development programs</li>
      </ul>

      <p>
        Many students prepare for exams such as
        <strong>UPPSC, UPSC, banking, and other government recruitment exams</strong>.
      </p>
    `,
  },
  {
    id: 29,
    question: "What makes SRMU different from other universities in UP?",
    content: `
      <p class="mb-3">
        SRMU focuses on providing
        <strong>career-oriented education, modern infrastructure, and industry-aligned programs</strong>.
      </p>

      <p class="mb-2 font-semibold">Key features include:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>multidisciplinary academic programs</li>
        <li>experienced faculty</li>
        <li>practical learning and research opportunities</li>
        <li>student development initiatives</li>
      </ul>

      <p>
        These factors help students prepare for
        <strong>professional careers and higher education</strong>.
      </p>
    `,
  },
  {
    id: 30,
    question: "Why should students from Uttar Pradesh choose SRMU?",
    content: `
      <p class="mb-2 font-semibold">Students from Uttar Pradesh often choose SRMU because of:</p>

      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>accessibility from cities like Gorakhpur, Varanasi, and Azamgarh</li>
        <li>availability of diverse academic programs</li>
        <li>campus facilities and hostels</li>
        <li>opportunities for skill development and career growth</li>
      </ul>

      <p>
        The university provides an environment where students can build
        <strong>knowledge, professional skills, and future career opportunities</strong>.
      </p>
    `,
  },
];
