document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleButton.textContent = isDark ? "☀️" : "🌙";
  });

  // Set icon on load
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
