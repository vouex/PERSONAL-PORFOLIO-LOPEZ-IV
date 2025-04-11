document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav"); // Ensure this targets the <nav> element
    const burger = document.querySelector(".menu-burger");

    // Toggle navbar visibility
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show"); // Add or remove the 'show' class
        const isExpanded = navbar.classList.contains("show");
        burger.setAttribute("aria-expanded", isExpanded); // Update ARIA attribute for accessibility
    });
});
