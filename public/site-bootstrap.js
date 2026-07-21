window.addEventListener("load", function () {
  if (window.grecaptcha && window.grecaptcha.ready) {
    window.grecaptcha.ready(function () {
      window.grecaptcha.execute("6Leef4opAAAAAIHXI82ZE6l8ezbNjJe2_1nwDlUH", { action: "submit" }).then(function (token) {
        var el = document.querySelector(".g-recaptcha-response");
        if (el) {
          el.value = token;
        }
      });
    });
  }
});

const updateChatMessage = () => {
  const element = document.querySelector(".message-content");
  if (!element) return false;
  element.innerHTML = `Clear All Doubts Instantly.<br><small>Chat with Us Instantly!</small>`;
  return true;
};

window.addEventListener("load", function () {
  if (updateChatMessage() || typeof MutationObserver === "undefined") {
    return;
  }

  const target = document.getElementById("parrotBot") || document.body;
  const observer = new MutationObserver(function () {
    if (updateChatMessage()) {
      observer.disconnect();
    }
  });

  observer.observe(target, { childList: true, subtree: target !== document.body });
  window.setTimeout(function () {
    observer.disconnect();
  }, 4000);
});
