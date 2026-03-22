import React from 'react'
import DocumentChecklist from '../../../components/admissions/document-checklist/DocumentChecklist'
import SeoHead from '../../../components/seo/SeoHead'

const DocumentChecklistPage: React.FC = () => {

    return (
        <>
            <SeoHead
                title="Admission Document Checklist | Shri Ramswaroop Memorial University, Lucknow"
                description="Review the SRMU admission document checklist and supportive document requirements for a smooth application and verification process."
                pathname="/document-checklist"
            />
            <DocumentChecklist />
        </>
    )
}

export default DocumentChecklistPage
