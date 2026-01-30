import React from 'react'
import DocumentChecklist from '../../../components/admissions/document-checklist/DocumentChecklist'
import { Helmet } from 'react-helmet-async'

const DocumentChecklistPage: React.FC = () => {

    return (
        <>
            <Helmet>
                <title>Admission Document Checklist , Admission Supportive Document Check List</title>
                <meta name="description" content="Admission Document Checklist" />
            </Helmet>
            <DocumentChecklist />
        </>
    )
}

export default DocumentChecklistPage