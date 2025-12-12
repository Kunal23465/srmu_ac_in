import React from 'react';
import { CARD_DATA } from '../../../data/admissions/overview/admission-overview-data';
import ImageCards from '../../../utils/custom/ImageCards';

const CardList: React.FC = () => {
  return (
    <>
      <div className='mt-10'>
        <h2 className='text-center curr  text-[34px]! font-medium py-10'>
          You have the option to choose from a variety of programs to choose from and start your journey at SRMU to shape and grow your career
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 mb-20 mt-6 ">
        {CARD_DATA.map((card) => (
          <ImageCards key={card.id} card={card} />
        ))}
      </div>
    </>

  );
};

export default CardList;