const images = [
  "./images/jeremy-thomas-E0AHdsENmDg-unsplash.jpg",
  "./images/billy-huynh-W8KTS-mhFUE-unsplash.jpg",
];

let current = 0;

function fadeBackground() {
  const bg = document.getElementById("bg");

  // Fade out
  bg.classList.add("fade-out");

  setTimeout(() => {
    // Switch image
    current = (current + 1) % images.length;
    bg.style.backgroundImage = `url('${images[current]}')`;

    // Fade in
    bg.classList.remove("fade-out");
    bg.classList.add("fade-in");
  }, 1000); // fade-out duration
}

// Run every 5 seconds
setInterval(fadeBackground, 5000);

function initExperienceButtons() {
  const buttons = document.querySelectorAll(".year-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // prevents collapsing Experience

      const year = btn.getAttribute("data-year");
      const details = document.getElementById(`year-${year}`);

      details.classList.toggle("show");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const expBtn = document.getElementById("experienceBtn");
  const expSection = document.getElementById("experience");

  let expLoaded = false;

  expBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // ⭐ If already loaded, just toggle collapse
    if (expLoaded) {
      expSection.classList.toggle("show");
      return;
    }

    // ⭐ First time: load exp.html
    fetch("./exp.html")
      .then((response) => response.text())
      .then((data) => {
        expSection.innerHTML = data;
        expLoaded = true;

        // ⭐ Open it the first time
        expSection.classList.add("show");

        // ⭐ Attach year button listeners
        initExperienceButtons();
      });
  });
});
// expBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   console.log("Experience CLICKED");

//   fetch("./exp.html")
//     .then((response) => response.text())
//     .then((data) => {
//       expSection.innerHTML = data;
//     });
// });

function toggleSection(btnId, sectionId) {
  const btn = document.getElementById(btnId);
  const section = document.getElementById(sectionId);

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    section.classList.toggle("show");
  });
}

toggleSection("summaryBtn", "summary");
toggleSection("educationBtn", "education");
toggleSection("projectsBtn", "projects");
toggleSection("certificationsBtn", "certifications");
toggleSection("skillsBtn", "skills");
