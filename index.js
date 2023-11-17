const messageForm = document.querySelector(".message-form");
const messageInput = document.querySelector(".message-form input");
const linkInput = document.querySelector("#link-input");
const copyBtn = document.querySelector("#copy-btn");
const messageFormCard = document.querySelector("#message-form-card");
const linkCard = document.querySelector("#link-card");
const messageShowCard = document.querySelector("#message-show-card");
const { hash } = window.location;

//decode the url hash into readable format
const message = atob(hash.replace("#", ""));

//if message exists then show the message show card
if (message) {
  messageShowCard.classList.remove("hide");
  messageFormCard.classList.add("hide");
  //show the message inside a message show card h1
  document.querySelector("#message-show-card h1").innerHTML = message;
}

//message form where user can encode their message
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageFormCard.classList.add("hide");
  linkCard.classList.remove("hide");
  const encryptedText = btoa(messageInput.value);
  linkInput.value = `${window.location}#${encryptedText}`;
});

//copy link functionality
copyBtn.addEventListener("click", function (e) {
  linkInput.select();
  navigator.clipboard
    .writeText(linkInput.value)
    .then(() => {
      this.classList.add("blue");
      this.innerText = "Link Copied to ClipBoard";
      resetCopyButton();
    })
    .catch(() => {
      this.classList.add("red");
      this.innerText = "link copy failed";
      resetCopyButton();
    });
});

const resetCopyButton = () => {
  setTimeout(() => {
    copyBtn.innerText = "copy URL";
    copyBtn.classList.remove("blue", "red");
  }, 1000);
};
