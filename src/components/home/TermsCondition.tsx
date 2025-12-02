import React from 'react'
import Classes from "../../utils/styles/Global.module.css"
import CustomOverviewSection from '../../utils/custom/CustomOverviewSection'
import CustomTopFooter from '../../utils/custom/CustomTopFooter'
import { NoticeTopFooterData } from '../../data/notice/NoticeData'
import { TandCOverviewData, termsData, TermsType } from '../../data/home/terms-condition-data'

const TermsCondition:React.FC = () => {
  return (
      <>
          <div className={`${Classes["container"]}`}>
              <CustomOverviewSection data={TandCOverviewData} />


              {termsData.map((item: TermsType, index: number) => (
                  <div key={index} className="mb-10">

                      {/* TITLE */}
                      {item.title && (
                          <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                      )}

                      {/* LIST ITEMS */}
                      {item.listItems && item.listItems.length > 0 && (
                          <ul className="list-disc ml-6 space-y-2">
                              {item.listItems.map((point, idx) => (
                                  <li key={idx} className="text-gray-700 leading-6">
                                      {point}
                                  </li>
                              ))}
                          </ul>
                      )}

                      {/* DESCRIPTION */}
                      {item.description && (
                          <p className="mt-3 text-gray-700 leading-6">{item.description}</p>
                      )}

                      {/* SUB DESCRIPTION */}
                      {item.subDesc && (
                          <p className="mt-2 text-gray-600 leading-6">{item.subDesc}</p>
                      )}
                  </div>
              ))}
             
          </div>

          <CustomTopFooter data={NoticeTopFooterData} />
      </>
  )
}

export default TermsCondition