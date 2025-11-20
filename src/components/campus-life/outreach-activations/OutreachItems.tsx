import React from 'react'
import { outreachItems } from '../../../data/campus-life/outreach-activations/outreach-activations-data'
import Classes from "../../../utils/styles/Global.module.css";


const OutreachItems: React.FC = () => {
    const { desc, img, title } = outreachItems
    return (
       <div className={`mt-10 bg-[#f2f2f2]`}>
    <div className={`${Classes["container"]} py-20 flex gap-5 items-center w-full`}>

        <div className='w-[60%] overflow-hidden'>
            <h2 className='text-[50px] font-medium text-[#023047] mb-8'>{title}</h2>
            <div>
                {desc.map((item, index) => (
                    <p key={index} className='mb-4'>{item.point}</p>
                ))}
            </div>
        </div>

        <div className='w-[40%] h-full'>
            <img
                src={img}
                alt={title}
                className='w-full h-full object-cover'
            />
        </div>

    </div>
</div>

    )
}

export default OutreachItems
