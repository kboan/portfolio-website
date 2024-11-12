// Function to toggle between light and dark mode
function toggleDarkMode() {
  const body = document.body;
  const toggleIcon = document.getElementById("toggle-icon");

  console.log("toggle");
  console.log(document.body.classList);

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");

  // Update icon and save preference in localStorage
  if (body.classList.contains("dark-mode")) {
    toggleIcon.textContent = "🌜"; // Moon icon for dark mode
    localStorage.setItem("darkMode", "enabled");
  } else {
    toggleIcon.textContent = "🌞"; // Sun icon for light mode
    localStorage.setItem("darkMode", "disabled");
  }
}

// Load saved theme preference on page load
function loadUserThemePreference() {
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  const toggleIcon = document.getElementById("toggle-icon");

  // Apply saved preference
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    toggleIcon.textContent = "🌜";
  } else {
    toggleIcon.textContent = "🌞";
  }
}

// Set up event listener on page load
document.addEventListener("DOMContentLoaded", () => {
  loadUserThemePreference(); // Load saved preference on page load

  // Select the dark mode toggle button
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Ensure the event listener is added only once
  if (darkModeToggle) {
    darkModeToggle.onclick = toggleDarkMode;
  }
});
