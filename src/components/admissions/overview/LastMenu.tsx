import React from 'react';
import circle1 from "../../../assets/images/admissions/overview/circle1.png"
import circle2 from "../../../assets/images/admissions/overview/circle2.png"
import shape1 from "../../../assets/images/admissions/overview/shape1.png"
import shape2 from "../../../assets/images/admissions/overview/shape2.png"





const LastMenu: React.FC = () => {
  const blueRingTopLeft = circle2;
  const yellowTriangleTopRight = shape2;
  const yellowRingBottomLeft = circle1;
  const bottomRightShapes = shape1;

  return (
    <div className="relative w-full py-24 bg-white flex justify-center items-center px-4 overflow-hidden">

      <div className='hidden md:block'>
        <img
          src={blueRingTopLeft}
          alt="Blue circle outline decoration"
          className="absolute top-10 left-[185px] z-10 pointer-events-none"
        />

        <img
          src={yellowTriangleTopRight}
          alt="Yellow triangle decoration"
          className="absolute top-10 right-[180px]  z-10 pointer-events-none"
        />

        <img
          src={yellowRingBottomLeft}
          alt="Large yellow circle outline decoration"
          className="absolute -bottom-30 lg:left-[275px] w-[270px] z-0 pointer-events-none"
        />

        <img
          src={bottomRightShapes}
          alt="Abstract blue and yellow shapes"
          className="absolute -bottom-30 xl:right-[295px]  md:right-[100px]  right-0 w-[320px] z-10 pointer-events-none"
        />
      </div>

      <div className="text-center max-w-4xl z-20">

        <p
          className="fw45 font-semibold leading-tight mb-6"
        >
          <span className='color_light_blue'>The well-crafted programs</span> of SRMU will keep you ahead of others in <span className='color_light_blue'>terms of skill development and employability.</span>
        </p>

        <p className="fw35 fw500 font-medium">
          Come and join the rich legacy of 24 years.
        </p>

      </div>
    </div>
  );
};

export default LastMenu;