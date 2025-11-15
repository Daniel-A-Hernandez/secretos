document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const menu = toggle.nextElementSibling;
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
});
