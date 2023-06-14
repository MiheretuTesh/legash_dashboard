export function handleFacebook() {
  console.log("facebook");
}

export function handleTelegram() {
  const text = "Hello, sharing on Telegram!";
  const url =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"; // Replace with your desired URL

  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);
  const telegramUrl = `https://t.me/share/url?text=${encodedText}&url=${encodedUrl}`;

  window.open(telegramUrl);
}

export function handleLink() {
  navigator.clipboard
    .writeText("text")
    .then(() => {
      console.log("Text copied to clipboard:", "text");
    })
    .catch((error) => {
      console.error("Failed to copy text:", error);
    });
}
