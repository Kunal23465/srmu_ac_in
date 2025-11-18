import { FC } from 'react'
import digilocker from "../../../assets/images/academics/acardemic-credit/digilockerimage.png"

const DigiLocker: FC = () => {
    return (
        <div className='mb-10'>
            <div className='full'>
                <div className='flex text-justify'>
                    <p>
                        National Academic Depository (NAD) is born out of an initiative to provide an online store house of all academic awards. National Academic Depository (NAD) is a 24X7 online store house of all academic awards viz.certificates, diplomas, degrees, mark-sheets etc. duly digitised and lodged by academic institutions / boards / eligibility assessment bodies. NAD not only ensures easy access to and retrieval of an academic award but also validates and guarantees its authenticity and safe storage.
                    </p>
               
                <div className='w-full'>
                    <img className='w-full' src={digilocker} />
                </div>
                 </div>
            </div>
            <div className='mb-4 mt-4 text-justify'>
                <p>
                    As per the decision of the Ministry of Education, DigiLocker is now the sole repository for National Academic Depository (NAD),and academic institutions are requested to onboard NAD through Digi ocker only. Academic Institutions who have already deposited their academic data to the former depositories i.e. NDML or CVL can now instruct them via emailto transfer the data as per the directions of the University Grants Commission (UGC).
                </p>
            </div>
            <div>
                <a className='color_light_blue font-semibold' href='https://www.digilocker.gov.in/'>
                    GO TO DIGILOCKER
                </a>
            </div>

        </div>
    )
}

export default DigiLocker