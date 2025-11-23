document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const menu = toggle.nextElementSibling;
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
});


    const links = document.querySelectorAll('#navbar a');
    const current = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const href = link.getAttribute('href');

        // Marca el activo según la página actual
        if (href === current) {
            link.classList.add('active');
        }
    });