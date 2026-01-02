// Initialize Animate On Scroll (AOS)
AOS.init({
  duration: 1000,
  offset: 120,
  once: true,
  easing: "ease-in-out-cubic",
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

mobileMenuBtn.addEventListener("click", () => {
  toggleMenu();
});

// Close menu when a link is clicked
navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  navLinks.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "auto";
}

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    // Close other open items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
    // Toggle current item
    item.classList.toggle("active");
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = navbar.offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

console.log(
  "%c Cleanwave Homecare ",
  "background: linear-gradient(135deg, #005f99, #00c2cb); color: #fff; padding: 8px 15px; border-radius: 5px; font-weight: bold;"
);
