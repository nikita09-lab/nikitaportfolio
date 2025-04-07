// theme.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("themeToggle");

  // Check user's saved theme or system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
  }

  // Only attach event listener if button exists
  if (toggleButton) {
    // Set icon on page load
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Update icon
      toggleButton.textContent = isDark ? "☀️" : "🌙";
    });
  }
});
