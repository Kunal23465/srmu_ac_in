import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import Classes from "../../../utils/styles/Global.module.css";
import { cardsData, counterDataForOutreachActivationPage, OutreachActivationsOverviewData } from '../../../data/campus-life/outreach-activations/outreach-activaions-data';
import HolisticSection from './HolisticSection';
import CounterforHolistic from './CounterforHolistic';
import FlipCards from './CardAroundSection';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';

const OutreachComponent = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={OutreachActivationsOverviewData} />

            </div>
            <div className='bg-[#f2f2f2] py-20'>
                <div className={`${Classes["container"]} `}>
                    <HolisticSection />
                </div>
            </div>


            <div className='bg-[#0f4a85] py-20'>
                <div className={`${Classes["container"]} `}>

                    <CounterforHolistic counterData={counterDataForOutreachActivationPage} classes="counter" />

                </div>

            </div>

            <div className={`${Classes["container"]} `}>
                <FlipCards data={cardsData} />
            </div>

            <CustomTopFooter data={feeStructureCustomTopFooter} />
        </div>
    )
}

export default OutreachComponent