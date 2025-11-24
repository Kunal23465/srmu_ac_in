import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { admissionFaqOverviewData, faqData } from '../../../data/admissions/admission-faq/admission-faq-data';
import CustomFaqAccordion from "../../../utils/custom/CustomFaqAccordian";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";


const AdmissionFaq = () => {
  return (
      <>
          <div className={`${Classes["container"]}`}>
              <CustomOverviewSection data={admissionFaqOverviewData} />

              <CustomFaqAccordion data={faqData} />

          </div>
          <div className="mt-12">
              
          <CustomTopFooter data={feeStructureCustomTopFooter} />
          </div>
      </>

  )
}

export default AdmissionFaq