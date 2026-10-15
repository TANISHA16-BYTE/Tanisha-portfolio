
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile menu open/close
menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

// Menu link click karne par menu close
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Footer mein current year
document.getElementById("year").textContent = new Date().getFullYear();
