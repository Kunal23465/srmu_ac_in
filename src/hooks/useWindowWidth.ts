import { useState, useEffect } from "react";

// SSR‑safe window width hook: starts at 0 on server and
// updates to the real width only after the component mounts.
// This prevents hydration mismatches caused by reading
// `window.innerWidth` during the initial render.
export function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // set initial width now that we're on the client
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
