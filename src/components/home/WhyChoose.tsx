export type WhyChooseVideoItem = {
  id: string;
  videoSrc: string; // asset url/path (e.g. /videos/why-choose/foo.mp4)
  posterSrc: string; // image url/path for card + modal thumbnail
  pillLabel: string;
  pillClassName: string; // tailwind utility classes
  title: string;
  subtitle: string;
};

import yvt1 from "../../assets/images/youtube/yvt1.jpg";
import yvt2 from "../../assets/images/youtube/yvt2.jpg";
import yvt3 from "../../assets/images/youtube/yvt3.jpg";
import yvt4 from "../../assets/images/youtube/yvt4.jpg";
import yvt5 from "../../assets/images/youtube/yvt5.jpg";
import yvt6 from "../../assets/images/youtube/yvt6.jpg";
import banner1 from "../../assets/video/banner-1.mp4"
import banner2 from "../../assets/video/banner-2.mp4"
import banner3 from "../../assets/video/banner-3.mp4"
import banner4 from "../../assets/video/banner-4.mp4"
import banner5 from "../../assets/video/banner-5.mp4"
import banner6 from "../../assets/video/banner-6.mp4"

export const whyChooseVideos: WhyChooseVideoItem[] = [
  {
    id: "founders-day",
    videoSrc:banner1,
    posterSrc: yvt1,
    pillLabel: "Founders Day",
    pillClassName: "bg-indigo-600",
    title: "Life at BBDU",
    subtitle: "Explore our world-class campus with 100+...",
  },
  {
    id: "dj-nights",
    videoSrc: banner2,
    posterSrc: yvt2,
    pillLabel: "Dazzling Nights",
    pillClassName: "bg-orange-500",
    title: "DJ Nights",
    subtitle: "Celebrating excellence with 2000+ graduates",
  },
  {
    id: "vision",
    videoSrc: banner3,
    posterSrc: yvt3,
    pillLabel: "Vision",
    pillClassName: "bg-pink-600",
    title: "Founders Day",
    subtitle: "Honoring a legacy that inspires forever",
  },
  {
    id: "student-life",
    videoSrc: banner4,
    posterSrc: yvt4,
    pillLabel: "Life",
    pillClassName: "bg-red-500",
    title: "Student Life",
    subtitle: "A day in the life of a SRMU student",
  },
  {
    id: "innovations-ai",
    videoSrc: banner5,
    posterSrc: yvt5,
    pillLabel: "Innovations",
    pillClassName: "bg-green-600",
    title: "Innovations & AI",
    subtitle: "Our students getting placed at Fortune 500...",
  },
  {
    id: "campus-tour-2026",
    videoSrc: banner6,
    posterSrc: yvt6,
    pillLabel: "Campus",
    pillClassName: "bg-violet-600",
    title: "Campus Tour 2026",
    subtitle: "Explore our world-class campus with 100+...",
  },
];


import React, { useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "antd";
import { FaPlay } from "react-icons/fa";
import Classes from "../../utils/styles/Global.module.css";

const WhyChoose: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [cardPlayingById, setCardPlayingById] = useState<
    Record<string, boolean>
  >({});

  const selectedBannerVideoRef = useRef<HTMLVideoElement | null>(null);
  const modalScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    if (!isModalOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPaddingRight;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [hasMounted, isModalOpen]);

  const visibleVideos = useMemo(() => whyChooseVideos.slice(0, 6), []);

  const defaultVideoId = useMemo(() => whyChooseVideos[0]?.id ?? null, []);
  const selectedVideoId = activeVideoId ?? defaultVideoId;

  const orderedModalVideos = useMemo(() => {
    if (!whyChooseVideos.length) return [] as WhyChooseVideoItem[];
    const selected =
      (selectedVideoId
        ? whyChooseVideos.find((v) => v.id === selectedVideoId)
        : null) ?? whyChooseVideos[0];
    const rest = whyChooseVideos.filter((v) => v.id !== selected.id);
    return [selected, ...rest];
  }, [selectedVideoId]);

  const openModalFor = (id: string) => {
    setActiveVideoId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (!isModalOpen) return;

    // Always jump to top so the selected (first) video is visible.
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }

    const video = selectedBannerVideoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => undefined);
    }
  }, [isModalOpen, selectedVideoId]);

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className={`${Classes["container"]}`}>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[3rem] fw600">
              Why Choose SRMU
            </h2>
            <p className="mt-2 text-[#00000099]">
              Explore student life, campus, events and innovation.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {visibleVideos.map((item) => (
              
              <button
                key={item.id}
                type="button"
                onClick={() => openModalFor(item.id)}
                className="relative w-full h-[420px] rounded-[20px] overflow-hidden bg-slate-950 text-left focus:outline-none"
              >
                {/* autoplay background */}
                <video
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                  src={item.videoSrc}
                  poster={item.posterSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onPlaying={() =>
                    setCardPlayingById((prev) => ({ ...prev, [item.id]: true }))
                  }
                  onPause={() =>
                    setCardPlayingById((prev) => ({ ...prev, [item.id]: false }))
                  }
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

                {/* pill */}
                <div className="absolute left-4 top-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white ${item.pillClassName}`}
                  >
                    {item.pillLabel}
                  </span>
                </div>

                {/* play button (hide while playing) */}
                {!cardPlayingById[item.id] ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full border border-white/45 bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <FaPlay className="ml-1 text-white" />
                    </div>
                  </div>
                ) : null}

                {/* bottom text */}
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <h3 className="text-white text-lg fw600 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-white/75 text-sm">{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasMounted && (
        <Modal
          open={isModalOpen}
          onCancel={closeModal}
          footer={null}
          width="100vw"
          style={{ top: 0, margin: 0, paddingBottom: 0, maxWidth: "100vw" }}
          wrapClassName="overflow-hidden"
          styles={{
            content: {
              padding: 0,
              borderRadius: 0,
              height: "100dvh",
              overflow: "hidden",
              background: "transparent",
            },
            body: { padding: 0, height: "100dvh", overflow: "hidden" },
          }}
          destroyOnClose
          afterClose={() => setActiveVideoId(null)}
          closable={false}
        >
          <div className="relative h-[100dvh] w-screen overflow-hidden bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 h-10 w-10 rounded-full bg-white/15 text-white backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            {/* Reels-style list: all videos stacked vertically (no horizontal scroll) */}
            <div
              ref={modalScrollRef}
              className="h-[100dvh] overflow-y-auto overflow-x-hidden px-4 pb-10 pt-14"
            >
              <div className="mx-auto w-full max-w-[360px]">
                <div className="flex flex-col gap-4">
                  {orderedModalVideos.map((item, index) => {
                    const isActive = item.id === selectedVideoId;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveVideoId(item.id)}
                        className="relative w-full text-left focus:outline-none"
                      >
                        <div
                          className={`relative aspect-[9/16] w-full overflow-hidden rounded-[34px] bg-slate-950 ${
                            isActive ? "ring-2 ring-white/60" : ""
                          }`}
                        >
                          <video
                            key={item.id}
                            ref={index === 0 ? selectedBannerVideoRef : null}
                            className="absolute inset-0 h-full w-full object-cover"
                            src={item.videoSrc}
                            poster={item.posterSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />

                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

                          <div className="absolute left-4 top-4">
                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white ${item.pillClassName}`}
                            >
                              {item.pillLabel}
                            </span>
                          </div>

                          <div className="absolute left-0 right-0 bottom-0 p-5">
                            <h3 className="text-white text-lg fw600 leading-tight">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-white/75 text-sm">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default WhyChoose;
