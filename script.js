// ==========================================================================
// Core Hamburger Menu Setup
// ==========================================================================
const navToggle = document.querySelector(".nav-toggle");
const toggleImg = document.querySelector(".nav-toggle__img");
const navMenu = document.getElementById("primary-nav");

// Verified asset URLs from the project repository
const menuIcon =
  "https://raw.githubusercontent.com/Kking927/news-homepage/238443ed50a3463be5a0fc3b2723efd7c9aaaff8/images/icon-menu.svg";

const closeIcon =
  "https://raw.githubusercontent.com/Kking927/news-homepage/238443ed50a3463be5a0fc3b2723efd7c9aaaff8/images/icon-menu-close.svg";

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  // Update ARIA states for accessibility
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  // Swap the hamburger icon image to the 'X' close icon and vice versa
  toggleImg.src = isOpen ? closeIcon : menuIcon;
});

// ==========================================================================
// Categories Dropdown Menu
// ==========================================================================
const dropdownItem = document.querySelector(".nav-menu__item--dropdown");

if (dropdownItem) {
  const dropdownLink = dropdownItem.querySelector(".nav-menu__link");

  dropdownLink.addEventListener("click", (e) => {
    // Prevent default anchor behavior and stop event bubbling
    e.preventDefault();
    e.stopPropagation();

    const isExpanded = dropdownItem.classList.toggle("is-active");
    dropdownLink.setAttribute("aria-expanded", isExpanded);
  });

  // Close the dropdown cleanly if a user clicks anywhere else on the screen
  document.addEventListener("click", (e) => {
    if (!dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove("is-active");
      dropdownLink.setAttribute("aria-expanded", "false");
    }
  });
}

// ==========================================================================
// Auto-Close Mobile Menu on Navigation Link Click
// ==========================================================================
const navLinks = document.querySelectorAll(
  ".nav-menu__link:not(.nav-menu__link--dropdown), .dropdown-menu__link"
);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the drawer
    navMenu.classList.remove("is-open");

    // Reset layout attributes back to closed state defaults
    navToggle.setAttribute("aria-expanded", "false");
    toggleImg.src = menuIcon;
    navToggle.setAttribute("aria-label", "Open navigation menu");
  });
});
