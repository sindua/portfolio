// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".year-btn");

//   buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const year = btn.getAttribute("data-year");
//       const details = document.getElementById(`year-${year}`);
//       details.classList.toggle("show");
//     });
//   });
// });

// function initExperienceToggle() {
//   const buttons = document.querySelectorAll(".year-btn");

//   buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const year = btn.getAttribute("data-year");
//       const details = document.getElementById(`year-${year}`);
//       details.classList.toggle("show");
//     });
//   });
// }

function initExperienceButtons() {
  const buttons = document.querySelectorAll(".year-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // ⭐ prevents Experience from collapsing

      const year = btn.getAttribute("data-year");
      const details = document.getElementById(`year-${year}`);

      details.classList.toggle("show");
    });
  });
}

initExperienceButtons();
