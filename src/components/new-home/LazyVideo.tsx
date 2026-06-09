import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "preload"> & {
  src: string;
  eager?: boolean;
  rootMargin?: string;
  preload?: "none" | "metadata" | "auto";
};

const canAutoplayVideo = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;

  return !connection?.saveData && connection?.effectiveType !== "2g";
};

export default function LazyVideo({
  src,
  eager = false,
  rootMargin = "250px 0px",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "none",
  onCanPlay,
  onPlay,
  onPause,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isVisible, setIsVisible] = useState(eager);
  const [allowAutoplay, setAllowAutoplay] = useState(false);

  useEffect(() => {
    setAllowAutoplay(canAutoplayVideo());
  }, []);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const video = videoRef.current;

    if (!video || typeof window === "undefined") {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsVisible(visible);

        if (visible) {
          setShouldLoad(true);
        }
      },
      {
        rootMargin,
        threshold: 0.15,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [eager, rootMargin]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) {
      return;
    }

    if (autoPlay && allowAutoplay) {
      if (isVisible) {
        video.play().catch(() => {
          // Ignore autoplay errors
        });
      } else {
        video.pause();
      }
    }
  }, [allowAutoplay, autoPlay, isVisible, shouldLoad]);

  return (
    <video
      {...props}
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay={autoPlay && allowAutoplay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={shouldLoad ? preload : "none"}
      onCanPlay={onCanPlay}
      onPlay={onPlay}
      onPause={onPause}
    />
  );
}