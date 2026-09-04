import React from "react";
import { Link } from "react-router-dom";

interface RelatedProps {
  currentSlug?: string;
}

interface ArticleLink {
  title: string;
  slug: string;
  category: string;
}

interface ProgramLink {
  title: string;
  path: string;
}

export const ALL_TARGET_BLOGS: ArticleLink[] = [
  // Computer Science, AI & IT
  { title: "Semiconductor Engineering Careers in India 2026: Skills, Jobs, Salary & Future Scope", slug: "semiconductor-engineering-careers-india-skills-jobs-salary-future-scope", category: "cs" },
  { title: "Top Future Tech Skills Students Should Learn in 2026", slug: "top-future-tech-skills-students-should-learn-in-2026", category: "cs" },
  { title: "IT Industry Trends Students Should Know in 2026", slug: "it-industry-trends-students-should-know-in-2026", category: "cs" },
  { title: "Cybersecurity Careers in India: Scope, Jobs, Salary & Opportunities", slug: "cybersecurity-careers-in-india-scope-jobs-salary-future-opportunities-2026", category: "cs" },
  { title: "Top Skills for Computer Science Students in 2026 for High-Paying Jobs", slug: "top-skills-for-computer-science-students-in-2026-for-high-paying-jobs-and-placements", category: "cs" },
  { title: "Top Programming Languages for AI, Data Science & Tech Careers in 2026", slug: "top-programming-languages-students-should-learn-for-ai-data-science-future-tech-careers-in-2026", category: "cs" },
  { title: "BCA Course: Career Scope, Salary, Jobs & Future After 12th", slug: "bca-course-career-scope-salary-jobs-future-after-12th-2026", category: "cs" },
  { title: "Best Engineering Branch for 2026: CSE vs AI vs IT", slug: "best-engineering-branch-for-2026-cse-vs-ai-vs-it-scope-salary-future-trends", category: "cs" },
  { title: "What is BCA: Eligibility, Subjects & Career Scope", slug: "what-is-bca-eligibility-subjects-career-scope", category: "cs" },
  { title: "Top Careers in AI, Data Science & Cybersecurity 2026", slug: "top-careers-in-ai-data-science-cybersecurity-2026-jobs-salary-scope-best-courses", category: "cs" },
  { title: "BCA vs B.Tech CSE: Which is Better for IT Careers?", slug: "bca-vs-btech-cse-which-is-better-it-careers", category: "cs" },
  { title: "What is Computer Science Engineering: Course & Scope", slug: "what-is-computer-science-engineering-course-scope", category: "cs" },
  { title: "Why B.Tech in Computer Science is the Smartest Career Move in 2025", slug: "why-b-tech-in-computer-science-is-the-smartest-career-move-in-2025", category: "cs" },
  { title: "Explore the World of Programming with the BCA Program", slug: "explore-the-world-of-programming-with-the-bca-program", category: "cs" },
  { title: "Top Colleges for B.Tech in Computer Science in Lucknow & Nearby Cities", slug: "top-colleges-for-b-tech-in-computer-science-in-lucknow-nearby-cities-best-picks-for-2025", category: "cs" },
  { title: "B.Tech CSE in Data Science & AI for a Future-Ready Career", slug: "btech-cse-in-data-science-and-ai-for-a-future-ready-career", category: "cs" },
  { title: "B.Tech in AI & Machine Learning (AIML) in Lucknow: Scope & Admission", slug: "b-tech-in-artificial-intelligence-machine-learning-aiml-in-lucknow-scope-admission-career-opportunities", category: "cs" },
  { title: "Why Choose SRMU for a Bachelor of Computer Applications (BCA) Program", slug: "why-choose-srmu-for-a-bachelor-of-computer-applications-bca-program", category: "cs" },
  { title: "Top Cybersecurity Programs to Consider for a Successful Career", slug: "top-cybersecurity-programs-to-consider-for-a-successful-career", category: "cs" },
  { title: "Top 10 BCA Colleges in Lucknow, Uttar Pradesh for Aspiring IT Professionals", slug: "top-10-bca-colleges-in-lucknow-uttar-pradesh-for-aspiring-it-professionals", category: "cs" },
  { title: "Top 5 Engineering Colleges in Uttar Pradesh for Technology Careers", slug: "top-5-engineering-colleges-in-uttar-pradesh-for-a-successful-career-in-technology", category: "cs" },
  { title: "Best Cyber Security Jobs Offered by IT Companies", slug: "best-cyber-security-jobs-offered-by-it-companies", category: "cs" },
  { title: "Career Opportunities After B.Tech in Computer Science", slug: "career-opportunities-after-b-tech-in-computer-science", category: "cs" },
  { title: "How BCA in AI & ML Prepares You for the Digital Future", slug: "how-bca-in-ai-and-ml-prepares-you-for-the-digital-future", category: "cs" },
  { title: "Why B.Tech in CSE with AI & ML is a Smart Career Move", slug: "why-b-tech-in-cse-with-ai-ml-is-a-smart-career-move", category: "cs" },
  { title: "Top 10 Computer Science Engineering Colleges in Lucknow", slug: "top-10-computer-science-engineering-colleges-in-lucknow-for-tech-enthusiasts", category: "cs" },
  { title: "Why Choose BCA in Data Science & AI for a Promising Career", slug: "why-choose-bca-in-data-science-and-ai-for-a-promising-career", category: "cs" },

  // Business, Management & Commerce
  { title: "Digital Marketing Careers for Students: Skills, Jobs & Salary 2026", slug: "digital-marketing-careers-for-students-skills-jobs-salary-future-scope", category: "management" },
  { title: "Is BBA a Good Career Option in 2026: Career Opportunities & Scope", slug: "is-bba-a-good-career-option-in-2026-best-career-opportunities-salary-scope", category: "management" },
  { title: "BBA Specializations Explained: Traditional vs Future Courses 2026", slug: "bba-specializations-explained-traditional-vs-future-courses-which-one-should-you-choose-2026", category: "management" },
  { title: "What is BBA: Course Details, Specializations & Career Scope", slug: "what-is-bba-course-details-specializations-and-career-scope", category: "management" },
  { title: "Benefits of Pursuing a BBA Degree", slug: "benefits-of-pursuing-a-bba-degree", category: "management" },
  { title: "What Makes SRMU a Top Choice for BBA Aspirants in Uttar Pradesh", slug: "what-makes-srmu-a-top-choice-for-bba-aspirants-in-uttar-pradesh", category: "management" },
  { title: "Top Colleges Offering BBA in Business Analytics in Lucknow", slug: "top-colleges-offering-bba-in-business-analytics-in-lucknow", category: "management" },
  { title: "MBA in Business Analytics: Course Overview, Opportunities & Scope", slug: "mba-in-business-analytics-course-overview-career-opportunities-scope", category: "management" },
  { title: "Things to Know Before Choosing MBA Colleges", slug: "things-to-know-before-choosing-mba-colleges", category: "management" },
  { title: "How to Choose the Right MBA Specialization for Your Career Goals", slug: "how-to-choose-the-right-mba-specialization-for-your-career-goals", category: "management" },
  { title: "MBA in Marketing: A Gateway to Leadership in Business", slug: "mba-in-marketing-a-gateway-to-leadership-in-the-dynamic-business-world", category: "management" },
  { title: "MBA in HR: Transforming Future-Ready HR Leaders", slug: "mba-in-hr-transforming-future-ready-hr-leaders-with-strong-industry-connect", category: "management" },
  { title: "Why SRMU is Among the Best MBA Colleges for Campus Placements in UP", slug: "why-srmu-is-among-the-best-mba-colleges-for-campus-placements-in-uttar-pradesh", category: "management" },
  { title: "Top MBA Colleges in Lucknow for Aspiring Business Leaders", slug: "top-mba-colleges-in-lucknow-for-aspiring-business-leaders", category: "management" },
  { title: "Advance Your Career with SRMU's L&T Integrated MBA in Business Analytics", slug: "advance-your-career-with-srmu-s-l-t-integrated-mba-in-business-analytics", category: "management" },
  { title: "Kickstart a High Potential Commerce Career with B.Com (Hons.)", slug: "kickstart-a-high-potential-commerce-career-with-a-b-com-hons-degree", category: "management" },
  { title: "Build a Future in Business & Finance with a B.Com Degree", slug: "build-a-future-in-business-finance-with-a-b-com-degree", category: "management" },
  { title: "Best Career Options After MBA in Human Resources", slug: "what-are-the-best-career-options-after-mba-in-human-resources", category: "management" },
  { title: "Best Job Roles After MBA in Marketing", slug: "what-are-the-best-job-roles-after-mba-in-marketing", category: "management" },
  { title: "Top 10 Job Opportunities After MBA in Finance", slug: "top-10-job-opportunities-after-mba-in-finance", category: "management" },
  { title: "Why Management is a Great Career Choice for 12th Pass Students", slug: "why-management-is-a-great-career-choice-for-12th-pass-students", category: "management" },
  { title: "Build a High-Impact Career with an MBA in Business Analytics", slug: "build-a-high-impact-career-with-an-mba-in-business-analytics", category: "management" },
  { title: "Best BBA Colleges in Lucknow for Business Management Studies", slug: "best-bba-colleges-in-lucknow-for-business-management-studies", category: "management" },
  { title: "Entrepreneurship Opportunities for BBA Students in 2026", slug: "entrepreneurship-opportunities-for-bba-students-2026", category: "management" },

  // Law & Legal Studies
  { title: "Emerging Careers in Legal Technology in India 2026", slug: "emerging-careers-in-legal-technology-india-2026", category: "law" },
  { title: "Corporate Law vs Criminal Law: Which Legal Specialization is Right for You?", slug: "corporate-law-vs-criminal-law-career-which-legal-specialization-is-right-for-you", category: "law" },
  { title: "How to Become a Lawyer in India: Step-by-Step Guide 2026", slug: "how-to-become-a-lawyer-in-india-step-by-step-guide-2026", category: "law" },
  { title: "Career Opportunities After Law Degree (BA LLB & BBA LLB) in 2026", slug: "career-opportunities-after-law-degree-jobs-salary-scope-future-after-ba-llb-and-bba-llb-in-2026", category: "law" },
  { title: "BA LLB vs BBA LLB: Choosing the Right Law Program", slug: "ba-llb-vs-bba-llb", category: "law" },
  { title: "What is BA LLB: Course Structure, Opportunities & Top Law Colleges", slug: "what-is-ba-llb-course-structure-career-opportunities-top-law-colleges", category: "law" },
  { title: "Top Reasons to Pursue a Career in Law & Legal Studies", slug: "top-reasons-to-pursue-a-career-in-law-and-legal-studies", category: "law" },
  { title: "Best Integrated Law Programs for Class 12th Students", slug: "best-integrated-law-programs-for-class-12th-students", category: "law" },
  { title: "BBA LLB Course: Combining Legal & Business Expertise", slug: "bba-llb-course-combining-legal-and-business-expertise", category: "law" },

  // Biotechnology & Life Sciences
  { title: "Biotechnology Industry Growth & Future Jobs in 2026", slug: "biotechnology-industry-growth-and-future-jobs-in-2026", category: "biotech" },
  { title: "Biotechnology vs Microbiology: Which Course is Better After 12th?", slug: "biotechnology-vs-microbiology-which-course-is-better-after-12th-2026", category: "biotech" },
  { title: "Is Biotechnology a Good Career in India?", slug: "is-biotechnology-a-good-career-in-india", category: "biotech" },
  { title: "Biotechnology Courses After 12th: Scope, Salary & Future", slug: "biotechnology-courses-after-12th-scope-salary-and-future", category: "biotech" },
  { title: "How a Biotechnology Program Can Shape Your Future in Science Research", slug: "how-a-biotechnology-program-can-shape-your-future-in-science-research", category: "biotech" },
  { title: "How to Get into Top Postgraduate Biotechnology Programs", slug: "how-to-get-into-top-postgraduate-biotechnology-programs", category: "biotech" },
  { title: "Your Career in Research & Innovation Starts with B.Sc. Biotechnology", slug: "your-career-in-research-and-innovation-starts-with-b-sc-biotechnology", category: "biotech" },
  { title: "Understanding the Scope of Biotechnology in India for a Bright Future", slug: "understanding-the-scope-of-biotechnology-in-india-for-a-bright-future", category: "biotech" },
  { title: "The Future of Biotechnology: Emerging Trends & Innovations", slug: "the-future-of-biotechnology-emerging-trends-and-innovations", category: "biotech" },
  { title: "B.Tech Biotechnology Admission, Eligibility, Syllabus & Career Prospects", slug: "b-tech-biotechnology-admission-eligibility-syllabus-career-prospects-why-srmu-stands-out", category: "biotech" },
  { title: "Biotechnology Courses After 12th: B.Sc. & B.Tech Biotechnology Details", slug: "biotechnology-courses-after-12th-with-complete-details-on-bsc-and-b-tech-biotechnology-programs", category: "biotech" },

  // Agriculture & Agribusiness
  { title: "Best Agriculture College in Lucknow: Courses, Fees & Admission 2026", slug: "best-agriculture-college-in-lucknow-courses-fees-admission-process-career-scope-2026", category: "agriculture" },
  { title: "Smart Farming: AI, Drones & Agritech Transforming Agriculture Careers", slug: "smart-farming-ai-drones-agritech-transforming-agriculture-careers", category: "agriculture" },
  { title: "B.Sc. Agriculture vs B.Tech Agriculture: Which is Better After 12th?", slug: "bsc-agriculture-vs-btech-agriculture-which-is-better-after-12th-agriculture-2026", category: "agriculture" },
  { title: "Government Jobs After B.Sc. Agriculture", slug: "government-jobs-after-bsc-agriculture", category: "agriculture" },
  { title: "Best B.Sc. Agriculture Course After 12th: Career Scope, Jobs & Salary", slug: "best-bsc-agriculture-course-after-12th-career-scope-jobs-salary", category: "agriculture" },
  { title: "Top Reasons to Study B.Sc. (Hons.) Agriculture in Lucknow, India", slug: "top-reasons-to-study-b-sc-hons-agriculture-in-lucknow-india", category: "agriculture" },

  // Pharmacy & Allied Health
  { title: "Top Colleges Offering D.Pharm Programs in Lucknow", slug: "top-colleges-offering-d-pharm-programs-in-lucknow", category: "pharmacy" },
  { title: "Top Reasons to Choose D.Pharm After Class 12", slug: "top-reasons-to-choose-d-pharm-after-class-12", category: "pharmacy" },
  { title: "Top Benefits of Pursuing a Bachelor of Pharmacy (B.Pharm) Degree", slug: "top-benefits-of-pursuing-a-bachelor-of-pharmacy-b-pharm-degree", category: "pharmacy" },
  { title: "Best Pharmacy Courses After Class 12th in India", slug: "best-pharmacy-courses-after-class-12th-in-india", category: "pharmacy" },

  // Engineering & Polytechnic
  { title: "Why EV Engineering is a Future-Proof Career in 2026", slug: "why-ev-engineering-is-a-future-proof-career-in-2026", category: "engineering" },
  { title: "The Advantages of Choosing a Polytechnic Diploma Over a Degree", slug: "the-advantages-of-choosing-a-polytechnic-diploma-over-a-bachelor-s-degree", category: "engineering" },
  { title: "Best Electrical Engineering College in Lucknow: Industry Exposure", slug: "best-electrical-engineering-college-in-lucknow-future-ready-engineers-with-industry-exposure", category: "engineering" },
  { title: "Mechanical Engineering: A Future-Ready Career with Industry Integration", slug: "mechanical-engineering-a-future-ready-career-with-industry-integration", category: "engineering" },
  { title: "Top Career Options in Engineering After 12th Science", slug: "top-career-options-in-engineering-after-12th-science", category: "engineering" },
  { title: "Shape Tomorrow with SRMU's L&T Integrated B.Tech Programs", slug: "shape-tomorrow-with-srmu-s-l-t-integrated-b-tech-programs", category: "engineering" },
  { title: "Why SRMU is in Top 5 Electric Vehicle Engineering Colleges in Lucknow", slug: "why-srmu-is-in-the-top-5-electric-vehicle-engineering-colleges-in-lucknow", category: "engineering" },
  { title: "Top 10 Civil Engineering Colleges in Lucknow for Quality Education", slug: "top-10-civil-engineering-colleges-in-lucknow-for-quality-education", category: "engineering" },
  { title: "Top 5 Electronics & Communication Engineering Colleges in Lucknow", slug: "top-5-electronics-communication-engineering-colleges-in-lucknow-for-future-innovators", category: "engineering" },
  { title: "Top Diploma Colleges in Lucknow for Engineering & Technical Courses", slug: "top-diploma-colleges-in-lucknow-for-engineering-and-technical-courses", category: "engineering" },

  // General Admissions & Media
  { title: "AKTU vs Private University: Which is Better in 2026?", slug: "aktu-vs-private-university-which-is-better-2026", category: "admission" },
  { title: "Scored Less Than 60% in Class 12: Best Career & College Options 2026", slug: "i-scored-less-than-60-percent-in-class-12-best-career-college-options-2026", category: "admission" },
  { title: "Low CUET UG 2026 Score: What to Do Next", slug: "low-cuet-ug-2026-score-what-to-do-next", category: "admission" },
  { title: "Best Career Options After Studying Media Studies", slug: "best-career-options-after-studying-media-studies", category: "media" },
  { title: "Top 10 Job-Oriented Professional Courses After 12th", slug: "top-10-job-oriented-professional-courses-after-12th", category: "admission" },
  { title: "Exploring Media Studies After Class 12th: A Gateway to Career Opportunities", slug: "exploring-media-studies-after-class-12th-a-gateway-to-dynamic-career-opportunities", category: "media" }
];

export const TARGET_PROGRAM_LINKS: ProgramLink[] = [
  { title: "B.Tech CSE in Cyber Security", path: "/program/b-tech-cse-cyber-security" },
  { title: "BBA in Business Analytics", path: "/program/bba-business-analytics" },
  { title: "Diploma in Electronics & Communication", path: "/program/diploma-electronics-communication-engineering" },
  { title: "SRMU Newsletter", path: "/news-letter" }
];

const RelatedArticlesAndPrograms: React.FC<RelatedProps> = ({ currentSlug }) => {
  const currentArticle = ALL_TARGET_BLOGS.find((b) => b.slug === currentSlug);
  const category = currentArticle?.category || "cs";

  const sameCategoryBlogs = ALL_TARGET_BLOGS.filter(
    (b) => b.category === category && b.slug !== currentSlug
  ).slice(0, 4);

  const otherBlogs = ALL_TARGET_BLOGS.filter(
    (b) => b.category !== category && b.slug !== currentSlug
  ).slice(0, 2);

  const displayBlogs = [...sameCategoryBlogs, ...otherBlogs].slice(0, 6);

  return (
    <div className="my-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl sm:text-2xl font-bold text-[#023047] mb-6">
        Related Academic Programs & Articles
      </h3>

      {/* Recommended Academic Programs */}
      <div className="mb-8 p-6 bg-[#f4f8fc] rounded-xl border border-[#c6d4ea]">
        <h4 className="text-base font-semibold text-[#0a4a85] uppercase tracking-wide mb-3">
          Featured Academic Programs & Publications
        </h4>
        <div className="flex flex-wrap gap-3">
          {TARGET_PROGRAM_LINKS.map((prog) => (
            <Link
              key={prog.path}
              to={prog.path}
              className="inline-block px-4 py-2 bg-white text-[#0a4a85] border border-[#0a4a85]/30 rounded-lg text-sm font-medium hover:bg-[#ffb703] hover:text-[#023047] hover:border-[#ffb703] transition-all"
            >
              {prog.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Related Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ffb703] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <h4 className="text-base font-semibold text-[#023047] mb-3 line-clamp-2">
              <Link to={`/blog/${blog.slug}`} className="hover:text-[#0a4a85]">
                {blog.title}
              </Link>
            </h4>
            <Link
              to={`/blog/${blog.slug}`}
              className="text-xs font-semibold text-[#ffb703] uppercase tracking-wide hover:underline mt-2 inline-block"
            >
              Read Article &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticlesAndPrograms;
