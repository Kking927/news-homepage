// ==========================================================================
// Core Hamburger Menu Setup
// ==========================================================================
const navToggle = document.querySelector(".nav-toggle");
const toggleImg = document.querySelector(".nav-toggle__img");
const navMenu = document.getElementById("primary-nav");

const menuIcon =
  "https://raw.githubusercontent.com/Kking927/news-homepage/238443ed50a3463be5a0fc3b2723efd7c9aaaff8/images/icon-menu.svg";
const closeIcon =
  "https://raw.githubusercontent.com/Kking927/news-homepage/238443ed50a3463be5a0fc3b2723efd7c9aaaff8/images/icon-menu-close.svg";

// Hamburger click event
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  navToggle.setAttribute("aria-expanded", isOpen);
  toggleImg.src = isOpen ? closeIcon : menuIcon;
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// ==========================================================================
// Categories Dropdown & Universal Click Manager
// ==========================================================================
const dropdownLink = document.querySelector(".nav-menu__item--dropdown > .nav-menu__link");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Handle the "Categories" click directly
dropdownLink.addEventListener("click", (e) => {
  e.preventDefault(); 
  e.stopPropagation(); // Stops the click from instantly firing the "click away" logic below
  
  const isExpanded = dropdownMenu.classList.toggle("is-active");
  dropdownLink.setAttribute("aria-expanded", isExpanded);
});

// Universal Click Listener to handle closing the menu
document.addEventListener("click", (e) => {
  // Scenario A: Clicked inside the dropdown menu box (like on a sub-link)
  // Scenario B: Clicked completely outside of both the link and the dropdown box
  if (dropdownMenu.contains(e.target) || !dropdownLink.contains(e.target)) {
    dropdownMenu.classList.remove("is-active");
    dropdownLink.setAttribute("aria-expanded", "false");
  }
});

// ==========================================================================
// Auto-close Mobile Hamburger Overlay Drawer on Link Selection
// ==========================================================================
const navLinks = document.querySelectorAll(".nav-menu__link:not(.nav-menu__item--dropdown > .nav-menu__link), .dropdown-menu__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    toggleImg.src = menuIcon;
    navToggle.setAttribute("aria-label", "Open navigation menu");
  });
});
