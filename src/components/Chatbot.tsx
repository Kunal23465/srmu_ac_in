import React, { useEffect, useRef } from "react";

const CHATBOT_CONTAINER_ID = "chatbot-container";
const CHATBOT_SCRIPT_ID = "third-party-chatbot-script";
const JQUERY_SCRIPT_ID = "third-party-chatbot-jquery";
const PUSHER_SCRIPT_ID = "third-party-chatbot-pusher";
const CHATBOT_KEY = "WJ7Vitr1kuP5UtQX10hjIvfh3QXV8twrYqB7xo4leYDQatWIU2JvNN16GAGig0Wx";

const loadScript = (id: string, src: string) =>
  new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(id) as HTMLScriptElement | null;

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
    document.body.appendChild(script);
  });

const Chatbot: React.FC = () => {
  const hasStartedLoading = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const loadChatbot = async () => {
      if (hasStartedLoading.current) {
        return;
      }

      hasStartedLoading.current = true;

      try {
        await loadScript(JQUERY_SCRIPT_ID, "https://code.jquery.com/jquery-3.6.1.min.js");
        await loadScript(PUSHER_SCRIPT_ID, "https://js.pusher.com/7.0/pusher.min.js");
        await loadScript(CHATBOT_SCRIPT_ID, "https://arsinfotech.in/chatbot/admin/public/chatbot/chatbot.js");
      } catch (error) {
        hasStartedLoading.current = false;
        console.error("Chatbot failed to load", error);
      }
    };

    const handleUserIntent = () => {
      void loadChatbot();
      detachListeners();
    };

    const detachListeners = () => {
      window.removeEventListener("pointerdown", handleUserIntent);
      window.removeEventListener("keydown", handleUserIntent);
      window.removeEventListener("scroll", handleUserIntent);
      window.removeEventListener("touchstart", handleUserIntent);
    };

    window.addEventListener("pointerdown", handleUserIntent, { once: true, passive: true });
    window.addEventListener("keydown", handleUserIntent, { once: true });
    window.addEventListener("scroll", handleUserIntent, { once: true, passive: true });
    window.addEventListener("touchstart", handleUserIntent, { once: true, passive: true });

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    if (typeof idleWindow.requestIdleCallback === "function") {
      idleHandle = idleWindow.requestIdleCallback(() => {
        void loadChatbot();
        detachListeners();
      }, { timeout: 8000 });
    } else {
      timeoutHandle = window.setTimeout(() => {
        void loadChatbot();
        detachListeners();
      }, 8000);
    }

    return () => {
      detachListeners();

      if (idleHandle !== null && typeof idleWindow.cancelIdleCallback === "function") {
        idleWindow.cancelIdleCallback(idleHandle);
      }

      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  return <div id={CHATBOT_CONTAINER_ID} data-key={CHATBOT_KEY} />;
};

export default Chatbot;
