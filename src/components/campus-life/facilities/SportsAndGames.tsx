import { outreachImages } from '../../../data/campus-life/facilities/facilities-data';

const SportsAndGames = () => {
    return (
      <>
        <div className="text-center ">
          <h2 className="text-[28px] lg:text-[3.125rem] pt-15 text-black  fw600">Sports and Games</h2>

          <p className="mt-4 mb-8 max-w-6xl mx-auto text-[15px] lg:text-[16px] md:text-[15px] sm:text-[15px]">
            SRMU offers top-notch sports and recreational facilities, covering a range of indoor and outdoor activities such as chess, carrom, badminton, tennis, basketball,
            volleyball, football, and cricket. The campus boasts extensive sports facilities — including a gymnasium — aligning with the belief that a healthy mind thrives in a
            healthy body.
          </p>
        </div>

        <div className="parent_grid_gallary px-4 pb-15">
          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[0].src} alt="Tennis" />
            <div className="bg-opacity-50 lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px] font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg ">
              Tennis
            </div>
          </div>

          <div className="children relative  overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[3].src} alt="" />
            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Kabaddi
            </div>
          </div>

          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[5].src} alt="Table Tennis" />
            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Table Tennis
            </div>
          </div>

          <div className="children relative  overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[4].src} alt="" />

            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Badminton
            </div>
          </div>

          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[6].src} alt="Basketball" />
            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              BasketBall
            </div>
          </div>

          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[1].src} alt="Cricket" />
            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Cricket
            </div>
          </div>

          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[2].src} alt="Volleyball" />
            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Volleyball
            </div>
          </div>

          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[7].src} alt="Gymnasium" />
            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Gymnasium
            </div>
          </div>

          <div className="children relative overflow-hidden">
            <img className="hover:scale-120 transition-all duration-500 rounded-xl" src={outreachImages[8].src} alt="" />

            <div className="bg-opacity-50 font-medium text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px]">
              Football
            </div>
          </div>
        </div>
      </>
    );
}

export default SportsAndGames