import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { FaQuora, FaRedditAlien } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/University-Logo-White.png";
import merchandiseScan from "../../assets/images/merchandise-scan.jpeg";
import Classes from "../../utils/styles/Global.module.css";

export default function DepartmentFooter() {
  return (
    <div role="contentinfo" className="department-footer border-t-[4px] border-[#FFB703] bg-[#14284E] pt-16 pb-6 text-white">
      <style>{`@media (max-width: 639px) { .department-footer .cse-mobile-button { font-size: 14px; } }`}</style>
      <div className={`${Classes["container"]} px-4 sm:px-6`}>
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="min-w-0 space-y-6 [overflow-wrap:anywhere] lg:col-span-2 lg:pr-6">
            <div>
              <img src={logo} alt="SRMU Logo" className="mb-5 max-h-[60px] max-w-full w-auto object-contain object-left" />
              <p className="mb-5 text-justify text-[13px] leading-relaxed text-gray-300">
                Shri Ramswaroop Memorial University (SRMU), Lucknow- Deva Road, Barabanki, Uttar Pradesh is committed to providing quality education, fostering innovation and building a brighter future for our students.
              </p>
            </div>

            <div className="space-y-5 border-t border-white/10 pt-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB703]" />
                <div>
                  <h4 className="mb-1 text-[13px] font-bold uppercase text-[#FFB703]">Address</h4>
                  <p className="text-[13px] leading-relaxed text-gray-300">Shri Ramswaroop Memorial University (SRMU), Lucknow- Deva Road, Barabanki, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB703]" />
                <div>
                  <h4 className="mb-1 text-[13px] font-bold uppercase text-[#FFB703]">Lucknow Office</h4>
                  <p className="text-[13px] leading-relaxed text-gray-300">C-2/42, Vishesh Khand, Opposite Chote Lal Nursery, Gomtinagar, Lucknow, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB703]" />
                <div>
                  <h4 className="mb-1 text-[12px] font-bold uppercase text-[#FFB703]">Admission Helpline</h4>
                  <p className="text-[13px] text-gray-300">+91-9838904666</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB703]" />
                <div>
                  <h4 className="mb-1 text-[12px] font-bold uppercase text-[#FFB703]">Admission Toll Free</h4>
                  <p className="text-[13px] text-gray-300">18001026004</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB703]" />
                <div>
                  <h4 className="mb-1 text-[12px] font-bold uppercase text-[#FFB703]">Email</h4>
                  <p className="text-[13px] text-gray-300">admissions@srmu.ac.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-3 gap-x-2 gap-y-6 [overflow-wrap:anywhere] sm:gap-6 lg:col-span-3 lg:mt-[80px]">
            <div className="min-w-0">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-normal text-[#FFB703] min-[375px]:text-[11px] sm:mb-6 sm:text-[14px] sm:tracking-wide">Quick Links</h3>
              <ul className="list-disc space-y-3 pl-3 marker:text-gray-300 sm:space-y-4 sm:pl-4">
                {[
                  { name: "About SRMU", path: "/about-us" },
                  { name: "Programs", path: "/program-finder" },
                  { name: "Admissions", path: "/how-to-apply" },
                  { name: "Placements", path: "/placements" },
                  { name: "Life at SRMU", path: "/student-corner" },
                  { name: "News & Updates", path: "/notice" },
                  { name: "Contact Us", path: "/contact-us" },
                ].map((item) => <li key={item.name}><Link to={item.path} className="text-[11px] leading-relaxed text-gray-300 transition-colors hover:text-[#FFB703] min-[375px]:text-[12px] sm:text-[13.5px]">{item.name}</Link></li>)}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-normal text-[#FFB703] min-[375px]:text-[11px] sm:mb-6 sm:text-[14px] sm:tracking-wide">Student Life</h3>
              <ul className="list-disc space-y-3 pl-3 marker:text-gray-300 sm:space-y-4 sm:pl-4">
                {[
                  { name: "Facilities", path: "/facilities" },
                  { name: "Library", path: "/central-library" },
                  { name: "Clubs", path: "/clubs" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "Shift Schedule", path: "/shift-schedule" },
                ].map((item) => <li key={item.name}><Link to={item.path} className="text-[11px] leading-relaxed text-gray-300 transition-colors hover:text-[#FFB703] min-[375px]:text-[12px] sm:text-[13.5px]">{item.name}</Link></li>)}
                <li><a href="https://eyojan.srmu.ac.in/" target="_blank" rel="noreferrer" className="text-[11px] leading-relaxed text-gray-300 transition-colors hover:text-[#FFB703] min-[375px]:text-[12px] sm:text-[13.5px]">Student Login</a></li>
                <li><a href="https://eyojan.srmu.ac.in/" target="_blank" rel="noreferrer" className="text-[11px] leading-relaxed text-gray-300 transition-colors hover:text-[#FFB703] min-[375px]:text-[12px] sm:text-[13.5px]">Staff Login</a></li>
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-normal text-[#FFB703] min-[375px]:text-[11px] sm:mb-6 sm:text-[14px] sm:tracking-wide">Information</h3>
              <ul className="list-disc space-y-3 pl-3 marker:text-gray-300 sm:space-y-4 sm:pl-4">
                {[
                  { name: "UGC & Approvals", path: "/ugc-approvals" },
                  { name: "NAAC", path: "/naac" },
                  { name: "AIU", path: "/aiu" },
                  { name: "NIRF", path: "/nirf" },
                  { name: "IQAC", path: "/iqac-overview" },
                  { name: "Scholarships", path: "/scholarship-scheme" },
                  { name: "Anti Ragging", path: "/anti-ragging" },
                ].map((item) => <li key={item.name}><Link to={item.path} className="text-[11px] leading-relaxed text-gray-300 transition-colors hover:text-[#FFB703] min-[375px]:text-[12px] sm:text-[13.5px]">{item.name}</Link></li>)}
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSde8Ov2JDvB1vYeL-jrqNrlman0gLstQVEWEJ6DN34-EsYdCQ/viewform" target="_blank" rel="noreferrer" className="break-words text-[11px] leading-relaxed text-gray-300 transition-colors hover:text-[#FFB703] min-[375px]:text-[12px] sm:text-[13.5px]">Grievance Redressal</a></li>
              </ul>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-1 lg:mt-[80px]">
            <h3 className="mb-6 text-[14px] font-bold uppercase tracking-wide text-[#FFB703]">Subscribe to our updates</h3>
            <p className="mb-4 text-[13px] leading-relaxed text-gray-300">Stay informed about the latest news, events and opportunities at SRMU.</p>
            <form className="mb-10 flex min-w-0 flex-col sm:flex-row lg:flex-col" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="min-w-0 w-full flex-1 rounded-l-md border border-gray-500 bg-transparent px-3 py-2 text-[13px] text-white outline-none focus:border-[#FFB703]" />
              <button type="submit" className="cse-mobile-button whitespace-nowrap rounded-r-md bg-[#3b82f6] px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2563eb]">Subscribe</button>
            </form>

            <h3 className="mb-6 text-[14px] font-bold uppercase tracking-wide text-[#FFB703]">Follow Us</h3>
            <div className="flex flex-wrap gap-2.5">
              <a href="https://www.linkedin.com/school/shri-ramswaroop-memorial-university/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><Linkedin className="h-4 w-4" /></a>
              <a href="https://www.facebook.com/SRMUOFFICIAL/" target="_blank" rel="noreferrer" aria-label="Facebook" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><Facebook className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/srmulucknow_official/" target="_blank" rel="noreferrer" aria-label="Instagram" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><Instagram className="h-4 w-4" /></a>
              <a href="https://www.youtube.com/channel/UCQBjHzkED5ESWvlQiwLNZ4Q" target="_blank" rel="noreferrer" aria-label="YouTube" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><Youtube className="h-4 w-4" /></a>
              <a href="https://twitter.com/srmu_lucknow" target="_blank" rel="noreferrer" aria-label="Twitter" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><Twitter className="h-4 w-4" /></a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Quora" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><FaQuora className="h-4 w-4" /></a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Reddit" className="cse-mobile-button flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 font-bold uppercase tracking-wide transition-colors hover:border-[#FFB703] hover:text-[#FFB703]"><FaRedditAlien className="h-[18px] w-[18px]" /></a>
            </div>
            <div className="mt-8">
              <div className="mb-2 flex items-center gap-4">
                <h3 className="text-[15px] font-bold uppercase tracking-wide text-[#FFB703]">Merch Shop</h3>
                <img src={merchandiseScan} alt="Merchandise Scan" className="h-[60px] w-auto bg-white shadow-sm sm:h-[64px]" />
              </div>
              <p className="text-[13px] leading-snug text-gray-200">To Shop SRMU Merchandise<br />Scan the Code</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-[12px] text-gray-400">© 2025 Shri Ramswaroop Memorial University. All Rights Reserved.</p>
          <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-gray-400">
            <Link to="#" className="transition-colors hover:text-white">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link to="#" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            <span className="text-gray-600">|</span>
            <Link to="#" className="transition-colors hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
