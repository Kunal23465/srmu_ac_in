import { useState } from "react";



import { customeOverViewType } from "../../../types/home-data-type";


export const AcademicBankCreditOverviewData: customeOverViewType = {
  heading: "NAD & ABC",
  content:
    "The National Academic Depository (NAD) is a pioneering initiative aimed at establishing a comprehensive online repository for all academic awards. It serves as a 24X7 digital storehouse for certificates, diplomas, degrees, mark-sheets, and other academic credentials, meticulously digitized and securely lodged by academic institutions, boards, and eligibility assessment bodies. NAD not only facilitates easy access and retrieval of academic awards but also ensures their authenticity and secure storage.In line with the Ministry of Education's decision, DigiLocker is now the exclusive repository for NAD. Academic institutions are urged to onboard NAD through DigiLocker exclusively. Those who have previously deposited academic data with the former depositories (NDML or CVL) can now coordinate via email to instruct them for data transfer as per the University Grants Commission's (UGC) guidelines.",
};
export const videos = [
  {
    id: "5GLUuX-SqmU",
    thumbnail: "https://img.youtube.com/vi/5GLUuX-SqmU/maxresdefault.jpg",
    title: "Video 1",
  },
  {
    id: "kK4tA-pMBcM",
    thumbnail: "https://img.youtube.com/vi/kK4tA-pMBcM/maxresdefault.jpg",
    title: "Video 2",
  },
  {
    id: "WW07HV_Rj4E",
    thumbnail: "https://img.youtube.com/vi/WW07HV_Rj4E/maxresdefault.jpg",
    title: "Video 3",
  },
  {
    id: "ndbBOe3ylfc",
    thumbnail: "https://img.youtube.com/vi/ndbBOe3ylfc/maxresdefault.jpg",
    title: "Video 4",
  },
];





const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="abc-videos-section">
      <h2 className="abc-videos-title lg:text-[22px] sm:text-[19.5px] text-[19.5px] md:text-[20.625px] color_light_blue">
        Informative Videos on ABC
      </h2>

      <div className="abc-videos-grid">
        {videos.map((video, idx) => (
          <div
  key={idx}
  className=" relative rounded-2xl overflow-hidden bg-black shadow-lg"
>
  {selectedVideo === video.id ? (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
      allow="autoplay"
      allowFullScreen
      className="rounded-2xl w-full "
    />
  ) : (
    <div
      className="relative cursor-pointer group"
      onClick={() => setSelectedVideo(video.id)}
    >
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />

      {/* Top Left (Title + subtitle static since not in data) */}
      <div className="absolute top-3 left-3 text-white">
        <p className="font-semibold text-sm">ABC Tutorial-{idx + 1}</p>
        <p className="text-xs opacity-80">SRMU Lucknow</p>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 w-14 h-10 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white text-xl">▶</span>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        Watch on YouTube
      </div>

      {/* Bottom Left Icon */}
      <div className="absolute bottom-3 left-3 text-white text-sm">
        🔗
      </div>
    </div>
  )}
</div>
        ))}
      </div>
    </div>
  );
};

export default Videos;