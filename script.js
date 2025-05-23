//Use this panel to make your page more interactive!!!
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const sections = document.querySelectorAll(".content");

  function hideAllSections() {
    sections.forEach(section => section.style.display = "none");
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      const isVisible = targetSection.style.display === "block";
      hideAllSections();

      if (!isVisible) {
        targetSection.style.display = "block";
      }
    });
  });
});
