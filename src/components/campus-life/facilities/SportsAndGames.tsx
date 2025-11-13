import Classes from "../../../utils/styles/Global.module.css";
import { outreachImages } from '../../../data/campus-life/facilities/facilities-data';

const SportsAndGames = () => {
    return (
        <>
            <div className={`${Classes["container"]} `}>
                <div className="text-center mt-20">
                    <h2 className="font50 fw500">
                        Sports and Games
                    </h2>
                    <p className="mt-4 mb-4">
                        SRMU offer top-notch sports and recreational facilities, covering a range of indoor and outdoor activities such as chess, carrom, badminton, tennis, basketball, volleyball, football, and cricket. The campus boasts of extensive sports facilities - including a gymnasium - aligning with the belief that a healthy mind thrives in a healthy body.
                    </p>
                </div>
                <div className="parent_grid_gallary">
                    <div className="children relative">
                        <img src={outreachImages[0].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Tennis
                        </div>
                    </div>
                    <div className="children">
                        <img src={outreachImages[3].src} alt="" />
                    </div>
                    <div className="children relative">
                        <img src={outreachImages[5].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Table Tennis
                        </div>
                    </div>
                    <div className="children ">
                        <img src={outreachImages[4].src} alt="" />
                    </div>
                    <div className="children relative">
                        <img src={outreachImages[6].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Basket Ball                        </div>
                    </div>
                    <div className="children relative">
                        <img src={outreachImages[1].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Cricket                        </div>
                    </div>
                    <div className="children relative">
                        <img src={outreachImages[2].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Volleyball
                        </div>
                    </div>
                    <div className="children relative">
                        <img src={outreachImages[7].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Gymnasium
                        </div>
                    </div>
                    <div className="children">
                        <img src={outreachImages[8].src} alt="" />
                        <div className=" bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
                            Football
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SportsAndGames