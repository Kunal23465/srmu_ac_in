import React, { useEffect, useRef } from "react";

const CHATBOT_CONTAINER_ID = "chatbot-container";
const CHATBOT_SCRIPT_ID = "r2win-chatbot-script";
const LIVECHAT_SCRIPT_ID = "r2win-livechat-script";
const PUSHER_SCRIPT_ID = "r2win-pusher-script";
const STYLE_ID = "r2win-livechat-style";
const FONT_AWESOME_ID = "r2win-fontawesome";

const CHATBOT_KEY =
  "YtXSDHVsasMzxWeJzV1dGRxIX5MncaGd9jyXBUF3iS7qOIcGnrHNmCgbp8COkwiH";

const loadScript = (id: string, src: string) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = false;

    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );

    script.addEventListener(
      "error",
      () => reject(new Error(`Failed to load ${src}`)),
      { once: true }
    );

    document.body.appendChild(script);
  });

const loadCss = (id: string, href: string) => {
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;

  document.head.appendChild(link);
};

const Chatbot: React.FC = () => {
  const hasStartedLoading = useRef(false);

  useEffect(() => {
    loadCss(
      FONT_AWESOME_ID,
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    );

    loadCss(
      STYLE_ID,
      "https://rajeev.r2win.com/livechat/user_style.css"
    );

    const loadChatbot = async () => {
      if (hasStartedLoading.current) return;

      hasStartedLoading.current = true;

      try {
        await loadScript(
          PUSHER_SCRIPT_ID,
          "https://js.pusher.com/7.0/pusher.min.js"
        );

        await loadScript(
          CHATBOT_SCRIPT_ID,
          "https://rajeev.r2win.com/chatbot/chatbot.js?v=20260606"
        );

        await loadScript(
          LIVECHAT_SCRIPT_ID,
          "https://rajeev.r2win.com/livechat/user.js?v=20260606"
        );

        window.dispatchEvent(new Event("load"));
        document.dispatchEvent(new Event("DOMContentLoaded"));
      } catch (error) {
        hasStartedLoading.current = false;
        console.error("Chatbot failed to load", error);
      }
    };

    void loadChatbot();
  }, []);

  return (
    <>
      {/* Live Chat Widget */}
      <div className="live-chat-container" id="liveChatContainer">
        <div className="live-chat-header">
          <div className="user-info">
            <div className="avatar">
              <i className="fas fa-user" />
            </div>

            <div className="user-details">
              <h2>Admin Support</h2>
              <p className="status">Online</p>
            </div>
          </div>

          <div className="chat-actions">
            <button
              id="closeChatBtn"
              className="action-btn close-chat-btn"
              onClick={() => (window as any).liveChatOperation?.()}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>

        <div className="live-chat-messages" id="chatBox" />

        <div
          className="reply-preview"
          id="replyPreview"
          style={{ display: "none" }}
        >
          <div className="reply-content" />

          <button
            className="cancel-reply"
            onClick={() => (window as any).cancelReply?.()}
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="message-input-container">
          <div className="input-wrapper">
            <button className="emoji-btn" type="button">
              <i className="far fa-smile" />
            </button>

            <input
              id="messageInput"
              type="text"
              placeholder="Type a message"
            />

            <button
              className="attach-btn"
              type="button"
              onClick={() => (window as any).uploadFile?.()}
            >
              <i className="fas fa-paperclip" />
            </button>
          </div>

          <button
            className="send-btn"
            type="button"
            onClick={() => (window as any).sendMessage?.()}
          >
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </div>

      {/* Chatbot Container */}
      <div
        id={CHATBOT_CONTAINER_ID}
        data-key={CHATBOT_KEY}
      />
    </>
  );
};

export default Chatbot;