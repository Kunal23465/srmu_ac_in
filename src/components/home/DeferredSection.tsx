import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type DeferredSectionProps = {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  eagerOnIdle?: boolean;
};

const scheduleIdleWork = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const idleCallback = (window as Window & {
    requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  }).requestIdleCallback;

  if (idleCallback) {
    const idleId = idleCallback(callback, { timeout: 1500 });

    return () => {
      (window as Window & {
        cancelIdleCallback?: (id: number) => void;
      }).cancelIdleCallback?.(idleId);
    };
  }

  const timeoutId = window.setTimeout(callback, 1200);
  return () => window.clearTimeout(timeoutId);
};

const DeferredSection = ({
  children,
  className,
  fallback,
  minHeight = 320,
  rootMargin = "280px 0px",
  eagerOnIdle = false,
}: DeferredSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender || typeof window === "undefined") {
      return;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    let cleanupIdleWork = () => undefined;

    if (eagerOnIdle) {
      cleanupIdleWork = scheduleIdleWork(() => setShouldRender(true));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cleanupIdleWork();
      observer.disconnect();
    };
  }, [eagerOnIdle, rootMargin, shouldRender]);

  const placeholderStyle: CSSProperties | undefined = shouldRender ? undefined : { minHeight };

  return (
    <div ref={containerRef} className={className} style={placeholderStyle}>
      {shouldRender
        ? children
        : fallback ?? <div aria-hidden="true" className="w-full rounded-[32px] bg-slate-100/80" style={{ minHeight }} />}
    </div>
  );
};

export default DeferredSection;
