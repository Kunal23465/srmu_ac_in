import React from 'react'
import bcaNewData from '../data/programs/bcaNew';
import ProgramPageTemplateNew from '../customs/program-page-new/ProgramPageTemplateNew';

const BcaNew:React.FC = () => {
    return <ProgramPageTemplateNew data={bcaNewData} />;
}

export default BcaNew
