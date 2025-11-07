import React from 'react'

import ramswaroop from "../../../assets/images/about/aboutUs/ramswaroop-agrawal.jpg"
import { effortData } from '../../../data/about/aboutusData'

const Effort: React.FC = () => {
    return (
        <div className='flex w-full gap-x-10 justify-between'>
            <div>
                <img src={ramswaroop} alt="img" />
            </div>
            <div>
                <h1 className='text-[2rem]'>{effortData.heading}</h1>
                <div className='flex flex-col'>
                    <p>{effortData.desc.p1}</p>
                    <p>{effortData.desc.p1}</p>
                </div>
            </div>
        </div>
    )
}

export default Effort