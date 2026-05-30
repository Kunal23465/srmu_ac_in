
import ApprovedData from "../../data/new-home/ApprovedData";
import ApprovedSlider from "./ApprovedSlider";
import Classes from "../../utils/styles/Global.module.css";
const Approvals = () => {
  return (
    <section className="relative bg-[#0F4A85] w-full lg:mt-6 xl:mt-0 overflow-hidden">
      {/* Subtle top & bottom accent lines */}
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[60%] bg-gradient-to-r from-transparent via-[#0A4A8F]/15 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[60%] bg-gradient-to-r from-transparent via-[#0A4A8F]/15 to-transparent" />

      <div
        className="hidden lg:flex items-center justify-center w-full max-w-6xl mx-auto px-4"
        data-aos="fade-up"
      >
        {ApprovedData.map((data, idx) => (
          <div key={data.id} className="flex items-center flex-1">
            <div className="group w-full flex flex-col items-center justify-center  rounded-xl transition-all duration-300  hover:shadow-lg hover:shadow-[#0A4A8F]/5 hover:-translate-y-1">
              <div className="flex rounded-sm bg-white items-center justify-center p-3 h-[120px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-auto h-[109px] object-contain  transition-all duration-300"
                />
              </div>
              <h2 className="font-semibold text-nowrap text-[13px] xl:text-[14px] tracking-[0.12em] text-center mt-4 text-white font-rubik uppercase">
                {data.title}
              </h2>
            </div>
            {idx < ApprovedData.length - 1 && (
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden sm:block flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="block lg:hidden bg-gray-50 py-6 lg:py-8">
        <ApprovedSlider />
      </div>
      </div>
    </section>
  );
};

export default Approvals;
