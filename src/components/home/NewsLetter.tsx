import React from 'react'
import CustomTopFooter from '../../utils/custom/CustomTopFooter'
import { NoticeTopFooterData } from '../../data/notice/NoticeData'
import Classes from "../../utils/styles/Global.module.css"
import CustomOverviewSection from '../../utils/custom/CustomOverviewSection'
import { NewsletterOverviewData, newsletterpdfData } from '../../data/home/news-letter-data'
import CustomTable from '../../utils/custom/CustomTable'

const NewsLetter: React.FC = () => {
    return (
        <>
            <div className={Classes["container"]}>
                <CustomOverviewSection data={NewsletterOverviewData} />
                <h2 className='text-[47px] font-semibold text-[#023047] pt-16 pb-4'>SRMU Compass</h2>
                <div className='pb-20'>
                    <CustomTable
                        columnOneHeader="Edition"
                        columnTwoHeader="Downloads"
                        data={newsletterpdfData}
                    />
                </div>

            </div>

            <CustomTopFooter data={NoticeTopFooterData} />
        </>
    )
}

export default NewsLetter
