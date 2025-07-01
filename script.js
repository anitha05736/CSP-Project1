// script.js

// Toggles the website language between English and Telugu
function toggleLanguage() {
  const currentLang = localStorage.getItem("language") || "en";
  const newLang = currentLang === "en" ? "te" : "en";
  localStorage.setItem("language", newLang);
  updateLanguage(newLang);
}

// Updates all elements with data-en / data-te attributes based on selected language
function updateLanguage(lang) {
  // Update all elements with data-en and data-te
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Update toggle button text itself
  const btnText = document.getElementById("lang-btn-text");
  if (btnText) {
    btnText.textContent = lang === "en" ? "Toggle Language" : "భాష మార్చు";
  }
}

// Load language from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  updateLanguage(savedLang);
});