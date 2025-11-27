import { BtechCSEAIandMLOverviewData, counterDataForBtechinCSEAIandML, whyData } from "../../../data/programs/btechincseai-ml-data/btechincseai-ml-data";
import Counter from "../../../utils/custom/Counter";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import EligibilitySection from "../../../utils/custom/CustomEligibilitySection";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import WhyCardComp from "./WhyCardComp";




const BtechInCSEAIandMLComponent = () => {
    return (
        <div className="mt-20">
            <div className={`${Classes["container"]}`}>
                <h2 className="font50 fw500 text-[#023047]">
                    B.Tech. in CSE (Artificial Intelligence & Machine Learning)
                </h2>
                <p className="text-[#023047] font30 fw500">
                    Empowering innovation through the fusion of technologies
                </p>

                <CustomOverviewSection data={BtechCSEAIandMLOverviewData} />
                <Counter counterData={counterDataForBtechinCSEAIandML} />

                <EligibilitySection />

               

            </div>
            <CustomDepartmentSlider
                heading="Why SRMU?"
                description=""
                data={whyData}
                renderCard={({ item }) => <WhyCardComp item={item} />}
                bgImage={""}
                arrowColor="#ffb703"
                headingColor="black"
                descriptionColor="#e5e5e5"
                arrowBorderColor="#023047"
                breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
            />





        </div>
    )
}

export default BtechInCSEAIandMLComponent