
import Classes from "../../utils/styles/Global.module.css";

const stats = [
  { v: '27+', l: 'Years of Academic Excellence' },
  { v: '30,000+', l: 'Alumni Across Top Corporates' },
  { v: '300+', l: 'Recruiters Hiring Every Year' },
  { v: '1100+', l: 'Job Offers Last Year' },
  { v: '₹17 LPA', l: 'Average Package' },
];

export default function Excellence() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-12 md:pt-16">
      <div className={`${Classes["container"]} `}>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A4A8F]">
            Choose Excellence at SRMU
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            The best university in Lucknow for B.Tech, BCA, MBA, BBA &amp; Biotechnology
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 ">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-white border border-gray-100 rounded-xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-[#FFB703]">{s.v}</p>
              <p className="text-[11px] md:text-xs font-semibold text-gray-700 uppercase tracking-wider mt-2">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
