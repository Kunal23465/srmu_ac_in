import { outreachImages } from '../../../data/campus-life/facilities/facilities-data';

const SportsAndGames = () => {
    return (
        <>

            <div className="text-center ">
                <h2 className="text-2xl pt-15 sm:text-3xl lg:text-[50px] font-semibold">
                    Sports and Games
                </h2>

                <p className="mt-4 mb-8 max-w-3xl mx-auto">
                    SRMU offers top-notch sports and recreational facilities, covering a range
                    of indoor and outdoor activities such as chess, carrom, badminton, tennis,
                    basketball, volleyball, football, and cricket. The campus boasts extensive
                    sports facilities — including a gymnasium — aligning with the belief that a
                    healthy mind thrives in a healthy body.
                </p>
            </div>

            <div className="parent_grid_gallary px-4">
                <div className="children relative">
                    <img src={outreachImages[0].src} alt="Tennis" />
                    <div className="bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm">
                        Tennis
                    </div>
                </div>

                <div className="children">
                    <img src={outreachImages[3].src} alt="" />
                </div>

                <div className="children relative">
                    <img src={outreachImages[5].src} alt="Table Tennis" />
                    <div className="bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm">
                        Table Tennis
                    </div>
                </div>

                <div className="children">
                    <img src={outreachImages[4].src} alt="" />
                </div>

                <div className="children relative">
                    <img src={outreachImages[6].src} alt="Basketball" />
                    <div className="bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm">
                        Basketball
                    </div>
                </div>

                <div className="children relative">
                    <img src={outreachImages[1].src} alt="Cricket" />
                    <div className="bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm">
                        Cricket
                    </div>
                </div>

                <div className="children relative">
                    <img src={outreachImages[2].src} alt="Volleyball" />
                    <div className="bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm">
                        Volleyball
                    </div>
                </div>

                <div className="children relative">
                    <img src={outreachImages[7].src} alt="Gymnasium" />
                    <div className="bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm">
                        Gymnasium
                    </div>
                </div>

                <div className="children relative">
                    <img src={outreachImages[8].src} alt="" />
                </div>
            </div>

        </>
    )
}

export default SportsAndGames