const menuIcon = document.getElementById("menu-icon");
const dropdown = document.getElementById("dropdown-menu");

// Scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Toggle dropdown khi click
menuIcon.addEventListener("click", () => {
    if (dropdown.classList.contains("show")) {
        dropdown.style.maxHeight = null;
        dropdown.classList.remove("show");
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // mở ra
        dropdown.classList.add("show");
    }
});

// Auto remove khi resize về desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 1243) {
        dropdown.style.maxHeight = null;
        dropdown.classList.remove("show");
    }
});
