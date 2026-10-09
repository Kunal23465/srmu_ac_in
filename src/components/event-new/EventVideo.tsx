import { useEffect, useRef } from "react";

type EventVideoProps = {
  src: string;
  poster: string;
  className?: string;
  controls?: boolean;
  label?: string;
};

export default function EventVideo({ src, poster, className, controls = false, label }: EventVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let loaded = false;
    let visible = false;
    let userPaused = false;
    let policyPaused = true;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    const load = () => {
      if (loaded) return;
      loaded = true;
      video.src = src;
      video.preload = "metadata";
      video.load();
    };
    const updatePlayback = () => {
      if (!visible || document.hidden) {
        policyPaused = true;
        video.pause();
      } else if (!userPaused && !motion.matches && !connection?.saveData) {
        load();
        policyPaused = false;
        // Autoplay may be blocked by the browser; retain the poster/controls.
        void video.play().catch(() => {});
      }
    };
    const onPause = () => {
      if (controls && !policyPaused) userPaused = true;
    };
    const onPlay = () => {
      userPaused = false;
      policyPaused = false;
    };
    const onMotionChange = () => {
      if (motion.matches) {
        policyPaused = true;
        video.pause();
      } else {
        updatePlayback();
      }
    };

    // No src is emitted during SSR or the initial render. Even duplicated
    // marquee cards only request video bytes when approaching the viewport.
    const nearObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (controls || (!motion.matches && !connection?.saveData)) load();
        nearObserver.disconnect();
      }
    }, { rootMargin: "200px 0px" });
    const visibleObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
      updatePlayback();
    }, { threshold: [0, 0.15] });

    nearObserver.observe(video);
    visibleObserver.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    motion.addEventListener("change", onMotionChange);
    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);

    return () => {
      nearObserver.disconnect();
      visibleObserver.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      motion.removeEventListener("change", onMotionChange);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [src, controls]);

  return <video ref={videoRef} poster={poster} muted loop playsInline controls={controls} preload="none" className={className} aria-label={controls ? label : undefined} aria-hidden={controls ? undefined : true} />;
}
