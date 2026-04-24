import { createRouter } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the router
  createRouter();

  // Mobile menu toggle
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
});
