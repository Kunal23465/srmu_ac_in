import { FC } from 'react'
import digilocker from "../../../assets/images/academics/acardemic-credit/digilockerimage.webp"

const DigiLocker: FC = () => {
    return (
        <div className='mb-10'>
            <div className="w-full text-justify">
                <img
                    src={digilocker}
                    alt="DigiLocker academic depository interface"
                    className="float-right ml-4 mb-2 max-w-[250px] h-auto"
                />

                <p className='text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]'>
                    National Academic Depository (NAD) is born out of an initiative to provide an
                    online store house of all academic awards. National Academic Depository (NAD)
                    is a 24X7 online store house of all academic awards viz.certificates, diplomas,
                    degrees, mark-sheets etc. duly digitised and lodged by academic institutions /
                    boards / eligibility assessment bodies. NAD not only ensures easy access to and
                    retrieval of an academic award but also validates and guarantees its authenticity
                    and safe storage.
                </p>
            </div>

            <div className='mb-4 mt-4 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-justify'>
                <p>
                    As per the decision of the Ministry of Education, DigiLocker is now the sole repository for National Academic Depository (NAD),and academic institutions are requested to onboard NAD through Digi ocker only. Academic Institutions who have already deposited their academic data to the former depositories i.e. NDML or CVL can now instruct them via emailto transfer the data as per the directions of the University Grants Commission (UGC).
                </p>
            </div>
            <div>
                <a className='color_light_blue fw500 lg:text-[16px] md:text-[15px] sm:text-[14px]' href='https://www.digilocker.gov.in/'>
                    GO TO DIGILOCKER
                </a>
            </div>

        </div>
    )
}

export default DigiLocker
