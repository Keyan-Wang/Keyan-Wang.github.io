"use strict";
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
}
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !expanded);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  window.matchMedia("(min-width: 641px)").addEventListener("change", event => {
    if (event.matches) closeMenu();
  });
}
document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = String(new Date().getFullYear());
});
