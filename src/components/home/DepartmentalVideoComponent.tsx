import  { useState } from "react";
import Slider from "react-slick";

import media from "../../assets/images/home/departmentalvideos/media-28022504202912.png";
import business from "../../assets/images/home/departmentalvideos/business.png";
import civil from "../../assets/images/home/departmentalvideos/civil.png";
import mechanical from "../../assets/images/home/departmentalvideos/mech-28022504291359.png";
import humanities from "../../assets/images/home/departmentalvideos/hum-28022504330361.png";
import smart from "../../assets/images/home/departmentalvideos/ec-2802250400074.png";
import agri from "../../assets/images/home/departmentalvideos/agri-2802250413593.png";
import computer from "../../assets/images/home/departmentalvideos/cs-28022504080194.png";
import biotech from "../../assets/images/home/departmentalvideos/bt-28022504100056.png";
import law from "../../assets/images/home/departmentalvideos/law-28022504141516.png";
import pharma from "../../assets/images/home/departmentalvideos/pharma-28022504201232.png";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
}

const videos: VideoItem[] = [
  { id: "YOUR_VIDEO_ID_1", title: "From Classrooms to Newsrooms – The Media Journey!", thumbnail: media },
  { id: "YOUR_VIDEO_ID_2", title: "Building Business Minds for a Global Tomorrow!", thumbnail: business },
  { id: "YOUR_VIDEO_ID_3", title: "From Blueprints to Landmarks – The Power of Civil Engineering!", thumbnail: civil },
  { id: "YOUR_VIDEO_ID_4", title: "Mechanical Engineering: The Force Behind Technology!", thumbnail: mechanical },
  { id: "YOUR_VIDEO_ID_5", title: "Think, Explore, Transform – The World of Humanities!", thumbnail: humanities },
  { id: "YOUR_VIDEO_ID_6", title: "Building Smart Solutions for a Connected World!", thumbnail: smart },
  { id: "YOUR_VIDEO_ID_7", title: "Innovate, Cultivate, Transform – The Future of Agriculture!", thumbnail: agri },
  { id: "YOUR_VIDEO_ID_8", title: "From Algorithms to AI – The Future Starts Here!", thumbnail: computer },
  { id: "YOUR_VIDEO_ID_9", title: "From Genes to Genius – The Power of Biotech!", thumbnail: biotech },
  { id: "YOUR_VIDEO_ID_10", title: "Your Pathway to Legal Excellence!", thumbnail: law },
  { id: "YOUR_VIDEO_ID_11", title: "Pharmacy: The Heart of Healthcare Innovation!", thumbnail: pharma },
];

export default function DepartmentalVideo() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
      <section className="py-7 md:py-10 lg:py-14">
      <h2 className="text-[28px] text-center sm:text-xl lg:text-[3.125rem] fw600 mb-10">Departmental Video</h2>

      <div className="container mx-auto px-4">
        <Slider className="department-crousel" {...settings}>
          {videos.map((video, index) => {
            const isSecondImage = (activeSlide + 1) % videos.length === index;
            return (
              <div key={video.id} className="px-3">
                <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  {/* Thumbnail */}
                  <img src={video.thumbnail} className={`w-full h-[320px] ${isSecondImage ? " w-full lg:h-[400px]" : " w-full "} object-cover rounded-xl`} />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card click
                        setSelectedVideo(video.id);
                      }}
                      className="bg-[#ffb703] hover:bg-[#ffb703] transition p-5 rounded-full shadow-xl pointer-events-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.5 5.5l8 4.5-8 4.5v-9z" />
                      </svg>
                    </button>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 w-full bg-black/50 text-white text-lg font-semibold px-4 py-3">{video.title}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">
          <button onClick={() => setSelectedVideo(null)} className="absolute top-6 right-8 text-white text-3xl font-bold">
            ✕
          </button>

          <div className="w-[90%] md:w-[70%] lg:w-[60%] h-[70%]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-xl"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
