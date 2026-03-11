import React, { useEffect } from "react";

declare global {
    interface Window {
        liveChatOperation?: () => void;
        cancelReply?: () => void;
        uploadFile?: () => void;
        sendMessage?: () => void;
        grecaptcha?: any;
    }
}

const Chatbot: React.FC = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const loadScript = (src: string): Promise<void> => {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                document.body.appendChild(script);
            });
        };

        const loadResources = async () => {
            if (typeof window === "undefined" || typeof document === "undefined") {
                return;
            }

            await loadScript("https://code.jquery.com/jquery-3.6.1.min.js");
            await loadScript("https://js.pusher.com/7.0/pusher.min.js");

            await loadScript(
                "https://arsinfotech.in/chatbot/admin/public/chatbot/chatbot.js"
            );

            await loadScript(
                "https://arsinfotech.in/chatbot/admin/public/livechat/user.js"
            );

            await loadScript(
                "https://www.google.com/recaptcha/api.js?render=6Leef4opAAAAAIHXI82ZE6l8ezbNjJe2_1nwDlUH"
            );

            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    window.grecaptcha
                        .execute(
                            "6Leef4opAAAAAIHXI82ZE6l8ezbNjJe2_1nwDlUH",
                            { action: "submit" }
                        )
                        .then((token: string) => {
                            const el = document.querySelector(
                                ".g-recaptcha-response"
                            ) as HTMLInputElement | null;

                            if (el) el.value = token;
                        });
                });
            }
        };

        loadResources();

        // Prevent reference errors
        window.liveChatOperation =
            window.liveChatOperation || (() => { });
        window.cancelReply =
            window.cancelReply || (() => { });
        window.uploadFile =
            window.uploadFile || (() => { });
        window.sendMessage =
            window.sendMessage || (() => { });
    }, []);

    return (
        <>
            <style>
                {`
        .live-chat-container {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 350px;
          max-width: 90vw;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.2);
          z-index: 9999;
          display: none;
        }

        .live-chat-header {
          background: #075e54;
          color: white;
          padding: 15px;
          border-radius: 12px 12px 0 0;
          display: flex;
          justify-content: space-between;
        }

        .user-info { display: flex; gap: 10px; }

        .avatar {
          background: #128C7E;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-details h2 { margin: 0; font-size: 16px; }
        .user-details p { margin: 0; font-size: 12px; opacity: 0.8; }

        .chat-actions button {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }

        .live-chat-messages {
          height: 300px;
          overflow-y: auto;
          padding: 15px;
          background: #f0f2f5;
        }

        .reply-preview {
          background: #e3e3e3;
          padding: 8px 15px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .message-input-container {
          display: flex;
          padding: 10px;
          background: white;
          border-top: 1px solid #ddd;
        }

        .input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          background: #f0f2f5;
          border-radius: 20px;
          padding: 0 10px;
        }

        .input-wrapper input {
          border: none;
          background: transparent;
          padding: 10px 5px;
          width: 100%;
          outline: none;
        }

        .emoji-btn, .attach-btn {
          background: none;
          border: none;
          color: #555;
          cursor: pointer;
        }

        .send-btn {
          background: #075e54;
          border: none;
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          margin-left: 8px;
          cursor: pointer;
        }

        #chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 10000;
        }
        `}
            </style>

            {/* Live Chat Container */}
            <div className="live-chat-container" id="liveChatContainer">
                <div className="live-chat-header">
                    <div className="user-info">
                        <div className="avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="user-details">
                            <h2>Admin Support</h2>
                            <p className="status">Online</p>
                        </div>
                    </div>
                    <div className="chat-actions">
                        <button onClick={() => window.liveChatOperation?.()}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div className="live-chat-messages" id="chatBox"></div>

                <div
                    className="reply-preview"
                    id="replyPreview"
                    style={{ display: "none" }}
                >
                    <div className="reply-content"></div>
                    <button onClick={() => window.cancelReply?.()}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="message-input-container">
                    <div className="input-wrapper">
                        <button className="emoji-btn">
                            <i className="far fa-smile"></i>
                        </button>
                        <input
                            type="text"
                            id="messageInput"
                            placeholder="Type a message"
                        />
                        <button
                            className="attach-btn"
                            onClick={() => window.uploadFile?.()}
                        >
                            <i className="fas fa-paperclip"></i>
                        </button>
                    </div>
                    <button
                        className="send-btn"
                        onClick={() => window.sendMessage?.()}
                    >
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>

            {/* Chatbot Container */}
            <div
                id="chatbot-container"
                data-key="WJ7Vitr1kuP5UtQX10hjIvfh3QXV8twrYqB7xo4leYDQatWIU2JvNN16GAGig0Wx"
            />
        </>
    );
};


export default Chatbot;