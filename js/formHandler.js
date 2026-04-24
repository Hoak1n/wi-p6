// js/formHandler.js
import { state, setState } from "./state.js";

export function initFormLogic() {
  const feedbackForm = document.getElementById("feedback-form");
  const userEmail = document.getElementById("user-email");
  const userName = document.getElementById("user-name");
  const userMessage = document.getElementById("user-message");
  const emailError = document.getElementById("email-error");
  const commentsContainer = document.getElementById("comments-container");
  const submitBtn = document.getElementById("submit-btn");

  if (!feedbackForm) return;

  // function to render a comment card
  function renderComment(name, date, text) {
    const newComment = document.createElement("div");
    newComment.classList.add("comment-card");
    newComment.innerHTML = `<strong>${name}</strong> <small style="color: #888;">${date}</small><p>${text}</p>`;
    commentsContainer.prepend(newComment);
  }

  // visualize existing reviews from state
  if (state.reviews && state.reviews.length > 0) {
    state.reviews.forEach((review) => {
      renderComment(review.name, review.date, review.text);
    });
  }

  // validate email input
  userEmail.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userEmail.value.length > 0 && !emailPattern.test(userEmail.value)) {
      emailError.style.display = "block";
      userEmail.style.borderColor = "red";
    } else {
      emailError.style.display = "none";
      userEmail.style.borderColor = "#ddd";
    }
  });

  // submit form handler
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (
      userName.value.trim() === "" ||
      userEmail.value.trim() === "" ||
      userMessage.value.trim() === ""
    ) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    const name = userName.value.trim();
    const text = userMessage.value.trim();
    const date = new Date().toLocaleString();

    // Save review to state
    const updatedReviews = [...state.reviews, { name, date, text }];
    setState("reviews", updatedReviews);

    // Visualize the new comment immediately
    renderComment(name, date, text);

    // effect for successful submission
    submitBtn.style.backgroundColor = "green";
    submitBtn.innerText = "Успішно додано!";
    setTimeout(() => {
      submitBtn.style.backgroundColor = "#333";
      submitBtn.innerText = "Відправити";
    }, 2000);

    feedbackForm.reset();
    alert("Дякуємо! Ваш відгук додано.");
  });
}
