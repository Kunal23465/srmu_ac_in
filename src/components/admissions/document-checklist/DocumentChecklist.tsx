import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import CustomTable from '../../../utils/custom/CustomTable';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { documentChecklistOverviewData, SupportiveDocumentsData } from '../../../data/admissions/document-checklist/document-checklist-data';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';

const DocumentChecklist: React.FC = () => {
    return (
        <>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={documentChecklistOverviewData} />
                <CustomTable
                    columnOneHeader="Supportive Document"
                    columnTwoHeader="Downloads"
                    data={SupportiveDocumentsData}
                />

            </div>
            <CustomTopFooter data={feeStructureCustomTopFooter} />

        </>
    )
}

export default DocumentChecklist;