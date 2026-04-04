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

  if (!element) {
    return false;
  }

  element.innerHTML = `
                            Clear All Doubts Instantly.<br>
                            <small>Chat with Us Instantly!</small>
                            `;

  return true;
};

if (!updateChatMessage()) {
  let attempts = 0;
  const forceUpdate = setInterval(() => {
    attempts += 1;

    if (updateChatMessage() || attempts >= 40) {
      clearInterval(forceUpdate);
    }
  }, 250);
}
