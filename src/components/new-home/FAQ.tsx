import { useEffect, useState } from 'react';
import MobileReadMore from './MobileReadMore';
import Classes from "../../utils/styles/Global.module.css";
const faqs = [
  {
    q: 'Is SRMU a UGC approved and NAAC accredited university?',
    a: 'Yes, Shri Ramswaroop Memorial University (SRMU) is fully approved by the University Grants Commission (UGC) and the Government of Uttar Pradesh. SRMU holds NAAC B+ accreditation with a score of 2.7. The university was established in 2012 under the Uttar Pradesh Private Universities Act and has been consistently recognized for academic quality. SRMU has been ranked 70th in the University (Private) category by India Today 2025 and 429th by QS World Rankings 2026, making it one of the top-ranked private universities in Uttar Pradesh.',
  },
  {
    q: 'What courses are offered at SRMU Lucknow and what is the fee structure?',
    a: 'SRMU offers 115+ courses across 11 disciplines including B.Tech (16 specializations), MBA, BBA, BCA, B.Sc, B.Com, LL.B, M.Tech, Pharmacy, and Agriculture. For 2026, fees range from INR 62,000 to INR 5 Lakhs depending on the course. B.Tech fees range from INR 1 lakh to INR 5.3 lakh for the full program. BCA first-year fees are INR 1 Lakh. The university also offers scholarships through SRMUSET (Scholarship cum Entrance Test) to reduce the financial burden on deserving students. Admission helpline: +91-9838904666.',
  },
  {
    q: 'What is SRMU placement record and highest package offered?',
    a: 'SRMU Lucknow has a strong placement record with approximately 90% placement rate as per 2025 data. The highest salary package offered in 2026 was INR 17 LPA, while the average package was INR 4.5 LPA. Top recruiters include Accenture, Amazon, Jaro Education, Internshala, and BlueStone Jewellery. SRMU claims 100% placement achievement in Engineering, Management, Computer Application, and Polytechnic programs.',
  },
  {
    q: 'Is SRMU law degree recognized by BCI and UGC?',
    a: 'The law programs offered by Shri Ramswaroop Memorial University are recognized by the Bar Council of India (BCI), and the university is recognized by the University Grants Commission (UGC). This recognition ensures that eligible students can pursue legal education and career opportunities in accordance with regulatory standards in India.',
  },
  {
    q: 'How can I apply for admission to SRMU for 2026?',
    a: 'Admission to SRMU 2026 is currently open. Applications can be submitted both online at srmu.ac.in and offline. The process involves filling the application form with educational and personal details, paying the non-refundable application fee of INR 1,000 via Credit/Debit Card, Net Banking, or UPI, uploading scanned documents, and appearing for the relevant entrance exam if applicable. For B.Tech, JEE Main scores or SRMU entrance test scores are accepted. For MBA, CAT/MAT or SRMU entrance marks are considered. Toll-free admission helpline: 18001026004. Email: admissions@srmu.ac.in.',
  },
  {
    q: 'What is the eligibility criteria for B.Tech admission at SRMU?',
    a: 'To be eligible for B.Tech admission at SRMU Lucknow 2026, candidates must have passed 10+2 (Class 12) with Physics, Mathematics, and Chemistry as core subjects, with a minimum aggregate of 45%. Selection is primarily merit-based on 10+2 marks. The university also accepts JEE Main scores for B.Tech admissions. Additionally, 15% of seats are available under the management quota as per the Uttar Pradesh state government policy. SRMU offers B.Tech in 16 specializations including Computer Science, AI & Machine Learning, Cyber Security, Data Science, Electric Vehicle Engineering, and more through its industry-integrated Honours Programs with L&T, Tata Motors, and IBM.',
  },
  {
    q: 'Where is SRMU located and what are its campus facilities?',
    a: 'Shri Ramswaroop Memorial University (SRMU) is located on Lucknow-Deva Road, Barabanki, Uttar Pradesh, approximately 25 kilometers from Lucknow city center. The campus spans 100 acres and features technology-enabled classrooms, advanced research laboratories, a central library, innovation and incubation center, digital learning resources, and separate hostel facilities for boys and girls. The university also offers sports infrastructure, green spaces, and student activity centers. For location and directions, students can visit the official SRMU website.',
  },
  {
    q: 'Does SRMU offer MBA and what specializations are available?',
    a: 'Yes, SRMU Lucknow offers MBA programs including MBA (General), MBA Business Analytics, and MBA Healthcare and Hospital Management. MBA admission 2026 is based on scores from CAT, MAT, or SRMU own entrance exam, with a minimum eligibility of graduation with 50% marks (45% for SC/ST). The application fee is INR 1,000, and seat booking requires a payment of INR 10,000 or more.SRMU MBA program is designed with industry-aligned curriculum incorporating real-world case studies, live projects, and corporate mentorship to prepare students for leadership roles in business.',
  },
  {
    q: 'What industry partnerships and honors programs does SRMU offer?',
    a: 'SRMU has established industry-integrated Honours Programs with leading companies to provide students with job-ready skills. Key partnerships include Larsen & Toubro (L&T) for Cyber Security, Data Science, and Electric Vehicle Engineering, Tata Motors for automobile and engineering programs, IBM Centre of Excellence launched recently at SRMU campus, and the Uttar Pradesh Government Skill Development Mission. As of 2026, SRMU research output includes 150+ patents granted or published and 1,200+ research papers in peer-reviewed journals. The university has also been awarded Best Innovative University by ASSOCHAM and ranked across India Today, Times of India, and JagranJosh rankings.',
  },
  {
    q: 'What scholarships are available at SRMU Lucknow?',
    a: 'SRMU Lucknow offers multiple scholarship schemes to support meritorious and financially deserving students. The primary scholarship route is through SRMUSET (Shri Ramswaroop Memorial University Scholarship cum Entrance Test), which provides fee waivers and financial aid based on academic performance. Scholarships are awarded based on merit in qualifying exams, performance in SRMUSET, and special categories. The university also follows government-mandated reservation policies including 15% management quota seats. Students can apply for scholarships during the admission process.',
  },
  {
    q: 'What is SRMU ranking in India and globally?',
    a: 'SRMU Lucknow has achieved recognition in multiple national and international rankings. As of 2025-26, India Today 2025 ranked SRMU 70th in the University (Private) category and 15th among top private universities. QS World Rankings 2026 placed SRMU at 429th internationally. The university has also received high scores in Times of India, JagranJosh, and OMS Times rankings across various categories. SRMU holds NAAC B+ accreditation with a score of 2.7, is approved by UGC, and has been awarded Best Innovative University by ASSOCHAM, reflecting its commitment to innovation and academic excellence.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.dataset.faq = 'srmu';
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="bg-[#E0F1FF] ">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className="mb-5 md:mb-8 flex flex-col gap-3 md:gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight">
              Frequently Asked{' '}
              <span className="text-[#FFC107] lg:text-3xl block">Questions</span>
            </h2>
            <MobileReadMore className="text-[13px] md:text-base text-gray-700 leading-relaxed mt-2">
              Discover Opportunities, Ignite Your Potential - Be Part of SRMU Uttar Pradesh
            </MobileReadMore>
          </div>

          <button
            type="button"
            onClick={() => setShowFaq((current) => !current)}
            aria-expanded={showFaq}
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#0A4A8F] px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white shadow-soft transition-colors hover:bg-[#07376b] focus:outline-none focus:ring-2 focus:ring-[#0A4A8F] focus:ring-offset-2 focus:ring-offset-[#E0F1FF]"
          >
            {showFaq ? 'Hide FAQ' : 'View FAQ'}
            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ${showFaq ? 'rotate-180' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${showFaq ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className="bg-white border border-gray-200 rounded-xl shadow-soft overflow-hidden"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 md:gap-4 p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[13px] md:text-base font-bold text-gray-900">
                        {f.q}
                      </span>
                      <span
                        className={`flex-shrink-0 h-8 w-8 rounded-full bg-[#0A4A8F]/10 text-[#0A4A8F] flex items-center justify-center transition-transform ${isOpen ? 'rotate-45' : ''
                          }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 md:px-5 pb-4 md:pb-5 text-[13px] md:text-base text-gray-700 leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
