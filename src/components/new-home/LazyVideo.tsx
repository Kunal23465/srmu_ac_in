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
  rootMargin = "600px 0px",
  autoPlay,
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

        if (visible && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { rootMargin, threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [eager, rootMargin, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || !autoPlay || !allowAutoplay) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isVisible) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [allowAutoplay, autoPlay, isVisible, shouldLoad]);

  return (
    <video
      {...props}
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay={Boolean(autoPlay && allowAutoplay)}
      preload={shouldLoad ? preload : "none"}
      onCanPlay={onCanPlay}
      onPlay={onPlay}
      onPause={onPause}
    />
  );
}
