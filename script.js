(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Year
  if (year) year.textContent = new Date().getFullYear();

  // Theme
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  function updateIcon() {
    const current = root.getAttribute("data-theme") || "dark";
    const icon = toggle?.querySelector(".icon");
    if (icon) icon.textContent = current === "light" ? "☾" : "☀︎";
  }
  updateIcon();

  toggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateIcon();
  });

  // Mobile menu
  menuBtn?.addEventListener("click", () => {
    const isHidden = mobileMenu.hasAttribute("hidden");
    if (isHidden) mobileMenu.removeAttribute("hidden");
    else mobileMenu.setAttribute("hidden", "");
  });

  // Close menu when clicking a link
  mobileMenu?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileMenu.setAttribute("hidden", ""));
  });
})();
