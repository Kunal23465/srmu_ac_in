import { Helmet } from "react-helmet-async";
import eventsData from "../../../data/new-home/eventsData";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";

const convocation2026 = eventsData.find((event) => event.redirectTo === "/convocation2026");

const Convocation2026 = () => {
  if (!convocation2026) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <title>Grand Convocation Ceremony 2026 | Shri Ramswaroop Memorial University</title>
        <meta
          name="description"
          content="Shri Ramswaroop Memorial University celebrated its Grand Convocation Ceremony 2026, awarding degrees to 7,519 students and medals to 405 achievers."
        />
      </Helmet>

      <section className="bg-white">
        <div className={Classes["container"]}>
          <article className="py-12">
            <p className="text-sm md:text-base font-semibold text-[#0A4A8F]">
              {convocation2026.date}
            </p>
            <h1 className="mt-3 max-w-5xl text-[26px] sm:text-[34px] lg:text-[48px] leading-tight font-semibold text-[#023047]">
              {convocation2026.title}
            </h1>
            <div
              className="mt-6 max-w-5xl text-sm sm:text-[15px] lg:text-base leading-7 text-justify text-slate-800 [&_p]:mb-4 [&_h5]:mt-6 [&_h5]:mb-3 [&_h5]:text-lg [&_h5]:text-[#023047] [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: convocation2026.description ?? "" }}
            />
          </article>
        </div>
      </section>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </div>
  );
};

export default Convocation2026;
