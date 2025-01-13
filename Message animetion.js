const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  // Update the question and GIF
  question.innerHTML = "Ahhh , I Love You Too ..😍🧸";
  gif.src = "giphy (1).webp";

  // Send "Yes" to Gmail
  const recipient = "sokp0592@gmail.com"; // Your Gmail address
  const subject = "Response from Your Website";
  const body = "Question : Do You Love Me .. ?\n\nResponse : Yes , I Love You So Much ..😍🧸";

  // Construct the mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client
  window.location.href = mailtoLink;
});

noBtn.addEventListener("click", () => {
  // Send "No" to Gmail
  const recipient = "sokp0592@gmail.com"; // Your Gmail address
  const subject = "Response from Your Website";
  const body = "Question : Do You Love Me .. ?\n\nResponse : No .. 😊";

  // Construct the mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client
  window.location.href = mailtoLink;
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  // Ensure the button stays within the visible area
  const randomX = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX));
  const randomY = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
